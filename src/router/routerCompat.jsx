import React, {
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const RouterContext = createContext(null);
const RouteMatchContext = createContext({ params: {} });
const OutletContext = createContext(null);

const getBrowserLocation = () => ({
  pathname: window.location.pathname || "/",
  search: window.location.search || "",
  hash: window.location.hash || "",
});

const normalizePath = (path) => {
  const [pathWithoutHash, hash = ""] = String(path).split("#");
  const [pathname, search = ""] = pathWithoutHash.split("?");
  const normalizedPathname = `/${pathname}`
    .replace(/\/+/g, "/")
    .replace(/\/$/, "");

  const cleanPathname = normalizedPathname === "" ? "/" : normalizedPathname;
  const cleanSearch = search ? `?${search}` : "";
  const cleanHash = hash ? `#${hash}` : "";

  return `${cleanPathname}${cleanSearch}${cleanHash}`;
};

const resolveTo = (to, currentPathname = "/") => {
  if (!to) {
    return currentPathname;
  }

  const path = String(to);

  if (/^[a-z][a-z0-9+.-]*:/i.test(path)) {
    return path;
  }

  if (path.startsWith("#")) {
    return `${currentPathname}${path}`;
  }

  if (path.startsWith("/")) {
    return normalizePath(path);
  }

  const basePath = currentPathname.endsWith("/")
    ? currentPathname
    : `${currentPathname}/`;

  return normalizePath(`${basePath}${path}`);
};

export const BrowserRouter = ({ children }) => {
  const [location, setLocation] = useState(getBrowserLocation);

  useEffect(() => {
    const handlePopState = () => setLocation(getBrowserLocation());
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback(
    (to, options = {}) => {
      if (typeof to === "number") {
        window.history.go(to);
        return;
      }

      const nextPath = resolveTo(to, location.pathname);

      if (/^[a-z][a-z0-9+.-]*:/i.test(nextPath)) {
        window.location.assign(nextPath);
        return;
      }

      if (options.replace) {
        window.history.replaceState(null, "", nextPath);
      } else {
        window.history.pushState(null, "", nextPath);
      }

      setLocation(getBrowserLocation());
    },
    [location.pathname],
  );

  const value = useMemo(() => ({ location, navigate }), [location, navigate]);

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};

export const Route = () => null;

const toRouteArray = (children) =>
  React.Children.toArray(children).filter(isValidElement);

const joinPaths = (paths) => {
  const joined = paths
    .filter((path) => path !== undefined && path !== null)
    .map((path) => String(path).replace(/^\/+|\/+$/g, ""))
    .filter(Boolean)
    .join("/");

  return joined ? `/${joined}` : "/";
};

const getPathSegments = (path) =>
  path
    .replace(/^\/+|\/+$/g, "")
    .split("/")
    .filter(Boolean);

const scorePattern = (pattern) =>
  getPathSegments(pattern).reduce((score, segment) => {
    if (segment === "*") {
      return score - 1000;
    }

    if (segment.startsWith(":")) {
      return score + 3;
    }

    return score + 10;
  }, 0);

const flattenRoutes = (children, parentPaths = [], parentElements = []) => {
  const branches = [];

  toRouteArray(children).forEach((child) => {
    const paths = [...parentPaths, child.props.path || ""];
    const elements = [...parentElements, child.props.element];
    const childRoutes = toRouteArray(child.props.children);

    if (childRoutes.length > 0) {
      branches.push(...flattenRoutes(child.props.children, paths, elements));
      return;
    }

    branches.push({
      elements,
      pattern: joinPaths(paths),
    });
  });

  return branches;
};

const matchPattern = (pattern, pathname) => {
  if (pattern === "*" || pattern === "/*") {
    return {};
  }

  const patternSegments = getPathSegments(pattern);
  const pathSegments = getPathSegments(pathname);

  if (patternSegments.length !== pathSegments.length) {
    return null;
  }

  return patternSegments.reduce((params, segment, index) => {
    if (params === null) {
      return null;
    }

    const pathSegment = pathSegments[index];

    if (segment.startsWith(":")) {
      return {
        ...params,
        [segment.slice(1)]: decodeURIComponent(pathSegment),
      };
    }

    return segment === pathSegment ? params : null;
  }, {});
};

const renderBranch = ({ elements, params }) =>
  elements.reduceRight((outlet, element) => {
    if (!element) {
      return outlet;
    }

    return (
      <RouteMatchContext.Provider value={{ params }}>
        <OutletContext.Provider value={outlet}>
          {element}
        </OutletContext.Provider>
      </RouteMatchContext.Provider>
    );
  }, null);

export const Routes = ({ children }) => {
  const { location } = useContext(RouterContext);
  const branches = useMemo(
    () =>
      flattenRoutes(children)
        .map((branch, index) => ({
          ...branch,
          index,
          score: scorePattern(branch.pattern),
        }))
        .sort((first, second) => second.score - first.score || first.index - second.index),
    [children],
  );

  const matchedBranch = branches.find((branch) => {
    const params = matchPattern(branch.pattern, location.pathname);

    if (params === null) {
      return false;
    }

    branch.params = params;
    return true;
  });

  return matchedBranch ? renderBranch(matchedBranch) : null;
};

export const Outlet = () => useContext(OutletContext);

export const Link = ({ to, replace = false, onClick, target, ...props }) => {
  const { location, navigate } = useContext(RouterContext);
  const href = resolveTo(to, location.pathname);
  const isExternal = /^[a-z][a-z0-9+.-]*:/i.test(href);

  const handleClick = (event) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      target ||
      isExternal ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    event.preventDefault();
    navigate(href, { replace });
  };

  return <a href={href} target={target} onClick={handleClick} {...props} />;
};

export const useLocation = () => {
  const context = useContext(RouterContext);

  return context.location;
};

export const useParams = () => {
  const { params } = useContext(RouteMatchContext);

  return params;
};

export const useNavigate = () => {
  const { navigate } = useContext(RouterContext);

  return navigate;
};

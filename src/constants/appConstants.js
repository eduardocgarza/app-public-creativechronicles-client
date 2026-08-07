const appModes = {
  development: "development",
  local: "local",
  production: "production",
}

export const BASE_DOMAIN = import.meta.env.VITE_BASE_DOMAIN || "creativechronicles.garza.ca";

function createProductionBaseURL(subdomain) {
  const hostname = subdomain ? `${subdomain}.${BASE_DOMAIN}` : BASE_DOMAIN;
  return `https://${hostname}`;
}

export const PRODUCTION_PUBLIC_SITE_BASE_URL = createProductionBaseURL();
export const PRODUCTION_API_BASE_URL = createProductionBaseURL("api");

/**
 * @Client
 */
export const APP_CLIENT_ENV = import.meta.env.VITE_APP_ENV || import.meta.env.MODE || appModes.development;

/**
 * @Server (API)
 */
export const DEV_BASE_URL = "http://localhost:5000";
export const PROD_BASE_URL = PRODUCTION_API_BASE_URL;
export const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || (APP_CLIENT_ENV === appModes.production ? PROD_BASE_URL : DEV_BASE_URL);

export const PUBLIC_SITE_BASE_URL =
  import.meta.env.VITE_PUBLIC_SITE_BASE_URL ||
  (APP_CLIENT_ENV === appModes.production ? PRODUCTION_PUBLIC_SITE_BASE_URL : "http://localhost:5173");

export const GOOGLE_ANALYTICS_MEASUREMENT_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID || "";

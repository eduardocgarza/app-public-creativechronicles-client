import React from "react";
import { Link } from "react-router-dom";
import creativeChroniclesLogo from "../../assets/creativeChroniclesLogo.png";

export default function TopNavigation() {
  const navStyle =
    "flex items-center justify-center flex-col py-1 text-gray-600 hover:text-gray-900 text-sm mx-3 transition duration-250";

  return (
    <nav className="z-[20] fixed top-0 left-0 min-h-[60px] max-h-[60px] h-[60px] w-full bg-white border-b border-b-gray-300 px-4">
      <div className="container mx-auto h-full flex justify-between items-center">
        <section className="flex items-center">
          <Link className={navStyle} to="/">
            <img
              src={creativeChroniclesLogo}
              alt="Creative Chronicles"
              className="block w-[35px] h-[35px]"
            />
          </Link>
          <Link className={navStyle} to="/companies">
            <span className="block">Companies</span>
          </Link>
          <Link className={navStyle} to="/people">
            <span className="block">People</span>
          </Link>
          <Link className={navStyle} to="/products">
            <span className="block">Products</span>
          </Link>
        </section>
        {/* <section className="flex items-center">
          <Link className={navStyle} to="/login">
            <span className="block">Login</span>
          </Link>
          <Link className={navStyle} to="/signup">
            <span className="block">Signup</span>
          </Link>
        </section> */}
      </div>
    </nav>
  );
}

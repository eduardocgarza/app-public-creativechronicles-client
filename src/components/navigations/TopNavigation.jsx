import React from "react";
import { Link } from "react-router-dom";

export default function TopNavigation() {
  const navStyle =
    "flex items-center justify-center flex-col py-1 text-gray-600 hover:text-gray-900 text-xs mx-3";

  return (
    <nav className="z-[10] fixed top-0 left-0 min-h-[50px] max-h-[50px] h-[50px] w-full bg-white border-b border-b-gray-300 px-4 py-1">
      <div className="container mx-auto h-full flex items-center justify-center">
        <section className="flex items-center">
          <Link className={navStyle} to="/">
            <span className="block">Home</span>
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
      </div>
    </nav>
  );
}

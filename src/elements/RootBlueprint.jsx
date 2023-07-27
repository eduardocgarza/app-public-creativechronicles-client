import React from "react";
import { Outlet } from "react-router-dom";
import TopNavigation from "../components/navigations/TopNavigation";

export default function RootBlueprint() {
  return (
    <section className="bg-gray-100">
      <TopNavigation />
      <section className="bg-gray-100 relative top-[50px] min-h-screen">
        <Outlet />
      </section>
    </section>
  );
}

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import RootBlueprint from "../elements/RootBlueprint";
import CompaniesPage from "../pages/Companies/CompaniesPage/CompaniesPage";
import CompanyItemPage from "../pages/Companies/CompanyItemPage/CompanyItemPage";
import PeoplePage from "../pages/People/PeoplePage/PeoplePage";
import PersonItemPage from "../pages/People/PersonItemPage/PersonItemPage";
import ProductsPage from "../pages/Products/ProductsPage/ProductsPage";
import ProductItemPage from "../pages/Products/ProductItemPage/ProductItemPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootBlueprint />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      /**
       * @Companies
       */
      {
        path: "companies",
        element: <CompaniesPage />,
      },
      {
        path: "companies/:companyUsername",
        element: <CompanyItemPage />,
      },
      /**
       * @People
       */
      {
        path: "people",
        element: <PeoplePage />,
      },
      {
        path: "people/:personUsername",
        element: <PersonItemPage />,
      },
      /**
       * @Products
       */
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productUsername",
        element: <ProductItemPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default AppRouter;

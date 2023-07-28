import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import RootBlueprint from "../elements/RootBlueprint";
import CompaniesPage from "../pages/Companies/CompaniesPage/CompaniesPage";
import CompanyItemPage from "../pages/Companies/CompanyItemPage/CompanyItemPage";
import PeoplePage from "../pages/People/PeoplePage/PeoplePage";
import PersonItemPage from "../pages/People/PersonItemPage/PersonItemPage";
import ProductsPage from "../pages/Products/ProductsPage/ProductsPage";
import ProductItemPage from "../pages/Products/ProductItemPage/components/ProductItemPage";
import ScrollToTop from "../helpers/ScrollToTop";

const AppRouter = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<RootBlueprint />}>
        <Route path="/" element={<HomePage />} />
        {/* Companies */}
        <Route path="companies" element={<CompaniesPage />} />
        <Route
          path="companies/:companyUsername"
          element={<CompanyItemPage />}
        />
        {/* People */}
        <Route path="people" element={<PeoplePage />} />
        <Route path="people/:personUsername" element={<PersonItemPage />} />
        {/* Products */}
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productUsername" element={<ProductItemPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;

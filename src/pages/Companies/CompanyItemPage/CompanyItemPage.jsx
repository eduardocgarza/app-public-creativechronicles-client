import React from "react";
import CompanyItemHeader from "./components/CompanyItemHeader";
import CompanyItemProducts from "./components/CompanyItemProducts";
import CompanyItemPeople from "./components/CompanyItemPeople";
import { useParams } from "react-router-dom";

export default function CompanyItemPage() {
  const { companyUsername } = useParams();
  
  return (
    <section className="p-10">
      <div className="container mx-auto">
        <CompanyItemHeader />
        <CompanyItemPeople />
        <CompanyItemProducts />
      </div>
    </section>
  );
}

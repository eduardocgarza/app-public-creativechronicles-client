import React, { useEffect, useState } from "react";
import CompanyItemHeader from "./components/CompanyItemHeader";
import CompanyItemProducts from "./components/CompanyItemProducts";
import CompanyItemPeople from "./components/CompanyItemPeople";
import { useParams } from "react-router-dom";
import useAppContext from "../../../state/AppContext";

export default function CompanyItemPage() {
  const [companyResource, setCompanyResource] = useState(null);
  /**
   * @Hooks
   */
  const { companyUsername } = useParams();

  const appContext = useAppContext();
  const { companiesEntity } = appContext;
  const { fetchCompanyItem } = companiesEntity;

  async function fetchCompany() {
    const companyResource = await fetchCompanyItem(companyUsername);
    setCompanyResource(companyResource);
  }

  useEffect(() => {
    fetchCompany();
  }, []);

  if (!companyResource) return null;

  return (
    <section className="p-10">
      <div className="container mx-auto">
        <CompanyItemHeader companyResource={companyResource} />
        <CompanyItemPeople companyResource={companyResource} />
        <CompanyItemProducts companyResource={companyResource} />
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import FeaturedSection from "../../../components/general/FeaturedSection";
import useAppContext from "../../../state/AppContext";

export default function CompaniesPage() {
  const [companies, setCompanies] = useState(null);

  const { companiesEntity } = useAppContext();
  const { companyObjects } = companiesEntity;

  useEffect(() => {
    const companies = companyObjects.map((companyObject) => ({
      id: companyObject.company.companyID,
      name: companyObject.company.companyName,
      username: companyObject.company.companyUsername,
      profilePictureURL: companyObject.company.profilePictureURL,
    }));
    setCompanies(companies);
  }, [companyObjects]);

  return (
    <section className="p-10">
      <div className="container mx-auto">
        <FeaturedSection
          sectionTitle="Companies"
          sectionItems={companies}
          baseRoute="/companies"
        />
      </div>
    </section>
  );
}

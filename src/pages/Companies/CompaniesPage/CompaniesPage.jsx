import React from "react";
import FeaturedSection from "../../../components/general/FeaturedSection";
import { companies } from "../../../constants/fakeData";

export default function CompaniesPage() {
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

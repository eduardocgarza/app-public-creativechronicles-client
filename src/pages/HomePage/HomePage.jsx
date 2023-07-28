import React from "react";
import FeaturedSection from "../../components/general/FeaturedSection";
import { companies, people, products } from "../../constants/fakeData";

export default function HomePage() {
  return (
    <section className="p-10">
      <div className="container mx-auto">
        <FeaturedSection
          sectionTitle="Companies"
          sectionItems={companies}
          baseRoute="/companies"
        />
        <FeaturedSection
          sectionTitle="People"
          sectionItems={people}
          baseRoute="/people"
        />
        <FeaturedSection
          sectionTitle="Products"
          sectionItems={products}
          baseRoute="/products"
        />
      </div>
    </section>
  );
}

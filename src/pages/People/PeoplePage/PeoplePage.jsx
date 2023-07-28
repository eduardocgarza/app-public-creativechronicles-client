import React from "react";
import FeaturedSection from "../../../components/general/FeaturedSection";
import { people } from "../../../constants/fakeData";

export default function PeoplePage() {
  return (
    <section className="p-10">
      <div className="container mx-auto">
        <FeaturedSection
          sectionTitle="People"
          sectionItems={people}
          baseRoute="/people"
        />
      </div>
    </section>
  );
}

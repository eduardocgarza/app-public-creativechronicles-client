import React, { useEffect, useState } from "react";
import FeaturedSection from "../../../components/general/FeaturedSection";
import useAppContext from "../../../state/AppContext";

export default function PeoplePage() {
  const [people, setPeople] = useState(null);

  const { peopleEntity } = useAppContext();
  const { personObjects } = peopleEntity;

  useEffect(() => {
    const people = personObjects.map((personObject) => {
      const personName = `${personObject.person.firstName} ${personObject.person.lastName}`;
      return {
        id: personObject.person.personID,
        name: personName,
        username: personObject.person.personUsername,
        profilePictureURL: personObject.person.profilePictureURL,
      };
    });
    setPeople(people);
  }, [personObjects]);

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

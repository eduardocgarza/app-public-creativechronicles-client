import React from "react";
import PersonItemExternalLinks from "./PersonItemExternalLinks";
import TagItem from "../../../../../components/general/TagItem";

import bezos from "../../../../../assets/bezos.png";

export default function PersonItemHeader(props) {
  const { personResource } = props;
  const { types } = personResource.person;
  const {
    personID,
    personUsername,
    firstName,
    middleName,
    lastName,
    profilePictureURL,
  } = personResource.person.person;

  const personName = `${firstName} ${lastName}`;

  return (
    <header className="bg-white p-10 rounded-[30px] mb-6 flex shadow-md blur-2 text-opacity-15 spread-0">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
        <img
          className="block object-cover h-full w-full"
          src={profilePictureURL}
          alt={personID}
        />
      </div>
      <div className="ml-6 flex-1">
        <header className="flex">
          <div className="flex-1">
            <h2 className="text-3xl font-medium mb-6">{personName}</h2>
            <section className="mb-6">
              <div className="flex text-sm mb-2">
                <h3 className="font-bold w-[150px]">Born</h3>
                <p className="opacity-75">July 5, 1994</p>
              </div>
              <div className="flex text-sm mb-2">
                <h3 className="font-bold w-[150px]">Residence</h3>
                <p className="opacity-75">Bellevue, Washington</p>
              </div>
            </section>
            <footer>
              {types.map((personType) => (
                <TagItem
                  key={personType.id}
                  name={personType.name}
                  backgroundColor={personType.backgroundColor}
                  textColor={personType.textColor}
                />
              ))}
            </footer>
          </div>
          <PersonItemExternalLinks />
        </header>
      </div>
    </header>
  );
}

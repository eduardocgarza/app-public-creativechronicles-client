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
    dateBirth,
    locationBirth,
    locationMainResidence,
  } = personResource.person.person;

  const personName = `${firstName} ${lastName}`;

  return (
    <header className="bg-white p-10 rounded-[30px] mb-6 flex flex-col md:flex-row items-start shadow-md blur-2 text-opacity-15 spread-0">
      <div className="block w-[150px] h-[150px] rounded-full overflow-hidden mb-10 md:mb-0 mt-2 mx-auto">
        <img
          className="block object-cover h-full w-full"
          src={profilePictureURL}
          alt={personID}
        />
      </div>
      <div className="flex-1 md:ml-6 w-full">
        <header className="flex">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-medium mb-6">{personName}</h2>
            <section className="mb-6">
              {dateBirth && (
                <div className="flex flex-col md:flex-row text-sm mb-4 md:mb-2">
                  <h3 className="mb-2 md:mb-0 font-bold md:w-[150px]">Born</h3>
                  <p className="opacity-75">{dateBirth}</p>
                </div>
              )}
              {locationMainResidence && (
                <div className="flex flex-col md:flex-row text-sm mb-4 md:mb-2">
                  <h3 className="mb-2 md:mb-0 font-bold md:w-[150px]">
                    Residence
                  </h3>
                  <p className="opacity-75">{locationMainResidence}</p>
                </div>
              )}
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
        </header>
      </div>
    </header>
  );
}

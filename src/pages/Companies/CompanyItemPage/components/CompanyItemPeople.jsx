import React from "react";
import CompanyPersonRoleItem from "../../../../components/general/CompanyPersonRoleItem";
import { Link } from "react-router-dom";

export default function CompanyItemPeople(props) {
  const { companyResource } = props;
  const { people } = companyResource;

  return (
    <section className="bg-white p-10 rounded-[30px] mb-6 shadow-md blur-2 text-opacity-15 spread-0">
      <header className="mb-4">
        <h2 className="text-2xl font-bold mb-6">People</h2>
      </header>
      {people.map((personResource) => {
        const { firstName, lastName } = personResource.person.person;
        const personName = `${firstName} ${lastName}`;
        const personRoute = `/people/${personResource.person.person.personUsername}`;

        return (
          <section className="mb-10">
            <header className="mb-6">
              <Link className="flex items-center" to={personRoute}>
                {personResource.person.person.profilePictureURL && (
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden mr-2">
                    <img
                      src={personResource.person.person.profilePictureURL}
                      alt={personName}
                      className="block object-center object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="ml-2">
                  <h4 className="text-xs opacity-50">Individual</h4>
                  <h3 className="font-bold text-xl text-md">{personName}</h3>
                </div>
              </Link>
            </header>
            <section className="pl-10">
              {personResource.roles.map((roleResource) => {
                return (
                  <CompanyPersonRoleItem
                    key={roleResource.roleID}
                    roleResource={roleResource}
                  />
                );
              })}
            </section>
          </section>
        );
      })}
    </section>
  );
}

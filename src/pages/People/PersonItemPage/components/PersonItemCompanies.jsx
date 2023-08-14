import React from "react";
import { Link } from "react-router-dom";
import CompanyPersonRoleItem from "../../../../components/general/CompanyPersonRoleItem";

export default function PersonItemCompanies(props) {
  const { personResource, mainMode } = props;
  const { companies } = personResource;
  if (!mainMode) return null;

  return (
    <section className="bg-white p-10 rounded-[30px] mb-6 shadow-md blur-2 text-opacity-15 spread-0">
      <header className="mb-4">
        <h2 className="text-2xl font-bold mb-6">Companies</h2>
      </header>
      {companies &&
        companies.map((companyResource) => {
          const companyRoute = `/companies/${companyResource.company.company.companyUsername}`;

          return (
            <section className="mb-10">
              <header className="mb-6">
                <Link className="flex items-center" to={companyRoute}>
                  {companyResource.company.company.profilePictureURL && (
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden mr-2">
                      <img
                        src={companyResource.company.company.profilePictureURL}
                        alt={companyResource.company.company.companyName}
                        className="block object-center object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="ml-2">
                    <h4 className="text-xs opacity-50">Individual</h4>
                    <h3 className="font-bold text-xl text-md">
                      {companyResource.company.company.companyName}
                    </h3>
                  </div>
                </Link>
              </header>
              <section className="pl-10">
                {companyResource.roles.map((roleResource) => {
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

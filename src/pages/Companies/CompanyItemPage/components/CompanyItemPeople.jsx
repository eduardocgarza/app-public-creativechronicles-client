import React from "react";
import { peopleTableHeaderColumns } from "../helpers/peopleTableHeaderColumns";

export default function CompanyItemPeople(props) {
  const { companyResource } = props;
  const { people } = companyResource;

  return (
    <section className="bg-white p-10 rounded-[30px] mb-6 shadow-md blur-2 text-opacity-15 spread-0">
      <header className="mb-4">
        <h2 className="text-2xl font-bold mb-6">People</h2>
      </header>
      {people.map((personResource) => (
        <section className="mb-6">
          <header className="mb-4 flex items-center">
            <div className="w-[75px] h-[75px] overflow-hidden rounded-full">
              <img
                src={personResource.person.person.profilePictureURL}
                alt=""
                className="block object-cover h-full w-full"
              />
            </div>
            <div className="ml-4">
              <h4 className="text-xs opacity-50 mb-1">Individual</h4>
              <h3 className="font-bold text-xl opacity-[85%]">
                {personResource.person.person.firstName}
              </h3>
            </div>
          </header>
          <section className="">
            <table className="w-full text-left text-sm text-black opacity-[90%]">
              <thead className="border-b border-b-gray-200">
                <tr>
                  {peopleTableHeaderColumns.map((column) => (
                    <th
                      scope="col"
                      className="px-6 py-3"
                      style={{ width: column.width }}
                    >
                      {column.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {personResource.roles.map((roleResource) => (
                  <tr
                    className="border-b bg-white hover:bg-gray-50 cursor-pointer transition duration-250 ease-in-out"
                    key={roleResource.roleID}
                  >
                    <td className="px-6 py-2">{roleResource.roleName}</td>
                    <td className="px-6 py-2">{roleResource.dateStart}</td>
                    <td className="px-6 py-2">{roleResource.dateEnd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
      ))}
    </section>
  );
}

import React from "react";
import { peopleTableHeaderColumns } from "../helpers/peopleTableHeaderColumns";

import bezos from "../../../../assets/bezos.png";

export default function CompanyItemPeople() {
  return (
    <section className="bg-white p-10 rounded-[30px] mb-6 shadow-md blur-2 text-opacity-15 spread-0">
      <header className="mb-4">
        <h2 className="text-2xl font-bold mb-6">People</h2>
      </header>
      <section className="mb-6">
        <header className="mb-4 flex items-center">
          <div className="w-[75px] h-[75px] overflow-hidden rounded-full">
            <img src={bezos} alt="" className="block" />
          </div>
          <div className="ml-4">
            <h4 className="text-xs opacity-50 mb-1">Individual</h4>
            <h3 className="font-bold text-xl opacity-[85%]">Jeff Bezos</h3>
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
              <tr className="border-b bg-white hover:bg-gray-50 cursor-pointer transition duration-250 ease-in-out">
                <td className="px-6 py-2">CEO</td>
                <td className="px-6 py-2">2020</td>
                <td className="px-6 py-2">2023</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </section>
  );
}

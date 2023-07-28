import React from "react";
import PersonItemExternalLinks from "./PersonItemExternalLinks";
import PersonTagItem from "./PersonTagItem";

import bezos from "../../../../../assets/bezos.png";

export default function PersonItemHeader(props) {
  const { person } = props;
  const { personTypes } = person;

  return (
    <header className="bg-white p-10 rounded-[30px] mb-6 flex shadow-md blur-2 text-opacity-15 spread-0">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
        <img className="block" src={bezos} alt="" />
      </div>
      <div className="ml-6 flex-1">
        <header className="flex">
          <div className="flex-1">
            <h2 className="text-3xl font-medium mb-6">Jeff Bezos</h2>
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
              {personTypes.map((personType) => (
                <PersonTagItem
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

import React from "react";
import TagItem from "../../../../components/general/TagItem";
import CompanyItemExternalLinks from "./CompanyItemExternalLinks";

import airbnbLogo from "../../../../assets/airbnbLogo.png";

export default function CompanyItemHeader() {
  const companyCategories = [
    {
      id: 1,
      name: "E-Commerce",
      backgroundColor: "#FF220C",
      textColor: "#FFF",
    },
    {
      id: 2,
      name: "Cloud Computing",
      backgroundColor: "#1C1F33",
      textColor: "#FFF",
    },
    {
      id: 3,
      name: "Digital Content",
      backgroundColor: "#29339B",
      textColor: "#FFF",
    },
  ];

  const companyTypes = [
    {
      id: 1,
      name: "Public",
      backgroundColor: "#FF220C",
      textColor: "#FFF",
    },
    {
      id: 2,
      name: "Private",
      backgroundColor: "#1C1F33",
      textColor: "#FFF",
    },
  ];

  return (
    <header className="bg-white p-10 rounded-[30px] mb-6 flex shadow-md blur-2 text-opacity-15 spread-0">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
        <img className="block" src={airbnbLogo} alt="" />
      </div>
      <div className="flex-1 ml-6">
        <header className="flex">
          <div className="flex-1">
            <h2 className="text-3xl font-medium mb-6">Amazon</h2>
            <section className="mb-6">
              <div className="flex text-sm mb-2">
                <h3 className="font-bold w-[150px]">Founded</h3>
                <p className="opacity-75">July 5, 1994</p>
              </div>
              <div className="flex text-sm mb-2">
                <h3 className="font-bold w-[150px]">Founded in</h3>
                <p className="opacity-75">Bellevue, Washington</p>
              </div>
              <div className="flex text-sm mb-2">
                <h3 className="font-bold w-[150px]">Headquarters</h3>
                <p className="opacity-75">Seattle, Washington</p>
              </div>
            </section>

            <footer>
              <section className="mb-1">
                {companyCategories.map((categoryItem) => (
                  <TagItem
                    key={categoryItem.id}
                    name={categoryItem.name}
                    backgroundColor={categoryItem.backgroundColor}
                    textColor={categoryItem.textColor}
                  />
                ))}
              </section>
              <section className="mb-4">
                {companyTypes.map((typeItem) => (
                  <TagItem
                    key={typeItem.id}
                    name={typeItem.name}
                    backgroundColor={typeItem.backgroundColor}
                    textColor={typeItem.textColor}
                  />
                ))}
              </section>
            </footer>
          </div>
          <CompanyItemExternalLinks />
        </header>
      </div>
    </header>
  );
}

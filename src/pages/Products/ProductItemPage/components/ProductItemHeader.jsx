import React from "react";
import TagItem from "../../../../components/general/TagItem";
import ProductItemExternalLinks from "./ProductItemExternalLinks";

import airbnbLogo from "../../../../assets/airbnbLogo.png";

export default function ProductItemHeader() {
  const productCategories = [
    {
      id: 1,
      name: "E-Commerce",
      backgroundColor: "#FF220C",
      textColor: "#FFF",
    },
    {
      id: 2,
      name: "Cloud Computing",
      backgroundColor: "#FF220C",
      textColor: "#FFF",
    },
    {
      id: 3,
      name: "Digital Content",
      backgroundColor: "#FF220C",
      textColor: "#FFF",
    },
  ];

  return (
    <header className="bg-white p-10 rounded-[30px] flex mb-6 shadow-md blur-2 text-opacity-15 spread-0">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
        <img className="block" src={airbnbLogo} alt="" />
      </div>
      <div className="flex-1 ml-6">
        <header className="flex">
          <div className="flex-1">
            <h2 className="text-3xl font-medium mb-6">Amazon Prime</h2>
            <section className="mb-6">
              <div className="flex text-sm mb-2">
                <h3 className="font-bold w-[150px]">Launched on</h3>
                <p className="opacity-75">July 5, 1994</p>
              </div>
            </section>
            <footer>
              {productCategories.map((companyType) => (
                <TagItem
                  key={companyType.id}
                  name={companyType.name}
                  backgroundColor={companyType.backgroundColor}
                  textColor={companyType.textColor}
                />
              ))}
            </footer>
          </div>
          <ProductItemExternalLinks />
        </header>
      </div>
    </header>
  );
}

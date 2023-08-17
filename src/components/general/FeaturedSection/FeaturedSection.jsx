import React from "react";
import { Link } from "react-router-dom";
import EntityItem from "../EntityItem";
import { GridContainer } from "./GridContainer";

export default function FeaturedSection(props) {
  const { sectionTitle, sectionItems, baseRoute } = props;
  return (
    <section className="mb-10">
      <header className="px-4 text-center lg:text-left mb-4 flex flex-col justify-center items-center md:flex-row md:justify-start">
        <h2 className="text-2xl font-bold mb-2 md:mb-0 md:mr-2">
          {sectionTitle}
        </h2>
        <Link to={baseRoute} className="text-xs text-blue-600">
          View all
        </Link>
      </header>
      <GridContainer>
        {sectionItems &&
          sectionItems.map((entityItem) => (
            <EntityItem
              key={entityItem.username}
              entityItem={entityItem}
              baseRoute={baseRoute}
            />
          ))}
      </GridContainer>
    </section>
  );
}

import React from "react"
import { Link } from "react-router-dom";

import airbnbLogo from "../../assets/airbnbLogo.png";

export default function FeaturedSection(props) {
  const { sectionTitle, sectionItems, baseRoute } = props;
  return (
    <section className="mb-10">
      <header className="mb-4 flex items-center">
        <h2 className="text-2xl font-bold mr-2">{sectionTitle}</h2>
        <Link to={baseRoute} className="text-xs text-blue-600">
          View all
        </Link>
      </header>
      <section className="flex flex-wrap">
        {sectionItems.map((entityItem) => {
          const route = `${baseRoute}/${entityItem.username}`;
          return (
            <Link
              to={route}
              id={entityItem.id}
              className="m-2 flex flex-col items-center justify-center"
            >
              <div className="w-[75px] h-[75px] rounded-full overflow-hidden mb-2">
                <img src={airbnbLogo} alt="" className="block" />
              </div>
              <h3 className="text-xs opacity-[75%]">{entityItem.name}</h3>
            </Link>
          );
        })}
      </section>
    </section>
  );
}
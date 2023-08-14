import React from "react";
import { Link } from "react-router-dom";

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
        {sectionItems &&
          sectionItems.map((entityItem) => {
            const route = `${baseRoute}/${entityItem.username}`;
            return (
              <Link
                to={route}
                id={entityItem.id}
                className="flex flex-col items-center justify-center w-[100px] max-w-[100px] h-[120px] max-h-[120px] mb-6 text-center"
              >
                <div className="block w-[75px] min-w-[75px] h-[75px] min-h-[75px] rounded-full overflow-hidden mb-2">
                  {entityItem.profilePictureURL ? (
                    <img
                      src={entityItem.profilePictureURL}
                      alt={entityItem.name}
                      className="block object-cover h-full w-full"
                    />
                  ) : (
                    <div className="block h-full w-full bg-[#111]" />
                  )}
                </div>
                <h3 className="flex-1 text-xs opacity-[75%]">
                  {entityItem.name}
                </h3>
              </Link>
            );
          })}
      </section>
    </section>
  );
}

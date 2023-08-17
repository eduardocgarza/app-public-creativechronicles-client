import React from "react";
import TagItem from "../../../../components/general/TagItem";
import CompanyItemExternalLinks from "./CompanyItemExternalLinks";

export default function CompanyItemHeader(props) {
  const { companyResource } = props;

  /**
   * @Conditional
   */
  if (!companyResource && !companyResource.company) return null;

  const { categories, types } = companyResource.company;
  const {
    companyID,
    companyName,
    companyUsername,
    companyDescription,
    companyTags,
    companyExternalLinks,
    profilePictureURL,
    dateFounded,
    locationFounded,
    locationHeadquarters,
  } = companyResource.company.company;

  return (
    <header className="bg-white p-10 rounded-[30px] mb-6 flex flex-col md:flex-row items-start shadow-md blur-2 text-opacity-15 spread-0">
      <div className="block w-[150px] h-[150px] rounded-3xl overflow-hidden mb-10 md:mb-0 mt-2 mx-auto">
        <img
          className="block w-full h-full object-cover"
          src={profilePictureURL}
          alt={companyName}
        />
      </div>
      <div className="flex-1 md:ml-10 w-full">
        <header className="flex">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-medium mb-2">{companyName}</h2>
            {companyDescription && (
              <section className="mb-6 text-sm opacity-[85%] leading-7">
                {companyDescription}
              </section>
            )}
            <section className="mb-6">
              {dateFounded && (
                <div className="flex flex-col md:flex-row text-sm mb-4 md:mb-2">
                  <h3 className="mb-2 md:mb-0 font-bold md:w-[150px]">
                    Founded
                  </h3>
                  <p className="opacity-75">{dateFounded}</p>
                </div>
              )}
              {locationFounded && (
                <div className="flex flex-col md:flex-row text-sm mb-4 md:mb-2">
                  <h3 className="mb-2 md:mb-0 font-bold md:w-[150px]">
                    Founded in
                  </h3>
                  <p className="opacity-75">{locationFounded}</p>
                </div>
              )}
              {locationHeadquarters && (
                <div className="flex flex-col md:flex-row text-sm mb-4 md:mb-2">
                  <h3 className="mb-2 md:mb-0 font-bold md:w-[150px]">
                    Headquarters
                  </h3>
                  <p className="opacity-75">{locationHeadquarters}</p>
                </div>
              )}
            </section>
            <footer>
              <section className="mb-1">
                {categories.map((categoryItem) => (
                  <TagItem
                    key={categoryItem.id}
                    name={categoryItem.name}
                    backgroundColor={categoryItem.backgroundColor}
                    textColor={categoryItem.textColor}
                  />
                ))}
              </section>
              <section className="mb-4">
                {types.map((typeItem) => (
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
        </header>
      </div>
    </header>
  );
}

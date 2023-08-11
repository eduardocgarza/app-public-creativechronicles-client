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
    <header className="bg-white p-10 rounded-[30px] mb-6 flex shadow-md blur-2 text-opacity-15 spread-0">
      <div className="w-[150px] h-[150px] overflow-hidden">
        <img className="block" src={profilePictureURL} alt={companyName} />
      </div>
      <div className="flex-1 ml-6">
        <header className="flex">
          <div className="flex-1">
            <h2 className="text-3xl font-medium mb-6">{companyName}</h2>
            <section className="mb-6">
              {dateFounded && (
                <div className="flex text-sm mb-2">
                  <h3 className="font-bold w-[150px]">Founded</h3>
                  <p className="opacity-75">{dateFounded}</p>
                </div>
              )}
              {locationFounded && (
                <div className="flex text-sm mb-2">
                  <h3 className="font-bold w-[150px]">Founded in</h3>
                  <p className="opacity-75">{locationFounded}</p>
                </div>
              )}
              {locationHeadquarters && (
                <div className="flex text-sm mb-2">
                  <h3 className="font-bold w-[150px]">Headquarters</h3>
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
          <CompanyItemExternalLinks />
        </header>
      </div>
    </header>
  );
}

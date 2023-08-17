import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logger from "../../../constants/Logger";
import PersonItemVideos from "./components/PersonItemVideos";
import PersonItemCompanies from "./components/PersonItemCompanies";
import PersonItemProducts from "./components/PersonItemProducts";
import PersonItemNavigation from "./components/PersonItemNavigation";
import PersonItemHeader from "./components/PersonItemHeader/PersonItemHeader";
import { publicRouter } from "../../../network/serverRouter";
import { getPersonEndpoint } from "../../../network/routes/peopleRoutes";
import sortPersonCompanies from "./helpers/sortPersonCompanies";
import sortPersonProducts from "./helpers/sortPersonProducts";
import sortPersonVideos from "./helpers/sortPersonVideos";

export default function PersonItemPage() {
  const { personUsername } = useParams();
  const [personResource, setPersonResource] = useState(null);
  const [mainMode, setMainMode] = useState(true);

  async function fetchPerson() {
    try {
      const route = getPersonEndpoint(personUsername);
      const response = await publicRouter.get(route);
      const personResource = response.data.resource;
      const sortedCompanies = sortPersonCompanies(personResource.companies);
      const sortedProducts = sortPersonProducts(personResource.products);
      const sortedVideos = sortPersonVideos(personResource.videos);

      setPersonResource({
        ...personResource,
        videos: sortedVideos,
        companies: sortedCompanies,
        products: sortedProducts,
      });
    } catch (error) {
      Logger.error(error);
    }
  }

  useEffect(() => {
    fetchPerson();
  }, []);

  if (!personResource) return null;

  /**
   * @State
   */

  return (
    <section>
      <PersonItemNavigation
        mainMode={mainMode}
        setMainMode={setMainMode}
        personResource={personResource}
      />
      <section className="py-[80px] px-4">
        <div className="container mx-auto">
          <PersonItemHeader personResource={personResource} />
          <PersonItemCompanies
            personResource={personResource}
            mainMode={mainMode}
          />
          <PersonItemProducts
            personResource={personResource}
            mainMode={mainMode}
          />
          <PersonItemVideos
            mainMode={mainMode}
            personResource={personResource}
          />
        </div>
      </section>
    </section>
  );
}

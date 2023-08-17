import React, { useEffect, useState } from "react";
import PersonItemHeader from "./components/PersonItemHeader/PersonItemHeader";
import PersonItemVideos from "./components/PersonItemVideos";
import PersonItemCompanies from "./components/PersonItemCompanies";
import PersonItemProducts from "./components/PersonItemProducts";
import PersonItemNavigation from "./components/PersonItemNavigation";
import { useParams } from "react-router-dom";
import { getPersonEndpoint } from "../../../network/routes/peopleRoutes";
import { publicRouter } from "../../../network/serverRouter";
import Logger from "../../../constants/Logger";

export default function PersonItemPage() {
  const { personUsername } = useParams();
  const [personResource, setPersonResource] = useState(null);
  const [mainMode, setMainMode] = useState(true);

  async function fetchPerson() {
    try {
      const route = getPersonEndpoint(personUsername);
      const response = await publicRouter.get(route);
      setPersonResource(response.data.resource);
    } catch (error) {
      Logger.error(error);
    }
  }

  useEffect(() => {
    fetchPerson();
  }, []);

  if (!personResource) return null;

  console.log("personResource: ", personResource)

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

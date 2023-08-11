import { useEffect, useState } from "react";
import Logger from "../../constants/Logger";
import { publicRouter } from "../../network/serverRouter";
import {
  getAllPeopleEndpoint,
  getPersonEndpoint,
} from "../../network/routes/peopleRoutes";

export default function usePeople() {
  /**
   * @State
   */
  const [personObjects, setPersonObjects] = useState([]);
  const [personResources, setPersonResources] = useState([]);

  /**
   * @Initialize
   */
  useEffect(() => {
    fetchPeople();
  }, []);

  /**
   * @Methods
   */

  async function fetchPeople() {
    try {
      const response = await publicRouter.get(getAllPeopleEndpoint);
      setPersonObjects(response.data);
    } catch (error) {
      Logger.error(error);
    }
  }

  async function fetchPersonItem(personUsername) {
    const existingPersonResource = personResources.find(
      (personResource) =>
        personResource.person.person.personUsername === personUsername
    );

    if (existingPersonResource) {
      return existingPersonResource;
    }

    try {
      const route = getPersonEndpoint(personUsername);
      const response = await publicRouter.get(route);
      const fetchedPersonResource = response.data.resource;

      // Create a copy of the current personResources array
      const updatedPersonResources = [...personResources];

      // Add the new resource to the end of the array
      updatedPersonResources.push(fetchedPersonResource);

      // If the array size exceeds the limit, remove the oldest item
      if (updatedPersonResources.length > 50) {
        updatedPersonResources.shift();
      }

      // Update the state with the updated array
      setPersonResources(updatedPersonResources);

      return fetchedPersonResource;
    } catch (error) {
      Logger.error(error);
    }
  }

  return {
    personObjects,
    personResources,
    fetchPeople,
    fetchPersonItem,
  };
}

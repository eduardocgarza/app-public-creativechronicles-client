import { useEffect, useState } from "react";
import Logger from "../../constants/Logger";
import { publicRouter } from "../../network/serverRouter";
import {
  getAllCompaniesEndpoint,
  getCompanyEndpoint,
} from "../../network/routes/companiesRoutes";

export default function useCompanies() {
  /**
   * @State
   */
  const [companyObjects, setCompanyObjects] = useState([]);
  const [companyResources, setCompanyResources] = useState([]);

  /**
   * @Initialize
   */
  useEffect(() => {
    fetchCompanies();
  }, []);

  /**
   * @Methods
   */

  async function fetchCompanies() {
    try {
      const response = await publicRouter.get(getAllCompaniesEndpoint);
      const companies = response.data;
      const activeCompanies = companies.filter(
        (companyResource) =>
          !companyResource.company.isArchived &&
          companyResource.company.isPublished
      );
      const sortedCompanies = activeCompanies.sort((a, b) =>
        a.company.companyName > b.company.companyName ? 1 : -1
      );
      setCompanyObjects(sortedCompanies);
    } catch (error) {
      Logger.error(error);
    }
  }

  async function fetchCompanyItem(companyUsername) {
    const existingCompanyResource = companyResources.find(
      (companyResource) =>
        companyResource.company.company.companyUsername === companyUsername
    );

    if (existingCompanyResource) {
      return existingCompanyResource;
    }

    try {
      const route = getCompanyEndpoint(companyUsername);
      const response = await publicRouter.get(route);
      const fetchedCompanyResource = response.data.resource;

      // Create a copy of the current companyResources array
      const updatedCompanyResources = [...companyResources];

      // Add the new resource to the end of the array
      updatedCompanyResources.push(fetchedCompanyResource);

      // If the array size exceeds the limit, remove the oldest item
      if (updatedCompanyResources.length > 50) {
        updatedCompanyResources.shift();
      }

      // Update the state with the updated array
      setCompanyResources(updatedCompanyResources);

      return fetchedCompanyResource;
    } catch (error) {
      Logger.error(error);
    }
  }

  return {
    companyObjects,
    companyResources,
    fetchCompanies,
    fetchCompanyItem,
  };
}

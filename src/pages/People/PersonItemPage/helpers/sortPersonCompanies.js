import { sortRoles } from "./sortResources";

export default function sortPersonCompanies(companies) {
  return companies
    .map((companyResource) => ({
      ...companyResource,
      roles: sortRoles(companyResource.roles || []),
    }))
    .sort((a, b) => {
      const companyNameA = a.company.company.companyName.toLowerCase();
      const companyNameB = b.company.company.companyName.toLowerCase();
      return companyNameA.localeCompare(companyNameB);
    });
}

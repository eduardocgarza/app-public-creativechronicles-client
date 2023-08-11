const { BASE_URL } = require("../../constants/appConstants");

/**
 * @CompanyTypes Endpoints
 */

// Get All Company Types
export const getAllCompanyTypesEndpoint = `${BASE_URL}/companies/types`;

// Get Company Type Item
export const createCompanyTypeEndpoint = `${BASE_URL}/companies/types`;

// Edit Company Type Item
export function editCompanyTypeEndpoint(typeID) {
  return `${BASE_URL}/companies/types/${typeID}`;
}

// Archive Company Type Item
export function archiveCompanyTypeEndpoint(typeID) {
  return `${BASE_URL}/companies/types/${typeID}/archive`;
}

// Unarchive Company Type Item
export function unarchiveCompanyTypeEndpoint(typeID) {
  return `${BASE_URL}/companies/types/${typeID}/unarchive`;
}

// Delete Company Type Item
export function deleteCompanyTypeEndpoint(typeID) {
  return `${BASE_URL}/companies/types/${typeID}`;
}

// Publish Company Type Item
export function publishCompanyTypeEndpoint(typeID) {
  return `${BASE_URL}/companies/types/${typeID}/publish`;
}

// Unpublish Company Type Item
export function unpublishCompanyTypeEndpoint(typeID) {
  return `${BASE_URL}/companies/types/${typeID}/unpublish`;
}

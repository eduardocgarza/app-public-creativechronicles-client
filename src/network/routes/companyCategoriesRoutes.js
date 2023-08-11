const { BASE_URL } = require("../../constants/appConstants");

/**
 * @CompanyCategories Endpoints
 */

export const getAllCompanyCategories = `${BASE_URL}/companies/categories`;

// Get Company Category Item
export const createCompanyCategoryEndpoint = `${BASE_URL}/companies/categories`;

// Edit Company Category Item
export function editCompanyCategoryEndpoint(categoryID) {
  return `${BASE_URL}/companies/categories/${categoryID}`;
}

// Archive Company Category Item
export function archiveCompanyCategoryEndpoint(categoryID) {
  return `${BASE_URL}/companies/categories/${categoryID}/archive`;
}

// Unarchive Company Category Item
export function unarchiveCompanyCategoryEndpoint(categoryID) {
  return `${BASE_URL}/companies/categories/${categoryID}/unarchive`;
}

// Delete Company Category Item
export function deleteCompanyCategoryEndpoint(categoryID) {
  return `${BASE_URL}/companies/categories/${categoryID}`;
}

// Publish Company Category Item
export function publishCompanyCategoryEndpoint(categoryID) {
  return `${BASE_URL}/companies/categories/${categoryID}/publish`;
}

// Unpublish Company Category Item
export function unpublishCompanyCategoryEndpoint(categoryID) {
  return `${BASE_URL}/companies/categories/${categoryID}/unpublish`;
}

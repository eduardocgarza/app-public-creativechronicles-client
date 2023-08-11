import { BASE_URL } from "../../constants/appConstants";

/**
 * @Companies Endpoints
 */

// Get All Companies
export const getAllCompaniesEndpoint = `${BASE_URL}/companies`;

// Get Company Item
export function getCompanyEndpoint(companyUsername) {
  return `${BASE_URL}/companies/${companyUsername}`;
}

// Create Company Item
export const createCompanyEndpoint = `${BASE_URL}/companies`;

// Upload Company Icon
export function uploadCompanyIconEndpoint(companyID) {
  return `${BASE_URL}/companies/${companyID}/icon`;
}

// Edit Company Item
export function editCompanyEndpoint(companyID) {
  return `${BASE_URL}/companies/${companyID}`;
}

// Publish Company Item
export function publishCompanyEndpoint(companyID) {
  return `${BASE_URL}/companies/${companyID}/publish`;
}

// Unpublish Company Item
export function unpublishCompanyEndpoint(companyID) {
  return `${BASE_URL}/companies/${companyID}/unpublish`;
}

// Archive Company Item
export function archiveCompanyEndpoint(companyID) {
  return `${BASE_URL}/companies/${companyID}/archive`;
}

// Unarchive Company Item
export function unarchiveCompanyEndpoint(companyID) {
  return `${BASE_URL}/companies/${companyID}/unarchive`;
}

// Delete Company Item
export function deleteCompanyEndpoint(companyID) {
  return `${BASE_URL}/companies/${companyID}`;
}

/**
 * @Associations - Company Categories
 */

// Add Company Category to Company
export function addCompanyCategoryToCompanyEndpoint(companyID, categoryID) {
  return `${BASE_URL}/companies/${companyID}/categories/${categoryID}`;
}

// Remove Company Category from Company
export function removeCompanyCategoryFromCompanyEndpoint(
  companyID,
  categoryID
) {
  return `${BASE_URL}/companies/${companyID}/categories/${categoryID}`;
}

/**
 * @Associations - Company Types
 */

// Add Company Type to Company
export function addCompanyTypeToCompanyEndpoint(companyID, typeID) {
  return `${BASE_URL}/companies/${companyID}/types/${typeID}`;
}

// Remove Company Type from Company
export function removeCompanyTypeFromCompanyEndpoint(companyID, typeID) {
  return `${BASE_URL}/companies/${companyID}/types/${typeID}`;
}

/**
 * @Associations - People
 */

// Add Person to Company
export const addPersonToCompanyEndpoint = `${BASE_URL}/companies/roles`;

// Remove Person from Company
export function removePersonFromCompanyEndpoint(roleID) {
  return `${BASE_URL}/companies/roles/${roleID}`;
}

/**
 * @Associations - Products
 */

// Add Product to Company
export function addProductToCompanyEndpoint(companyID, productID) {
  return `${BASE_URL}/companies/${companyID}/products/${productID}`;
}

// Remove Product from Company
export function removeProductFromCompanyEndpoint(companyID, productID) {
  return `${BASE_URL}/companies/${companyID}/products/${productID}`;
}

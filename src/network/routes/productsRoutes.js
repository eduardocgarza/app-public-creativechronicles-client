import { BASE_URL } from "../../constants/appConstants";

/**
 * @Products Endpoints
 */

// Get All Products
export const getAllProductsEndpoint = `${BASE_URL}/products`;

// Get Product Item
export function getProductEndpoint(productID) {
  return `${BASE_URL}/products/${productID}`;
}

// Create Product Item
export const createProductEndpoint = `${BASE_URL}/products`;

// Upload Product Icon
export function uploadProductIconEndpoint(productID) {
  return `${BASE_URL}/products/${productID}/icon`;
}

// Edit Product Item
export function editProductEndpoint(productID) {
  return `${BASE_URL}/products/${productID}`;
}

// Archive Product Item
export function archiveProductEndpoint(productID) {
  return `${BASE_URL}/products/${productID}/archive`;
}

// Unarchive Product Item
export function unarchiveProductEndpoint(productID) {
  return `${BASE_URL}/products/${productID}/unarchive`;
}

// Publish Product Item
export function publishProductEndpoint(productID) {
  return `${BASE_URL}/products/${productID}/publish`;
}

// Unpublish Product Item
export function unpublishProductEndpoint(productID) {
  return `${BASE_URL}/products/${productID}/unpublish`;
}

// Delete Product Item
export function deleteProductEndpoint(productID) {
  return `${BASE_URL}/products/${productID}`;
}

/**
 * @Associations - Products Types
 */

// Add Product Type To Product
export function addProductCategoryToProductEndpoint(productID, categoryID) {
  return `${BASE_URL}/products/${productID}/categories/${categoryID}`;
}

// Remove Product Type From Product
export function removeProductCategoryFromProductEndpoint(
  productID,
  categoryID
) {
  return `${BASE_URL}/products/${productID}/categories/${categoryID}`;
}

/**
 * @Associations - Companies
 */

// Add Company To Product
export function addCompanyToProductEndpoint(productID, companyID) {
  return `${BASE_URL}/products/${productID}/companies/${companyID}`;
}

// Remove Company From Product
export function removeCompanyFromProductEndpoint(productID, companyID) {
  return `${BASE_URL}/products/${productID}/companies/${companyID}`;
}

/**
 * @Associations - People
 */

// Add Person To Product
export const addPersonToProductEndpoint = `${BASE_URL}/products/roles`;

// Remove Person From Product
export function removePersonFromProductEndpoint(roleID) {
  return `${BASE_URL}/products/roles/${roleID}`;
}

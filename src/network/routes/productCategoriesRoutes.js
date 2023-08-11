const { BASE_URL } = require("../../constants/appConstants");

/**
 * @ProductCategories Endpoints
 */

// Get All Product Categories
export const getAllProductCategoriesEndpoint = `${BASE_URL}/products/categories`;

// Get Product Category Item
export const createProductCategoryEndpoint = `${BASE_URL}/products/categories`;

// Edit Product Category Item
export function editProductCategoryEndpoint(categoryID) {
  return `${BASE_URL}/products/categories/${categoryID}`;
}

// Archive Product Category Item
export function archiveProductCategoryEndpoint(categoryID) {
  return `${BASE_URL}/products/categories/${categoryID}/archive`;
}

// Unarchive Product Category Item
export function unarchiveProductCategoryEndpoint(categoryID) {
  return `${BASE_URL}/products/categories/${categoryID}/unarchive`;
}

// Delete Product Category Item
export function deleteProductCategoryEndpoint(categoryID) {
  return `${BASE_URL}/products/categories/${categoryID}`;
}

// Publish Product Category Item
export function publishProductCategoryEndpoint(categoryID) {
  return `${BASE_URL}/products/categories/${categoryID}/publish`;
}

// Unpublish Product Category Item
export function unpublishProductCategoryEndpoint(categoryID) {
  return `${BASE_URL}/products/categories/${categoryID}/unpublish`;
}

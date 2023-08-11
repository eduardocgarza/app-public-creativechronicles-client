import { BASE_URL } from "../../constants/appConstants";

/**
 * @PersonTypes Endpoints
 */

// Get All Person Types
export const getAllPersonTypesEndpoint = `${BASE_URL}/people/types`;

// Create Person Type Item
export const createPersonTypeEndpoint = `${BASE_URL}/people/types`;

// Edit Person Type Item
export function editPersonTypeEndpoint(typeID) {
  return `${BASE_URL}/people/types/${typeID}`;
}

// Archive Person Type Item
export function archivePersonTypeEndpoint(typeID) {
  return `${BASE_URL}/people/types/${typeID}/archive`;
}

// Unarchive Person Type Item
export function unarchivePersonTypeEndpoint(typeID) {
  return `${BASE_URL}/people/types/${typeID}/unarchive`;
}

// Delete Person Type Item
export function deletePersonTypeEndpoint(typeID) {
  return `${BASE_URL}/people/types/${typeID}`;
}

// Publish Person Type Item
export function publishPersonTypeEndpoint(typeID) {
  return `${BASE_URL}/people/types/${typeID}/publish`;
}

// Unpublish Person Type Item
export function unpublishPersonTypeEndpoint(typeID) {
  return `${BASE_URL}/people/types/${typeID}/unpublish`;
}

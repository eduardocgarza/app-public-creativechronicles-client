import { BASE_URL } from "../../constants/appConstants";

/**
 * @VideoTypes Endpoints
 */

// Get All Video Types
export const getAllVideoTypesEndpoint = `${BASE_URL}/videos/types`;

// Create Video Type Item
export const createVideoTypeEndpoint = `${BASE_URL}/videos/types`;

// Edit Video Type Item
export function editVideoTypeEndpoint(typeID) {
  return `${BASE_URL}/videos/types/${typeID}`;
}

// Archive Video Type Item
export function archiveVideoTypeEndpoint(typeID) {
  return `${BASE_URL}/videos/types/${typeID}/archive`;
}

// Unarchive Video Type Item
export function unarchiveVideoTypeEndpoint(typeID) {
  return `${BASE_URL}/videos/types/${typeID}/unarchive`;
}

// Delete Video Type Item
export function deleteVideoTypeEndpoint(typeID) {
  return `${BASE_URL}/videos/types/${typeID}`;
}

// Publish Video Type Item
export function publishVideoTypeEndpoint(typeID) {
  return `${BASE_URL}/videos/types/${typeID}/publish`;
}

// Unpublish Video Type Item
export function unpublishVideoTypeEndpoint(typeID) {
  return `${BASE_URL}/videos/types/${typeID}/unpublish`;
}

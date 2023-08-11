import { BASE_URL } from "../../constants/appConstants";

/**
 * @Videos Endpoints
 */

// Create Videos Item
export function createVideosEndpoint(personID) {
  return `${BASE_URL}/videos/people/${personID}`;
}

// Edit Video Item
export function editVideoEndpoint(videoID) {
  return `${BASE_URL}/videos/${videoID}`;
}

// Delete Video Item
export function deleteVideoEndpoint(personID, videoID) {
  return `${BASE_URL}/videos/${videoID}/people/${personID}`;
}

/**
 * @Associations - Video Types
 */

// Add Video Type to Video
export function addVideoTypeToVideoEndpoint(videoID, typeID) {
  return `${BASE_URL}/videos/${videoID}/types/${typeID}`;
}

// Remove Video Type from Video
export function removeVideoTypeFromVideoEndpoint(videoID, typeID) {
  return `${BASE_URL}/videos/${videoID}/types/${typeID}`;
}

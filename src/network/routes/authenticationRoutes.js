import { BASE_URL } from "../../constants/appConstants";

export function verifyTokenEndpoint(accountToken) {
  return `${BASE_URL}/token/${accountToken}`;
}

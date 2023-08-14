const {
  REACT_APP_CLIENT_ENV,
  REACT_APP_SERVER_ENV,
  REACT_APP_GOOGLE_AUTH_CLIENT_ID,
} = process.env;

const appModes = {
  development: "development",
  production: "production",
}

/**
 * @Client
 */
export const APP_CLIENT_ENV = REACT_APP_CLIENT_ENV || appModes.development;

/**
 * @GoogleAuth
 */
export const googleAuthClientID = REACT_APP_GOOGLE_AUTH_CLIENT_ID;

/**
 * @Server (API)
 */
export const DEV_BASE_URL = "http://localhost:5000";
// export const PROD_BASE_URL = "https://creative-chronicles-1e2c99414e3b.herokuapp.com";
export const PROD_BASE_URL = "https://api.creativechronicles.org";
export const BASE_URL = (REACT_APP_SERVER_ENV === appModes.production) ? PROD_BASE_URL : DEV_BASE_URL;

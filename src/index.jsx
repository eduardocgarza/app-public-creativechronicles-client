import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./router/AppRouter";
import { AppContextProvider } from "./state/AppContext";
import ReactGA from "react-ga4";
import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from "./constants/appConstants";

if (GOOGLE_ANALYTICS_MEASUREMENT_ID) {
  ReactGA.initialize(GOOGLE_ANALYTICS_MEASUREMENT_ID);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  </React.StrictMode>
);

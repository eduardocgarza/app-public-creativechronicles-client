import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./router/AppRouter";
import { AppContextProvider } from "./state/AppContext";
import ReactGA from "react-ga4";

ReactGA.initialize("G-RZJ36FD15E");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  </React.StrictMode>
);

import React, { useState } from "react";
//@ts-ignore
import App from "mfe_forms/App";
import { AppContext } from "./context/AppContext/AppContext";
import { AppContainer } from "./components/hoc/container/Container";
import { Link } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  const [federatedComponents, showFederatedComponents] = useState(false);
  return (
    <AppContext.Provider
      value={{ showFederatedComponents: federatedComponents, setShowFederatedComponents: showFederatedComponents }}
    >
      <Link to="/dashboard">Dashboard</Link>
      <AppRoutes />
    </AppContext.Provider>
  );
};

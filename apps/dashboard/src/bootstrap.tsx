import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "mfe-ui-components/dist/output.css";
import { AppContext } from "./context/AppContext/AppContext";
import { AppContainer } from "./components/hoc/container/Container";
import { BrowserRouter, Link } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

const Bootstrap = () => {
  const [federatedComponents, showFederatedComponents] = useState(false);
  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{ showFederatedComponents: federatedComponents, setShowFederatedComponents: showFederatedComponents }}
      >
        <AppContainer>
          <Link to="/dashboard">Dashboard</Link>
          <AppRoutes />
        </AppContainer>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Bootstrap />, document.getElementById("root"));

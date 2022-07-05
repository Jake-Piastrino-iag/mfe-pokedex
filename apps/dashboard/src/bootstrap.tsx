import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { AppContent } from "./App";
import "mfe-ui-components/dist/output.css";
import { AppContext } from "./context/AppContext/AppContext";
import { AppContainer } from "./components/hoc/container/Container";

const Bootstrap = () => {
  const [federatedComponents, showFederatedComponents] = useState(false);
  return (
    <AppContext.Provider
      value={{ showFederatedComponents: federatedComponents, setShowFederatedComponents: showFederatedComponents }}
    >
      <AppContainer>
        <AppContent />
      </AppContainer>
    </AppContext.Provider>
  );
};

ReactDOM.render(<Bootstrap />, document.getElementById("root"));

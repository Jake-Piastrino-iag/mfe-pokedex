import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { AppContent } from "./App";
import "mfe-ui-components/dist/output.css";
import { AppContext } from "./context/AppContext/AppContext";

const Bootstrap = () => {
  return (
    <AppContext.Provider value={{ showFederatedComponents: false }}>
      <AppContent />
    </AppContext.Provider>
  );
};

ReactDOM.render(<Bootstrap />, document.getElementById("root"));

import React, { createContext } from "react";

type AppContext = {
  showFederatedComponents: false;
};

export const AppContext = createContext<AppContext>(null);

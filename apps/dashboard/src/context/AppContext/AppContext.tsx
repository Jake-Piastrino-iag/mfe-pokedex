import React, { createContext } from "react";

type AppContext = {
  showFederatedComponents: boolean;
  setShowFederatedComponents: (showFederatedComponents: boolean) => void;
};

export const AppContext = createContext<AppContext>(null);

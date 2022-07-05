import React, { PropsWithChildren } from "react";

import { Container } from "mfe-ui-components";

export const AppContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

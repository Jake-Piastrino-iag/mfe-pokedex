import React from "react";

import { NavBar } from "mfe-ui-components";

import { SubMenu } from "./SubMenu";

export type HeaderProps = {
  navbarText: string;
  onSelectHomeHandler(): void;
  selectedNumber?: number;
  onSelectedHandler(): void;
  avatarUrl?: string;
  showProfile: boolean;
  navProfleOptions?: React.ReactNode;
};

export const AppHeader: React.FC<HeaderProps> = ({ ...props }) => {
  return <NavBar {...props} navProfleOptions={<SubMenu />} />;
};

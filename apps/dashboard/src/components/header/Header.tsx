import React from "react";

import { NavBar } from "mfe-ui-components";

import { SubMenu } from "./SubMenu";

type HeaderProps = {
  navbarText: string;
  selectedNumber?: number;
  onSelectedHandler(): void;
  avatarUrl?: string;
  showProfile: boolean;
  navProfleOptions?: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return <NavBar {...props} navProfleOptions={<SubMenu />} />;
};

import React from "react";

import { NavBar } from "mfe-ui-components";

type HeaderProps = {
  navbarText: string;
  selectedNumber?: number;
  onSelectedHandler(): void;
  avatarUrl?: string;
  showProfile: boolean;
  navProfleOptions?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return <NavBar {...props} />;
};

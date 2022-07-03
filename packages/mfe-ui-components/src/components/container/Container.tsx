import React, { PropsWithChildren } from "react";

type ContainerProps = { key?: string; children: React.ReactNode };

export const Container: React.FC<ContainerProps> = ({ children, key }) => {
  return <div className="container mx-auto">{children}</div>;
};

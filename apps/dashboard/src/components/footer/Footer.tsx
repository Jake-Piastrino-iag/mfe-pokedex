import React from "react";
import { Footer } from "mfe-ui-components";

type FooterProps = {
  footerText: string;
  footerHelperText?: string;
};

export const AppFooter: React.FC<React.PropsWithChildren<FooterProps>> = ({
  footerText,
  footerHelperText,
  children
}) => {
  return (
    <Footer footerText={footerText} footerHelperText={footerHelperText}>
      {children}
    </Footer>
  );
};

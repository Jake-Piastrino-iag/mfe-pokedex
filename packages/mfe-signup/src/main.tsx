import React from "react";
import { createRoot } from "react-dom/client";
import "mfe-ui-components/dist/output.css";
import { SignUpPage } from "./pages/signup/SignUp";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <div className="container-2xl">
      <SignUpPage />
    </div>
  </React.StrictMode>
);

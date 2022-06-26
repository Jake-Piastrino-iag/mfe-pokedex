import React from "react";
import ReactDOM from "react-dom/client";
import "mfe-ui-components/dist/output.css";
import { SignUpPage } from "./pages/signup/SignUp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container-2xl">
      <SignUpPage />
    </div>
  </React.StrictMode>
);

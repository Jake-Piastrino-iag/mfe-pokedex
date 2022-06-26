import React from "react";
import ReactDOM from "react-dom/client";
import "mfe-ui-components/dist/output.css";
import { SignUpComponent } from "./components/forms/signup/Signup";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container-2xl">
      <SignUpComponent />
    </div>
  </React.StrictMode>
);

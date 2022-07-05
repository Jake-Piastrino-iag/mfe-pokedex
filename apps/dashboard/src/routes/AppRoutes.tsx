import React from "react";

import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "../pages/SignupPage";
import { Dashboard } from "../pages/Dashboard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

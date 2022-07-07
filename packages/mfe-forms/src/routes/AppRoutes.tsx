import React from "react";

import { Routes, Route } from "react-router-dom";
import { SignUpPage } from "../pages/signup/Signup";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

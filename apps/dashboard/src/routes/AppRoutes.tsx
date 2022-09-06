import React from "react";

import { Route, Routes, useRoutes } from "react-router-dom";
import { SignUpPage } from "../pages/SignupPage";
import { Dashboard } from "../pages/Dashboard";
import { UserPokemons } from "../pages/UserPokemons";
//@ts-ignore
//import { AppRoutes as mfe_form_routes } from "mfe_form/AppRoutes";

export const AppRoutes = () => {
  let routes = [
    {
      element: <Dashboard />,
      path: "/dashboard"
    },
    {
      element: <UserPokemons />,
      path: "/my-pokemons"
    },
    {
      element: <SignUpPage />,
      path: "/"
    }
  ];

  // if (mfe_form_routes) {
  //   routes.push(...mfe_form_routes);
  // }
  return useRoutes(routes);
};

import React from "react";
import { PokemonList } from "./PokemonList";
import { Layout } from "./Layout";

export const Dashboard = () => {
  return (
    <Layout>
      <PokemonList />
    </Layout>
  );
};

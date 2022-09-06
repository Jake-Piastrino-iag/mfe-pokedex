import React, { useContext } from "react";
import { UserContext } from "../context/UserContext/UserContext";
import { PokemonList } from "./PokemonList";
import { Layout } from "./Layout";

export const Dashboard = () => {
  const { characterName, avatarUrl, pokemons, setPokemons } = useContext(UserContext);
  return (
    <Layout>
      <PokemonList />
    </Layout>
  );
};

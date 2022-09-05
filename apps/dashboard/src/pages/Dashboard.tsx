import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext/UserContext";
import { PokemonList } from "./PokemonList";
import { Layout } from "./Layout";

interface DashboardProps {
  ancestors: string[];
}

export const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  const { characterName, avatarUrl, pokemons, setPokemons } = useContext(UserContext);
  return (
    <Layout>
      <PokemonList ancestors={[...props.ancestors, "pokemonList"]}/>
    </Layout>
  );
};

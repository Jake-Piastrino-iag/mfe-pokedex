import React, { useState } from "react";
import { GET_ALL_POKEMONS } from "../gql/getAllPokemons";
import { GraphQLPokemonResponse, useGQLQuery } from "../gql/useGQLQuery";
import { CardComponent as Card } from "mfe-ui-components";
import { Pokemon } from "@favware/graphql-pokemon";
import { useContext } from "react";
import { UserContext } from "../context/UserContext/UserContext";
//import { gqlQuery } from "../gql/useGQLQuery";

export const PokemonList = () => {
  const { data, loading, error } = useGQLQuery("getPokemon", GET_ALL_POKEMONS);
  const { pokemons, setPokemons } = useContext(UserContext);

  const addData = (e: React.MouseEvent<HTMLButtonElement>, pokemonData: any) => {
    setPokemons([...pokemons, pokemonData]);
  };

  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3">
      {loading && <p>Loading....</p>}
      {!loading &&
        Object.entries(data).map(([key, value]) => {
          return (
            <Card
              imageUrl={value.sprite}
              imageAlt={value.species}
              header={value.species}
              badge={value.types}
              body={<p>{value.flavorTexts[0].flavour}</p>}
              actionText="Purchase"
              onActionHandler={(e) => addData(e, value)}
            />
          );
        })}
    </div>
  );
};

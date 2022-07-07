import React, { useState } from "react";
import { GET_ALL_POKEMONS } from "../gql/getAllPokemons";
import { GraphQLPokemonResponse, useGQLQuery } from "../gql/useGQLQuery";
import { CardComponent as Card } from "mfe-ui-components";
import { Pokemon } from "@favware/graphql-pokemon";
import { useContext } from "react";
import { UserContext } from "../context/UserContext/UserContext";
import { AppContext } from "../context/AppContext/AppContext";
import { Loader } from "../components/loader/Loader";
//import { gqlQuery } from "../gql/useGQLQuery";

export const PokemonList = () => {
  const { data, loading, error } = useGQLQuery("getPokemon", GET_ALL_POKEMONS);
  const { showFederatedComponents } = useContext(AppContext);
  const { pokemons, setPokemons } = useContext(UserContext);

  const addData = (e: React.MouseEvent<HTMLButtonElement>, pokemonData: any) => {
    //pokemonList = [...pokemonList.filter(([key, value]) => value.species === pokemonData.species)];
    //console.log(pokemonList);
    setPokemons([...pokemons, pokemonData]);
  };

  return (
    <>
      {loading && (
        <div className="grid h-screen place-items-center">
          <Loader />
        </div>
      )}
      <div className="grid gap-4 grid-cols-3 grid-rows-3 my-8">
        {!loading &&
          Object.entries(data).map(([key, value]) => {
            return (
              <Card
                key={key}
                imageUrl={value.sprite}
                imageAlt={value.species}
                header={`${value.species.charAt(0).toUpperCase()}${value.species.slice(1)}`}
                badge={value.types}
                body={<p>{value.flavorTexts[0].flavour}</p>}
                actionText="Choose"
                onActionHandler={(e) => addData(e, value)}
              />
            );
          })}
      </div>
    </>
  );
};

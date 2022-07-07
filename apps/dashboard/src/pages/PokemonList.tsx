import React, { useState } from "react";
import { GET_ALL_POKEMONS } from "../gql/getAllPokemons";
import { GraphQLPokemonResponse, useGQLQuery } from "../gql/useGQLQuery";
import { CardComponent as Card } from "mfe-ui-components";
import { Pokemon } from "@favware/graphql-pokemon";
//import { gqlQuery } from "../gql/useGQLQuery";

export const PokemonList = () => {
  const [listOfPokemons, setListOfPokemons] = useState<GraphQLPokemonResponse<"getPokemon">>(null);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const { data, loading, error } = useGQLQuery("getPokemon", GET_ALL_POKEMONS);
  console.log(data);
  // setListOfPokemons(data);
  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3">
      {isLoadingData && <p>Loading....</p>}
      {/* {!loading &&
        Object.entries(listOfPokemons).map(([key, value]) => {
          return (
            <Card
              imageUrl={value.sprite}
              imageAlt={value.species}
              header={value.species}
              body={<></>}
              actionText="Reveal"
            />
          );
        })} */}
    </div>
  );
};

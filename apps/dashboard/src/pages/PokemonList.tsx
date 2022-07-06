import React, { useState } from "react";
import { useEffect } from "react";
import { GET_ALL_POKEMONS } from "../gql/getAllPokemons";
import { useReactQuery } from "../gql/useGQLQuery";
import { CardComponent as Card } from "mfe-ui-components";
import { Pokemon } from "@favware/graphql-pokemon";

const PokemonList = () => {
  const [listOfPokemons, setListOfPokemons] = useState<Pokemon[]>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { data, error, isLoading } = useReactQuery("pokemons", GET_ALL_POKEMONS, {});
    setListOfPokemons(data);
    setIsLoading(isLoading);
  }, []);

  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3">
      {isLoading && <p>Loading....</p>}

      {!isLoading &&
        listOfPokemons.map((pokemon) => {
          return <Card imageUrl={pokemon.sprite} imageAlt={pokemon.species} header={pokemon.species} body={<></>} />;
        })}
    </div>
  );
};

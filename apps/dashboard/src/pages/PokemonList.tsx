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

interface PokemonListProps {
  ancestors: string[];
}

export const PokemonList: React.FC<PokemonListProps> = (props: PokemonListProps) => {
  const { data, loading, error } = useGQLQuery("getPokemon", GET_ALL_POKEMONS);
  const { showFederatedComponents } = useContext(AppContext);
  const { pokemons, setPokemons } = useContext(UserContext);

  const addData = (ev: React.MouseEvent<HTMLButtonElement>, pokemonData: any) => {
    //pokemonList = [...pokemonList.filter(([key, value]) => value.species === pokemonData.species)];
    //console.log(pokemonList);
    
    setPokemons([...pokemons, pokemonData]);

    const event = new CustomEvent('PokemonList:choosePokemon', {
      bubbles: true,
      detail: {
        moduleName: "PokemonList:choosePokemonButton",
        event: {
          ancestors: props.ancestors,
          action: "click",
          shortDescription: `${pokemonData.species.charAt(0).toUpperCase()}${pokemonData.species.slice(1)} added to bag.`,
          description: `You caught a pokemon! ${pokemonData.species.charAt(0).toUpperCase()}${pokemonData.species.slice(1)} has been added to your bag.`
        },
      }
    });

    ev.target.dispatchEvent(event);
  };

  return (
    <>
      {loading && (
        <div className="grid h-screen place-items-center">
          <Loader />
        </div>
      )}
      <div className="grid grid-cols-1 grid-rows-1 gap-4 my-8 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3">
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
                onActionHandler={(ev) => addData(ev, value)}
              />
            );
          })}
      </div>
    </>
  );
};

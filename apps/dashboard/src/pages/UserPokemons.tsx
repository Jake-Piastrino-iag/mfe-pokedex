import React from "react";
//@ts-ignore
import PokeForm from "mfe_forms/PokeForm";
import { useContext } from "react";
import { UserContext } from "../context/UserContext/UserContext";
import { Layout } from "./Layout";
import { Loader } from "../components/loader/Loader";

export const UserPokemons = () => {
  const { pokemons, setPokemons } = useContext(UserContext);
  const onActionHandler = (species: string) => {
    setPokemons(pokemons.filter((pokemon) => pokemon.species !== species));
  };
  return (
    <Layout>
      {!pokemons && (
        <div className="grid h-screen place-items-center">
          <Loader />
        </div>
      )}
      <div className="grid gap-4 grid-cols-2 grid-rows-2">
        {pokemons &&
          pokemons.map((pokemon, index) => {
            console.log(pokemon.species, pokemon.baseStats);
            return (
              <PokeForm
                key={pokemon.species}
                pokemonUrl={pokemon.sprite}
                pokemonBlingUrl={pokemon.shinySprite}
                species={pokemon.species}
                baseStats={pokemon.baseStats}
                onActionHandler={() => onActionHandler(pokemon.species)}
              />
            );
          })}
      </div>
    </Layout>
  );
};

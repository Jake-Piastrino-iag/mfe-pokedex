import React from "react";
//@ts-ignore
import PokeForm from "mfe_forms/PokeForm";
import { useContext } from "react";
import { UserContext } from "../context/UserContext/UserContext";
import { Layout } from "./Layout";
import { Loader } from "../components/loader/Loader";
import { getParentIds } from "../../../../packages/mfe-ui-components/src/utils/getParentIds";

export const UserPokemons = () => {
  const { pokemons, setPokemons } = useContext(UserContext);

  const onTradeHandler = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>, species: string) => {
    setPokemons(pokemons.filter((pokemon) => pokemon.species !== species));

    const event = new CustomEvent('UserPokemons:tradePokemon', {
      bubbles: true,
      detail: {
        moduleName: "UserPokemons:tradePokemonButton",
        event: {
          ancestors: getParentIds(ev.target as Node),
          action: "click",
          shortDescription: `${species.charAt(0).toUpperCase()}${species.slice(1)} traded.`,
          description: `You traded a pokemon! ${species.charAt(0).toUpperCase()}${species.slice(1)} has been removed from your bag.`
        },
      }
    });

    ev.target.dispatchEvent(event);
  };

  return (
    <Layout>
      {!pokemons && (
        <div className="grid h-screen place-items-center">
          <Loader />
        </div>
      )}
      <div id="UserPokemons" className="grid gap-4 grid-cols-2 grid-rows-2">
        {pokemons &&
          pokemons.map((pokemon, index) => {
            return (
              <PokeForm
                key={`${index}-${pokemon.species}`}
                id={`PokeForm-${pokemon.species}-${index}`}
                pokemonUrl={pokemon.sprite}
                pokemonBlingUrl={pokemon.shinySprite}
                species={`${pokemon.species.charAt(0).toUpperCase()}${pokemon.species.slice(1)}`}
                baseStats={pokemon.baseStats}
                onActionHandler={(ev: React.MouseEvent<HTMLButtonElement>) => onTradeHandler(ev, pokemon.species)}
              />
            );
          })}
      </div>
    </Layout>
  );
};

import React from "react";
//@ts-ignore
import PokeForm from "mfe_forms/PokeForm";
import { useContext } from "react";
import { UserContext } from "../context/UserContext/UserContext";
import { Layout } from "./Layout";
import { Loader } from "../components/loader/Loader";
import { useNavigate } from "react-router-dom";

export const UserPokemons = () => {
  const { pokemons, setPokemons } = useContext(UserContext);
  const navigate = useNavigate();

  const onTradeHandler = (species: string) => {
    setPokemons(pokemons.filter((pokemon) => pokemon.species !== species));
  };

  const onSelectHomeHandler = () => {
    navigate("/dashboard");
  };

  return (
    <Layout>
      {!pokemons && (
        <div className="grid h-screen place-items-center">
          <Loader />
        </div>
      )}
      <div id="UserPokemons" className={pokemons.length > 0 ? "grid gap-4 grid-cols-2 grid-rows-2" : "m-8 flex content-center justify-center"}>
        {pokemons.length > 0 ?
          pokemons.map((pokemon, index) => {
            console.log(pokemon.species, pokemon.baseStats);
            return (
              <PokeForm
                key={pokemon.species}
                pokemonUrl={pokemon.sprite}
                pokemonBlingUrl={pokemon.shinySprite}
                species={`${pokemon.species.charAt(0).toUpperCase()}${pokemon.species.slice(1)}`}
                baseStats={pokemon.baseStats}
                onActionHandler={() => onTradeHandler(pokemon.species)}
              />
            );
          }) : (
            <div>
              <h1 className="h1 text-center mb-8">Your bag is empty</h1>
              <button className="btn btn-primary" onClick={onSelectHomeHandler}>Click here to go back to the dashboard</button>
            </div>
          )}
      </div>
    </Layout>
  );
};

import React from "react";
import { Stats } from "mfe-ui-components";

type BaseStats = {
  hp: string;
  attack: string;
  defense: string;
  specialattack: string;
  specialdefense: string;
  speed: string;
};
type PokeFormProps = {
  id: string;
  pokemonUrl: string;
  pokemonBlingUrl: string;
  species: string;
  baseStats: BaseStats;
  onActionHandler(e: React.MouseEvent<HTMLButtonElement>): void;
};

const PokeForm: React.FC<PokeFormProps> = ({ id, pokemonUrl, species, pokemonBlingUrl, baseStats, onActionHandler }) => {
  let formatStats = [];
  for (const [key, value] of Object.entries(baseStats)) {
    if (key !== "__typename") {
      formatStats.push({ title: key, value });
    }
  }
  return (
    <div id={id} className="card card-side bg-base-100 shadow-xl">
      <div className="flex justify justify-around">
        <figure>
          <img src={pokemonUrl} alt={species} />
        </figure>
        <figure>
          <img src={pokemonBlingUrl} alt={species} />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{species}</h2>
        <Stats stats={formatStats} />
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={onActionHandler}>
            Trade
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokeForm;

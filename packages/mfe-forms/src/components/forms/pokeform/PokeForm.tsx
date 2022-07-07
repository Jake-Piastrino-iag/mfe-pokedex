import React from "react";

type BaseStats = {
  hp: string;
  attack: string;
  defense: string;
  specialattack: string;
  specialdefense: string;
  speed: string;
};
type PokeFormProps = {
  pokemonUrl: string;
  pokemonBlingUrl: string;
  species: string;
  baseStats: BaseStats;
};

const PokeForm: React.FC<PokeFormProps> = ({ pokemonUrl, species, pokemonBlingUrl, baseStats }) => {
  const formatStats = Object.entries(baseStats).map((k, v) => console.log(k, v));
  console.log(formatStats);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={pokemonUrl} alt={species} />
      </figure>
      <figure>
        <img src={pokemonBlingUrl} alt={species} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{species}</h2>
        {/*<Stats stats={formatStats}/>*/}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default PokeForm;

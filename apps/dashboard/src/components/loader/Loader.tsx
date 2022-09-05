import React from "react";

export const Loader: React.FC = () => {
  return (
    <div className="flex h-64 w-64 animate-spin">
      <img
        alt="loading...."
        src="https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825789urzm0.png"
      ></img>
    </div>
  );
};

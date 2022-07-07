import React, { createContext } from "react";

type UserContextProps = {
  characterName: string;
  avatarUrl: string;
  pokemons: any[];
  setPokemons: (pokemons: any[]) => void;
};

export const UserContext = createContext<UserContextProps>(null);

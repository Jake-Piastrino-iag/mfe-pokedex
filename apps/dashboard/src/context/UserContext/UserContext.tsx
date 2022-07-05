import React, { createContext } from "react";

type UserContextProps = {
  characterName: string;
  avatarUrl: string;
  pokemons: [];
  setPokemons(): void;
};

export const UserContext = createContext<UserContextProps>(null);

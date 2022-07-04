import React, { createContext } from "react";

type UserContextProps = {
  characterName: string;
  avatarUrl: string;
  pokemons: [];
};

export const UserContext = createContext<UserContextProps>(null);

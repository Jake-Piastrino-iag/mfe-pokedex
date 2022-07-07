import React, { createContext } from "react";

type UserContextProps = {
  characterName: string;
  setCharacterName: (name: string) => void;
  avatarUrl: string;
  setAvatarUrl: (url: string) => void;
  email: string;
  setEmail: (email: string) => void;
  pokemons: any[];
  setPokemons: (pokemons: any[]) => void;
};

export const UserContext = createContext<UserContextProps>(null);

import React from "react";
//@ts-ignore
import App from "mfe_forms/App";
import { UserContext } from "../context/UserContext/UserContext";

export const SignUpPage = () => (
  <div>
    <UserContext.Provider
      value={{
        characterName: "Ash Ketchum",
        avatarUrl: "https://avatars.dicebear.com/api/adventurer/:seed.svg",
        pokemons: [],
        setPokemons: () => {}
      }}
    >
      <App />
    </UserContext.Provider>
  </div>
);

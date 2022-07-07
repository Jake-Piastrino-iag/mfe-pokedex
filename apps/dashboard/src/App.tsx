import React, { useState } from "react";
//@ts-ignore
import App from "mfe_forms/App";
import { AppContext } from "./context/AppContext/AppContext";
import { UserContext } from "./context/UserContext/UserContext";
import { Link } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  const [federatedComponents, showFederatedComponents] = useState(false);
  const [character, setCharacter] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [userPokemons, setUserPokemons] = useState<any[]>([]);

  return (
    <AppContext.Provider
      value={{ showFederatedComponents: federatedComponents, setShowFederatedComponents: showFederatedComponents }}
    >
      <UserContext.Provider
        value={{
          characterName: character,
          setCharacterName: setCharacter,
          avatarUrl: avatar,
          setAvatarUrl: setAvatar,
          email: email,
          setEmail: setEmail,
          pokemons: userPokemons,
          setPokemons: setUserPokemons
        }}
      >
        <AppRoutes />
      </UserContext.Provider>
    </AppContext.Provider>
  );
};

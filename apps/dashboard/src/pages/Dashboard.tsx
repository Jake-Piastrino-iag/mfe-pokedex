import React, { useState, useContext, useEffect } from "react";

import { AppContainer } from "../components/hoc/container/Container";
import { AppFooter } from "../components/footer/Footer";
import { AppHeader } from "../components/header/Header";
import { UserContext } from "../context/UserContext/UserContext";
import { AppContext } from "../context/AppContext/AppContext";

export const Dashboard = () => {
  const { characterName, avatarUrl, pokemons, setPokemons } = useContext(UserContext);
  const { showFederatedComponents, setShowFederatedComponents } = useContext(AppContext);

  const [character, setCharacter] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userPokemons, setUserPokemons] = useState<any[]>([]);
  const [showProfile, setShowProfile] = useState<boolean>(false);

  const onSelectedHandler = () => {};

  return (
    <>
      <AppHeader
        onSelectedHandler={onSelectedHandler}
        navbarText="Pokemon Trading"
        selectedNumber={userPokemons.length}
        avatarUrl={avatar}
        showProfile={showProfile}
      ></AppHeader>

      <AppFooter footerText="Shaarang Tanpure @FSO-DET EY" footerHelperText="A demo app">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              className="toggle"
              checked={showFederatedComponents}
              onClick={() => setShowFederatedComponents(!showFederatedComponents)}
            />
            <h4 className="label-text">Show federated components</h4>
          </label>
        </div>
      </AppFooter>
    </>
  );
};

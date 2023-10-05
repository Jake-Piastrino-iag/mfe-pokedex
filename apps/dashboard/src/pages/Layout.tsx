import React, { useState, useContext, useEffect } from "react";

import { AppContainer } from "../components/hoc/container/Container";
import { AppFooter } from "../components/footer/Footer";
import { AppHeader } from "../components/header/Header";
import { UserContext } from "../context/UserContext/UserContext";
import { AppContext } from "../context/AppContext/AppContext";
import { useNavigate } from "react-router-dom";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { characterName, setCharacterName, avatarUrl, setAvatarUrl, pokemons, setPokemons } = useContext(UserContext);
  const { showFederatedComponents, setShowFederatedComponents } = useContext(AppContext);
  const [showProfile, setShowProfile] = useState(true);
  const navigate = useNavigate();

  const onSelectedHandler = () => {
    navigate("/my-pokemons");
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    setCharacterName(userData.characterName);
    setAvatarUrl(userData.avatar);
  }, []);

  return (
    <>
      {characterName && (
        <div>
          <AppHeader
            onSelectedHandler={onSelectedHandler}
            navbarText="Pokemon Trading"
            selectedNumber={pokemons.length}
            avatarUrl={avatarUrl}
            showProfile={showProfile}
          ></AppHeader>
          <div className={`${showFederatedComponents ? "border-solid border-2 border-rose-500 my-2" : ""}`}>
            <AppContainer>{children}</AppContainer>
          </div>
          <AppFooter footerText="Pokedex trading" footerHelperText="A demo app">
            <div className="form-control">
              <label className="label cursor-pointer">
                <h4 className="label-text mr-4">Show federated components</h4>
                <input
                  type="checkbox"
                  className="toggle checkbox checkbox-lg checkbox-primary"
                  checked={showFederatedComponents}
                  onChange={() => setShowFederatedComponents(!showFederatedComponents)}
                />
              </label>
            </div>
          </AppFooter>
        </div>
      )}
    </>
  );
};

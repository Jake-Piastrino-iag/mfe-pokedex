import React, { useState, useContext, useEffect } from "react";
import { Hero } from "mfe-ui-components";
import { SignUpForm } from "../../components/forms/signup/Signup";
import { LoginForm } from "../../components/forms/login/Login";

export const SignUpPage = () => {
  const [isSignUp, setSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [avatar, setAvatar] = useState("https://avatars.dicebear.com/api/adventurer/:seed.svg");
  const [characterName, setCharacterName] = useState("Ash Ketchum");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    switch (type) {
      case "CHARACTER":
        setCharacterName(e.target.value);
        break;
      case "EMAIL":
        setEmail(e.target.value);
        break;
      case "PASSWORD":
        setPassword(e.target.value);
        break;
      case "RETYPE-PASSWORD":
        setRetypePassword(e.target.value);
        break;
    }
  };

  const getRandomNumbers = () => {
    return Math.floor(Math.random() * (400 - 0 + 1) + 0);
  };

  const updateAvatarHandler = () => {
    setAvatar(`https://avatars.dicebear.com/api/adventurer/:${getRandomNumbers()}.svg`);
  };

  return (
    <Hero
      heading={isSignUp ? "Sign-up to be a pokemon trainer" : "Login to check your stats"}
      info={isSignUp ? "Choose an avatar and get started" : "Log back in"}
      toggleHandler={() => setSignUp(!isSignUp)}
    >
      {isSignUp && (
        <SignUpForm
          characterName={characterName}
          updateCharacterName={(e) => onChangeHandler(e, "CHARACTER")}
          password={password}
          updatePassword={(e) => onChangeHandler(e, "CHARACTER")}
          email={email}
          updateEmail={(e) => onChangeHandler(e, "CHARACTER")}
          avatar={avatar}
          updateAvatar={updateAvatarHandler}
          reEnterPassword={retypePassword}
          reTypedPassword={(e) => onChangeHandler(e, "RETYPE-PASSWORD")}
          onFormActionHandler={() => {}}
        />
      )}
      {!isSignUp && (
        <LoginForm
          email={email}
          setEmail={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          password={password}
          setPassword={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          onLoginHandler={() => console.log("login")}
        />
      )}
    </Hero>
  );
};

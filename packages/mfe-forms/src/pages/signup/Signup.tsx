import React, { useState } from "react";
import { Hero } from "mfe-ui-components";
import { SignUpForm } from "../../components/forms/signup/Signup";
import { LoginForm } from "../../components/forms/login/Login";
import { hashedPassword } from "../../utils/hashPassword";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const [isSignUp, setSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [avatar, setAvatar] = useState("https://avatars.dicebear.com/api/adventurer/:seed.svg");
  const [characterName, setCharacterName] = useState("Ash Ketchum");
  const navigate = useNavigate();

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

  const onUserSignUpHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const userData = {
      characterName,
      avatar,
      password: hashedPassword(password),
      email
    };
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/dashboard");
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
          updateCharacterName={(e) => setCharacterName(e.target.value)}
          password={password}
          updatePassword={(e) => setPassword(e.target.value)}
          email={email}
          updateEmail={(e) => setEmail(e.target.value)}
          avatar={avatar}
          updateAvatar={updateAvatarHandler}
          reEnterPassword={retypePassword}
          reTypedPassword={(e) => setRetypePassword(e.target.value)}
          onFormActionHandler={onUserSignUpHandler}
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

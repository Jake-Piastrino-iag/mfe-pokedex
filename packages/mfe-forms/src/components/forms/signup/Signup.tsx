import React from "react";

type SignUpFormProps = {
  characterName: string;
  updateCharacterName(e: React.ChangeEvent<HTMLInputElement>): void;
  avatar: string;
  updateAvatar(e: React.MouseEvent<HTMLButtonElement>): void;
  email: string;
  updateEmail(e: React.ChangeEvent<HTMLInputElement>): void;
  password: string;
  updatePassword(e: React.ChangeEvent<HTMLInputElement>): void;
  reEnterPassword: string;
  reTypedPassword(e: React.ChangeEvent<HTMLInputElement>): void;
  onFormActionHandler(e: React.MouseEvent<HTMLButtonElement>): void;
};

export const SignUpForm: React.FC<SignUpFormProps> = ({
  characterName,
  updateAvatar,
  avatar,
  updatePassword,
  updateEmail,
  updateCharacterName,
  password,
  reEnterPassword,
  email,
  reTypedPassword,
  onFormActionHandler
}) => {
  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="flex justify-center">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src={avatar} />
            </div>
          </div>
          <div className="form-control w-full mt-6 ml-3">
            <button className="btn btn-primary" onClick={updateAvatar}>
              Get different avatar
            </button>
          </div>
        </div>
        <div className="form-control  w-full">
          <label className="label">
            <span className="label-text">Character Name</span>
          </label>
          <input
            type="text"
            placeholder={characterName}
            className="input w-full max-w-xs input-accent"
            onChange={updateCharacterName}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input w-full max-w-xs  input-accent"
            onChange={updateEmail}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input  w-full max-w-xs input-accent"
            onChange={updatePassword}
          />
          <label className="label">
            <span className="label-text"> Re-type Password</span>
          </label>
          <input
            type="password"
            placeholder="Retype password"
            className="input w-full max-w-xs input-accent"
            value={reEnterPassword}
            onChange={reTypedPassword}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary btn-wide" onClick={onFormActionHandler}>
            Lets Begin !
          </button>
        </div>
      </div>
    </div>
  );
};

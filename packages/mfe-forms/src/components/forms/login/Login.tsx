import React from "react";

type LoginProps = {
  email: string;
  setEmail: React.ChangeEventHandler<HTMLInputElement>;
  password: string;
  setPassword: React.ChangeEventHandler<HTMLInputElement>;
  onLoginHandler(e: React.MouseEvent<HTMLButtonElement>): void;
};

export const LoginForm: React.FC<LoginProps> = ({ email, setEmail, setPassword, password, onLoginHandler }) => {
  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input  w-full input-bordered input-info"
            value={email}
            onChange={setEmail}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input  w-full input-bordered input-info"
            value={password}
            onChange={setPassword}
          />
        </div>
        <div className="form-control mt-6 text-center items-center w-full">
          <button className="btn btn-primary" onClick={onLoginHandler}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

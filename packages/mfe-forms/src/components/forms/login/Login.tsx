import React from "react";

type LoginProps = {
  email: string;
  setEmail: React.ChangeEventHandler<HTMLInputElement>;
  password: string;
  setPassword: React.ChangeEventHandler<HTMLInputElement>;
  onLoginHandler(): void;
};

export const LoginForm: React.FC<LoginProps> = ({ email, setEmail, setPassword, password, onLoginHandler }) => {
  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" value={email} onChange={setEmail} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
            value={password}
            onChange={setPassword}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={onLoginHandler}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

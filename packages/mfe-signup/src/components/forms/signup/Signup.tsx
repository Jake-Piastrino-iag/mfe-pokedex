import React from "react";
import { Hero } from "mfe-ui-components";

const SignUpForm = ({}) => {
  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-xl">
            <img src="https://api.lorem.space/image/face?hash=92048" />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Character Name</span>
          </label>
          <input
            type="text"
            placeholder="Character Name"
            className="input w-1/2 max-w-xs "
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input   w-full max-w-xs  input-accent"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input  w-full max-w-xs input-accent"
          />
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input  w-full max-w-xs input-accent"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Lets Begin !</button>
        </div>
      </div>
    </div>
  );
};
export const SignUpComponent = ({}) => {
  return (
    <Hero heading="Signup here" info="Some info">
      <SignUpForm />
    </Hero>
  );
};

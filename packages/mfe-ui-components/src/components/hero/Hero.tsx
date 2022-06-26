import React from "react";

type HeroProps = React.PropsWithChildren & {
  heading: string;
  info: string;
};

export const Hero: React.FC<HeroProps> = ({ heading, info, children }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:text-left">
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="py-6">{info}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-xl">
                <img src="https://avatars.dicebear.com/api/adventurer/:seed.svg" />
              </div>
              <div className="form-control w-1/2 mt-6">
                <button className="btn btn-primary">
                  Get different avatar
                </button>
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
      </div>
    </div>
  );
};

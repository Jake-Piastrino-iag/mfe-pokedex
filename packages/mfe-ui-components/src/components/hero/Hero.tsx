import React from "react";

type HeroProps = React.PropsWithChildren & {
  heading: string;
  info: string;
  toggleHandler(e: React.ChangeEvent<HTMLInputElement>): void;
};

export const Hero: React.FC<HeroProps> = ({ heading, info, children, toggleHandler }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col xl:flex-row-reverse">
        <div className="lg:text-left">
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="py-6">{info}</p>
          <div className="text-center">
            <label className="swap">
              <input type="checkbox" onChange={toggleHandler} />
              <div className="swap-on">ON</div>
              <div className="swap-off">OFF</div>
            </label>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

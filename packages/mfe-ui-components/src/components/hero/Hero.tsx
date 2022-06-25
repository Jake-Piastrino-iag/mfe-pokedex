import React from "react";

type HeroProps = {
  heading: string;
  info: string;
  component: React.ReactNode;
};

export const Hero: React.FC<HeroProps> = ({ heading, info, component }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="py-6">{info}</p>
        </div>
        <div>{component}</div>
      </div>
    </div>
  );
};

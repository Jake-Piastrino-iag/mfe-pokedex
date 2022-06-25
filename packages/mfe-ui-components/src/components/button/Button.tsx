import React from "react";

type ButtonProps = {
  size: "xs" | "sm" | "md" | "wide";
  color: "primary" | "secondary" | "ghost" | "link";
  text: string;
  onClickHandler?(): React.MouseEvent<HTMLInputElement>;
};

export const Button: React.FC<ButtonProps> = ({
  size,
  color,
  text,
  onClickHandler,
}) => {
  return (
    <button className={`btn btn-${color} btn-${size}`} onClick={onClickHandler}>
      {text}
    </button>
  );
};

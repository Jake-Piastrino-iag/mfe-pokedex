import React from "react";

type CardProps = {
  imageUrl?: string;
  imageAlt?: string;
  header: string;
  body: React.ReactNode;
  actionText: string;
  onActionHandler(): React.MouseEvent<HTMLInputElement>;
};

export const CardComponent: React.FC<CardProps> = ({
  imageUrl,
  imageAlt,
  header,
  body,
  actionText,
  onActionHandler,
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {imageUrl && (
        <figure>
          <img src={imageUrl} alt={imageAlt} />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{header}</h2>
        {body}
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={onActionHandler}>
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
};

import React from "react";

type CardProps = {
  imageUrl?: string;
  imageAlt?: string;
  header: string;
  body: React.ReactNode;
  badge?: string[];
  actionText: string;
  onActionHandler(e: React.MouseEvent<HTMLButtonElement>): void;
};

export const CardComponent: React.FC<CardProps> = ({
  imageUrl,
  imageAlt,
  header,
  badge,
  body,
  actionText,
  onActionHandler
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {imageUrl && (
        <figure className="mt-4">
          <img src={imageUrl} alt={imageAlt} />
        </figure>
      )}
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {header}
          {badge && badge.map((option) => <div className="badge badge-secondary">{option}</div>)}
        </h2>
        {body && body}
        <div className="card-actions">
          <button className="btn btn-primary" onClick={onActionHandler}>
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
};

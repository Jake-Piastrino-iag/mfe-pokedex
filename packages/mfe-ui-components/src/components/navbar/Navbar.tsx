import React from "react";

type NavBarProps = {
  navbarText: string;
  onSelectHomeHandler(): void;
  selectedNumber?: number;
  navbarLink?: string;
  onSelectedHandler(): void;
  avatarUrl?: string;
  showProfile: boolean;
  navProfleOptions?: React.ReactNode;
};

export const NavBar: React.FC<NavBarProps> = ({
  navbarText,
  onSelectHomeHandler,
  selectedNumber,
  onSelectedHandler,
  showProfile,
  avatarUrl,
  navProfleOptions
}) => {
  return (
    <div className="navbar bg-base-100 bg-primary text-primary-content fixed top-0 z-10">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" onClick={onSelectHomeHandler}>{navbarText}</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{selectedNumber}</span>
            </div>
          </label>
          <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg text-red-400">{selectedNumber} pokemons in bag</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block" onClick={onSelectedHandler}>
                  View Selected
                </button>
              </div>
            </div>
          </div>
        </div>
        {showProfile && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avatarUrl} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navProfleOptions && navProfleOptions}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

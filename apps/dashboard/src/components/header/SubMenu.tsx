import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";

export const SubMenu = () => {
  const { avatarUrl } = useContext(UserContext);
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={avatarUrl} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-stone-800"
      >
        <li>
          <a className="justify-between text-stone-800">Profile</a>
        </li>
        <li>
          <a className="text-stone-800">Settings</a>
        </li>
        <li>
          <a className="text-stone-800">Logout</a>
        </li>
      </ul>
    </div>
  );
};

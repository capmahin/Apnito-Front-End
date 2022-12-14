import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const menuItem = (
    <>
      <li>
        <Link to="/">Indian Classical </Link>
      </li>

      <li>
        <Link to="/Ghazal">Ghazal</Link>
      </li>

      <li>
        <Link to="/indianPop">Indian Pop</Link>
      </li>
      <li>
        <Link to="/westernClassical">Western Classical</Link>
      </li>
    </>
  );
  return (
    <div className="navbar grid justify-items-start pl-56 w-full border-solid border-b-2 border-primary bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary"
          >
            {menuItem}
          </ul>
        </div>
      </div>
      <div className="navbar-start hidden  lg:flex ">
        <ul className="menu menu-horizontal p-0 text-primary">{menuItem}</ul>
      </div>
    </div>
  );
};

export default NavBar;

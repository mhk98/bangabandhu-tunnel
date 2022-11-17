import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  let logout = () => {
    localStorage.removeItem("SavedToken");
    navigate("/login");
  };

  const [darkToggle, setDarkToggle] = useState(false);
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      {/* Navbar start */}
      {/* <div className="navbar bg-neutral text-neutral-content shadow">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow dark:bg-white bg-base-100 rounded-box w-52"
            >
              <li className="text-black dark:text-black">
                <Link to={`/status/${id}`}>Account Status</Link>
              </li>
              <li className="text-black dark:text-black">
                <Link to="/history">Account History</Link>
              </li>
              <li className="text-black dark:text-black">
                <Link to="/recharge">Recharge</Link>
              </li>
              <li className="text-black dark:text-black">
                <Link to="/QA">QA</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <h2 className="btn btn-ghost normal-case text-sm sm:text-base">
              Karnafuli Tunnel
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-4">
            <li>
              <Link to={`/status/${id}`}>Account Status</Link>
            </li>
            <li>
              <Link to="/history">Account History</Link>
            </li>
            <li>
              <Link to="/recharge">Recharge</Link>
            </li>
            <li>
              <Link to="/QA">QA</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {localStorage.getItem("SavedToken") ? (
            <Link onClick={logout} className="cursor-pointer btn">
              Log out
            </Link>
          ) : (
            <Link className="btn" to="login">
              Login
            </Link>
          )}
        </div>
      </div> */}
      {/* Navbar end */}

      
    </>
  );
};

export default Navbar;

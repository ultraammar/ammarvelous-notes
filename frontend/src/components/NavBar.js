import React from "react";
import { Link } from "react-router-dom";
import authStore from "stores/authStore";

export const NavBar = () => {

    const store = authStore();
  return (
    <>
      <div className="navbar glass glass-effect-cards bg-base-100 shadow-xl">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/notes">Notes</Link></li>
                <li><Link to="#">My Account</Link></li>
            </ul>
            </div>
            <Link to="" className="btn btn-ghost text-xl">Ammarvelous Notes</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><Link to="/notes">Notes</Link></li>
            <li><Link to="#">My Account</Link></li>
            </ul>
        </div>
        {store.loggedIn && 
            <div className="navbar-end">
                <Link to="/logout" className="btn">Logout</Link>
            </div>
        }
        {!store.loggedIn && 
            <div className="navbar-end">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/signup" className="btn">Signup</Link>
            </div>
        }
        </div>
    </>
  );
};

import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="navbar shadow-sm absolute t-0 r-0 bg-base-100 pr-6">
        <div className="flex-1">
          <img src="logo.png" className="w-28" alt="" />
        </div>
        {/* <marquee behavior="" direction="" className="px-5 text-xl">Battle Zone | Xalq hal qiladi !</marquee> */}
        <div className="flex-none sm:hidden">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle shadow-sm"
            >
              <div className="w-10 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-bars text-xl"></i>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-2xl"
            >
              {/* <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li> */}
              <li>
                <Link to={'/'}>Bosh sahifa</Link>
              </li>
              <li>
                <Link to={'/accaunt'}>Kirish</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden sm:block">
          <ul className="menu menu-horizontal p-0 font-medium">
            <li><Link to={'/'} href="#" className="text-xl">Bosh  sahifa</Link></li>
            <li><Link to={'/accaunt'} href="#" className="text-xl">Kirish</Link></li>
          </ul>
        </div>
      </div>
  );
}

export default Header;

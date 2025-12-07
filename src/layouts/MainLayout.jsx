import React, { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

function MainLayout() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div className="bg-base-300 absolute h-full w-full">
      {/* sidebar */}
      <div className={`w-[300px] h-screen bg-base-100 shadow-xl absolute top-0 z-50 ${sidebar ? 'left-0' : '-left-[300px]'}`}>
        <i className="fa-solid fa-xmark absolute top-4 right-4 text-2xl md:-top-6 cursor-pointer" onClick={() => setSidebar(false)}></i>
        <div className="w-full h-18 flex items-end justify-center">
          <h1 className="text-3xl font-bold">
            Battle<span className="f-c">Zone</span>
          </h1>
        </div>
        <ul className="menu w-full mt-12 gap-2 sidebar-style z-50">
          <li className="text-black font-semibold">
            <NavLink to="/main" end>
              <i className="fa-solid fa-house text-2xl"></i>
              <span className="text-xl">Bosh sahifa</span>
            </NavLink>
          </li>
          <li className="text-black font-semibold">
            <NavLink to="/main/battles">
              <i className="fa-solid fa-trophy text-2xl"></i>
              <span className="text-xl">Jang maydoni</span>
            </NavLink>
          </li>
          <li className="text-black font-semibold">
            <NavLink to="/main/custom-battles">
              <i className="fa-solid fa-users-viewfinder text-2xl"></i>
              <span className="text-xl">Uyushtirilgan janglar</span>
            </NavLink>
          </li>
          <li className="text-black font-semibold">
            <NavLink to="/main/statistics">
              <i className="fa-solid fa-chart-pie text-2xl"></i>
              <span className="text-xl">Statistika</span>
            </NavLink>
          </li>
          <li className="text-black font-semibold">
            <NavLink to="/main/create-battle">
              <i className="fa-solid fa-square-plus text-2xl"></i>
              <span className="text-xl">Jang yaratish</span>
            </NavLink>
          </li>
          <li className="text-black font-semibold">
            <NavLink to="/main/profile">
              <i className="fa-solid fa-user text-2xl"></i>
              <span className="text-xl">Profil</span>
            </NavLink>
          </li>
          <li className="text-red-600 font-semibold">
            <Link to={'/'}>
              <i className="fa-solid fa-arrow-right-from-bracket rotate-180 text-2xl"></i>
              <span className="text-xl">Chiqish</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* navbar */}
      <div className={`absolute top-0 h-[70px] ${sidebar ? 'w-full md:w-[calc(100vw-300px)] md:left-[300px]' : 'w-full left-0'} bg-base-100 flex items-center justify-between px-4`}>
        <i className="fa-solid fa-bars text-3xl hover:cursor-pointer" onClick={() => setSidebar(sidebar ? false : true)}></i>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar w-14 h-14"
          >
            <img src="../avatars/1.png" className="rounded-full bg-f-c" />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="text-center mb-2 font-semibold">username</li>
            <li>
              <Link to={'/main/profile'}>Profil</Link>
            </li>
            <li>
              <Link to={'/main/create-battle/'}>Jang yaratish</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* hibryd page */}
      <div className={`${sidebar ? 'md:w-[calc(100vw-300px)] md:ml-[300px]' : 'w-full ml-0'} h-[calc(100vh-70px)] bg-base-300] mt-[70px] overflow-y-auto p-2 pt-8`}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;

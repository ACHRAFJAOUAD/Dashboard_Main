import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-red-100 text-gray-600 w-full fixed top-0 z-10 flex items-center justify-between px-6  py-2 h-16">
      <h1 className="text-3xl text-black font-bold">
        <NavLink to="/" activeClassName="text-blue-500">
          Dashboard
        </NavLink>
      </h1>
      <div className="flex items-center">
        
        <NavLink to="/" className="mr-4">
          Back To HomePage
        </NavLink>
        <FontAwesomeIcon icon={faBell} className="text-gray-600" />
      </div>
    </div>
  );
};

export default Navbar;

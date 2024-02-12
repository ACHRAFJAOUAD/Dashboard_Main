import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-gray-100 text-gray-600 w-64 flex-shrink-0 fixed top-0  z-10 overflow-x-auto">
      <h1 className="text-2xl text-black font-bold">Dashboard</h1>
      <div className="flex items-center mr-6">
        <button className="bg-white hover:bg-blue-500 text-blue-500 border border-blue-500 hover:text-white hover:border-blue-700 font-bold py-2 px-4 rounded mr-6">
          Back To HomePage
        </button>
        <FontAwesomeIcon icon={faBell} className="text-gray-600" />
      </div>
    </div>
  );
};

export default Navbar;

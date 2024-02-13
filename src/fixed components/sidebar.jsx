import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faBriefcase,
  faSearch,
  faBuilding,
  faUser,
  faCog,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-gray-600 w-64 h-screen fixed top-0 left-0 z-10 overflow-y-auto">
      <div className="p-4 flex flex-col items-center">
        <div className="p-4 flex items-center justify-between">
          <img
            src="user-avatar.jpg"
            alt="User Avatar"
            className="h-12 w-12 mb-4 rounded-full"
          />
          <h1 className="text-xl font-bold mb-4">
            <NavLink to="/" activeClassName="text-blue-500">
              JobHuntly
            </NavLink>
          </h1>
        </div>
        <ul className="space-y-2 text-left">
          <li>
            <NavLink
              to="/"
              exact
              className={`hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded ${
                window.location.pathname === "/" ? "text-blue-500" : ""
              }`}
              activeClassName="text-blue-500"
            >
              <span className="inline-block w-6 mr-2">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={`hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded ${
                window.location.pathname.includes("/messages")
                  ? "text-blue-500"
                  : ""
              }`}
              activeClassName="text-blue-500"
            >
              <span className="inline-block w-6 mr-2">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/applications"
              className={`hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded ${
                window.location.pathname.includes("/applications")
                  ? "text-blue-500"
                  : ""
              }`}
              activeClassName="text-blue-500"
            >
              <span className="inline-block w-6 mr-2">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              My Applications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/find-jobs"
              className={`hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded ${
                window.location.pathname.includes("/find-jobs")
                  ? "text-blue-500"
                  : ""
              }`}
              activeClassName="text-blue-500"
            >
              <span className="inline-block w-6 mr-2">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              Find Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/browse-companies"
              className={`hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded ${
                window.location.pathname.includes("/browse-companies")
                  ? "text-blue-500"
                  : ""
              }`}
              activeClassName="text-blue-500"
            >
              <span className="inline-block w-6 mr-2">
                <FontAwesomeIcon icon={faBuilding} />
              </span>
              Browse Companies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/public-profile"
              className={`hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded ${
                window.location.pathname.includes("/public-profile")
                  ? "text-blue-500"
                  : ""
              }`}
              activeClassName="text-blue-500"
            >
              <span className="inline-block w-6 mr-2">
                <FontAwesomeIcon icon={faUser} />
              </span>
              My Public Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="border-blue-500 my-4 hover:border-blue-700" />
      <div className="p-4  mt-auto">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <ul className="space-y-2 text-left">
          <li>
            <NavLink
              to="/settings"
              className={`hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded ${
                window.location.pathname.includes("/settings")
                  ? "text-blue-500"
                  : ""
              }`}
              activeClassName="text-blue-500"
            >
              <span className="inline-block w-6 mr-2">
                <FontAwesomeIcon icon={faCog} />
              </span>
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={`hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded ${
                window.location.pathname.includes("/help")
                  ? "text-blue-500"
                  : ""
              }`}
              activeClassName="text-blue-500"
            >
              <span className="inline-block w-6 mr-2">
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
              Help Center
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="p-4 flex items-center justify-between fixed bottom-0">
        <img
          src="user-avatar.jpg"
          alt="User Avatar"
          className="h-12 w-12 rounded-full mr-2"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">ACHRAF NADI</h2>
          <p className="text-sm text-gray-500">zahya_3wachr@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

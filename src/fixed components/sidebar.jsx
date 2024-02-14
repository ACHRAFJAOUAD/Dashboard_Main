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
    <div className="sidebar bg-gray-100 text-gray-600 w-72 px-6 h-screen left-0 z-10 overflow-y-auto flex flex-col justify-between">
      <div>
        <div className="p-4 flex items-center">
          <img
            src="avatar.png"
            alt="User Avatar"
            className="h-12 w-12 rounded-full mr-4"
          />
          <h1 className="text-xl font-bold">JobHuntly</h1>
        </div>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white  bg-blue-500 nav-link flex items-center px-4 py-2"
                  : "nav-link flex items-center px-4 py-2 hover:bg-blue-200 hover:text-blue-600"
              }
            >
              <FontAwesomeIcon icon={faHome} />
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                isActive
                  ? "text-white  bg-blue-500 nav-link flex items-center px-4 py-2"
                  : "nav-link flex items-center px-4 py-2  hover:bg-blue-200 hover:text-blue-600"
              }
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ml-3">Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/applications"
              className={({ isActive }) =>
                isActive
                  ? "text-white  bg-blue-500 nav-link flex items-center px-4 py-2"
                  : "nav-link flex items-center px-4 py-2  hover:bg-blue-200 hover:text-blue-600"
              }
            >
              <FontAwesomeIcon icon={faBriefcase} />
              <span className="ml-3">My Applications</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/find-jobs"
              className={({ isActive }) =>
                isActive
                  ? "text-white  bg-blue-500 nav-link flex items-center px-4 py-2"
                  : "nav-link flex items-center px-4 py-2  hover:bg-blue-200 hover:text-blue-600"
              }
            >
              <FontAwesomeIcon icon={faSearch} />
              <span className="ml-3">Find Jobs</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/browse-companies"
              className={({ isActive }) =>
                isActive
                  ? "text-white  bg-blue-500 nav-link flex items-center px-4 py-2"
                  : "nav-link flex items-center px-4 py-2  hover:bg-blue-200 hover:text-blue-600"
              }
            >
              <FontAwesomeIcon icon={faBuilding} />
              <span className="ml-3">Browse Companies</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/public-profile"
              className={({ isActive }) =>
                isActive
                  ? "text-white  bg-blue-500 nav-link flex items-center px-4 py-2"
                  : "nav-link flex items-center px-4 py-2  hover:bg-blue-200 hover:text-blue-600"
              }
            >
              <FontAwesomeIcon icon={faUser} />
              <span className="ml-3">My Public Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive
                    ? "text-white  bg-blue-500 nav-link flex items-center px-4 py-2"
                    : "nav-link flex items-center px-4 py-2  hover:bg-blue-200 hover:text-blue-600"
                }
              >
                <FontAwesomeIcon icon={faCog} />
                <span className="ml-3">Settings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-500 nav-link flex items-center px-4 py-2"
                    : "nav-link flex items-center px-4 py-2  hover:bg-blue-200 hover:text-blue-600"
                }
              >
                <FontAwesomeIcon icon={faQuestionCircle} />
                <span className="ml-3">Help Center</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end pr-8 pt-4">
        <div className="flex items-center mb-4">
          <img
            src="avatar.png"
            alt="User Avatar"
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-bold">ACHRAF NADI</h2>
            <p className="text-sm text-gray-500">zahya_3wachr@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
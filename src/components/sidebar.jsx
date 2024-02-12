import React from "react";
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
    <div className="bg-gray-100 text-gray-600 w-64 h-screen flex-shrink-0 fixed top-0 left-0 z-10 overflow-y-auto">
      <div className="p-4 flex flex-col items-center">
        <div className="p-4 flex items-center justify-between">
          <img
            src="user-avatar.jpg"
            alt="User Avatar"
            className="h-12 w-12 mb-4 rounded-full"
          />
          <h1 className="text-xl font-bold mb-4">JobHuntly</h1>
        </div>
        <ul className="space-y-2 text-left">
          <li className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded">
            <span className="inline-block w-6 mr-2">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <a href="#">Dashboard</a>
          </li>
          <li className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded">
            <span className="inline-block w-6 mr-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <a
              href="#"
              className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded"
            >
              Messages
            </a>
          </li>
          <li className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded">
            <span className="inline-block w-6 mr-2">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            <a
              href="#"
              className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded"
            >
              My Applications
            </a>
          </li>
          <li className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded">
            <span className="inline-block w-6 mr-2">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <a
              href="#"
              className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded"
            >
              Find Jobs
            </a>
          </li>
          <li className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded">
            <span className="inline-block w-6 mr-2">
              <FontAwesomeIcon icon={faBuilding} />
            </span>
            <a
              href="#"
              className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded"
            >
              Browse Companies
            </a>
          </li>
          <li className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded">
            <span className="inline-block w-6 mr-2">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <a
              href="#"
              className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded"
            >
              My Public Profile
            </a>
          </li>
        </ul>
      </div>
      <hr className="border-blue-500 my-4 hover:border-blue-700" />
      <div className="p-4  mt-auto">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <ul className="space-y-2 text-left">
          <li className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded">
            <span className="inline-block w-6 mr-2">
              <FontAwesomeIcon icon={faCog} />
            </span>
            <a
              href="#"
              className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded"
            >
              Settings
            </a>
          </li>
          <li className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded">
            <span className="inline-block w-6 mr-2">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </span>
            <a
              href="#"
              className="hover:text-blue-500 hover:bg-blue-100 py-1 px-2 rounded"
            >
              Help Center
            </a>
          </li>
        </ul>
      </div>

      <div className="p-4 flex items-center justify-between fixed bottom-0 ">
        <img
          src="user-avatar.jpg"
          alt="User Avatar"
          className="h-12 w-12 rounded-full mr-2"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">ACHRAF NADI</h2>
          <p className="text-sm text-gray-500">zahya_3wachr@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

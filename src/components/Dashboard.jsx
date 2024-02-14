import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="flex justify-between flex-col p-8 ">
      {/* Greeting */}
      <div className="greeting py-8 px-8 flex items-center">
        <div>
          <h2 className="text-xl font-bold mr-4">Good morning, Jake</h2>
          <p className="text-gray-600">
            Here is what's happening with your job search applications from July
            19 - July 25.
          </p>
        </div>
        <div className="flex items-center ml-auto bg-white border border-blue-500 font-bold py-2 px-4 rounded mr-6">
          <p className="text-gray-600">
            Jul 19 - Jul 25
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="ml-2 text-blue-500"
            />
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between">
        <div>
          <div className="bg-white border border-blue-500   font-bold py-2 px-4 rounded mr-6">
            <div className="text-xl font-semibold">Total Jobs Applied</div>
            <div className="text-3xl font-bold">10</div>
            <img src="job_apply.png" alt="Job Apply" className="w-32 h-auto " />
          </div>
          <div className="bg-white border border-blue-500 font-bold py-2 px-4 rounded mr-6 mt-4">
            <div className="text-xl font-semibold">Interviewed</div>
            <div className="text-3xl font-bold">5</div>
            <img src="schedule.png" alt="Job Apply" className="w-32 h-auto" />
          </div>
        </div>

        {/* Jobs Applied Status */}
        <div className="flex flex-col items-center  bg-white border border-blue-500 font-bold py-2 px-4 rounded mr-6">
          <div className="text-xl font-semibold">Jobs Applied Status</div>
          <div className="rounded-full h-24 w-24 bg-gray-300 flex items-center justify-center">
            <span className="bg-white border-white"></span>
          </div>
          <NavLink
            to="/applications"
            className="text-blue-500 mt-2 flex items-center"
          >
            View All Applications
            <FontAwesomeIcon
              icon={faAngleRight}
              className="ml-2 text-blue-500"
            />
          </NavLink>
        </div>

        {/* Upcoming Interviews */}
        <div className="flex flex-col items-center  bg-white border border-blue-500 font-bold py-2 px-4 rounded mr-6">
          <h1 className="text-xl font-semibold">Upcoming Interviews</h1>
          <hr className="my-4 w-full" />
          <h2>Today, 26 November</h2>
          <hr className="my-4 w-full" />
          <div className="bg-gray-200 p-4 rounded">
            <div className="flex items-center">
              <p>10:30 AM:</p>
              <img
                src="user-avatar.jpg"
                alt="User Avatar"
                className="h-8 w-8 rounded-full mr-2"
              />
              <div>
                <h3 className="font-semibold">ACHRAF NADI</h3>
                <p>ACHRAF MHAYB BZAAAAAAF</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applications History */}
      <div className="bg-white border border-blue-500 font-bold py-2 px-4 rounded mr-6 mt-8 ">
        <h2>Recent Applications History</h2>
        <hr className="border-blue-500 my-4 hover:border-blue-700" />
        <div>
          <NavLink
            to="/applications"
            className="text-blue-500 mt-2 flex items-center"
          >
            View All Applications History
            <FontAwesomeIcon
              icon={faAngleRight}
              className="ml-2 text-blue-500"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

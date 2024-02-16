import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faEllipsisH,
  faAngleRight,
  faChartBar,
  faComment,
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
const data = [
  { Operation: "Unsuitable", value: 95, color: "#48cae4" },
  { Operation: "Interviewed", value: 5, color: "#adb5bd" },
];
const Dashboard = () => {
  return (
    <div className="flex justify-between flex-col p-8  ">
      {/* Greeting */}
      <div className="greeting pb-8  flex items-center">
        <div>
          <h2 className="text-2xl font-bold font-mono">Good morning,Jake</h2>
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
              className="ml-2 text-blue-500 cursor-pointer"
            />
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        {/* Stats */}
        <div className="flex flex-col w-64 h-full  bg-white">
          <div className="bg-white border border-blue-500 font-bold py-2 px-4 rounded mr-6 ">
            <h1 className="text-xl font-base">Total Jobs Applied</h1>

            <div className="font-black ml-3 text-6xl">10</div>
            <div className="flex items-end justify-end">
              <FontAwesomeIcon
                icon={faChartBar}
                className="w-12 h-auto text-blue-500"
              />
            </div>
          </div>

          <div className="bg-white border border-blue-500 font-bold py-2 px-4 rounded mr-6 mt-4">
            <h1 className="text-xl  font-base">Interviewed</h1>
            <div className="text-6xl ml-3 font-black">5</div>
            <div className="flex items-end justify-end">
              <FontAwesomeIcon
                icon={faComment}
                className="w-12 h-auto text-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Jobs Applied Status */}
        <div className="flex justify-between  flex-col items-center  bg-white border border-blue-500 font-bold py-2 px-4 rounded mr-6">
          <h1 className="text-xl font-base">Jobs Applied Status</h1>
          <div className="rounded-full h-24 w-40  flex items-center justify-center">
            <ResponsiveContainer width="99%" height={300}>
              <PieChart>
                {/* <Tooltip
                  contentStyle={{
                    background: "white",
                    borderRadius: "5px",
                    opacity: ".8",
                  }}
                /> */}
                <Pie
                  data={data}
                  innerRadius={"50%"}
                  outerRadius={"90%"}
                  paddingAngle={5}
                  dataKey={"value"}
                >
                  {data.map((value) => (
                    <Cell key={value.Operation} fill={value.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between gap-3 text-sm">
            {data.map((value) => (
              <div
                className="flex flex-col gap-3 items-center"
                key={value.Operation}
              >
                <div className="flex items-center gap-3">
                  <div
                    className=" w-3 h-3 border rounded-md"
                    style={{ backgroundColor: value.color }}
                  />
                  <span className="font-black  text-lg">{value.Operation}</span>
                </div>
                <span className=" font-extrabold text-base">
                  {value.value}%
                </span>
              </div>
            ))}
          </div>

          <div>
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
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white border border-blue-500 font-bold py-2 px-4 rounded mr-6 flex flex-col items-center">
          <h1 className="text-xl font-base">Upcoming Interviews</h1>
          <hr className="my-4 w-full" />

          <div className="relative flex items-center justify-between w-full">
            <button className="flex items-center hover:opacity-75 focus:outline-none ">
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                className=" text-blue-500 text-lg opacity-50 "
              />
              <span className="text-gray-500 text-xs opacity-50 pl-2">
                Previous Day
              </span>
            </button>
            <h1 className=" text-xl px-3">
              Today,{" "}
              <span className=" text-lg font-bold text-gray-500">
                26 November
              </span>
            </h1>

            <button className="flex items-center hover:opacity-75 focus:outline-none ">
              <span className="text-gray-500 text-xs opacity-50 pr-2 ">
                Next Day
              </span>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className=" text-blue-500 text-lg opacity-50"
              />
            </button>
          </div>
          <hr className="my-4 w-full" />

          <div className="flex flex-col space-y-4 overflow-auto h-64 px-12 py-6 bg-gray-100">
            <div className="flex items-center  justify-start space-x-4">
              <p className="font-bold flex items-center">
                <span className="mr-1">09:30</span>
                <span>AM</span>
              </p>
              <div className="bg-gray-200 p-2 rounded-2xl flex items-center justify-between  cursor-pointer w-full">
                <img
                  src="avatar.png"
                  alt="User Interview"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="pl-4">
                  <h3 className="text-gray-800 font-bold font-mono">
                    ACHRAF NADI
                  </h3>
                  <p className="text-gray-500 text-xs">
                    ACHRAF MHAYB BZAAAAAAF
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <p className="font-bold flex items-center">
                <span className="mr-1">10:00</span>
                <span>AM</span>
              </p>
              <hr className="w-full border-dashed border-gray-500" />
            </div>
            <div className="flex items-center  justify-start space-x-4">
              <p className="font-bold flex items-center">
                <span className="mr-1">10:30</span>
                <span>AM</span>
              </p>
              <div className="bg-gray-200 p-2 rounded-2xl flex items-center justify-between  cursor-pointer w-full">
                <img
                  src="avatar.png"
                  alt="User Interview"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="pl-4">
                  <h3 className="text-gray-800 font-bold font-mono">
                    ACHRAF NADI
                  </h3>
                  <p className="text-gray-500 text-xs">
                    ACHRAF MHAYB BZAAAAAAF
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  items-center justify-between space-x-4">
              <p className="font-bold flex items-center">
                <span className="mr-1">11:00</span>
                <span>AM</span>
              </p>
              <hr className="w-full border-dashed border-gray-500" />
            </div>
            <div className="flex items-center justify-between space-x-4">
              <p className="font-bold flex items-center">
                <span className="mr-1">11:30</span>
                <span>AM</span>
              </p>
              <div className="bg-gray-200 p-2 rounded-2xl flex justify-start items-center  cursor-pointer w-full">
                <img
                  src="avatar.png"
                  alt="User Interview"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="pl-4">
                  <h3 className="text-gray-800 font-bold font-mono">
                    BACHIR MHAYB
                  </h3>
                  <p className="text-gray-500 text-xs">BACHIR KANADI</p>
                </div>
              </div>
            </div>
            <div className="flex items-center  justify-start space-x-4">
              <p className="font-bold flex items-center">
                <span className="mr-1">12:00</span>
                <span>AM</span>
              </p>
              <div className="bg-gray-200 p-2 rounded-2xl flex items-center justify-between  cursor-pointer w-full">
                <img
                  src="avatar.png"
                  alt="User Interview"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="pl-4">
                  <h3 className="text-gray-800 font-bold font-mono">
                    ACHRAF NADI
                  </h3>
                  <p className="text-gray-500 text-xs">
                    ACHRAF MHAYB BZAAAAAAF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applications History */}
      <div className="bg-white border border-blue-500 font-bold py-2 px-4 rounded mr-6 mt-8 ">
        <h2 className="text-xl font-bold">Recent Applications History</h2>
        <hr className="border-blue-500 my-4 hover:border-blue-700" />
        <ul>
          <li className="flex items-center justify-between rounded-md px-4 py-3 hover:bg-gray-200">
            <div className="flex">
              <img
                src="avatar.png"
                alt="companies"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="pl-2">
                <p className="text-gray-800 text-xl font-black font-serif">
                  Social Media Assistant
                </p>
                <p className="text-gray-500 text-sm">
                  Nomad Paris, France Full-Time
                </p>
              </div>
            </div>
            <div className="text-gray-500 text-sm">
              <p className="text-gray-800 font-semibold text-lg">
                Date Applied
              </p>
              <p>24 July 2021</p>
            </div>
            <div className="border border-orange-500 rounded-full p-3 text-orange-500">
              <p className="text-sm">In Review</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faEllipsisH}
                className="ml-2 text-blue-500 cursor-pointer"
              />
            </div>
          </li>
          <li className="flex items-center justify-between rounded-md px-4 py-3 hover:bg-gray-200">
            <div className="flex">
              <img
                src="avatar.png"
                alt="companies"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="pl-2">
                <p className="text-gray-800 text-xl font-black font-serif">
                  Social Media Assistant
                </p>
                <p className="text-gray-500 text-sm">
                  Udacity New York, USA Full-Time
                </p>
              </div>
            </div>
            <div className="text-gray-500 text-sm">
              <p className="text-gray-800 font-semibold text-lg">
                Date Applied
              </p>
              <p>23 July 2021</p>
            </div>
            <div className="border border-blue-500 rounded-full p-3 text-blue-500">
              <p className="text-sm">Shortlisted</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faEllipsisH}
                className="ml-2 text-blue-500 cursor-pointer"
              />
            </div>
          </li>
          <li className="flex items-center justify-between rounded-md px-4 py-3 hover:bg-gray-200">
            <div className="flex">
              <img
                src="avatar.png"
                alt="companies"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="pl-2">
                <p className="text-gray-800 text-xl font-black font-serif">
                  Social Media Assistant
                </p>
                <p className="text-gray-500 text-sm">
                  Packer Madrid, Spain Full-Time
                </p>
              </div>
            </div>
            <div className="text-gray-500 text-sm">
              <p className="text-gray-800 font-semibold text-lg">
                Date Applied
              </p>
              <p>22 July 2021</p>
            </div>
            <div className="border border-red-600 rounded-full p-3 text-red-600">
              <p className="text-sm">Declined</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faEllipsisH}
                className="ml-2 text-blue-500 cursor-pointer"
              />
            </div>
          </li>
        </ul>
        <div className="p-4 mt-8 flex justify-center ">
          <NavLink
            to="/applications"
            className=" text-blue-500 hover:text-blue-700"
          >
            View All Applications History
            <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

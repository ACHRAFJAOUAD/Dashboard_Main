import React from "react";

const Stats = () => {
  return (
    <div className="flex justify-between p-8">
      <div>
        <div className="bg-white border border-blue-500 font-bold py-2 px-4 rounded mr-6">
          <div className="text-xl font-semibold">Total Jobs Applied</div>
          <div className="text-3xl font-bold">10</div>
        </div>
        <div className="bg-white border border-blue-500 font-bold py-2 px-4 rounded mr-6 mt-4">
          <div className="text-xl font-semibold">Interviewed</div>
          <div className="text-3xl font-bold">5</div>
        </div>
      </div>
      <div className="flex flex-col items-center  bg-white   border border-blue-500   font-bold py-2 px-4 rounded mr-6">
        <div className="text-xl font-semibold">Jobs Applied Status</div>
        <div className="rounded-full h-24 w-24 bg-gray-300 flex items-center justify-center">
          <span className="bg-white border-white"></span>
        </div>
        <a href="#" className="text-blue-500 mt-2">
          View All Applications
        </a>
      </div>
      <div className="flex flex-col items-center  bg-white   border border-blue-500   font-bold py-2 px-4 rounded mr-6">
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
  );
};

export default Stats;

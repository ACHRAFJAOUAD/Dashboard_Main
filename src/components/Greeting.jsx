import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Greeting = () => {
  return (
    <div className="greeting py-8 px-8 flex items-center">
      <div>
        <h2 className="text-xl font-bold mr-4">Good morning, Jake</h2>
        <p className="text-gray-600">
          Here is what's happening with your job search applications from July
          19 - July 25.
        </p>
      </div>
      <div className="flex items-center ml-auto bg-white   border border-blue-500   font-bold py-2 px-4 rounded mr-6">
        <p className="text-gray-600">
          Jul 19 - Jul 25
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="ml-2 text-blue-500"
          />
        </p>
      </div>
    </div>
  );
};

export default Greeting;

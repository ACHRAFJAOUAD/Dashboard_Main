import React from "react";

import Greeting from "./Greeting";
import Stats from "./Stats";
import RecentApplicationsHistory from "./RecentApplicationsHistory";

const Content = () => {
  return (
    <div className="bg-white flex-grow ml-64  ">
      <main className="main-content">
        <Greeting />
        <Stats />
        <RecentApplicationsHistory />
      </main>
    </div>
  );
};

export default Content;

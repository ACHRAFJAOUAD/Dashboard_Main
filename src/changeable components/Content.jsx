import React from "react";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div className="bg-white flex-grow  overflow-y-auto">
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Content;

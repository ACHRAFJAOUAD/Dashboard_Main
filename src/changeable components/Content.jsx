import React from "react";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div className="px-4 overflow-y-scroll h-screen flex-grow bg-white scrollbar scrollbar-thumb-blue-color scrollbar-track-blue-color">
      <Outlet />
    </div>
  );
};

export default Content;

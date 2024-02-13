import React from "react";

import Dashboard from "../components/Dashboard";
import Messages from "../components/Messages";
import MyApplications from "../components/MyApplications";
import FindJobs from "../components/FindJobs";
import BrowseCompanies from "../components/BrowseCompanies";
import MyPublicProfile from "../components/MyPublicProfile";
import Settings from "../components/Settings";
import HelpCenter from "../components/HelpCenter";

const Content = ({ selectedItem }) => {
  let content;
  switch (selectedItem) {
    case "Dashboard":
      content = <Dashboard />;
      break;
    case "Messages":
      content = <Messages />;
      break;
    case "My Applications":
      content = <MyApplications />;
      break;
    case "Find Jobs":
      content = <FindJobs />;
      break;
    case "Browse Companies":
      content = <BrowseCompanies />;
      break;
    case "My Public Profile":
      content = <MyPublicProfile />;
      break;
    case "Settings":
      content = <Settings />;
      break;
    case "Help Center":
      content = <HelpCenter />;
    default:
      content = null;
  }

  return (
    <div className="bg-white flex-grow ml-64 overflow-y-auto">
      <main className="main-content">{content}</main>
    </div>
  );
};

export default Content;

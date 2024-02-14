import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./fixed components/sidebar";
import Navbar from "./fixed components/Navbar";
import "./App.css";
import Content from "./changeable components/Content";
import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";
import MyApplications from "./components/MyApplications";
import FindJobs from "./components/FindJobs";
import BrowseCompanies from "./components/BrowseCompanies";
import MyPublicProfile from "./components/MyPublicProfile";
import Settings from "./components/Settings";
import HelpCenter from "./components/HelpCenter";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Content />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="messages" element={<Messages />} />
              <Route path="applications" element={<MyApplications />} />
              <Route path="find-jobs" element={<FindJobs />} />
              <Route path="browse-companies" element={<BrowseCompanies />} />
              <Route path="public-profile" element={<MyPublicProfile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="help" element={<HelpCenter />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

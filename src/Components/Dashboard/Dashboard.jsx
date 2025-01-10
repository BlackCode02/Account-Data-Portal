import React from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="dashboardcontainer">
          <div className="dashboard-content">
            <h1>Welcome To The VPVV Portal</h1>
            <p>
              "We are excited to inform you that this is a trial version of our
              portal, available for a limited time. Thank you for logging in and
              exploring its features. We hope you enjoy the experience!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

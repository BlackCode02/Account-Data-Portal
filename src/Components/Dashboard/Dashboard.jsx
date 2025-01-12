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
            <h1>Welcome To The VPVV Accounts Portal</h1>
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

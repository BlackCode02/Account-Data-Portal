import React from "react";
import "./Admindashboard.css";
import Adminsidebar from "../Adminsidebar/Adminsidebar";
const Admindashboard = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Adminsidebar />
        <div className="admin-dashboard-container">
          <div className="admin-dashboard-content">
            <h1>Welcome To The VPVV Admin Accounts Dashboard</h1>
            <p>              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admindashboard;

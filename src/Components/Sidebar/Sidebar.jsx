import React from "react";
import "./Sidebar.css";
import logovpvv from  "./logovpvv.png"
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-section">
          <div className="sidebar-logo-profilename">
            <img src={logovpvv} alt="vpvv" srcset="" style={{height: "125px"}}/>
            <p>Ankit Kumar</p>
          </div>
          <div className="sidebar-list">
            <ul>
             <Link to = '/'><li>Home</li></Link>
          <Link to = '/'><li>Hotel Expense</li></Link>
              <Link to = '/'><li>Daily Expense</li></Link>
              <Link to = '/'><li>Report</li></Link>
            </ul>
          </div>
          <div className="siderbar-footer">
            <div className="sidebar-admin-btn"><button>Admin</button></div>
            <div className="sidebar-footer-btn">
             <button style={{marginRight:"10px"}}>Profile</button>
             <button>Log Out</button>
            </div>
          </div>
        </div>
        <div className="sidebar-content-section"></div>
      </div>
    </> 
  );
};

export default Sidebar;

import React from "react";
import "./Sidebar.css";
import logovpvv from "../logo-vpvv.png";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const click = useNavigate();
  const profile = () => {
    click("/profile");
  };
  const admin_panel = () => {
    click("/admin/dashboard");
  };

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-section">
          <div className="sidebar-logo-profilename">
            <img
              src={logovpvv}
              alt="vpvv"
              srcset=""
              style={{ height: "125px" }}
            />
            <p>VPVV Accounts</p>
          </div>
          <div className="sidebar-list">
            <ul>
              <NavLink to="/dashboard">
                <i class="bi bi-columns-gap"></i>
                <li>Dashboard</li>
              </NavLink>
              <NavLink to="/hotelexpense">
                <i class="bi bi-building"></i>
                <li>Hotel Expense</li>
              </NavLink>
              <NavLink to="/guesthouseexpense">
                <i class="bi bi-houses"></i>
                <li>Guest House Expense</li>
              </NavLink>
              <NavLink to="/travelexpense">
                <i class="bi bi-airplane-engines"></i>
                <li>Travel Expense</li>
              </NavLink>
              <NavLink to="/debtor">
                <i class="bi bi-credit-card"></i>
                <li>Debtor</li>
              </NavLink>
              <NavLink to="/creditor">
                <i class="bi bi-credit-card-2-front"></i>
                <li>Creditor</li>
              </NavLink>
              <NavLink to="/petty_cash">
                <i class="bi bi-cash-stack"></i>
                <li>Petty cash</li>
              </NavLink>
              <NavLink to="/report">
                <i class="bi bi-journal-text"></i>
                <li>Report</li>
              </NavLink>
              <NavLink to="/userrequest">
                <i class="bi bi-pencil-square"></i>
                <li>Request</li>
              </NavLink>
            </ul>
          </div>
          <div className="siderbar-footer">
            <div className="sidebar-admin-btn">
              <button onClick={admin_panel}>Admin</button>
            </div>
            <div className="sidebar-footer-btn">
              <button style={{ marginRight: "10px" }} onClick={profile}>
                Profile
              </button>
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

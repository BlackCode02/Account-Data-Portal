import React from "react";
import "./Sidebar.css";
import logovpvv from "../logo-vpvv.png";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
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
            <p>Ankit Kumar</p>
          </div>
          <div className="sidebar-list">
            <ul>
              <NavLink to="/hoteldata">
                <i class="bi bi-building"></i>
                <li>Hotel Expense</li>
              </NavLink>
              <NavLink to="/guesthousedata">
                <i class="bi bi-houses"></i>
                <li>Guest House Expense</li>
              </NavLink>
              <NavLink to="/traveldata">
                <i class="bi bi-airplane-engines"></i>
                <li>Travel Expense</li>
              </NavLink>
              <NavLink to="/debtordata">
                <i class="bi bi-credit-card"></i>
                <li>Debtor</li>
              </NavLink>
              <NavLink to="/creditordata">
                <i class="bi bi-credit-card-2-front"></i>
                <li>Creditor</li>
              </NavLink>
              <NavLink to="/report">
                <i class="bi bi-journal-text"></i>
                <li>Report</li>
              </NavLink>
            </ul>
          </div>
          <div className="siderbar-footer">
            <div className="sidebar-admin-btn">
              <button>Admin</button>
            </div>
            <div className="sidebar-footer-btn">
              <button style={{ marginRight: "10px" }}>Profile</button>
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

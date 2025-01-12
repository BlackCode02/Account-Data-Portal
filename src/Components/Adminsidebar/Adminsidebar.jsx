import React from "react";
import "./Adminsidebar.css";
import logovpvv from "../logo-vpvv.png";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Adminsidebar  = () => {
  return (
    <>
      <div className="admin-sidebar-container">
        <div className="admin-sidebar-section">
          <div className="admin-sidebar-logo-profilename">
            <img
              src={logovpvv}
              alt="vpvv"
              srcset=""
              style={{ height: "125px" }}
            />
            <p>VPVV Accounts</p>
          </div>
          <div className="admin-sidebar-list">
            <ul>
              <NavLink to="/admin/new_delhi_report">
              <i class="bi bi-globe-central-south-asia"></i>
                <li>New Delhi</li>
              </NavLink>
              <NavLink to="/admin/nagpur_report">
              <i class="bi bi-globe-asia-australia"></i>
                <li>Nagpur</li>
              </NavLink>
              <NavLink to="/admin/thiruvananthapuram_report">
              <i class="bi bi-globe-americas"></i>
                <li>Thiruvananthapuram</li>
              </NavLink>
            </ul>
          </div>
          <div className="admin-sidebar-footer"></div>
        </div>
        <div className="admin-sidebar-content-section"></div>
      </div>
    </>
  );
};

export default Adminsidebar;

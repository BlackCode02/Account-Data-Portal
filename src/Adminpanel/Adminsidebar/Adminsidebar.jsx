import React from "react";
import "./Adminsidebar.css";
import logovpvv from "../../Components/logo-vpvv.png";
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
              <NavLink to="/admin/dashboard">
              <i class="bi bi-grid-fill"></i>
                <li>Admin Dashboard</li>
              </NavLink>
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
              <NavLink to="/admin/tuticorin_report">
              <i class="bi bi-globe-europe-africa"></i>
                <li>Tuticorin</li>
              </NavLink>
              <NavLink to="/admin/users">
              <i class="bi bi-person-vcard"></i>
                <li>Users</li>
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

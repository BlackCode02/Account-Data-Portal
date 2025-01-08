import React from "react";
import "./Userapproval.css";
import logo from "../logo-vpvv.png";
const Userapproval = () => {
  return (
    <>
      <div className="admin-container">
        <img src={logo} alt="" srcset="" />
        <div className="admin-box">
          <div className="userdata adminapproval">
            <div className="img-box"></div>
            <h4>Ankit Kumar</h4>
            <div className="user-details">
              <div className="userdata-box">
                <span>Email</span>ankit4704@gmail.com
              </div>
              <div className="userdata-box">
                <span>Password</span>Asnjdk23@#
              </div>
              <div className="userdata-box">
                <span>Location</span>New Delhi
              </div>
            </div>
          </div>
          <div className="approval-box adminapproval">
            <h3>Dear Admin</h3>
            <p>
              Hello Admin, the user has requested approval for access to the
              portal. If the user’s identity is verified, please grant approval
              instead of canceling or blocking the request.
            </p>
            <div className="admin-btn">
              <button>Approved</button>
              <button>Not Approved</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userapproval;

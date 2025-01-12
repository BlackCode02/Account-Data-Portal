import React from "react";
import "./Users.css";
import Adminsidebar from "../Adminsidebar/Adminsidebar";

const Users = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Adminsidebar />
        <div className="users-container">
          <div className="users-heading">
            <h1>Users</h1>
          </div>
         
       
        </div>
      </div>
    </>
  );
};

export default Users;

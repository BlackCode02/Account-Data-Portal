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
          <div className="users-tabel-box">
            <table>
              <thead>
                <th>S.No.</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>
              </thead>
              <tbody>
                <td>01</td>
                <td></td>
                <td>Anki</td>
                <td>ankit4890@gmail.com</td>
                <td>New Delhi</td>
              </tbody>
              <tbody>
                <td>02</td>
                <td></td>
                <td>Harsh</td>
                <td>Harsh1980@gmail.com</td>
                <td>New Delhi</td>          
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;

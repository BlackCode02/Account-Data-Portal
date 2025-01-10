import React from "react";
import "./Userrequest.css";
import Sidebar from "../Sidebar/Sidebar";
const Userrequest = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="userrequest-container">
          <div className="userrequest-heading">
            <h1>Request</h1>
          </div>
          <div className="tabel-box">
            <table>
              <thead>
                <th>S.No.</th>
                <th>Name</th>
                <th>Description</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Approval</th>
              </thead>
              <tbody>
                <td>01</td>
                <td>Ankit</td>
                <td id="userrequest-decription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, eum?
                </td>
                <td>ankit4890@gmail.com</td>
                <td>43000.00</td>
                <td>
                  <button id="approved-btn">Approved</button>
                  <button id="notApproved-btn">Not Approved</button>
                  <button id="pending-btn">Pending</button>
                </td>
              </tbody>
              <tbody>
                <td>02</td>
                <td>Harsh</td>
                <td id="userrequest-decription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, eum?
                </td>
                <td>Harsh1980@gmail.com</td>
                <td>76000.00</td>
                <td>
                  <button id="approved-btn">Approved</button>
                  <button id="notApproved-btn">Not Approved</button>
                  <button id="pending-btn">Pending</button>
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userrequest;

import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Traveldata.css";
import { Link } from "react-router-dom";

const Traveldata = () => {

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="traveldata-conatiner">
          <div className="traveldata-heading">
            <h1>Travel Expense</h1>
            <div className="traveldata-btngroup">
            <div class="traveldata-dropdown">
                <button class="traveldata-btn">
                  <i class="bi bi-filter-circle"></i>&nbsp;Monthy Data
                </button>
                <div class="traveldata-dropdown-content">
                  <Link to="#">January</Link>
                  <Link to="#">February</Link>
                  <Link to="#">March</Link>
                  <Link to="#">April</Link>
                  <Link to="#">May</Link>
                  <Link to="#">June</Link>
                  <Link to="#">July</Link>
                  <Link to="#">August</Link>
                  <Link to="#">September</Link>
                  <Link to="#">October</Link>
                  <Link to="#">November</Link>
                  <Link to="#">December</Link>
                </div>
              </div>
            <button className="traveldata-btn">Export PDF</button>
            <button className="traveldata-btn">Export Excel</button>
            </div>
          </div>
          <div className="traveldata-headlinelist">
            <table>
              <thead>
                <th className="traveldata-tabel-head">
                  <div className="traveldata-headName">
                    <p>S.No.</p>
                  </div>
                </th>
                <th style={{ width: "200px" }}>
                  <div className="traveldata-headName">
                    <p>Name</p>
                  </div>
                </th>
                <th style={{ width: "200px" }}>
                  <div className="traveldata-headName">
                    <p>Date</p>
                  </div>
                </th>
                <th style={{ width: "400px" }}>
                  <div className="traveldata-headName">
                    <p>Description</p>
                  </div>
                </th>
                <th>
                  <div className="traveldata-headName">
                    <p>Location</p>
                  </div>
                </th>
                <th>
                  <div className="traveldata-headName">
                    <p>Amount</p>
                  </div>
                </th>
                <th>
                  <div className="traveldata-headName">
                    <p>File</p>
                  </div>
                </th>
              </thead>
              <tbody>
                <td>01</td>
                <td>23/23/5444</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Traveldata;

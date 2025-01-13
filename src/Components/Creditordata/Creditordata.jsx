import React from "react";
import "./Creditordata.css";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const Creditordata = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="creditordata-conatiner">
          <div className="creditordata-heading">
            <h1>Creditor</h1>
            <div className="creditordata-btngroup">
              <div class="creditordata-dropdown">
                <button class="creditordata-btn">
                  <i class="bi bi-filter-circle"></i>&nbsp;Monthy Data
                </button>
                <div class="creditordata-dropdown-content">
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
              <button className="creditordata-btn">Export PDF</button>
              <button className="creditordata-btn">Export Excel</button>
            </div>
          </div>
          <div className="creditordata-headlinelist">
            <table>
              <thead>
                <th className="creditordata-tabel-head">
                  <div className="creditordata-headName">
                    <p>S.No.</p>
                  </div>
                </th>
                <th style={{ width: "200px" }}>
                  <div className="creditordata-headName">
                    <p>Name</p>
                  </div>
                </th>
                <th style={{ width: "200px" }}>
                  <div className="creditordata-headName">
                    <p>Date</p>
                  </div>
                </th>
                <th style={{ width: "400px" }}>
                  <div className="creditordata-headName">
                    <p>Description</p>
                  </div>
                </th>
                <th>
                  <div className="creditordata-headName">
                    <p>Location</p>
                  </div>
                </th>
                <th>
                  <div className="creditordata-headName">
                    <p>Amount</p>
                  </div>
                </th>
                <th>
                  <div className="creditordata-headName">
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

export default Creditordata;

import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Pettycashdata.css";
import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const Pettycashdata = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="pettycashdata-conatiner">
          <div className="pettycashdata-heading">
            <h1>Petty Cash Expense</h1>
            <div className="pettycashdata-btngroup">
              <div class="pettycashdata-dropdown">
                <button class="pettycashdata-btn">
                  <i class="bi bi-filter-circle"></i>&nbsp;Monthy Data
                </button>
                <div class="pettycashdata-dropdown-content">
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
              <button className="pettycashdata-btn">Export PDF</button>
              <button className="pettycashdata-btn">Export Excel</button>
            </div>
          </div>
          <div className="pettycashdata-headlinelist">
            <table>
              <thead>
                <th className="pettycashdata-tabel-head">
                  <div className="pettycashdata-headName">
                    <p>S.No.</p>
                  </div>
                </th>
                <th style={{ width: "200px" }}>
                  <div className="pettycashdata-headName">
                    <p>Name</p>
                  </div>
                </th>
                <th style={{ width: "200px" }}>
                  <div className="pettycashdata-headName">
                    <p>Date</p>
                  </div>
                </th>
                <th style={{ width: "400px" }}>
                  <div className="pettycashdata-headName">
                    <p>Description</p>
                  </div>
                </th>
                <th>
                  <div className="pettycashdata-headName">
                    <p>Location</p>
                  </div>
                </th>
                <th>
                  <div className="pettycashdata-headName">
                    <p>Amount</p>
                  </div>
                </th>
                <th>
                  <div className="pettycashdata-headName">
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

export default Pettycashdata;

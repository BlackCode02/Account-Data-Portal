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
            <div className="pettycashdata-headName">
              <p>S.No.</p>
            </div>
            <div className="pettycashdata-headName">
              <p>Date</p>
            </div>
            <div className="pettycashdata-headName">
              <p>Description</p>
            </div>
            <div className="pettycashdata-headName">
              <p>Location</p>
            </div>
            <div className="pettycashdata-headName">
              <p>Amount</p>
            </div>
            <div className="pettycashdata-headName">
              <p>File</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pettycashdata;

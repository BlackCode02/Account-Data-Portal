import React from "react";
import "./Debtordata.css";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

const Debtordata = () => {

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="debtordata-conatiner">
          <div className="debtordata-heading">
            <h1>Debtor</h1>
            <div className="debtordata-btngroup">
            <div class="debtordata-dropdown">
                <button class="debtordata-btn">
                  <i class="bi bi-filter-circle"></i>&nbsp;Monthy Data
                </button>
                <div class="debtordata-dropdown-content">
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
            <button className="debtordata-btn">Export PDF</button>
            <button className="debtordata-btn">Export Excel</button>
            </div>
          </div>
          <div className="debtordata-headlinelist">
            <div className="debtordata-headName">
              <p>S.No.</p>
            </div>
            <div className="debtordata-headName">
              <p>Date</p>
            </div>
            <div className="debtordata-headName">
              <p>Description</p>
            </div>
            <div className="debtordata-headName">
              <p>Location</p>
            </div>
            <div className="debtordata-headName">
              <p>Amount</p>
            </div>
            <div className="debtordata-headName">
              <p>File</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Debtordata;

import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Guesthousedata.css";
import { Link } from "react-router-dom";


const Guesthousedata = () => {

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="guesthousedata-conatiner">
          <div className="guesthousedata-heading">
            <h1>Guest House Expense</h1>
            <div className="guesthousedata-btngroup">
            <div class="guesthousedata-dropdown">
                <button class="guesthousedata-btn">
                  <i class="bi bi-filter-circle"></i>&nbsp;Monthy Data
                </button>
                <div class="guesthousedata-dropdown-content">
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
              <button className="guesthousedata-btn">Export PDF</button>
              <button className="guesthousedata-btn">Export Excel</button>
            </div>
          </div>
          <div className="guesthousedata-headlinelist">
            <div className="guesthousedata-headName">
              <p>S.No.</p>
            </div>
            <div className="guesthousedata-headName">
              <p>Date</p>
            </div>
            <div className="guesthousedata-headName">
              <p>Description</p>
            </div>
            <div className="guesthousedata-headName">
              <p>Location</p>
            </div>
            <div className="guesthousedata-headName">
              <p>Amount</p>
            </div>
            <div className="guesthousedata-headName">
              <p>File</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guesthousedata;

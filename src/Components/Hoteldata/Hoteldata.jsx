import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Hoteldata.css";
import { Link } from "react-router-dom";

const Hoteldata = () => {


  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="hoteldata-conatiner">
          <div className="hoteldata-heading">
            <h1>Hotel Expense</h1>
            <div className="hoteldata-btngroup">
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
              <button className="hoteldata-btn">Export PDF</button>
              <button className="hoteldata-btn">Export Excel</button>
            </div>
          </div>
          <div className="hoteldata-headlinelist">
            <div className="hoteldata-headName">
              <p>S.No.</p>
            </div>
            <div className="hoteldata-headName">
              <p>Date</p>
            </div>
            <div className="hoteldata-headName">
              <p>Description</p>
            </div>
            <div className="hoteldata-headName">
              <p>Location</p>
            </div>
            <div className="hoteldata-headName">
              <p>Amount</p>
            </div>
            <div className="hoteldata-headName">
              <p>File</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hoteldata;

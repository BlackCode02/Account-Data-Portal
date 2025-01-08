import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Traveldata.css";
import { useNavigate } from "react-router-dom";
const Traveldata = () => {
  const click = useNavigate();
  const travelexpense = () => {
    click("/travelexpense");
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="traveldata-conatiner">
          <div className="traveldata-heading">
            <h1>Travel Expense</h1>
            <button className="traveldata-btn" onClick={travelexpense}>
              + Travel Expenses
            </button>
          </div>
          <div className="traveldata-headlinelist">
            <div className="traveldata-headName">
              <p>S.No.</p>
            </div>
            <div className="traveldata-headName">
              <p>Date</p>
            </div>
            <div className="traveldata-headName">
              <p>Description</p>
            </div>
            <div className="traveldata-headName">
              <p>Location</p>
            </div>
            <div className="traveldata-headName">
              <p>Amount</p>
            </div>
            <div className="traveldata-headName">
              <p>File</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Traveldata;

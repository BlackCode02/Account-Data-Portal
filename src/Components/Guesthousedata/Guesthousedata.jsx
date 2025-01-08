import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Guesthousedata.css";
import { useNavigate } from "react-router-dom";

const Guesthousedata = () => {
  const click = useNavigate();
  const guesthouseexpense = () => {
    click("/guesthouseexpense");
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="guesthousedata-conatiner">
          <div className="guesthousedata-heading">
            <h1>Guest House Expense</h1>
            <button className="guesthousedata-btn" onClick={guesthouseexpense}>
              + Guest House Expenses
            </button>
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

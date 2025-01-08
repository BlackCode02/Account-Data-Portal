import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Hoteldata.css";
import { useNavigate } from "react-router-dom";

const Hoteldata = () => {
  const click = useNavigate();
  const hotelexpense = () => {
    click("/hotelexpense");
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="hoteldata-conatiner">
          <div className="hoteldata-heading">
            <h1>Hotel Expense</h1>
            <button className="hoteldata-btn" onClick={hotelexpense}>
              + Hotel Expenses
            </button>
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

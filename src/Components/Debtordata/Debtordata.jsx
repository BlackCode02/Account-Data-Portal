import React from "react";
import "./Debtordata.css";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
const Debtordata = () => {
  const click = useNavigate();
  const debtor = () => {
    click("/debtor");
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="debtordata-conatiner">
          <div className="debtordata-heading">
            <h1>Debtor</h1>
            <button className="debtordata-btn" onClick={debtor}>
              + Debtor
            </button>
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

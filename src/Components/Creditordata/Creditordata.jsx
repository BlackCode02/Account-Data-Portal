import React from 'react'
import "./Creditordata.css";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
const Creditordata = () => {
    const click = useNavigate();
    const creditor = () => {
      click("/creditor");
    };
  return (
    <>
        <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="creditordata-conatiner">
          <div className="creditordata-heading">
            <h1>Creditor</h1>
            <button className="creditordata-btn" onClick={creditor}>
              + Creditor
            </button>
          </div>
          <div className="creditordata-headlinelist">
            <div className="creditordata-headName">
              <p>S.No.</p>
            </div>
            <div className="creditordata-headName">
              <p>Date</p>
            </div>
            <div className="creditordata-headName">
              <p>Description</p>
            </div>
            <div className="creditordata-headName">
              <p>Location</p>
            </div>
            <div className="creditordata-headName">
              <p>Amount</p>
            </div>
            <div className="creditordata-headName">
              <p>File</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Creditordata

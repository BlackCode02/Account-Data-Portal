import React from "react";
import "./Newdelhi.css"
import Adminsidebar from "../../Adminsidebar/Adminsidebar";
import logo from "../../../"
import { Link } from "react-router-dom";
const Newdelhi = () => {
  return (
    <>
          <div style={{ display: "flex" }}>
              <Adminsidebar/>
              <div className="delhi-report-conatiner">
          <div className="delhi-report-heading">
            <h1>New Delhi Report</h1>
          </div>
          <div className="delhi-report-dashboard">
            <div className="total-container">
              <h4>Total of Hotel</h4>
              <p>58,69,94</p>
              <Link to="/hoteldata">
                <i class="bi bi-box-arrow-up-right"></i>View full report
              </Link>
            </div>
            <div className="delhi-total-container">
              <h4>Total of Guest House</h4>
              <p>45,09,24</p>
              <Link to="/guesthousedata">
                <i class="bi bi-box-arrow-up-right"></i>View full report
              </Link>
            </div>
            <div className="delhi-total-container">
              <h4>Total of Travel</h4>
              <p>76,25,49</p>
              <Link to="/traveldata">
                <i class="bi bi-box-arrow-up-right"></i>View full report
              </Link>
            </div>
            <div className="delhi-total-container">
              <h4>Total of Debtor</h4>
              <p>43,78,11</p>
              <Link to="/debtordata">
                <i class="bi bi-box-arrow-up-right"></i>View full report
              </Link>
            </div>
            <div className="delhi-total-container">
              <h4>Total of Creditor</h4>
              <p>89,67,56</p>
              <Link to="/creditordata">
                <i class="bi bi-box-arrow-up-right"></i>View full report
              </Link>
            </div>
            <div className="delhi-total-container">
              <h4>Total of Petty</h4>
              <p>89,67,56</p>
              <Link to="/petty_cash_data">
                <i class="bi bi-box-arrow-up-right"></i>View full report
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newdelhi;
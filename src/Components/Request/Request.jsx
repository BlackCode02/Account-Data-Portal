import React from "react";
import "./Request.css";
const Request = () => {
  
  return (
    <>
      <div className="request-container">
        <div className="request-form-container">
          <form action="" className="request-form">
            <h1>Request Form</h1>
            <div className="request-flex">
              <div className="request-boxes">
            <label htmlFor="name">Enter your name *</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
                />
              </div>
              <div className="request-boxes">
            <label htmlFor="email">Enter your email *</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              />
            </div>
            </div>
            <div className="request-flex">
            <div className="request-boxes">
            <label>Select location *</label>
            <select name="Select" id="" className="request-select">
              <option value="Select">Select</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              <option value="Tuticorin">Tuticorin</option>
              <option value="Nagpur">Nagpur</option>
                </select>
              </div>
              <div className="request-boxes">
              <label htmlFor="number">Amount *</label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Amount"
              required
              />
              </div>
            </div>
            <label htmlFor="request-decription">Description *</label>
            <textarea
              name="decription"
              id="request-decription"
              required
            ></textarea>
            <button className="request-btn">Submit Request</button>
          </form>
        </div>
        <div className="request-vpvv-support">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="#ffd700"
              d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"
            />
          </svg>
          Conatct VPVV Support
        </div>
      </div>
    </>
  );
};

export default Request;

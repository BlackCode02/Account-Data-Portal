import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin/Signin";
import Otpconfirmation from "./Components/Otpconfirmation/Otpconfirmation";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import Hotelexpense from "./Components/Hotelexpenses/Hotelexpense";
import Hoteldata from "./Components/Hoteldata/Hoteldata";
import Guesthouseexpense from "./Components/Guesthouse/Guesthouseexpense";
import Travelexpense from "./Components/Travel/Travelexpense";
import Debtor from "./Components/Debtor/Debtor";
import Creditor from "./Components/Creditor/Creditor";
import Guesthousedata from "./Components/Guesthousedata/Guesthousedata";
import Traveldata from "./Components/Traveldata/Traveldata";
import Debtordata from "./Components/Debtordata/Debtordata";
import Creditordata from "./Components/Creditordata/Creditordata";
import Report from "./Components/Report/Report";
import Userapproval from "./Components/Userapproval/Userapproval";
import Userrequest from "./Components/Userrequest/Userrequest";
import Request from "./Components/Request/Request";
import Profile from "./Components/Profile/Profile";
import Pettycash from "./Components/Pettycash/Pettycash";
import Pettycashdata from "./Components/Pettycashdata/Pettycashdata";
import Newdelhi from "./Adminpanel/Locations/Newdelhi/Newdelhi";
import Nagpur from "./Adminpanel/Locations/Nagpur/Nagpur";
import Thiruvananthapuram from "./Adminpanel/Locations/Thiruvananthapuram/Thiruvananthapuram";
import Admindashboard from "./Adminpanel/Admindasboard/Admindashboard";
import Tuticorin from "./Adminpanel/Locations/Tuticorin/Tuticorin";
import Users from "./Adminpanel/Users/Users";
import ApproveBills from "./Components/ApproveBills/ApproveBills";

// import Sidebar from './Components/Sidebar/Sidebar';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/otpconfirmation" element={<Otpconfirmation />} />
          <Route path="/signup" element={<Signup />} />
          {/* Create New Account*/}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hotelexpense" element={<Hotelexpense />} />
          <Route path="/hoteldata" element={<Hoteldata />} />
          <Route path="/guesthouseexpense" element={<Guesthouseexpense />} />
          <Route path="/guesthousedata" element={<Guesthousedata />} />
          <Route path="/travelexpense" element={<Travelexpense />} />
          <Route path="/traveldata" element={<Traveldata />} />
          <Route path="/debtor" element={<Debtor />} />
          <Route path="/debtordata" element={<Debtordata />} />
          <Route path="/creditor" element={<Creditor />} />
          <Route path="/creditordata" element={<Creditordata />} />
          <Route path="/petty_cash" element={<Pettycash />} />
          <Route path="/petty_cash_data" element={<Pettycashdata />} />
          <Route path="/report" element={<Report />} />
          <Route path="/userrequest" element={<Userrequest />} />
          <Route path="/approval_admin/:id" element={<Userapproval />} />
          <Route path="/request_id" element={<Request />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/dashboard" element={<Admindashboard />} />
          <Route path="/admin/new_delhi_report" element={<Newdelhi />} />
          <Route path="/admin/nagpur_report" element={<Nagpur />} />
           <Route
            path="/admin/thiruvananthapuram_report"
            element={<Thiruvananthapuram />}
          />
          <Route path="/admin/tuticorin_report" element={<Tuticorin />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/approval/bills/:id" element={<ApproveBills />} />
          {/* <Route path="/sidebar" element={<Sidebar />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin/Signin";
import Otpconfirmation from "./Components/Otpconfirmation/Otpconfirmation";
import Signup from "./Components/Signup/Signup";
import Hotelexpense from "./Components/Hotelexpenses/Hotelexpense";
import Hoteldata from "./Components/Hoteldata/Hoteldata";
import Userapproval from "./Components/Userapproval/Userapproval";
import Guesthouseexpense from "./Components/Guesthouse/Guesthouseexpense";
import Travelexpense from "./Components/Travel/Travelexpense";
import Debtor from "./Components/Debtor/Debtor";
import Creditor from "./Components/Creditor/Creditor";
import Guesthousedata from "./Components/Guesthousedata/Guesthousedata";
import Traveldata from "./Components/Traveldata/Traveldata";
import Debtordata from "./Components/Debtordata/Debtordata";
import Creditordata from "./Components/Creditordata/Creditordata";
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
          <Route path="/approval_admin/:id" element={<Userapproval />} />
          {/* <Route path="/sidebar" element={<Sidebar />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

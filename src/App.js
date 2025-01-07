import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './Components/Signin/Signin';
import Otpconfirmation from './Components/Otpconfirmation/Otpconfirmation';
import Signup from './Components/Signup/Signup';
// import Hotelexpense from './Components/Hotelexpenses/Hotelexpense';
import Sidebar from './Components/Sidebar/Sidebar';
const App = () => {
  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/otpconfirmation" element={<Otpconfirmation />} />
          <Route path="/signup" element={<Signup />} />{/* Create New Account*/}
          <Route path="/sidebar" element={<Sidebar />} />
          {/* <Route path="/hotelepensefillup" element={<Hotelexpense />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import React from "react";
import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
// import logo from "../logo-vpvv.png"
const Profile = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="profile-conatiner">
          <div className="profile-heading">
            <h1>Profile Information</h1>
          </div>
          <div className="profile-section">
            <div className="profile-img">
              <img src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg" alt="" width= "100%" height= "100%"/>
            </div>
            <div className="profile-box">
              <div className="profiledata-section">
                <div className=" profile-data">
                  <div className="profile-details">
                    <h4>Name</h4>
                    <p>Ankit Kumar</p>
                  </div>
                </div>
                <div className=" profile-data">
                  <div className="profile-details">
                    <h4>Email</h4>
                    <p>
                      ankit.kumar@vpvvindia.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="profiledata-section">
                <div className=" profile-data">
                  <div className="profile-details">
                    <h4>Location</h4>
                    <p>New Delhi</p>
                  </div>
                </div>
                <div className=" profile-data">
                  <div className="profile-details">
                    <h4>Status</h4>
                    <p>Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

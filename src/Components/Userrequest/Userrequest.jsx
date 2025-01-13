import React, { useState } from "react";
import "./Userrequest.css";
import Sidebar from "../Sidebar/Sidebar";

const Userrequest = () => {
  const [selectedFile, setSelectedFile] = useState(null);
     const [filePreview, setFilePreview] = useState(null);
     const [isPDF, setIsPDF] = useState(false);
   
     const handleFileChange = (event) => {
       const file = event.target.files[0];
       setSelectedFile(file);
   
       if (file) {
         // Check if the file is an image
         if (file.type.startsWith("image")) {
           const reader = new FileReader();
           reader.onloadend = () => {
             setFilePreview(reader.result);
             setIsPDF(false); // Not a PDF
           };
           reader.readAsDataURL(file);
         }
         // Check if the file is a PDF
         else if (file.type === "application/pdf") {
           const fileURL = URL.createObjectURL(file);
           setFilePreview(fileURL);
           setIsPDF(true); // It's a PDF
         } else {
           setFilePreview(null); // Reset preview for unsupported files
           setIsPDF(false);
         }
       }
     };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBillPreviewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="userrequest-container">
          <div className="userrequest-heading">
            <h1>Request</h1>
          </div>
          <div className="tabel-box">
            <table>
              <thead>
                <tr>
                  <th style={{ minWidth: "3rem" }}>S.No.</th>
                  <th style={{ minWidth: "14rem" }}>Name</th>
                  <th id="userrequest-decription" style={{ minWidth: "26rem" }}>
                    Description
                  </th>
                  <th style={{ minWidth: "18rem" }}>Email</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th style={{ minWidth: "20rem" }}>Approval</th>
                  <th style={{ minWidth: "10rem" }}>Bills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Ankit</td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, eum?
                  </td>
                  <td>ankit4890@gmail.com</td>
                  <td>43000.00</td>
                  <td>Active</td>
                  <td>
                    <button id="approved-btn">Approved</button>
                    <button id="notApproved-btn">Not Approved</button>
                    <button id="pending-btn">Pending</button>
                  </td>
                  <td>
                    <button onClick={handleBillPreviewClick}>Bill Preview</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Bill Details</h2>
            <p>
            <div className="petty-upload-container">
                  <input type="file" onChange={handleFileChange} required />
                  {selectedFile && (
                    <div className="file-preview">
                      <p>File Name: {selectedFile.name}</p>
                      {filePreview ? (
                          isPDF ? (
                            // Embed PDF preview
                            <iframe
                              src={filePreview}
                              title="PDF Preview"
                              style={{ width: "100%", height: "400px",border: "0px solid white", marginTop: "10px" }}
                            ></iframe>
                          ) : (
                            // Image preview
                            <img
                              src={filePreview}
                              alt="File Preview"
                              style={{ maxWidth: "100%", marginTop: "10px" }}
                            />
                          )
                        ) : (
                          <p>No preview available</p>
                        )}
                    </div>
                  )}
                </div>
            </p>
              <button onClick={handleCloseModal} className="close-btn">
                Close
              </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Userrequest;

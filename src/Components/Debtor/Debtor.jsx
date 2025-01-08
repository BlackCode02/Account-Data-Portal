import React, { useState } from "react";
import "./Debtor.css";
import Sidebar from "../Sidebar/Sidebar";

const Debtor = () => {
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
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="debtorcontainer">
          <form action="">
            <div className="debtor-heading">
              <h1>Debtor</h1>
              <div className="debtor-savedata">
                <button className="debtor-upload">Upload</button>
              </div>
            </div>

            <div className="debtor-fillup">
              <div className="debtor-formcol">
                <div className="debtor-form fill">
                  <div className="debtor-fillinput">
                    <div className="debtor-label">
                      <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="debtor-inputdetail">
                      <input type="text" name="subject" id="subject" required />
                    </div>
                  </div>
                </div>

                <div className="debtor-form fill">
                  <div className="debtor-fillinput">
                    <div className="debtor-label">
                      <label htmlFor="reference">Reference Id</label>
                    </div>
                    <div className="debtor-inputdetail">
                      <input type="text" name="reference" id="reference" />
                    </div>
                  </div>
                </div>

                <div className="debtor-form fill">
                  <div className="debtor-fillinput">
                    <div className="debtor-label">
                      <label htmlFor="category">Category</label>
                    </div>
                    <div className="debtor-inputdetail">
                      <input
                        type="text"
                        name="category"
                        id="category"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="debtor-form fill">
                  <div className="debtor-fillinput">
                    <div className="debtor-label debtor-decription-label-bdy">
                      <label htmlFor="decription" className="decription-label">
                        Description
                      </label>
                    </div>
                    <div className="debtor-inputdetail">
                      <textarea
                        name="decription"
                        id="debtor-decription"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="debtor-amount">
                  <div className="debtor-form fill debtor-total-amt">
                    <div className="debtor-fillinput debtor-total-amt">
                      <div className="debtor-label debtor-total-label">
                        <label htmlFor="number">Total Amount</label>
                      </div>
                      <div className="debtor-inputdetail">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="debtor-form fill debtor-total-amt">
                    <div className="debtor-fillinput">
                      <div className="debtor-label debtor-date-label ">
                        <label htmlFor="date">Date</label>
                      </div>
                      <div className="debtor-inputdetail">
                        <input type="date" name="date" id="date" required />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="debtor-form debtor-upload">
                <div className="debtor-upload-container">
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Debtor;

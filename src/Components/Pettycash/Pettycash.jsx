import React, { useState } from "react";
import "./Pettycash.css";
import Sidebar from "../Sidebar/Sidebar";

const Pettycash = () => {
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
        <div className="pettycontainer">
          <form action="">
            <div className="petty-heading">
              <h1>Petty Cash</h1>
              <div className="petty-savedata">
                <button className="petty-upload">Upload</button>
              </div>
            </div>

            <div className="petty-fillup">
              <div className="petty-formcol">
                <div className="petty-form fill">
                  <div className="petty-fillinput">
                    <div className="petty-label">
                      <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="petty-inputdetail">
                      <input type="text" name="subject" id="subject" required />
                    </div>
                  </div>
                </div>

                <div className="petty-form fill">
                  <div className="petty-fillinput">
                    <div className="petty-label">
                      <label htmlFor="reference">Reference Id</label>
                    </div>
                    <div className="petty-inputdetail">
                      <input type="text" name="reference" id="reference" />
                    </div>
                  </div>
                </div>

                <div className="petty-form fill">
                  <div className="petty-fillinput">
                    <div className="petty-label">
                      <label htmlFor="category">Category</label>
                    </div>
                    <div className="petty-inputdetail">
                      <input
                        type="text"
                        name="category"
                        id="category"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="petty-form fill">
                  <div className="petty-fillinput">
                    <div className="petty-label petty-decription-label-bdy">
                      <label htmlFor="decription" className="decription-label">
                        Description
                      </label>
                    </div>
                    <div className="petty-inputdetail">
                      <textarea
                        name="decription"
                        id="petty-decription"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="petty-amount">
                  <div className="petty-form fill petty-total-amt">
                    <div className="petty-fillinput petty-total-amt">
                      <div className="petty-label petty-total-label">
                        <label htmlFor="number">Total Amount</label>
                      </div>
                      <div className="petty-inputdetail">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="petty-form fill petty-total-amt">
                    <div className="petty-fillinput">
                      <div className="petty-label petty-date-label ">
                        <label htmlFor="date">Date</label>
                      </div>
                      <div className="petty-inputdetail">
                        <input type="date" name="date" id="date" required />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="petty-form petty-upload">
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Pettycash;

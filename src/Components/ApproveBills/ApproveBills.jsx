import React, { useState } from "react";
import "./ApproveBills.css";
// import Sidebar from "../Sidebar/Sidebar";
// import { useNavigate } from "react-router-dom";

const ApproveBills = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [isPDF, setIsPDF] = useState(false);
  const [showAdditionalForm, setShowAdditionalForm] = useState(false);

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
  const toggleAdditionalForm = () => {
    setShowAdditionalForm((prev) => !prev);
  };
  //   const click = useNavigate();
  //   const morebtn = () => {
  //     click();
  //   };
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="approvalbills-main"
      >
        <div className="approvalbillscontainer">
          <form action="">
            <div className="approvalbills-heading">
              <h1>Approval Bill</h1>
              <div className="approvalbills-savedata">
                <button className="approvalbills-upload">Send To Admin</button>
              </div>
            </div>
            <div className="approvalbills-fillup">
              <div className="approvalbills-formcol">
                <div className="approvalbills-form fill">
                  <div className="approvalbills-fillinput">
                    <div className="approvalbills-label">
                      <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="approvalbills-inputdetail">
                      <input type="text" name="subject" id="subject" required />
                    </div>
                  </div>
                </div>
                <div className="approvalbills-form fill">
                  <div className="approvalbills-fillinput">
                    <div className="approvalbills-label">
                      <label htmlFor="reference">Reference Id</label>
                    </div>
                    <div className="approvalbills-inputdetail">
                      <input type="text" name="reference" id="reference" />
                    </div>
                  </div>
                </div>

                <div className="approvalbills-form fill">
                  <div className="approvalbills-fillinput">
                    <div className="approvalbills-label">
                      <label htmlFor="category">Category</label>
                    </div>
                    <div className="approvalbills-inputdetail">
                      <input
                        type="text"
                        name="category"
                        id="category"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="approvalbills-form fill">
                  <div className="approvalbills-fillinput">
                    <div className="approvalbills-label approvalbills-decription-label-bdy">
                      <label htmlFor="decription" className="decription-label">
                        Description
                      </label>
                    </div>
                    <div className="approvalbills-inputdetail">
                      <textarea
                        name="decription"
                        id="approvalbills-decription"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="approvalbills-amount">
                  <div className="approvalbills-form fill approvalbills-total-amt">
                    <div className="approvalbills-fillinput approvalbills-total-amt">
                      <div className="approvalbills-label approvalbills-total-label">
                        <label htmlFor="number">Total Amount</label>
                      </div>
                      <div className="approvalbills-inputdetail">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="approvalbills-form fill approvalbills-total-amt">
                    <div className="approvalbills-fillinput">
                      <div className="approvalbills-label approvalbills-date-label ">
                        <label htmlFor="date">Date</label>
                      </div>
                      <div className="approvalbills-inputdetail">
                        <input type="date" name="date" id="date" required />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="approvalbills-form approvalbills-upload">
                <div className="approvalbills-upload-container">
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
                            style={{
                              width: "100%",
                              height: "400px",
                              border: "0px solid white",
                              marginTop: "10px",
                            }}
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
          <div className="approvalbills-moreexpense">
            <button onClick={toggleAdditionalForm}>
              {showAdditionalForm
                ? "Close Additional Expenses"
                : "Additional Expenses"}
            </button>
          </div>
        </div>
      </div>

      {/* sta */}
      {showAdditionalForm && (
        <div style={{ marginTop: "80px" }} className="approvalbills-main">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="approvalbillscontainer">
              <form action="">
                <div className="approvalbills-heading">
                  <h1>Additional Bill</h1>
                  <div className="approvalbills-savedata">
                    <button className="approvalbills-upload">
                      Send To Admin
                    </button>
                  </div>
                </div>
                <div className="approvalbills-fillup">
                  <div className="approvalbills-formcol">
                    <div className="approvalbills-form fill">
                      <div className="approvalbills-fillinput">
                        <div className="approvalbills-label">
                          <label htmlFor="subject">Subject</label>
                        </div>
                        <div className="approvalbills-inputdetail">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="approvalbills-form fill">
                      <div className="approvalbills-fillinput">
                        <div className="approvalbills-label">
                          <label htmlFor="spending-amount">
                            Spending Amount
                          </label>
                        </div>
                        <div className="approvalbills-inputdetail">
                          <input
                            type="number"
                            name="spending-amount"
                            id="spending-amount"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="approvalbills-form fill">
                      <div className="approvalbills-fillinput">
                        <div className="approvalbills-label">
                          <label htmlFor="company-amount">Company Amount</label>
                        </div>
                        <div className="approvalbills-inputdetail">
                          <input
                            type="number"
                            name="company-amount"
                            id="company-amount"
                            value={40000}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="approvalbills-form fill">
                      <div className="approvalbills-fillinput">
                        <div className="approvalbills-label approvalbills-decription-label-bdy">
                          <label
                            htmlFor="decription"
                            className="decription-label"
                          >
                            Description
                          </label>
                        </div>
                        <div className="approvalbills-inputdetail">
                          <textarea
                            name="decription"
                            id="approvalbills-decription"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="approvalbills-amount">
                      <div className="approvalbills-form fill approvalbills-total-amt">
                        <div className="approvalbills-fillinput approvalbills-total-amt">
                          <div className="approvalbills-label approvalbills-total-label">
                            <label htmlFor="number">Total Amount</label>
                          </div>
                          <div className="approvalbills-inputdetail">
                            <input
                              type="number"
                              name="number"
                              id="number"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="approvalbills-form fill approvalbills-total-amt">
                        <div className="approvalbills-fillinput">
                          <div className="approvalbills-label approvalbills-date-label ">
                            <label htmlFor="date">Date</label>
                          </div>
                          <div className="approvalbills-inputdetail">
                            <input type="date" name="date" id="date" required />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="approvalbills-form approvalbills-upload">
                    <div className="approvalbills-upload-container">
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
                                style={{
                                  width: "100%",
                                  height: "400px",
                                  border: "0px solid white",
                                  marginTop: "10px",
                                }}
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
        </div>
      )}
    </>
  );
};

export default ApproveBills;

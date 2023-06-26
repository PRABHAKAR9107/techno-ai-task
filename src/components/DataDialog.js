import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const DataDialog = ({ open, handleClose }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    source: "",
    register: "",
    category: "",
    email: "",
    company: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: "center" }}>Add Data</DialogTitle>
        <hr />
        <DialogContent>
          <div>
            <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <div>
                <label htmlFor="firstName">FirstName &nbsp;</label>

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="emailCategory">Email Category &nbsp;</label>
                <input
                  type="text"
                  id="emailCategory"
                  name="emailCategory"
                  value={formValues.emailCategory}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <div>
                <label htmlFor="lastName">Last Name &nbsp;</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="source">Source &nbsp;</label>
                <input
                  type="text"
                  id="source"
                  name="source"
                  style={{ marginLeft: "58px" }}
                  value={formValues.source}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <div>
                <label htmlFor="email">Email&nbsp;</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  style={{ marginLeft: "38px" }}
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="company">Company &nbsp;</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  style={{ marginLeft: "40px" }}
                  value={formValues.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <div>
                <label htmlFor="phone">Phone No &nbsp;</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  style={{ marginLeft: "8px" }}
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="register">Register Date &nbsp;</label>
                <input
                  type="text"
                  id="register"
                  name="register"
                  style={{ marginLeft: "12px" }}
                  value={formValues.register}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions
          sx={{ textAlign: "center", justifyContent: "center!important" }}
        >
          <button
            onClick={handleClose}
            style={{
              padding: "10px",
              color: "#000",
              fontSize: "16px",
              fontFamily: "Public Sans",
              fontWeight: 600,
            }}
          >
            save
          </button>
          <button
            onClick={handleClose}
            style={{
              padding: "10px",
              color: "#000",
              fontSize: "16px",
              fontFamily: "Public Sans",
              fontWeight: 600,
            }}
          >
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DataDialog;

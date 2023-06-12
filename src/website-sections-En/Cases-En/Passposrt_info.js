import React, { useState, useEffect } from "react";
import MyStyling from "./case-input-styling";
import DropdownStyle from "./case-dropdown-style";

function renderInput(id, label, value, maxLength, placeholder, handleChange) {
  return (
    <div>
      <label htmlFor={`input-${id}`}>{label}</label>
      <input
        type="text"
        id={`input-${id}`}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleChange}
      />
    </div>
  );
}

function renderDropdown(id, label, value, options, placeholder, handleChange) {
  return (
    <div>
      <label htmlFor={`dropdown-${id}`}>{label}</label>
      <select
        id={`dropdown-${id}`}
        value={value}
        style={DropdownStyle}
        onChange={handleChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function PassportInfo() {
  const [selectedValue, setSelectedValue] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [countryOfIssue, setCountryOfIssue] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [issueDateError, setIssueDateError] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");

  const handleSelectedValueChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleDocumentNumberChange = (e) => {
    setDocumentNumber(e.target.value);
  };

  const handleCountryOfIssueChange = (e) => {
    setCountryOfIssue(e.target.value);
  };

  const handleIssueDateChange = (e) => {
    const value = e.target.value;
    setIssueDate(value);
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value;
    setExpiryDate(value);
  };

  useEffect(() => {
    validateIssueDate(issueDate);
    validateExpiryDate(expiryDate);
  }, [issueDate, expiryDate]);

  const validateIssueDate = (value) => {
    const regex = /^\d{4}\/\d{2}\/\d{2}$/;
    const currentDate = new Date();
    const selectedDate = new Date(value);
    if (value !== "" && !regex.test(value)) {
      setIssueDateError("Date must follow the format YYYY/MM/DD");
    } else if (value !== "" && selectedDate > currentDate) {
      setIssueDateError("Issue date cannot be in the future");
    } else {
      setIssueDateError("");
    }
  };

  const validateExpiryDate = (value) => {
    const regex = /^\d{4}\/\d{2}\/\d{2}$/;
    const issueDateObj = new Date(issueDate);
    const expiryDateObj = new Date(value);
    if (value !== "" && !regex.test(value)) {
      setExpiryDateError("Date must follow the format YYYY/MM/DD");
    } else if (value !== "" && expiryDateObj <= issueDateObj) {
      setExpiryDateError("Expiry date must be later than the issue date");
    } else {
      setExpiryDateError("");
    }
  };

  const countryOptions = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
  ];

  return (
    <div>
      <MyStyling />
      <div className="myrowfr">
        {renderDropdown(
          0,
          "Do you have a valid passport/travel document?",
          selectedValue,
          ["Option 1", "Option 2", "Option 3"],
          "Select an option",
          handleSelectedValueChange
        )}
        {renderInput(
          1,
          "Passport document number (exactly as shown on your passport or travel document).",
          documentNumber,
          20,
          "Example: John",
          handleDocumentNumberChange
        )}
        {renderDropdown(
          2,
          "Select the country of issue of your passport/travel document",
          countryOfIssue,
          countryOptions,
          "Example: Country",
          handleCountryOfIssueChange
        )}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {renderInput(
            3,
            "Issue date (YYYY/MM/DD) (required)",
            issueDate,
            10,
            "Example: 2023/06/10",
            handleIssueDateChange
          )}
          {issueDateError && (
            <span style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
              {issueDateError}
            </span>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {renderInput(
            4,
            "Expiry date (YYYY/MM/DD) (required)",
            expiryDate,
            10,
            "Example: 2025/12/31",
            handleExpiryDateChange
          )}
          {expiryDateError && (
            <span style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
              {expiryDateError}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default PassportInfo;

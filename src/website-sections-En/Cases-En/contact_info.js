import React, { useState } from "react";
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

function ContactInfo() {
  const [primaryTelephoneCountry, setPrimaryTelephoneCountry] = useState("");
  const [primaryTelephoneType, setPrimaryTelephoneType] = useState("");
  const [primaryTelephoneCountryCode, setPrimaryTelephoneCountryCode] = useState("");
  const [primaryTelephoneNo, setPrimaryTelephoneNo] = useState("");
  const [primaryTelephoneExt, setPrimaryTelephoneExt] = useState("");

  const [alternateTelephoneCountry, setAlternateTelephoneCountry] = useState("");
  const [alternateTelephoneType, setAlternateTelephoneType] = useState("");
  const [alternateTelephoneCountryCode, setAlternateTelephoneCountryCode] = useState("");
  const [alternateTelephoneNo, setAlternateTelephoneNo] = useState("");
  const [alternateTelephoneExt, setAlternateTelephoneExt] = useState("");

  const [faxCountry, setFaxCountry] = useState("");
  const [faxCountryCode, setFaxCountryCode] = useState("");
  const [faxNo, setFaxNo] = useState("");
  const [faxExt, setFaxExt] = useState("");

  const [contactByEmail, setContactByEmail] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const handlePrimaryTelephoneCountryChange = (e) => {
    setPrimaryTelephoneCountry(e.target.value);
    if (e.target.value === "Canada/US") {
      setPrimaryTelephoneCountryCode("1");
    } else {
      setPrimaryTelephoneCountryCode("");
    }
  };

  const handlePrimaryTelephoneTypeChange = (e) => {
    setPrimaryTelephoneType(e.target.value);
  };

  const handlePrimaryTelephoneCountryCodeChange = (e) => {
    setPrimaryTelephoneCountryCode(e.target.value);
  };

  const handlePrimaryTelephoneNoChange = (e) => {
    setPrimaryTelephoneNo(e.target.value);
  };

  const handlePrimaryTelephoneExtChange = (e) => {
    setPrimaryTelephoneExt(e.target.value);
  };

  const handleAlternateTelephoneCountryChange = (e) => {
    setAlternateTelephoneCountry(e.target.value);
    if (e.target.value === "Canada/US") {
      setAlternateTelephoneCountryCode("1");
    } else {
      setAlternateTelephoneCountryCode("");
    }
  };

  const handleAlternateTelephoneTypeChange = (e) => {
    setAlternateTelephoneType(e.target.value);
  };

  const handleAlternateTelephoneCountryCodeChange = (e) => {
    setAlternateTelephoneCountryCode(e.target.value);
  };

  const handleAlternateTelephoneNoChange = (e) => {
    setAlternateTelephoneNo(e.target.value);
  };

  const handleAlternateTelephoneExtChange = (e) => {
    setAlternateTelephoneExt(e.target.value);
  };

  const handleFaxCountryCodeChange = (e) => {
    setFaxCountryCode(e.target.value);
  };

  const handleFaxCountryChange = (e) => {
    setFaxCountry(e.target.value);
    if (e.target.value === "Canada/US") {
      setFaxCountryCode("1");
    } else {
      setFaxCountryCode("");
    }
  };

  const handleFaxNoChange = (e) => {
    setFaxNo(e.target.value);
  };

  const handleFaxExtChange = (e) => {
    setFaxExt(e.target.value);
  };

  const handleContactByEmailChange = (e) => {
    setContactByEmail(e.target.value);
    if (e.target.value === "Yes") {
      setContactEmail("");
    }
  };

  const handleContactEmailChange = (e) => {
    setContactEmail(e.target.value);
  };

  const countryOptions = [
    "Canada/US",
    "Other",
    // Add more country options if needed
  ];

  const typeOptions = [
    "Type 1",
    "Type 2",
    "Type 3",
    "Type 4",
    "Type 5",
  ];

  const emailOptions = ["Yes", "No"];

  const horizontalLineStyle = {
    borderTop: "3px solid #7D85C7",
    margin: "10px 0",
    width: "100%",
  };

  return (
    <div>
      <MyStyling />
      <h3>Primary Telephone Number (required)</h3>
      <div className="myrowfr">
        {renderDropdown(
          0,
          "Country (required)",
          primaryTelephoneCountry,
          countryOptions,
          "Select country",
          handlePrimaryTelephoneCountryChange
        )}
        {renderDropdown(
          1,
          "Type (required)",
          primaryTelephoneType,
          typeOptions,
          "Select type",
          handlePrimaryTelephoneTypeChange
        )}
        <div>
          <label htmlFor="input-primary-telephone-country-code">Country Code (required)</label>
          <input
            type="text"
            id="input-primary-telephone-country-code"
            value={primaryTelephoneCountryCode}
            maxLength={3}
            placeholder="Example: 1"
            onChange={handlePrimaryTelephoneCountryCodeChange}
          />
        </div>
        <div>
          <label htmlFor="input-primary-telephone-no">No. (required)</label>
          <input
            type="text"
            id="input-primary-telephone-no"
            value={primaryTelephoneNo}
            maxLength={10}
            placeholder="Example: 1234567890"
            onChange={handlePrimaryTelephoneNoChange}
          />
        </div>
        <div>
          <label htmlFor="input-primary-telephone-ext">Ext.</label>
          <input
            type="text"
            id="input-primary-telephone-ext"
            value={primaryTelephoneExt}
            maxLength={10}
            placeholder="Example: 1234"
            onChange={handlePrimaryTelephoneExtChange}
          />
        </div>
      </div>
      <div style={horizontalLineStyle}></div>
      <h3>Alternate Telephone Number (required)</h3>
      <div className="myrowfr">
        {renderDropdown(
          2,
          "Country (required)",
          alternateTelephoneCountry,
          countryOptions,
          "Select country",
          handleAlternateTelephoneCountryChange
        )}
        {renderDropdown(
          3,
          "Type (required)",
          alternateTelephoneType,
          typeOptions,
          "Select type",
          handleAlternateTelephoneTypeChange
        )}
        <div>
          <label htmlFor="input-alternate-telephone-country-code">Country Code (required)</label>
          <input
            type="text"
            id="input-alternate-telephone-country-code"
            value={alternateTelephoneCountryCode}
            maxLength={3}
            placeholder="Example: 1"
            onChange={handleAlternateTelephoneCountryCodeChange}
          />
        </div>
        <div>
          <label htmlFor="input-alternate-telephone-no">No. (required)</label>
          <input
            type="text"
            id="input-alternate-telephone-no"
            value={alternateTelephoneNo}
            maxLength={10}
            placeholder="Example: 1234567890"
            onChange={handleAlternateTelephoneNoChange}
          />
        </div>
        <div>
          <label htmlFor="input-alternate-telephone-ext">Ext.</label>
          <input
            type="text"
            id="input-alternate-telephone-ext"
            value={alternateTelephoneExt}
            maxLength={10}
            placeholder="Example: 1234"
            onChange={handleAlternateTelephoneExtChange}
          />
        </div>
      </div>
      <div style={horizontalLineStyle}></div>
      <h3>Fax Number (required)</h3>
      <div className="myrowfr">
        {renderDropdown(
          4,
          "Country (required)",
          faxCountry,
          countryOptions,
          "Select country",
          handleFaxCountryChange
        )}
        <div>
          <label htmlFor="input-fax-country-code">Country Code (required)</label>
          <input
            type="text"
            id="input-fax-country-code"
            value={faxCountryCode}
            maxLength={3}
            placeholder="Example: 1"
            onChange={handleFaxCountryCodeChange}
          />
        </div>
        <div>
          <label htmlFor="input-fax-no">No. (required)</label>
          <input
            type="text"
            id="input-fax-no"
            value={faxNo}
            maxLength={10}
            placeholder="Example: 1234567890"
            onChange={handleFaxNoChange}
          />
        </div>
        <div>
          <label htmlFor="input-fax-ext">Ext.</label>
          <input
            type="text"
            id="input-fax-ext"
            value={faxExt}
            maxLength={10}
            placeholder="Example: 1234"
            onChange={handleFaxExtChange}
          />
        </div>
      </div>
      <div style={horizontalLineStyle}></div>
      <h3>Do you want us to contact you using the email address used for this account? (required)</h3>
      <div>
        <select
          value={contactByEmail}
          style={DropdownStyle}
          onChange={handleContactByEmailChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          {emailOptions.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {contactByEmail === "No" && (
        <div>
          <h3>If not, please provide the email address we can use to contact you.</h3>
          {renderInput(
            "contact-email",
            "Email (required)",
            contactEmail,
            100,
            "Enter email",
            handleContactEmailChange
          )}
        </div>
      )}
      <div style={horizontalLineStyle}></div>
    </div>
  );
}

export default ContactInfo;

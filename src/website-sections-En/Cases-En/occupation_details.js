import React from "react";
import MyStyling from "./case-input-styling";
import DropdownStyle from "./case-dropdown-style";

function renderInput(id, label, value, maxLength, placeholder, handleChange) {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d{0,2}$/.test(inputValue) && inputValue >= 0 && inputValue <= 99) {
      handleChange(inputValue);
    }
  };

  return (
    <div>
      <label htmlFor={`input-${id}`}>{label}</label>
      <input
        type="text"
        id={`input-${id}`}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={handleInputChange}
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

function OccupationDetails() {
  const [highestEducation, setHighestEducation] = React.useState("");
  const [yearsOfEducation, setYearsOfEducation] = React.useState("");

  const handleHighestEducationChange = (e) => {
    setHighestEducation(e.target.value);
  };

  const handleYearsOfEducationChange = (value) => {
    setYearsOfEducation(value);
  };

  const educationOptions = [
    "None",
    "Secondary or less",
    "Trade/Apprenticeship Certificate/Diploma",
    "Non-University Certificate/Diploma",
    "Post-Secondary – No Degree",
    "Bachelor’s Degree",
    "Post Graduate – No Degree",
    "Master’s Degree",
    "Doctorate - Ph D",
  ];

  return (
    <div>
      <MyStyling />
      <div className="myrowfr">
      {renderDropdown(
        0,
        "Enter your Current occupation (required)",
        highestEducation,
        educationOptions,
        "Select level of education",
        handleHighestEducationChange
      )}
      {renderInput(
        1,
        "Intended occupation (required)",
        yearsOfEducation,
        2,
        "Example: 12",
        handleYearsOfEducationChange
      )}
    </div>
    </div>
  );
}

export default OccupationDetails;

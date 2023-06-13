import React from "react";
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
        onChange={(e) => handleChange(e.target.value)}
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
        onChange={(e) => handleChange(e.target.value)}
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

function EducationInfo() {
  const [highestEducation, setHighestEducation] = React.useState("");
  const [yearsOfEducation, setYearsOfEducation] = React.useState("");
  const [yearsOfElementarySchool, setYearsOfElementarySchool] = React.useState("");
  const [yearsOfSecondarySchool, setYearsOfSecondarySchool] = React.useState("");
  const [yearsOfUniversityCollege, setYearsOfUniversityCollege] = React.useState("");
  const [yearsOfTradeSchool, setYearsOfTradeSchool] = React.useState("");
  const [educationDetails, setEducationDetails] = React.useState([
    {
      id: 0,
      from: "",
      to: "",
      institution: "",
      cityCountry: "",
      certificate: "",
      fieldOfStudy: ""
    }
  ]);

  const handleHighestEducationChange = (value) => {
    setHighestEducation(value);
  };

  const handleYearsOfEducationChange = (value) => {
    setYearsOfEducation(value);
  };

  const handleYearsOfElementarySchoolChange = (value) => {
    setYearsOfElementarySchool(value);
  };

  const handleYearsOfSecondarySchoolChange = (value) => {
    setYearsOfSecondarySchool(value);
  };

  const handleYearsOfUniversityCollegeChange = (value) => {
    setYearsOfUniversityCollege(value);
  };

  const handleYearsOfTradeSchoolChange = (value) => {
    setYearsOfTradeSchool(value);
  };

  const handleAddEducationDetail = () => {
    setEducationDetails((prevDetails) => {
      const newId = prevDetails.length;
      return [
        ...prevDetails,
        {
          id: newId,
          from: "",
          to: "",
          institution: "",
          cityCountry: "",
          certificate: "",
          fieldOfStudy: ""
        }
      ];
    });
  };

  const handleRemoveEducationDetail = (id) => {
    setEducationDetails((prevDetails) =>
      prevDetails.filter((detail) => detail.id !== id)
    );
  };

  const handleEducationDetailChange = (id, field, value) => {
    setEducationDetails((prevDetails) =>
      prevDetails.map((detail) => {
        if (detail.id === id) {
          return { ...detail, [field]: value };
        }
        return detail;
      })
    );
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
    "Doctorate - Ph D"
  ];

  return (
    <div>
      <MyStyling />
      <h3>Education Information</h3>
      <div className="myrowfr">
        {renderDropdown(
          0,
          "Enter your highest level of education (required)",
          highestEducation,
          educationOptions,
          "Select level of education",
          handleHighestEducationChange
        )}
        {renderInput(
          1,
          "Number of years of education in total (required)",
          yearsOfEducation,
          2,
          "Example: 12",
          handleYearsOfEducationChange
        )}

        {renderInput(
          2,
          "Number of years of elementary/primary school (required)",
          yearsOfElementarySchool,
          2,
          "Example: 6",
          handleYearsOfElementarySchoolChange
        )}

        {renderInput(
          3,
          "Number of years of secondary/high school (required)",
          yearsOfSecondarySchool,
          2,
          "Example: 3",
          handleYearsOfSecondarySchoolChange
        )}

        {renderInput(
          4,
          "Number of years of university/college (required)",
          yearsOfUniversityCollege,
          2,
          "Example: 1",
          handleYearsOfUniversityCollegeChange
        )}

        {renderInput(
          5,
          "Number of years of trade school or other post-secondary school (required)",
          yearsOfTradeSchool,
          2,
          "Example: 0",
          handleYearsOfTradeSchoolChange
        )}
      </div>

      <h4>
        Give full details of all the secondary and post-secondary education
        (including university, college, and apprenticeship training) you have
        had.
      </h4>
      {educationDetails.map((detail) => (
        <div key={detail.id}>
          <div className="myrowfr">
            {renderInput(
              `${detail.id}-from`,
              "From (YYYY/MM)",
              detail.from,
              7,
              "Example: 2022/01",
              (value) =>
                handleEducationDetailChange(detail.id, "from", value)
            )}
            {renderInput(
              `${detail.id}-to`,
              "To (YYYY/MM)",
              detail.to,
              7,
              "Example: 2022/12",
              (value) => handleEducationDetailChange(detail.id, "to", value)
            )}
            {renderInput(
              `${detail.id}-institution`,
              "Name of institution",
              detail.institution,
              24,
              "Example: ABC University",
              (value) =>
                handleEducationDetailChange(detail.id, "institution", value)
            )}
            {renderInput(
              `${detail.id}-cityCountry`,
              "City and country/territory",
              detail.cityCountry,
              21,
              "Example: New York, USA",
              (value) =>
                handleEducationDetailChange(detail.id, "cityCountry", value)
            )}
            {renderInput(
              `${detail.id}-certificate`,
              "Type of certificate or diploma issued",
              detail.certificate,
              17,
              "Example: Computer Science",
              (value) =>
                handleEducationDetailChange(detail.id, "certificate", value)
            )}
            {renderInput(
              `${detail.id}-fieldOfStudy`,
              "Field of study",
              detail.fieldOfStudy,
              17,
              "Example: Computer Science",
              (value) =>
                handleEducationDetailChange(detail.id, "fieldOfStudy", value)
            )}
          </div>
          {detail.id === educationDetails.length - 1 && (
            <button onClick={handleAddEducationDetail}>Add Another</button>
          )}
          {detail.id !== 0 && (
            <button onClick={() => handleRemoveEducationDetail(detail.id)}>
              Remove
            </button>
          )}
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default EducationInfo;

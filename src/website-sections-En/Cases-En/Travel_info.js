import React, { useState } from "react";
import MyStyling from "./case-input-styling";
import DropdownStyle from "./case-dropdown-style";

function renderInput(id, label, maxLength, placeholder, value, handleChange) {
  return (
    <div>
      <label htmlFor={`input-${id}`}>{label}</label>
      <input
        type="text"
        id={`input-${id}`}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
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

function Divider() {
  return <hr style={{ borderTop: "2px solid #7D85C7", marginBottom: "20px" }} />;
}

function ColorlessDivider() {
  return <hr style={{ borderTop: "2px solid transparent", marginBottom: "20px" }} />;
}

function TravelInfo() {
  const [familyName, setFamilyName] = useState("");
  const [givenName, setGivenName] = useState("");
  const [travelStatus, setTravelStatus] = useState("");
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [spouseTravelStatus, setSpouseTravelStatus] = useState("");
  const [spouseAdditionalQuestions, setSpouseAdditionalQuestions] = useState([]);
  const [childTravelStatus, setChildTravelStatus] = useState("");
  const [childAdditionalQuestions, setChildAdditionalQuestions] = useState([]);

  const handleFamilyNameChange = (e) => {
    setFamilyName(e.target.value);
  };

  const handleGivenNameChange = (e) => {
    setGivenName(e.target.value);
  };

  const handleTravelStatusChange = (e) => {
    setTravelStatus(e.target.value);
    setAdditionalQuestions([]);
  };

  const handleAddTravelHistory = () => {
    setAdditionalQuestions([
      ...additionalQuestions,
      { from: "", to: "", destination: "", length: "", purpose: "",},

    ]);
  };

  const handleAdditionalInputChange = (index, field, value) => {
    setAdditionalQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index][field] = value;
      return updatedQuestions;
    });
  };

  const handleSpouseTravelStatusChange = (e) => {
    setSpouseTravelStatus(e.target.value);
    setSpouseAdditionalQuestions([]);
  };

  const handleAddSpouseTravelHistory = () => {
    setSpouseAdditionalQuestions([
      ...spouseAdditionalQuestions,
      { from: "", to: "", destination: "", length: "", purpose: "" },
    ]);
  };

  const handleSpouseAdditionalInputChange = (index, field, value) => {
    setSpouseAdditionalQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index][field] = value;
      return updatedQuestions;
    });
  };

  const handleChildTravelStatusChange = (e) => {
    setChildTravelStatus(e.target.value);
    setChildAdditionalQuestions([]);
  };

  const handleAddChildTravelHistory = () => {
    setChildAdditionalQuestions([
      ...childAdditionalQuestions,
      { givenName: "", from: "", to: "", destination: "", length: "", purpose: "" },
    ]);
  };

  const handleChildAdditionalInputChange = (index, field, value) => {
    setChildAdditionalQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index][field] = value;
      return updatedQuestions;
    });
  };

  return (
    <div>
      <MyStyling />
      <h4>
        List all trips you have taken outside of your country of origin or of
        residence in the last 10 years (or since your 18th birthday if this was
        less than 10 years ago). Include all trips: tourism, business,
        training, etc. If you did not travel outside of your country during this
        period, check "Did not travel. *Note: Maximum 200 trips*
      </h4>
      <br />
      <div className="myrowfr">
        {renderInput(
          0,
          "Family Name",
          100,
          "Example: Smith",
          familyName,
          handleFamilyNameChange
        )}
        {renderInput(
          1,
          "Given Name",
          100,
          "Example: John",
          givenName,
          handleGivenNameChange
        )}
        {renderDropdown(
          2,
          "Have you traveled?",
          travelStatus,
          ["yes", "no"],
          "Example: choose an option",
          handleTravelStatusChange
        )}
      </div>
      {travelStatus === "yes" && (
        <div>
          {additionalQuestions.map((question, index) => (
            <div className="myrowfr" key={index}>
              {renderInput(
                index + 3,
                "From (YYYY/MM)",
                7,
                "Example: 2022/01",
                question.from,
                (e) => handleAdditionalInputChange(index, "from", e.target.value)
              )}
              {renderInput(
                index + 4,
                "To (YYYY/MM)",
                7,
                "Example: 2022/12",
                question.to,
                (e) => handleAdditionalInputChange(index, "to", e.target.value)
              )}
              {renderInput(
                index + 5,
                "Destination (city, country)",
                31,
                "Example: New York, USA",
                question.destination,
                (e) =>
                  handleAdditionalInputChange(index, "destination", e.target.value)
              )}
              {renderInput(
                index + 6,
                "Length (for example: 6 days)",
                16,
                "Example: 6 days",
                question.length,
                (e) => handleAdditionalInputChange(index, "length", e.target.value)
              )}
              {renderInput(
                index + 7,
                "Purpose of travel (for example: business)",
                31,
                "Example: business",
                question.purpose,
                (e) =>
                  handleAdditionalInputChange(index, "purpose", e.target.value)
              )}
            </div>
          ))}
          <button onClick={handleAddTravelHistory}>Add Travel History</button>
        </div>
      )}
      {travelStatus === "yes" && <Divider />}
      <div className="myrowfr">
        {renderDropdown(
          8,
          "Did your spouse travel?",
          spouseTravelStatus,
          ["yes", "no"],
          "Example: choose an option",
          handleSpouseTravelStatusChange
        )}
      </div>
      {spouseTravelStatus === "yes" && (
        <div>
          {spouseAdditionalQuestions.map((question, index) => (
            <div className="myrowfr" key={index}>
              {renderInput(
                index + 9,
                "From (YYYY/MM)",
                7,
                "Example: 2022/01",
                question.from,
                (e) =>
                  handleSpouseAdditionalInputChange(index, "from", e.target.value)
              )}
              {renderInput(
                index + 10,
                "To (YYYY/MM)",
                7,
                "Example: 2022/12",
                question.to,
                (e) =>
                  handleSpouseAdditionalInputChange(index, "to", e.target.value)
              )}
              {renderInput(
                index + 11,
                "Destination (city, country)",
                31,
                "Example: New York, USA",
                question.destination,
                (e) =>
                  handleSpouseAdditionalInputChange(
                    index,
                    "destination",
                    e.target.value
                  )
              )}
              {renderInput(
                index + 12,
                "Length (for example: 6 days)",
                16,
                "Example: 6 days",
                question.length,
                (e) =>
                  handleSpouseAdditionalInputChange(index, "length", e.target.value)
              )}
              {renderInput(
                index + 13,
                "Purpose of travel (for example: business)",
                31,
                "Example: business",
                question.purpose,
                (e) =>
                  handleSpouseAdditionalInputChange(
                    index,
                    "purpose",
                    e.target.value
                  )
              )}
            </div>
          ))}
          <button onClick={handleAddSpouseTravelHistory}>Add Travel History</button>
        </div>
      )}
      {spouseTravelStatus === "yes" && <Divider />}
      <div className="myrowfr">
        {renderDropdown(
          14,
          "Did your child travel?",
          childTravelStatus,
          ["yes", "no"],
          "Example: choose an option",
          handleChildTravelStatusChange
        )}
      </div>
      {childTravelStatus === "yes" && (
        <div>
          {childAdditionalQuestions.map((question, index) => (
            <div className="myrowfr" key={index}>
              {renderInput(
                index + 15,
                "Given Name",
                100,
                "Example: Emily",
                question.givenName,
                (e) => handleChildAdditionalInputChange(index, "givenName", e.target.value)
              )}
              {renderInput(
                index + 16,
                "From (YYYY/MM)",
                7,
                "Example: 2022/01",
                question.from,
                (e) => handleChildAdditionalInputChange(index, "from", e.target.value)
              )}
              {renderInput(
                index + 17,
                "To (YYYY/MM)",
                7,
                "Example: 2022/12",
                question.to,
                (e) => handleChildAdditionalInputChange(index, "to", e.target.value)
              )}
              {renderInput(
                index + 18,
                "Destination (city, country)",
                31,
                "Example: New York, USA",
                question.destination,
                (e) =>
                  handleChildAdditionalInputChange(
                    index,
                    "destination",
                    e.target.value
                  )
              )}
              {renderInput(
                index + 19,
                "Length (for example: 6 days)",
                16,
                "Example: 6 days",
                question.length,
                (e) => handleChildAdditionalInputChange(index, "length", e.target.value)
              )}
              {renderInput(
                index + 20,
                "Purpose of travel (for example: business)",
                31,
                "Example: business",
                question.purpose,
                (e) =>
                  handleChildAdditionalInputChange(
                    index,
                    "purpose",
                    e.target.value
                  )
              )}
            </div>
          ))}
          <button onClick={handleAddChildTravelHistory}>Add Travel History</button>
        </div>
      )}
    </div>
  );
}

export default TravelInfo;

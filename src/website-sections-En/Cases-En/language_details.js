import React, { useState } from "react";
import MyStyling from "./case-input-styling";
import DropdownStyle from "./case-dropdown-style";

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

function LanguageDetails() {
  const nativeLanguageOptions = ["English", "French", "Spanish", "German"];
  const communicationOptions = [
    "English only",
    "French only",
    "English and French",
    "Neither",
  ];
  const testTakenOptions = ["Yes", "No"];
  const correspondenceLanguageOptions = ["English", "French"];
  const interviewLanguageOptions = ["English", "French"];
  const interpreterRequestedOptions = ["Yes", "No"];

  const [nativeLanguage, setNativeLanguage] = useState("");
  const [communicationAbility, setCommunicationAbility] = useState("");
  const [testTaken, setTestTaken] = useState("");
  const [correspondenceLanguage, setCorrespondenceLanguage] = useState("");
  const [interviewLanguage, setInterviewLanguage] = useState("");
  const [interpreterRequested, setInterpreterRequested] = useState("");

  const handleNativeLanguageChange = (e) => {
    setNativeLanguage(e.target.value);
  };

  const handleCommunicationChange = (e) => {
    setCommunicationAbility(e.target.value);
  };

  const handleTestTakenChange = (e) => {
    setTestTaken(e.target.value);
  };

  const handleCorrespondenceLanguageChange = (e) => {
    setCorrespondenceLanguage(e.target.value);
  };

  const handleInterviewLanguageChange = (e) => {
    setInterviewLanguage(e.target.value);
  };

  const handleInterpreterRequestedChange = (e) => {
    setInterpreterRequested(e.target.value);
  };

  return (
    <div>
      <MyStyling />
      <div className="myrowfr">
        {renderDropdown(
          0,
          "Add your Native language/mother tongue (required)",
          nativeLanguage,
          nativeLanguageOptions,
          "Select your native language",
          handleNativeLanguageChange
        )}
        {renderDropdown(
          1,
          "Are you able to communicate in English and/or French?",
          communicationAbility,
          communicationOptions,
          "Select your communication ability",
          handleCommunicationChange
        )}
        {renderDropdown(
          2,
          "Previously tested by a designated testing agency to assess your English/French skills?",
          testTaken,
          testTakenOptions,
          "Select whether you have taken a test",
          handleTestTakenChange
        )}
        {renderDropdown(
          3,
          "Language preference for: Correspondence (required)",
          correspondenceLanguage,
          correspondenceLanguageOptions,
          "Select your correspondence language preference",
          handleCorrespondenceLanguageChange
        )}
        {renderDropdown(
          4,
          "Language preference for: Interview (required field)",
          interviewLanguage,
          interviewLanguageOptions,
          "Select your interview language preference",
          handleInterviewLanguageChange
        )}
        {renderDropdown(
          5,
          "Language preference for: Interpreter requested (required)",
          interpreterRequested,
          interpreterRequestedOptions,
          "Select your interpreter requested language preference",
          handleInterpreterRequestedChange
        )}
      </div>
    </div>
  );
}

export default LanguageDetails;

import MyStyling from "./case-input-styling";
import DropdownStyle from "./case-dropdown-style";
import React from "react";

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
      <select id={`dropdown-${id}`} value={value} style={DropdownStyle} onChange={handleChange}>
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

function FamilyInfo() {
  const [maritalStatusValue, setMaritalStatusValue] = React.useState('');
  const [previouslyMarriedValue, setPreviouslyMarriedValue] = React.useState('');
  const [input24Value, setInput24Value] = React.useState('');
  const [input25Value, setInput25Value] = React.useState('');
  const [input26Value, setInput26Value] = React.useState('');
  const [input27Value, setInput27Value] = React.useState('');
  const [input28Value, setInput28Value] = React.useState('');
  const [input29Value, setInput29Value] = React.useState('');
  const [input30Value, setInput30Value] = React.useState('');
  const [input31Value, setInput31Value] = React.useState('');
  const [input32Value, setInput32Value] = React.useState('');
  const [input34Value, setInput34Value] = React.useState('');
  const [input35Value, setInput35Value] = React.useState('');
  const [input36Value, setInput36Value] = React.useState('');
  const [input37Value, setInput37Value] = React.useState('');
  const [input38Value, setInput38Value] = React.useState('');
  const [input39Value, setInput39Value] = React.useState('');

  const handleMaritalStatusChange = (e) => {
    setMaritalStatusValue(e.target.value);
  };

  const handlePreviouslyMarriedChange = (e) => {
    setPreviouslyMarriedValue(e.target.value);
  };

  const handleInputChange24 = (e) => {
    setInput24Value(e.target.value);
  };

  const handleInputChange25 = (e) => {
    setInput25Value(e.target.value);
  };

  const handleInputChange26 = (e) => {
    setInput26Value(e.target.value);
  };

  const handleInputChange27 = (e) => {
    setInput27Value(e.target.value);
  };

  const handleInputChange28 = (e) => {
    setInput28Value(e.target.value);
  };

  const handleInputChange29 = (e) => {
    setInput29Value(e.target.value);
  };

  const handleInputChange30 = (e) => {
    setInput30Value(e.target.value);
  };

  const handleInputChange31 = (e) => {
    setInput31Value(e.target.value);
  };

  const handleInputChange32 = (e) => {
    setInput32Value(e.target.value);
  };

  const handleInputChange34 = (e) => {
    setInput34Value(e.target.value);
  };

  const handleInputChange35 = (e) => {
    setInput35Value(e.target.value);
  };

  const handleInputChange36 = (e) => {
    setInput36Value(e.target.value);
  };

  const handleInputChange37 = (e) => {
    setInput37Value(e.target.value);
  };

  const handleInputChange38 = (e) => {
    setInput38Value(e.target.value);
  };

  const handleInputChange39 = (e) => {
    setInput39Value(e.target.value);
  };

  return (
    <div>
      <MyStyling />
      <div className="myrowfr">
        {renderDropdown(
          22,
          'Current marital status (required)',
          maritalStatusValue,
          ['Annulled Marriage', 'Common-Law', 'Divorced', 'Married', 'Separated', 'Single', 'Unknown', 'Widowed'],
          'Example: Select an option',
          handleMaritalStatusChange
        )}
      </div>
      {['Annulled Marriage', 'Divorced', 'Separated', 'Widowed'].includes(maritalStatusValue.trim()) && (
        <div className="myrowfr">
          {renderDropdown(
            23,
            'Have you previously been married or in a common-law relationship? (required)',
            previouslyMarriedValue,
            ['Yes'],
            'Example: Select an option',
            handlePreviouslyMarriedChange
          )}
          {renderInput(
            24,
            'Enter your family or name(s) below (required field)',
            input24Value,
            20,
            'Example: Smith',
            handleInputChange24
          )}
          {renderInput(
            25,
            'Enter your given or name(s) below (required field)',
            input25Value,
            20,
            'Example: John',
            handleInputChange25
          )}
          {renderInput(
            26,
            'Date of birth (YYYY/MM/DD) (required)',
            input26Value,
            10,
            'Example: 1985/01/01',
            handleInputChange26
          )}
          {renderInput(
            27,
            'Type of relationship (required)',
            input27Value,
            20,
            'Example: Spouse',
            handleInputChange27
          )}
          {renderInput(
            28,
            'rel. start date(YYYY/MM/DD) (required)',
            input28Value,
            10,
            'Example: 2010/01/01',
            handleInputChange28
          )}
          {renderInput(
            29,
            'End date of relationship (YYYY/MM/DD) (required)',
            input29Value,
            10,
            'Example: 2020/12/31',
            handleInputChange29
          )}
        </div>
      )}
      {['Married', 'Common-Law'].includes(maritalStatusValue.trim()) && (
        <div>
          <h5>(If you are married or in a common-law relationship) Provide the date on which you were married or entered into the common-law relationship. In addition, please provide the name of your current/spouse/common-law partner.</h5>
          <div className="myrowfr">
            {renderInput(
              30,
              'Date (YYYY/MM/DD) (required)',
              input30Value,
              10,
              'Example: 2022/01/01',
              handleInputChange30
            )}
            {renderInput(
              31,
              'Family name(s) (required)',
              input31Value,
              20,
              'Example: Smith',
              handleInputChange31
            )}
            {renderInput(
              32,
              'Given name(s)',
              input32Value,
              20,
              'Example: John',
              handleInputChange32
            )}
            {renderDropdown(
            33,
            'Have you previously been married or in a common-law relationship? (required)',
            previouslyMarriedValue,
            ['Yes', 'No'],
            'Example: Select an option',
            handlePreviouslyMarriedChange
          )}
          {previouslyMarriedValue === 'Yes' && (
            <>
              {renderInput(
                34,
                'Enter your family or name(s) below (required field)',
                input34Value,
                20,
                'Example: Smith',
                handleInputChange34
              )}
              {renderInput(
                35,
                'Enter your given or name(s) below (required field)',
                input35Value,
                20,
                'Example: John',
                handleInputChange35
              )}
              {renderInput(
                36,
                'Date of birth (YYYY/MM/DD) (required)',
                input36Value,
                10,
                'Example: 1985/01/01',
                handleInputChange36
              )}
              {renderInput(
                37,
                'Type of relationship (required)',
                input37Value,
                20,
                'Example: Spouse',
                handleInputChange37
              )}
              {renderInput(
                38,
                'rel. start date(YYYY/MM/DD) (required)',
                input38Value,
                10,
                'Example: 2010/01/01',
                handleInputChange38
              )}
              {renderInput(
                39,
                'End date of relationship (YYYY/MM/DD) (required)',
                input39Value,
                10,
                'Example: 2020/12/31',
                handleInputChange39
              )}
            </>
          )}
          </div>
        </div>
      )}
      {['Single', 'Unknown'].includes(maritalStatusValue.trim()) && (
        <div className="myrowfr">
          {renderDropdown(
            33,
            'Have you previously been married or in a common-law relationship? (required)',
            previouslyMarriedValue,
            ['Yes', 'No'],
            'Example: Select an option',
            handlePreviouslyMarriedChange
          )}
          {previouslyMarriedValue === 'Yes' && (
            <>
              {renderInput(
                34,
                'Enter your family or name(s) below (required field)',
                input34Value,
                20,
                'Example: Smith',
                handleInputChange34
              )}
              {renderInput(
                35,
                'Enter your given or name(s) below (required field)',
                input35Value,
                20,
                'Example: John',
                handleInputChange35
              )}
              {renderInput(
                36,
                'Date of birth (YYYY/MM/DD) (required)',
                input36Value,
                10,
                'Example: 1985/01/01',
                handleInputChange36
              )}
              {renderInput(
                37,
                'Type of relationship (required)',
                input37Value,
                20,
                'Example: Spouse',
                handleInputChange37
              )}
              {renderInput(
                38,
                'rel. start date(YYYY/MM/DD) (required)',
                input38Value,
                10,
                'Example: 2010/01/01',
                handleInputChange38
              )}
              {renderInput(
                39,
                'End date of relationship (YYYY/MM/DD) (required)',
                input39Value,
                10,
                'Example: 2020/12/31',
                handleInputChange39
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default FamilyInfo;

import React from 'react';
import MyStyling from './case-input-styling';
import DropdownStyle from './case-dropdown-style';

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


function Divider() {
  return <hr style={{ borderTop: "2px solid #7D85C7", marginBottom: "20px" }} />;
}

function PersonalInfo() {
  const [input1Value, setInput1Value] = React.useState('');
  const [input2Value, setInput2Value] = React.useState('');
  const [input3Value, setInput3Value] = React.useState('');
  const [input4Value, setInput4Value] = React.useState('');
  const [input5Value, setInput5Value] = React.useState('');
  const [input6Value, setInput6Value] = React.useState('');
  const [input7Value, setInput7Value] = React.useState('');
  const [input8Value, setInput8Value] = React.useState('');
  const [input9Value, setInput9Value] = React.useState('');
  const [input10Value, setInput10Value] = React.useState('');
  const [input11Value, setInput11Value] = React.useState('');
  const [input12Value, setInput12Value] = React.useState('');
  const [input13Value, setInput13Value] = React.useState('');
  const [input14Value, setInput14Value] = React.useState('');
  const [input15Value, setInput15Value] = React.useState('');
  const [input16Value, setInput16Value] = React.useState('');
  const [input17Value, setInput17Value] = React.useState('');
  const [hadPreviousCountries, setHadPreviousCountries] = React.useState('');
  const [previousCountries, setPreviousCountries] = React.useState([]);
  const [maritalStatusValue, setMaritalStatusValue] = React.useState('');

  const handleInputChange1 = (e) => setInput1Value(e.target.value);
  const handleInputChange2 = (e) => setInput2Value(e.target.value);
  const handleInputChange3 = (e) => setInput3Value(e.target.value);
  const handleInputChange4 = (e) => setInput4Value(e.target.value);
  const handleInputChange5 = (e) => setInput5Value(e.target.value);
  const handleInputChange6 = (e) => setInput6Value(e.target.value);
  const handleInputChange7 = (e) => setInput7Value(e.target.value);
  const handleInputChange8 = (e) => setInput8Value(e.target.value);
  const handleInputChange9 = (e) => setInput9Value(e.target.value);
  const handleInputChange10 = (e) => setInput10Value(e.target.value);
  const handleInputChange11 = (e) => setInput11Value(e.target.value);
  const handleInputChange12 = (e) => setInput12Value(e.target.value);
  const handleInputChange13 = (e) => setInput13Value(e.target.value);
  const handleInputChange14 = (e) => setInput14Value(e.target.value);
  const handleInputChange15 = (e) => setInput15Value(e.target.value);
  const handleInputChange16 = (e) => setInput16Value(e.target.value);
  const handleInputChange17 = (e) => setInput17Value(e.target.value);

  

  const handlePreviousCountriesChange = (e) => setHadPreviousCountries(e.target.value);
  const handleMaritalStatusChange = (e) => {setMaritalStatusValue(e.target.value);};

  const handleAddCountry = () => {
    const newCountry = {
      country: '',
      immigrationStatus: '',
      startDate: '',
      endDate: ''
    };
    setPreviousCountries([...previousCountries, newCountry]);
  };

  const handleRemoveCountry = (index) => {
    const updatedCountries = [...previousCountries];
    updatedCountries.splice(index, 1);
    setPreviousCountries(updatedCountries);
  };

  const handleCountryChange = (index, value) => {
    const updatedCountries = [...previousCountries];
    updatedCountries[index].country = value;
    setPreviousCountries(updatedCountries);
  };

  const handleImmigrationStatusChange = (index, value) => {
    const updatedCountries = [...previousCountries];
    updatedCountries[index].immigrationStatus = value;
    setPreviousCountries(updatedCountries);
  };

  const handleStartDateChange = (index, value) => {
    const updatedCountries = [...previousCountries];
    updatedCountries[index].startDate = value;
    setPreviousCountries(updatedCountries);
  };

  const handleEndDateChange = (index, value) => {
    const updatedCountries = [...previousCountries];
    updatedCountries[index].endDate = value;
    setPreviousCountries(updatedCountries);
  };

  return (
    <div>
      <MyStyling />
      <div className="myrowfr">
        {renderInput(0, 'Your last name(s) (as shown on passport)', input1Value, 20, 'Example: Smith', handleInputChange1)}
        {renderInput(1, 'Your given name(s) (as shown on passport)', input2Value, 20, 'Example: John', handleInputChange2)}
        {renderInput(2, 'Your date of birth: (YYYY/MM/DD)', input3Value, 10, 'Example: 1985/01/01', handleInputChange3)}
      </div>
      <div className="myrowfr">
        {renderDropdown(
          3,
          'Have you ever used any other name(s)? (yes/no)',
          input4Value,
          ['Yes', 'No'],
          'Example: (yes)',
          handleInputChange4
        )}
        {renderInput(
          4,
          'if yes - The family name(s), maiden name, alias, etc.',
          input5Value,
          20,
          'Example: smithy',
          handleInputChange5
        )}
        {renderInput(
          5,
          'if yes - The Given name(s), maiden name, alias, etc.',
          input6Value,
          20,
          'Example: johnny',
          handleInputChange6
        )}
      </div>
      <div className="myrowfr">
        {renderInput(
          6,
          'Your UCI number (no UCI num? - type "xx")',
          input7Value,
           10,
          'Example: 1234567890',
          handleInputChange7
        )}
        {renderDropdown(7, 'Sex', input8Value, ['Male', 'Female', 'Unknown', 'Another Gender'], 'Example: Select an option', handleInputChange8)}
        {renderDropdown(
          8,
          'Eye colour',
          input9Value,
          ['Black', 'Blue', 'Brown', 'Green', 'Grey', 'Hazel', 'Other', 'Pink', 'Sea Green'],
          'Example: Select an option',
          handleInputChange9
        )}
      </div>
      <div className="myrowfr">
        {renderInput(9, 'Your height in CM', input10Value, 4, 'Example: 156', handleInputChange10)}
        {renderDropdown(
          10,
          'Country of birth?',
          input11Value,
          ['Iraq', 'Iraq 2', 'Iraq 3', 'Iraq4'],
          'Example: Select an option',
          handleInputChange11
        )}
        {renderInput(11, 'Place of birth', input12Value, 10, 'Example: The motel', handleInputChange12)}
      </div>
      <div className="myrowfr">
        {renderDropdown(
          12,
          'Country of citizenship (1)',
          input13Value,
          ['one', 'two', 'three', 'four'],
          'Example: Select an option',
          handleInputChange13
        )}
        {renderDropdown(
          13,
          'Country of citizenship (2) (optional)',
          input14Value,
          ['none', 'one', 'two', 'three', 'four'],
          'Example: Select an option',
          handleInputChange14
        )}
        {renderDropdown(
          14,
          'Current country of residence',
          input15Value,
          ['one', 'two', 'three', 'four'],
          'Example: Select an option',
          handleInputChange15
        )}
      </div>
      <div className="myrowfr">
        {renderDropdown(
          15,
          'country of residence - Status (required)',
          input16Value,
          ['Citizen', 'Permanent Resident', 'Visitor', 'Worker'],
          'Example: Select an option',
          handleInputChange16
        )}
        {renderDropdown(
          16,
          'Status of citizenship (2) (optional)',
          input17Value,
          ['Citizen', 'Permanent Resident', 'Visitor', 'Worker'],
          'Example: Select an option',
          handleInputChange17
        )}
      </div>
      <Divider />
      <h5>Previous countries of residence: during the past five years, have you lived in any country other than your country of citizenship or your current country of residence (indicated above) for more than six months?</h5>
      <div className="myrowfr">
        {renderDropdown(
          17,
          'Had previous countries of residence?',
          hadPreviousCountries,
          ['Yes', 'No'],
          'Example: Select an option',
          handlePreviousCountriesChange
        )}
      </div>
      
      {hadPreviousCountries === 'Yes' && (
        <div>
          
          
          <h5>Previous countries of residence:</h5>
          {previousCountries.map((country, index) => (
            <div>
            <div key={index} className="myrowfr">
              {renderDropdown(
                18,
                `Previous country of residence #${index + 1}`,
                country.country,
                ['Country 1', 'Country 2', 'Country 3', 'Country 4'],
                'Example: Select an option',
                (e) => handleCountryChange(index, e.target.value)
              )}
              {renderDropdown(
                19,
                'Immigration status',
                country.immigrationStatus,
                ['Status 1', 'Status 2', 'Status 3', 'Status 4'],
                'Example: Select an option',
                (e) => handleImmigrationStatusChange(index, e.target.value)
              )}
              {renderInput(
                20,
                'Start date of immigration status (YYYY/MM/DD)',
                country.startDate,
                10,
                'Example: 2022/01/01',
                (e) => handleStartDateChange(index, e.target.value)
              )}
              {renderInput(
                21,
                'End date of immigration status (YYYY/MM/DD)',
                country.endDate,
                10,
                'Example: 2022/12/31',
                (e) => handleEndDateChange(index, e.target.value)
              )}

            </div>
            <button onClick={() => handleRemoveCountry(index)}>Remove</button>
            </div>
            
          ))}
          
          <button onClick={handleAddCountry}>Add Another</button>
        </div>
        
      )}
      <Divider />
      <div className="myrowfr">
        {renderDropdown(
          22,
          'Current marital status (required)',
          maritalStatusValue,
          [' Annulled Marriage ', ' Common-Law ', ' Divorced ', ' Married ', ' Separated ', '  Single  ', '  Unknown  ', '  Widowed  '],
          'Example: Select an option',
          handleMaritalStatusChange
        )}
      </div>
    </div>
  );
}

export default PersonalInfo;

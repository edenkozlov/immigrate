import React from 'react';
import MyStyling from './case-input-styling';
import DropdownStyle from './case-dropdown-style';
import SaveButton from './save-button';

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
  return <hr style={{ borderTop: '2px solid #7D85C7', marginBottom: '20px' }} />;
}

function PersonalInfo() {
  const [occupationValue, setOccupationValue] = React.useState('');
  const [intendedOccupationValue, setIntendedOccupationValue] = React.useState('');
  const [inputSets, setInputSets] = React.useState([]);

  const handleOccupationChange = (e) => {
    setOccupationValue(e.target.value);
  };

  const handleIntendedOccupationChange = (e) => {
    setIntendedOccupationValue(e.target.value);
  };

  const handleAddAnother = () => {
    setInputSets((prevSets) => [
      ...prevSets,
      {
        id: Date.now(),
        occupation: '',
        intendedOccupation: '',
        from: '',
        to: '',
        activity: '',
        location: '',
        status: '',
        employer: '',
      },
    ]);
  };

  const handleRemove = (id) => {
    setInputSets((prevSets) => prevSets.filter((set) => set.id !== id));
  };

  const handleInputChange = (e, id, field) => {
    const { value } = e.target;
    setInputSets((prevSets) =>
      prevSets.map((set) => {
        if (set.id === id) {
          return {
            ...set,
            [field]: value,
          };
        }
        return set;
      })
    );
  };

  return (
    <div>
      <SaveButton />
      <MyStyling />
      <div className="myrowfr"></div>
      {/* Existing sections */}
      
      <div className="myrowfr">
        {renderDropdown(
          18,
          'Enter your Current occupation (required)',
          occupationValue,
          [
            'None',
            'Secondary or less',
            'Trade/Apprenticeship Certificate/Diploma',
            'Non-University Certificate/Diploma',
            'Post-Secondary – No Degree',
            "Bachelor’s Degree",
            'Post Graduate – No Degree',
            'Master’s Degree',
            'Doctorate - Ph D'
          ],
          'Example: Select an option',
          handleOccupationChange
        )}

        {renderInput(
          19,
          'Enter your Intended occupation',
          intendedOccupationValue,
          50,
          'Example: Software Engineer',
          handleIntendedOccupationChange
        )}
        </div>
<Divider />
<div>
  <h3>Provide the details of your personal history for the past 10 years, or since your 18th birthday if it was less than 10 years ago. Start with the most recent information. Under “Activity,” write your occupation or job title if you were working. If you were not working, provide information on what you were doing (for example, unemployed, studying, travelling, retired, in detention). If you were outside your country or territory of nationality, indicate your status in the country or territory you were in. Note: Please ensure that you do not leave any gaps in time</h3>
</div>
      {inputSets.map((inputSet) => (
        <div key={inputSet.id} className="myrowfr">
          {renderInput(
            inputSet.id + 1,
            'From (YYYY/MM)',
            inputSet.from,
            10,
            'Example: 2021/01',
            (e) => handleInputChange(e, inputSet.id, 'from')
          )}

          {renderInput(
            inputSet.id + 2,
            'To (YYYY/MM)',
            inputSet.to,
            10,
            'Example: 2022/12',
            (e) => handleInputChange(e, inputSet.id, 'to')
          )}

          {renderInput(
            inputSet.id + 3,
            'Activity',
            inputSet.activity,
            100,
            'Example: Software Development',
            (e) => handleInputChange(e, inputSet.id, 'activity')
          )}

          {renderInput(
            inputSet.id + 4,
            'City/town and country/territory',
            inputSet.location,
            100,
            'Example: New York, USA',
            (e) => handleInputChange(e, inputSet.id, 'location')
          )}

          {renderInput(
            inputSet.id + 5,
            'Status in country or territory',
            inputSet.status,
            50,
            'Example: Citizen',
            (e) => handleInputChange(e, inputSet.id, 'status')
          )}

          {renderInput(
            inputSet.id + 6,
            'Name of company, employer, school, facility',
            inputSet.employer,
            100,
            'Example: ABC Corporation',
            (e) => handleInputChange(e, inputSet.id, 'employer')
          )}
          <div>
          <button onClick={() => handleRemove(inputSet.id)}>Remove</button>
          </div>
        </div>
      ))}
    
      <Divider />
      {/* Existing sections */}
      
      <button onClick={handleAddAnother}>Add occupation History</button>
      
    </div>
  );
}

export default PersonalInfo;

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

function DividerGray() {
  return <hr style={{ borderTop: "1px dotted #808080", marginBottom: "20px" }} />;
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
  const [input40Value, setInput40Value] = React.useState('');
  const [input41Value, setInput41Value] = React.useState('');
  const [input42Value, setInput42Value] = React.useState('');
  const [input43Value, setInput43Value] = React.useState('');
  const [input44Value, setInput44Value] = React.useState('');
  const [input45Value, setInput45Value] = React.useState('');
  const [input46Value, setInput46Value] = React.useState('');
  const [input47Value, setInput47Value] = React.useState('');
  const [input48Value, setInput48Value] = React.useState('');
  const [input49Value, setInput49Value] = React.useState('');
  const [input50Value, setInput50Value] = React.useState('');
  const [input51Value, setInput51Value] = React.useState('');
  const [input52Value, setInput52Value] = React.useState('');
  const [input53Value, setInput53Value] = React.useState('');
  const [input54Value, setInput54Value] = React.useState('');
  const [input55Value, setInput55Value] = React.useState('');
  const [input56Value, setInput56Value] = React.useState('');
  const [input57Value, setInput57Value] = React.useState('');
  const [inputSets, setInputSets] = React.useState([]);
  const [governmentPositions, setGovernmentPositions] = React.useState([]);
  const [serviceHistory, setServiceHistory] = React.useState([]);
  const [addressSets, setAddressSets] = React.useState([]);
  
  const [hadPreviousCountries, setHadPreviousCountries] = React.useState('');
  const [previousCountries, setPreviousCountries] = React.useState([]);
  


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


  const handlePreviousCountriesChange = (e) => setHadPreviousCountries(e.target.value);
  const handleMaritalStatusChange = (e) => {
    setMaritalStatusValue(e.target.value);
  };

  

  const handleAddCountry = () => {
    const newCountry = {
      country: '',
      immigrationStatus: '',
      startDate: '',
      endDate: '',
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

  const handleInputChange40 = (e) => {
    setInput40Value(e.target.value);
  };

  const handleInputChange41 = (e) => {
    setInput41Value(e.target.value);
  };

  const handleInputChange42 = (e) => {
    setInput42Value(e.target.value);
  };

  const handleInputChange43 = (e) => {
    setInput43Value(e.target.value);
  };

  const handleInputChange44 = (e) => {
    setInput44Value(e.target.value);
  };

  const handleInputChange45 = (e) => {
    setInput45Value(e.target.value);
  };
  const handleInputChange46 = (e) => {
    setInput46Value(e.target.value);
  };
  const handleInputChange47 = (e) => {
    setInput47Value(e.target.value);
  };
  const handleInputChange48 = (e) => {
    setInput48Value(e.target.value);
  };
  const handleInputChange49 = (e) => {
    setInput49Value(e.target.value);
  };
  const handleInputChange50 = (e) => {
    setInput50Value(e.target.value);
  };
  const handleInputChange51 = (e) => {
    setInput51Value(e.target.value);
  };
  const handleInputChange52 = (e) => {
    setInput52Value(e.target.value);
  };
  const handleInputChange53 = (e) => {
    setInput53Value(e.target.value);
  };
  const handleInputChange54 = (e) => {
    setInput54Value(e.target.value);
  };
  const handleInputChange55 = (e) => {
    setInput55Value(e.target.value);
  };
  const handleInputChange56 = (e) => {
    setInput56Value(e.target.value);
  };
  const handleInputChange57 = (e) => {
    setInput57Value(e.target.value);
  };
  


  const handleRemoveSet = (setId) => {
    setInputSets((prevSets) => prevSets.filter((set) => set.id !== setId));
  };
  
  const handleAddAnother = () => {
    setInputSets((prevSets) => [
      ...prevSets,
      {
        id: Date.now(),
        from: '',
        to: '',
        organization: '',
        organizationType: '',
        activities: '',
        location: '',
      },
    ]);
  };

  const handlePositionChange = (e, index, field) => {
    const { value } = e.target;
    setGovernmentPositions((prevPositions) => {
      const updatedPositions = [...prevPositions];
      updatedPositions[index][field] = value;
      return updatedPositions;
    });
  };
  
  const handleRemovePosition = (index) => {
    setGovernmentPositions((prevPositions) => {
      const updatedPositions = [...prevPositions];
      updatedPositions.splice(index, 1);
      return updatedPositions;
    });
  };
  
  const handleAddPosition = () => {
    setGovernmentPositions((prevPositions) => [
      ...prevPositions,
      {
        from: '',
        to: '',
        country: '',
        department: '',
        activities: '',
      },
    ]);
  };
  
  const handleServiceChange = (e, index, field) => {
    const { value } = e.target;
    setServiceHistory((prevHistory) => {
      const updatedHistory = [...prevHistory];
      updatedHistory[index][field] = value;
      return updatedHistory;
    });
  };
  
  const handleRemoveService = (index) => {
    setServiceHistory((prevHistory) => {
      const updatedHistory = [...prevHistory];
      updatedHistory.splice(index, 1);
      return updatedHistory;
    });
  };
  
  const handleAddService = () => {
    setServiceHistory((prevHistory) => [
      ...prevHistory,
      {
        country: '',
        branch: '',
        from: '',
        to: '',
        rank: '',
        reason: '',
        combatDates: '',
      },
    ]);
  };

  const handleAddressChange = (e, index, field) => {
    const { value } = e.target;
    setAddressSets((prevSets) =>
      prevSets.map((set, i) => {
        if (i === index) {
          return {
            ...set,
            [field]: value,
          };
        }
        return set;
      })
    );
  };
  
  const handleRemoveAddress = (index) => {
    setAddressSets((prevSets) => prevSets.filter((set, i) => i !== index));
  };
  
  const handleAddAddress = () => {
    setAddressSets((prevSets) => [
      ...prevSets,
      {
        from: '',
        to: '',
        street: '',
        city: '',
        province: '',
        country: '',
        postalCode: '',
      },
    ]);
  };

  return (
    <div>
      <SaveButton />
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
        {renderDropdown(
          7,
          'Sex',
          input8Value,
          ['Male', 'Female', 'Unknown', 'Another Gender'],
          'Example: Select an option',
          handleInputChange8
        )}
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
          'Country of residence - Status (required)',
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
              <div>
              <button onClick={() => handleRemoveCountry(index)}>Remove</button>
              </div>
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
      <Divider />
      <div className="myrowfr">
          {renderDropdown(
            40,
            'Where do you plan to live in Canada? (Province/Territory)',
            input40Value,
            ['Yes', 'No'],
            'Example: Select an option',
            handleInputChange40
          )}
          {renderDropdown(
            41,
            'Where do you plan to live in Canada? (City/Town)',
            input41Value,
            ['Yes', 'No'],
            'Example: Select an option',
            handleInputChange41
          )}
          {renderDropdown(
            42,
            'Have you received your Certificat de Sélection du Québec (CSQ)? (required)',
            input42Value,
            ['Yes', 'No'],
            'Example: Select an option',
            handleInputChange42
          )}
          {input42Value === 'Yes' && (
            <>
            {renderInput(
              43,
              'If yes, enter the CSQ number below (required)',
              input43Value,
              11,
              'Example: 2020/12/31',
              handleInputChange43
            )}
            </>
          )}
          {input42Value === 'No' && (
            <>
            {renderDropdown(
              44,
              'when did you apply for your CSQ? (YYYY/MM/DD)',
              input44Value,
              ['Yes', 'No'],
              'Example: Select an option',
              handleInputChange44
            )}
            </>
          )}
          </div>
          <Divider />
          <h3>Questionnaire: Have you ever:</h3>
          <br></br>
          {renderDropdown(
              45,
              'been convicted of a crime or offence in Canada for which a pardon has not been granted under the Criminal Records Act of Canada?',
              input45Value,
              ['Yes', 'No'],
              'Example: Select an option',
              handleInputChange45
            )}
          {renderDropdown(
              46,
              'been convicted of or are currently charged with, on trial for, or party to a crime or offence, or subject of any criminal proceedings in any other country or territory?',
              input46Value,
              ['Yes', 'No'],
              'Example: Select an option',
              handleInputChange46
            )}
            {renderDropdown(
              47,
              'made previous claims for refugee protection in Canada or at a Canadian visa office abroad, in any other country(ies) or territory(ies), or with the United Nations High Commissioner for Refugees (UNHCR)?',
              input47Value,
              ['Yes', 'No'],
              'Example: Select an option',
              handleInputChange47
            )}
            {renderDropdown(
              48,
              'been refused refugee status, an immigrant or permanent resident visa (including a Certificat de Sélection du Québec [CSQ] or application to the Provincial Nominee Program) or a visitor or temporary resident visa, for Canada or any other country or territory?',
              input48Value,
              ['Yes', 'No'],
              'Example: Select an option',
              handleInputChange48
            )}
            {renderDropdown(
              49,
              'been refused admission to, or ordered to leave, Canada or any other country or territory?',
              input49Value,
              ['Yes', 'No'],
              'Example: Select an option',
              handleInputChange49
            )}
            {renderDropdown(
              50,
              'been involved in an act of genocide, in a war crime or in the commission of a crime against humanity?',
              input50Value,
              ['Yes', 'No'],
              'Example: Select an option',
              handleInputChange50
            )}
            {renderDropdown(
              51,
              'used, planned or advocated the use of armed struggle or violence to reach political, religious or social objectives?',
              input51Value,
              ['Yes', 'No'],
              'Example: Select an option',
              handleInputChange51
            )}
            {renderDropdown(
              52,
              'been associated with a group that used, uses, or advocated or advocates the use of armed struggle or violence to reach political, religious or social objectives?',
              input52Value,
              ['Yes', 'No'],
              'Example: Select an option',
              handleInputChange52
            )}
            {renderDropdown(
              53,
              'been a member of an organization that is or was engaged in an activity that is part of a pattern of criminal activity?',
              input53Value,
              ['Yes', 'No'],
              'Example: Select an option',
              handleInputChange53
            )}
            {renderDropdown(
              54,
              'been detained, incarcerated or put in jail?',
              input54Value,
              ['Yes', 'No'],
              'Example: Select an option',
              handleInputChange54
            )}
            {renderDropdown(
              55,
              'had any serious disease or physical or mental disorder?',
              input55Value,
              ['Yes', 'No'],
              'Example: Select an option',
              handleInputChange55
            )}
            {renderInput(
              56,
              'If your answer to any of these questions is yes, please provide details below (maximum 679 characters):',
              input56Value,
              679,
              'Example: Bla bla bla',
              handleInputChange56
            )}
            <Divider />
            <h3>What organizations have you supported, been a member of or been associated with? Include any political, social, youth or student organization, trade unions and professional associations. Do not use abbreviations. Indicate the city and country or territory where you were a member. Write “none” in the first input field if you have not been a member of any association/organization.</h3>
            {inputSets.map((inputSet) => (
        <div key={inputSet.id}>
          <div className="myrowfr">
            {renderInput(
              `${inputSet.id}-from`,
              'From (YYYY/MM)',
              inputSet.from,
              10,
              'Example: 2021/01',
              (e) => handleInputChange(e, inputSet.id, 'from')
            )}
            {renderInput(
              `${inputSet.id}-to`,
              'To (YYYY/MM)',
              inputSet.to,
              10,
              'Example: 2022/12',
              (e) => handleInputChange(e, inputSet.id, 'to')
            )}
            {renderInput(
              `${inputSet.id}-organization`,
              'Name of organization',
              inputSet.organization,
              100,
              'Example: ABC Corporation',
              (e) => handleInputChange(e, inputSet.id, 'organization')
            )}
            {renderInput(
              `${inputSet.id}-organizationType`,
              'Type of organization',
              inputSet.organizationType,
              100,
              'Example: Technology Company',
              (e) => handleInputChange(e, inputSet.id, 'organizationType')
            )}
            {renderInput(
              `${inputSet.id}-activities`,
              'Activities and/or positions held within organization',
              inputSet.activities,
              100,
              'Example: Software Developer',
              (e) => handleInputChange(e, inputSet.id, 'activities')
            )}
            {renderInput(
              `${inputSet.id}-location`,
              'City and country/territory',
              inputSet.location,
              100,
              'Example: New York, USA',
              (e) => handleInputChange(e, inputSet.id, 'location')
            )}
            <div class="myrowfr">
            <button onClick={() => handleRemoveSet(inputSet.id)}>Remove</button>
            </div>
          </div>
          {inputSets.length > 1 && <DividerGray />}
        </div>
      ))}
      {/* Existing sections */}
      <div >
        <button onClick={handleAddAnother}>Add</button>
      </div>

      <Divider />
      <h3>List any government positions (such as civil servant, judge, police officer, employee in a security organization) you have held. Include positions you have held before or after your retirement. Do not use abbreviations. Write “none” in the first input field if you have not held any government positions.</h3>

      {governmentPositions.map((position, index) => (
  <div key={index} className="myrowfr">
    {renderInput(
      `from-${index}`,
      'From (YYYY/MM)',
      position.from,
      10,
      'Example: 2021/01',
      (e) => handlePositionChange(e, index, 'from')
    )}

    {renderInput(
      `to-${index}`,
      'To (YYYY/MM)',
      position.to,
      10,
      'Example: 2022/12',
      (e) => handlePositionChange(e, index, 'to')
    )}

    {renderInput(
      `country-${index}`,
      'Country/territory and level of jurisdiction',
      position.country,
      100,
      'Example: USA, National',
      (e) => handlePositionChange(e, index, 'country')
    )}

    {renderInput(
      `department-${index}`,
      'Department/branch',
      position.department,
      100,
      'Example: Ministry of Finance',
      (e) => handlePositionChange(e, index, 'department')
    )}

    {renderInput(
      `activities-${index}`,
      'Activity and/or positions held',
      position.activities,
      100,
      'Example: Policy Development',
      (e) => handlePositionChange(e, index, 'activities')
    )}
   

<div >
      <button onClick={() => handleRemovePosition(index)}>Remove</button>
      
      </div>
      <div>
          {inputSets.length > 1 && <DividerGray />}
        </div>
   
     
  </div>
  
))}


<button onClick={handleAddPosition}>Add Position</button>

<Divider />
<h3>Provide complete details of military and paramilitary service for each of the countries in whose armed forces you served. Write “none” in the first input field if you have not undertaken military and/or paramilitary service. Note: Please ensure that you do not leave any gaps in time.</h3>
{serviceHistory.map((service, index) => (
  <div key={index}>
    <div className="myrowfr">
      {renderInput(
        `country-${index}`,
        'Name of country or territory',
        service.country,
        100,
        'Example: USA',
        (e) => handleServiceChange(e, index, 'country')
      )}

      {renderInput(
        `branch-${index}`,
        'Branch of service, unit numbers and names of commanding officers',
        service.branch,
        100,
        'Example: Army, 1st Infantry Division',
        (e) => handleServiceChange(e, index, 'branch')
      )}

      {renderInput(
        `from-${index}`,
        'From (YYYY/MM)',
        service.from,
        10,
        'Example: 2021/01',
        (e) => handleServiceChange(e, index, 'from')
      )}

      {renderInput(
        `to-${index}`,
        'To (YYYY/MM)',
        service.to,
        10,
        'Example: 2022/12',
        (e) => handleServiceChange(e, index, 'to')
      )}

      {renderInput(
        `rank-${index}`,
        'Rank(s)',
        service.rank,
        50,
        'Example: Captain',
        (e) => handleServiceChange(e, index, 'rank')
      )}

      {renderInput(
        `reason-${index}`,
        'Reason for end of service',
        service.reason,
        100,
        'Example: Honorable discharge',
        (e) => handleServiceChange(e, index, 'reason')
      )}

      {renderInput(
        `combatDates-${index}`,
        'Dates and places of any active combat',
        service.combatDates,
        100,
        'Example: 2010-2012, Iraq',
        (e) => handleServiceChange(e, index, 'combatDates')
      )}

      <div>
        <button onClick={() => handleRemoveService(index)}>Remove</button>
      </div>
    </div>
    {index !== serviceHistory.length - 1 && <DividerGray />}
  </div>
))}

<button onClick={handleAddService}>Add Service</button>

<Divider />
<h3>List all addresses where you have lived in the past 10 years or since your 18th birthday if it was less than 10 years ago. Do not use P.O. box addresses.</h3>

{addressSets.map((addressSet, index) => (
  <div key={index}>
    <div className="myrowfr">
      {renderInput(
        `from-${index}`,
        'From (YYYY/MM)',
        addressSet.from,
        10,
        'Example: 2021/01',
        (e) => handleAddressChange(e, index, 'from')
      )}
      {renderInput(
        `to-${index}`,
        'To (YYYY/MM)',
        addressSet.to,
        10,
        'Example: 2022/12',
        (e) => handleAddressChange(e, index, 'to')
      )}
      {renderInput(
        `street-${index}`,
        'Street and number',
        addressSet.street,
        100,
        'Example: 123 Main St',
        (e) => handleAddressChange(e, index, 'street')
      )}
      {renderInput(
        `city-${index}`,
        'City or town',
        addressSet.city,
        100,
        'Example: New York',
        (e) => handleAddressChange(e, index, 'city')
      )}
      {renderInput(
        `province-${index}`,
        'Province, state or district',
        addressSet.province,
        100,
        'Example: New York',
        (e) => handleAddressChange(e, index, 'province')
      )}
      {renderInput(
        `country-${index}`,
        'Country or territory',
        addressSet.country,
        100,
        'Example: USA',
        (e) => handleAddressChange(e, index, 'country')
      )}
      {renderInput(
        `postalCode-${index}`,
        'Postal code or zip code',
        addressSet.postalCode,
        10,
        'Example: 12345',
        (e) => handleAddressChange(e, index, 'postalCode')
      )}
      <div>
        <button onClick={() => handleRemoveAddress(index)}>Remove</button>
      </div>
    </div>
    {index !== addressSets.length - 1 && <DividerGray />}
    {/* Add the gray divider after every set except the last one */}
  </div>
))}
{addressSets.length > 0 && <div><DividerGray /></div>}
{/* Add the gray divider if there is at least one address set */}
<button onClick={handleAddAddress}>Add Address</button>
    </div>
  );
}

export default PersonalInfo;

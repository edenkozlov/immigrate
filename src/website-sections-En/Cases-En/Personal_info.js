import MyStyling from "./case-input-styling";
import DropdownStyle from "./case-dropdown-style";

function renderInput(id, label, value, maxLength, placeholder) {
  return (
    <div>
      <label htmlFor={`input-${id}`}>{label}</label>
      <input
        type="text"
        id={`input-${id}`}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </div>
  );
}

function renderDropdown(id, label, value, options, placeholder) {
  return (
    <div>
      <label htmlFor={`dropdown-${id}`}>{label}</label>
      <select
        id={`dropdown-${id}`}
        value={value}
        style={DropdownStyle}
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

function PersonalInfo() {
  return (
    <div>
      <MyStyling />
      <div className="myrowfr">
        {renderInput(0, 'Your last name(s) (as shown on passport)', '', 20, 'Example: Smith')}
        {renderInput(1, 'Your given name(s) (as shown on passport)', '', 20, 'Example: John')}
        {renderInput(2, 'Your date of birth: (YYYY/MM/DD)', '', 10, 'Example: 1985/01/01')}
      </div>
      <div className="myrowfr">
        {renderInput(3, 'Have you ever used any other name(s)? (yes/no)', '', 3, 'Example: (yes)')}
        {renderInput(4, 'if yes - The family name(s), maiden name, alias, etc.', '', 20, 'Example: smithy')}
        {renderInput(5, 'if yes - The Given name(s), maiden name, alias, etc.', '', 20, 'Example: johnny')}
      </div>
      <div className="myrowfr">
        {renderInput(6, 'Your UCI number (no UCI num? - type "xx")', '', 10, 'Example: 1234567890')}
        {renderDropdown(7, 'Sex', '', ['Male', 'Female', 'Unknown', 'Another Gender'], 'Example: Select an option')}
        {renderDropdown(8, 'Eye colour', '', ['Black', 'Blue', 'Brown', 'Green', 'Grey', 'Hazel', 'Other', 'Pink', 'Sea Green'], 'Example: Select an option')}
      </div>
      <div className="myrowfr">
        {renderInput(9, 'Your height in CM', '', 4, 'Example: 156')}
        {renderDropdown(10, 'Country of birth?', '', ['Iraq', 'Iraq 2', 'Iraq 3', 'Iraq4'], 'Example: Select an option')}
        {renderInput(11, 'Place of birth', '', 10, 'Example: The motel')}
      </div>
      <div className="myrowfr">
        {renderDropdown(12, 'Country of citizenship (1)', '', ['one', 'two', 'three', 'four'], 'Example: Select an option')}
        {renderDropdown(13, 'Country of citizenship (2)', '', ['none', 'one', 'two', 'three', 'four'], 'Example: Select an option')}
        {renderDropdown(14, 'Country of citizenship (2)', '', ['one', 'two', 'three', 'four'], 'Example: Select an option')}
      </div>
      <div className="myrowfr">
        {renderDropdown(15, 'Status of citizenship', '', ['Citizen', 'Permanent Resident', 'Visitor', 'Worker'], 'Example: Select an option')}
        
      </div>
      <div className="myrowfr">
        
        
      </div>
      <div className="myrowfr">
        
        
      </div>
    </div>
  );
}

export default PersonalInfo;

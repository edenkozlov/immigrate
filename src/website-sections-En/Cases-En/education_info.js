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

function EducationInfo() {
  return (
    <div>
      <MyStyling />
      <div className="myrowfr">
        {renderInput(0, 'test', '', 20, 'Example: test')}
        {renderInput(1, 'Your given name(s) (as shown on passport)', '', 20, 'Example: John')}
        {renderInput(2, 'Your date of birth: (YYYY/MM/DD)', '', 10, 'Example: 1985/01/01')}
      </div>
    </div>
  );
}

export default EducationInfo;
import React, { useState } from 'react';
import './sponsorship-child.scss';
import { getInputIcon } from '../iconInputs/iconInputs.js';
import { getInputIcon30 } from '../iconInputs/iconInputs.js';

const SponsorshipChild = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    input9: '',
    input10: '',
    input11: '',
    input12: '',
    input13: '',
    input14: '',
    input15: '',
    input16: '',
    input17: '',
    input18: '',
    input19: '',
    input20: '',
    input21: '',
    input22: '',
    input23: '',
    input24: '',
    input25: '',
    input26: '',
    input27: '',
    input28: '',
    input29: '',
    input30: '',
    input31: '',
    input32: '',
    input33: '',
    input34: '',
    input35: '',
    input36: '',
    input37: '',
    input38: '',
    input39: '',
    input40: '',
    input41: '',
    input42: '',
    input43: '',
    input44: '',
    input45: '',
    input46: '',
    input47: '',
    input48: '',
    input49: '',
    input50: '',
  });

  const handleInputChange = (event, inputName) => {
    setInputValues({
      ...inputValues,
      [inputName]: event.target.value,
    });
  };

  return (
    <div>
      <div className="legend-container">
        <div className="legend">
          <div className="legend-item">
            <div className="input-icon">
              <i className="fas fa-exclamation-circle" style={{ color: '#7D85C7' }}></i>
            </div>
            <span>Mandatory</span>
          </div>
          <div className="legend-item">
            <div className="input-icon">
              <i className="fas fa-times-circle" style={{ color: '#7D85C7' }}></i>
            </div>
            <span>Incomplete</span>
          </div>
          <div className="legend-item">
            <div className="input-icon">
              <i className="fas fa-check-circle" style={{ color: '#7D85C7' }}></i>
            </div>
            <span>Complete</span>
          </div>
        </div>
      </div>
      <h1 className="plzcen">Sponsorship Child</h1>
      <br />
      <div className="containerfr">
        <div className="input-row">
          <div className="input-container">
            <div className="input-icon">
              {getInputIcon(inputValues.input1, '#7D85C7')}
            </div>
            <input
              type="text"
              name="input1"
              placeholder="Input 1"
              value={inputValues.input1}
              onChange={(event) => handleInputChange(event, 'input1')}
            />
          </div>
          <div className="input-container">
            <div className="input-icon">
              {getInputIcon(inputValues.input2, '#7D85C7')}
            </div>
            <input
              type="text"
              name="input2"
              placeholder="Input 2"
              value={inputValues.input2}
              onChange={(event) => handleInputChange(event, 'input2')}
            />
          </div>
          <div className="input-container">
            <div className="input-icon">
              {getInputIcon(inputValues.input3, '#7D85C7')}
            </div>
            <input
              type="text"
              name="input3"
              placeholder="Input 3"
              value={inputValues.input3}
              onChange={(event) => handleInputChange(event, 'input3')}
            />
          </div>
        </div>
        <div className="input-row">
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon30(inputValues.input4, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input4"
      placeholder="Input 4"
      value={inputValues.input4}
      onChange={(event) => handleInputChange(event, 'input4')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input5, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input5"
      placeholder="Input 5"
      value={inputValues.input5}
      onChange={(event) => handleInputChange(event, 'input5')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input6, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input6"
      placeholder="Input 6"
      value={inputValues.input6}
      onChange={(event) => handleInputChange(event, 'input6')}
    />
  </div>
</div>

<div className="input-row">
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input7, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input7"
      placeholder="Input 7"
      value={inputValues.input7}
      onChange={(event) => handleInputChange(event, 'input7')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input8, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input8"
      placeholder="Input 8"
      value={inputValues.input8}
      onChange={(event) => handleInputChange(event, 'input8')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input9, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input9"
      placeholder="Input 9"
      value={inputValues.input9}
      onChange={(event) => handleInputChange(event, 'input9')}
    />
  </div>
</div>
<div className="input-row">
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input10, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input10"
      placeholder="Input 10"
      value={inputValues.input10}
      onChange={(event) => handleInputChange(event, 'input10')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input11, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input11"
      placeholder="Input 11"
      value={inputValues.input11}
      onChange={(event) => handleInputChange(event, 'input11')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input12, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input12"
      placeholder="Input 12"
      value={inputValues.input12}
      onChange={(event) => handleInputChange(event, 'input12')}
    />
  </div>
</div>

<div className="input-row">
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input13, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input13"
      placeholder="Input 13"
      value={inputValues.input13}
      onChange={(event) => handleInputChange(event, 'input13')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input14, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input14"
      placeholder="Input 14"
      value={inputValues.input14}
      onChange={(event) => handleInputChange(event, 'input14')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input15, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input15"
      placeholder="Input 15"
      value={inputValues.input15}
      onChange={(event) => handleInputChange(event, 'input15')}
    />
  </div>
</div>
<div className="input-row">
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input16, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input16"
      placeholder="Input 16"
      value={inputValues.input16}
      onChange={(event) => handleInputChange(event, 'input16')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input17, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input17"
      placeholder="Input 17"
      value={inputValues.input17}
      onChange={(event) => handleInputChange(event, 'input17')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input18, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input18"
      placeholder="Input 18"
      value={inputValues.input18}
      onChange={(event) => handleInputChange(event, 'input18')}
    />
  </div>
</div>

<div className="input-row">
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input19, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input19"
      placeholder="Input 19"
      value={inputValues.input19}
      onChange={(event) => handleInputChange(event, 'input19')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input20, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input20"
      placeholder="Input 20"
      value={inputValues.input20}
      onChange={(event) => handleInputChange(event, 'input20')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input21, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input21"
      placeholder="Input 21"
      value={inputValues.input21}
      onChange={(event) => handleInputChange(event, 'input21')}
    />
  </div>
</div>
<div className="input-row">
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input21, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input21"
      placeholder="Input 21"
      value={inputValues.input21}
      onChange={(event) => handleInputChange(event, 'input21')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input22, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input22"
      placeholder="Input 22"
      value={inputValues.input22}
      onChange={(event) => handleInputChange(event, 'input22')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input23, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input23"
      placeholder="Input 23"
      value={inputValues.input23}
      onChange={(event) => handleInputChange(event, 'input23')}
    />
  </div>
</div>

<div className="input-row">
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input24, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input24"
      placeholder="Input 24"
      value={inputValues.input24}
      onChange={(event) => handleInputChange(event, 'input24')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input25, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input25"
      placeholder="Input 25"
      value={inputValues.input25}
      onChange={(event) => handleInputChange(event, 'input25')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input26, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input26"
      placeholder="Input 26"
      value={inputValues.input26}
      onChange={(event) => handleInputChange(event, 'input26')}
    />
  </div>
</div>
<div className="input-row">
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input27, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input27"
      placeholder="Input 27"
      value={inputValues.input27}
      onChange={(event) => handleInputChange(event, 'input27')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input28, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input28"
      placeholder="Input 28"
      value={inputValues.input28}
      onChange={(event) => handleInputChange(event, 'input28')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input29, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input29"
      placeholder="Input 29"
      value={inputValues.input29}
      onChange={(event) => handleInputChange(event, 'input29')}
    />
  </div>
</div>

<div className="input-row">
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input30, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input30"
      placeholder="Input 30"
      value={inputValues.input30}
      onChange={(event) => handleInputChange(event, 'input30')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input31, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input31"
      placeholder="Input 31"
      value={inputValues.input31}
      onChange={(event) => handleInputChange(event, 'input31')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input32, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input32"
      placeholder="Input 32"
      value={inputValues.input32}
      onChange={(event) => handleInputChange(event, 'input32')}
    />
  </div>
</div>
<div className="input-row">
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input33, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input33"
      placeholder="Input 33"
      value={inputValues.input33}
      onChange={(event) => handleInputChange(event, 'input33')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input34, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input34"
      placeholder="Input 34"
      value={inputValues.input34}
      onChange={(event) => handleInputChange(event, 'input34')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input35, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input35"
      placeholder="Input 35"
      value={inputValues.input35}
      onChange={(event) => handleInputChange(event, 'input35')}
    />
  </div>
</div>

<div className="input-row">
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input36, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input36"
      placeholder="Input 36"
      value={inputValues.input36}
      onChange={(event) => handleInputChange(event, 'input36')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input37, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input37"
      placeholder="Input 37"
      value={inputValues.input37}
      onChange={(event) => handleInputChange(event, 'input37')}
    />
  </div>
  <div className="input-container">
    <div className="input-icon">
      {getInputIcon(inputValues.input38, '#7D85C7')}
    </div>
    <input
      type="text"
      name="input38"
      placeholder="Input 38"
      value={inputValues.input38}
      onChange={(event) => handleInputChange(event, 'input38')}
    />
  </div>
</div>



        {/* Rest of your input rows */}
        <div className="plzcen">
          <button className="submit-buttonfr">Save</button>
        </div>
        
        <br />
      </div>
    </div>
  );
};

export default SponsorshipChild;

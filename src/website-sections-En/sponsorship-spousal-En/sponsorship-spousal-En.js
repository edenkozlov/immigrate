import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../../components/button/Button';
import Fade from 'react-reveal/Fade';
import ContainIt from '../containIt/containIt';

function SponsorshipSpousal() {

  //personal information
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');
  const [input4Value, setInput4Value] = useState('');
  const [input5Value, setInput5Value] = useState('');
  const [input6Value, setInput6Value] = useState('');
  const [input7Value, setInput7Value] = useState('');
  const [input8Value, setInput8Value] = useState('');
  const [input9Value, setInput9Value] = useState('');
  const [input10Value, setInput10Value] = useState('');
  const [input11Value, setInput11Value] = useState('');
  const [input12Value, setInput12Value] = useState('');
  const [input13Value, setInput13Value] = useState('');
  const [input14Value, setInput14Value] = useState('');
  const [input15Value, setInput15Value] = useState('');
  const [input16Value, setInput16Value] = useState('');
  const [input17Value, setInput17Value] = useState('');
  const [input18Value, setInput18Value] = useState('');
  const [input19Value, setInput19Value] = useState('');
  const [input20Value, setInput20Value] = useState('');
  const [input21Value, setInput21Value] = useState('');


  //language details
  const [languageInput1, setLanguageInput1] = useState('');
  const [languageInput2, setLanguageInput2] = useState('');
  const [languageInput3, setLanguageInput3] = useState('');
  const [languageInput4, setLanguageInput4] = useState('');
  const [languageInput5, setLanguageInput5] = useState('');
  const [languageInput6, setLanguageInput6] = useState('');
  const [languageInput7, setLanguageInput7] = useState('');
  const [languageInput8, setLanguageInput8] = useState('');
  const [languageInput9, setLanguageInput9] = useState('');
  const [languageInput10, setLanguageInput10] = useState('');
  const [languageInput11, setLanguageInput11] = useState('');
  const [languageInput12, setLanguageInput12] = useState('');
  
  const [progress, setProgress] = useState(0);

  const openModal = () => {
    setModalIsOpen(true);
  };

  //const openLanguageModal = () => {
  //  setLanguageModalIsOpen(true);
  //};

  //const closeLanguageModal = () => {
  //  setLanguageModalIsOpen(false);
  //};

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange1 = (event) => {
    setInput1Value(event.target.value);
    updateProgress();
  };

  const handleInputChange2 = (event) => {
    setInput2Value(event.target.value);
    updateProgress();
  };

  const handleInputChange3 = (event) => {
    setInput3Value(event.target.value);
    updateProgress();
  };

  const handleInputChange4 = (event) => {
    const value = event.target.value;
    setInput4Value(value);
    updateProgress();
  
    if (value === 'no') {
      setInput5Value('skipped');
      setInput6Value('skipped');
      setInput7Value('');
    } else if (value === 'yes') {
      setInput5Value('');
      setInput6Value('');
      setInput7Value('');
    } else {
      setInput5Value('');
      setInput6Value('');
      setInput7Value('');
    }
  };
  
  
  
  const handleInputChange5 = (event) => {
    setInput5Value(event.target.value);
    updateProgress();
  };

  const handleInputChange6 = (event) => {
    setInput6Value(event.target.value);
    updateProgress();
  };

  const handleInputChange7 = (event) => {
    setInput7Value(event.target.value);
    updateProgress();
  };

  const handleInputChange8 = (event) => {
    setInput8Value(event.target.value);
    updateProgress();
  };

  const handleInputChange9 = (event) => {
    setInput9Value(event.target.value);
    updateProgress();
  };

  const handleInputChange10 = (event) => {
    setInput10Value(event.target.value);
    updateProgress();
  };

  const handleInputChange11 = (event) => {
    setInput11Value(event.target.value);
    updateProgress();
  };
  const handleInputChange12 = (event) => {
    setInput12Value(event.target.value);
    updateProgress();
  };

  const handleInputChange13 = (event) => {
    setInput13Value(event.target.value);
    updateProgress();
  };

  const handleInputChange14 = (event) => {
    setInput14Value(event.target.value);
    updateProgress();
  };

  const handleInputChange15 = (event) => {
    setInput15Value(event.target.value);
    updateProgress();
  };

  const handleInputChange16 = (event) => {
    setInput16Value(event.target.value);
    updateProgress();
  };
  
  const handleInputChange17 = (event) => {
    setInput17Value(event.target.value);
    updateProgress();
  };

  const handleInputChange18 = (event) => {
    setInput18Value(event.target.value);
    updateProgress();
  };
  
  const handleInputChange19 = (event) => {
    setInput19Value(event.target.value);
    updateProgress();
  };

  const handleInputChange20 = (event) => {
    setInput20Value(event.target.value);
    updateProgress();
  };

  const handleInputChange21 = (event) => {
    setInput21Value(event.target.value);
    updateProgress();
  };


  const handleLanguageInput1 = (event) => {
    setInput1Value(event.target.value);
    updateProgress();
  };
  
  const handleLanguageInput2 = (event) => {
    setInput2Value(event.target.value);
    updateProgress();
  };
  
  const handleLanguageInput3 = (event) => {
    setInput3Value(event.target.value);
    updateProgress();
  };
  
  const handleLanguageInput4 = (event) => {
    setInput4Value(event.target.value);
    updateProgress();
  };
  
  const handleLanguageInput5 = (event) => {
    setInput5Value(event.target.value);
    updateProgress();
  };
  
  const handleLanguageInput6 = (event) => {
    setInput6Value(event.target.value);
    updateProgress();
  };
  
  const handleLanguageInput7 = (event) => {
    setInput7Value(event.target.value);
    updateProgress();
  };
  
  const handleLanguageInput8 = (event) => {
    setInput8Value(event.target.value);
    updateProgress();
  };
  
  const handleLanguageInput9 = (event) => {
    setInput9Value(event.target.value);
    updateProgress();
  };
  
  const handleLanguageInput10 = (event) => {
    setInput10Value(event.target.value);
    updateProgress();
  };
  
  const handleLanguageInput11 = (event) => {
    setInput11Value(event.target.value);
    updateProgress();
  };
  
  const handleLanguageInput12 = (event) => {
    setInput12Value(event.target.value);
    updateProgress();
  };
  


  //personal information 
  const updateProgress = () => {
    const filledInputs =
      (input1Value ? 1 : 0) +
      (input2Value ? 1 : 0) +
      (input3Value ? 1 : 0) +
      (input4Value ? 1 : 0) +
      (input5Value ? 1 : 0) +
      (input6Value ? 1 : 0) +
      (input7Value ? 1 : 0) +
      (input8Value ? 1 : 0) +
      (input9Value ? 1 : 0) +
      (input10Value ? 1 : 0) +
      (input11Value ? 1 : 0) +
      (input12Value ? 1 : 0) +
      (input13Value ? 1 : 0) +
      (input14Value ? 1 : 0) +
      (input15Value ? 1 : 0) +
      (input16Value ? 1 : 0) +
      (input17Value ? 1 : 0) +
      (input18Value ? 1 : 0) +
      (input19Value ? 1 : 0) +
      (input20Value ? 1 : 0) +
      (input21Value ? 1 : 0);
    const progressValue = (filledInputs / 21) * 100; 
    setProgress(progressValue);
  };


  /*
  //language details
  const updateLanguageProgress = () => {
    const filledInputs =
      (languageInput1 ? 1 : 0) +
      (languageInput2 ? 1 : 0) +
      (languageInput3 ? 1 : 0) +
      (languageInput4 ? 1 : 0) +
      (languageInput5 ? 1 : 0) +
      (languageInput6 ? 1 : 0) +
      (languageInput7 ? 1 : 0) +
      (languageInput8 ? 1 : 0) +
      (languageInput9 ? 1 : 0) +
      (languageInput10 ? 1 : 0) +
      (languageInput11 ? 1 : 0) +
      (languageInput12 ? 1 : 0);
    const progressValue = (filledInputs / 12) * 100;
    setLanguageProgress(progressValue);
  };
  */
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Input 1:', input1Value);
    console.log('Input 2:', input2Value);
    closeModal();
  };

  
  //personal information

  
  const renderInput = (index, label, value, onChange, maxLength, placeholder) => {
    if (index <= progress / 4.76) {
      return (
        <Fade bottom delay={index * 100}>
          <label>
            {label}:
            <input
              type="text"
              value={value}
              onChange={onChange}
              maxLength={maxLength}
              placeholder={placeholder}
            />
          </label>
        </Fade>
      );
    } else if (input4Value === 'yes') {
      if (index === 5) {
        return (
          <Fade bottom delay={index * 100}>
            <label>
              {label}:
              <input
                type="text"
                value={value}
                onChange={onChange}
                maxLength={maxLength}
                placeholder={placeholder}
              />
            </label>
          </Fade>
        );
      } else {
        return null;
      }
    } else if (input4Value === 'no') {
      if (index === 5 || index === 6) {
        return (
          <Fade bottom delay={index * 100}>
            <label>
              {label}:
              <input
                type="text"
                value={value}
                onChange={onChange}
                maxLength={maxLength}
                placeholder={placeholder}
              />
            </label>
          </Fade>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  
  
  
  
  
  
  
  
  
  
  const renderDropdown = (index, label, value, onChange, options, placeholder) => {
    if (index <= progress / 4.76) {
      return (
        <Fade bottom delay={index * 100}>
          <label>
            {label}:
            <select
              value={value}
              onChange={onChange}
              style={{
                margin: '10px',
                padding: '8px',
                border: '2px solid #7D85C7',
                borderRadius: '5px',
                display: 'block',
                fontSize: '16px',
                width: '320px',
                color: 'black',
                backgroundColor: 'white',
              }}
            >
              <option value="" disabled hidden>
                {placeholder}
              </option>
              {options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </Fade>
      );
    } else if (input4Value === 'no') {
      if (index === 5 || index === 6) {
        return (
          <Fade bottom delay={index * 100}>
            <label>
              {label}:
              <input
                type="text"
                value={value}
                onChange={onChange}
                
                placeholder={placeholder}
              />
            </label>
          </Fade>
        );
      }}
    else {
      return null;
    }
  };
  




  /*

  //language detials
  const renderLanguageInput = (index, label, value, onChange, maxLength, placeholder) => {
    if (index <= languageProgress / 8) {
      return (
        <Fade bottom delay={index * 100}>
          <label>
            {label}:
            <input
              type="text"
              value={value}
              onChange={onChange}
              maxLength={maxLength}
              placeholder={placeholder}
            />
          </label>
        </Fade>
      );
    } else {
      return null;
    }
  };

  */



 

return (
  <div>
  
  <div>

  

    <ContainIt title="Sponsorship: Spousal">
      
  <div className='sideBySide'>
    <Button
      text={
        <>
          <i className="fas fa-user"></i> Personal Information{' '}
          {progress === 100 && (
            <i className="fas fa-check-circle"></i>
          )}
        </>
      }
      onClick={openModal}
    />
    <Button
      text={<><i className="fas fa-plane"></i> Travel History</>}
      onClick={openModal}
    />
    <Button
      text={<><i className="fas fa-users"></i> Family Information</>}
      onClick={openModal}
    />
    <Button
      text={<><i className="fas fa-passport"></i> Passport Information</>}
      onClick={openModal}
    />
    <Button
      text={<><i class="fas fa-upload"></i> Document Upload</>}
      onClick={openModal}
    />
  </div>

  <div className='sideBySide'>
    <Button
      text={<><i className="fas fa-globe-americas"></i> Language Details</>}
      onClick={openModal}
    />
    <Button
      text={<><i className="fas fa-phone"></i> Contact Information</>}
      onClick={openModal}
    />
    <Button
      text={<><i className="fas fa-flag"></i> National Identity</>}
      onClick={openModal}
    />
    <Button
      text={<><i className="fas fa-graduation-cap"></i> Education Details</>}
      onClick={openModal}
    />
    <Button
      text={<><i className="fas fa-hammer"></i> Occupation Details</>}
      onClick={openModal}
    />
  </div>
</ContainIt>


    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
    <div className="modal-header">
    <h2>Personal Information</h2>
    <div className="modal-buttons">
      <button className="modal-submit" type="submit">
        Submit
      </button>
      <button className="modal-close" onClick={closeModal}>
        Close Modal
      </button>
    </div>
    
  </div>
  
      <progress value={progress} max="100" style={{ width: '100%'}}/>
      <form onSubmit={handleSubmit}>
        
        
      <style>
  {`
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .modal-buttons {
    display: flex;
    align-items: center;
  }

  .modal-close {
    margin-left: 10px;
  }

  .modal-submit {
    
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
  }

  .myrowfr {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-bottom: 10px;
  }

  .myrowfr input {
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    .myrowfr {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 10px;
      margin-bottom: 10px;
    }
  }

  `}
</style>

<div className="myrowfr">
  {renderInput(
    0,
    'Your last name(s) (as shown on passport)',
    input1Value,
    handleInputChange1,
    20,
    'Example: Smith'
  )}
  {renderInput(
    1,
    'Your given name(s) (as shown on passport)',
    input2Value,
    handleInputChange2,
    20,
    'Example: John'
  )}
  {renderInput(
    2,
    'Your date of birth: (YYYY/MM/DD)',
    input3Value,
    handleInputChange3,
    10,
    'Example: 1985/01/01'
  )}
</div>
<div className="myrowfr">
{renderInput(
    3,
    'Have you ever used any other name(s)? (yes/no)',
    input4Value,
    handleInputChange4,
    3,
    'Example: (yes)'
  )}
  {renderInput(
    4,
    'if yes - The family name(s), maiden name, alias, etc.',
    input5Value,
    handleInputChange5,
    20,
    'Example: smithy'
  )}
   {renderInput(
    5,
    'if yes - The Given name(s), maiden name, alias, etc.',
    input6Value,
    handleInputChange6,
    20,
    'Example: johnny'
  )}
</div>
<div className="myrowfr">
{renderInput(
    6,
    'Your UCI number (no UCI num? - type "xx")',
    input7Value,
    handleInputChange7,
    10,
    'Example: 1234567890'
  )}
  {renderDropdown(
  7,
  'Sex',
  input8Value,
  handleInputChange8,
  ['Male', 'Female', 'Unknown', 'Another Gender'],
  'Example: Select an option'
)}
  {renderDropdown(
  8,
  'Eye colour',
  input9Value,
  handleInputChange9,
  ['Black', 'Blue', 'Brown', 'Green', 'Grey', 'Hazel', 'Other', 'Pink', 'Sea Green'],
  'Example: Select an option'
)}
</div>
<div className="myrowfr">
{renderInput(
    9,
    'Your height in CM',
    input10Value,
    handleInputChange10,
    4,
    'Example: 156'
  )}
  {renderDropdown(
  10,
  'Country of birth?',
  input11Value,
  handleInputChange11,
  ['Iraq', 'Iraq 2', 'Iraq 3', 'Iraq4'],
  'Example: Select an option'
)}
  {renderInput(
    11,
    'Place of birth',
    input12Value,
    handleInputChange12,
    10,
    'Example: The motel'
  )}
</div>
<div className="myrowfr">
{renderDropdown(
  12,
  'Country of citizenship (1)',
  input13Value,
  handleInputChange13,
  ['one', 'two', 'three', 'four'],
  'Example: Select an option'
)}
{renderDropdown(
  13,
  'Country of citizenship (2)',
  input14Value,
  handleInputChange14,
  ['none','one', 'two', 'three', 'four'],
  'Example: Select an option'
)}
{renderDropdown(
  14,
  'Country of citizenship (2)',
  input15Value,
  handleInputChange15,
  ['one', 'two', 'three', 'four'],
  'Example: Select an option'
)}
</div>
<div className="myrowfr">
{renderDropdown(
  15,
  'Status of citizenship',
  input16Value,
  handleInputChange16,
  ['Citizen', 'Permanent Resident', 'Visitor', 'Worker'],
  'Example: Select an option'
)}
{renderDropdown(
  16,
  'input',
  input17Value,
  handleInputChange17,
  ['none','one', 'two', 'three', 'four'],
  'Example: Select an option'
)}
{renderDropdown(
  17,
  'input',
  input18Value,
  handleInputChange18,
  ['none','one', 'two', 'three', 'four'],
  'Example: Select an option'
)}
</div>
<div className="myrowfr">
{renderDropdown(
  18,
  'Status of citizenship',
  input19Value,
  handleInputChange19,
  ['Citizen', 'Permanent Resident', 'Visitor', 'Worker'],
  'Example: Select an option'
)}
{renderDropdown(
  19,
  'input',
  input20Value,
  handleInputChange20,
  ['none','one', 'two', 'three', 'four'],
  'Example: Select an option'
)}
{renderDropdown(
  20,
  'input',
  input21Value,
  handleInputChange21,
  ['none','one', 'two', 'three', 'four'],
  'Example: Select an option'
)}
</div>

          
        </form>
        
      </Modal>
      
    </div>
    </div>
  );
}

export default SponsorshipSpousal;


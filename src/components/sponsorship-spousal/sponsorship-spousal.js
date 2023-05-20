import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../button/Button';
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
    setInput4Value(event.target.value);
    updateProgress();
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
      (input13Value ? 1 : 0);
    const progressValue = (filledInputs / 13) * 100; // Updated to divide by 12
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
    if (index <= progress / 7) {
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
  const renderDropdown = (index, label, value, onChange, options, placeholder) => {
    if (index <= progress / 7) {
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
    } else {
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
    'Your Last Name (as shown on passport)',
    input1Value,
    handleInputChange1,
    20,
    'Example: Doe'
  )}
  {renderInput(
    1,
    'Your First Name (as shown on passport)',
    input2Value,
    handleInputChange2,
    20,
    'Example: John'
  )}
  {renderInput(
    2,
    'Your Date Of Birth: (YYYY/MM/DD)',
    input3Value,
    handleInputChange3,
    10,
    'Example: 1985/01/01'
  )}
</div>
<div className="myrowfr">
{renderInput(
    3,
    'Have you ever use any other name? (y/n)',
    input4Value,
    handleInputChange4,
    1,
    'Example: (y)'
  )}
  {renderInput(4, 'Input 5', input5Value, handleInputChange5)}
  {renderInput(5, 'Input 6', input6Value, handleInputChange6)}
</div>
<div className="myrowfr">
  {renderInput(6, 'Input 7', input7Value, handleInputChange7)}
  {renderInput(7, 'Input 8', input8Value, handleInputChange8)}
  {renderInput(8, 'Input 9', input9Value, handleInputChange9)}
</div>
<div className="myrowfr">
  {renderInput(9, 'Input 10', input10Value, handleInputChange10)}
  {renderInput(10, 'Input 11', input11Value, handleInputChange11)}
  {renderInput(11, 'Input 12', input12Value, handleInputChange12)}
</div>
<div className="myrowfr">
{renderDropdown(
  13,
  'where are you planning to live in canada?',
  input13Value,
  handleInputChange13,
  ['quebec', 'ignore this input', 'toronto', 'the moon'],
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


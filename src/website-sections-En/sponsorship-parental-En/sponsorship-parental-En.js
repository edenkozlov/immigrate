import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../../components/button/Button';
import Fade from 'react-reveal/Fade';
import ContainIt from '../containIt/containIt';

function SponsorshipParental() {
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
  const [progress, setProgress] = useState(0);

  const openModal = () => {
    setModalIsOpen(true);
  };

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
      (input12Value ? 1 : 0);
    const progressValue = (filledInputs / 12) * 100; // Updated to divide by 12
    setProgress(progressValue);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Input 1:', input1Value);
    console.log('Input 2:', input2Value);
    closeModal();
  };

  const renderInput = (index, label, value, onChange, maxLength, placeholder) => {
    if (index <= progress / 8) {
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
 

return (

  
  <div >
    
  <div>

  <div class="mycentering"></div>

    <ContainIt title="Sponsorship: Parental">

      
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
  
      <progress value={progress} max="100" style={{ width: '100%'}} />
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
    'Your Date Of Birth: (YYYY/MM/DD)',
    input1Value,
    handleInputChange1,
    10,
    'Example: 1985/01/01'
  )}
  {renderInput(1, 'Input 2', input2Value, handleInputChange2)}
  {renderInput(2, 'Input 3', input3Value, handleInputChange3)}
</div>
<div className="myrowfr">
  {renderInput(3, 'Input 4', input4Value, handleInputChange4)}
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

          
        </form>
        
      </Modal>
    </div>
    </div>
  );
}

export default SponsorshipParental;


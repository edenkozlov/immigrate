import React, { useState } from 'react';
import './refCode.scss';
import { useNavigate } from 'react-router-dom';

const RefCode = () => {
  const [referralCode, setReferralCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setReferralCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the referral code
    if (referralCode === '') {
      setErrorMessage('Referral code cannot be empty.');
    } else {
      // Perform further logic with the referral code, e.g., API call

      // Clear the input field and error message
      setReferralCode('');
      setErrorMessage('');

      // Navigate to a new page with the referral code as a URL parameter
      navigate(`/Signin/RefCode/new-page/${referralCode}`);
    }
  };

  return (
    <div className="container">
      <div className="referral-code-page">
        <h1>Referral Code</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              className="inputfrfr"
              type="text"
              value={referralCode}
              onChange={handleInputChange}
              placeholder="Enter your referral code"
              maxLength={6}
            />
            <button className="buttonfrfr" type="submit">Submit</button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default RefCode;

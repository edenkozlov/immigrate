import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.scss";

function Signin() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleOptionDeselect = () => {
    setSelectedOption(null);
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h3 className="signin-title">Identify Yourself:</h3>
        <div className="signin-buttons">
          <Link to="/Signin/RefCode">
            <button
              className="signin-button"
              onMouseEnter={() =>
                handleOptionSelect(
                  "As a client, you should have receinved a referral code from your Rep, if you have, this is the correct option for you."
                )
              }
              onMouseLeave={() => handleOptionDeselect()}
            >
              I am a client
            </button>
          </Link>
          <Link to="/Signin/signedin">
            <button
              className="signin-button"
              onMouseEnter={() =>
                handleOptionSelect(
                  "As a representative, you have access to unlimited cases and tracking your clients."
                )
              }
              onMouseLeave={() => handleOptionDeselect()}
            >
              I am a representative
            </button>
          </Link>
          <Link to="/Signin/workAlone">
            <button
              className="signin-button"
              onMouseEnter={() =>
                handleOptionSelect(
                  "If you are not a rep. or if you do not have a referral code this option will allow you to make a one time payment to try or use our services for one case!"
                )
              }
              onMouseLeave={() => handleOptionDeselect()}
            >
              I'm working alone
            </button>
          </Link>
        </div>
        <p className="signin-description">{selectedOption}</p>
      </div>
    </div>
  );
}

export default Signin;

import React, { useState } from 'react';
import './repSignIn.scss';
import { Link } from 'react-router-dom';

const RepSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
  };

  const handleForgotPassword = () => {
    // TODO
  };

  return (
    <div className="unique-container">
      <div className="rep-signin-container">
        <h1 className="rep-signin-title">Sign In</h1>
        <br />
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <label className="rep-signin-label">
            Email:
            <input className="rep-signin-input" type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label className="rep-signin-label">
            Password:
            <input className="rep-signin-input" type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <Link to="/Signin/signedin">
          <button className="rep-signin-button" type="submit">Sign In</button>
          </Link>
        </form>
        <button className="rep-signin-button3" type="submit">Forgot Password</button>
        <button className="rep-signin-button4" type="submit">Support</button>
        <button className="rep-signin-button4" type="submit">Sign Up</button>
      </div>
    </div>
  );
};

export default RepSignIn;

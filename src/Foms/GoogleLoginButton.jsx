import React from 'react';
import './GoogleLoginButton.css';
import googleLogo from '../assets/img_google.svg';


const GoogleLoginButton = () => {
  return (
    <div className="google-login-button-container">
      <button className="google-login-button">
        <img src={googleLogo} alt="Google Logo" className="google-logo" />
        <div className="button-text">Entrar com o google</div>
      </button>
    </div>
  );
};

export default GoogleLoginButton;

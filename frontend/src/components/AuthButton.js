import React, { useState, useEffect } from 'react';
import AuthPopup from './AuthPopup';
import './AuthButton.css';

const AuthButton = ({ user, onLogout, onLogin }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="auth-button-container">
      {user ? (
        <div className="user-info">
          <img src={user.avatarUrl} alt="avatar" className="user-avatar" />
          <span className="user-name">{user.fullName || user.email}</span>
          <button className="logout-btn" onClick={onLogout}>Đăng xuất</button>
        </div>
      ) : (
        <button className="login-btn" onClick={handleButtonClick}>
          Đăng nhập / Đăng ký
        </button>
      )}
      {showPopup && <AuthPopup onClose={handleClose} onLogin={onLogin} />}
    </div>
  );
};

export default AuthButton;

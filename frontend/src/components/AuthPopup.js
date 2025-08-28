import React, { useState } from 'react';
import './AuthPopup.css';

const AuthPopup = ({ onClose, onLogin }) => {
  const [tab, setTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  // Google Sign-In handler (placeholder)
  const handleGoogleSignIn = () => {
    // TODO: Integrate Google Identity Services
    alert('Google Sign-In chưa được tích hợp backend!');
    // onLogin({ fullName: 'Google User', email: 'google@example.com', avatarUrl: 'https://www.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tab === 'login') {
      // TODO: Call backend login API
      onLogin({ fullName, email, avatarUrl: '' });
      onClose();
    } else {
      // TODO: Call backend register API
      onLogin({ fullName, email, avatarUrl: '' });
      onClose();
    }
  };

  return (
    <div className="auth-popup-overlay" onClick={onClose}>
      <div className="auth-popup" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="auth-tabs">
          <button className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>Đăng nhập</button>
          <button className={tab === 'register' ? 'active' : ''} onClick={() => setTab('register')}>Đăng ký</button>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          {tab === 'register' && (
            <input type="text" placeholder="Họ tên" value={fullName} onChange={e => setFullName(e.target.value)} required />
          )}
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit" className="submit-btn">{tab === 'login' ? 'Đăng nhập' : 'Đăng ký'}</button>
        </form>
        <div className="divider">Hoặc</div>
        <button className="google-btn" onClick={handleGoogleSignIn}>
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" /> Đăng nhập với Google
        </button>
      </div>
    </div>
  );
};

export default AuthPopup;

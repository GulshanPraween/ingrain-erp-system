import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight, FaGoogle, FaGithub, FaCheckCircle, FaTimes } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('success');
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const navigate = useNavigate();

  const showNotification = (message, type = 'success') => {
    setPopupMessage(message);
    setPopupType(type);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email.trim()) {
      showNotification('Please enter your email address', 'error');
      return;
    }
    
    if (!formData.password) {
      showNotification('Please enter your password', 'error');
      return;
    }
    
    showNotification('Login successful! Redirecting...', 'success');
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at 20% 50%, #0a0a1a 0%, #0f0f2a 50%, #050510 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 20px',
      position: 'relative'
    }}>
      {/* Popup Notification */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          animation: 'slideIn 0.3s ease'
        }}>
          <div style={{
            background: popupType === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)',
            borderRadius: '1rem',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.2)',
            minWidth: '300px'
          }}>
            {popupType === 'success' ? (
              <FaCheckCircle style={{ fontSize: '1.5rem', color: 'white' }} />
            ) : (
              <FaTimes style={{ fontSize: '1.5rem', color: 'white' }} />
            )}
            <div style={{ flex: 1 }}>
              <p style={{ color: 'white', margin: 0, fontWeight: '500' }}>{popupMessage}</p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      <div style={{
        maxWidth: '480px',
        width: '100%',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        borderRadius: '2rem',
        padding: '3rem',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '70px',
            height: '70px',
            background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
            borderRadius: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem'
          }}>
            <span style={{ fontSize: '2.5rem' }}>🔐</span>
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '0.5rem',
            color: 'white',
            letterSpacing: '-0.5px'
          }}>
            Welcome Back!
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>Sign in to continue to Ingrain AI</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <FaEnvelope style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '1.1rem'
              }} />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="hello@ingrain.ai"
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3rem',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '1rem',
                  color: 'white',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <FaLock style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '1.1rem'
              }} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3rem',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '1rem',
                  color: 'white',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  fontSize: '1.1rem'
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>
              <input type="checkbox" checked={formData.remember} onChange={(e) => setFormData({...formData, remember: e.target.checked})} style={{ width: '1rem', height: '1rem', cursor: 'pointer' }} />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" style={{ color: '#a855f7', textDecoration: 'none', fontSize: '0.9rem' }}>
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: 'none',
              borderRadius: '1rem',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s'
            }}
          >
            Sign In <FaArrowRight />
          </button>
        </form>

        <div style={{ margin: '2rem 0', position: 'relative', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ background: 'rgba(10,10,26,0.9)', padding: '0 1rem', position: 'relative', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Or continue with</span>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button style={{ flex: 1, padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '1rem', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <FaGoogle /> Google
          </button>
          <button style={{ flex: 1, padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '1rem', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <FaGithub /> GitHub
          </button>
        </div>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#a855f7', textDecoration: 'none', fontWeight: '600' }}>Sign Up</Link>
        </p>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        input::placeholder {
          color: rgba(255,255,255,0.4);
        }
        
        @media (max-width: 600px) {
          div[style*="padding: 3rem"] {
            padding: 2rem !important;
          }
          
          h1 {
            font-size: 2rem !important;
          }
          
          button[style*="gap: 1rem"] {
            flex-wrap: wrap;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="padding: 3rem"] {
            padding: 1.5rem !important;
          }
          
          .social-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
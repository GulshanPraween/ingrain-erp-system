import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight, FaGoogle, FaGithub, FaCheckCircle, FaTimes } from 'react-icons/fa';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('success');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false
  });
  const navigate = useNavigate();

  const showNotification = (message, type = 'success') => {
    setPopupMessage(message);
    setPopupType(type);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      showNotification('Please enter your full name', 'error');
      return;
    }
    
    if (!formData.email.trim()) {
      showNotification('Please enter your email address', 'error');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    if (!formData.password) {
      showNotification('Please enter a password', 'error');
      return;
    }
    
    if (formData.password.length < 6) {
      showNotification('Password must be at least 6 characters', 'error');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      showNotification('Passwords do not match!', 'error');
      return;
    }
    
    if (!formData.agree) {
      showNotification('Please agree to the Terms of Service and Privacy Policy', 'error');
      return;
    }
    
    showNotification(`Welcome ${formData.name}! Your account has been created successfully.`, 'success');
    
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agree: false
    });
    
    setTimeout(() => navigate('/login'), 2000);
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
            {popupType === 'success' ? <FaCheckCircle style={{ fontSize: '1.5rem', color: 'white' }} /> : <FaTimes style={{ fontSize: '1.5rem', color: 'white' }} />}
            <div style={{ flex: 1 }}>
              <p style={{ color: 'white', margin: 0, fontWeight: '500' }}>{popupMessage}</p>
            </div>
            <button onClick={() => setShowPopup(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><FaTimes /></button>
          </div>
        </div>
      )}

      <div style={{
        maxWidth: '520px',
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
            <span style={{ fontSize: '2.5rem' }}>🚀</span>
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '0.5rem',
            color: 'white',
            letterSpacing: '-0.5px'
          }}>Create Account</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>Join thousands of businesses using Ingrain AI</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>Full Name *</label>
            <div style={{ position: 'relative' }}>
              <FaUser style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }} />
              <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="John Doe" style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '1rem', color: 'white', fontSize: '1rem', boxSizing: 'border-box' }} required />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>Email Address *</label>
            <div style={{ position: 'relative' }}>
              <FaEnvelope style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }} />
              <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="hello@ingrain.ai" style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '1rem', color: 'white', fontSize: '1rem', boxSizing: 'border-box' }} required />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>Password *</label>
            <div style={{ position: 'relative' }}>
              <FaLock style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }} />
              <input type={showPassword ? 'text' : 'password'} value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} placeholder="•••••••• (min. 6 characters)" style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '1rem', color: 'white', fontSize: '1rem', boxSizing: 'border-box' }} required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>Confirm Password *</label>
            <div style={{ position: 'relative' }}>
              <FaLock style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }} />
              <input type={showConfirmPassword ? 'text' : 'password'} value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} placeholder="••••••••" style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '1rem', color: 'white', fontSize: '1rem', boxSizing: 'border-box' }} required />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</button>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', flexWrap: 'wrap' }}>
              <input type="checkbox" checked={formData.agree} onChange={(e) => setFormData({...formData, agree: e.target.checked})} style={{ width: '1rem', height: '1rem', cursor: 'pointer' }} required />
              I agree to the <Link to="/terms" style={{ color: '#a855f7', textDecoration: 'none' }}>Terms of Service</Link> and <Link to="/privacy" style={{ color: '#a855f7', textDecoration: 'none' }}>Privacy Policy</Link>
            </label>
          </div>

          <button type="submit" style={{ width: '100%', padding: '1rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', border: 'none', borderRadius: '1rem', color: 'white', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>Create Account <FaArrowRight /></button>
        </form>

        <div style={{ margin: '2rem 0', position: 'relative', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ background: 'rgba(10,10,26,0.9)', padding: '0 1rem', position: 'relative', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Or sign up with</span>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button style={{ flex: 1, padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '1rem', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><FaGoogle /> Google</button>
          <button style={{ flex: 1, padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '1rem', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><FaGithub /> GitHub</button>
        </div>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Already have an account? <Link to="/login" style={{ color: '#a855f7', textDecoration: 'none', fontWeight: '600' }}>Sign In</Link></p>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        input::placeholder { color: rgba(255,255,255,0.4); }
        
        @media (max-width: 600px) {
          div[style*="padding: 3rem"] { padding: 2rem !important; }
          h1 { font-size: 2rem !important; }
        }
        
        @media (max-width: 480px) {
          div[style*="padding: 3rem"] { padding: 1.5rem !important; }
          div[style*="display: flex"][style*="gap: 1rem"] { flex-direction: column; }
        }
      `}</style>
    </div>
  );
};

export default Signup;
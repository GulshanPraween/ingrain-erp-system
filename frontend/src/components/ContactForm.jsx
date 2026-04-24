import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle, FaStar, FaRocket, FaMagic, FaCircle, FaDotCircle } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const formRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePos({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    { icon: <FaPhone />, title: 'Phone', details: '+1 (234) 567-8900', sub: 'Mon-Fri 9am-6pm', color: '#f97316', gradient: 'linear-gradient(135deg, #f97316, #ea580c)', delay: '0s' },
    { icon: <FaEnvelope />, title: 'Email', details: 'info@ingrain.ai', sub: 'support@ingrain.ai', color: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #059669)', delay: '0.1s' },
    { icon: <FaMapMarkerAlt />, title: 'Office', details: '123 Business Street', sub: 'Tech City, TC 12345', color: '#f97316', gradient: 'linear-gradient(135deg, #f97316, #ea580c)', delay: '0.2s' },
    { icon: <FaClock />, title: 'Hours', details: 'Monday - Friday', sub: '9:00 AM - 6:00 PM', color: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #059669)', delay: '0.3s' }
  ];

  return (
    <section style={{
      padding: '80px 20px 120px',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Responsive Media Query Styles */}
      <style>{`
        @media (max-width: 968px) {
          .contact-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .contact-section-padding {
            padding: 60px 20px 90px !important;
          }
        }
        @media (max-width: 640px) {
          .info-card-responsive {
            padding: 1rem !important;
          }
          .icon-box-responsive {
            width: 48px !important;
            height: 48px !important;
            font-size: 1.2rem !important;
          }
          .form-container-responsive {
            padding: 1.5rem !important;
          }
          .headline-orange {
            font-size: 1.8rem !important;
          }
        }
        @keyframes radialPulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
        }
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, -50px) scale(1.15); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 55px) scale(1.12); }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(45px, 40px) scale(1.1); }
        }
        @keyframes sparkleFloat {
          0% { transform: translateY(0) translateX(0) scale(0); opacity: 0; }
          15% { transform: translateY(-25px) translateX(20px) scale(1); opacity: 0.9; }
          70% { transform: translateY(-80px) translateX(50px) scale(0.8); opacity: 0.6; }
          100% { transform: translateY(-120px) translateX(70px) scale(0); opacity: 0; }
        }
        @keyframes formSparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 0.8; transform: scale(1.8); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-35px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgeGlow {
          0%, 100% { box-shadow: 0 8px 25px rgba(249,115,22,0.3); }
          50% { box-shadow: 0 15px 35px rgba(249,115,22,0.5); }
        }
        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rocketFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes planeFly {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        @keyframes checkPop {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes buttonShine {
          0% { left: -100%; }
          20% { left: 100%; }
          100% { left: 100%; }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>

      {/* Animated Radial Gradient Background - Orange/Green theme */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '120%',
        height: '120%',
        background: 'radial-gradient(circle at 30% 40%, rgba(249,115,22,0.03) 0%, rgba(16,185,129,0.02) 50%, transparent 80%)',
        pointerEvents: 'none',
        animation: 'radialPulse 8s ease-in-out infinite'
      }} />

      {/* Animated Connection Lines Diagram - Orange/Green */}
      <svg style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.25
      }}>
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <circle cx="15%" cy="20%" r="100" fill="none" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="8,8" filter="url(#glow)">
          <animate attributeName="r" values="100;115;100" dur="4s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="85%" cy="70%" r="120" fill="none" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="8,8" filter="url(#glow)">
          <animate attributeName="r" values="120;135;120" dur="5s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="70%" cy="15%" r="80" fill="none" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="8,8" filter="url(#glow)">
          <animate attributeName="r" values="80;95;80" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="30%" cy="85%" r="90" fill="none" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="8,8" filter="url(#glow)">
          <animate attributeName="r" values="90;105;90" dur="4.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
        </circle>
        
        <line x1="15%" y1="20%" x2="85%" y2="70%" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="10,10" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" values="0;100" dur="12s" repeatCount="indefinite" />
        </line>
        <line x1="85%" y1="70%" x2="70%" y2="15%" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="10,10" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" values="0;100" dur="14s" repeatCount="indefinite" />
        </line>
        <line x1="70%" y1="15%" x2="30%" y2="85%" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="10,10" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" values="0;100" dur="10s" repeatCount="indefinite" />
        </line>
        <line x1="30%" y1="85%" x2="15%" y2="20%" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="10,10" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" values="0;100" dur="13s" repeatCount="indefinite" />
        </line>
        
        <circle cx="15%" cy="20%" r="6" fill="#f97316" filter="url(#glow)">
          <animate attributeName="r" values="6;12;6" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="85%" cy="70%" r="7" fill="#10b981" filter="url(#glow)">
          <animate attributeName="r" values="7;14;7" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="70%" cy="15%" r="5" fill="#fbbf24" filter="url(#glow)">
          <animate attributeName="r" values="5;10;5" dur="1.3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="30%" cy="85%" r="6" fill="#059669" filter="url(#glow)">
          <animate attributeName="r" values="6;12;6" dur="1.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.6s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Floating Sparkles - Orange/Green */}
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            background: `radial-gradient(circle, ${Math.random() > 0.5 ? '#f97316' : '#10b981'}, ${Math.random() > 0.7 ? '#fbbf24' : 'transparent'})`,
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `sparkleFloat ${5 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            pointerEvents: 'none',
            boxShadow: `0 0 20px ${Math.random() > 0.5 ? 'rgba(249,115,22,0.6)' : 'rgba(16,185,129,0.5)'}`
          }}
        />
      ))}

      {/* Floating Gradient Orbs - Orange/Green */}
      <div style={{
        position: 'absolute',
        top: '0%',
        right: '0%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, rgba(16,185,129,0.04) 50%, transparent 80%)',
        borderRadius: '50%',
        animation: 'floatOrb1 20s ease-in-out infinite',
        filter: 'blur(40px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, rgba(249,115,22,0.03) 50%, transparent 80%)',
        borderRadius: '50%',
        animation: 'floatOrb2 18s ease-in-out infinite reverse',
        filter: 'blur(40px)'
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '40%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, rgba(249,115,22,0.02) 50%, transparent 80%)',
        borderRadius: '50%',
        animation: 'floatOrb3 15s ease-in-out infinite',
        filter: 'blur(40px)'
      }} />

      {/* Animated Connection Dots */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`dot-${i}`}
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            background: `radial-gradient(circle, ${['#f97316', '#10b981', '#fbbf24', '#059669'][Math.floor(Math.random() * 4)]}, transparent)`,
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `pulseDot ${2 + Math.random() * 3}s ease-in-out infinite`,
            boxShadow: `0 0 15px ${['#f97316', '#10b981', '#fbbf24', '#059669'][Math.floor(Math.random() * 4)]}`,
            pointerEvents: 'none'
          }}
        />
      ))}

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header - ORANGE THEME */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            padding: '0.6rem 1.5rem',
            borderRadius: '3rem',
            marginBottom: '1rem',
            boxShadow: '0 8px 25px rgba(249,115,22,0.3)',
            animation: 'badgeGlow 2s ease-in-out infinite'
          }}>
            <FaMagic style={{ color: 'white', fontSize: '0.9rem', animation: 'spin 3s linear infinite' }} />
            <span style={{ color: 'white', fontWeight: '700', fontSize: '0.75rem', letterSpacing: '1px' }}>CONNECT WITH US</span>
          </div>
          
          {/* HEADLINE - ORANGE COLOR */}
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#f97316',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Let's Start a{' '}
            <span style={{
              background: 'linear-gradient(135deg, #10b981, #059669, #fbbf24)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
              animation: 'gradientFlow 3s ease infinite'
            }}>
              Conversation
            </span>
          </h2>
          
          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            maxWidth: '550px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Grid - Responsive */}
        <div className="contact-grid-responsive" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '3rem',
          transform: `perspective(1000px) rotateX(${(mousePos.y - 0.5) * 2}deg) rotateY(${(mousePos.x - 0.5) * 2}deg)`,
          transition: 'transform 0.1s ease-out'
        }}>
          {/* Left - Contact Info */}
          <div>
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="info-card-responsive"
                style={{
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  padding: '1.2rem',
                  background: '#ffffff',
                  borderRadius: '1rem',
                  border: `1px solid ${item.color}30`,
                  transition: 'all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                  cursor: 'pointer',
                  animation: `slideInLeft 0.5s ease ${item.delay} both`,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(12px)';
                  e.currentTarget.style.borderColor = item.color;
                  e.currentTarget.style.boxShadow = `0 15px 30px ${item.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = `${item.color}30`;
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(90deg, transparent, ${item.color}20, transparent)`,
                  transition: 'left 0.6s'
                }}
                onMouseEnter={(e) => e.target.style.left = '100%'}
                onMouseLeave={(e) => e.target.style.left = '-100%'} />
                
                <div className="icon-box-responsive" style={{
                  width: '55px',
                  height: '55px',
                  background: item.gradient,
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  color: 'white',
                  transition: 'all 0.3s',
                  boxShadow: `0 4px 15px ${item.color}50`,
                  animation: `iconFloat ${2 + i * 0.2}s ease-in-out infinite`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1) rotate(8deg)';
                  e.currentTarget.style.boxShadow = `0 10px 25px ${item.color}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0)';
                  e.currentTarget.style.boxShadow = `0 4px 15px ${item.color}50`;
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '0.2rem'
                  }}>{item.title}</h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#334155',
                    marginBottom: '0.2rem'
                  }}>{item.details}</p>
                  <small style={{
                    fontSize: '0.75rem',
                    color: '#94a3b8'
                  }}>{item.sub}</small>
                </div>
              </div>
            ))}
            
            {/* Map with Animation */}
            <div style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 20px 35px -15px rgba(0,0,0,0.1)',
              transition: 'all 0.4s',
              animation: 'fadeUp 0.6s ease 0.4s both'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 25px 40px -15px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 35px -15px rgba(0,0,0,0.1)';
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.9851076845843!3d40.75889697932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="220" 
                style={{ border: 0, borderRadius: '1rem' }} 
                allowFullScreen 
                loading="lazy"
                title="Location"
              />
            </div>
          </div>

          {/* Right - Form with Orange/Green Theme */}
          <div
            ref={formRef}
            className="form-container-responsive"
            style={{
              background: '#ffffff',
              padding: '2rem',
              borderRadius: '1.5rem',
              border: '1px solid #fef3c7',
              boxShadow: '0 30px 50px -25px rgba(249,115,22,0.1)',
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Form Sparkles */}
            {[...Array(30)].map((_, i) => (
              <div
                key={`form-spark-${i}`}
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '4px',
                  background: `radial-gradient(circle, ${['#f97316', '#10b981', '#fbbf24', '#059669'][Math.floor(Math.random() * 4)]}, transparent)`,
                  borderRadius: '50%',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `formSparkle ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: 0,
                  pointerEvents: 'none'
                }}
              />
            ))}
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
              padding: '0.4rem 1rem',
              background: 'linear-gradient(135deg, #fff7ed, #ffffff)',
              borderRadius: '2rem',
              fontSize: '0.7rem',
              fontWeight: '600',
              color: '#f97316',
              border: '1px solid #fed7aa'
            }}>
              <FaRocket style={{ fontSize: '0.7rem', animation: 'rocketFloat 2s ease-in-out infinite', color: '#f97316' }} />
              <span>SEND US A MESSAGE</span>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#fefaf5',
                    border: '1px solid #fed7aa',
                    borderRadius: '0.8rem',
                    color: '#0f172a',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#f97316';
                    e.target.style.boxShadow = '0 0 0 4px rgba(249,115,22,0.1)';
                    e.target.style.background = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#fed7aa';
                    e.target.style.boxShadow = 'none';
                    e.target.style.background = '#fefaf5';
                  }}
                  required
                />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#fefaf5',
                    border: '1px solid #fed7aa',
                    borderRadius: '0.8rem',
                    color: '#0f172a',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#f97316';
                    e.target.style.boxShadow = '0 0 0 4px rgba(249,115,22,0.1)';
                    e.target.style.background = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#fed7aa';
                    e.target.style.boxShadow = 'none';
                    e.target.style.background = '#fefaf5';
                  }}
                  required
                />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <input
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#fefaf5',
                    border: '1px solid #fed7aa',
                    borderRadius: '0.8rem',
                    color: '#0f172a',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#f97316';
                    e.target.style.boxShadow = '0 0 0 4px rgba(249,115,22,0.1)';
                    e.target.style.background = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#fed7aa';
                    e.target.style.boxShadow = 'none';
                    e.target.style.background = '#fefaf5';
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#fefaf5',
                    border: '1px solid #fed7aa',
                    borderRadius: '0.8rem',
                    color: '#0f172a',
                    fontSize: '0.9rem',
                    resize: 'vertical',
                    transition: 'all 0.3s',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#f97316';
                    e.target.style.boxShadow = '0 0 0 4px rgba(249,115,22,0.1)';
                    e.target.style.background = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#fed7aa';
                    e.target.style.boxShadow = 'none';
                    e.target.style.background = '#fefaf5';
                  }}
                  required
                />
              </div>
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: submitted ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #f97316, #ea580c)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.8rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  boxShadow: submitted ? '0 4px 20px rgba(16,185,129,0.4)' : '0 4px 20px rgba(249,115,22,0.4)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!submitted) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 30px rgba(249,115,22,0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!submitted) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 20px rgba(249,115,22,0.4)';
                  }
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  animation: 'buttonShine 2s infinite',
                  pointerEvents: 'none'
                }} />
                
                {submitted ? (
                  <>
                    <FaCheckCircle style={{ animation: 'checkPop 0.4s ease' }} /> Message Sent!
                  </>
                ) : (
                  <>
                    <FaPaperPlane style={{ animation: 'planeFly 1s ease-in-out infinite' }} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
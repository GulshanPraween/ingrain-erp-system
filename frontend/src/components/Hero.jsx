import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video autoplay:", e));
    }
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      position: 'relative',
      background: '#000000',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      overflow: 'hidden'
    }}>
      {/* Video Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0
      }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translateX(-50%) translateY(-50%)',
            objectFit: 'cover'
          }}
        >
          <source src="/videos/bg1.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)',
          zIndex: 1
        }} />
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        width: '100%',
        padding: '100px 32px'
      }}>
        {/* Badge - Orange Theme */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(249,115,22,0.15)',
          backdropFilter: 'blur(10px)',
          padding: '0.5rem 1.2rem',
          borderRadius: '2rem',
          marginBottom: '2rem',
          border: '1px solid rgba(249,115,22,0.3)'
        }}>
          <span style={{ fontSize: '1.2rem' }}>✨</span>
          <span style={{ fontWeight: '600', fontSize: '0.9rem', color: '#f97316' }}>AI-Powered ERP Solution</span>
        </div>
        
        {/* Heading - Orange & White Gradient */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: '800',
          marginBottom: '1.5rem',
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          color: 'white'
        }}>
          Connect Your Business. Not Just Your Tools.{' '}
          <span style={{
            background: 'linear-gradient(135deg, #f97316 0%, #22c55e 50%, #f97316 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% auto',
            animation: 'gradient 3s ease infinite'
          }}></span>
        </h1>
        
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          marginBottom: '2.5rem',
          lineHeight: '1.6',
          color: 'rgba(255,255,255,0.9)',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          One platform. One login. One Dashboard 
Access and connect the best tools in the market — all working together as one system.


        </p>
        
        {/* Buttons - Orange & White Theme */}
        <div style={{
          display: 'flex',
          gap: '1.2rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link to="/signup" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2.5rem',
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '2.5rem',
            fontWeight: '600',
            transition: 'all 0.3s',
            boxShadow: '0 8px 20px rgba(249,115,22,0.4)',
            fontSize: '1rem'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 12px 25px rgba(249,115,22,0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 20px rgba(249,115,22,0.4)';
          }}>
            Get Started Free <FaArrowRight />
          </Link>
          
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2.5rem',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            borderRadius: '2.5rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
            fontSize: '1rem'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(249,115,22,0.3)';
            e.target.style.borderColor = '#f97316';
            e.target.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.15)';
            e.target.style.borderColor = 'rgba(255,255,255,0.3)';
            e.target.style.transform = 'translateY(0)';
          }}>
            <FaPlay style={{ color: '#f97316' }} /> Watch Demo
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        /* Responsive Styles */
        @media (max-width: 1024px) {
          .hero-content {
            padding: 80px 24px !important;
          }
          .hero-buttons {
            gap: 1rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .hero-buttons {
            flex-direction: column !important;
            width: 100% !important;
            align-items: center !important;
          }
          .hero-buttons a, .hero-buttons button {
            width: 100% !important;
            max-width: 280px !important;
            justify-content: center !important;
            padding: 0.8rem 1.5rem !important;
            font-size: 0.9rem !important;
          }
          .hero-container {
            padding: 80px 20px !important;
          }
          .hero-badge {
            padding: 0.4rem 1rem !important;
            margin-bottom: 1.5rem !important;
          }
          .hero-badge span:first-child {
            font-size: 1rem !important;
          }
          .hero-badge span:last-child {
            font-size: 0.8rem !important;
          }
          .hero-title {
            margin-bottom: 1rem !important;
          }
          .hero-description {
            margin-bottom: 1.8rem !important;
            font-size: 0.95rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-container {
            padding: 60px 16px !important;
          }
          .hero-title {
            font-size: 1.8rem !important;
          }
          .hero-description {
            font-size: 0.85rem !important;
            margin-bottom: 1.5rem !important;
          }
          .hero-badge {
            padding: 0.3rem 0.8rem !important;
            margin-bottom: 1rem !important;
          }
          .hero-badge span:first-child {
            font-size: 0.8rem !important;
          }
          .hero-badge span:last-child {
            font-size: 0.7rem !important;
          }
          .hero-buttons a, .hero-buttons button {
            max-width: 100% !important;
            padding: 0.7rem 1.2rem !important;
            font-size: 0.85rem !important;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;
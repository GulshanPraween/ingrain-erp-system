import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaQuoteLeft, FaPlay } from 'react-icons/fa';

const About = () => {
  return (
    <section style={{
      padding: '100px 20px',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'pulse 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'pulse 10s ease-in-out infinite reverse'
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #f97316)',
            padding: '0.5rem 1.2rem',
            borderRadius: '2rem',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 15px #f97316'
          }}>
            <span style={{ fontSize: '1rem' }}>✨</span>
            <span style={{ fontWeight: '600', fontSize: '0.85rem', color: 'white' }}>ABOUT INGRAIN AI</span>
          </div>
          
          <h5 style={{
            fontSize: 'clamp(2rem, 3vw, 3.5rem)',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '1rem',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            We're on a Mission to{' '}
            <span style={{
              background: 'linear-gradient(135deg, #080808)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
              animation: 'gradient 5s ease infinite'
            }}>Connect the World</span>
          </h5>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Empowering businesses with intelligent ERP solutions since 2020
          </p>
        </div>

        {/* Story + Image */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '2rem', animation: 'float 3s ease-in-out infinite' }}>📖</span>
              <span style={{
                fontWeight: '600',
                color: '#f97316',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '0.8rem'
              }}>Our Journey</span>
            </div>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              marginBottom: '1.5rem',
              color: '#0f172a',
              fontWeight: '700'
            }}>
              From Vision to Reality
            </h3>
            <p style={{
              lineHeight: '1.8',
              color: '#334155',
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              Founded in 2020, Ingrain AI started with a simple mission: to make business management simple, efficient, and accessible for companies of all sizes.
            </p>
            <p style={{
              lineHeight: '1.8',
              color: '#475569',
              marginBottom: '1.5rem'
            }}>
              We believe that technology should empower people, not complicate their work. That's why we've built a platform that combines powerful features with intuitive design.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/solutions" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(34,197,94,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                Learn More <FaArrowRight />
              </Link>
              
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'white',
                border: '1px solid #e2e8f0',
                color: '#f97316',
                padding: '0.8rem 1.5rem',
                borderRadius: '2rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#fff7ed';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.borderColor = '#f97316';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white';
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = '#e2e8f0';
              }}>
                <FaPlay style={{ color: '#f97316' }} /> Watch Story
              </button>
            </div>
          </div>

          <div style={{
            position: 'relative',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            boxShadow: '0 25px 40px -20px rgba(0,0,0,0.2)',
            transition: 'transform 0.5s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration"
              style={{
                width: '100%',
                display: 'block',
                borderRadius: '1.5rem'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              padding: '1rem 1.2rem',
              borderRadius: '1rem',
              borderLeft: '4px solid #f97316'
            }}>
              <FaQuoteLeft style={{ color: '#f97316', opacity: 0.5, marginBottom: '0.5rem', fontSize: '1rem' }} />
              <p style={{ color: '#1e293b', fontSize: '0.9rem', fontWeight: '500', fontStyle: 'italic' }}>
                "Technology should empower people, not complicate their work"
              </p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        /* Responsive Styles */
        @media (max-width: 1024px) {
          .about-container {
            gap: 3rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .about-header h2 {
            font-size: 2rem !important;
          }
          .about-header p {
            font-size: 1rem !important;
          }
          .story-section {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          .story-badge {
            justify-content: center;
          }
          .story-buttons {
            justify-content: center;
          }
          .image-card {
            max-width: 100%;
          }
          .quote-card {
            left: 15px !important;
            right: 15px !important;
            padding: 0.8rem !important;
          }
          .quote-card p {
            font-size: 0.8rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .about-section {
            padding: 60px 16px !important;
          }
          .about-header {
            margin-bottom: 2rem !important;
          }
          .about-badge {
            padding: 0.3rem 0.8rem !important;
            font-size: 0.7rem !important;
          }
          .about-badge span:first-child {
            font-size: 0.8rem !important;
          }
          .about-title {
            font-size: 1.8rem !important;
          }
          .story-title {
            font-size: 1.5rem !important;
          }
          .story-text {
            font-size: 0.9rem !important;
          }
          .btn-learn, .btn-watch {
            padding: 0.6rem 1rem !important;
            font-size: 0.8rem !important;
          }
          .image-card img {
            border-radius: 1rem !important;
          }
          .quote-card {
            padding: 0.6rem !important;
          }
          .quote-card p {
            font-size: 0.7rem !important;
          }
        }
      `}} />
    </section>
  );
};

export default About;
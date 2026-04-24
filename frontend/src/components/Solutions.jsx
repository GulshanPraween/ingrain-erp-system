import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaUnlockAlt, FaGlobe, FaSync, FaChartLine, FaPlug, FaStar, FaRocket, FaGem, FaRobot } from 'react-icons/fa';

const Solutions = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { 
      icon: <FaUnlockAlt />, 
      title: 'One User ID & Password', 
      color: '#f97316', 
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)', 
      delay: '0s', 
      sparkleColor: '#f97316' 
    },
    { 
      icon: <FaGlobe />, 
      title: 'Access multiple tools in one platform', 
      color: '#22c55e', 
      gradient: 'linear-gradient(135deg, #22c55e, #16a34a)', 
      delay: '0.1s', 
      sparkleColor: '#22c55e' 
    },
    { 
      icon: <FaSync />, 
      title: 'Integrated data across systems', 
      color: '#f97316', 
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)', 
      delay: '0.2s', 
      sparkleColor: '#f97316' 
    },
    { 
      icon: <FaChartLine />, 
      title: 'One dashboard, complete visibility', 
      color: '#22c55e', 
      gradient: 'linear-gradient(135deg, #22c55e, #16a34a)', 
      delay: '0.3s', 
      sparkleColor: '#22c55e' 
    },
    { 
      icon: <FaPlug />, 
      title: 'We don\'t replace tools. We connect them.', 
      color: '#f97316', 
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)', 
      delay: '0.4s', 
      sparkleColor: '#f97316' 
    },
    { 
      icon: <FaRobot />, 
      title: 'Smart Automation', 
      color: '#22c55e', 
      gradient: 'linear-gradient(135deg, #22c55e, #16a34a)', 
      delay: '0.5s', 
      sparkleColor: '#22c55e' 
    }
  ];

  return (
    <section ref={containerRef} style={{
      padding: '80px 20px 120px',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Gradient Background - Orange & Green */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 40%, rgba(249,115,22,0.03) 0%, rgba(34,197,94,0.02) 50%, transparent 80%)',
        pointerEvents: 'none'
      }} />

      {/* Floating Sparkles - Orange & Green */}
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            background: `radial-gradient(circle, ${Math.random() > 0.5 ? '#f97316' : '#22c55e'}, transparent)`,
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `sparkleFloat ${8 + Math.random() * 12}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            pointerEvents: 'none',
            boxShadow: `0 0 12px ${Math.random() > 0.5 ? 'rgba(249,115,22,0.4)' : 'rgba(34,197,94,0.3)'}`
          }}
        />
      ))}

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header - Minimal */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          transform: `perspective(800px) rotateX(${(mousePos.y - 0.5) * 3}deg) rotateY(${(mousePos.x - 0.5) * 3}deg)`,
          transition: 'transform 0.1s ease-out'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'linear-gradient(135deg, #f97316, #22c55e)',
            padding: '0.5rem 1.2rem',
            borderRadius: '3rem',
            marginBottom: '1rem',
            boxShadow: '0 8px 20px rgba(249,115,22,0.25)',
            animation: 'glowPulse 2s ease-in-out infinite'
          }}>
            <FaStar style={{ color: 'white', fontSize: '0.8rem' }} />
            <span style={{ color: 'white', fontWeight: '600', fontSize: '0.7rem', letterSpacing: '1px' }}>THE CONNECTION LAYER</span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            One Platform.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f97316, #22c55e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Infinite Possibilities.
            </span>
          </h2>
          
          <p style={{
            fontSize: '0.95rem',
            color: '#64748b',
            maxWidth: '550px',
            margin: '0 auto'
          }}>
            We don't replace tools. We connect them.
          </p>
        </div>

        {/* Cards Grid - Big Icons, Minimal Text */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          perspective: '1200px'
        }}>
          {features.map((feature, i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                padding: '2rem 1.5rem',
                borderRadius: '1.5rem',
                border: `1px solid ${feature.color}20`,
                transition: 'all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                animation: `floatIn 0.6s ease ${feature.delay} both`,
                boxShadow: '0 8px 20px -12px rgba(0,0,0,0.08)',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 25px 40px -15px ${feature.color}60`;
                e.currentTarget.style.borderColor = feature.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px -12px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = `${feature.color}20`;
              }}
            >
              {/* Top Border Animation */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: feature.gradient,
                transform: 'scaleX(0)',
                transition: 'transform 0.4s ease',
                transformOrigin: 'left'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scaleX(1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scaleX(0)'} />
              
              {/* BIG ICON - Attractive Size */}
              <div style={{
                width: '100px',
                height: '100px',
                background: `linear-gradient(135deg, ${feature.color}12, ${feature.color}06)`,
                borderRadius: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.2rem',
                fontSize: '3.5rem',
                color: feature.color,
                transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                border: `1px solid ${feature.color}20`,
                boxShadow: `0 10px 25px -8px ${feature.color}30`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08) rotate(5deg)';
                e.currentTarget.style.background = feature.gradient;
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.boxShadow = `0 15px 30px -8px ${feature.color}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0)';
                e.currentTarget.style.background = `linear-gradient(135deg, ${feature.color}12, ${feature.color}06)`;
                e.currentTarget.style.color = feature.color;
                e.currentTarget.style.boxShadow = `0 10px 25px -8px ${feature.color}30`;
              }}>
                {feature.icon}
              </div>
              
              {/* Heading Only - No Description Text */}
              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '0',
                lineHeight: '1.4'
              }}>
                {feature.title}
              </h3>
              
              {/* Floating Number */}
              <div style={{
                position: 'absolute',
                bottom: '0.5rem',
                right: '0.8rem',
                fontSize: '2.5rem',
                fontWeight: '800',
                color: `${feature.color}10`,
                fontFamily: 'monospace',
                lineHeight: '1',
                pointerEvents: 'none'
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button - Orange/Green Theme */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center'
        }}>
          <Link to="/signup" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8rem',
            padding: '1rem 2.5rem',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '3rem',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s',
            boxShadow: '0 8px 25px rgba(249,115,22,0.4)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px) scale(1.02)';
            e.target.style.boxShadow = '0 15px 35px rgba(249,115,22,0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 25px rgba(249,115,22,0.4)';
          }}>
            <FaRocket style={{ fontSize: '0.9rem' }} />
            <span>Start Connecting Your Tools</span>
            <FaArrowRight style={{ animation: 'arrowMove 1s ease-in-out infinite' }} />
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes sparkleFloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(-60px) translateX(30px); opacity: 0; }
        }
        
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 8px 20px rgba(249,115,22,0.25); }
          50% { box-shadow: 0 12px 28px rgba(249,115,22,0.4); }
        }
        
        @keyframes arrowMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        
        /* Responsive Styles */
        @media (max-width: 1024px) {
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          .solutions-section {
            padding: 60px 20px 100px !important;
          }
        }
        
        @media (max-width: 768px) {
          .solutions-grid {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
          }
          .solutions-section {
            padding: 50px 20px 80px !important;
          }
          .solutions-icon {
            width: 80px !important;
            height: 80px !important;
            font-size: 2.5rem !important;
          }
          .solutions-card-title {
            font-size: 1rem !important;
          }
          .solutions-title {
            font-size: 1.8rem !important;
          }
          .solutions-subtitle {
            font-size: 0.85rem !important;
          }
          .cta-button {
            padding: 0.8rem 1.8rem !important;
            font-size: 0.85rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .solutions-section {
            padding: 40px 16px 60px !important;
          }
          .solutions-icon {
            width: 70px !important;
            height: 70px !important;
            font-size: 2rem !important;
          }
          .solutions-card-title {
            font-size: 0.85rem !important;
          }
          .solutions-title {
            font-size: 1.5rem !important;
          }
          .solutions-badge {
            padding: 0.3rem 0.8rem !important;
          }
          .solutions-badge span:first-child {
            font-size: 0.6rem !important;
          }
          .solutions-badge span:last-child {
            font-size: 0.6rem !important;
          }
          .cta-button {
            padding: 0.6rem 1.2rem !important;
            font-size: 0.75rem !important;
          }
          .solutions-number {
            font-size: 1.8rem !important;
          }
        }
      `}} />
    </section>
  );
};

export default Solutions;
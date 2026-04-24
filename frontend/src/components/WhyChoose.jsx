import React, { useEffect, useRef } from 'react';
import { FaFingerprint, FaChartLine, FaRocket, FaShieldAlt, FaInfinity, FaArrowRight } from 'react-icons/fa';

const WhyChoose = () => {
  const features = [
    {
      icon: <FaFingerprint />,
      title: 'One Identity, All Access',
      description: 'Single sign-on across every tool. No more password chaos. One login unlocks your entire business ecosystem.',
      color: '#4f46e5',
      gradient: 'linear-gradient(135deg, #4f46e5, #6366f1)',
      side: 'left',
      stat: '1 Login',
      metric: '100% reduction in login time'
    },
    {
      icon: <FaChartLine />,
      title: 'Connected Intelligence',
      description: 'Data flows seamlessly between systems. See the complete picture with real-time synchronization across all platforms.',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
      side: 'right',
      stat: 'Real-time Sync',
      metric: '40% faster decisions'
    },
    {
      icon: <FaRocket />,
      title: 'Smarter Decisions',
      description: 'AI-powered insights from unified data. Move with confidence using predictive analytics and actionable intelligence.',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      side: 'left',
      stat: 'AI Insights',
      metric: '85% accuracy'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Speed Without Limits',
      description: 'Streamlined workflows that eliminate friction. Execute faster with automated processes and intelligent routing.',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      side: 'right',
      stat: '10x Faster',
      metric: '70% time saved'
    },
    {
      icon: <FaInfinity />,
      title: 'Grow Without Boundaries',
      description: 'Built for startups to enterprises. Scales with your ambition. No limits, no constraints, just infinite possibilities.',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
      side: 'left',
      stat: 'Unlimited Scale',
      metric: '500+ integrations'
    }
  ];

  return (
    <section style={{
      padding: '100px 20px',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 40%, rgba(79,70,229,0.02) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />
      
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header - Orange Text */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #f97316,#f97316)',
            padding: '0.5rem 1.2rem',
            borderRadius: '2rem',
            marginBottom: '1rem',
            boxShadow: '0 4px 12px rgba(229, 171, 70, 0.2)',
            animation: 'glowPulse 2s ease-in-out infinite'
          }}>
            <span style={{ fontSize: '1rem' }}>✨</span>
            <span style={{ fontWeight: '600', fontSize: '0.8rem', color: 'white', letterSpacing: '0.5px' }}>WHY BUSINESSES CHOOSE US</span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#151514',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            The{' '}
            <span style={{
              color: '#0f0e0e',
              position: 'relative',
              display: 'inline-block'
            }}>
              Intelligent Choice
              <span style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, #050504, #0e0d0d, transparent)',
                borderRadius: '2px'
              }} />
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Why thousands of businesses trust Ingrain AI to power their operations
          </p>
        </div>

        {/* Alternating Layout with Movement */}
        {features.map((feature, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: feature.side === 'left' ? 'row' : 'row-reverse',
              alignItems: 'center',
              gap: '4rem',
              marginBottom: i === features.length - 1 ? '0' : '5rem',
              flexWrap: 'wrap',
              position: 'relative'
            }}
          >
            {/* Animated Line Connector */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '2px',
              height: '80px',
              background: `linear-gradient(to bottom, ${feature.color}, transparent)`,
              opacity: 0.3,
              display: i === features.length - 1 ? 'none' : 'block'
            }} />
            
            {/* Left Side - Animated Diagram */}
            <div style={{
              flex: '1',
              position: 'relative',
              animation: `floatDiagram 3s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto'
              }}>
                {/* Main Circle */}
                <div style={{
                  width: '280px',
                  height: '280px',
                  background: `radial-gradient(circle at 30% 30%, ${feature.color}15, ${feature.color}02)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  position: 'relative',
                  animation: `pulseRing 3s ease-in-out infinite`,
                  border: `2px solid ${feature.color}30`
                }}>
                  {/* Inner Icon */}
                  <div style={{
                    width: '120px',
                    height: '120px',
                    background: feature.gradient,
                    borderRadius: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: 'white',
                    boxShadow: `0 20px 35px -10px ${feature.color}80`,
                    animation: `rotateIcon 8s linear infinite`,
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {feature.icon}
                  </div>
                  
                  {/* Orbiting Dots */}
                  {[...Array(3)].map((_, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: 'absolute',
                        width: '12px',
                        height: '12px',
                        background: feature.color,
                        borderRadius: '50%',
                        animation: `orbit${idx} 4s linear infinite`,
                        boxShadow: `0 0 10px ${feature.color}`
                      }}
                    />
                  ))}
                </div>
                
                {/* Floating Stats */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '0',
                  background: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                  border: `1px solid ${feature.color}20`,
                  animation: `floatStat 2.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}>
                  <span style={{ fontSize: '0.7rem', color: feature.color, fontWeight: '600' }}>{feature.stat}</span>
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '0',
                  background: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                  border: `1px solid ${feature.color}20`,
                  animation: `floatStat 2.5s ease-in-out infinite reverse`,
                  animationDelay: `${i * 0.2}s`
                }}>
                  <span style={{ fontSize: '0.7rem', color: feature.color, fontWeight: '600' }}>{feature.metric}</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Content with Orange Text */}
            <div style={{
              flex: '1',
              animation: `slideIn 0.8s ease-out ${i * 0.1}s both`
            }}>
              <div style={{
                display: 'inline-block',
                padding: '0.3rem 0.8rem',
                background: `${feature.color}10`,
                borderRadius: '2rem',
                fontSize: '0.7rem',
                fontWeight: '600',
                color: '#f97316',
                marginBottom: '1rem',
                border: `1px solid ${feature.color}20`
              }}>
                {feature.stat}
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f97316',
                marginBottom: '1rem',
                letterSpacing: '-0.02em'
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#5b6b8c',
                lineHeight: '1.7',
                marginBottom: '1.5rem'
              }}>
                {feature.description}
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#f97316',
                fontWeight: '500',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'gap 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.gap = '0.8rem'}
              onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}>
                Learn More <FaArrowRight />
              </div>
            </div>
          </div>
        ))}

        {/* Trust Badge */}
        <div style={{
          marginTop: '5rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, #f8fafc, #ffffff)',
          borderRadius: '2rem',
          border: '1px solid #eef2ff',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', animation: 'pulse 2s ease-in-out infinite' }}>
            <span style={{ fontSize: '2rem' }}>⭐</span>
            <span style={{ fontWeight: '700', color: '#f97316' }}>4.9/5</span>
            <span style={{ color: '#64748b' }}>from 500+ reviews</span>
          </div>
          <div style={{ width: '1px', height: '30px', background: '#e2e8f0' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🏆</span>
            <span style={{ fontWeight: '700', color: '#0f172a' }}>#1 ERP Platform</span>
            <span style={{ color: '#64748b' }}>2024</span>
          </div>
          <div style={{ width: '1px', height: '30px', background: '#e2e8f0' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🔒</span>
            <span style={{ fontWeight: '700', color: '#0f172a' }}>ISO 27001</span>
            <span style={{ color: '#64748b' }}>Certified</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatDiagram {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes floatStat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes pulseRing {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.9;
          }
        }
        
        @keyframes rotateIcon {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes orbit0 {
          0% {
            transform: rotate(0deg) translateX(140px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(140px) rotate(-360deg);
          }
        }
        
        @keyframes orbit1 {
          0% {
            transform: rotate(120deg) translateX(140px) rotate(-120deg);
          }
          100% {
            transform: rotate(480deg) translateX(140px) rotate(-480deg);
          }
        }
        
        @keyframes orbit2 {
          0% {
            transform: rotate(240deg) translateX(140px) rotate(-240deg);
          }
          100% {
            transform: rotate(600deg) translateX(140px) rotate(-600deg);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 4px 12px rgba(79,70,229,0.2);
          }
          50% {
            box-shadow: 0 8px 20px rgba(79,70,229,0.4);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        
        @media (max-width: 900px) {
          .feature-row {
            flex-direction: column !important;
            text-align: center;
          }
          .orbit-dots {
            display: none;
          }
        }
      `}} />
    </section>
  );
};

export default WhyChoose;
import React from 'react';
import { FaUserLock, FaGlobe, FaDatabase, FaChartLine, FaArrowRight } from 'react-icons/fa';

const Features = () => {
  const steps = [
    {
      number: '01',
      icon: <FaUserLock />,
      title: 'Login Once',
      description: 'Single sign-on access to your unified dashboard',
      color: '#f97316',
      bgGradient: 'linear-gradient(135deg, #fff7ed, #ffffff)'
    },
    {
      number: '02',
      icon: <FaGlobe />,
      title: 'Access Everything',
      description: 'All your tools and data in one central platform',
      color: '#f97316',
      bgGradient: 'linear-gradient(135deg, #fff7ed, #ffffff)'
    },
    {
      number: '03',
      icon: <FaDatabase />,
      title: 'Data Connects Automatically',
      description: 'Real-time sync across all your applications',
      color: '#f97316',
      bgGradient: 'linear-gradient(135deg, #fff7ed, #ffffff)'
    },
    {
      number: '04',
      icon: <FaChartLine />,
      title: 'See Everything Clearly',
      description: 'Complete visibility with actionable insights',
      color: '#f97316',
      bgGradient: 'linear-gradient(135deg, #fff7ed, #ffffff)'
    }
  ];

  return (
    <section style={{
      padding: '80px 20px 100px',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Waves - Orange */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 40%, rgba(249,115,22,0.02) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />
      
      {/* Decorative Dots - Orange */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(249,115,22,0.03) 2px, transparent 2px)',
        backgroundSize: '20px 20px',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header - Orange Theme */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            padding: '0.6rem 1.5rem',
            borderRadius: '3rem',
            marginBottom: '1.5rem',
            boxShadow: '0 8px 20px rgba(249,115,22,0.2)'
          }}>
            <span style={{ fontSize: '1rem' }}>⚡</span>
            <span style={{ fontWeight: '600', fontSize: '0.85rem', color: 'white', letterSpacing: '0.5px' }}>HOW IT WORKS</span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Simple by Design.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #12100f, #080808)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              display: 'inline-block'
            }}>
              Powerful by System.
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, #f97316, #22c55e, transparent)',
                borderRadius: '3px'
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
            Four simple steps to transform your business operations
          </p>
        </div>

        {/* Desktop Flow - Horizontal */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '1rem',
          marginBottom: '4rem',
          position: 'relative'
        }}>
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div style={{
                flex: '1',
                minWidth: '240px',
                background: step.bgGradient,
                padding: '2rem 1.5rem',
                borderRadius: '1.5rem',
                textAlign: 'center',
                position: 'relative',
                transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                cursor: 'pointer',
                border: `1px solid ${step.color}20`,
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = `0 25px 35px -15px ${step.color}60`;
                e.currentTarget.style.borderColor = step.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                e.currentTarget.style.borderColor = `${step.color}20`;
              }}>
                {/* Number Circle - Orange */}
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: `linear-gradient(135deg, #f97316, #ea580c)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '1.8rem',
                  fontWeight: '800',
                  color: 'white',
                  boxShadow: `0 12px 25px -8px rgba(249,115,22,0.8)`,
                  position: 'relative',
                  zIndex: 2
                }}>
                  {step.number}
                </div>
                
                {/* Icon - Orange */}
                <div style={{
                  width: '65px',
                  height: '65px',
                  background: `${step.color}12`,
                  borderRadius: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem',
                  fontSize: '1.8rem',
                  color: step.color,
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.background = `${step.color}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = `${step.color}12`;
                }}>
                  {step.icon}
                </div>
                
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#f97316',
                  marginBottom: '0.75rem'
                }}>
                  {step.title}
                </h3>
                
                <p style={{
                  fontSize: '0.9rem',
                  color: '#5b6b8c',
                  lineHeight: '1.5'
                }}>
                  {step.description}
                </p>
              </div>
              
              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 0.5rem'
                }}>
                  <div style={{
                    background: '#fff7ed',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                  }}>
                    <FaArrowRight style={{
                      fontSize: '1.2rem',
                      color: '#f97316',
                      animation: 'pulseArrow 2s ease-in-out infinite'
                    }} />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Live Demo Image */}
        <div style={{
          marginTop: '2rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, #fff7ed, #ffffff)',
          borderRadius: '2rem',
          border: '1px solid rgba(249,115,22,0.2)',
          textAlign: 'center',
          boxShadow: '0 8px 25px -10px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            background: '#fff7ed',
            borderRadius: '2rem',
            fontSize: '0.75rem',
            fontWeight: '600',
            color: '#f97316',
            marginBottom: '1rem'
          }}>
            <span>🔮</span>
            <span>LIVE DEMO PREVIEW</span>
          </div>
          
          <div style={{
            position: 'relative',
            borderRadius: '1.2rem',
            overflow: 'hidden',
            boxShadow: '0 25px 45px -15px rgba(0,0,0,0.2)',
            marginTop: '0.5rem',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Dashboard Preview"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.6s ease'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              background: 'rgba(0,0,0,0.65)',
              backdropFilter: 'blur(12px)',
              padding: '0.5rem 1.2rem',
              borderRadius: '2rem',
              fontSize: '0.8rem',
              fontWeight: '500',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>✨</span>
              Unified Dashboard Preview
            </div>
          </div>
          
          <p style={{
            marginTop: '1.5rem',
            color: '#64748b',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ color: '#22c55e' }}>✓</span>
            Experience seamless integration across all your business tools
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulseArrow {
          0%, 100% {
            opacity: 0.4;
            transform: translateX(0);
          }
          50% {
            opacity: 1;
            transform: translateX(4px);
          }
        }
        
        /* Responsive Styles */
        @media (max-width: 1024px) {
          .features-steps {
            gap: 1rem !important;
          }
          .feature-card {
            min-width: 220px !important;
          }
        }
        
        @media (max-width: 900px) {
          .howitworks-steps {
            flex-direction: column;
            gap: 2rem !important;
          }
          .step-arrow {
            transform: rotate(90deg);
            margin: 0.5rem 0;
          }
          .features-section {
            padding: 60px 20px 80px !important;
          }
        }
        
        @media (max-width: 768px) {
          .features-header {
            margin-bottom: 3rem !important;
          }
          .features-title {
            font-size: 2rem !important;
          }
          .features-badge {
            padding: 0.4rem 1rem !important;
            margin-bottom: 1rem !important;
          }
          .features-badge span:first-child {
            font-size: 0.9rem !important;
          }
          .features-badge span:last-child {
            font-size: 0.7rem !important;
          }
          .features-description {
            font-size: 1rem !important;
          }
          .feature-card {
            padding: 1.5rem !important;
          }
          .feature-number {
            width: 55px !important;
            height: 55px !important;
            font-size: 1.4rem !important;
            margin-bottom: 1rem !important;
          }
          .feature-icon {
            width: 50px !important;
            height: 50px !important;
            font-size: 1.4rem !important;
            margin-bottom: 1rem !important;
          }
          .feature-title {
            font-size: 1.1rem !important;
            margin-bottom: 0.5rem !important;
          }
          .feature-description {
            font-size: 0.8rem !important;
          }
          .demo-image-card {
            padding: 1rem !important;
          }
          .demo-image-card img {
            border-radius: 1rem !important;
          }
          .demo-badge {
            bottom: 10px !important;
            right: 10px !important;
            padding: 0.3rem 0.8rem !important;
            font-size: 0.65rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .features-section {
            padding: 40px 16px 60px !important;
          }
          .features-title {
            font-size: 1.5rem !important;
          }
          .features-description {
            font-size: 0.85rem !important;
          }
          .feature-card {
            padding: 1rem !important;
          }
          .feature-number {
            width: 45px !important;
            height: 45px !important;
            font-size: 1.2rem !important;
          }
          .feature-icon {
            width: 40px !important;
            height: 40px !important;
            font-size: 1.2rem !important;
          }
          .feature-title {
            font-size: 1rem !important;
          }
          .feature-description {
            font-size: 0.7rem !important;
          }
          .demo-image-card {
            padding: 0.8rem !important;
          }
          .demo-badge {
            padding: 0.2rem 0.6rem !important;
            font-size: 0.55rem !important;
          }
          .demo-text {
            font-size: 0.7rem !important;
            margin-top: 1rem !important;
          }
        }
      `}} />
    </section>
  );
};

export default Features;
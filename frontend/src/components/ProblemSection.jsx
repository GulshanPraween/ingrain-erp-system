import React from 'react';
import { FaExclamationTriangle, FaBuilding, FaUsers, FaChartBar, FaDatabase, FaLock, FaArrowRight, FaRocket, FaCheck } from 'react-icons/fa';

const ProblemSection = () => {
  const problems = [
    { 
      icon: <FaBuilding />, 
      title: 'CRM in one place', 
      color: '#f97316', 
      gradient: 'linear-gradient(135deg, #fff7ed, #ffffff)',
      image: 'https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      delay: '0s',
      number: '01'
    },
    { 
      icon: <FaUsers />, 
      title: 'HR in another', 
      color: '#f97316', 
      gradient: 'linear-gradient(135deg, #fff7ed, #ffffff)',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      delay: '0.1s',
      number: '02'
    },
    { 
      icon: <FaChartBar />, 
      title: 'Marketing tools scattered', 
      color: '#f97316', 
      gradient: 'linear-gradient(135deg, #fff7ed, #ffffff)',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      delay: '0.2s',
      number: '03'
    },
    { 
      icon: <FaDatabase />, 
      title: 'Data everywhere', 
      color: '#f97316', 
      gradient: 'linear-gradient(135deg, #fff7ed, #ffffff)',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      delay: '0.3s',
      number: '04'
    },
    { 
      icon: <FaLock />, 
      title: 'Multiple tools. Multiple logins.', 
      color: '#f97316', 
      gradient: 'linear-gradient(135deg, #fff7ed, #ffffff)',
      image: 'https://images.pexels.com/photos/2882630/pexels-photo-2882630.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      delay: '0.4s',
      number: '05'
    }
  ];

  // Split into two rows: first row 3 cards, second row 2 cards
  const firstRow = problems.slice(0, 3);
  const secondRow = problems.slice(3, 5);

  return (
    <section style={{
      padding: '60px 20px 80px',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 40%, rgba(249,115,22,0.03) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header - Only Heading, No Text */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            padding: '0.5rem 1.2rem',
            borderRadius: '3rem',
            marginBottom: '1rem',
            boxShadow: '0 6px 15px rgba(249,115,22,0.2)',
            animation: 'badgePulse 2s ease-in-out infinite'
          }}>
            <FaExclamationTriangle style={{ color: 'white', fontSize: '0.8rem' }} />
            <span style={{ color: 'white', fontWeight: '600', fontSize: '0.7rem', letterSpacing: '1px' }}>THE PROBLEM</span>
          </div>
          
          <h6 style={{
            fontSize: 'clamp(2rem, 2vw, 1rem)',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '0',
            letterSpacing: '-0.02em'
          }}>
            Great Tools.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0e0e0e, #0b0b0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative'
            }}>
              Broken Systems.
            </span>
          </h6>
        </div>

        {/* First Row - 3 Cards with Large Images */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          marginBottom: '1.5rem',
          perspective: '1000px'
        }}>
          {firstRow.map((problem, i) => (
            <div
              key={i}
              style={{
                background: problem.gradient,
                borderRadius: '1.2rem',
                border: '1px solid ' + problem.color + '20',
                transition: 'all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                animation: 'cardFloat 0.5s ease ' + problem.delay + ' both',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) rotateX(3deg) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 20px 35px -12px ' + problem.color + '60';
                e.currentTarget.style.borderColor = '#f97316';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                e.currentTarget.style.borderColor = problem.color + '20';
              }}
            >
              {/* Animated Top Border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, #f97316, #22c55e, transparent)',
                transform: 'scaleX(0)',
                transition: 'transform 0.4s ease',
                transformOrigin: 'left'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scaleX(1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scaleX(0)'} />
              
              {/* Number Badge */}
              <div style={{
                position: 'absolute',
                top: '0.8rem',
                right: '1rem',
                fontSize: '2rem',
                fontWeight: '800',
                color: problem.color + '15',
                fontFamily: 'monospace',
                lineHeight: '1',
                zIndex: 2
              }}>
                {problem.number}
              </div>
              
              {/* Large HD Image */}
              <div style={{
                width: '100%',
                height: '280px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={problem.image} 
                  alt={problem.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                {/* Dark Overlay for text readability */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '100px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
                }} />
              </div>
              
              {/* Big Icon and Title */}
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: problem.color + '10',
                  borderRadius: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2.2rem',
                  color: problem.color,
                  transition: 'all 0.3s',
                  border: `1px solid ${problem.color}20`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) rotate(5deg)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f97316, #ea580c)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0)';
                  e.currentTarget.style.background = problem.color + '10';
                  e.currentTarget.style.color = problem.color;
                }}>
                  {problem.icon}
                </div>
                
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#f97316',
                  marginBottom: '0',
                  lineHeight: '1.3'
                }}>
                  {problem.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          maxWidth: 'calc(66.66% + 0.75rem)',
          margin: '0 auto',
          perspective: '1000px'
        }}>
          {secondRow.map((problem, i) => (
            <div
              key={i + 3}
              style={{
                background: problem.gradient,
                borderRadius: '1.2rem',
                border: '1px solid ' + problem.color + '20',
                transition: 'all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                animation: 'cardFloat 0.5s ease ' + problem.delay + ' both',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) rotateX(3deg) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 20px 35px -12px ' + problem.color + '60';
                e.currentTarget.style.borderColor = '#f97316';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                e.currentTarget.style.borderColor = problem.color + '20';
              }}
            >
              {/* Animated Top Border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, #f97316, #22c55e, transparent)',
                transform: 'scaleX(0)',
                transition: 'transform 0.4s ease',
                transformOrigin: 'left'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scaleX(1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scaleX(0)'} />
              
              {/* Number Badge */}
              <div style={{
                position: 'absolute',
                top: '0.8rem',
                right: '1rem',
                fontSize: '2rem',
                fontWeight: '800',
                color: problem.color + '15',
                fontFamily: 'monospace',
                lineHeight: '1',
                zIndex: 2
              }}>
                {problem.number}
              </div>
              
              {/* Large HD Image */}
              <div style={{
                width: '100%',
                height: '280px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={problem.image} 
                  alt={problem.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '100px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
                }} />
              </div>
              
              {/* Big Icon and Title */}
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: problem.color + '10',
                  borderRadius: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2.2rem',
                  color: problem.color,
                  transition: 'all 0.3s',
                  border: `1px solid ${problem.color}20`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) rotate(5deg)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f97316, #ea580c)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0)';
                  e.currentTarget.style.background = problem.color + '10';
                  e.currentTarget.style.color = problem.color;
                }}>
                  {problem.icon}
                </div>
                
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#f97316',
                  marginBottom: '0',
                  lineHeight: '1.3'
                }}>
                  {problem.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Bridge - Minimal */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, #fff7ed, #ffffff)',
          borderRadius: '1.2rem',
          border: '1px solid rgba(249,115,22,0.2)',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.8rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: '#fee2e2',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem'
            }}>
              <span>❌</span>
              <span style={{ color: '#991b1b' }}>Disconnected</span>
            </div>
            
            <div style={{ animation: 'arrowMove 1s ease-in-out infinite' }}>
              <FaArrowRight style={{ color: '#94a3b8', fontSize: '0.9rem' }} />
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 2px 8px rgba(249,115,22,0.2)'
            }}>
              <FaRocket style={{ color: 'white', fontSize: '0.7rem' }} />
              <span style={{ color: 'white', fontWeight: '600', fontSize: '0.8rem' }}>Ingrain Systems</span>
            </div>
            
            <div style={{ animation: 'arrowMove 1s ease-in-out infinite', animationDelay: '0.5s' }}>
              <FaArrowRight style={{ color: '#94a3b8', fontSize: '0.9rem' }} />
            </div>
            
            <div style={{
              background: '#dcfce7',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem'
            }}>
              <FaCheck style={{ fontSize: '0.7rem', color: '#166534' }} />
              <span style={{ color: '#166534' }}>Unified</span>
            </div>
          </div>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            borderRadius: '2rem',
            marginTop: '1rem'
          }}>
            <span style={{ fontSize: '0.8rem' }}>✨</span>
            <span style={{
              color: 'white',
              fontWeight: '600',
              fontSize: '0.75rem'
            }}>
              One Platform. One Login. Connected.
            </span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes cardFloat {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 6px 15px rgba(249,115,22,0.2);
          }
          50% {
            box-shadow: 0 10px 25px rgba(249,115,22,0.35);
          }
        }
        
        @keyframes arrowMove {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
          }
        }
        
        /* Responsive Styles */
        @media (max-width: 1024px) {
          .first-row, .second-row {
            gap: 1rem !important;
          }
        }
        
        @media (max-width: 900px) {
          .first-row, .second-row {
            grid-template-columns: 1fr !important;
            max-width: 100% !important;
          }
          .problem-section {
            padding: 40px 20px 60px !important;
          }
        }
        
        @media (max-width: 768px) {
          .problem-title {
            font-size: 1.8rem !important;
          }
          .problem-card-image {
            height: 220px !important;
          }
          .problem-icon {
            width: 60px !important;
            height: 60px !important;
            font-size: 1.8rem !important;
          }
          .problem-card-title {
            font-size: 1rem !important;
          }
          .solution-bridge {
            padding: 1rem !important;
            margin-top: 2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .problem-section {
            padding: 30px 16px 50px !important;
          }
          .problem-title {
            font-size: 1.5rem !important;
          }
          .problem-card-image {
            height: 200px !important;
          }
          .problem-icon {
            width: 50px !important;
            height: 50px !important;
            font-size: 1.5rem !important;
          }
          .problem-card-title {
            font-size: 0.9rem !important;
          }
          .solution-bridge div {
            gap: 0.3rem !important;
          }
          .solution-bridge div div {
            padding: 0.2rem 0.6rem !important;
            font-size: 0.65rem !important;
          }
        }
      `}} />
    </section>
  );
};

export default ProblemSection;
import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'HR Director',
      company: 'Tech Corp',
      text: 'Ingrain AI transformed how we manage our workforce. Attendance and recruitment modules are game-changers! We reduced hiring time by 40%.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      color: '#f97316'
    },
    {
      name: 'Michael Chen',
      position: 'CEO',
      company: 'Growth Innovations',
      text: 'The co-learning feature helped us train 500+ employees remotely. The platform is intuitive and the support team is exceptional.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      color: '#f97316'
    },
    {
      name: 'Priya Patel',
      position: 'Operations Manager',
      company: 'Global Solutions',
      text: 'Task management and performance reviews are seamless. Real-time analytics help us make data-driven decisions.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      color: '#f97316'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePos({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section style={{
      padding: '60px 20px 100px',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Grid - Orange */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `radial-gradient(circle at 20% 40%, rgba(249,115,22,0.03) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        pointerEvents: 'none'
      }} />

      {/* Floating Gradient Orbs - Orange & Green */}
      <div style={{
        position: 'absolute',
        top: '5%',
        right: '0%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'floatOrb1 20s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(34,197,94,0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'floatOrb2 18s ease-in-out infinite reverse'
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '30%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(249,115,22,0.03) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'floatOrb3 15s ease-in-out infinite'
      }} />

      {/* Floating Particles - Orange */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            background: `radial-gradient(circle, rgba(249,115,22,${Math.random() * 0.4}), rgba(34,197,94,${Math.random() * 0.3}))`,
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `floatParticle ${8 + Math.random() * 12}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            pointerEvents: 'none',
            boxShadow: `0 0 8px rgba(249,115,22,0.3)`
          }}
        />
      ))}

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header - Orange Theme */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'linear-gradient(135deg, #f97316, #22c55e)',
            padding: '0.5rem 1.2rem',
            borderRadius: '3rem',
            marginBottom: '1rem',
            boxShadow: '0 6px 15px rgba(249,115,22,0.2)',
            animation: 'badgePulse 2s ease-in-out infinite'
          }}>
            <FaStar style={{ color: 'white', fontSize: '0.8rem' }} />
            <span style={{ color: 'white', fontWeight: '600', fontSize: '0.7rem', letterSpacing: '1px' }}>CLIENT LOVE</span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            What Our{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f97316, #22c55e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative'
            }}>
              Clients Say
              <span style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, #f97316, #22c55e, transparent)',
                borderRadius: '2px'
              }} />
            </span>
          </h2>
          
          <p style={{
            fontSize: '0.95rem',
            color: '#64748b',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Trusted by thousands of companies worldwide
          </p>
        </div>

        {/* Testimonial Card with 3D Tilt */}
        <div style={{ position: 'relative' }}>
          {/* Navigation Buttons - Orange */}
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} 
            style={{
              position: 'absolute',
              left: '-25px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: '1px solid #eef2ff',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              color: '#f97316',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              zIndex: 10,
              boxShadow: '0 8px 20px rgba(0,0,0,0.05)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f97316';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(249,115,22,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#f97316';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.05)';
            }}
          >
            <FaChevronLeft />
          </button>

          {/* Main Card with 3D Tilt */}
          <div
            ref={cardRef}
            style={{
              background: '#ffffff',
              borderRadius: '2rem',
              padding: '3rem',
              border: '1px solid #eef2ff',
              boxShadow: '0 30px 50px -25px rgba(0,0,0,0.1)',
              transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
              transform: `perspective(1000px) rotateX(${(mousePos.y - 0.5) * 3}deg) rotateY(${(mousePos.x - 0.5) * 3}deg)`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Gradient Border - Orange to Green */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: `linear-gradient(90deg, #f97316, #22c55e, #f97316)`,
              animation: 'borderFlow 3s ease infinite'
            }} />
            
            {/* Floating Sparkles inside card - Orange */}
            {[...Array(8)].map((_, idx) => (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  width: '3px',
                  height: '3px',
                  background: '#f97316',
                  borderRadius: '50%',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: 0,
                  boxShadow: `0 0 6px #f97316`
                }}
              />
            ))}
            
            <div style={{
              width: '60px',
              height: '60px',
              background: 'rgba(249,115,22,0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              animation: 'floatIcon 3s ease-in-out infinite'
            }}>
              <FaQuoteLeft style={{ fontSize: '1.8rem', color: '#f97316', opacity: 0.7 }} />
            </div>
            
            <p style={{
              fontSize: '1.15rem',
              lineHeight: '1.7',
              marginBottom: '2rem',
              color: '#1e293b',
              fontStyle: 'italic',
              fontWeight: '500'
            }}>
              "{testimonials[currentIndex].text}"
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.3rem',
              marginBottom: '1.5rem'
            }}>
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} style={{ color: '#fbbf24', fontSize: '1rem', animation: 'starPulse 1s ease-in-out infinite', animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              <div style={{
                position: 'relative'
              }}>
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: `3px solid #f97316`,
                    boxShadow: `0 8px 20px rgba(249,115,22,0.4)`,
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  width: '18px',
                  height: '18px',
                  background: '#22c55e',
                  borderRadius: '50%',
                  border: '2px solid white',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }} />
              </div>
              <div>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#f97316',
                  marginBottom: '0.2rem'
                }}>
                  {testimonials[currentIndex].name}
                </h4>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                  fontWeight: '500'
                }}>
                  {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)} 
            style={{
              position: 'absolute',
              right: '-25px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: '1px solid #eef2ff',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              color: '#f97316',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              zIndex: 10,
              boxShadow: '0 8px 20px rgba(0,0,0,0.05)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f97316';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(249,115,22,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#f97316';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.05)';
            }}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Indicator - Orange */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.8rem',
          marginTop: '2.5rem'
        }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: i === currentIndex ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                border: 'none',
                background: i === currentIndex ? '#f97316' : '#e2e8f0',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: i === currentIndex ? `0 0 0 3px rgba(249,115,22,0.2)` : 'none'
              }}
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, 25px) scale(1.08); }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 20px) scale(1.05); }
        }
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-80px) translateX(40px);
            opacity: 0;
          }
        }
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 0.8;
            transform: scale(1);
          }
        }
        @keyframes starPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes badgePulse {
          0%, 100% { transform: scale(1); box-shadow: 0 6px 15px rgba(249,115,22,0.2); }
          50% { transform: scale(1.02); box-shadow: 0 8px 20px rgba(249,115,22,0.3); }
        }
        @keyframes borderFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        /* Responsive Styles */
        @media (max-width: 1024px) {
          .testimonials-section {
            padding: 50px 20px 80px !important;
          }
          .testimonial-card {
            padding: 2rem !important;
          }
          .testimonial-text {
            font-size: 1rem !important;
          }
          .nav-btn {
            width: 40px !important;
            height: 40px !important;
            left: -15px !important;
            right: -15px !important;
          }
        }
        
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 40px 20px 60px !important;
          }
          .testimonials-header {
            margin-bottom: 2rem !important;
          }
          .testimonials-title {
            font-size: 1.8rem !important;
          }
          .testimonials-subtitle {
            font-size: 0.85rem !important;
          }
          .testimonial-card {
            padding: 1.5rem !important;
          }
          .testimonial-text {
            font-size: 0.9rem !important;
            margin-bottom: 1.5rem !important;
          }
          .testimonial-image {
            width: 50px !important;
            height: 50px !important;
          }
          .testimonial-name {
            font-size: 1rem !important;
          }
          .testimonial-position {
            font-size: 0.7rem !important;
          }
          .quote-icon {
            width: 45px !important;
            height: 45px !important;
            font-size: 1.2rem !important;
            margin-bottom: 1rem !important;
          }
          .nav-btn {
            width: 35px !important;
            height: 35px !important;
            left: -10px !important;
            right: -10px !important;
          }
          .dots {
            margin-top: 1.5rem !important;
            gap: 0.6rem !important;
          }
          .dot {
            height: 8px !important;
          }
          .dot-active {
            width: 24px !important;
          }
        }
        
        @media (max-width: 480px) {
          .testimonials-section {
            padding: 30px 16px 50px !important;
          }
          .testimonials-title {
            font-size: 1.5rem !important;
          }
          .testimonials-subtitle {
            font-size: 0.75rem !important;
          }
          .testimonial-card {
            padding: 1rem !important;
          }
          .testimonial-text {
            font-size: 0.8rem !important;
            margin-bottom: 1rem !important;
          }
          .quote-icon {
            width: 35px !important;
            height: 35px !important;
            font-size: 1rem !important;
            margin-bottom: 0.8rem !important;
          }
          .rating-star {
            font-size: 0.7rem !important;
          }
          .testimonial-image {
            width: 40px !important;
            height: 40px !important;
          }
          .testimonial-name {
            font-size: 0.9rem !important;
          }
          .testimonial-position {
            font-size: 0.6rem !important;
          }
          .nav-btn {
            width: 30px !important;
            height: 30px !important;
            left: -8px !important;
            right: -8px !important;
          }
          .nav-btn svg {
            width: 12px !important;
            height: 12px !important;
          }
          .dots {
            gap: 0.5rem !important;
            margin-top: 1rem !important;
          }
          .dot {
            height: 6px !important;
          }
          .dot-active {
            width: 20px !important;
          }
          .verification-badge {
            width: 12px !important;
            height: 12px !important;
          }
        }
      `}} />
    </section>
  );
};

export default Testimonials;
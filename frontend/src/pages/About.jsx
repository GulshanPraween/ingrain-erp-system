import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaQuoteLeft, FaPlay } from 'react-icons/fa';
import ProblemSection from '../components/ProblemSection';

const About = () => {
  const products = [
    {
      name: 'Attendance',
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      desc: 'AI-powered facial recognition and real-time tracking',
      color: '#4f46e5',
      link: '/products/attendance'
    },
    {
      name: 'Recruitment',
      icon: '👥',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      desc: 'Smart candidate screening and predictive hiring',
      color: '#06b6d4',
      link: '/products/recruitment'
    },
    {
      name: 'Co-learning',
      icon: '📚',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      desc: 'Interactive courses and personalized learning',
      color: '#10b981',
      link: '/products/colearning'
    },
    {
      name: 'Task',
      icon: '✅',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      desc: 'Smart task assignment and automated workflows',
      color: '#f59e0b',
      link: '/products/task'
    },
    {
      name: 'Performance',
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      desc: '360-degree reviews and AI-powered insights',
      color: '#ef4444',
      link: '/products/performance'
    },
    {
      name: 'Camp',
      icon: '🏕️',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      desc: 'Team building and leadership development programs',
      color: '#8b5cf6',
      link: '/products/camp'
    }
  ];

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
        background: 'radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'pulse 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'pulse 10s ease-in-out infinite reverse'
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header - Same as before */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
            padding: '0.5rem 1.2rem',
            borderRadius: '2rem',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 15px rgba(79,70,229,0.2)'
          }}>
            <span style={{ fontSize: '1rem' }}>✨</span>
            <span style={{ fontWeight: '600', fontSize: '0.85rem', color: 'white' }}>ABOUT INGRAIN AI</span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '1rem',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            We're on a Mission to{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4f46e5, #ec4899, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
              animation: 'gradient 5s ease infinite'
            }}>Connect the World</span>
          </h2>
          
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

        {/* Story + Image - Same as before */}
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
                color: '#4f46e5',
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
                background: '#4f46e5',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(79,70,229,0.3)';
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
                color: '#1e293b',
                padding: '0.8rem 1.5rem',
                borderRadius: '2rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f8fafc';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white';
                e.target.style.transform = 'translateY(0)';
              }}>
                <FaPlay style={{ color: '#4f46e5' }} /> Watch Story
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
              borderLeft: '4px solid #4f46e5'
            }}>
              <FaQuoteLeft style={{ color: '#4f46e5', opacity: 0.5, marginBottom: '0.5rem', fontSize: '1rem' }} />
              <p style={{ color: '#1e293b', fontSize: '0.9rem', fontWeight: '500', fontStyle: 'italic' }}>
                "Technology should empower people, not complicate their work"
              </p>
            </div>
          </div>
        </div>

        {/* Our Products Section - NICHE */}
        <div style={{ marginTop: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              background: '#eef2ff',
              borderRadius: '2rem',
              fontSize: '0.8rem',
              fontWeight: '600',
              color: '#4f46e5',
              marginBottom: '1rem'
            }}>🚀 Our Products</div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: '#0f172a'
            }}>
              Powerful Solutions for Modern Business
            </h2>
            <p style={{ color: '#475569', marginTop: '0.5rem' }}>
              Discover our range of intelligent products designed to transform your business
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {products.map((product, i) => (
              <Link to={product.link} key={i} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
                  border: '1px solid #eef2ff',
                  transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 35px -12px rgba(0,0,0,0.15)';
                  e.currentTarget.style.borderColor = product.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.05)';
                  e.currentTarget.style.borderColor = '#eef2ff';
                }}>
                  <div style={{
                    height: '180px',
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${product.color}10, #ffffff)`
                  }}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: `${product.color}15`,
                      borderRadius: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      fontSize: '1.5rem'
                    }}>
                      {product.icon}
                    </div>
                    <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '0.5rem' }}>{product.name}</h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>{product.desc}</p>
                    <div style={{
                      marginTop: '1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      color: product.color,
                      fontWeight: '500',
                      fontSize: '0.85rem'
                    }}>
                      Learn More <FaArrowRight style={{ fontSize: '0.7rem' }} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <ProblemSection/>

        {/* Mission Statement */}
        <div style={{
          marginTop: '5rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, #f8fafc, #ffffff)',
          borderRadius: '2rem',
          border: '1px solid #eef2ff',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-30px',
            left: '-30px',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(79,70,229,0.1), transparent)',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            right: '-30px',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(6,182,212,0.1), transparent)',
            borderRadius: '50%'
          }} />
          
          <FaQuoteLeft style={{
            fontSize: '2.5rem',
            color: '#4f46e5',
            opacity: 0.2,
            marginBottom: '1rem'
          }} />
          
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
            color: '#1e293b',
            fontStyle: 'italic',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            "We connect the best tools into one platform, creating a unified ecosystem where businesses operate as one system."
          </p>
          
          <div style={{
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '50px',
              height: '2px',
              background: 'linear-gradient(90deg, #4f46e5, transparent)'
            }} />
            <span style={{
              fontWeight: '600',
              color: '#4f46e5'
            }}>
              — Ingrain AI Team
            </span>
            <div style={{
              width: '50px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #4f46e5)'
            }} />
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
      `}} />
    </section>
  );
};

export default About;
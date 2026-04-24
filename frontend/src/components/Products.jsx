import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

  // High-quality HD images for each product - ALL IMAGES RELEVANT TO PRODUCT
  const products = [
    {
      id: 1,
      name: 'Attendance',
      tagline: 'Face Recognition • Real-time',
      desc: 'AI-powered facial recognition with biometric accuracy. Zero-touch attendance tracking.',
      images: [
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
      link: '/products/attendance',
      badge: 'NEW'
    },
    {
      id: 2,
      name: 'Recruitment',
      tagline: 'AI Screening • Smart Hiring',
      desc: 'Intelligent resume parsing, candidate scoring, and predictive hiring analytics.',
      images: [
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/4427815/pexels-photo-4427815.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/5668868/pexels-photo-5668868.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
      link: '/products/recruitment',
      badge: 'SMART'
    },
    {
      id: 3,
      name: 'Co-Working',
      tagline: 'Collaborative Learning',
      desc: 'Interactive courses, live sessions, and personalized learning paths.',
      images: [
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/4427815/pexels-photo-4427815.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/4050303/pexels-photo-4050303.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
      link: '/products/colearning',
      badge: 'INTERACTIVE'
    },
    {
      id: 4,
      name: 'Task Flow',
      tagline: 'Automate Workflows',
      desc: 'Smart task assignment, Kanban boards, and AI-powered priority sorting.',
      images: [
        'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
      link: '/products/task',
      badge: 'AI-POWERED'
    },
    {
      id: 5,
      name: 'Performance',
      tagline: '360° Insights',
      desc: 'Real-time OKRs, feedback loops, and AI-driven performance analytics.',
      images: [
        'https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/5900160/pexels-photo-5900160.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
      link: '/products/performance',
      badge: 'ANALYTICS'
    },
    {
      id: 6,
      name: 'Medical Camp',
      tagline: 'Health Orchestrator',
      desc: 'Camp scheduling, patient records, and real-time health monitoring.',
      images: [
        'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/5214966/pexels-photo-5214966.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
      link: '/products/camp',
      badge: 'CARE'
    }
  ];

  const [imageIndices, setImageIndices] = useState({});

  // Initialize image indices
  useEffect(() => {
    const initialIndices = {};
    products.forEach((product, idx) => {
      initialIndices[idx] = 0;
    });
    setImageIndices(initialIndices);
  }, []);

  // Rotate images every 3 seconds for ALL products (each cycles independently)
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices(prev => {
        const newIndices = { ...prev };
        products.forEach((product, idx) => {
          newIndices[idx] = (prev[idx] + 1) % product.images.length;
        });
        return newIndices;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const updateCarouselTransform = useCallback(() => {
    if (!trackRef.current || !containerRef.current) return;
    const slides = document.querySelectorAll('.product-slide-3d');
    if (slides.length === 0) return;
    
    const containerWidth = containerRef.current.clientWidth;
    const slideWidth = slides[0]?.offsetWidth || 420;
    const gap = 30;
    const totalWidth = slideWidth + gap;
    const centerOffset = (containerWidth / 2) - (slideWidth / 2);
    let offset = -(currentIndex * totalWidth) + centerOffset;
    
    const maxOffset = 0;
    const minOffset = -(totalWidth * (products.length - 1)) + centerOffset;
    offset = Math.max(minOffset, Math.min(maxOffset, offset));
    
    trackRef.current.style.transform = `translateX(${offset}px)`;
  }, [currentIndex, products.length]);

  useEffect(() => {
    updateCarouselTransform();
    const handleResize = () => updateCarouselTransform();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateCarouselTransform]);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);
  }, [products.length]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [startAutoPlay]);

  useEffect(() => {
    updateCarouselTransform();
  }, [currentIndex, updateCarouselTransform]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    startAutoPlay();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    startAutoPlay();
  };

  return (
    <section style={{
      minHeight: '100vh',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      padding: '60px 0 80px'
    }}>
      {/* Decorative Orange/Green Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'linear-gradient(90deg, #f97316, #22c55e, #f97316)'
      }} />
      
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(249,115,22,0.04), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(34,197,94,0.04), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div 
        ref={containerRef} 
        style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 20px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(249,115,22,0.1)',
            padding: '0.4rem 1.2rem',
            borderRadius: '40px',
            marginBottom: '1rem',
            border: '1px solid rgba(249,115,22,0.2)'
          }}>
            <span style={{ fontSize: '0.7rem', fontWeight: '600', color: '#f97316', letterSpacing: '1px' }}>INGRAIN SYSTEMS</span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            Transform Your{' '}
            <span style={{
              background: 'linear-gradient(135deg, #131212, #0d0d0d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Workplace</span>
          </h2>
          
          <p style={{
            color: '#64748b',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Experience the future of workforce management with our intelligent ecosystem
          </p>
        </div>

        {/* Carousel Container - ALL PRODUCTS EQUALLY VISIBLE */}
        <div style={{ position: 'relative', overflow: 'hidden', padding: '20px 0 40px' }}>
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: '30px',
              transition: 'transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
              willChange: 'transform',
              padding: '0 20px'
            }}
          >
            {products.map((product, idx) => {
              const isActive = idx === currentIndex;
              const currentImageIdx = imageIndices[idx] || 0;
              
              return (
                <Link
                  key={product.id}
                  to={product.link}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="product-slide-3d"
                    style={{
                      flex: '0 0 420px',
                      width: '420px',
                      transition: 'all 0.4s ease',
                      transform: isActive ? 'scale(1.02) translateY(-8px)' : 'scale(0.95) translateY(0)',
                      opacity: 1,
                      filter: 'blur(0)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{
                      background: '#ffffff',
                      borderRadius: '28px',
                      overflow: 'hidden',
                      boxShadow: isActive 
                        ? '0 25px 45px -15px rgba(249,115,22,0.25), 0 0 0 2px rgba(249,115,22,0.3)' 
                        : '0 15px 30px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06)',
                      transition: 'all 0.3s ease'
                    }}>
                      {/* Image Container */}
                      <div style={{
                        position: 'relative',
                        background: '#fafaf9',
                        padding: '1.8rem',
                        minHeight: '340px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                      }}>
                        <img
                          src={product.images[currentImageIdx]}
                          alt={product.name}
                          style={{
                            width: '100%',
                            maxWidth: '340px',
                            height: 'auto',
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease',
                            borderRadius: '18px',
                            boxShadow: isActive ? '0 15px 30px -8px rgba(0,0,0,0.15)' : 'none'
                          }}
                        />
                        
                        {/* Image Counter */}
                        <div style={{
                          position: 'absolute',
                          bottom: '15px',
                          right: '15px',
                          background: 'rgba(0,0,0,0.55)',
                          backdropFilter: 'blur(8px)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '20px',
                          fontSize: '0.55rem',
                          fontWeight: '500',
                          color: 'white'
                        }}>
                          {currentImageIdx + 1}/{product.images.length}
                        </div>
                        
                        {/* Badge */}
                        <div style={{
                          position: 'absolute',
                          top: '15px',
                          right: '15px',
                          background: product.gradient,
                          padding: '0.25rem 0.7rem',
                          borderRadius: '20px',
                          fontSize: '0.55rem',
                          fontWeight: '600',
                          color: 'white'
                        }}>
                          {product.badge}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div style={{ padding: '1.5rem 1.8rem 1.8rem', textAlign: 'center', background: '#ffffff' }}>
                        <h3 style={{
                          fontSize: '1.6rem',
                          fontWeight: '700',
                          color: '#f97316',
                          marginBottom: '0.25rem'
                        }}>
                          {product.name}
                        </h3>
                        <p style={{
                          fontSize: '0.7rem',
                          color: '#22c55e',
                          fontWeight: '600',
                          marginBottom: '0.6rem',
                          letterSpacing: '0.3px'
                        }}>
                          {product.tagline}
                        </p>
                        <p style={{
                          fontSize: '0.8rem',
                          color: '#64748b',
                          lineHeight: '1.45',
                          maxWidth: '300px',
                          margin: '0 auto'
                        }}>
                          {product.desc}
                        </p>
                        
                        <div style={{
                          marginTop: '1rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          color: '#f97316',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          Learn More <FaChevronRight size={9} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows - Left and Right Sides */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          right: '10px',
          transform: 'translateY(-50%)',
          display: 'flex',
          justifyContent: 'space-between',
          pointerEvents: 'none',
          zIndex: 10
        }}>
          <button
            onClick={goToPrev}
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              color: '#f97316',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              pointerEvents: 'auto'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f97316';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = '#f97316';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#f97316';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
          >
            <FaChevronLeft size={20} />
          </button>
          
          <button
            onClick={goToNext}
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              color: '#f97316',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              pointerEvents: 'auto'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f97316';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = '#f97316';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#f97316';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          marginTop: '2rem'
        }}>
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: idx === currentIndex ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: idx === currentIndex ? '#f97316' : '#d1d5db',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .product-slide-3d {
            flex: 0 0 380px !important;
            width: 380px !important;
          }
          .product-slide-3d > div > div:first-child {
            min-height: 300px !important;
            padding: 1.5rem !important;
          }
          .product-slide-3d img {
            max-width: 300px !important;
          }
        }
        
        @media (max-width: 768px) {
          .product-slide-3d {
            flex: 0 0 340px !important;
            width: 340px !important;
          }
          .product-slide-3d > div > div:first-child {
            min-height: 280px !important;
            padding: 1rem !important;
          }
          .product-slide-3d img {
            max-width: 260px !important;
          }
          .product-slide-3d h3 {
            font-size: 1.4rem !important;
          }
          button {
            width: 44px !important;
            height: 44px !important;
          }
        }
        
        @media (max-width: 480px) {
          .product-slide-3d {
            flex: 0 0 300px !important;
            width: 300px !important;
          }
          .product-slide-3d > div > div:first-child {
            min-height: 250px !important;
            padding: 0.8rem !important;
          }
          .product-slide-3d img {
            max-width: 240px !important;
          }
          .product-slide-3d h3 {
            font-size: 1.2rem !important;
          }
          .product-slide-3d p {
            font-size: 0.7rem !important;
          }
          button {
            width: 40px !important;
            height: 40px !important;
          }
        }
        
        @media (max-width: 900px) {
          .desktop-arrows {
            display: none !important;
          }
        }
      `}} />
    </section>
  );
};

export default Products;
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaRocket } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdown(false);
    setMobileDropdown(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToTop();
    } else {
      navigate('/');
      setTimeout(() => scrollToTop(), 100);
    }
  };

  const handleSolutionsClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToSection('solutions');
    } else {
      navigate('/');
      setTimeout(() => scrollToSection('solutions'), 100);
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToSection('contact');
    } else {
      navigate('/');
      setTimeout(() => scrollToSection('contact'), 100);
    }
  };

  const productLinks = [
    { name: 'Attendance', path: '/products/attendance', icon: '📊' },
    { name: 'Recruitment', path: '/products/recruitment', icon: '👥' },
    { name: 'Co-Working', path: '/products/colearning', icon: '📚' },
    { name: 'Task', path: '/products/task', icon: '✅' },
    { name: 'Performance', path: '/products/performance', icon: '📈' },
    { name: 'Medical Camp', path: '/products/camp', icon: '🏥' }
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(0,0,0,0.05)',
        transition: 'all 0.4s ease',
        padding: scrolled ? '0.6rem 0' : '1rem 0',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo - Green & Orange Theme */}
          <div onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              position: 'relative'
            }}>
              {/* Logo Icon */}
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(34,197,94,0.3)',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <FaRocket style={{ color: 'white', fontSize: '1.2rem' }} />
              </div>
              
              {/* Logo Text */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.1rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: 'clamp(1.1rem, 4vw, 1.6rem)',
                    fontWeight: '800',
                    color: '#22c55e',
                    letterSpacing: '-0.02em'
                  }}>INGRAIN</span>
                  <span style={{
                    fontSize: 'clamp(1.1rem, 4vw, 1.6rem)',
                    fontWeight: '800',
                    color: '#f97316',
                    letterSpacing: '-0.02em'
                  }}>SYSTEM</span>
                </div>
                <div style={{
                  fontSize: 'clamp(0.45rem, 2vw, 0.55rem)',
                  letterSpacing: '0.5px',
                  color: '#f97316',
                  fontWeight: '500',
                  marginTop: '-2px'
                }}>
                  CONNECT. INTEGRATE. GROW.
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu" style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            alignItems: 'center',
            '@media (max-width: 900px)': {
              display: 'none'
            }
          }}>
            <button onClick={handleHomeClick} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#f97316',
              fontSize: '0.95rem',
              fontWeight: '500',
              padding: '0.5rem 0.8rem',
              transition: 'all 0.3s',
              borderRadius: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#22c55e';
              e.target.style.background = 'rgba(34,197,94,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#f97316';
              e.target.style.background = 'transparent';
            }}>Home</button>
            
            {/* Products Dropdown */}
            <div style={{ position: 'relative' }} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
              <button style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#f97316',
                fontSize: '0.95rem',
                fontWeight: '500',
                padding: '0.5rem 0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'all 0.3s',
                borderRadius: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#22c55e';
                e.target.style.background = 'rgba(34,197,94,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.background = 'transparent';
              }}>
                Products <FaChevronDown style={{ fontSize: '0.7rem', transform: dropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
              </button>
              {dropdown && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'white',
                  minWidth: '220px',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(0,0,0,0.1)',
                  padding: '0.5rem 0',
                  marginTop: '0.5rem',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}>
                  {productLinks.map((product, idx) => (
                    <Link key={idx} to={product.path} style={{ 
                      display: 'block', 
                      width: '100%', 
                      padding: '0.7rem 1.2rem', 
                      textAlign: 'left', 
                      background: 'none', 
                      border: 'none', 
                      cursor: 'pointer', 
                      color: '#374151', 
                      textDecoration: 'none', 
                      fontSize: '0.9rem', 
                      transition: 'all 0.2s' 
                    }} 
                    onMouseEnter={(e) => { 
                      e.target.style.background = '#f0fdf4'; 
                      e.target.style.color = '#22c55e'; 
                    }} 
                    onMouseLeave={(e) => { 
                      e.target.style.background = 'transparent'; 
                      e.target.style.color = '#374151'; 
                    }}>
                      {product.icon} {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <button onClick={handleSolutionsClick} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#f97316',
              fontSize: '0.95rem',
              fontWeight: '500',
              padding: '0.5rem 0.8rem',
              transition: 'all 0.3s',
              borderRadius: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#22c55e';
              e.target.style.background = 'rgba(34,197,94,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#f97316';
              e.target.style.background = 'transparent';
            }}>Solutions</button>
            
            <button onClick={handleContactClick} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#f97316',
              fontSize: '0.95rem',
              fontWeight: '500',
              padding: '0.5rem 0.8rem',
              transition: 'all 0.3s',
              borderRadius: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#22c55e';
              e.target.style.background = 'rgba(34,197,94,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#f97316';
              e.target.style.background = 'transparent';
            }}>Contact</button>
            
            {/* Sign In - Green Color */}
            <Link to="/login" style={{
              textDecoration: 'none',
              padding: '0.5rem 1.2rem',
              borderRadius: '2rem',
              border: '1px solid #e5e7eb',
              color: '#22c55e',
              fontWeight: '600',
              fontSize: '0.9rem',
              transition: 'all 0.3s',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#22c55e';
              e.target.style.backgroundColor = 'rgba(34,197,94,0.05)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#e5e7eb';
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}>Sign In</Link>
            
            <Link to="/signup" style={{
              textDecoration: 'none',
              padding: '0.5rem 1.2rem',
              borderRadius: '2rem',
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              color: 'white',
              fontWeight: '600',
              fontSize: '0.9rem',
              transition: 'all 0.3s',
              boxShadow: '0 2px 8px rgba(34,197,94,0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 16px rgba(34,197,94,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 8px rgba(34,197,94,0.3)';
            }}>Get Started</Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="mobile-menu-icon" style={{ 
            display: 'none', 
            cursor: 'pointer',
            '@media (max-width: 900px)': {
              display: 'block'
            }
          }} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} color="#f97316" /> : <FaBars size={24} color="#f97316" />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'white',
            padding: '1rem',
            borderTop: '1px solid #e5e7eb',
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}>
            <button onClick={handleHomeClick} style={{ 
              display: 'block', 
              width: '100%', 
              padding: '0.8rem', 
              background: 'none', 
              border: 'none', 
              color: '#f97316', 
              textAlign: 'center', 
              cursor: 'pointer', 
              fontSize: '1rem', 
              fontWeight: '500' 
            }}>Home</button>
            
            {/* Mobile Products Dropdown */}
            <div>
              <button onClick={() => setMobileDropdown(!mobileDropdown)} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: '0.8rem',
                background: 'none',
                border: 'none',
                color: '#f97316',
                textAlign: 'center',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                gap: '0.5rem'
              }}>
                Products <FaChevronDown style={{ fontSize: '0.7rem', transform: mobileDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
              </button>
              {mobileDropdown && (
                <div style={{ paddingLeft: '1rem', marginBottom: '0.5rem' }}>
                  {productLinks.map((product, idx) => (
                    <Link key={idx} to={product.path} style={{
                      display: 'block',
                      padding: '0.6rem',
                      textDecoration: 'none',
                      color: '#374151',
                      fontSize: '0.9rem',
                      borderBottom: '1px solid #f0f0f0'
                    }}
                    onClick={() => setIsOpen(false)}>
                      {product.icon} {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <button onClick={handleSolutionsClick} style={{ 
              display: 'block', 
              width: '100%', 
              padding: '0.8rem', 
              background: 'none', 
              border: 'none', 
              color: '#f97316', 
              textAlign: 'center', 
              cursor: 'pointer', 
              fontSize: '1rem', 
              fontWeight: '500' 
            }}>Solutions</button>
            
            <button onClick={handleContactClick} style={{ 
              display: 'block', 
              width: '100%', 
              padding: '0.8rem', 
              background: 'none', 
              border: 'none', 
              color: '#f97316', 
              textAlign: 'center', 
              cursor: 'pointer', 
              fontSize: '1rem', 
              fontWeight: '500' 
            }}>Contact</button>
            
            {/* Sign In - Green Color in Mobile */}
            <Link to="/login" style={{ 
              display: 'block', 
              width: '100%', 
              padding: '0.8rem', 
              textDecoration: 'none', 
              color: '#22c55e', 
              textAlign: 'center', 
              borderTop: '1px solid #e5e7eb', 
              marginTop: '0.5rem',
              fontWeight: '600'
            }}
            onClick={() => setIsOpen(false)}>
              Sign In
            </Link>
            
            <Link to="/signup" style={{ 
              display: 'block', 
              width: '100%', 
              padding: '0.8rem', 
              background: 'linear-gradient(135deg, #22c55e, #16a34a)', 
              textDecoration: 'none', 
              color: 'white', 
              textAlign: 'center', 
              borderRadius: '0.5rem', 
              marginTop: '0.5rem',
              fontWeight: '600'
            }}
            onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </div>
        )}
      </nav>

      {/* Responsive Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          nav > div:first-child {
            padding: 0 1.5rem !important;
          }
          .desktop-menu {
            gap: 1rem !important;
          }
          .desktop-menu a, .desktop-menu button {
            font-size: 0.85rem !important;
            padding: 0.4rem 0.6rem !important;
          }
        }
        
        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-icon {
            display: block !important;
          }
        }
        
        @media (max-width: 768px) {
          nav > div:first-child {
            padding: 0 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          nav > div:first-child > div:first-child > div {
            gap: 0.3rem !important;
          }
          nav > div:first-child > div:first-child > div > div:first-child {
            width: 32px !important;
            height: 32px !important;
          }
          nav > div:first-child > div:first-child > div > div:first-child svg {
            font-size: 0.9rem !important;
          }
          .mobile-menu-icon svg {
            width: 20px !important;
            height: 20px !important;
          }
        }
        
        @media (min-width: 901px) and (max-width: 1200px) {
          .desktop-menu {
            gap: 0.8rem !important;
          }
          .desktop-menu a, .desktop-menu button {
            font-size: 0.8rem !important;
            padding: 0.4rem 0.5rem !important;
          }
        }
      `}} />
    </>
  );
};

export default Navbar;
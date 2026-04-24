import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaHeart, FaRocket, FaArrowUp, FaNewspaper, FaQuestionCircle, FaShieldAlt, FaChartLine, FaUsers, FaTasks, FaClock, FaBook, FaHospital } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const footerLinks = [
    {
      title: 'Product',
      icon: <FaRocket />,
      links: [
        { name: 'Attendance', path: '/products/attendance', icon: <FaClock /> },
        { name: 'Recruitment', path: '/products/recruitment', icon: <FaUsers /> },
        { name: 'Co-learning', path: '/products/colearning', icon: <FaBook /> },
        { name: 'Task', path: '/products/task', icon: <FaTasks /> },
        { name: 'Performance', path: '/products/performance', icon: <FaChartLine /> },
        { name: 'Medical Camp', path: '/products/camp', icon: <FaHospital /> }
      ]
    },
    {
      title: 'Company',
      icon: <FaNewspaper />,
      links: [
        { name: 'About Us', path: '/', onClick: () => scrollToSection('about') },
        { name: 'Careers', path: '/careers' },
        { name: 'Partners', path: '/partners' },
        { name: 'Blog', path: '/blog' }
      ]
    },
    {
      title: 'Resources',
      icon: <FaQuestionCircle />,
      links: [
        { name: 'Documentation', path: '/docs' },
        { name: 'Guides', path: '/guides' },
        { name: 'Support', path: '/support' },
        { name: 'API Reference', path: '/api' }
      ]
    },
    {
      title: 'Legal',
      icon: <FaShieldAlt />,
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Security', path: '/security' },
        { name: 'Cookies', path: '/cookies' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com/ingrain', label: 'Facebook', color: '#1877f2' },
    { icon: <FaTwitter />, url: 'https://twitter.com/ingrain', label: 'Twitter', color: '#1da1f2' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/company/ingrain', label: 'LinkedIn', color: '#0a66c2' },
    { icon: <FaInstagram />, url: 'https://instagram.com/ingrain', label: 'Instagram', color: '#e4405f' },
    { icon: <FaYoutube />, url: 'https://youtube.com/ingrain', label: 'YouTube', color: '#ff0000' }
  ];

  return (
    <footer style={{
      background: '#ffffff',
      color: '#1e293b',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid #eef2ff'
    }}>
      {/* Subtle gradient overlay - light for white bg */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 30%, rgba(34,197,94,0.04) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      
      {/* Orange gradient top border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: 'linear-gradient(90deg, #f97316, #fbbf24, #f97316, #ea580c)',
        backgroundSize: '300% 100%',
        animation: 'gradientMove 3s linear infinite'
      }} />

      {/* Scroll to Top Button - Orange theme */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f97316, #ea580c)',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          boxShadow: '0 4px 15px rgba(249,115,22,0.4)',
          transition: 'all 0.3s',
          zIndex: 100,
          animation: 'float 2s ease-in-out infinite'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(249,115,22,0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(249,115,22,0.4)';
        }}
      >
        <FaArrowUp />
      </button>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 2rem 30px', position: 'relative', zIndex: 2 }}>
        {/* Brand Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 2.5fr',
          gap: '4rem',
          marginBottom: '3rem'
        }}>
          {/* Left Column - Logo & Description */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {/* Icon Box - Green background, White Rocket */}
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 20px rgba(34,197,94,0.25)'
              }}>
                <FaRocket style={{ fontSize: '1.4rem', color: 'white' }} />
              </div>
              <div>
                {/* INGRAIN - Green */}
                <span style={{
                  fontSize: '1.6rem',
                  fontWeight: '800',
                  color: '#22c55e',
                  letterSpacing: '-0.02em'
                }}>INGRAIN</span>
                {/* SYSTEM - Orange gradient */}
                <span style={{
                  fontSize: '1.6rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #f97316, #fbbf24)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginLeft: '0.2rem'
                }}>SYSTEM</span>
              </div>
            </div>
            <p style={{
              color: '#475569',
              lineHeight: '1.7',
              marginBottom: '1.5rem',
              fontSize: '0.95rem'
            }}>
              Empowering businesses through intelligent ERP solutions. Transform your workforce management with our comprehensive platform.
            </p>
            
            {/* Subscribe Input - Orange Theme */}
            <div style={{
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#fef9f0',
              borderRadius: '2rem',
              padding: '0.2rem',
              border: '1px solid #fed7aa'
            }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  padding: '0.8rem 1rem',
                  color: '#1e293b',
                  outline: 'none',
                  fontSize: '0.85rem'
                }}
              />
              <button style={{
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                border: 'none',
                padding: '0.6rem 1.2rem',
                borderRadius: '2rem',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.8rem',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                Subscribe
              </button>
            </div>
            
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    background: '#f1f5f9',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#475569',
                    transition: 'all 0.3s',
                    fontSize: '1rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = social.color;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 8px 15px ${social.color}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f1f5f9';
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Section - ORANGE HEADLINES */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {footerLinks.map((section, i) => (
              <div key={i}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.2rem'
                }}>
                  <span style={{ color: '#f97316', fontSize: '1rem' }}>{section.icon}</span>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#f97316',
                    margin: 0,
                    letterSpacing: '0.5px'
                  }}>
                    {section.title}
                  </h4>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {section.links.map((link, j) => (
                    <li key={j} style={{ marginBottom: '0.7rem' }}>
                      {link.onClick ? (
                        <button
                          onClick={link.onClick}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#64748b',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            transition: 'all 0.3s',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            cursor: 'pointer',
                            padding: 0
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#f97316';
                            e.currentTarget.style.transform = 'translateX(5px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#64748b';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
                        >
                          {link.icon && <span style={{ fontSize: '0.7rem' }}>{link.icon}</span>}
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          to={link.path}
                          style={{
                            color: '#64748b',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            transition: 'all 0.3s',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#f97316';
                            e.currentTarget.style.transform = 'translateX(5px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#64748b';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
                        >
                          {link.icon && <span style={{ fontSize: '0.7rem' }}>{link.icon}</span>}
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid #eef2ff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/privacy" style={{
              color: '#94a3b8',
              textDecoration: 'none',
              fontSize: '0.8rem',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#f97316'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={{
              color: '#94a3b8',
              textDecoration: 'none',
              fontSize: '0.8rem',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#f97316'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
              Terms of Service
            </Link>
            <Link to="/security" style={{
              color: '#94a3b8',
              textDecoration: 'none',
              fontSize: '0.8rem',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#f97316'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
              Security
            </Link>
            <Link to="/sitemap" style={{
              color: '#94a3b8',
              textDecoration: 'none',
              fontSize: '0.8rem',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#f97316'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
              Sitemap
            </Link>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#94a3b8',
            fontSize: '0.8rem'
          }}>
            <span>© {currentYear} Ingrain System.</span>
            <FaHeart style={{ color: '#f97316', fontSize: '0.7rem', animation: 'heartbeat 1.5s ease-in-out infinite' }} />
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          footer > div > div {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          footer > div > div:first-child > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          footer > div > div:last-child {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }
          footer > div > div:last-child > div:first-child {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          footer > div {
            padding: 40px 1.2rem 25px !important;
          }
          footer > div > div:first-child > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 1.8rem !important;
          }
          button[onClick*="scrollToTop"] {
            bottom: 1rem;
            right: 1rem;
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
        
        /* Ensure smooth responsive behavior for brand section */
        @media (max-width: 1024px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2.5rem;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
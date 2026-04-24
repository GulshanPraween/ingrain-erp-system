import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaRocket, FaUsers, FaChartLine, FaTasks, FaClock, FaChalkboardTeacher, FaHospital, FaPlay, FaPause } from 'react-icons/fa';

const ProductDetail = () => {
  const { productId } = useParams();
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);

  const products = {
    attendance: {
      name: 'Attendance Management',
      icon: <FaClock />,
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
      bgImage: '/images/attendencepic.png',
      description: 'AI-powered attendance tracking with facial recognition, real-time monitoring, and automated reports.',
      features: [
        'Facial Recognition Technology',
        'Real-time GPS Tracking',
        'Automated Leave Management',
        'Overtime Calculation',
        'Geofencing Capabilities',
        'Detailed Reports & Analytics'
      ],
      benefits: [
        'Reduce time theft by 90%',
        'Save 10+ hours weekly on manual tracking',
        '100% accurate attendance records',
        'Seamless payroll integration'
      ],
      demoSteps: [
        { title: 'Facial Recognition', desc: 'Camera detects employee face', icon: '👤', detail: 'AI scans and verifies identity' },
        { title: 'Real-time Tracking', desc: 'GPS location captured', icon: '📍', detail: 'Location and time stamp recorded' },
        { title: 'Auto Check-in', desc: 'Attendance marked', icon: '✅', detail: 'System logs check-in time' },
        { title: 'Report Generated', desc: 'Daily report ready', icon: '📊', detail: 'Automated report sent to HR' }
      ]
    },
    recruitment: {
      name: 'Recruitment Management',
      icon: <FaUsers />,
      color: '#22c55e',
      gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
      bgImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      description: 'AI-driven recruitment platform that screens candidates, schedules interviews, and predicts hiring success.',
      features: [
        'AI Resume Parsing',
        'Automated Candidate Screening',
        'Video Interview Scheduling',
        'Offer Letter Management',
        'Onboarding Workflows',
        'Recruitment Analytics'
      ],
      benefits: [
        'Reduce hiring time by 70%',
        'Find better quality candidates',
        'Eliminate manual screening',
        'Data-driven hiring decisions'
      ],
      demoSteps: [
        { title: 'Resume Upload', desc: 'AI parses candidate resume', icon: '📄', detail: 'Extracts skills and experience' },
        { title: 'Smart Screening', desc: 'AI scores candidates', icon: '🤖', detail: 'Matches job requirements' },
        { title: 'Interview Schedule', desc: 'Auto-schedule interviews', icon: '📅', detail: 'Calendar integration' },
        { title: 'Offer Management', desc: 'Generate and send offers', icon: '✉️', detail: 'Digital offer letters' }
      ]
    },
    colearning: {
      name: 'Co-Working Platform',
      icon: <FaChalkboardTeacher />,
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
      bgImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      description: 'Collaborative learning platform with interactive courses, live sessions, quizzes, and certifications.',
      features: [
        'Course Creation Tools',
        'Live Video Classes',
        'Interactive Quizzes',
        'Progress Tracking',
        'Certifications & Badges',
        'Discussion Forums'
      ],
      benefits: [
        'Train employees 3x faster',
        'Track learning progress',
        'Reduce training costs by 60%',
        'Improve knowledge retention'
      ],
      demoSteps: [
        { title: 'Course Access', desc: 'Employee selects course', icon: '📚', detail: 'Personalized learning path' },
        { title: 'Interactive Learning', desc: 'Video lessons & quizzes', icon: '🎥', detail: 'Engaging content' },
        { title: 'Live Sessions', desc: 'Join live classes', icon: '👥', detail: 'Real-time interaction' },
        { title: 'Get Certified', desc: 'Earn certificate', icon: '🏆', detail: 'Share on LinkedIn' }
      ]
    },
    task: {
      name: 'Task Management',
      icon: <FaTasks />,
      color: '#22c55e',
      gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
      bgImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      description: 'Smart task management with AI-powered assignment, priority sorting, and real-time collaboration.',
      features: [
        'AI Task Assignment',
        'Priority Sorting',
        'Deadline Tracking',
        'Team Collaboration',
        'Progress Dashboard',
        'Automated Reminders'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Never miss deadlines',
        'Clear task visibility',
        'Better team coordination'
      ],
      demoSteps: [
        { title: 'Create Task', desc: 'AI suggests priority', icon: '📝', detail: 'Smart task creation' },
        { title: 'Assign Team', desc: 'Auto-assign to members', icon: '👥', detail: 'Based on workload' },
        { title: 'Track Progress', desc: 'Real-time updates', icon: '📊', detail: 'Visual dashboard' },
        { title: 'Task Complete', desc: 'Mark as done', icon: '✅', detail: 'Team notified' }
      ]
    },
    performance: {
      name: 'Performance Reviews',
      icon: <FaChartLine />,
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
      bgImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      description: '360-degree performance reviews with goal tracking, feedback collection, and actionable insights.',
      features: [
        '360-Degree Reviews',
        'Goal Setting & Tracking',
        'Feedback Collection',
        'Performance Analytics',
        'Review Scheduling',
        'Development Plans'
      ],
      benefits: [
        'Improve employee engagement by 50%',
        'Identify top performers',
        'Retain best talent',
        'Data-driven promotions'
      ],
      demoSteps: [
        { title: 'Goal Setting', desc: 'Set SMART goals', icon: '🎯', detail: 'Track progress' },
        { title: 'Feedback Collection', desc: '360-degree feedback', icon: '💬', detail: 'Peer & manager review' },
        { title: 'Performance Review', desc: 'Quarterly review', icon: '📈', detail: 'AI-powered insights' },
        { title: 'Growth Plan', desc: 'Development roadmap', icon: '🚀', detail: 'Career path planning' }
      ]
    },
    camp: {
      name: 'Medical Camp',
      icon: <FaHospital />,
      color: '#22c55e',
      gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
      bgImage: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      description: 'Organize and manage medical camps with patient registration, health checkups, and real-time reporting.',
      features: [
        'Patient Registration',
        'Doctor & Staff Management',
        'Health Checkup Tracking',
        'Medicine Distribution',
        'Report Generation',
        'Appointment Scheduling'
      ],
      benefits: [
        'Provide free healthcare services',
        'Early disease detection',
        'Improve community health',
        'Efficient patient management'
      ],
      demoSteps: [
        { title: 'Patient Registration', desc: 'Quick check-in', icon: '📝', detail: 'Digital records' },
        { title: 'Health Checkup', desc: 'Vitals recorded', icon: '❤️', detail: 'Blood pressure, sugar, etc' },
        { title: 'Doctor Consultation', desc: 'Expert advice', icon: '👨‍⚕️', detail: 'Prescription given' },
        { title: 'Follow-up', desc: 'Schedule next visit', icon: '📅', detail: 'Automated reminders' }
      ]
    }
  };

  const product = products[productId];

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (isPlaying && product) {
        setActiveStep((prev) => (prev + 1) % product.demoSteps.length);
      }
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, product]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let time = 0;

    const setCanvasSize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.3 + 0.1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3
      });
    }

    const animate = () => {
      if (!canvasRef.current) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;
      
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#fff7ed');
      grad.addColorStop(1, '#ffffff');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249,115,22,${p.alpha})`;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.25;
      
      for (let i = 0; i < 4; i++) {
        const angle = (time * 0.8 + i * Math.PI * 2 / 4) % (Math.PI * 2);
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = product?.color || '#f97316';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fillStyle = `${product?.color || '#f97316'}30`;
        ctx.fill();
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [product]);

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', paddingTop: '100px', textAlign: 'center' }}>
        <h1>Product Not Found</h1>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.65)), url(${product.bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      paddingTop: '80px'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '60px 20px 80px',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left Content */}
          <div>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'rgba(249,115,22,0.2)',
              borderRadius: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              fontSize: '2.5rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(249,115,22,0.3)'
            }}>
              {product.icon}
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>{product.name}</h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem', lineHeight: '1.6' }}>{product.description}</p>
            <Link to="/signup" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '2rem',
              fontWeight: '600',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(249,115,22,0.4)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(249,115,22,0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(249,115,22,0.4)';
            }}>
              Get Started <FaArrowRight />
            </Link>
          </div>
          
          {/* Right - Demo Video */}
          <div style={{
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: '2rem',
            padding: '1.5rem',
            border: '1px solid rgba(249,115,22,0.3)'
          }}>
            <div style={{
              position: 'relative',
              borderRadius: '1rem',
              overflow: 'hidden',
              background: '#ffffff',
              aspectRatio: '16/9'
            }}>
              <canvas
                ref={canvasRef}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'block'
                }}
              />
              
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 10,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                padding: '1.5rem',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                minWidth: '220px',
                border: `2px solid ${product.color}30`
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '0.5rem',
                  animation: 'bounce 0.5s ease'
                }}>
                  {product.demoSteps[activeStep].icon}
                </div>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#0f172a',
                  marginBottom: '0.3rem'
                }}>
                  {product.demoSteps[activeStep].title}
                </h4>
                <p style={{
                  fontSize: '0.8rem',
                  color: '#64748b',
                  marginBottom: '0.5rem'
                }}>
                  {product.demoSteps[activeStep].desc}
                </p>
                <p style={{
                  fontSize: '0.7rem',
                  color: product.color,
                  fontWeight: '500'
                }}>
                  {product.demoSteps[activeStep].detail}
                </p>
                <div style={{
                  marginTop: '0.8rem',
                  width: '100%',
                  height: '3px',
                  background: '#eef2ff',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${((activeStep + 1) / product.demoSteps.length) * 100}%`,
                    height: '100%',
                    background: product.color,
                    transition: 'width 0.5s ease'
                  }} />
                </div>
              </div>
              
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '0.6rem',
                zIndex: 10,
                background: 'rgba(0,0,0,0.5)',
                padding: '0.3rem 0.8rem',
                borderRadius: '2rem'
              }}>
                {product.demoSteps.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: i === activeStep ? '20px' : '6px',
                      height: '6px',
                      borderRadius: '3px',
                      background: i === activeStep ? product.color : 'rgba(255,255,255,0.5)',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onClick={() => setActiveStep(i)}
                  />
                ))}
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem',
              gap: '1rem'
            }}>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: isPlaying ? 'rgba(249,115,22,0.3)' : product.color,
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
              >
                {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
              </button>
              <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>Auto-playing demo • {isPlaying ? 'Playing' : 'Paused'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Orange/Green Theme */}
      <section style={{
        padding: '80px 20px',
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(2px)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '4rem'
          }}>
            <div>
              <h2 style={{ 
                fontSize: '2rem', 
                color: '#f97316', 
                marginBottom: '1.5rem',
                fontWeight: '700'
              }}>Key Features</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {product.features.map((feature, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', animation: `fadeIn 0.3s ease ${i * 0.05}s both` }}>
                    <FaCheck style={{ color: '#22c55e', fontSize: '1rem', flexShrink: 0 }} />
                    <span style={{ color: '#1e293b' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ 
                fontSize: '2rem', 
                color: '#f97316', 
                marginBottom: '1.5rem',
                fontWeight: '700'
              }}>Benefits</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {product.benefits.map((benefit, i) => (
                  <div key={i} style={{
                    background: '#ffffff',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    borderLeft: `4px solid ${product.color}`,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    animation: `fadeIn 0.3s ease ${0.3 + i * 0.05}s both`
                  }}>
                    <span style={{ color: '#0f172a', fontWeight: '500' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Orange/Green Theme */}
      <section style={{
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '3rem',
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '2rem',
          border: `1px solid ${product.color}50`
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1rem'
          }}>
            Ready to Transform Your {product.name.split(' ')[0]}?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
            Join thousands of businesses already using Ingrain Systems
          </p>
          <Link to="/signup" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '3rem',
            fontWeight: '600',
            transition: 'all 0.3s',
            boxShadow: `0 8px 20px rgba(249,115,22,0.4)`
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = `0 15px 35px rgba(249,115,22,0.6)`;
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = `0 8px 20px rgba(249,115,22,0.4)`;
          }}>
            Start Free Trial <FaArrowRight />
          </Link>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 968px) {
          .product-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 640px) {
          .demo-popup {
            min-width: 180px !important;
            padding: 1rem !important;
          }
          .demo-popup h4 {
            font-size: 0.9rem !important;
          }
          .demo-popup p {
            font-size: 0.7rem !important;
          }
        }
      `}} />
    </div>
  );
};

export default ProductDetail;
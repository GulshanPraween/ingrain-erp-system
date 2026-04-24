import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaRocket, FaUserLock, FaGlobe, FaSync, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);

  const steps = [
    { icon: <FaUserLock />, title: 'One Login', desc: 'Single Sign-On', color: '#f97316', detail: 'Login once. Access everything.' },
    { icon: <FaGlobe />, title: 'Access Everything', desc: 'Unified Dashboard', color: '#f97316', detail: 'All your tools in one place.' },
    { icon: <FaSync />, title: 'Data Connects', desc: 'Real-time Sync', color: '#f97316', detail: 'Data flows automatically.' },
    { icon: <FaChartLine />, title: 'Complete Visibility', desc: 'Actionable Insights', color: '#f97316', detail: 'See everything clearly.' }
  ];

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

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        alpha: Math.random() * 0.4 + 0.1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4
      });
    }

    const animate = () => {
      if (!canvasRef.current) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;
      
      // Draw gradient background
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#f8fafc');
      grad.addColorStop(1, '#ffffff');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
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
      
      // Draw connection network
      const points = [
        { x: 0.15, y: 0.25, color: '#f97316' },
        { x: 0.45, y: 0.2, color: '#f97316' },
        { x: 0.65, y: 0.4, color: '#22c55e' },
        { x: 0.35, y: 0.65, color: '#f97316' },
        { x: 0.75, y: 0.7, color: '#22c55e' },
        { x: 0.85, y: 0.35, color: '#f97316' }
      ];
      
      // Draw connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const p1 = points[i];
          const p2 = points[j];
          const x1 = p1.x * canvas.width;
          const y1 = p1.y * canvas.height;
          const x2 = p2.x * canvas.width;
          const y2 = p2.y * canvas.height;
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(249,115,22,0.15)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      
      // Draw pulsing points
      points.forEach((point, i) => {
        const x = point.x * canvas.width;
        const y = point.y * canvas.height;
        const pulse = Math.sin(time * 2 + i) * 0.3 + 0.7;
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(x, y, 12 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `${point.color}15`;
        ctx.fill();
        
        // Middle
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = `${point.color}40`;
        ctx.fill();
        
        // Core
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.fill();
      });
      
      // Draw flowing particles between points
      const flowIndex = Math.floor(time * 2) % points.length;
      const nextIndex = (flowIndex + 1) % points.length;
      const p1 = points[flowIndex];
      const p2 = points[nextIndex];
      const t = (time * 2) % 1;
      const x = (p1.x + (p2.x - p1.x) * t) * canvas.width;
      const y = (p1.y + (p2.y - p1.y) * t) * canvas.height;
      
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fillStyle = steps[activeStep].color;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fillStyle = `${steps[activeStep].color}30`;
      ctx.fill();
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    // Auto play steps
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (isPlaying) {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }
    }, 3000);
    
    return () => {
      cancelAnimationFrame(animationId);
      if (intervalRef.current) clearInterval(intervalRef.current);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [isPlaying, steps.length, activeStep]);

  return (
    <section style={{
      padding: '60px 20px 80px',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header - Orange Theme */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            padding: '0.5rem 1.2rem',
            borderRadius: '3rem',
            marginBottom: '1rem',
            boxShadow: '0 6px 15px rgba(249,115,22,0.2)'
          }}>
            <FaRocket style={{ color: 'white', fontSize: '0.8rem' }} />
            <span style={{ color: 'white', fontWeight: '600', fontSize: '0.7rem', letterSpacing: '1px' }}>LIVE DEMO</span>
          </div>
          
          <h5 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '0.5rem'
          }}>
            One Login.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #141414, #0e0f0e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Everything Connected.</span>
          </h5>
          <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
            Watch how it works - Auto playing demo
          </p>
        </div>

        {/* Video Player */}
        <div style={{
          position: 'relative',
          borderRadius: '2rem',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -20px rgba(0,0,0,0.2)',
          background: '#ffffff',
          border: '1px solid #eef2ff'
        }}>
          {/* Canvas Animation */}
          <div style={{
            position: 'relative',
            aspectRatio: '16/9',
            background: 'linear-gradient(135deg, #f8fafc, #ffffff)'
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
            
            {/* Center Animation Card - Orange */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 10,
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(12px)',
              padding: '1.8rem 2.5rem',
              borderRadius: '2rem',
              boxShadow: '0 20px 35px -15px rgba(0,0,0,0.15)',
              border: `2px solid ${steps[activeStep].color}30`,
              minWidth: '320px',
              animation: 'cardGlow 0.5s ease'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: `linear-gradient(135deg, #f97316, #ea580c)`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2.2rem',
                color: 'white',
                boxShadow: `0 12px 25px rgba(249,115,22,0.8)`,
                animation: 'iconPulse 1s ease-in-out infinite'
              }}>
                {steps[activeStep].icon}
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: '#f97316',
                marginBottom: '0.3rem'
              }}>
                {steps[activeStep].title}
              </h3>
              <p style={{
                fontSize: '1rem',
                color: steps[activeStep].color,
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                {steps[activeStep].desc}
              </p>
              <p style={{
                fontSize: '0.85rem',
                color: '#64748b',
                marginBottom: '1rem'
              }}>
                {steps[activeStep].detail}
              </p>
              
              {/* Animated Progress Bar - Orange to Green */}
              <div style={{
                width: '100%',
                height: '4px',
                background: '#eef2ff',
                borderRadius: '2px',
                overflow: 'hidden',
                marginTop: '0.5rem'
              }}>
                <div style={{
                  width: `${((activeStep + 1) / steps.length) * 100}%`,
                  height: '100%',
                  background: `linear-gradient(90deg, #f97316, #22c55e)`,
                  borderRadius: '2px',
                  transition: 'width 0.5s ease'
                }} />
              </div>
            </div>
            
            {/* Floating Step Indicators - Orange */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '0.8rem',
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(8px)',
              padding: '0.6rem 1.2rem',
              borderRadius: '2rem',
              zIndex: 10,
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    width: i === activeStep ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === activeStep ? step.color : '#e2e8f0',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    boxShadow: i === activeStep ? `0 0 0 3px ${step.color}30` : 'none'
                  }}
                  onClick={() => setActiveStep(i)}
                />
              ))}
            </div>
          </div>
          
          {/* Control Bar - Orange Theme */}
          <div style={{
            padding: '0.8rem 1.5rem',
            background: '#ffffff',
            borderTop: '1px solid #eef2ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: isPlaying ? '#fff7ed' : '#f97316',
                border: 'none',
                color: isPlaying ? '#f97316' : 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
                boxShadow: isPlaying ? 'none' : '0 4px 12px rgba(249,115,22,0.3)'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
            </button>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              color: '#94a3b8'
            }}>
              <FaCheckCircle style={{ color: '#22c55e', fontSize: '0.7rem' }} />
              <span>Auto-playing demo • Click pause to stop</span>
            </div>
          </div>
        </div>
        
        {/* Step Tags - Orange Theme */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.8rem',
          marginTop: '1.5rem'
        }}>
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                background: i === activeStep ? `${step.color}10` : '#f8fafc',
                borderRadius: '2rem',
                border: `1px solid ${i === activeStep ? step.color : '#eef2ff'}`,
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onClick={() => setActiveStep(i)}
            >
              <span style={{ color: step.color, fontSize: '0.8rem' }}>{step.icon}</span>
              <span style={{ fontSize: '0.7rem', color: i === activeStep ? step.color : '#64748b' }}>{step.title}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        
        @keyframes cardGlow {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        /* Responsive Styles */
        @media (max-width: 1024px) {
          .demo-container {
            max-width: 95% !important;
          }
          .demo-card {
            min-width: 280px !important;
            padding: 1.5rem !important;
          }
          .demo-icon {
            width: 70px !important;
            height: 70px !important;
            font-size: 1.8rem !important;
          }
          .demo-title {
            font-size: 1.3rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .demo-section {
            padding: 40px 20px 60px !important;
          }
          .demo-header {
            margin-bottom: 1.5rem !important;
          }
          .demo-badge {
            padding: 0.4rem 1rem !important;
            margin-bottom: 0.8rem !important;
          }
          .demo-badge span:first-child {
            font-size: 0.7rem !important;
          }
          .demo-heading {
            font-size: 1.5rem !important;
          }
          .demo-subheading {
            font-size: 0.8rem !important;
          }
          .demo-card {
            min-width: 260px !important;
            padding: 1rem !important;
          }
          .demo-icon {
            width: 55px !important;
            height: 55px !important;
            font-size: 1.4rem !important;
            margin-bottom: 0.8rem !important;
          }
          .demo-title {
            font-size: 1.1rem !important;
            margin-bottom: 0.2rem !important;
          }
          .demo-desc {
            font-size: 0.85rem !important;
            margin-bottom: 0.3rem !important;
          }
          .demo-detail {
            font-size: 0.7rem !important;
            margin-bottom: 0.8rem !important;
          }
          .step-indicators {
            gap: 0.5rem !important;
            padding: 0.4rem 0.8rem !important;
          }
          .step-dot {
            height: 6px !important;
          }
          .step-dot-active {
            width: 20px !important;
          }
          .control-bar {
            padding: 0.5rem 1rem !important;
          }
          .control-btn {
            width: 36px !important;
            height: 36px !important;
          }
          .control-text {
            font-size: 0.65rem !important;
          }
          .step-tags {
            gap: 0.5rem !important;
            margin-top: 1rem !important;
          }
          .step-tag {
            padding: 0.3rem 0.8rem !important;
            font-size: 0.7rem !important;
          }
          .step-tag span:first-child {
            font-size: 0.7rem !important;
          }
          .step-tag span:last-child {
            font-size: 0.65rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .demo-section {
            padding: 30px 16px 50px !important;
          }
          .demo-heading {
            font-size: 1.3rem !important;
          }
          .demo-card {
            min-width: 220px !important;
            padding: 0.8rem !important;
          }
          .demo-icon {
            width: 45px !important;
            height: 45px !important;
            font-size: 1.2rem !important;
            margin-bottom: 0.6rem !important;
          }
          .demo-title {
            font-size: 1rem !important;
          }
          .demo-desc {
            font-size: 0.75rem !important;
          }
          .demo-detail {
            font-size: 0.6rem !important;
          }
          .step-indicators {
            gap: 0.4rem !important;
            padding: 0.3rem 0.6rem !important;
            bottom: 10px !important;
          }
          .step-dot {
            height: 4px !important;
          }
          .step-dot-active {
            width: 16px !important;
          }
          .control-btn {
            width: 32px !important;
            height: 32px !important;
          }
          .control-btn svg {
            width: 12px !important;
            height: 12px !important;
          }
          .control-text {
            font-size: 0.55rem !important;
          }
          .step-tags {
            gap: 0.4rem !important;
          }
          .step-tag {
            padding: 0.2rem 0.6rem !important;
          }
          .step-tag span:first-child {
            font-size: 0.6rem !important;
          }
          .step-tag span:last-child {
            font-size: 0.55rem !important;
          }
        }
      `}} />
    </section>
  );
};

export default DemoVideo;
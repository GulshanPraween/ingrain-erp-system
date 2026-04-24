import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaStar, FaRocket, FaCrown, FaGem, FaArrowRight } from 'react-icons/fa';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      icon: <FaRocket />,
      price: 0,
      priceYearly: 0,
      description: 'Perfect for small teams just getting started',
      features: [
        'Up to 5 users',
        'Attendance Tracking',
        'Task Management',
        'Basic Reports',
        'Email Support',
        'HRMS Basic'
      ],
      buttonText: 'Start Free',
      buttonLink: '/signup',
      popular: false,
      color: '#22c55e',
      gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
      bgLight: '#f0fdf4'
    },
    {
      name: 'Growth',
      icon: <FaCrown />,
      price: 10,
      priceYearly: 96,
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 users',
        'All Starter Features',
        'Advanced Reports',
        'Priority Support',
        'API Access',
        'Recruitment Module',
        '20% Discount on Yearly'
      ],
      buttonText: 'Start Free Trial',
      buttonLink: '/signup',
      popular: false,
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
      bgLight: '#fff7ed'
    },
    {
      name: 'Professional',
      icon: <FaCrown />,
      price: 20,
      priceYearly: 192,
      description: 'For professional organizations',
      features: [
        'Up to 50 users',
        'All Growth Features',
        'Custom Reports',
        '24/7 Support',
        'Performance Reviews',
        'Co-learning Platform',
        '20% Discount on Yearly'
      ],
      buttonText: 'Start Free Trial',
      buttonLink: '/signup',
      popular: true,
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
      bgLight: '#fff7ed'
    },
    {
      name: 'Enterprise',
      icon: <FaGem />,
      price: 0,
      priceYearly: 0,
      description: 'For large organizations',
      features: [
        'Unlimited Users',
        'All Features',
        'Custom Solutions',
        'Dedicated Support',
        'Custom Integration',
        'SLA Guarantee',
        'Contact Sales for Pricing'
      ],
      buttonText: 'Contact Sales',
      buttonLink: '/contact',
      popular: false,
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
      bgLight: '#fff7ed'
    }
  ];

  const getPrice = (plan) => {
    if (plan.name === 'Starter') return 0;
    if (plan.name === 'Enterprise') return 'Contact';
    return billingCycle === 'monthly' ? plan.price : plan.priceYearly;
  };

  const getPriceDisplay = (plan) => {
    if (plan.name === 'Starter') return '$0';
    if (plan.name === 'Enterprise') return 'Custom';
    const price = getPrice(plan);
    return `$${price}`;
  };

  return (
    <section style={{
      padding: '80px 20px 100px',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements - Orange & Green */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 0% 0%, rgba(249,115,22,0.02) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
      
      {/* Floating Gradient Orbs - Orange & Green */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'floatOrb 15s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '5%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(34,197,94,0.03) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'floatOrb 20s ease-in-out infinite reverse'
      }} />

      {/* Floating Particles */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: `rgba(249,115,22,${Math.random() * 0.2})`,
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `floatParticle ${10 + Math.random() * 15}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            pointerEvents: 'none'
          }}
        />
      ))}

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header - Orange Text */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'linear-gradient(135deg, #f97316, #22c55e)',
            padding: '0.5rem 1.2rem',
            borderRadius: '3rem',
            marginBottom: '1rem',
            boxShadow: '0 4px 12px rgba(249,115,22,0.2)'
          }}>
            <FaStar style={{ color: 'white', fontSize: '0.8rem' }} />
            <span style={{ color: 'white', fontWeight: '600', fontSize: '0.7rem', letterSpacing: '1px' }}>PRICING PLANS</span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#f97316',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Simple,{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f97316, #22c55e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Transparent</span> Pricing
          </h2>
          
          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            maxWidth: '550px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </div>

        {/* Billing Toggle - Orange & Green */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setBillingCycle('monthly')}
            style={{
              padding: '0.7rem 2rem',
              borderRadius: '3rem',
              border: 'none',
              background: billingCycle === 'monthly' ? '#f97316' : '#f1f5f9',
              color: billingCycle === 'monthly' ? 'white' : '#475569',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s',
              fontSize: '0.9rem',
              boxShadow: billingCycle === 'monthly' ? '0 4px 12px rgba(249,115,22,0.3)' : 'none'
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            style={{
              padding: '0.7rem 2rem',
              borderRadius: '3rem',
              border: 'none',
              background: billingCycle === 'yearly' ? '#22c55e' : '#f1f5f9',
              color: billingCycle === 'yearly' ? 'white' : '#475569',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s',
              fontSize: '0.9rem',
              position: 'relative',
              boxShadow: billingCycle === 'yearly' ? '0 4px 12px rgba(34,197,94,0.3)' : 'none'
            }}
          >
            Yearly
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-12px',
              background: '#f97316',
              padding: '0.2rem 0.5rem',
              borderRadius: '2rem',
              fontSize: '0.6rem',
              fontWeight: '600',
              color: 'white'
            }}>
              Save 20%
            </span>
          </button>
        </div>

        {/* Pricing Cards - Responsive Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          margin: '0 auto'
        }}>
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                borderRadius: '1.5rem',
                padding: '1.5rem',
                border: plan.popular ? `2px solid #f97316` : '1px solid #eef2ff',
                position: 'relative',
                transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                boxShadow: plan.popular ? `0 20px 35px -12px rgba(249,115,22,0.4)` : '0 4px 12px rgba(0,0,0,0.03)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 30px 45px -20px rgba(249,115,22,0.6)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = plan.popular ? `0 20px 35px -12px rgba(249,115,22,0.4)` : '0 4px 12px rgba(0,0,0,0.03)';
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '20px',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  padding: '0.3rem 1rem',
                  borderRadius: '2rem',
                  fontSize: '0.7rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontWeight: '600',
                  color: 'white',
                  boxShadow: `0 4px 10px rgba(249,115,22,0.4)`
                }}>
                  <FaStar size={10} /> Most Popular
                </div>
              )}
              
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '55px',
                  height: '55px',
                  background: `${plan.color}10`,
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  margin: '0 auto 0.8rem',
                  color: plan.color,
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = plan.gradient;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${plan.color}10`;
                  e.currentTarget.style.color = plan.color;
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  {plan.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#f97316', marginBottom: '0.2rem' }}>{plan.name}</h3>
                <p style={{ color: '#64748b', fontSize: '0.7rem', lineHeight: '1.3' }}>{plan.description}</p>
                <div style={{ marginTop: '0.8rem' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#f97316' }}>{getPriceDisplay(plan)}</span>
                  {plan.name !== 'Starter' && plan.name !== 'Enterprise' && (
                    <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  )}
                  {plan.name === 'Growth' && billingCycle === 'yearly' && (
                    <div style={{ fontSize: '0.65rem', color: '#22c55e', marginTop: '0.2rem' }}>Save $24 yearly</div>
                  )}
                  {plan.name === 'Professional' && billingCycle === 'yearly' && (
                    <div style={{ fontSize: '0.65rem', color: '#22c55e', marginTop: '0.2rem' }}>Save $48 yearly</div>
                  )}
                </div>
              </div>

              <div style={{
                borderTop: '1px solid #f1f5f9',
                paddingTop: '1rem',
                marginBottom: '1rem',
                flex: 1
              }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        marginBottom: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: '#334155',
                        fontSize: '0.75rem'
                      }}
                    >
                      <FaCheck style={{ color: '#22c55e', fontSize: '0.65rem', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={plan.buttonLink}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  width: '100%',
                  padding: '0.7rem',
                  background: plan.popular ? 'linear-gradient(135deg, #f97316, #ea580c)' : '#f8fafc',
                  color: plan.popular ? 'white' : '#f97316',
                  textDecoration: 'none',
                  borderRadius: '2rem',
                  fontWeight: '600',
                  transition: 'all 0.3s',
                  border: plan.popular ? 'none' : '1px solid rgba(249,115,22,0.2)',
                  fontSize: '0.8rem'
                }}
                onMouseEnter={(e) => {
                  if (plan.popular) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = `0 8px 20px rgba(249,115,22,0.6)`;
                  } else {
                    e.target.style.background = 'linear-gradient(135deg, #f97316, #ea580c)';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.popular) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  } else {
                    e.target.style.background = '#f8fafc';
                    e.target.style.color = '#f97316';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                {plan.buttonText} <FaArrowRight size={10} />
              </Link>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div style={{
          marginTop: '3rem',
          padding: '1.2rem',
          background: '#f8fafc',
          borderRadius: '1.5rem',
          border: '1px solid #eef2ff',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.3rem' }}>⭐</span>
            <span style={{ fontWeight: '700', color: '#f97316' }}>4.9/5</span>
            <span style={{ color: '#64748b', fontSize: '0.75rem' }}>from 500+ reviews</span>
          </div>
          <div style={{ width: '1px', height: '20px', background: '#e2e8f0' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.3rem' }}>🏆</span>
            <span style={{ fontWeight: '700', color: '#22c55e' }}>#1 ERP Platform</span>
            <span style={{ color: '#64748b', fontSize: '0.75rem' }}>2024</span>
          </div>
          <div style={{ width: '1px', height: '20px', background: '#e2e8f0' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.3rem' }}>🔒</span>
            <span style={{ fontWeight: '700', color: '#f97316' }}>14-Day Free Trial</span>
            <span style={{ color: '#64748b', fontSize: '0.75rem' }}>No credit card</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }
        
        @keyframes floatParticle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100px) translateX(30px); opacity: 0; }
        }
        
        /* Desktop */
        @media (min-width: 1200px) {
          .pricing-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        
        /* Tablet */
        @media (max-width: 1024px) and (min-width: 769px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          .pricing-section {
            padding: 60px 20px 80px !important;
          }
        }
        
        /* Mobile */
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            max-width: 400px !important;
            margin: 0 auto !important;
          }
          .pricing-section {
            padding: 50px 20px 70px !important;
          }
          .pricing-title {
            font-size: 2rem !important;
          }
          .pricing-subtitle {
            font-size: 0.9rem !important;
          }
          .toggle-btn {
            padding: 0.5rem 1.5rem !important;
            font-size: 0.85rem !important;
          }
          .pricing-card {
            padding: 1.5rem !important;
          }
          .trust-badge {
            flex-direction: column !important;
            gap: 0.8rem !important;
          }
          .separator {
            display: none !important;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .pricing-section {
            padding: 40px 16px 60px !important;
          }
          .pricing-title {
            font-size: 1.5rem !important;
          }
          .pricing-subtitle {
            font-size: 0.8rem !important;
          }
          .pricing-card {
            padding: 1.2rem !important;
          }
          .pricing-icon {
            width: 50px !important;
            height: 50px !important;
            font-size: 1.4rem !important;
          }
          .pricing-plan-name {
            font-size: 1.1rem !important;
          }
          .pricing-price {
            font-size: 2rem !important;
          }
          .pricing-features li {
            font-size: 0.7rem !important;
          }
          .pricing-button {
            padding: 0.6rem !important;
            font-size: 0.75rem !important;
          }
          .toggle-btn {
            padding: 0.4rem 1.2rem !important;
            font-size: 0.75rem !important;
          }
          .trust-badge {
            padding: 1rem !important;
          }
          .trust-badge span:first-child {
            font-size: 1.1rem !important;
          }
          .trust-badge span:nth-child(2) {
            font-size: 0.75rem !important;
          }
        }
      `}} />
    </section>
  );
};

export default Pricing;
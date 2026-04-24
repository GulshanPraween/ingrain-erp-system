import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProblemSection from '../components/ProblemSection';
import Products from '../components/Products';
import Features from '../components/Features';
import DemoVideo from '../components/DemoVideo';
import WhyChoose from '../components/WhyChoose';
import Solutions from '../components/Solutions';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home = () => {
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }, 100);
        }
      }
    };
    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="problem"><ProblemSection /></section>
      <section id="products"><Products /></section>
      <section id="features"><Features /></section>
        <section id="demo"><DemoVideo /></section>
      <section id="whychoose"><WhyChoose /></section>
      <section id="solutions"><Solutions /></section>
      <section id="pricing"><Pricing /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><ContactForm /></section>
    </div>
  );
};

export default Home;
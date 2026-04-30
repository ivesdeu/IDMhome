import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Works } from '../components/Works';
import { SmartSteps } from '../components/SmartSteps';
import { Team } from '../components/Team';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Testimonials } from '../components/Testimonials';
import { FooterCTA } from '../components/FooterCTA';
import { Footer } from '../components/Footer';

export function HomePage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#core-capabilities') {
      document.getElementById('core-capabilities')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Works />
      <SmartSteps />
      <Team />
      <Pricing />
      <FAQ />
      {false && <Testimonials />}
      <FooterCTA />
      <Footer />
    </div>
  );
}

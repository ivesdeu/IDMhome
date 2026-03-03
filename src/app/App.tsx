import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Collaborations } from './components/Collaborations';
import { Services } from './components/Services';
import { Works } from './components/Works';
import { SmartSteps } from './components/SmartSteps';
import { Team } from './components/Team';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { FooterCTA } from './components/FooterCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Collaborations />
      <Services />
      <Works />
      <SmartSteps />
      <Team />
      <Pricing />
      <FAQ />
      <Testimonials />
      <FooterCTA />
      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SectionLabel } from '../components/SectionLabel';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const services = [
  'Website Design & Development',
  'Paid Media Management',
  'Search Engine Optimization',
  'Branding & Messaging',
  'Business Intelligence & Dashboards',
  'Growth Consulting',
];

const budgets = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $7,500',
  '$7,500 – $15,000',
  '$15,000+',
];

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const empty: FormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact — Ives Deutschmann Marketing';
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navbar />

      {/* Hero */}
      <section className="w-full pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>Contact</SectionLabel>
            <h1 className="font-body text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 max-w-2xl leading-[1.08] tracking-tight uppercase">
              Let's Build Something.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Tell us about your business and what you're looking to achieve. We'll come back with a clear plan and a straight answer on whether we're the right fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main grid */}
      <section className="w-full pb-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">

          {/* Form */}
          <motion.div
            className="md:col-span-2 bg-white border border-border rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="text-5xl mb-6">✓</span>
                <h2 className="font-headline text-3xl text-primary mb-3">Message received.</h2>
                <p className="text-muted-foreground max-w-sm">
                  Thanks for reaching out. We review every submission and will be in touch within one business day.
                </p>
                <button
                  onClick={() => { setForm(empty); setSubmitted(false); }}
                  className="mt-8 text-sm font-semibold text-cta hover:text-cta-hover transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-body text-xl font-bold uppercase tracking-wide text-primary">
                    Start the conversation
                  </h2>
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1.5">
                      Full Name <span className="text-cta">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-border focus:outline-none focus:ring-2 focus:ring-cta/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1.5">
                      Email <span className="text-cta">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@yourbusiness.com"
                      className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-border focus:outline-none focus:ring-2 focus:ring-cta/30 transition"
                    />
                  </div>
                </div>

                {/* Company + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1.5">
                      Company / Business
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-border focus:outline-none focus:ring-2 focus:ring-cta/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (000) 000-0000"
                      className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-border focus:outline-none focus:ring-2 focus:ring-cta/30 transition"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1.5">
                    Service you're interested in <span className="text-cta">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-cta/30 transition appearance-none"
                  >
                    <option value="" disabled>Select a service…</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                    Monthly budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map(b => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setForm(prev => ({ ...prev, budget: b }))}
                        className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
                          form.budget === b
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-muted/30 border-border text-muted-foreground hover:border-primary hover:text-primary'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1.5">
                    Tell us about your goals <span className="text-cta">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you trying to achieve? What's working, what isn't?"
                    className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-border focus:outline-none focus:ring-2 focus:ring-cta/30 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-cta hover:bg-cta-hover text-white font-semibold text-sm uppercase tracking-wide transition-colors"
                >
                  Send Message
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  We respond to every message within one business day.
                </p>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">

            {/* Contact details */}
            <motion.div
              className="bg-white border border-border rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold text-primary mb-6">Contact Details</h3>
              <ul className="space-y-5 text-sm font-body">
                <li className="flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-cta shrink-0" strokeWidth={2} />
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-0.5">Email</div>
                    <a
                      href="mailto:contact@ivesdeu.com"
                      className="text-primary hover:text-cta transition-colors font-medium block"
                    >
                      contact@ivesdeu.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-cta shrink-0" strokeWidth={2} />
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-0.5">Phone</div>
                    <a href="tel:+12246025112" className="text-primary hover:text-cta transition-colors font-medium block">
                      +1 (224) 602-5112
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3.5">
                  <MapPin className="w-5 h-5 text-cta shrink-0" strokeWidth={2} />
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-0.5">Location</div>
                    <span className="text-primary font-medium block">Milwaukee, WI 53211</span>
                  </div>
                </li>
                <li className="flex items-center gap-3.5">
                  <Clock className="w-5 h-5 text-cta shrink-0" strokeWidth={2} />
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-0.5">Hours</div>
                    <span className="text-primary font-medium block">Mon – Fri, 9am – 6pm CST</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Book a call CTA */}
            <motion.div
              className="relative isolate rounded-2xl overflow-hidden p-8 flex flex-col gap-4 font-body"
              style={{ background: 'var(--cta)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span
                className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none font-headline text-[clamp(4rem,18vw,8rem)] uppercase leading-none"
                style={{ color: 'rgba(255, 255, 255, 0.07)' }}
                aria-hidden
              >
                CALL
              </span>
              <p
                className="relative z-10 text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'rgba(255, 255, 255, 0.88)' }}
              >
                Prefer to talk?
              </p>
              <h3
                className="relative z-10 font-headline text-3xl uppercase leading-tight"
                style={{ color: '#ffffff' }}
              >
                Book a strategy call
              </h3>
              <p
                className="relative z-10 text-sm leading-relaxed max-w-sm"
                style={{ color: 'rgba(255, 255, 255, 0.92)' }}
              >
                30 minutes. No pitch. Just an honest look at where your business is and what growth could look like.
              </p>
              <a
                href="#contact-form"
                className="relative z-10 mt-2 inline-flex items-center gap-2 self-start px-6 py-3 rounded-full bg-white font-semibold text-sm hover:bg-white/90 transition-colors"
                style={{ color: 'var(--cta)' }}
              >
                Schedule Now <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={2} />
              </a>
            </motion.div>

            {/* What to expect */}
            <motion.div
              className="bg-white border border-border rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="font-semibold text-primary mb-5">What to expect</h3>
              <ol className="space-y-4">
                {[
                  ['We review your submission', 'Within one business day we read every message in full.'],
                  ['We respond with a plan', 'You get a clear sense of scope, timeline, and fit — not a sales deck.'],
                  ['We get to work', "If there's alignment, we move fast. No long onboarding, no bureaucracy."],
                ].map(([title, body], i) => (
                  <li key={i} className="flex gap-4 items-start font-body">
                    <span
                      className="shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(255, 77, 46, 0.12)', color: 'var(--cta)' }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-primary">{title}</p>
                      <p className="text-sm text-muted-foreground">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

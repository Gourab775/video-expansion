'use client';

import { useState } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientCard from '@/components/ui/GradientCard';
import { motion } from 'framer-motion';

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    title: 'Email Us',
    detail: 'hello@pixelforge.agency',
    sub: 'We respond within 24 hours',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
    title: 'Call Us',
    detail: '+1 (555) 123-4567',
    sub: 'Mon-Fri, 9am-6pm PST',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    title: 'Visit Us',
    detail: '123 Creative Ave, Los Angeles',
    sub: 'CA 90001, United States',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <SectionReveal>
            <SectionHeading
              badge="Get in Touch"
              title="Let's Start"
              highlight="Something"
              description="Ready to bring your vision to life? We'd love to hear from you."
            />
          </SectionReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {CONTACT_INFO.map((info, i) => (
              <SectionReveal key={info.title} delay={i * 0.1}>
                <GradientCard className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 text-emerald-400" style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.15)' }}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                  <p className="text-white/80 font-medium mb-1">{info.detail}</p>
                  <p className="text-white/40 text-sm">{info.sub}</p>
                </GradientCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="relative pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <SectionReveal>
              <div className="rounded-2xl p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(5,150,105,0.15)' }}>
                      <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-white/50">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-white/60 mb-2">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/30 outline-none transition-all duration-300 focus:ring-2 focus:ring-emerald-500/30"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/60 mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/30 outline-none transition-all duration-300 focus:ring-2 focus:ring-emerald-500/30"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/60 mb-2">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-emerald-500/30"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        <option value="" className="bg-black">Select a service</option>
                        <option value="video" className="bg-black">Video Production</option>
                        <option value="photo" className="bg-black">Photography</option>
                        <option value="creative" className="bg-black">Creative Direction</option>
                        <option value="other" className="bg-black">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/60 mb-2">Message</label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/30 outline-none transition-all duration-300 focus:ring-2 focus:ring-emerald-500/30 resize-none"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(5,150,105,0.4)]"
                      style={{ background: 'linear-gradient(135deg,#059669,#10b981)' }}
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </SectionReveal>

            {/* Map / Office Info */}
            <SectionReveal delay={0.2}>
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-full" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                    alt="Our office location"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h4 className="text-lg font-bold text-white mb-4">Our Studio</h4>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    Located in the heart of Los Angeles, our studio is equipped with the latest
                    production technology. Visit us for a tour and let&apos;s discuss your next project.
                  </p>
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Studio Hours</div>
                      <div className="text-sm text-white/70">Mon - Fri: 9am - 6pm</div>
                    </div>
                    <div className="w-[1px] h-10 bg-white/10" />
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Emergency</div>
                      <div className="text-sm text-white/70">24/7 Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

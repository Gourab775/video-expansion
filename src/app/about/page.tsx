'use client';

import PageTransition from '@/components/ui/PageTransition';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientCard from '@/components/ui/GradientCard';
import StaggerChildren, { StaggerItem } from '@/components/ui/StaggerChildren';
import { motion } from 'framer-motion';

const VALUES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: 'Creativity Without Limits',
    desc: 'We push boundaries and challenge conventions to deliver content that stands out.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Speed & Efficiency',
    desc: 'Fast turnaround without compromising quality. We respect your deadlines.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Quality First',
    desc: 'Every pixel, every frame, every sound — crafted to perfection.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
      </svg>
    ),
    title: 'Client Partnership',
    desc: 'We work as an extension of your team, not just a vendor.',
  },
];

const TEAM = [
  { name: 'Alex Rivera', role: 'Founder & Creative Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
  { name: 'Sarah Chen', role: 'Head of Production', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop' },
  { name: 'Marcus Johnson', role: 'Lead Cinematographer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Elena Vasquez', role: 'Post-Production Lead', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop' },
];

const TIMELINE = [
  { year: '2018', title: 'The Beginning', desc: 'PixelForge started as a two-person team with a passion for visual storytelling.' },
  { year: '2019', title: 'First Major Client', desc: 'Landed our first enterprise project and expanded the team to 5 members.' },
  { year: '2021', title: 'Studio Launch', desc: 'Opened our dedicated production studio with state-of-the-art equipment.' },
  { year: '2023', title: 'Global Reach', desc: 'Expanded to serve clients across 15+ countries worldwide.' },
  { year: '2025', title: 'Award Winning', desc: 'Recognized with multiple industry awards for outstanding creative work.' },
  { year: '2026', title: 'New Horizons', desc: 'Pushing into AI-driven content and immersive experiences.' },
];

const STATS = [
  { number: '250+', label: 'Projects Delivered' },
  { number: '80+', label: 'Happy Clients' },
  { number: '15+', label: 'Awards Won' },
  { number: '8+', label: 'Years Experience' },
];

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <SectionReveal>
            <SectionHeading
              badge="About Us"
              title="We Create"
              highlight="Memorable"
              description="PixelForge is a creative video agency specializing in high-end visual content for brands worldwide."
            />
          </SectionReveal>
        </div>
      </section>

      {/* Story */}
      <section className="relative pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                  <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop" alt="Our studio" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-3xl font-bold text-emerald-400">8+</div>
                  <div className="text-sm text-white/60">Years of Excellence</div>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                Born from a passion for <span className="text-emerald-400">visual storytelling</span>
              </h3>
              <p className="text-lg text-white/50 leading-relaxed mb-6">
                What started as a small studio with big dreams has grown into a full-service creative agency.
                We believe every brand has a story worth telling, and every story deserves to be told beautifully.
              </p>
              <p className="text-lg text-white/50 leading-relaxed mb-8">
                Our team of filmmakers, photographers, and creative minds work collaboratively to bring your vision to life.
                We combine artistic vision with technical expertise to create content that resonates and inspires.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {['Award Winning', '24/7 Support', 'Fast Delivery', 'Global Clients'].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.15)' }}>
                      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <SectionHeading badge="Our Values" title="What We" highlight="Believe In" description="The principles that guide everything we do." />
          </SectionReveal>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <StaggerItem key={v.title}>
                <GradientCard className="p-8 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-emerald-400" style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.15)' }}>
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </GradientCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <SectionHeading badge="Our Team" title="Meet The" highlight="Minds" description="The talented people behind every project." />
          </SectionReveal>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((t) => (
              <StaggerItem key={t.name}>
                <div className="group text-center">
                  <div className="relative rounded-2xl overflow-hidden aspect-square mb-4" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{t.name}</h3>
                  <p className="text-sm text-emerald-400/70">{t.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <SectionHeading badge="Our Journey" title="Our" highlight="Timeline" />
          </SectionReveal>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-emerald-500/30 via-emerald-500/10 to-transparent" />
            {TIMELINE.map((t, i) => (
              <SectionReveal key={t.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-emerald-500 bg-black z-10" />
                  <div className="pl-20 md:pl-0 md:w-1/2">
                    <div className="text-sm font-bold text-emerald-400 mb-1">{t.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{t.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-12 md:p-16" style={{ background: 'linear-gradient(135deg,rgba(5,150,105,0.08),rgba(16,185,129,0.03))', border: '1px solid rgba(5,150,105,0.1)' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{s.number}</div>
                  <div className="text-sm text-white/50 font-medium">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

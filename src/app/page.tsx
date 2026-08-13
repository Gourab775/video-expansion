'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { motion } from 'framer-motion';
import GradientCard from '@/components/ui/GradientCard';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import StaggerChildren, { StaggerItem } from '@/components/ui/StaggerChildren';

const natureMedia = {
  video: {
    src: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
    poster: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=1280',
    background: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1920&auto=format&fit=crop',
    title: 'Craft Visual Stories',
    date: 'Creative Agency',
    scrollToExpand: 'Scroll to Explore',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1280&auto=format&fit=crop',
    background: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1920&auto=format&fit=crop',
    title: 'Visual Excellence',
    date: 'Photography',
    scrollToExpand: 'Scroll to Explore',
  },
};

const FEATURES = [
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>,
    title: 'Video Production',
    desc: 'Cinematic storytelling with cutting-edge equipment and creative direction.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" /></svg>,
    title: 'Photography',
    desc: 'Stunning visual narratives captured with precision and artistic vision.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>,
    title: 'Creative Direction',
    desc: 'Strategic vision and artistic guidance for compelling visual experiences.',
  },
];

const PORTFOLIO = [
  { image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop', title: 'Mountain Dreams', cat: 'Commercial' },
  { image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop', title: 'Forest Whispers', cat: 'Documentary' },
  { image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop', title: 'Alpine Heights', cat: 'Brand Film' },
  { image: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=800&auto=format&fit=crop', title: 'Ocean Serenity', cat: 'Music Video' },
];

const STATS = [
  { number: '250+', label: 'Projects Delivered' },
  { number: '80+', label: 'Happy Clients' },
  { number: '15+', label: 'Awards Won' },
  { number: '8+', label: 'Years Experience' },
];

const TESTIMONIALS = [
  { quote: 'PixelForge transformed our brand vision into a stunning visual reality. Their attention to detail is unmatched.', name: 'Sarah Mitchell', role: 'CEO, TechVision', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop' },
  { quote: 'Working with their team was an absolute pleasure. The final product exceeded all our expectations.', name: 'David Chen', role: 'Marketing Director, BloomCo', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop' },
  { quote: 'Professional, creative, and incredibly talented. They delivered our project on time and beyond our vision.', name: 'Emily Rodriguez', role: 'Founder, Wanderlust', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop' },
];

export default function Home() {
  const [mediaType, setMediaType] = useState<'video' | 'image'>('video');
  const [toggleVisible, setToggleVisible] = useState(true);
  const currentMedia = natureMedia[mediaType];

  useEffect(() => {
    const onScroll = () => setToggleVisible(window.scrollY < 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      {/* ========== MEDIA TOGGLE ========== */}
      <div
        className="fixed top-24 left-1/2 -translate-x-1/2 z-50 transition-all duration-500"
        style={{ opacity: toggleVisible ? 1 : 0, pointerEvents: toggleVisible ? 'auto' : 'none' }}
      >
        <div
          className="flex items-center gap-1 p-1 rounded-full"
          style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
        >
          <button
            onClick={() => setMediaType('video')}
            className="relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              color: mediaType === 'video' ? '#fff' : 'rgba(255,255,255,0.4)',
              background: mediaType === 'video' ? 'linear-gradient(135deg,rgba(5,150,105,0.4),rgba(16,185,129,0.4))' : 'transparent',
              boxShadow: mediaType === 'video' ? '0 0 20px rgba(5,150,105,0.2)' : 'none',
            }}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              Video
            </span>
          </button>
          <button
            onClick={() => setMediaType('image')}
            className="relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              color: mediaType === 'image' ? '#fff' : 'rgba(255,255,255,0.4)',
              background: mediaType === 'image' ? 'linear-gradient(135deg,rgba(5,150,105,0.4),rgba(16,185,129,0.4))' : 'transparent',
              boxShadow: mediaType === 'image' ? '0 0 20px rgba(5,150,105,0.2)' : 'none',
            }}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
              Image
            </span>
          </button>
        </div>
      </div>

      {/* ========== HERO ========== */}
      <section id="home">
        <ScrollExpandMedia
          mediaType={mediaType}
          mediaSrc={currentMedia.src}
          posterSrc={'poster' in currentMedia ? currentMedia.poster : undefined}
          bgImageSrc={currentMedia.background}
          title={currentMedia.title}
          date={currentMedia.date}
          scrollToExpand={currentMedia.scrollToExpand}
        >
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-[2px] h-full bg-gradient-to-b from-emerald-400/60 via-emerald-500/40 to-transparent" />
              <div className="pl-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white/90 tracking-tight">
                  Premium Video Agency
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-6 text-white/60 font-light">
                  We craft immersive visual experiences that captivate audiences and elevate brands.
                  Every frame tells a story, every project pushes creative boundaries.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-white/50 font-light">
                  From concept to final delivery, our team ensures every detail is polished to perfection.
                </p>
              </div>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-emerald-400/50" />
                ))}
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </div>
        </ScrollExpandMedia>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <SectionHeading
              badge="What We Do"
              title="Services That"
              highlight="Inspire"
              description="We blend artistry with technology to deliver visual content that stands out."
            />
          </SectionReveal>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <Link href="/services">
                  <GradientCard className="p-8 h-full">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-emerald-400" style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.15)' }}>
                      {f.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{f.title}</h3>
                    <p className="text-white/50 leading-relaxed">{f.desc}</p>
                  </GradientCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <SectionReveal>
            <div className="text-center mt-12">
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-emerald-400 transition-all duration-300 hover:bg-emerald-400/10" style={{ border: '1px solid rgba(5,150,105,0.2)' }}>
                View All Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== PORTFOLIO ========== */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <SectionHeading
              badge="Our Work"
              title="Featured"
              highlight="Projects"
              description="A selection of our finest work — where creativity meets technical excellence."
            />
          </SectionReveal>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PORTFOLIO.map((item) => (
              <StaggerItem key={item.title}>
                <Link href="/work">
                  <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">{item.cat}</span>
                      <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <SectionReveal>
            <div className="text-center mt-12">
              <Link href="/work" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-emerald-400 transition-all duration-300 hover:bg-emerald-400/10" style={{ border: '1px solid rgba(5,150,105,0.2)' }}>
                View All Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== STATS ========== */}
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

      {/* ========== TESTIMONIALS ========== */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <SectionHeading
              badge="Testimonials"
              title="What Clients"
              highlight="Say"
              description="Don't just take our word for it — hear from the brands we've helped."
            />
          </SectionReveal>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <GradientCard className="p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/60 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-xs text-white/40">{t.role}</div>
                    </div>
                  </div>
                </GradientCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1920&auto=format&fit=crop" alt="Nature" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(5,150,105,0.1),transparent)' }} />
            <div className="relative z-10 text-center py-20 px-8">
              <SectionReveal>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                  Ready to Create <span className="text-emerald-400">Something</span> Amazing?
                </h2>
                <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
                  Let&apos;s bring your vision to life. Get in touch and let&apos;s start
                  crafting your next masterpiece together.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white transition-all duration-300 hover:scale-105"
                    style={{ background: 'linear-gradient(135deg,#059669,#10b981)', boxShadow: '0 4px 20px rgba(5,150,105,0.4)' }}
                  >
                    Start a Project
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/work"
                    className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white/70 hover:text-white transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    View Our Work
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

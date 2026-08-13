'use client';

import { useState } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', 'Video', 'Photography', 'Brand Film', 'Commercial'];

const PROJECTS = [
  { image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop', title: 'Mountain Dreams', cat: 'Commercial', year: '2026', client: 'Alpine Co.' },
  { image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop', title: 'Forest Whispers', cat: 'Video', year: '2025', client: 'EcoVista' },
  { image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop', title: 'Alpine Heights', cat: 'Brand Film', year: '2026', client: 'Peak Outdoor' },
  { image: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=800&auto=format&fit=crop', title: 'Ocean Serenity', cat: 'Photography', year: '2025', client: 'BlueHorizon' },
  { image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop', title: 'Tropical Escape', cat: 'Commercial', year: '2026', client: 'Wanderlust Travel' },
  { image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop', title: 'Green Valley', cat: 'Video', year: '2025', client: 'NatureFirst' },
  { image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop', title: 'Golden Hour', cat: 'Photography', year: '2026', client: 'Sunset Studios' },
  { image: 'https://images.unsplash.com/photo-1465056836900-8f1e940b3e7c?q=80&w=800&auto=format&fit=crop', title: 'Wild Paths', cat: 'Brand Film', year: '2025', client: 'TrailBlazer' },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === activeFilter);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <SectionReveal>
            <SectionHeading
              badge="Our Work"
              title="Featured"
              highlight="Projects"
              description="A curated selection of our finest work — where creativity meets technical excellence."
            />
          </SectionReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="relative pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                  style={{
                    background: activeFilter === cat ? 'linear-gradient(135deg,#059669,#10b981)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${activeFilter === cat ? 'transparent' : 'rgba(255,255,255,0.08)'}`,
                    color: activeFilter === cat ? '#fff' : 'rgba(255,255,255,0.5)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">{item.cat}</span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-white/40">
                      <span>{item.client}</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

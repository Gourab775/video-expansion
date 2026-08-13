'use client';

import PageTransition from '@/components/ui/PageTransition';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientCard from '@/components/ui/GradientCard';
import StaggerChildren, { StaggerItem } from '@/components/ui/StaggerChildren';

const SERVICES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: 'Video Production',
    desc: 'End-to-end video production from concept to delivery. We create cinematic commercials, brand films, and documentary content that captivates audiences.',
    features: ['Scriptwriting & Storyboarding', '4K/8K Cinematic Capture', 'Professional Sound Design', 'Color Grading & VFX'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
      </svg>
    ),
    title: 'Photography',
    desc: 'Stunning visual narratives captured with precision and artistic vision. From product shots to lifestyle campaigns, we bring your brand to life.',
    features: ['Product Photography', 'Lifestyle & Brand Shoots', 'Aerial & Drone Photography', 'Post-Production Retouching'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    title: 'Creative Direction',
    desc: 'Strategic creative guidance that transforms your vision into compelling visual stories. We define the look, feel, and narrative of your brand.',
    features: ['Brand Identity Development', 'Art Direction', 'Mood Board Creation', 'Creative Strategy'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0v.375" />
      </svg>
    ),
    title: 'Post Production',
    desc: 'Pixel-perfect editing and finishing that elevates your content. Our post-production team ensures every frame meets the highest standards.',
    features: ['Video Editing & Assembly', 'Motion Graphics & VFX', 'Sound Mixing & Mastering', 'Format Optimization'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    title: 'Motion Graphics',
    desc: 'Dynamic animations that bring ideas to life. From logo reveals to explainer videos, we create motion content that engages and informs.',
    features: ['2D/3D Animation', 'Logo Animation', 'Explainer Videos', 'Social Media Content'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Social Media Content',
    desc: 'Platform-optimized content that drives engagement. We create scroll-stopping visuals tailored for Instagram, TikTok, YouTube, and more.',
    features: ['Short-Form Video', 'Reels & Stories', 'Platform Optimization', 'Content Strategy'],
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We learn about your brand, goals, and vision to create a tailored strategy.' },
  { step: '02', title: 'Concept', desc: 'Our team develops creative concepts, scripts, and storyboards for your project.' },
  { step: '03', title: 'Production', desc: 'We bring the vision to life with professional equipment and expert crew.' },
  { step: '04', title: 'Delivery', desc: 'Polished final content delivered in all formats, ready for the world.' },
];

const PRICING = [
  {
    name: 'Starter',
    price: '$2,500',
    period: 'per project',
    desc: 'Perfect for small businesses looking for quality content.',
    features: ['1 Video (up to 60s)', '2 Revision Rounds', 'Basic Color Grading', 'Licensed Music', '5-Day Delivery'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$7,500',
    period: 'per project',
    desc: 'For brands that need premium, cinematic content.',
    features: ['3 Videos (up to 90s each)', 'Unlimited Revisions', 'Advanced Color Grading', 'Custom Sound Design', 'Motion Graphics', '3-Day Delivery'],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'monthly retainer',
    desc: 'Ongoing content creation for ambitious brands.',
    features: ['Unlimited Videos', 'Dedicated Creative Team', 'Full Post-Production', 'Content Strategy', 'Priority Support', 'Same-Day Delivery'],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <SectionReveal>
            <SectionHeading
              badge="Our Services"
              title="What We"
              highlight="Do"
              description="We offer a comprehensive suite of creative services designed to elevate your brand and captivate your audience."
            />
          </SectionReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <StaggerItem key={s.title}>
                <GradientCard className="p-8 h-full">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-emerald-400"
                    style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.15)' }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-white/50 leading-relaxed mb-6 text-sm">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/40">
                        <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </GradientCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <SectionHeading badge="Our Process" title="How We" highlight="Work" description="A streamlined process that ensures exceptional results every time." />
          </SectionReveal>
          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS.map((p, i) => (
              <SectionReveal key={p.step}>
                <div className="relative">
                  {i < PROCESS.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-emerald-500/30 to-transparent" />
                  )}
                  <div className="text-5xl font-bold text-emerald-400/20 mb-4">{p.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <SectionHeading badge="Pricing" title="Simple," highlight="Transparent" description="Choose the plan that fits your creative needs." />
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {PRICING.map((plan, idx) => (
              <SectionReveal key={plan.name} delay={idx * 0.1}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col ${
                    plan.popular ? 'ring-2 ring-emerald-500/50' : ''
                  }`}
                  style={{
                    background: plan.popular ? 'rgba(5,150,105,0.05)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${plan.popular ? 'rgba(5,150,105,0.2)' : 'rgba(255,255,255,0.06)'}`,
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ background: 'linear-gradient(135deg,#059669,#10b981)' }}>
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/40 text-sm ml-2">{plan.period}</span>
                  </div>
                  <p className="text-white/50 text-sm mb-8">{plan.desc}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                        <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: plan.popular ? 'linear-gradient(135deg,#059669,#10b981)' : 'rgba(255,255,255,0.05)',
                      border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.1)',
                      color: plan.popular ? '#fff' : 'rgba(255,255,255,0.7)',
                    }}
                  >
                    {plan.cta}
                  </button>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

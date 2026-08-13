'use client';

import { motion } from 'framer-motion';
import HeroBadge from './HeroBadge';

interface Props {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({ badge, title, highlight, description, align = 'center' }: Props) {
  const alignClass = align === 'center' ? 'text-center' : '';
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className={`mb-20 ${alignClass}`}
    >
      <HeroBadge text={badge} className={align === 'center' ? 'mb-6' : 'mb-6'} />
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
        {title.split(highlight || '___').map((part, i, arr) => (
          <span key={i}>
            {part}
            {i < arr.length - 1 && highlight && (
              <span className="text-emerald-400">{highlight}</span>
            )}
          </span>
        ))}
      </h2>
      {description && (
        <p className="text-lg text-white/50 max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
}

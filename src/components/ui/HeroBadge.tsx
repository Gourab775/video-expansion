'use client';

import { motion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
}

export default function HeroBadge({ text, className = '' }: Props) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-emerald-400 ${className}`}
      style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.2)' }}
    >
      {text}
    </motion.span>
  );
}

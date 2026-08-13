'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GradientCard({ children, className = '', hover = true }: Props) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden group ${hover ? 'transition-all duration-500 hover:scale-[1.02]' : ''} ${className}`}
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {hover && (
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'linear-gradient(135deg,rgba(5,150,105,0.06),rgba(16,185,129,0.02))' }}
        />
      )}
      {hover && (
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 30px rgba(5,150,105,0.05)' }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

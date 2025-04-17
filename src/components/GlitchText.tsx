import React from 'react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  return <div className={`text-5xl mb-2 tracking-widest glitch-text ${className}`}>{children}</div>;
}

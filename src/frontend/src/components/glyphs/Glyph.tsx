import React from 'react';

type GlyphType = 'moon' | 'circle' | 'awareness' | 'sleep' | 'social' | 'creative' | 'ritual' | 'bell' | 'shift';

interface GlyphProps {
  type: GlyphType;
  className?: string;
}

export default function Glyph({ type, className = '' }: GlyphProps) {
  const baseClasses = `inline-block ${className}`;

  switch (type) {
    case 'moon':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={baseClasses}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 2 A10 10 0 0 1 12 22 A8 8 0 0 0 12 2" fill="currentColor" />
        </svg>
      );

    case 'circle':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={baseClasses}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );

    case 'awareness':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={baseClasses}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <path d="M12 2v4M12 18v4M22 12h-4M6 12H2M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76L4.93 4.93" />
        </svg>
      );

    case 'sleep':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={baseClasses}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      );

    case 'social':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={baseClasses}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="7" r="4" />
          <circle cx="17" cy="17" r="4" />
          <path d="M12 10l3 4" />
        </svg>
      );

    case 'creative':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={baseClasses}
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="12,2 15,10 23,10 17,15 19,23 12,18 5,23 7,15 1,10 9,10" />
        </svg>
      );

    case 'ritual':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={baseClasses}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M6 12h12" />
        </svg>
      );

    case 'bell':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={baseClasses}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );

    case 'shift':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={baseClasses}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="5" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="7.5" cy="7.5" r="1" />
          <circle cx="16.5" cy="16.5" r="1" />
          <circle cx="7.5" cy="16.5" r="1" />
          <circle cx="16.5" cy="7.5" r="1" />
        </svg>
      );

    default:
      return null;
  }
}


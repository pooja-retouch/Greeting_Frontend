import React from 'react';
import { useMotionPreference } from '../../hooks/useMotionPreference';

export default function FloatingDecorations() {
  const prefersReduced = useMotionPreference();

  if (prefersReduced) return null;

  return (
    <>
      {/* Animated Ornament (top right) */}
      <div className="fixed top-20 right-12 z-10 pointer-events-none animate-bounce" style={{ animationDuration: '4s' }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="15" fill="#DC143C" opacity="0.9" />
          <circle cx="20" cy="20" r="15" fill="none" stroke="#FFD700" strokeWidth="2" />
          <path d="M20 5 L22 8 L20 10 L18 8 Z" fill="#FFD700" />
        </svg>
      </div>

      {/* Animated Candy Cane */}
      <div className="fixed bottom-40 right-10 z-10 pointer-events-none animate-pulse" style={{ animationDuration: '2.5s' }}>
        <svg width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0 L12 0 L12 40 Q12 50 20 55 Q25 58 28 56" stroke="#DC143C" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M8 0 L12 0 L12 40 Q12 50 20 55 Q25 58 28 56" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="3,3" />
        </svg>
      </div>

      {/* Blinking Gift Box */}
      <div className="fixed top-1/3 left-12 z-10 pointer-events-none animate-pulse" style={{ animationDuration: '2s' }}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Gift Box */}
          <rect x="5" y="15" width="40" height="30" fill="#C41E3A" rx="2" />
          {/* Ribbon */}
          <rect x="20" y="10" width="10" height="50" fill="#FFD700" />
          <rect x="5" y="28" width="40" height="8" fill="#FFD700" />
          {/* Bow */}
          <circle cx="25" cy="10" r="6" fill="#FFD700" />
        </svg>
      </div>

      {/* Floating Snowballs */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`snowball-${i}`}
          className="fixed rounded-full bg-white opacity-70 pointer-events-none"
          style={{
            width: `${30 + Math.random() * 40}px`,
            height: `${30 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${-50 - Math.random() * 100}px`,
            animation: `floatUp ${12 + Math.random() * 8}s linear infinite`,
            animationDelay: `${i * 2}s`,
            boxShadow: `0 0 20px rgba(255, 255, 255, 0.6), inset -2px -2px 5px rgba(0,0,0,0.2)`,
          }}
        />
      ))}

      {/* Rotating Snowflakes */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`snowflake-rotate-${i}`}
          className="fixed pointer-events-none opacity-60"
          style={{
            right: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
            animation: 'rotate360 8s linear infinite',
            fontSize: '2rem',
          }}
        >
          ❄️
        </div>
      ))}

      {/* Swinging Holly */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`holly-${i}`}
          className="fixed pointer-events-none opacity-70"
          style={{
            left: `${5 + i * 30}%`,
            top: `${5 + i * 15}%`,
            animation: 'swayRotate 4s ease-in-out infinite',
            animationDelay: `${i * 0.8}s`,
            fontSize: '2rem',
          }}
        >
          🎄
        </div>
      ))}

      {/* Shimmering Icicles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`icicle-${i}`}
          className="fixed pointer-events-none opacity-80"
          style={{
            left: `${10 + i * 10}%`,
            top: '0px',
            width: '3px',
            height: '60px',
            background: 'linear-gradient(to bottom, #87CEEB, #E0FFFF)',
            animation: 'shimmer 2s ease-in-out infinite',
            animationDelay: `${i * 0.2}s`,
            boxShadow: `0 0 8px rgba(173, 216, 230, 0.8)`,
          }}
        />
      ))}
    </>
  );
}

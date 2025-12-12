import React from 'react';
import { lightColors } from '../../config/animationConfig';
import { useMotionPreference } from '../../hooks/useMotionPreference';

export default function LightingElements() {
  const prefersReduced = useMotionPreference();

  return (
    <>
      {/* Animated Starfield Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(prefersReduced ? 10 : 40)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() > 0.5 ? '2px' : '1px',
              height: Math.random() > 0.5 ? '2px' : '1px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: prefersReduced ? '4s' : `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Twinkling Lights String */}
      <div className="fixed top-1/4 left-0 right-0 flex justify-around pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={`light-string-${i}`}
            className="rounded-full pointer-events-none"
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: lightColors[i % 5],
              animation: 'twinkle 1.5s ease-in-out infinite',
              animationDelay: `${i * 0.12}s`,
              boxShadow: `0 0 10px ${lightColors[i % 5]}`,
            }}
          />
        ))}
      </div>

      {/* Floating Stars Effect */}
      {!prefersReduced && (
        <>
          {[...Array(8)].map((_, i) => (
            <div
              key={`floating-star-${i}`}
              className="fixed pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                animationDelay: `${i * 1.5}s`,
                fontSize: '1.5rem',
              }}
            >
              ⭐
            </div>
          ))}
        </>
      )}
    </>
  );
}

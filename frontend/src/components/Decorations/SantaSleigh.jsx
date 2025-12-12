import React from 'react';
import { useMotionPreference } from '../../hooks/useMotionPreference';

export default function SantaSleigh() {
  const prefersReduced = useMotionPreference();

  if (prefersReduced) return null;

  return (
    <>
      {/* Santa Sleigh Animation */}
      <div
        className="absolute top-1/4 left-0 right-0 pointer-events-none z-20"
        style={{
          animation: 'santaSleigh 8s linear infinite',
        }}
      >
        <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sleigh */}
          <path d="M50 60 L30 50 L20 60 L40 70 Z" fill="#DC143C" stroke="#FFD700" strokeWidth="2"/>
          <ellipse cx="35" cy="72" rx="15" ry="5" fill="#8B4513"/>
          <ellipse cx="55" cy="72" rx="15" ry="5" fill="#8B4513"/>
          
          {/* Sleigh details */}
          <rect x="25" y="50" width="30" height="8" fill="#FFD700" rx="2"/>
          <rect x="28" y="52" width="4" height="4" fill="#DC143C"/>
          <rect x="38" y="52" width="4" height="4" fill="#DC143C"/>
          <rect x="48" y="52" width="4" height="4" fill="#DC143C"/>
          
          {/* Santa body */}
          <circle cx="45" cy="35" r="8" fill="#FFFACD"/>
          
          {/* Santa hat */}
          <path d="M40 25 L50 25 L48 18 Z" fill="#DC143C"/>
          <circle cx="48" cy="17" r="2" fill="#FFD700"/>
          
          {/* Santa face */}
          <circle cx="43" cy="35" r="1" fill="#000000"/>
          <circle cx="47" cy="35" r="1" fill="#000000"/>
          <path d="M43 38 Q45 40 47 38" stroke="#000000" strokeWidth="0.5" fill="none"/>
          
          {/* Sack of gifts */}
          <rect x="55" y="35" width="18" height="20" fill="#DC143C" rx="2"/>
          <path d="M55 35 Q60 30 73 35" fill="#FFD700" opacity="0.8"/>
          
          {/* Reins */}
          <line x1="50" y1="35" x2="100" y2="25" stroke="#FFD700" strokeWidth="1"/>
          <line x1="50" y1="38" x2="100" y2="28" stroke="#FFD700" strokeWidth="1"/>
        </svg>

        {/* Flying sparks/particle effects */}
        <div className="absolute -top-2 -left-2 w-6 h-6 opacity-70">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping"
              style={{
                left: `${20 + i * 10}%`,
                top: `${10 + i * 15}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '2s',
              }}
            />
          ))}
        </div>
      </div>

      {/* Reindeer Flying */}
      <div
        className="absolute top-1/3 left-20 opacity-40 pointer-events-none z-20"
        style={{
          animation: 'reindeerFly 10s infinite ease-in-out',
        }}
      >
        <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Reindeer 1 */}
          <circle cx="15" cy="18" r="8" fill="#8b4513"/>
          <circle cx="12" cy="15" r="4" fill="#deb887"/>
          <path d="M10 20 L8 25" stroke="#8b4513" strokeWidth="2"/>
          <path d="M18 20 L20 25" stroke="#8b4513" strokeWidth="2"/>
          <path d="M15 12 L12 8 L15 6 L18 8 Z" fill="#ffd700"/>
          <circle cx="2" cy="15" r="2" fill="#ffffff"/>
          <circle cx="4" cy="13" r="1" fill="#000000"/>
          <circle cx="2" cy="13" r="1" fill="#ff0000"/>
          
          {/* Reins to sleigh */}
          <path d="M58 8 L55 12 L52 8 Z" fill="#ffd700"/>
          <path d="M55 8 L58 6 L60 8 Z" fill="#ffd700"/>
          
          {/* Flying motion trail */}
          <circle cx="5" cy="18" r="2" fill="#FFD700" opacity="0.5"/>
        </svg>
      </div>

      {/* Magical Trail */}
      <div className="absolute top-1/4 left-0 right-0 pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={`trail-${i}`}
            className="absolute rounded-full animate-pulse"
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: '#FFD700',
              left: `${10 + i * 7}%`,
              top: `${20 + Math.sin(i) * 10}px`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s',
              boxShadow: '0 0 12px #FFD700, 0 0 20px rgba(255,215,0,0.6)',
              opacity: 1 - i * 0.08,
            }}
          />
        ))}
      </div>

      {/* Sleigh swoosh sound indicator (subtle) */}
      <div
        className="absolute top-1/4 left-0 right-0 pointer-events-none"
        style={{
          animation: 'santaSleigh 8s linear infinite',
        }}
      >
        <div
          className="absolute w-32 h-1 opacity-30"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,215,0,0.6) 0%, transparent 100%)',
            left: '-30px',
            top: '30px',
          }}
        />
      </div>

      {/* CSS Keyframes for Santa Sleigh */}
      <style jsx>{`
        @keyframes santaSleigh {
          0% {
            transform: translateX(120vw) translateY(-10px) rotate(-2deg);
            opacity: 0;
          }
          5% {
            opacity: 0.6;
          }
          10% {
            opacity: 0.9;
          }
          40% {
            transform: translateX(-10vw) translateY(15px) rotate(3deg);
          }
          60% {
            transform: translateX(-40vw) translateY(-5px) rotate(-1deg);
          }
          90% {
            opacity: 0.9;
          }
          95% {
            opacity: 0.4;
          }
          100% {
            transform: translateX(-120vw) translateY(10px) rotate(1deg);
            opacity: 0;
          }
        }

        @keyframes reindeerFly {
          0% {
            transform: translateX(-20px) translateY(-5px) rotate(-10deg);
          }
          33% {
            transform: translateX(0px) translateY(-15px) rotate(0deg);
          }
          66% {
            transform: translateX(20px) translateY(-5px) rotate(10deg);
          }
          100% {
            transform: translateX(-20px) translateY(-5px) rotate(-10deg);
          }
        }
      `}</style>
    </>
  );
}

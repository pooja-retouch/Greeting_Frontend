import React from 'react';
import { lightColors } from '../../config/animationConfig';
import { useMotionPreference } from '../../hooks/useMotionPreference';

export default function ChristmasTree() {
  const prefersReduced = useMotionPreference();

  if (prefersReduced) return null;

  return (
    <div className="fixed left-8 bottom-20 z-10 pointer-events-none opacity-80">
      <svg width="120" height="160" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bottom tier */}
        <path
          d="M60 150 L20 110 H100 Z"
          fill="#1B5E20"
          className="animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        {/* Middle tier */}
        <path
          d="M60 110 L30 75 H90 Z"
          fill="#2E7D32"
          className="animate-pulse"
          style={{ animationDuration: '3s', animationDelay: '0.5s' }}
        />
        {/* Top tier */}
        <path
          d="M60 75 L40 45 H80 Z"
          fill="#388E3C"
          className="animate-pulse"
          style={{ animationDuration: '3s', animationDelay: '1s' }}
        />
        {/* Trunk */}
        <rect
          x="55"
          y="150"
          width="10"
          height="15"
          fill="#6D4C41"
          className="animate-pulse"
          style={{ animationDuration: '2s' }}
        />
        {/* Star on top */}
        <path
          d="M60 35 L63 45 L73 45 L65 52 L68 62 L60 56 L52 62 L55 52 L47 45 L57 45 Z"
          fill="#FFD700"
          className="animate-bounce"
          style={{ animationDuration: '2s' }}
        />
      </svg>

      {/* Tree lights */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`light-${i}`}
          className="absolute rounded-full animate-pulse"
          style={{
            width: '4px',
            height: '4px',
            backgroundColor: lightColors[i % 5],
            left: `${20 + (i % 4) * 25}px`,
            top: `${40 + Math.floor(i / 4) * 35}px`,
            animationDuration: '1.5s',
            animationDelay: `${i * 0.15}s`,
            boxShadow: `0 0 8px ${lightColors[i % 5]}`,
          }}
        />
      ))}
    </div>
  );
}

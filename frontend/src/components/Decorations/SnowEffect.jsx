import React from 'react';
import { snowflakesStatic, largeSnowflakesStatic, magicalParticlesStatic } from '../../config/animationConfig';
import { useMotionPreference } from '../../hooks/useMotionPreference';

export default function SnowEffect() {
  const prefersReduced = useMotionPreference();

  if (prefersReduced) return null;

  return (
    <>
      {/* Magical Snow Falling Continuously */}
      {snowflakesStatic.map((flake, i) => (
        <div
          key={`snow-${i}`}
          className="absolute z-20 pointer-events-none"
          style={{
            width: '3px',
            height: '3px',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            opacity: 0.9,
            left: flake.left,
            top: '-20px',
            animation: 'snowFall linear infinite',
            animationDelay: flake.delay,
            animationDuration: flake.duration,
            transform: `scale(${flake.scale})`,
            boxShadow: '0 0 10px rgba(255,255,255,0.8)',
          }}
        />
      ))}

      {/* Large Snowflakes with Glow */}
      {largeSnowflakesStatic.map((flake, i) => (
        <div
          key={`large-snow-${i}`}
          className="absolute z-20 pointer-events-none"
          style={{
            width: '6px',
            height: '6px',
            backgroundColor: '#e0f2fe',
            borderRadius: '50%',
            opacity: 0.85,
            left: flake.left,
            top: '-30px',
            animation: 'snowFall linear infinite',
            animationDelay: flake.delay,
            animationDuration: flake.duration,
            transform: `scale(${flake.scale})`,
            boxShadow: '0 0 15px rgba(255,255,255,1), 0 0 25px rgba(176,196,222,0.8)',
          }}
        />
      ))}

      {/* Soft Glowing Particles in the Air */}
      {magicalParticlesStatic.map((particle, i) => (
        <div
          key={`particle-${i}`}
          className="absolute z-20 pointer-events-none animate-pulse"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: '50%',
            opacity: 0.8,
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            boxShadow: `0 0 12px ${particle.color}ff, 0 0 20px ${particle.color}cc`,
          }}
        />
      ))}
    </>
  );
}

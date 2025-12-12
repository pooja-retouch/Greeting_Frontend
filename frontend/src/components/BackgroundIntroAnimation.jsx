import React, { useEffect, useState } from 'react';

const BackgroundIntroAnimation = ({ onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(false);
      onComplete?.();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isPlaying) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none" style={{ background: 'black' }}>
      {/* Aurora Borealis Color Waves */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-aurora"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-pink-500 via-cyan-400 to-yellow-300 animate-aurora-reverse"></div>
      </div>

      {/* Magical Stardust Particles */}
      {[
        { left: '10%', top: '20%', delay: '0s' },
        { left: '25%', top: '40%', delay: '0.5s' },
        { left: '45%', top: '10%', delay: '1s' },
        { left: '60%', top: '30%', delay: '1.5s' },
        { left: '80%', top: '50%', delay: '2s' },
        { left: '15%', top: '70%', delay: '2.5s' },
        { left: '35%', top: '15%', delay: '3s' },
        { left: '55%', top: '60%', delay: '3.5s' },
        { left: '75%', top: '25%', delay: '4s' },
        { left: '20%', top: '45%', delay: '4.5s' },
        { left: '85%', top: '75%', delay: '0.2s' },
        { left: '5%', top: '35%', delay: '0.8s' },
        { left: '70%', top: '8%', delay: '1.3s' },
        { left: '90%', top: '65%', delay: '1.8s' },
        { left: '30%', top: '55%', delay: '2.3s' },
        { left: '40%', top: '80%', delay: '2.8s' },
        { left: '50%', top: '12%', delay: '3.3s' },
        { left: '65%', top: '68%', delay: '3.8s' },
        { left: '12%', top: '22%', delay: '4.2s' },
        { left: '95%', top: '40%', delay: '4.7s' },
      ].map((particle, i) => (
        <div
          key={`dust-${i}`}
          className="absolute rounded-full bg-white animate-dust-sparkle"
          style={{
            width: '2px',
            height: '2px',
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: '3s',
          }}
        ></div>
      ))}

      {/* Christmas Tree Outline Silhouette */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
        <svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600 animate-siluette">
          <path d="M100 50 L80 120 L120 120 Z" fill="currentColor" opacity="0.8"/>
          <path d="M100 80 L70 150 L130 150 Z" fill="currentColor" opacity="0.6"/>
          <path d="M100 110 L60 180 L140 180 Z" fill="currentColor" opacity="0.4"/>
          <path d="M100 140 L50 210 L150 210 Z" fill="currentColor" opacity="0.2"/>
          <rect x="95" y="210" width="10" height="40" fill="#8B4513"/>
        </svg>
      </div>

      {/* Reindeer Silhouettes */}
      <div className="absolute left-1/4 top-1/3 opacity-20 animate-reindeer-siluette">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
          <circle cx="60" cy="30" r="8" fill="currentColor"/>
          <circle cx="55" cy="25" r="5" fill="currentColor"/>
          <path d="M55 20 L50 15 L55 13 L60 15 Z" fill="currentColor"/>
          <path d="M52 30 L45 35" stroke="currentColor" strokeWidth="2"/>
          <path d="M58 30 L65 35" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      <div className="absolute right-1/4 top-2/3 opacity-15 animate-reindeer-siluette-delay">
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
          <circle cx="45" cy="25" r="6" fill="currentColor"/>
          <circle cx="42" cy="20" r="4" fill="currentColor"/>
          <path d="M42 15 L38 10 L42 8 L46 10 Z" fill="currentColor"/>
          <path d="M40 25 L35 28" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M44 25 L48 28" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Title Text Removed */}

      {/* Snowflakes Burst */}
      {[
        { width: '2px', left: '25%', top: '20%', delay: '0s', duration: '3s' },
        { width: '1.5px', left: '45%', top: '30%', delay: '0.2s', duration: '2.5s' },
        { width: '2.5px', left: '65%', top: '15%', delay: '0.4s', duration: '4s' },
        { width: '1.8px', left: '35%', top: '45%', delay: '0.6s', duration: '3.2s' },
        { width: '2.2px', left: '55%', top: '25%', delay: '0.8s', duration: '2.8s' },
        { width: '1.3px', left: '75%', top: '35%', delay: '1s', duration: '3.5s' },
        { width: '2px', left: '20%', top: '50%', delay: '1.2s', duration: '2.7s' },
        { width: '1.7px', left: '40%', top: '20%', delay: '1.4s', duration: '4.1s' },
        { width: '2.3px', left: '60%', top: '40%', delay: '1.6s', duration: '3.3s' },
        { width: '1.6px', left: '30%', top: '55%', delay: '1.8s', duration: '2.9s' },
        { width: '2.1px', left: '50%', top: '10%', delay: '2s', duration: '3.7s' },
        { width: '1.4px', left: '70%', top: '45%', delay: '2.2s', duration: '2.6s' },
        { width: '2.4px', left: '15%', top: '30%', delay: '2.4s', duration: '4.2s' },
        { width: '1.9px', left: '35%', top: '60%', delay: '2.6s', duration: '3.1s' },
        { width: '2px', left: '55%', top: '20%', delay: '2.8s', duration: '2.8s' },
        { width: '1.5px', left: '75%', top: '50%', delay: '3s', duration: '3.9s' },
        { width: '2.2px', left: '25%', top: '40%', delay: '3.2s', duration: '2.7s' },
        { width: '1.8px', left: '45%', top: '15%', delay: '3.4s', duration: '4.3s' },
        { width: '2.3px', left: '65%', top: '35%', delay: '3.6s', duration: '3.2s' },
        { width: '1.7px', left: '45%', top: '70%', delay: '3.8s', duration: '2.9s' },
      ].map((flake, i) => (
        <div
          key={`burst-${i}`}
          className="absolute bg-white rounded-full animate-snow-burst"
          style={{
            width: flake.width,
            height: flake.width,
            left: flake.left,
            top: flake.top,
            animationDelay: flake.delay,
            animationDuration: flake.duration,
          }}
        ></div>
      ))}

      {/* Loading Indicator */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-white rounded-full animate-loading-dot" style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes aurora {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes aurora-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }

        @keyframes dust-sparkle {
          0%, 100% { opacity: 0; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes siluette {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }

        @keyframes reindeer-siluette {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(20px); }
        }

        @keyframes reindeer-siluette-delay {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-15px); }
        }

        @keyframes christmas-text {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.7; }
        }

        @keyframes snow-burst {
          0% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
          100% { opacity: 0; transform: scale(0) rotate(360deg); }
        }

        @keyframes loading-dot {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .animate-aurora {
          animation: aurora 8s ease-in-out infinite;
          background-size: 400% 400%;
        }

        .animate-aurora-reverse {
          animation: aurora-reverse 6s ease-in-out infinite;
        }

        .animate-dust-sparkle {
          animation: dust-sparkle 2s ease-in-out infinite;
        }

        .animate-siluette {
          animation: siluette 4s ease-in-out infinite;
        }

        .animate-reindeer-siluette {
          animation: reindeer-siluette 5s ease-in-out infinite;
        }

        .animate-reindeer-siluette-delay {
          animation: reindeer-siluette-delay 6s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-christmas-text {
          animation: christmas-text 3s ease-in-out infinite;
        }

        .animate-snow-burst {
          animation: snow-burst 4s ease-out infinite;
        }

        .animate-loading-dot {
          animation: loading-dot 1.4s ease-in-out infinite both;
        }
      `}</style>
    </div>
  );
};

export default BackgroundIntroAnimation;

import React from "react";

const SimpleSnowEffect = () => {
  // Generate random snowflakes
  const snowflakes = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    size: 2 + Math.random() * 4,
    opacity: 0.5 + Math.random() * 0.5,
  }));

  return (
    <>
      {/* Snow Container */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${flake.left}%`,
              top: "-10px",
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              animation: `snowFall ${flake.duration}s linear infinite`,
              animationDelay: `${flake.delay}s`,
              boxShadow: `0 0 ${flake.size + 3}px rgba(255, 255, 255, 0.9), 0 0 ${flake.size + 6}px rgba(173, 216, 230, 0.6)`,
            }}
          />
        ))}
      </div>

      {/* Snow Animation Keyframes */}
      <style>{`
        @keyframes snowFall {
          to {
            transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default SimpleSnowEffect;

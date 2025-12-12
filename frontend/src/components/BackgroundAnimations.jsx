import React from "react";

const BackgroundAnimations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Christmas String Lights */}
      <div className="absolute top-12 left-1/3 opacity-50 flex space-x-2">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full animate-pulse shadow-lg"
            style={{
              backgroundColor: ['#ef4444', '#3b82f6', '#22c55e', '#f59e0b', '#dc2626', '#7c3aed', '#ec4899', '#f97316', '#06b6d4', '#f59e0b'][i],
              animationDelay: `${i * 0.4}s`,
              animationDuration: '3s',
              boxShadow: `0 0 20px ${['#ef4444', '#3b82f6', '#22c55e', '#f59e0b', '#dc2626', '#7c3aed', '#ec4899', '#f97316', '#06b6d4', '#f59e0b'][i]}80`,
            }}
          ></div>
        ))}
      </div>

      {/* Christmas Tree */}
      <div className="absolute bottom-20 left-10 opacity-25 animate-bounce" style={{animationDelay: '2s'}}>
        <svg width="80" height="100" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5 L45 45 H50 L37 75 H23 L10 45 H15 Z" fill="#22c55e"/>
          <circle cx="25" cy="35" r="2" fill="#ef4444" opacity="0.8"/>
          <circle cx="35" cy="45" r="2" fill="#3b82f6" opacity="0.8"/>
          <circle cx="30" cy="55" r="2" fill="#f59e0b" opacity="0.8"/>
        </svg>
      </div>

      {/* Santa */}
      <div className="absolute top-1/3 right-20 opacity-30 animate-bounce" style={{animationDelay: '4s'}}>
        <svg width="60" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="15" r="12" fill="#ffffff"/>
          <circle cx="20" cy="10" r="8" fill="#fed7d7"/>
          <rect x="26" y="15" width="10" height="6" fill="#3b82f6"/>
          <rect x="30" y="12" width="6" height="8" fill="#dc2626"/>
          <circle cx="28" cy="16" r="1" fill="#f59e0b"/>
        </svg>
      </div>

      {/* Candy Canes */}
      <div className="absolute w-2 h-12 bg-gradient-to-b from-red-500 to-white rounded-l animate-bounce opacity-40" style={{left: '15%', top: '25%', animationDelay: '1s'}}></div>
      <div className="absolute w-2 h-12 bg-gradient-to-b from-red-500 to-white rounded-l animate-bounce opacity-40" style={{right: '15%', top: '35%', animationDelay: '3s'}}></div>

      {/* Christmas Baubles */}
      <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-bounce opacity-70" style={{left: '20%', top: '10%', animationDelay: '1s'}}></div>
      <div className="absolute w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-70" style={{left: '60%', top: '20%', animationDelay: '2s'}}></div>
      <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-bounce opacity-70" style={{left: '80%', top: '40%', animationDelay: '0.5s'}}></div>

      {/* Floating Gift */}
      <div className="absolute w-6 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded animate-bounce opacity-50 shadow-lg" style={{left: '70%', top: '50%', animationDelay: '4s'}}>
        <div className="absolute inset-x-1 top-0 h-0.5 bg-yellow-400"></div>
        <div className="absolute left-3 top-0 w-0.5 h-full bg-yellow-400"></div>
      </div>

      {/* Snowflakes */}
      <div className="absolute w-2 h-2 bg-white rounded-full animate-bounce opacity-80 shadow-sm" style={{left: '15%', top: '15%', animationDelay: '0.5s', animationDuration: '3s'}}></div>
      <div className="absolute w-3 h-3 bg-blue-100 rounded-full animate-bounce opacity-60 shadow-md" style={{left: '35%', top: '25%', animationDelay: '1.5s', animationDuration: '4s'}}></div>
      <div className="absolute w-2 h-2 bg-white rounded-full animate-bounce opacity-80 shadow-sm" style={{left: '70%', top: '20%', animationDelay: '2s', animationDuration: '5s'}}></div>

      {/* Christmas Wreath */}
      <div className="absolute bottom-1/4 right-1/3 opacity-25 animate-pulse" style={{animationDelay: '3s'}}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="25" fill="none" stroke="#22c55e" strokeWidth="3"/>
          <circle cx="22" cy="22" r="3" fill="#ef4444"/>
          <circle cx="38" cy="22" r="3" fill="#3b82f6"/>
          <circle cx="22" cy="38" r="3" fill="#f59e0b"/>
          <circle cx="38" cy="38" r="3" fill="#dc2626"/>
        </svg>
      </div>
    </div>
  );
};

export default BackgroundAnimations;

// CSS for the float animation
const styles = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-20px) rotate(2deg);
    }
    50% {
      transform: translateY(-15px) rotate(-2deg);
    }
    75% {
      transform: translateY(-25px) rotate(1deg);
    }
  }
`;

// Inject styles into the document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

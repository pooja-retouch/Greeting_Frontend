import React, { useState, useEffect } from 'react';

const TeamCarousel = () => {
  const teamMembers = [
    { name: "Doosu Bere", image: "/assets/credit_images/doosu.jpg", role: "Program Manager", desc: "Ensures smooth user experience and platform improvement" },
    { name: "Micheal", image: "👑", role: "Team Lead", isEmoji: true, desc: "Leading the team with vision and dedication" },
    { name: "Gautam", image: "/assets/credit_images/gautam.jpg", role: "Lead Developer and AI", desc: "Turns creative visions into cutting-edge technology" },
    { name: "Bheema Kiran", image: "/assets/credit_images/bheem.jpg", role: "Frontend Team", desc: "Creates intuitive and beautiful user interfaces" },
    { name: "Bharat Kumar", image: "/assets/credit_images/bharat.jpg", role: "Backend Team", desc: "Builds robust backend systems and APIs" },
    { name: "Vigneesh Sridhar", image: "/assets/credit_images/vigneesh.jpg", role: "Frontend Developer", desc: "Crafts heartfelt message templates and UI experiences" },
    { name: "Pooja Koti", image: "/assets/credit_images/pooja.jpg", role: "Frontend Developer", desc: "Creates beautiful frontend interfaces and experiences" },
    { name: "Sanjitha Sampath", image: "/assets/credit_images/sanjitha.jpg", role: "Frontend Team", desc: "Develops responsive and user-friendly interfaces" },
    { name: "Rushikesh", image: "/assets/credit_images/rushi.jpg", role: "Frontend Team", desc: "Creates engaging frontend experiences" },
    { name: "Moin", image: "/assets/credit_images/moin.jpg", role: "AI Team", desc: "Powers advanced AI message generation systems" },
    { name: "Jagadeesh", image: "/assets/credit_images/jagdeesh.jpg", role: "Frontend Team", desc: "Builds responsive and interactive web interfaces" },
    { name: "Vinay", image: "/assets/credit_images/IMG-20251024-WA0022.jpg", role: "Frontend Team", desc: "Creates intuitive frontend experiences for users" },
    { name: "Ramu", image: "/assets/credit_images/ramu.jpg", role: "Backend Team", desc: "Develops scalable backend architectures" },
    { name: "Dinesh", image: "/assets/credit_images/dinesh.jpg", role: "Backend Team", desc: "Builds reliable backend systems and APIs" },
    { name: "Harsha CV", image: "/assets/credit_images/harsha.jpg", role: "Backend Team", desc: "Ensures robust backend performance and security" },
    { name: "Jafeer", image: "/assets/credit_images/jafeer.jpg", role: "AI Team", desc: "Advances AI capabilities for message personalization" },
    
    { name: "AI Assistant", image: "⭐", role: "Intelligent Helper", isEmoji: true, desc: "Powers personalized messages for every occasion" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const currentMember = teamMembers[currentIndex];

  return (
    <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto mb-16">
      {/* Current Team Member Display */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 rounded-full border-6 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 mx-auto mb-6 shadow-2xl">
          <img
            src={!currentMember.isEmoji ? currentMember.image : undefined}
            alt={currentMember.name}
            className={`w-full h-full rounded-full object-cover ${currentMember.isEmoji ? 'hidden' : ''}`}
          />
          {currentMember.isEmoji && (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
              <span className="text-4xl text-white">{currentMember.image}</span>
            </div>
          )}
        </div>

        <h3 className="text-3xl font-bold text-slate-800 mb-2">{currentMember.name}</h3>
        <p className="text-xl font-semibold mb-1" style={{ color: '#3b82f6' }}>
          {currentMember.role}
        </p>
        <p className="text-slate-600 max-w-md mx-auto">{currentMember.desc}</p>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center space-x-2 mb-4">
        {teamMembers.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-blue-300'
            }`}
          />
        ))}
      </div>

      {/* Manual Navigation */}
      <div className="flex justify-between items-center">
        <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors opacity-50 cursor-not-allowed">
          <span className="text-2xl text-slate-400">‹</span>
        </button>

        <div className="text-center">
          <p className="text-sm text-slate-500">
            Meet our team • Auto-advancing every 4 seconds
          </p>
          <p className="text-xs text-slate-400 mt-1">
            {currentIndex + 1} of {teamMembers.length}
          </p>
        </div>

        <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors opacity-50 cursor-not-allowed">
          <span className="text-2xl text-slate-400">›</span>
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;

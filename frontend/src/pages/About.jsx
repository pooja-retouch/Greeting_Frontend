import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [aiQuotes, setAiQuotes] = useState([]);
  const [loadingQuotes, setLoadingQuotes] = useState(true);
  const [currentTeamMember, setCurrentTeamMember] = useState(0);

  // Team members data
  const teamMembers = [
    {
      name: "Gautam Nair",
      role: "",
      department: "AI & Software Engineer",
      specialty: "🧠 Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      primaryColor: "#3B82F6",
      bgColor: "#DBEAFE",
      textColor: "#1E40AF",
      description: "Created groundbreaking AI-powered greeting card technology and leads the technical vision behind Greetin's innovative platform."
    },
    {
      name: "Sarah Johnson",
      role: "AI Specialist",
      department: "Machine Learning Engineer",
      specialty: "🤖 AI Training",
      image: "https://images.unsplash.com/photo-1494790108755-2616b619724aa?w=400&h=400&fit=crop&crop=face",
      primaryColor: "#10B981",
      bgColor: "#D1FAE5",
      textColor: "#047857",
      description: "Expert in machine learning algorithms that power Greetin's intelligent message generation and AI personalization features."
    },
    {
      name: "Michael Chen",
      role: "UI/UX Designer",
      department: "Frontend Developer",
      specialty: "🎨 Design & UX",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      primaryColor: "#8B5CF6",
      bgColor: "#E9D5FF",
      textColor: "#7C3AED",
      description: "Passionate about creating beautiful, intuitive interfaces that make greeting card creation a delightful experience for all users."
    },
    {
      name: "Emily Rodriguez",
      role: "Content Curator",
      department: "Creative Writer",
      specialty: "✍️ Content Creation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      primaryColor: "#EC4899",
      bgColor: "#FCE7F3",
      textColor: "#DB2777",
      description: "Crafting heartfelt message templates and ensuring every greeting card created through Greetin conveys genuine care and emotion."
    },
    {
      name: "David Kim",
      role: "Backend Engineer",
      department: "Full Stack Developer",
      specialty: "⚙️ Backend & API",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      primaryColor: "#6366F1",
      bgColor: "#E0E7FF",
      textColor: "#4338CA",
      description: "Building robust backend systems and APIs that ensure Greetin's AI generation works seamlessly and reliably for millions of users."
    },
    {
      name: "Lisa Thompson",
      role: "Customer Success",
      department: "User Experience Expert",
      specialty: "💝 User Support",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      primaryColor: "#EA580C",
      bgColor: "#FED7AA",
      textColor: "#C2410C",
      description: "Ensuring every user has a smooth, joyful experience with Greetin, providing support and continuously improving the platform."
    }
  ];

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  // Get current team member
  const getCurrentTeamMember = () => teamMembers[currentTeamMember];

  // Reset auto-swipe timer
  const resetAutoSwipe = () => {
    // Reset logic here - the auto-swipe will continue from the new position
  };

  // AI-generated sample quotes
  const sampleQuotes = [
    "A simple 'thinking of you' can brighten the darkest day and remind someone they're not alone.",
    "In a world of texts and emails, a personalized greeting card speaks volumes about genuine care and connection.",
    "The best connections are often made through small gestures that show you remember and value someone.",
    "A heartfelt message has the power to turn an ordinary moment into a cherished memory.",
    "Sometimes the most meaningful communications are the ones that take a little extra thought and effort.",
    "Greeting cards are like hugs you can send through the mail - they carry warmth, love, and personal touch.",
    "The beauty of a greeting card lies in its permanence - it can be held, saved, and revisited for years to come.",
    "In our fast-paced digital world, taking time to send a card shows you're willing to slow down for what matters.",
    "Every card sent is a ripple of kindness that spreads through relationships and communities.",
    "The most powerful messages are often the simplest ones sent with genuine intention."
  ];

  useEffect(() => {
    // Simulate AI generating quotes
    const timer = setTimeout(() => {
      // Shuffle and pick 4 random quotes
      const shuffled = [...sampleQuotes].sort(() => 0.5 - Math.random());
      setAiQuotes(shuffled.slice(0, 4));
      setLoadingQuotes(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FF] via-[#F0F7FF] to-[#E3F2FF]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            About <span className="bg-gradient-to-r from-[#000F3A] to-[#002D89] bg-clip-text text-transparent">Greetin</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Making beautiful greetings accessible to everyone, completely free forever.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-bold mb-6">
              🎯 OUR MISSION
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Why We Exist</h2>
            <p className="text-lg text-slate-600 mb-6">
              Greetin was born from a simple idea: <span className="font-bold text-[#001B5E]">everyone deserves to send beautiful greetings</span>, 
              regardless of budget. We saw how expensive greeting card services were becoming, 
              and decided to create something different.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Our mission is to provide a <span className="font-bold text-[#001B5E]">100% free, forever</span> service that allows individuals, 
              professionals, and businesses to create and send beautiful greeting cards without 
              worrying about costs, subscriptions, or hidden fees.
            </p>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-200">
              <p className="text-blue-700 font-semibold">
                "We believe in the power of connection. A simple greeting can brighten someone's day, 
                strengthen relationships, and create lasting memories."
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-200 shadow-xl">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Free Forever Promise</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800">No Payments Ever</h4>
                    <p className="text-green-600 text-sm">No credit cards, no subscriptions</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800">No Signup Required</h4>
                    <p className="text-blue-600 text-sm">Start creating cards instantly</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-800">Unlimited Cards</h4>
                    <p className="text-purple-600 text-sm">Send as many cards as you want</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEW: AI-Generated Quotes Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold mb-4">
              🤖 AI-POWERED CREATIVITY
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">AI-Generated Beautiful Quotes</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our AI helps create meaningful, personalized messages for every occasion
            </p>
          </div>
          
          {loadingQuotes ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-slate-600">AI is generating beautiful quotes...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiQuotes.map((quote, index) => (
                <div 
                  key={index}
                  className="bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl mb-4">
                    {index === 0 && "💝"}
                    {index === 1 && "✨"}
                    {index === 2 && "🌟"}
                    {index === 3 && "💌"}
                  </div>
                  <p className="text-slate-700 italic mb-4">"{quote}"</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      AI-Generated
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                      #{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* How AI Works Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-200">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Smart Generation</h4>
                <p className="text-sm text-slate-600">AI analyzes context to create perfect messages</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Creative Variety</h4>
                <p className="text-sm text-slate-600">Thousands of unique, personalized quotes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Instant Results</h4>
                <p className="text-sm text-slate-600">Generate beautiful messages in seconds</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-slate-700">
                <span className="font-bold text-purple-700">💡 Pro Tip:</span> Our AI can generate personalized quotes based on occasion, tone, and relationship type.
              </p>
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do at Greetin
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Accessibility First</h3>
              <p className="text-slate-600">
                We believe beautiful greetings should be accessible to everyone, 
                regardless of financial situation. That's why we're free forever.
              </p>
            </div>
            
            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Simplicity Matters</h3>
              <p className="text-slate-600">
                We keep things simple and intuitive. No complicated features, 
                no confusing interfaces. Just beautiful cards, easily created.
              </p>
            </div>
            
            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Community Focused</h3>
              <p className="text-slate-600">
                We're here to help people connect. Whether it's families, 
                businesses, or friends, we facilitate meaningful connections.
              </p>
            </div>
          </div>
        </div>

        {/* Credits & Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-bold mb-4">
              👏 OUR TEAM
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Meet The People Behind Greetin</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The talented team that built this AI-powered greeting card platform
            </p>
          </div>

          {/* Team Carousel */}
          <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-blue-200 shadow-2xl max-w-2xl mx-auto mb-16">
            {/* Current Team Member Display */}
            <div className="text-center mb-8">
              <div className="w-40 h-40 rounded-full border-6 border-gradient-to-r from-blue-500 to-purple-500 p-1 mx-auto mb-6 shadow-2xl">
                <img
                  src={getCurrentTeamMember().image}
                  alt={getCurrentTeamMember().name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <h3 className="text-3xl font-bold text-slate-800 mb-2">{getCurrentTeamMember().name}</h3>
              <p className="text-xl font-semibold mb-1" style={{ color: getCurrentTeamMember().primaryColor }}>
                {getCurrentTeamMember().role}
              </p>
              <p className="text-slate-500 mb-4">{getCurrentTeamMember().department}</p>

              <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                   style={{
                     backgroundColor: getCurrentTeamMember().bgColor,
                     color: getCurrentTeamMember().textColor
                   }}>
                {getCurrentTeamMember().specialty}
              </div>

              <p className="text-slate-600 max-w-md mx-auto">{getCurrentTeamMember().description}</p>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mb-4">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTeamMember(index);
                    resetAutoSwipe();
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTeamMember ? 'bg-blue-500 scale-125' : 'bg-blue-300'
                  }`}
                />
              ))}
            </div>

            {/* Manual Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => {
                  const newIndex = currentTeamMember === 0 ? teamMembers.length - 1 : currentTeamMember - 1;
                  setCurrentTeamMember(newIndex);
                  resetAutoSwipe();
                }}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <span className="text-2xl text-slate-600">‹</span>
              </button>

              <div className="text-center">
                <p className="text-sm text-slate-500">
                  Meet our team • Auto-advancing every 4 seconds
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {currentTeamMember + 1} of {teamMembers.length}
                </p>
              </div>

              <button
                onClick={() => {
                  const newIndex = currentTeamMember === teamMembers.length - 1 ? 0 : currentTeamMember + 1;
                  setCurrentTeamMember(newIndex);
                  resetAutoSwipe();
                }}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <span className="text-2xl text-slate-600">›</span>
              </button>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
              <p className="text-lg font-semibold text-green-800 mb-2">
                🎉 Thank You to Our Amazing Team!
              </p>
              <p className="text-green-600">
                Behind Greetin is a talented team of passionate creators bringing joy and connection to people worldwide, completely free.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Ready to Start Creating?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of happy users who are already sending beautiful greeting cards for free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/"
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#000F3A] to-[#002D89] text-white shadow-md hover:shadow-xl transition text-lg font-semibold"
            >
              Start Creating Free Cards
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-3 rounded-2xl border-2 border-[#001B5E] text-[#000F3A] hover:bg-[#E5E9FF] transition text-lg font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

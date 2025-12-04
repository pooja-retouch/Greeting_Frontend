import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function About() {
  const [aiQuotes, setAiQuotes] = useState([]);
  const [loadingQuotes, setLoadingQuotes] = useState(true);

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
      <Navbar />
      
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

        {/* How We Keep It Free */}
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-8 border border-blue-200 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">How We Keep It Free</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              You might wonder how we can offer such a service completely free. Here's our approach:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Efficient Technology</h3>
              <p className="text-slate-600 mb-4">
                We use modern, efficient technology that keeps our costs minimal. 
                Our lean approach means we can serve millions without the high expenses 
                of traditional greeting card companies.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <span className="text-xl">⚡</span>
                <span className="font-semibold">Lightning fast & cost-effective</span>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Focus on Essentials</h3>
              <p className="text-slate-600 mb-4">
                Instead of adding unnecessary features that increase costs, 
                we focus on what matters most: creating beautiful, meaningful 
                greeting cards that people actually want to send.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <span className="text-xl">🎯</span>
                <span className="font-semibold">Focused on core features</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200 text-center">
            <p className="text-lg font-semibold text-green-800">
              💝 Our promise to you: Greetin will always be free. No plans to charge, ever.
            </p>
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
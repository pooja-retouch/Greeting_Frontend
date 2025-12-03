import React, { useState } from "react";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";

export default function Landing() {
  // Sample greeting cards data
  const greetingCards = [
    {
      id: 1,
      title: "New Year Celebration",
      category: "Holiday",
      color: "from-blue-500 to-teal-400",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)",
      icon: "🎉"
    },
    {
      id: 2,
      title: "Christmas Wishes",
      category: "Holiday",
      color: "from-emerald-500 to-green-400",
      gradient: "linear-gradient(135deg, #10b981 0%, #22c55e 100%)",
      icon: "🎄"
    },
    {
      id: 3,
      title: "Birthday Greetings",
      category: "Celebration",
      color: "from-purple-500 to-pink-400",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      icon: "🎂"
    },
    {
      id: 4,
      title: "Thank You Cards",
      category: "Appreciation",
      color: "from-amber-500 to-orange-400",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #fb923c 100%)",
      icon: "🙏"
    }
  ];

  const features = [
    {
      title: "AI-Powered Design",
      description: "Our AI generates unique designs based on your preferences and occasion.",
      icon: "✨"
    },
    {
      title: "Instant Generation",
      description: "Create professional greeting cards in under 2 minutes with our guided process.",
      icon: "⚡"
    },
    {
      title: "Personalized Messages",
      description: "AI crafts heartfelt messages tailored to each recipient's relationship with you.",
      icon: "💝"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700">AI-Powered • No Design Skills Needed</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Create <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Personalized</span><br />
                AI Greeting Cards Instantly
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Send beautiful, meaningful seasonal greetings to friends, family, or clients — crafted by AI in minutes.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center group">
                  <span>Start Creating Free</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold text-lg border-2 border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all">
                  Watch Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
                {[
                  { value: "50K+", label: "Cards Created" },
                  { value: "200+", label: "Templates" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "<2min", label: "Average Time" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-slate-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Create Your Perfect Greeting Card in 5 Simple Steps
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our AI-powered generator guides you through creating beautiful, personalized cards for any occasion.
              </p>
            </div>

            {/* Main Card with Form */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">AI Greeting Card Generator</h3>
                    <p className="text-blue-100 mt-1">Complete all steps to generate your personalized card</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium">Live Preview</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-8">
                <div className="max-w-4xl mx-auto">
                  <MultiStepForm />
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-slate-50 p-6 border-t border-slate-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex flex-wrap items-center gap-3 text-slate-600">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Secure & Private</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">No Credit Card Required</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Free Preview</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center">
                    Generate Card Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose CardCraft AI?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Professional results with zero design experience required
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full">
                    <div className="text-4xl mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Beautiful Templates for Every Occasion
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Choose from our professionally designed templates, or let AI create a unique design for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {greetingCards.map((card) => (
                <div 
                  key={card.id} 
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                    {/* Card Preview */}
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${card.color} transition-transform duration-500 group-hover:scale-105`}
                        style={{ background: card.gradient }}
                      >
                        {/* Card Design Elements */}
                        <div className="absolute top-6 left-6 right-6">
                          <div className="h-8 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="h-20 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl">{card.icon}</div>
                        </div>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          Use This Template
                        </button>
                      </div>
                    </div>
                    
                    {/* Card Info */}
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">{card.title}</h4>
                          <span className="text-sm text-slate-500">{card.category}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="text-amber-500">★★★★☆</div>
                          <span className="ml-1 text-sm font-semibold text-slate-700">4.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="px-8 py-3 bg-white text-slate-700 rounded-xl font-semibold text-lg border-2 border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all inline-flex items-center group">
                View All 200+ Templates
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of users who are already creating beautiful, personalized greeting cards with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                Start Creating Free
              </button>
              <button className="px-8 py-4 bg-transparent text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/10 transition-all">
                Schedule Team Demo
              </button>
            </div>
            <p className="text-sm text-blue-100 mt-6">
              No credit card required • Free 14-day trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
import React, { useState } from "react";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";

export default function Landing() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center glass px-6 py-3 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-white font-medium">✨ Powered by AI • Create in Minutes</span>
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight animate-slide-up">
              Create Magical
              <br />
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Greeting Cards
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Transform your heartfelt messages into stunning visual experiences with the power of artificial intelligence
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <button className="group bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center">
                Start Creating Free
                <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="glass-strong text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center group">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "50K+", label: "Happy Users" },
                { value: "200+", label: "Templates" },
                { value: "98%", label: "Satisfaction" },
                { value: "<2min", label: "Creation Time" }
              ].map((stat, index) => (
                <div key={index} className="glass-strong p-6 rounded-2xl hover:scale-105 transition-transform">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section id="create" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Create Your Card in 6 Simple Steps
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Our AI guides you through a seamless process to craft the perfect greeting card
            </p>
          </div>

          {/* Form Container */}
          <div className="glass-strong rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
            {/* Form Header */}
            <div className="gradient-bg p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-4xl">🎨</span>
                </div>
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-2">AI Card Generator</h3>
              <p className="text-purple-100">Let's create something beautiful together</p>
            </div>

            {/* Form Content */}
            <div className="p-8 md:p-12">
              <MultiStepForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Why Choose Greetins?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Professional results with zero design experience required
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "AI-Powered Design",
                description: "Our advanced AI generates unique, personalized designs based on your preferences and the occasion.",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Create professional greeting cards in under 2 minutes with our intuitive guided process.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: "💝",
                title: "Personal Touch",
                description: "AI crafts heartfelt, authentic messages tailored to each recipient's special relationship.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "🎨",
                title: "200+ Templates",
                description: "Choose from hundreds of professionally designed templates for any occasion.",
                color: "from-orange-500 to-amber-500"
              },
              {
                icon: "📱",
                title: "Multi-Platform",
                description: "Download, email, or share directly to social media and messaging platforms.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "🔒",
                title: "Private & Secure",
                description: "Your data is encrypted and secure. We never share your personal information.",
                color: "from-violet-500 to-purple-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="glass-strong p-8 rounded-3xl hover:scale-105 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:animate-bounce`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section id="templates" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Beautiful Templates for Every Occasion
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Professionally designed templates that make your message shine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "New Year", icon: "🎉", color: "from-blue-500 to-cyan-500" },
              { title: "Christmas", icon: "🎄", color: "from-red-500 to-green-500" },
              { title: "Birthday", icon: "🎂", color: "from-pink-500 to-purple-500" },
              { title: "Thank You", icon: "🙏", color: "from-orange-500 to-amber-500" },
              { title: "Wedding", icon: "💑", color: "from-rose-500 to-pink-500" },
              { title: "Anniversary", icon: "💕", color: "from-red-500 to-pink-500" },
              { title: "Graduation", icon: "🎓", color: "from-indigo-500 to-blue-500" },
              { title: "Get Well", icon: "🌺", color: "from-teal-500 to-green-500" }
            ].map((template, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="glass-strong rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl">
                  <div className={`aspect-[4/5] bg-gradient-to-br ${template.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-7xl group-hover:scale-125 transition-transform duration-300">
                        {template.icon}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Use Template
                      </button>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-800 text-lg">{template.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="glass-strong px-8 py-4 rounded-full text-gray-800 font-bold text-lg hover:bg-white transition-all inline-flex items-center group">
              View All 200+ Templates
              <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-12 md:p-16 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 text-4xl shadow-2xl animate-bounce">
              ✨
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of users creating beautiful, personalized greeting cards with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
                Start Creating Free
              </button>
              <button className="glass px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-white/20 transition-all">
                Schedule Team Demo
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              No credit card required • Free forever • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8">
            <div className="text-center text-purple-100">
              <p className="font-medium mb-2">Made with ❤️ by Greetins</p>
              <p className="text-sm opacity-75">© 2025 Greetins reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

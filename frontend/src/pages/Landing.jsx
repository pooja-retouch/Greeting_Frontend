import React from "react";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";
import TestimonialsSlider from "../components/MultiStepForm/TestimonialsSlider";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FF] via-[#F0F7FF] to-[#E3F2FF] relative animate-in fade-in duration-700">

      {/* Animated SVG Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Cards SVG */}
        <svg className="absolute top-10 left-10 w-32 h-32 animate-bounce opacity-20" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" style={{animationDelay: '0s', animationDuration: '3s'}}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>

        {/* Heart SVG */}
        <svg className="absolute top-20 right-16 w-24 h-24 animate-pulse text-red-300 opacity-30" fill="currentColor" viewBox="0 0 24 24" style={{animationDelay: '1s'}}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>

        {/* Sparkle SVG */}
        <svg className="absolute bottom-20 left-20 w-16 h-16 animate-ping text-yellow-400 opacity-25" viewBox="0 0 24 24" fill="currentColor" style={{animationDelay: '2s', animationDuration: '2s'}}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>

        {/* Flower SVG */}
        <svg className="absolute bottom-10 right-20 w-20 h-20 text-pink-300 opacity-20 animate-spin" style={{animationDuration: '8s'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l.48 2.22A2.5 2.5 0 0014 6l2.22.48 1.5 1.5.48 2.22A2.5 2.5 0 0020 12l-2.22.48A2.5 2.5 0 0018 14l-.48 2.22-1.5 1.5-2.22.48A2.5 2.5 0 0012 20l-.48-2.22A2.5 2.5 0 0010 18l-2.22-.48-1.5-1.5L6 14c-.5-1.5-2.22-.48-2.22-.48L2 12c1.5-.5 1.5-2.22 1.5-2.22.48-2.22 2.22-.48 2.22-.48L10 6c1.5 0 1.5-1.5 1.5-1.5z"/>
        </svg>

        {/* Star SVG */}
        <svg className="absolute top-1/3 left-1/4 w-12 h-12 text-blue-300 opacity-30 animate-bounce" style={{animationDelay: '0.5s'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>

        {/* Gift Box SVG */}
        <svg className="absolute top-2/3 right-1/3 w-18 h-18 text-purple-400 opacity-25 animate-pulse" style={{animationDelay: '1.5s'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 7h-3V6a4 4 0 00-8 0v1H4a1 1 0 00-1 1v11a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1zM10 6a2 2 0 014 0v1h-4V6zm8 13H6v-3a1 1 0 011-1h2a1 1 0 001-1V9h2v5a1 1 0 001 1h2a1 1 0 011 1v3z"/>
        </svg>

        {/* Christmas Tree SVG */}
        <svg className="absolute bottom-1/4 right-1/4 w-20 h-20 text-green-400 opacity-20 animate-bounce" style={{animationDelay: '2.5s'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87.18 6.88L12 17.77l-5.18 3.25.18-6.88-5-4.87 6.91-1.01L12 2z"/>
          <rect x="11" y="16" width="2" height="8" rx="1"/>
        </svg>

        {/* Balloon SVG */}
        <svg className="absolute top-1/4 left-1/2 w-16 h-20 text-blue-400 opacity-25 animate-pulse" style={{animationDelay: '3s'}} fill="currentColor" viewBox="0 0 24 24">
          <ellipse cx="12" cy="8" rx="6" ry="7"/>
          <line x1="12" y1="15" x2="12" y2="22" stroke="currentColor" strokeWidth="1"/>
          <path d="M8 22Q12 25 16 22"/>
        </svg>

        {/* Snowflakes SVG */}
        <svg className="absolute top-3/4 left-1/4 w-12 h-12 text-white opacity-30 animate-ping" style={{animationDelay: '3.5s', animationDuration: '3s'}} fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path d="M12 8l3.09 6.26L22 15l-6.18 3.09L12 24l-3.82-5.91L2 15l6.91-0.74L12 8z"/>
        </svg>

        {/* Rocket SVG */}
        <svg className="absolute top-1/6 right-1/6 w-14 h-14 text-red-400 opacity-25 animate-bounce" style={{animationDelay: '4s'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.5 2l7 14H16l2 3-1 1-3-1-1-8H9l-1 8-3 1-1-1 2-3h0.5L8.5 2z"/>
        </svg>

        {/* Party Horn SVG */}
        <svg className="absolute bottom-1/3 left-1/3 w-12 h-12 text-orange-400 opacity-30 animate-pulse" style={{animationDelay: '4.5s'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 12l4-4 4 4-4 4z"/>
          <circle cx="12" cy="12" r="8" opacity="0.3"/>
        </svg>

        {/* Trophy SVG */}
        <svg className="absolute top-1/3 right-2/3 w-10 h-10 text-yellow-500 opacity-25 animate-sparkle" style={{animationDelay: '5s'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 9H4V2h16v7h-2a5 5 0 00-4-2.5A5 5 0 008 9H6z"/>
          <rect x="9" y="19" width="6" height="3" rx="1"/>
          <rect x="7" y="14" width="10" height="2" rx="1"/>
        </svg>

        {/* Music Note SVG */}
        <svg className="absolute bottom-2/3 right-1/2 w-8 h-8 text-indigo-400 opacity-25 animate-pulse" style={{animationDelay: '5.5s'}} fill="currentColor" viewBox="0 0 24 24">
          <circle cx="9" cy="18" r="3" opacity="0.8"/>
          <path d="M9 15V6l6 4.5"/>
        </svg>

        {/* Crown SVG */}
        <svg className="absolute top-2/3 left-1/6 w-12 h-8 text-yellow-400 opacity-20 animate-bounce" style={{animationDelay: '6s'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2 8h6l-5 4 2 8-6-4-6 4 2-8-5-4h6z"/>
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* ========== HERO SECTION (Writeups LEFT, Card RIGHT) ========== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 animate-in slide-in-from-bottom duration-500 delay-100">
          {/* LEFT SIDE: WRITEUPS */}
          <div className="order-1 lg:order-1">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-bold text-lg">
              🎁 100% FREE FOREVER - NO PAYMENTS EVER
            </div>

            <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
              Create Beautiful Greeting Cards
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000F3A] to-[#002D89]">
                With AI-Powered Templates
              </span>
            </h1>

            <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 rounded-r-lg">
              <p className="text-lg font-semibold text-green-700 flex items-center gap-2">
                <span className="text-xl">✓</span>
                AI-generated personalized messages
              </p>
              <p className="text-lg font-semibold text-green-700 flex items-center gap-2 mt-2">
                <span className="text-xl">✓</span>
                Beautiful template backgrounds
              </p>
              <p className="text-lg font-semibold text-green-700 flex items-center gap-2 mt-2">
                <span className="text-xl">✓</span>
                Just 2 minutes to send your greeting card
              </p>
              <p className="text-lg font-semibold text-green-700 flex items-center gap-2 mt-2">
                <span className="text-xl">✓</span>
                Professional card creation with signature
              </p>
            </div>

            <p className="text-xl text-slate-700 mb-8">
              Our AI creates personalized messages while you choose from beautiful templates.
              Perfect for <span className="font-bold text-[#001B5E]">holidays, birthdays, and celebrations</span>.
              Create professional greeting cards in just a few steps - completely free!
            </p>

            <button
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#000F3A] to-[#002D89] text-white shadow-md hover:shadow-xl hover:scale-[1.02] transition-all text-lg font-semibold"
            >
              Start Creating Your Card
            </button>
          </div>

          {/* RIGHT SIDE: CARD/FORM */}
          <div className="order-2 lg:order-2 relative">
            <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-blue-200 animate-[fadeIn_1s_ease]">
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                  🎁 Forever Free - No Payment Needed
                </span>
              </div>
              <h2 className="text-3xl font-semibold text-slate-800 mb-6 text-center">
                Send Beautiful and Customized AI Greeting Card
              </h2>
              <MultiStepForm />
            </div>
          </div>
        </div>

        {/* ========== FEATURES & BENEFITS SECTION ========== */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Choose Our AI Greeting Cards?
            </h2>
            <p className="text-xl text-slate-600">
              Professional, personalized, and completely free
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer group animate-in slide-in-from-left duration-500 delay-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-xl font-bold text-[#001B5E] mb-3 group-hover:text-blue-600 transition-colors duration-300">AI-Powered Messages</h3>
              <p className="text-slate-700 group-hover:text-slate-800 transition-colors duration-300">
                Our AI creates personalized, heartfelt messages tailored to your recipient
                and occasion. No more generic cards!
              </p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
              </div>
            </div>

            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer group animate-in fade-in duration-500 delay-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 animate-pulse group-hover:animate-none">🎨</div>
              <h3 className="text-xl font-bold text-[#001B5E] mb-3 group-hover:text-purple-600 transition-colors duration-300">Beautiful Templates</h3>
              <p className="text-slate-700 group-hover:text-slate-800 transition-colors duration-300">
                Choose from professionally designed templates for Christmas, New Year,
                and birthdays. Each template perfectly frames your message.
              </p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
              </div>
            </div>

            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer group animate-in slide-in-from-right duration-500 delay-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💖</div>
              <h3 className="text-xl font-bold text-[#001B5E] mb-3 group-hover:text-pink-600 transition-colors duration-300">Personal Touch</h3>
              <p className="text-slate-700 group-hover:text-slate-800 transition-colors duration-300">
                Add your personal signature and see the final professional result.
                Perfect for colleagues, clients, family, and friends.
              </p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== HOW IT WORKS SECTION ========== */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Create beautiful greeting cards in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-500 cursor-pointer group animate-in slide-in-from-left duration-700 delay-200">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:animate-pulse shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="group-hover:scale-110 transition-transform duration-300">1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-yellow-900 opacity-0 group-hover:opacity-100 animate-in zoom-in duration-200">
                  ✏️
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors duration-300">Enter Details</h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Add your name and recipient information</p>
              <div className="w-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-full mx-auto mt-3 transition-all duration-500 rounded-full"></div>
            </div>

            <div className="text-center bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-500 cursor-pointer group animate-in slide-in-from-bottom duration-700 delay-400">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:animate-pulse shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce">2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-xs font-bold text-purple-900 opacity-0 group-hover:opacity-100 animate-in zoom-in duration-200 delay-100">
                  🤖
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">AI Message</h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Choose occasion and tone, generate AI message</p>
              <div className="w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full mx-auto mt-3 transition-all duration-500 rounded-full"></div>
            </div>

            <div className="text-center bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-500 cursor-pointer group animate-in slide-in-from-bottom duration-700 delay-600">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:animate-pulse shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="group-hover:scale-110 transition-transform duration-300">3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-xs font-bold text-pink-900 opacity-0 group-hover:opacity-100 animate-in zoom-in duration-200 delay-200">
                  🎨
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">Select Template</h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Pick from beautiful designs and preview</p>
              <div className="w-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full mx-auto mt-3 transition-all duration-500 rounded-full"></div>
            </div>

            <div className="text-center bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-500 cursor-pointer group animate-in slide-in-from-right duration-700 delay-800">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:animate-pulse shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="group-hover:scale-110 transition-transform duration-300">4</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center text-xs font-bold text-red-900 opacity-0 group-hover:opacity-100 animate-in zoom-in duration-200 delay-300">
                  📧
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">Send Card</h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Professional card created with signature</p>
              <div className="w-0 h-1 bg-gradient-to-r from-pink-400 to-red-500 group-hover:w-full mx-auto mt-3 transition-all duration-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* ========== TESTIMONIALS SECTION ========== */}
        <div className="mb-24">
          <TestimonialsSlider />
        </div>

        {/* ========== FINAL CTA SECTION ========== */}
        <div className="mb-16 p-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">🎉 Start Creating Beautiful Cards Today!</h2>
          <p className="text-xl mb-2">AI-powered messages • Professional templates • 100% Free Forever</p>
          <p className="text-lg mb-6">No signup required • No credit card needed • Unlimited cards</p>
        </div>

        {/* ========== FOOTER ========== */}
        
      </div>
    </div>
  );
}

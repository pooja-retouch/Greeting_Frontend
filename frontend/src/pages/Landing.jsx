import React from "react";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";
import TestimonialsSlider from "../components/MultiStepForm/TestimonialsSlider";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FF] via-[#F0F7FF] to-[#E3F2FF] relative">

      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* ========== HERO SECTION (Writeups LEFT, Card RIGHT) ========== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
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
            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-[#001B5E] mb-3">AI-Powered Messages</h3>
              <p className="text-slate-700">
                Our AI creates personalized, heartfelt messages tailored to your recipient
                and occasion. No more generic cards!
              </p>
            </div>

            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-[#001B5E] mb-3">Beautiful Templates</h3>
              <p className="text-slate-700">
                Choose from professionally designed templates for Christmas, New Year,
                and birthdays. Each template perfectly frames your message.
              </p>
            </div>

            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💖</div>
              <h3 className="text-xl font-bold text-[#001B5E] mb-3">Personal Touch</h3>
              <p className="text-slate-700">
                Add your personal signature and see the final professional result.
                Perfect for colleagues, clients, family, and friends.
              </p>
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
            <div className="text-center bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Enter Details</h3>
              <p className="text-slate-600">Add your name and recipient information</p>
            </div>

            <div className="text-center bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">AI Message</h3>
              <p className="text-slate-600">Choose occasion and tone, generate AI message</p>
            </div>

            <div className="text-center bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Select Template</h3>
              <p className="text-slate-600">Pick from beautiful designs and preview</p>
            </div>

            <div className="text-center bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Send Card</h3>
              <p className="text-slate-600">Professional card created with signature</p>
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

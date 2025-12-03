import React from "react";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";
import TestimonialsSlider from "../components/TestimonialsSlider";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FF] via-[#F0F7FF] to-[#E3F2FF] relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="container mx-auto px-6 py-8 lg:py-16 relative z-10">
        {/* Hero Form Section - First Thing Visitors See */}
        <div className="max-w-5xl mx-auto mb-12 lg:mb-20">
          <div className="bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 lg:p-10 border border-blue-200/50 hover:shadow-3xl transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
                <span className="text-green-600 font-semibold text-sm">🎁 100% FREE</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-3 leading-tight">
                Create Beautiful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI-Powered</span>
                <br />Greeting Cards
              </h1>
              <p className="text-slate-600 text-lg">Personalized messages, stunning designs, absolutely free</p>
            </div>
            <div className="relative">
              <MultiStepForm />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
              Why Choose Our Free Greeting Service?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">No Costs Ever</h3>
                <p className="text-slate-600 text-sm">Completely free with no hidden charges</p>
              </div>
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">AI-Powered Designs</h3>
                <p className="text-slate-600 text-sm">Beautiful, personalized cards every time</p>
              </div>
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Instant Creation</h3>
                <p className="text-slate-600 text-sm">Create and send cards in minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16 lg:mb-24">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 rounded-3xl mx-4 lg:mx-0">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Loved by Thousands</h3>
              <p className="text-slate-600 text-lg">See what our happy users have to say</p>
            </div>
            <TestimonialsSlider />
          </div>
        </div>

        {/* How-To Section */}
        <div className="mb-16 lg:mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">3-Step</span> Process
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Create stunning greeting cards in just three easy steps
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-blue-200 shadow-xl max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">🎯</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Step 1</h4>
                  <h5 className="text-lg font-semibold text-blue-600 mb-2">Choose Your Style</h5>
                  <p className="text-slate-600">Select occasion, tone, and customize your message</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">⚡</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Step 2</h4>
                  <h5 className="text-lg font-semibold text-purple-600 mb-2">AI Generation</h5>
                  <p className="text-slate-600">Our AI creates beautiful designs and messaging</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">📤</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Step 3</h4>
                  <h5 className="text-lg font-semibold text-green-600 mb-2">Send Instantly</h5>
                  <p className="text-slate-600">Preview and send your personalized greeting</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl">
                <div className="text-white">
                  <div className="text-2xl mb-1">🎉</div>
                  <h4 className="font-bold">Perfect Results</h4>
                  <p className="text-slate-300 text-sm">Every time</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <p className="text-slate-300 text-sm">See exactly what</p>
                  <p className="text-white font-medium">your recipients get →</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#000F3A] to-[#002D89] bg-clip-text text-transparent">
                Greetin
              </h2>
              <p className="text-slate-600 mt-2">Beautiful greetings, absolutely free.</p>
            </div>
            <div className="flex gap-8 mt-6 md:mt-0">
              <a href="/privacy" className="text-slate-600 hover:text-[#001B5E] transition font-medium">
                Privacy Policy
              </a>
              <a href="/terms" className="text-slate-600 hover:text-[#001B5E] transition font-medium">
                Terms of Use
              </a>
              <a href="/contact" className="text-slate-600 hover:text-[#001B5E] transition font-medium">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Greetin. All rights reserved. Forever free to use.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

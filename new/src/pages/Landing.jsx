import React from "react";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";
import TestimonialsSlider from "../components/TestimonialsSlider";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FF] via-[#F0F7FF] to-[#E3F2FF] relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
              Create Beautiful Greeting Cards
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000F3A] to-[#002D89]">
                Absolutely Free Forever
              </span>
            </h1>

            <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 rounded-r-lg">
              <p className="text-lg font-semibold text-green-700">✓ No credit card required</p>
              <p className="text-lg font-semibold text-green-700">✓ No hidden fees</p>
              <p className="text-lg font-semibold text-green-700">✓ Unlimited greetings</p>
            </div>

            <p className="text-xl text-slate-700 mb-8">
              Personalized AI-generated greeting cards, completely free. 
              Create, customize, and send beautiful cards instantly—no cost, no commitment.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-8 py-3 rounded-2xl bg-[#000F3A] text-white shadow-md hover:bg-[#001B5E] transition text-lg font-semibold">
                Start Creating Free Cards
              </button>
              <button className="px-8 py-3 rounded-2xl border-2 border-[#001B5E] text-[#000F3A] hover:bg-[#E5E9FF] transition text-lg font-semibold">
                See Examples
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-blue-200 animate-[fadeIn_1s_ease]">
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                  🎁 100% Free to Use
                </span>
              </div>
              <h2 className="text-3xl font-semibold text-slate-800 mb-6 text-center">Create Your Free Greeting</h2>
              <MultiStepForm />
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
            See Your Beautiful Creation
          </h2>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-200 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Preview Your Card</h3>
                <p className="text-slate-600 mb-6">
                  Every greeting card you create gets a beautiful preview. See exactly what your recipients will see before sending!
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-200">
                  <h4 className="font-semibold text-lg text-slate-800 mb-2">Features:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• High-resolution preview</li>
                    <li>• Real-time design updates</li>
                    <li>• Mobile-responsive view</li>
                    <li>• Shareable preview link</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-[#000F3A] to-[#002D89] rounded-2xl p-6 text-white shadow-2xl">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🎉</div>
                      <h3 className="text-2xl font-bold mb-2">Your Custom Greeting</h3>
                      <p className="text-blue-100">Beautiful preview of your creation</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg border">
                    <span className="text-sm font-semibold text-slate-700">Live Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24">
          <TestimonialsSlider />
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
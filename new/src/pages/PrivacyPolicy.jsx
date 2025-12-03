import React from "react";
import Navbar from "../components/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg text-blue-700">
              <strong>Important:</strong> Greetin is a free service. We never collect payment information or require credit cards.
            </p>
          </div>

          <div className="space-y-8">
            {/* Add all the privacy policy sections from the HTML file here */}
            {/* Convert each section to JSX format */}
          </div>

          <div className="pt-8 border-t border-blue-200">
            <p className="text-slate-500 text-sm">Last updated: December 2024</p>
            <p className="text-slate-500 text-sm mt-2">Greetin - Free Greeting Card Service</p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a href="/" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] text-white rounded-xl font-semibold hover:opacity-90 transition">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
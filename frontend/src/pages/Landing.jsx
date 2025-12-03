import React from "react";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Minimal Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Create Your Greeting Card
            </h1>
            
            <p className="text-slate-600">
              Follow the steps below to generate and send your seasonal greeting.
            </p>
          </div>

          {/* MultiStepForm Container */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
            
            {/* Form Header */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">AI Greeting Card Generator</h2>
                  <p className="text-blue-100 text-sm mt-1">Complete all steps to generate your card</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm font-medium">AI Ready</span>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <MultiStepForm />
            </div>

            {/* Form Footer */}
            <div className="bg-slate-50 p-6 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="text-sm text-slate-600 mb-4 sm:mb-0">
                  Your data is secure and private
                </div>
                <button 
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-medium shadow hover:shadow-md transition-all"
                  onClick={() => {/* Handle form submission */}}
                >
                  Generate Card
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
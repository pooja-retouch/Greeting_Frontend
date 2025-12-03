import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 glass-strong rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">✨</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white font-display">
                Greetins
              </h1>
              <p className="text-xs text-purple-200">AI-Powered Greetings</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-purple-200 transition-colors font-medium">
              Home
            </a>
            <a href="#templates" className="text-white hover:text-purple-200 transition-colors font-medium">
              Templates
            </a>
            <a href="#features" className="text-white hover:text-purple-200 transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-white hover:text-purple-200 transition-colors font-medium">
              Pricing
            </a>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="glass-strong px-4 py-2 rounded-full hidden sm:flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-sm">
                    {user.username?.[0]?.toUpperCase() || 'U'}
                  </div>
                  <span className="text-gray-800 font-medium">{user.username}</span>
                </div>
                <button
                  onClick={logout}
                  className="glass-strong px-4 py-2 rounded-full text-gray-800 font-medium hover:bg-white hover:shadow-lg transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button className="glass-strong px-5 py-2.5 rounded-full text-gray-800 font-semibold hover:bg-white hover:shadow-lg transition-all">
                  Sign In
                </button>
                <button className="bg-white px-5 py-2.5 rounded-full text-purple-600 font-semibold hover:shadow-xl transition-all hover:scale-105">
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

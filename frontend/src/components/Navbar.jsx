import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white/60 backdrop-blur-xl shadow-sm border-b border-blue-200 sticky top-0 z-50 animate-in slide-in-from-top duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-[#000F3A] to-[#002D89] bg-clip-text text-transparent hover:scale-110 transform transition-all duration-300 animate-pulse">
          <span className="animate-bounce inline-block mr-2">🎨</span>
          <span>Greetin</span>
        </Link>

        <div className="flex gap-10 text-slate-700 font-medium text-lg">
          <Link to="/" className="hover:text-[#001B5E] transition-all duration-300 hover:scale-110 transform relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#001B5E] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="hover:text-[#001B5E] transition-all duration-300 hover:scale-110 transform relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#001B5E] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="hover:text-[#001B5E] transition-all duration-300 hover:scale-110 transform relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#001B5E] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white/60 backdrop-blur-xl shadow-sm border-b border-blue-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-[#000F3A] to-[#002D89] bg-clip-text text-transparent">
          Greetin
        </Link>

        <div className="flex gap-10 text-slate-700 font-medium text-lg">
          <Link to="/" className="hover:text-[#001B5E] transition">Home</Link>
          <Link to="/about" className="hover:text-[#001B5E] transition">About</Link>
          <Link to="/contact" className="hover:text-[#001B5E] transition">Contact</Link>
          <Link to="/sent-cards" className="hover:text-[#001B5E] transition">Sent Cards</Link>
        </div>
      </div>
    </nav>
  );
}
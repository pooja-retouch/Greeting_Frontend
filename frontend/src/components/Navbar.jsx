import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Greeting Cards</h1>

        <div className="flex gap-6 text-gray-600">
          <a href="#">Home</a>
          <a href="#">Templates</a>
          <a href="#">Pricing</a>
        </div>
      </div>
    </nav>
  );
}

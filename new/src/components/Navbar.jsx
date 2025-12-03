import React from "react";


export default function Navbar() {
return (
<nav className="bg-white/60 backdrop-blur-xl shadow-sm border-b border-blue-200 sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<h1 className="text-3xl font-bold bg-gradient-to-r from-[#000F3A] to-[#002D89] bg-clip-text text-transparent">
Greetin
</h1>


<div className="flex gap-10 text-slate-700 font-medium text-lg">
<a className="hover:text-[#001B5E] transition" href="#">Home</a>
<a className="hover:text-[#001B5E] transition" href="#">Templates</a>
<a className="hover:text-[#001B5E] transition" href="#">Pricing</a>
</div>
</div>
</nav>
);
}
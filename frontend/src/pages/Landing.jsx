import React from "react";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";


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
For Anyone, Anytime
</span>
</h1>


<p className="text-xl text-slate-700 mb-8">
Personalized greeting cards, instantly generated using AI.
Clean, fast and beautifully designed.
</p>


<div className="flex gap-4 mt-8">
<button className="px-8 py-3 rounded-2xl bg-[#000F3A] text-white shadow-md hover:bg-[#001B5E] transition text-lg font-semibold">
Start for Free
</button>
<button className="px-8 py-3 rounded-2xl border-2 border-[#001B5E] text-[#000F3A] hover:bg-[#E5E9FF] transition text-lg font-semibold">
Explore Templates
</button>
</div>
</div>


<div className="relative">
<div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-blue-200 animate-[fadeIn_1s_ease]">
<h2 className="text-3xl font-semibold text-slate-800 mb-6">Create Your Greeting</h2>
<MultiStepForm />
</div>
</div>
</div>
</div>
</div>
);
}
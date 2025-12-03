import React from "react";


export default function StepSender({ sender, setSender, onNext }) {
const canContinue = sender.name && sender.email && sender.whatsapp;


return (
<div className="space-y-6">
<h3 className="text-2xl font-semibold text-slate-800">Sender Information</h3>


<div className="grid md:grid-cols-3 gap-6">
{["name", "email", "whatsapp"].map((field, i) => (
<input
key={i}
className="p-4 bg-white/80 border border-blue-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-[#B8C2FF] outline-none text-lg"
placeholder={`Your ${field}`}
value={sender[field]}
onChange={(e) => setSender({ ...sender, [field]: e.target.value })}
/>
))}
</div>


<button
disabled={!canContinue}
className={`px-8 py-3 rounded-2xl text-white text-lg font-semibold shadow-md transition-all ${
canContinue
? "bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] hover:opacity-90"
: "bg-slate-300 cursor-not-allowed"
}`}
onClick={onNext}
>
Next
</button>
</div>
);
}   
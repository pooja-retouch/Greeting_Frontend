import React from "react";

export default function StepSender({ sender, setSender, onNext }) {
  const canContinue = sender.name && sender.email && sender.whatsapp;

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-slate-800">Sender Information</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Your Full Name
          </label>
          <input
            className="w-full p-4 bg-white/80 border border-blue-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-[#B8C2FF] outline-none text-lg placeholder:text-slate-400"
            placeholder="Enter your name"
            value={sender.name}
            onChange={(e) => setSender({ ...sender, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Your Email Address
          </label>
          <input
            className="w-full p-4 bg-white/80 border border-blue-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-[#B8C2FF] outline-none text-lg placeholder:text-slate-400"
            placeholder="example@email.com"
            value={sender.email}
            onChange={(e) => setSender({ ...sender, email: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Your WhatsApp Number
          </label>
          <input
            className="w-full p-4 bg-white/80 border border-blue-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-[#B8C2FF] outline-none text-lg placeholder:text-slate-400"
            placeholder="+1 234 567 8900"
            value={sender.whatsapp}
            onChange={(e) => setSender({ ...sender, whatsapp: e.target.value })}
          />
        </div>
      </div>

      <button
        disabled={!canContinue}
        className={`w-full px-8 py-3 rounded-2xl text-white text-lg font-semibold shadow-md transition-all mt-4 ${
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
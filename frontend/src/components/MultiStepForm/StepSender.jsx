import React, { useState } from "react";

export default function StepSender({ sender, setSender, onNext }) {
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (email) => {
    setSender({ ...sender, email });

    if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const canContinue = sender.name?.trim() && sender.email && validateEmail(sender.email);

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
            type="email"
            className={`w-full p-4 bg-white/80 border rounded-2xl shadow-sm focus:ring-4 focus:ring-[#B8C2FF] outline-none text-lg placeholder:text-slate-400 ${
              emailError ? "border-red-300 focus:ring-red-200" : "border-blue-200"
            }`}
            placeholder="example@email.com"
            value={sender.email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
          {emailError && (
            <p className="mt-1 text-sm text-red-600">{emailError}</p>
          )}
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

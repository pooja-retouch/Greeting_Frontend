import React from "react";

export default function StepEditMessage({ message, setMessage, onNext, onBack }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-slate-800">Edit Your Message</h3>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border border-blue-200 p-4 rounded-2xl mt-4 shadow-sm bg-white/80 focus:ring-4 focus:ring-[#B8C2FF] outline-none text-lg"
        rows={6}
      ></textarea>

      <div className="flex justify-between mt-6">
        <button
          className="px-6 py-3 bg-slate-200 rounded-xl"
          onClick={onBack}
        >
          Back
        </button>

        <button
          className="px-6 py-3 text-white rounded-xl shadow-md font-semibold bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] hover:opacity-90 transition"
          onClick={onNext}
        >
          Choose Template
        </button>
      </div>
    </div>
  );
}

import React from "react";

export default function StepSuccess({ onRestart }) {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold text-[#001B5E]">
        🎉 Greeting Created Successfully!
      </h2>

      <p className="text-slate-600 mt-3">
        Your greeting card is now ready.
      </p>

      <button
        className="mt-6 px-8 py-3 text-white rounded-xl shadow-md font-semibold bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] hover:opacity-90 transition"
        onClick={onRestart}
      >
        Create Another
      </button>
    </div>
  );
}

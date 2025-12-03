import React from "react";

export default function StepToneOccasion({
  tone,
  setTone,
  occasion,
  setOccasion,
  onNext,
  onBack,
  setGeneratedMessage,
}) {
  function generateMessage() {
    const baseMessage =
      occasion === "New Year"
        ? "Wishing you a joyful and successful New Year ahead!"
        : occasion === "Christmas"
        ? "Merry Christmas! May your holiday season be full of joy!"
        : "Warmest Season’s Greetings to you and your loved ones!";

    const tonePrefix =
      tone === "Warm"
        ? "Sending warm wishes, "
        : tone === "Funny"
        ? "Here's a cheerful laugh with your greeting, "
        : "With sincere regards, ";

    setGeneratedMessage(`${tonePrefix}${baseMessage}`);
    onNext();
  }

  return (
    <div>
      <h3 className="text-2xl font-semibold text-slate-800">
        Tone & Occasion
      </h3>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <select
          className="p-3 bg-white/80 border border-blue-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-[#B8C2FF] outline-none"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option>Warm</option>
          <option>Funny</option>
          <option>Formal</option>
        </select>

        <select
          className="p-3 bg-white/80 border border-blue-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-[#B8C2FF] outline-none"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>New Year</option>
          <option>Christmas</option>
          <option>Seasons Greeting</option>
        </select>
      </div>

      <div className="flex justify-between mt-6">
        <button
          className="px-6 py-3 bg-slate-200 rounded-xl"
          onClick={onBack}
        >
          Back
        </button>

        <button
          className="px-6 py-3 text-white rounded-xl shadow-md font-semibold bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] hover:opacity-90 transition"
          onClick={generateMessage}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

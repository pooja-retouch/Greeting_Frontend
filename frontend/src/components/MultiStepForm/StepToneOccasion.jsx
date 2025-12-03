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
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Tone & Occasion</h3>

      <div className="grid grid-cols-2 gap-4 mt-4">

        <select
          className="p-2 border rounded"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option>Warm</option>
          <option>Funny</option>
          <option>Formal</option>
        </select>

        <select
          className="p-2 border rounded"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>New Year</option>
          <option>Christmas</option>
          <option>Seasons Greeting</option>
        </select>

      </div>

      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-gray-200 rounded" onClick={onBack}>
          Back
        </button>
        <button
          className="px-4 py-2 bg-primary text-white rounded"
          onClick={generateMessage}
        >
          Generate
        </button>
      </div>
    </div>
  );
}


import React from "react";

export default function StepEditMessage({ message, setMessage, onNext, onBack }) {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Edit Message</h3>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border p-3 rounded mt-4"
        rows={6}
      ></textarea>

      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-gray-200 rounded" onClick={onBack}>
          Back
        </button>

        <button
          className="px-4 py-2 bg-primary text-white rounded"
          onClick={onNext}
        >
          Choose Template
        </button>
      </div>
    </div>
  );
}

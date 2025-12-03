import React from "react";

export default function StepSender({ sender, setSender, onNext }) {
  const canContinue =
    sender.name.trim() && sender.email.trim() && sender.whatsapp.trim();

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Sender Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
        <input
          className="p-2 border rounded"
          placeholder="Your name"
          value={sender.name}
          onChange={(e) => setSender({ ...sender, name: e.target.value })}
        />

        <input
          className="p-2 border rounded"
          placeholder="Your email"
          value={sender.email}
          onChange={(e) => setSender({ ...sender, email: e.target.value })}
        />

        <input
          className="p-2 border rounded"
          placeholder="WhatsApp number"
          value={sender.whatsapp}
          onChange={(e) => setSender({ ...sender, whatsapp: e.target.value })}
        />
      </div>

      <button
        disabled={!canContinue}
        className={`mt-4 px-4 py-2 rounded text-white ${
          canContinue ? "bg-primary" : "bg-gray-300"
        }`}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
}

import React from "react";

export default function StepRecipients({ recipients, setRecipients, onNext, onBack }) {
  function updateRecipient(i, field, value) {
    const updated = [...recipients];
    updated[i][field] = value;
    setRecipients(updated);
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-slate-800">Recipients</h3>

      {recipients.map((r, i) => (
        <div key={i} className="flex gap-4">
          <input
            className="p-4 bg-white/80 border border-blue-200 rounded-2xl shadow-sm w-1/2 focus:ring-4 focus:ring-[#B8C2FF] outline-none text-lg"
            placeholder="Recipient Name"
            value={r.name}
            onChange={(e) => updateRecipient(i, "name", e.target.value)}
          />

          <input
            className="p-4 bg-white/80 border border-blue-200 rounded-2xl shadow-sm w-1/2 focus:ring-4 focus:ring-[#B8C2FF] outline-none text-lg"
            placeholder="Recipient Email"
            value={r.email}
            onChange={(e) => updateRecipient(i, "email", e.target.value)}
          />
        </div>
      ))}

      <button
        className="px-4 py-2 border-2 border-[#002D89] text-[#000F3A] rounded-xl hover:bg-[#E5E9FF] shadow-sm transition"
        onClick={() => setRecipients([...recipients, { name: "", email: "" }])}
      >
        + Add another
      </button>

      <div className="flex justify-between pt-4">
        <button
          className="px-6 py-3 bg-slate-200 rounded-xl text-lg"
          onClick={onBack}
        >
          Back
        </button>

        <button
          className="px-6 py-3 text-white rounded-xl text-lg font-semibold shadow-md transition bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] hover:opacity-90"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

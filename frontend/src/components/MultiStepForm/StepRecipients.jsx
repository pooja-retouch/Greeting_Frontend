import React from "react";

export default function StepRecipients({
  recipients,
  setRecipients,
  onNext,
  onBack,
}) {
  function updateRecipient(i, field, value) {
    const updated = [...recipients];
    updated[i][field] = value;
    setRecipients(updated);
  }

  return (
    <div>
      <h3 className="text-xl font-semibold">Recipients</h3>

      {recipients.map((r, i) => (
        <div key={i} className="flex gap-3 mt-3">
          <input
            className="p-2 border rounded w-1/2"
            placeholder="Recipient name"
            value={r.name}
            onChange={(e) => updateRecipient(i, "name", e.target.value)}
          />

          <input
            className="p-2 border rounded w-1/2"
            placeholder="Recipient email"
            value={r.email}
            onChange={(e) => updateRecipient(i, "email", e.target.value)}
          />
        </div>
      ))}

      <button
        className="mt-3 border px-3 py-1 rounded"
        onClick={() =>
          setRecipients([...recipients, { name: "", email: "" }])
        }
      >
        Add another
      </button>

      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-gray-200 rounded" onClick={onBack}>
          Back
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

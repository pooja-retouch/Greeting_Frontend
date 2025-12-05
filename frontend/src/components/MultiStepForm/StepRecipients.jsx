import React, { useState } from "react";

export default function StepRecipients({ recipients, setRecipients, onNext, onBack }) {
  const [emailErrors, setEmailErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function updateRecipient(i, field, value) {
    const updated = [...recipients];
    updated[i][field] = value;

    // Validate email if the field being updated is email
    if (field === 'email') {
      const newEmailErrors = { ...emailErrors };
      if (value && !validateEmail(value)) {
        newEmailErrors[i] = "Please enter a valid email address";
      } else {
        delete newEmailErrors[i];
      }
      setEmailErrors(newEmailErrors);
    }

    setRecipients(updated);
  }

  // Check if all recipients have valid data (name and valid email)
  const canContinue = recipients.every((recipient) => {
    const isValidEmail = recipient.email && validateEmail(recipient.email);
    const hasName = recipient.name?.trim();
    return hasName && isValidEmail;
  });

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-slate-800">Recipients</h3>

      {recipients.map((r, i) => (
        <div key={i} className="flex gap-4">
          <div className="w-1/2">
            <input
              className="w-full p-4 bg-white/80 border border-blue-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-[#B8C2FF] outline-none text-lg"
              placeholder="Recipient Name"
              value={r.name}
              onChange={(e) => updateRecipient(i, "name", e.target.value)}
            />
          </div>

          <div className="w-1/2">
            <input
              type="email"
              className={`w-full p-4 bg-white/80 border rounded-2xl shadow-sm focus:ring-4 focus:ring-[#B8C2FF] outline-none text-lg ${
                emailErrors[i] ? "border-red-300 focus:ring-red-200" : "border-blue-200"
              }`}
              placeholder="Recipient Email"
              value={r.email}
              onChange={(e) => updateRecipient(i, "email", e.target.value)}
            />
            {emailErrors[i] && (
              <p className="mt-1 text-sm text-red-600">{emailErrors[i]}</p>
            )}
          </div>
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
          disabled={!canContinue}
          className={`px-6 py-3 text-white rounded-xl text-lg font-semibold shadow-md transition ${
            canContinue
              ? "bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] hover:opacity-90"
              : "bg-slate-300 cursor-not-allowed"
          }`}
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

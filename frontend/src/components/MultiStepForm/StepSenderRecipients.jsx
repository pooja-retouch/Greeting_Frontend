import React, { useState } from "react";

export default function StepSenderRecipients({ sender, setSender, recipients, setRecipients, onNext }) {
  const [emailErrors, setEmailErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSenderEmailChange = (email) => {
    setSender({ ...sender, email });

    const newEmailErrors = { ...emailErrors };
    if (email && !validateEmail(email)) {
      newEmailErrors.sender = "Please enter a valid email address";
    } else {
      delete newEmailErrors.sender;
    }
    setEmailErrors(newEmailErrors);
  };

  const handleRecipientEmailChange = (index, email) => {
    const updatedRecipients = [...recipients];
    updatedRecipients[index] = { ...updatedRecipients[index], email };
    setRecipients(updatedRecipients);

    const newEmailErrors = { ...emailErrors };
    if (email && !validateEmail(email)) {
      newEmailErrors[index] = "Please enter a valid email address";
    } else {
      delete newEmailErrors[index];
    }
    setEmailErrors(newEmailErrors);
  };

  const canContinue = (
    sender.name?.trim() &&
    sender.email &&
    validateEmail(sender.email) &&
    recipients.every((recipient) => {
      const isValidEmail = recipient.email && validateEmail(recipient.email);
      const hasName = recipient.name?.trim();
      return hasName && isValidEmail;
    })
  );

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>

      {/* Sender Section */}
      <div className="bg-blue-50/50 p-4 rounded-2xl border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold text-slate-700 mb-4">Sender Details</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Your Full Name
            </label>
            <input
              className="w-full p-4 bg-white/90 border border-blue-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-[#B8C2FF] outline-none text-lg placeholder:text-slate-400"
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
              className={`w-full p-4 bg-white/90 border rounded-2xl shadow-sm focus:ring-4 focus:ring-[#B8C2FF] outline-none text-lg placeholder:text-slate-400 ${
                emailErrors.sender ? "border-red-300 focus:ring-red-200" : "border-blue-200"
              }`}
              placeholder="example@email.com"
              value={sender.email}
              onChange={(e) => handleSenderEmailChange(e.target.value)}
            />
            {emailErrors.sender && (
              <p className="mt-1 text-sm text-red-600">{emailErrors.sender}</p>
            )}
          </div>
        </div>
      </div>

      {/* Recipients Section */}
      <div className="bg-green-50/50 p-4 rounded-2xl border-l-4 border-green-400">
        <h4 className="text-lg font-semibold text-slate-700 mb-4">Recipient Details</h4>
        <div className="space-y-4">
          {recipients.map((recipient, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-1/2">
                <input
                  className="w-full p-4 bg-white/90 border border-green-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-green-200 outline-none text-lg placeholder:text-slate-400"
                  placeholder="Recipient Name"
                  value={recipient.name}
                  onChange={(e) => {
                    const updatedRecipients = [...recipients];
                    updatedRecipients[i] = { ...updatedRecipients[i], name: e.target.value };
                    setRecipients(updatedRecipients);
                  }}
                />
              </div>

              <div className="w-1/2">
                <input
                  type="email"
                  className={`w-full p-4 bg-white/90 border rounded-2xl shadow-sm focus:ring-4 focus:ring-green-200 outline-none text-lg placeholder:text-slate-400 ${
                    emailErrors[i] ? "border-red-300 focus:ring-red-200" : "border-green-200"
                  }`}
                  placeholder="Recipient Email"
                  value={recipient.email}
                  onChange={(e) => handleRecipientEmailChange(i, e.target.value)}
                />
                {emailErrors[i] && (
                  <p className="mt-1 text-sm text-red-600">{emailErrors[i]}</p>
                )}
              </div>
            </div>
          ))}

          <button
            className="px-4 py-2 border-2 border-green-500 text-green-700 rounded-xl hover:bg-green-50 shadow-sm transition"
            onClick={() => setRecipients([...recipients, { name: "", email: "" }])}
          >
            + Add another recipient
          </button>
        </div>
      </div>

      <button
        disabled={!canContinue}
        className={`w-full px-8 py-4 rounded-2xl text-white text-lg font-semibold shadow-md transition-all mt-6 ${
          canContinue
            ? "bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] hover:opacity-90 hover:scale-[1.02]"
            : "bg-slate-300 cursor-not-allowed"
        }`}
        onClick={onNext}
      >
        Next - Choose Occasion & Generate Message
      </button>
    </div>
  );
}

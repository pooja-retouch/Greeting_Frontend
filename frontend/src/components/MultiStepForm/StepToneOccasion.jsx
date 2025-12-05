import React from "react";
import { apiRequest } from "../../api/apiClient";

export default function StepToneOccasion({
  tone,
  setTone,
  occasion,
  setOccasion,
  messageType,
  recipients,
  onNext,
  onBack,
  setGeneratedMessage,
}) {
  async function generateMessage() {
    try {
      console.log("Calling AI API for message generation...");

      // Get recipient name
      const recipientName = recipients && recipients[0] && recipients[0].name ? recipients[0].name : null;

      console.log("🔄 About to make API call with data:", { occasion, tone, details: `Create a ${messageType} message for ${occasion} in a ${tone.toLowerCase()} tone.`, recipient_name: recipientName });

      const response = await apiRequest("/ai/generate-gemini", "POST", {
        occasion,
        tone,
        details: `Create a ${messageType} message for ${occasion} in a ${tone.toLowerCase()} tone.`,
        recipient_name: recipientName,
      });

      console.log("✅ API Response received:", response);
      console.log("✅ Message from response:", response.message);

      if (!response || !response.message) {
        throw new Error("Invalid response format from API");
      }

      console.log("✅ API Success - Setting message and calling onNext():", response.message);
      setGeneratedMessage(response.message);
      console.log("✅ About to call onNext()");
      setTimeout(() => {
        console.log("▶️ Executing onNext() now");
        onNext();
      }, 100); // Small delay to ensure state update completes
    } catch (error) {
      console.error("❌ API Error:", error);
      // Fallback to template if API fails
      const baseMessage =
        occasion === "New Year"
          ? "Wishing you a joyful and successful New Year ahead!"
          : occasion === "Christmas"
          ? "Merry Christmas! May your holiday season be full of joy!"
          : "Warmest Season's Greetings to you and your loved ones!";

      const tonePrefix =
        tone === "Warm"
          ? "Sending warm wishes, "
          : tone === "Funny"
          ? "Here's a cheerful laugh with your greeting, "
          : "With sincere regards, ";

      setGeneratedMessage(`${tonePrefix}${baseMessage}`);
      console.log("ℹ️ Using fallback message due to API failure");
      setTimeout(() => onNext(), 100); // Small delay to ensure state update completes
    }
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

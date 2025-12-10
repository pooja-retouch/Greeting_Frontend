import React from "react";
import { apiRequest } from "../../api/apiClient";

export default function StepToneOccasion({
  tone,
  setTone,
  occasion,
  setOccasion,
  description,
  setDescription,
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

      // Build detailed context for AI message generation
      let details = `Create a ${messageType} message for ${occasion} in a ${tone.toLowerCase()} tone.`;

      if (description && description.trim()) {
        const desc = description.trim();
        // Smart context interpretation
        const relationshipWords = ['my', 'our', 'their', 'his', 'her', 'their'];
        const eventWords = ['turning', 'graduating', 'retiring', 'anniversary', 'birthday', 'graduation', 'wedding'];

        let isRelationship = false;
        let isEvent = false;

        // Check if it's a relationship descriptor
        for (const word of relationshipWords) {
          if (desc.toLowerCase().startsWith(word)) {
            isRelationship = true;
            break;
          }
        }

        // Check if it's an event descriptor
        for (const word of eventWords) {
          if (desc.toLowerCase().includes(word) || /^\d+(st|nd|rd|th)?$/.test(desc.split(' ')[0])) {
            isEvent = true;
            break;
          }
        }

        if (isRelationship) {
          // Handle relationships like "my brother", "my best friend"
          details += ` Additional context: ${desc}. Make sure to incorporate this relationship context into the personalized message.`;
        } else if (isEvent) {
          // Handle events like "turning 30", "graduating college"
          details += ` Additional context: The ${occasion.toLowerCase()} is because ${desc}. Make sure to incorporate this event context into the personalized message.`;
        } else {
          // Handle general context like "new baby", "taking a trip"
          details += ` Additional context: ${desc}. Make sure to incorporate this relevant information into the personalized message.`;
        }

        console.log("🔧 SMART CONTEXT DETECTION:");
        console.log("- Input:", desc);
        console.log("- Detected as:", isRelationship ? "Relationship" : isEvent ? "Event" : "General context");
        console.log("- Generated prompt:", details);
      }

      console.log("🔄 About to make API call with data:", {
        occasion,
        tone,
        details,
        recipient_name: recipientName,
        description: description || "not specified"
      });

      const response = await apiRequest("/ai/generate-gemini", "POST", {
        occasion,
        tone,
        details,
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

      {/* Optional Relationship Description */}
      <div className="mt-6">
        <label className="block text-slate-700 mb-3 font-medium">
          <span className="text-slate-600">Optional:</span> Any special details or context?
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={`e.g., "turning 30", "my sister", "moving to new city", "new baby"`}
          className="w-full p-3 bg-white/90 border border-blue-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-[#B8C2FF] outline-none placeholder-slate-400 text-slate-700"
        />
        <p className="text-xs text-slate-500 mt-2">
          💡 Add any context that will help create a more personalized message!
        </p>
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

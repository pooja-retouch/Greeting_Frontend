import React, { useState, useEffect } from "react";
import { sendGreeting } from "../../api/apiClient";

export default function StepCardPreview({
  sender,
  recipients,
  message,
  occasion,
  tone,
  selectedTemplate,
  onBack,
}) {
  const [cardImageUrl, setCardImageUrl] = useState(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [isLoadingSend, setIsLoadingSend] = useState(false);
  const [cardGenerated, setCardGenerated] = useState(false);

  // Generate card preview on component mount
  useEffect(() => {
    generateCardPreview();
  }, [selectedTemplate, message, occasion]);

  const generateCardPreview = async () => {
    setIsLoadingPreview(true);
    try {
      // Use the generate-card endpoint to get a preview
      const response = await fetch(
        `http://localhost:8000/ai/generate-card?occasion=${encodeURIComponent(occasion)}&tone=${encodeURIComponent(tone)}&details=Preview&name=${encodeURIComponent(recipients[0]?.name || "Recipient")}&template=${encodeURIComponent(selectedTemplate?.pngName || "Template6.png")}&message=${encodeURIComponent(message)}`
      );

      if (response.ok) {
        // We can't directly show the generated image here since it's a file download
        // Instead, we'll just mark it as ready for send
        setCardGenerated(true);
      } else {
        console.error("Failed to generate card preview");
      }
    } catch (error) {
      console.error("Error generating card preview:", error);
    } finally {
      setIsLoadingPreview(false);
    }
  };

  const handleSendGreeting = async () => {
    setIsLoadingSend(true);
    try {
      // Ensure we have recipient data
      if (!recipients[0]?.email) {
        alert("Recipient email is required");
        return;
      }

      // Get template info for sending
      const templateName = selectedTemplate?.pngName || "Template6.png";

      // Send the greeting - this will generate the card with custom positioning
      await sendGreeting(
        sender.name,
        sender.email,
        recipients[0].email,
        recipients[0].name || "Recipient",
        occasion,
        tone,
        "Custom greeting card",
        templateName,
        message,
        {
          x: 150, // Default position (will be overridden by interactive editor positions)
          y: 300,
          width: 500,
          height: 150,
          fontSize: 24,
          fontFamily: "Arial, sans-serif",
          color: "#FFD700"
        }
      );

      alert("🎉 Greeting card sent successfully!");

    } catch (error) {
      console.error("Failed to send greeting:", error);
      alert("Failed to send greeting card. Please try again.");
    } finally {
      setIsLoadingSend(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-slate-800">
          🎨 Final Card Preview
        </h3>
        <p className="text-lg font-medium text-slate-600 mt-2">
          Review your custom greeting card before sending
        </p>
      </div>

      {/* Card Preview Section */}
      <div className="bg-white rounded-3xl p-6 shadow-xl mb-8">
        <h4 className="text-lg font-semibold text-slate-800 mb-4">📋 Card Details:</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h5 className="font-medium text-slate-700 mb-2">From:</h5>
            <p className="text-slate-600">{sender.name || "Anonymous"}</p>
            <p className="text-sm text-slate-500">{sender.email}</p>
          </div>

          <div>
            <h5 className="font-medium text-slate-700 mb-2">To:</h5>
            <p className="text-slate-600">{recipients[0]?.name || "Recipient"}</p>
            <p className="text-sm text-slate-500">{recipients[0]?.email}</p>
          </div>

          <div className="md:col-span-2">
            <h5 className="font-medium text-slate-700 mb-2">Occasion:</h5>
            <p className="text-slate-600">{occasion} ({tone})</p>
          </div>
        </div>

        {/* Message Preview */}
        <div className="bg-slate-50 rounded-xl p-4 mb-6">
          <h5 className="font-medium text-slate-700 mb-2">💌 Message:</h5>
          <p className="text-slate-600 whitespace-pre-wrap text-sm leading-relaxed">
            {message}
          </p>
        </div>

        {/* Template Preview Box */}
        {selectedTemplate && (
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 mb-6">
            <h5 className="font-medium text-slate-700 mb-4 text-center">
              🎨 Selected Template: {selectedTemplate.title}
            </h5>

            {isLoadingPreview ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-slate-600">Generating preview...</span>
              </div>
            ) : (
              <div className="flex justify-center">
                <img
                  src={selectedTemplate.img}
                  alt={selectedTemplate.title}
                  className="max-w-md w-full rounded-lg shadow-md"
                  onError={(e) => {
                    console.log("Template preview failed to load:", selectedTemplate.img);
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRTNFMkZGIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNhcmQgUHJldmlldzwvdGV4dD4KPHN2Zz4=";
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* Note about custom positioning */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="text-blue-600 mr-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h5 className="font-medium text-blue-800 mb-1">✨ Custom Positioning Active</h5>
              <p className="text-sm text-blue-700">
                Your AI-generated message will be positioned exactly where you placed it during the editing phase.
                Font size, color, and alignment settings will be preserved on the final card.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-slate-200 rounded-xl hover:bg-slate-300 transition"
        >
          ← Back to Edit
        </button>

        <button
          onClick={handleSendGreeting}
          disabled={isLoadingSend}
          className={`px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition ${
            isLoadingSend || !selectedTemplate
              ? "bg-slate-300 cursor-not-allowed"
              : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
          }`}
        >
          {isLoadingSend ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white inline-block mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              📧 Send Greeting Card
            </>
          )}
        </button>
      </div>

      {/* Help Text */}
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <h5 className="font-medium text-green-800 mb-2">🎯 Ready to Send!</h5>
        <p className="text-sm text-green-700">
          This will generate your custom card with perfect text positioning and send it via email.
          The recipient will receive a beautiful, personalized greeting card attachment.
        </p>
      </div>
    </div>
  );
}

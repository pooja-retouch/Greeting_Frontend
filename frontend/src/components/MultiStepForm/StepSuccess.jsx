import React, { useState } from "react";
import InteractiveTemplateEditor from "./InteractiveTemplateEditor";
import { useFullscreenEdit } from "../../context/FullscreenEditContext";

export default function StepSuccess({ onRestart, selectedTemplate, message, sender, occasion }) {
  const [cardGenerated, setCardGenerated] = useState(false);
  const { enterFullscreenEdit } = useFullscreenEdit();

  const handleEditPosition = () => {
    enterFullscreenEdit({
      selectedTemplate,
      message,
      sender,
      occasion,
      onCardGenerated: setCardGenerated
    });
  };



  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-[#001B5E] mb-2">
          {cardGenerated ? "Card Finalized!" : "Card Created Successfully!"}
        </h2>
        <p className="text-slate-600">
          {cardGenerated
            ? "Your personalized greeting card has been created and sent successfully!"
            : "Your card is ready! Customize the message position and styling to make it perfect."
          }
        </p>
      </div>

      {cardGenerated ? (
        <div className="text-center">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            ✅ Your greeting card has been successfully generated and sent!
          </div>
          <button
            onClick={onRestart}
            className="px-8 py-3 bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] text-white rounded-xl shadow-md font-semibold hover:opacity-90 transition"
          >
            Create Another Card
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Static Card Preview */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Your Card Preview</h3>
            <div className="flex justify-center">
              <img
                src={`/templates/${selectedTemplate?.pngName || 'Template6.png'}`}
                alt="Card Preview"
                className="max-w-sm rounded-xl shadow-md"
              />
            </div>
            <p className="text-sm text-gray-600 mt-3 text-center">
              This shows your card with default message positioning
            </p>
          </div>

          {/* Edit Options */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Want to Fine-Tune Your Card?</h4>
            <p className="text-gray-600 mb-6 text-center">
              Add your personal touch by customizing where the message appears and how it looks!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEditPosition}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-semibold"
              >
                🎨 Customize Message Position
              </button>
              <button
                onClick={() => setCardGenerated(true)}
                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-md font-semibold"
              >
                ✅ Take It As-Is
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

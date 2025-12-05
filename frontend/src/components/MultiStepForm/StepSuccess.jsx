import React from "react";
import { getTemplateConfig } from "../../config/templateConfig";

export default function StepSuccess({ onRestart, selectedTemplate, message, sender, occasion }) {
  // Get complete template config with styles
  const templateInfo = getTemplateConfig(occasion, selectedTemplate);

  return (
    <div className="text-center py-10">
      <div className="mb-8">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-[#001B5E] mb-2">
          Greeting Card Created Successfully!
        </h2>
        <p className="text-slate-600">
          Your beautiful greeting card has been created with your personal message.
        </p>
      </div>

      {/* Template Card Display with Message Overlay */}
      <div className="mb-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto">
          <img
            src={templateInfo.img}
            alt="Greeting Card Template"
            className="w-full h-auto"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Template+Image`;
            }}
          />

          {/* AI Message with dynamic styling from template config */}
          <div className="absolute" style={{
            top: templateInfo.messageStyle.top,
            left: templateInfo.messageStyle.left,
            width: templateInfo.messageStyle.width,
            height: 'auto',
            textAlign: 'left'
          }}>
            <div className="inline-block w-full">
              <p className="whitespace-pre-line" style={{
                fontSize: templateInfo.messageStyle.fontSize,
                fontFamily: templateInfo.messageStyle.fontFamily,
                color: templateInfo.messageStyle.color,
                lineHeight: templateInfo.messageStyle.lineHeight,
                textShadow: templateInfo.messageStyle.textShadow,
                fontWeight: templateInfo.messageStyle.fontWeight || 'normal'
              }}>
                {message || "Your custom message"}
              </p>
            </div>
          </div>

          {/* Sender Signature with dynamic styling */}
          {sender?.name && (
            <div className="absolute text-right" style={{
              bottom: templateInfo.signatureStyle.bottom,
              right: templateInfo.signatureStyle.right,
              fontSize: templateInfo.signatureStyle.fontSize,
              fontFamily: templateInfo.signatureStyle.fontFamily,
              color: templateInfo.signatureStyle.color,
              fontWeight: templateInfo.signatureStyle.fontWeight || 'normal',
              fontStyle: templateInfo.signatureStyle.fontStyle || 'normal'
            }}>
              - {sender.name}
            </div>
          )}
        </div>

        <div className="mt-4 max-w-md mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <p className="text-slate-700 font-medium mb-2">Card Details:</p>
            <div className="text-left text-sm text-slate-600 space-y-1">
              <p><span className="font-medium">Template:</span> {templateInfo.title}</p>
              <p><span className="font-medium">Occasion:</span> {occasion}</p>
              <p><span className="font-medium">From:</span> {sender?.name || "Anonymous"}</p>
              <p><span className="font-medium">Created:</span> {new Date().toLocaleDateString()}</p>
            </div>
            <div className="mt-3 text-xs text-blue-600 bg-blue-50 p-2 rounded">
              ✨ Your message has been properly positioned to avoid template design overlap!
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <button
          className="block w-full px-8 py-3 text-white rounded-xl shadow-md font-semibold bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] hover:opacity-90 transition"
          onClick={onRestart}
        >
          Create Another Card
        </button>
        <button
          className="block w-full px-8 py-3 border-2 border-[#001B5E] text-[#001B5E] rounded-xl font-semibold hover:bg-[#E5E9FF] transition"
        >
          📁 View Your Card Gallery
        </button>
      </div>
    </div>
  );
}

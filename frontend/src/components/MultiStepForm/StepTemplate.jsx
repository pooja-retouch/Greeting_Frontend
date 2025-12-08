import React, { useState } from "react";
import { getTemplatesByOccasion } from "../../config/templateConfig";
import { useFullscreenEdit } from "../../context/FullscreenEditContext";

export default function StepTemplate({
  selectedTemplate,
  setSelectedTemplate,
  onBack,
  message,
  occasion = "New Year",
}) {
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const { enterFullscreenEdit } = useFullscreenEdit();

  console.log("🎨 StepTemplate rendered with message:", message, "occasion:", occasion);

  // Get templates for the selected occasion
  const templates = getTemplatesByOccasion(occasion);

  // Debug logging
  console.log("🎨 Available templates for", occasion, ":", templates.length, "templates");
  console.log("🎨 Template list:", templates.map(t => t.title));

  const TemplatePreview = ({ templateImg, isSelected }) => (
    <div className="relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
      {/* Clean Template Image - No overlays */}
      <img
        src={templateImg}
        alt="Template"
        className="w-full h-40 object-cover rounded-lg"
        onError={(e) => {
          console.log("Template image failed to load:", templateImg);
          e.target.src = `https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=No+Image+Yet`;
        }}
      />

      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute inset-0 bg-green-500/20 border-2 border-green-500 rounded-lg flex items-center justify-center">
          <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            ✓
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-slate-800">
          Choose a Template
        </h3>
        <p className="text-lg font-medium text-slate-600 mt-2 capitalize">
          🎄 Showing templates for: <span className="text-[#001B5E] font-bold">{occasion}</span>
          <span className="text-sm text-slate-500 ml-2">({templates.length} available)</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {templates.map((t) => (
          <div
            key={t.id}
            className={`border rounded-2xl p-4 cursor-pointer shadow-sm bg-white/70 backdrop-blur-sm hover:shadow-xl hover:scale-[1.02] transition-all ${
              selectedTemplate === t.id
                ? "border-[#002D89] shadow-md"
                : "border-blue-200"
            }`}
            onClick={() => setPreviewTemplate(t)} // Open preview modal instead of selecting
          >
            <TemplatePreview
              templateImg={t.img}
              isSelected={selectedTemplate === t.id}
            />
            <p className="text-center mt-3 font-semibold text-slate-700">
              {t.title}
            </p>
          </div>
        ))}
      </div>

      {/* Template Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            {/* Close button */}
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold text-slate-800">{previewTemplate.title}</h4>
              <button
                onClick={() => setPreviewTemplate(null)}
                className="text-slate-400 hover:text-slate-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Template Preview */}
            <div className="flex justify-center mb-6">
              <img
                src={previewTemplate.img}
                alt={previewTemplate.title}
                className="max-w-full max-h-80 rounded-2xl shadow-lg"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Template+Preview`;
                }}
              />
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => {
                  setSelectedTemplate(previewTemplate.id);
                  setPreviewTemplate(null);
                }}
                className="px-6 py-3 bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] text-white rounded-xl font-semibold hover:opacity-90 transition"
              >
                Choose This Template
              </button>
              <button
                onClick={() => setPreviewTemplate(null)}
                className="px-6 py-3 border-2 border-slate-300 text-slate-600 rounded-xl font-semibold hover:bg-slate-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between mt-8">
        <button
          className="px-6 py-3 bg-slate-200 rounded-xl"
          onClick={onBack}
        >
          Back
        </button>

        <button
          disabled={!selectedTemplate}
          onClick={() => {
            if (selectedTemplate) {
              const selectedTemplateData = templates.find(t => t.id === selectedTemplate);
              enterFullscreenEdit({
                selectedTemplate: selectedTemplateData,
                message,
                occasion,
                // Add other data needed for editing
              });
            }
          }}
          className={`px-6 py-3 rounded-xl text-white font-semibold shadow-md transition ${
            selectedTemplate
              ? "bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] hover:opacity-90"
              : "bg-slate-300 cursor-not-allowed"
          }`}
        >
          Start Editing 🎨
        </button>
      </div>
    </div>
  );
}

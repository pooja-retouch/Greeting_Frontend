import React, { useState, useEffect } from "react";
import { getTemplatesByOccasion } from "../../config/templateConfig";
import { sendGreeting } from "../../api/apiClient";

export default function StepTemplate({
  selectedTemplate,
  setSelectedTemplate,
  onBack,
  message,
  occasion = "New Year",
  sender,
  recipients,
  tone,
  description,
}) {
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);

  console.log("🎨 StepTemplate rendered with message:", message, "occasion:", occasion);

  // Send card directly without editing
  const sendCard = async () => {
    if (!selectedTemplate || !sender?.email || !recipients?.length) {
      alert("Please select a template and ensure sender/recipient details are complete.");
      return;
    }

    setIsSending(true);
    try {
      const selectedTemplateData = templates.find(t => t.id === selectedTemplate);
      const recipient = recipients[0]; // Send to first recipient for simplicity

      console.log("📧 Sending card directly:");
      console.log("From:", sender);
      console.log("To:", recipient);
      console.log("Template:", selectedTemplateData.pngName);
      console.log("Message:", message);

      await sendGreeting(
        sender.name,
        sender.email,
        recipient.email,
        recipient.name || "Recipient",
        occasion,
        tone || "Warm",
        description || '', // Context details without prefix
        selectedTemplateData.pngName,
        message,
        null // No custom positioning
      );

      alert("🎉 Greeting card sent successfully!");
      // Reset or navigate back to start
      window.location.reload();
    } catch (error) {
      console.error("Failed to send card:", error);
      alert("Failed to send greeting card. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  // Load templates for the selected occasion
  useEffect(() => {
    const loadTemplates = async () => {
      setIsLoading(true);
      console.log("🎨 Loading templates for occasion:", occasion);
      try {
        const occasionTemplates = await getTemplatesByOccasion(occasion);
        console.log("🎨 Loaded templates:", occasionTemplates.length);
        setTemplates(occasionTemplates);
      } catch (error) {
        console.error("Error loading templates:", error);
        setTemplates([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadTemplates();
  }, [occasion]);

  // Debug logging
      console.log("🎨 Available templates for", occasion, ":", templates.length, "templates");
      console.log("🎨 Template URLs:", templates.map(t => t.img));
      console.log("🎨 Template IDs:", templates.map(t => t.id));

  const TemplatePreview = ({ templateImg, isSelected }) => (
    <div className="relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
      {/* Clean Template Image - No overlays */}
      <img
        src={templateImg}
        alt="Template"
        className="w-full h-40 object-cover rounded-lg"
        onError={(e) => {
          console.log("Template image failed to load:", templateImg);
          // Fallback to a simple colored background instead of external placeholder
          e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNEY0NkU1Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlIFlldDwvdGV4dD4KPHN2Zz4=";
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
        <p className="text-sm text-slate-600 mt-1">
          💡 Click any template to select it, then click "Send Card" to email your greeting
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {isLoading ? (
          <div className="col-span-full text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading templates...</p>
          </div>
        ) : templates.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No templates available for {occasion}.</p>
          </div>
        ) : (
          templates.map((t) => (
            <div
              key={t.id}
              className={`border rounded-2xl p-4 cursor-pointer shadow-sm bg-white/70 backdrop-blur-sm hover:shadow-xl hover:scale-[1.02] transition-all ${
                selectedTemplate === t.id
                  ? "border-[#002D89] shadow-md"
                  : "border-blue-200"
              }`}
              onClick={() => {
                setSelectedTemplate(t.id);
                setPreviewTemplate(t);
              }} // Direct selection + preview modal
            >
              <TemplatePreview
                templateImg={t.img}
                isSelected={selectedTemplate === t.id}
              />
              <p className="text-center mt-3 font-semibold text-slate-700">
                {t.title}
              </p>
            </div>
          ))
        )}
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
                  console.log("Preview template image failed to load:", previewTemplate.img);
                  // Fallback to a simple colored background instead of external placeholder
                  e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNEY0NkU1Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlIEF2YWlsYWJsZTwvdGV4dD4KPHN2Zz4=";
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
          disabled={!selectedTemplate || isSending}
          onClick={sendCard}
          className={`px-6 py-3 rounded-xl text-white font-semibold shadow-md transition ${
            selectedTemplate && !isSending
              ? "bg-gradient-to-r from-green-600 to-green-700 hover:opacity-90"
              : "bg-slate-300 cursor-not-allowed"
          }`}
        >
          {isSending ? "Sending..." : "Send Card 📧"}
        </button>
      </div>
    </div>
  );
}

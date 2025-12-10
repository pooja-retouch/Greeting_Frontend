import React, { useState, useRef, useCallback, useEffect } from "react";
import { getTemplateConfig } from "../../config/templateConfig";
import { sendGreeting } from "../../api/apiClient";
import { useFullscreenEdit } from "../../context/FullscreenEditContext";

export default function InteractiveTemplateEditor({
  selectedTemplate,
  message,
  sender,
  recipients,
  occasion
}) {
  console.log("🎨 InteractiveTemplateEditor received selectedTemplate:", selectedTemplate);

  const [templateInfo, setTemplateInfo] = useState(selectedTemplate); // Use directly from props first
  const [actualImageDimensions, setActualImageDimensions] = useState({ width: 600, height: 400 });
  const [displayImageDimensions, setDisplayImageDimensions] = useState({ width: 600, height: 400 });

  // Load template config and get actual image dimensions
  useEffect(() => {
    console.log("🎨 Loading template config for:", occasion, selectedTemplate?.id);
    const loadTemplate = async () => {
      const config = await getTemplateConfig(occasion, selectedTemplate?.id || selectedTemplate);
      console.log("🎨 Loaded template config:", config);

      // Get actual image dimensions
      if (config?.img) {
        try {
          const img = new Image();
          img.onload = () => {
            setActualImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
            console.log("🎯 Actual image dimensions:", img.naturalWidth, "x", img.naturalHeight);
          };
          img.src = config.img;
        } catch (e) {
          console.log("Could not get image dimensions:", e);
        }
      }

      setTemplateInfo(config);
    };
    loadTemplate();
  }, [occasion, selectedTemplate]);

  // Update display dimensions when image loads
  const handleImageLoad = (e) => {
    const rect = e.target.getBoundingClientRect();
    const displayWidth = rect.width;
    const displayHeight = rect.height;

    setDisplayImageDimensions({ width: displayWidth, height: displayHeight });

    const scaleX = actualImageDimensions.width / displayWidth;
    const scaleY = actualImageDimensions.height / displayHeight;

    console.log("🎨 Display dimensions:", displayWidth, "x", displayHeight);
    console.log("🎯 Scaling factors:", scaleX.toFixed(2), "x", scaleY.toFixed(2));
  };
  const containerRef = useRef(null);
  const { exitFullscreenEdit } = useFullscreenEdit();

  // State for text positioning
  const [isEditing, setIsEditing] = useState(true);
  const [textPosition, setTextPosition] = useState({
    x: 150,  // Default starting position
    y: 300,
    width: 500,
    height: 150,
    fontSize: 20,
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontStyle: 'normal',
    align: 'center',
    color: '#FFD700'
  });

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);

  // Handle mouse/touch events for dragging
  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    const rect = containerRef.current.getBoundingClientRect();
    setDragStart({
      x: e.clientX - rect.left - textPosition.x,
      y: e.clientY - rect.top - textPosition.y
    });
    e.preventDefault();
  }, [textPosition.x, textPosition.y]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left - dragStart.x;
    const newY = e.clientY - rect.top - dragStart.y;

    // Constrain to container bounds
    const boundedX = Math.max(10, Math.min(newX, rect.width - textPosition.width - 10));
    const boundedY = Math.max(10, Math.min(newY, rect.height - textPosition.height - 10));

    const newPosition = {
      ...textPosition,
      x: boundedX,
      y: boundedY
    };

    setTextPosition(newPosition);
  }, [isDragging, dragStart, textPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handle font size adjustment
  const adjustFontSize = (delta) => {
    const newSize = Math.max(12, Math.min(48, textPosition.fontSize + delta));
    setTextPosition({ ...textPosition, fontSize: newSize });
  };



  // Send final customized card via email
  const sendFinalCard = async () => {
    setIsLoading(true);
    try {
      // Use first recipient from the list (assuming single recipient for custom cards)
      const recipient = recipients?.[0] || {};

      if (!recipient.email) {
        throw new Error("Recipient email is required");
      }

      // SCALE COORDINATES: Convert from display coordinates to actual image coordinates
      const scaleX = actualImageDimensions.width / displayImageDimensions.width;
      const scaleY = actualImageDimensions.height / displayImageDimensions.height;

      // Average scale factor (assuming similar aspect ratio scaling)
      const avgScale = (scaleX + scaleY) / 2;

      const scaledTextPosition = {
        ...textPosition,
        x: Math.round(textPosition.x * scaleX),
        y: Math.round(textPosition.y * scaleY),
        width: Math.round(textPosition.width * scaleX),
        height: Math.round(textPosition.height * scaleY),
        // Font size scaling based on display scale
        fontSize: Math.round(textPosition.fontSize * avgScale)
      };

      console.log("🎨 DISPLAY COORDS:", textPosition);
      console.log("🎯 ACTUAL IMAGE DIMENSIONS:", actualImageDimensions);
      console.log("📐 DISPLAY DIMENSIONS:", displayImageDimensions);
      console.log("🔄 SCALING FACTORS:", scaleX.toFixed(2), "x", scaleY.toFixed(2));
      console.log("📍 SCALED COORDS FOR BACKEND:", scaledTextPosition);

      await sendGreeting(
        sender.name,                  // sender_name
        sender.email,                 // sender_email
        recipient.email,              // recipient_email (no fallback - required)
        recipient.name || "Recipient", // recipient_name
        occasion,                     // occasion
        "Warm",                       // tone (can be customized later if needed)
        "Custom greeting",            // details
        templateInfo.pngName,         // template
        message,                      // message
        scaledTextPosition            // SCALED message_position for Pillow!
      );

      setIsEditing(false);
      alert("🎉 Greeting card sent successfully!");
      exitFullscreenEdit();
      window.location.reload(); // Go back to beginning to create new card
    } catch (error) {
      console.error("Failed to send custom greeting:", error);
      alert("Failed to send greeting card. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 p-4 overflow-auto">
      {/* Controls */}
      <div className="bg-white rounded-xl p-4 shadow-lg max-w-6xl mx-auto mb-4">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-800">🎨 Customize Your Card</h3>
          <button
            onClick={() => exitFullscreenEdit()}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
            title="Exit and return to regular view"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
          {/* Font Family */}
          <div>
            <label className="block text-gray-600 mb-1">Font Style</label>
            <select
              value={textPosition.fontFamily}
              onChange={(e) => setTextPosition({...textPosition, fontFamily: e.target.value})}
              className="w-full px-2 py-1 border rounded"
            >
              <option value="Arial, sans-serif">Arial</option>
              <option value="'Times New Roman', serif">Times New Roman</option>
              <option value="Georgia, serif">Georgia</option>
              <option value="'Comic Sans MS', cursive">Comic Sans</option>
              <option value="'Trebuchet MS', sans-serif">Trebuchet</option>
              <option value="'Courier New', monospace">Courier New</option>
              <option value="'Palatino', serif">Palatino</option>
            </select>
          </div>

          {/* Font Size Controls */}
          <div>
            <label className="block text-gray-600 mb-1">Font Size</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => adjustFontSize(-2)}
                className="px-2 py-1 bg-gray-200 rounded text-gray-600 hover:bg-gray-300"
              >-</button>
              <span className="px-2 py-1 bg-gray-100 rounded">{textPosition.fontSize}px</span>
              <button
                onClick={() => adjustFontSize(2)}
                className="px-2 py-1 bg-gray-200 rounded text-gray-600 hover:bg-gray-300"
              >+</button>
            </div>
          </div>

          {/* Font Weight */}
          <div>
            <label className="block text-gray-600 mb-1">Weight</label>
            <select
              value={textPosition.fontWeight}
              onChange={(e) => setTextPosition({...textPosition, fontWeight: e.target.value})}
              className="w-full px-2 py-1 border rounded"
            >
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="lighter">Light</option>
            </select>
          </div>

          {/* Font Style */}
          <div>
            <label className="block text-gray-600 mb-1">Style</label>
            <select
              value={textPosition.fontStyle}
              onChange={(e) => setTextPosition({...textPosition, fontStyle: e.target.value})}
              className="w-full px-2 py-1 border rounded"
            >
              <option value="normal">Normal</option>
              <option value="italic">Italic</option>
            </select>
          </div>

          {/* Text Color */}
          <div>
            <label className="block text-gray-600 mb-1">Color</label>
            <input
              type="color"
              value={textPosition.color}
              onChange={(e) => setTextPosition({...textPosition, color: e.target.value})}
              className="w-full h-8 rounded border"
            />
          </div>

          {/* Alignment & Position */}
          <div>
            <label className="block text-gray-600 mb-1">Align & Position</label>
            <div className="space-y-1">
              <select
                value={textPosition.align}
                onChange={(e) => setTextPosition({...textPosition, align: e.target.value})}
                className="w-full px-1 py-1 border rounded text-xs"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
              <div className="text-xs text-gray-500">
                {Math.round(textPosition.x)},{Math.round(textPosition.y)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Template Preview */}
      <div
        ref={containerRef}
        className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto"
        style={isEditing ? {
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none'
        } : {}}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Template Image */}
        {templateInfo ? (
          <img
            src={templateInfo.img}
            alt="Greeting Card Template"
            className="w-full h-auto"
            onError={(e) => {
              console.log("Template image failed to load in editor:", templateInfo.img);
              // Fallback to a simple colored background instead of external placeholder
              e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNEY0NkU1Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIFRlbXBsYXRlIEltYWdlPC90ZXh0Pgo8c3ZnPg==";
            }}
          />
        ) : (
          // Loading placeholder
          <div className="w-full h-96 bg-gray-300 rounded-2xl flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Interactive Message Box - Only show in EDIT mode */}
        {isEditing && (
          <div
            className="absolute border-2 border-blue-500 bg-blue-100 bg-opacity-20"
            style={{
              left: textPosition.x,
              top: textPosition.y,
              width: textPosition.width,
              height: textPosition.height,
              cursor: isDragging ? 'grabbing' : 'grab',
            }}
            onMouseDown={handleMouseDown}
          >
            {/* Message Text */}
            <div
              className="w-full h-full flex items-center select-none"
              style={{
                justifyContent: textPosition.align === 'center' ? 'center' :
                               textPosition.align === 'right' ? 'flex-end' : 'flex-start',
                textAlign: textPosition.align
              }}
            >
              <p
                className="whitespace-pre-line break-words"
                style={{
                  fontSize: `${textPosition.fontSize}px`,
                  fontFamily: textPosition.fontFamily || 'Arial, sans-serif',
                  color: textPosition.color,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontWeight: textPosition.fontWeight || 'bold',
                  fontStyle: textPosition.fontStyle || 'normal',
                  lineHeight: '1.1',
                  maxWidth: '100%',
                  overflow: 'hidden'
                }}
              >
                {message || "Your custom message"}
              </p>
            </div>

            {/* Corner resize handles */}
            <div
              className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded cursor-se-resize"
            />
            <div
              className="absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded cursor-nw-resize"
            />
            <div
              className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded cursor-ne-resize"
            />
            <div
              className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded cursor-sw-resize"
            />
          </div>
        )}

        {/* Interactive Text Display - Show in both modes */}
        <div
          className={`absolute ${isEditing ? '' : 'pointer-events-none'}`} // Disable pointer events in preview
          style={{
            left: textPosition.x,
            top: textPosition.y,
            width: textPosition.width,
            height: textPosition.height,
            ...(isEditing ? {
              border: '2px solid #3b82f6',
              backgroundColor: 'rgba(147, 197, 253, 0.2)',
              cursor: isDragging ? 'grabbing' : 'grab',
            } : {})
          }}
          {...(isEditing ? { onMouseDown: handleMouseDown } : {})}
        >
          {/* Message Text */}
          <div
            className="w-full h-full flex items-center select-none"
            style={{
              justifyContent: textPosition.align === 'center' ? 'center' :
                             textPosition.align === 'right' ? 'flex-end' : 'flex-start',
              textAlign: textPosition.align
            }}
          >
            <p
              className="whitespace-pre-line break-words"
              style={{
                fontSize: `${textPosition.fontSize}px`,
                fontFamily: textPosition.fontFamily || 'Arial, sans-serif',
                color: textPosition.color,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontWeight: textPosition.fontWeight || 'bold',
                fontStyle: textPosition.fontStyle || 'normal',
                lineHeight: '1.1',
                maxWidth: '100%',
                overflow: 'hidden'
              }}
            >
              {message || "Your custom message"}
            </p>
          </div>

          {/* Corner resize handles - Only in edit mode */}
          {isEditing && (
            <>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded cursor-se-resize" />
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded cursor-nw-resize" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded cursor-ne-resize" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded cursor-sw-resize" />
            </>
          )}
        </div>

        {/* Edit Mode Indicator */}
        {isEditing && (
          <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
            ✏️ Edit Mode - Drag to reposition
          </div>
        )}

        {/* Preview Mode Indicator */}
        {!isEditing && (
          <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
            👁️ Preview Mode - Final result
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {isEditing ? (
          <>
            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold shadow-md"
            >
              👁️ Preview Final Card
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition font-semibold"
            >
              ✏️ Back to Edit
            </button>
            <button
              onClick={sendFinalCard}
              disabled={isLoading}
              className={`px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition ${
                isLoading
                  ? "bg-slate-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white inline-block mr-2"></div>
                  Sending Card...
                </>
              ) : (
                <>
                  📧 Send Greeting Card
                </>
              )}
            </button>
          </>
        )}
      </div>

      {/* Preview Instructions */}
      {isEditing && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <h4 className="font-semibold text-blue-800 mb-2">✨ Editing Mode Active</h4>
          <p className="text-sm text-blue-700">
            Drag the message box to reposition text, use controls above to customize fonts and colors.
            Click "Preview Final Card" when ready to see how it will look!
          </p>
        </div>
      )}

      {!isEditing && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
          <h4 className="font-semibold text-green-800 mb-2">🎨 Preview Mode</h4>
          <p className="text-sm text-green-700">
            This is exactly how your greeting card will appear in the email. Click "Send Greeting Card"
            to deliver it to your recipient!
          </p>
        </div>
      )}

      {/* Help Text */}
      <div className="text-center text-sm text-gray-500 max-w-md mx-auto">
        💡 <strong>Tip:</strong> In edit mode, click and drag the blue message box to reposition your text.
        Use the controls above to adjust font size, color, and alignment.
      </div>
    </div>
  );
}

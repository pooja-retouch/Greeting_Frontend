import React, { useState, useRef, useCallback } from "react";
import { getTemplateConfig } from "../../config/templateConfig";
import { sendGreeting } from "../../api/apiClient";
import { useFullscreenEdit } from "../../context/FullscreenEditContext";

export default function InteractiveTemplateEditor({
  selectedTemplate,
  message,
  sender,
  occasion,
  onPositionUpdate,
  onCardGenerated
}) {
  const templateInfo = getTemplateConfig(occasion, selectedTemplate);
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
    onPositionUpdate?.(newPosition);
  }, [isDragging, dragStart, textPosition, onPositionUpdate]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handle font size adjustment
  const adjustFontSize = (delta) => {
    const newSize = Math.max(12, Math.min(48, textPosition.fontSize + delta));
    setTextPosition({ ...textPosition, fontSize: newSize });
  };



  // Generate final card with custom positioning
  const generateCustomCard = async () => {
    setIsLoading(true);
    try {
      await sendGreeting(
        sender.name,           // sender_name
        sender.email,          // sender_email
        "recipient@example.com", // recipient_email (demo)
        "Recipient",           // recipient_name (demo)
        occasion,              // occasion
        "Warm",                // tone
        "Custom greeting",     // details
        templateInfo.pngName,  // template
        message,               // message
        textPosition           // message_position (custom positioning)
      );

      setIsEditing(false);
      onCardGenerated?.(true);
    } catch (error) {
      console.error("Failed to send custom greeting:", error);
      alert("Failed to generate custom card. Please try again.");
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
        className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto cursor-move select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Template Image */}
        <img
          src={templateInfo.img}
          alt="Greeting Card Template"
          className="w-full h-auto"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Template+Image`;
          }}
        />

        {/* Interactive Message Box */}
        <div
          className={`absolute border-2 ${isEditing ? 'border-blue-500 bg-blue-100 bg-opacity-20' : 'border-transparent'}`}
          style={{
            left: textPosition.x,
            top: textPosition.y,
            width: textPosition.width,
            height: textPosition.height,
            cursor: isEditing ? (isDragging ? 'grabbing' : 'grab') : 'default',
          }}
          onMouseDown={isEditing ? handleMouseDown : undefined}
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

          {/* Resize handles (only in edit mode) */}
          {isEditing && (
            <>
              {/* Corner resize handles */}
              <div
                className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded cursor-se-resize"
                onMouseDown={(e) => {
                  // Implement resize logic
                  e.stopPropagation();
                }}
              />
              <div
                className="absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded cursor-nw-resize"
                onMouseDown={(e) => {
                  e.stopPropagation();
                }}
              />
              <div
                className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded cursor-ne-resize"
                onMouseDown={(e) => {
                  e.stopPropagation();
                }}
              />
              <div
                className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded cursor-sw-resize"
                onMouseDown={(e) => {
                  e.stopPropagation();
                }}
              />
            </>
          )}
        </div>

        {/* Edit Mode Indicator */}
        {isEditing && (
          <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
            ✏️ Edit Mode - Drag to reposition
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {isEditing ? (
          <>
            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
              Preview Mode
            </button>
            <button
              onClick={generateCustomCard}
              disabled={isLoading}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
              {isLoading ? "🎨 Generating..." : "✅ Finalize Card"}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              ✏️ Edit Position
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              🎯 Create New Card
            </button>
          </>
        )}
      </div>

      {/* Help Text */}
      <div className="text-center text-sm text-gray-500 max-w-md mx-auto">
        💡 <strong>Tip:</strong> In edit mode, click and drag the blue message box to reposition your text.
        Use the controls above to adjust font size, color, and alignment.
      </div>
    </div>
  );
}

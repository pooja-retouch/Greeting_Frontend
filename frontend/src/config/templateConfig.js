// Dynamic template configuration - loads templates from organized folders via backend API
// Templates are automatically discovered by scanning folder contents

import { apiRequest } from "../api/apiClient";

// Default template configurations for each occasion
const DEFAULT_STYLES = {
  Birthday: {
    messageStyle: {
      fontSize: "18px",
      fontFamily: "'Comic Sans MS', cursive",
      color: "#FF1493",
      top: "45%",
      left: "10%",
      width: "80%",
      lineHeight: "1.6",
      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
      fontWeight: "bold"
    },
    signatureStyle: {
      fontSize: "14px",
      fontFamily: "'Brush Script MT', cursive",
      color: "#FF69B4",
      bottom: "40px",
      right: "40px",
      fontStyle: "italic",
      fontWeight: "600"
    }
  },
  Christmas: {
    messageStyle: {
      fontSize: "16px",
      fontFamily: "'Trebuchet MS', sans-serif",
      color: "#FFFFFF",
      top: "32%",
      left: "8%",
      width: "84%",
      lineHeight: "1.7",
      textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
    },
    signatureStyle: {
      fontSize: "14px",
      fontFamily: "'Brush Script MT', cursive",
      color: "#FFFFFF",
      bottom: "40px",
      right: "40px",
      fontStyle: "italic"
    }
  },
  "New Year": {
    messageStyle: {
      fontSize: "18px",
      fontFamily: "'Garamond', serif",
      color: "#FFD700",
      top: "45%",
      left: "8%",
      width: "84%",
      lineHeight: "1.6",
      textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
    },
    signatureStyle: {
      fontSize: "14px",
      fontFamily: "'Lucida Handwriting', cursive",
      color: "#FFD700",
      bottom: "40px",
      right: "40px",
      fontWeight: "600"
    }
  }
};

// Cache for loaded templates to avoid repeated API calls
const templateCache = new Map();

export const clearTemplateCache = () => {
  templateCache.clear();
  console.log('🔄 Template cache cleared');
};

export const getTemplatesByOccasion = async (occasion, forceRefresh = false) => {
  const occasion_key = occasion.toLowerCase().replace(/\s+/g, '');

  // Always force refresh to ensure we get fresh data
  forceRefresh = true;  // Force refresh to avoid cache issues

  // Check cache first (unless forcing refresh)
  if (!forceRefresh && templateCache.has(occasion)) {
    return templateCache.get(occasion);
  }

  try {
    console.log(`🔍 Loading templates for occasion: ${occasion} (${occasion_key})`);
    const response = await apiRequest(`/ai/templates/${occasion_key}`, "GET");

    if (response && response.templates) {
      console.log(`✅ Found ${response.templates.length} templates for ${occasion}`);
    console.log("🎄 All templates returned:");
    response.templates.forEach((t, i) =>
      console.log(`   ${i+1}. ${t.title} (ID: ${t.id}, URL: ${t.img.substring(0,60)}...)`)
    );

      // Enhance templates with default styling and properties
      const enhancedTemplates = response.templates.map(template => ({
        ...DEFAULT_STYLES[occasion],  // Default styling
        id: template.id || template.filename,
        title: template.title,
        img: template.img,
        pngName: template.pngName,
        filename: template.filename,
        occasion: occasion
      }));

      // Cache the results
      templateCache.set(occasion, enhancedTemplates);
      return enhancedTemplates;
    }

    console.log(`⚠️ No templates found for ${occasion}, returning empty array`);
    return [];
  } catch (error) {
    console.error(`❌ Error loading templates for ${occasion}:`, error);
    return [];
  }
};

export const getTemplateConfig = async (occasion, templateId) => {
  const templates = await getTemplatesByOccasion(occasion);
  return templates.find(t => t.id === templateId) || templates[0];
};

// Synchronous version for immediate access (returns empty array, then updates via async)
export const getTemplatesByOccasionSync = (occasion) => {
  if (templateCache.has(occasion)) {
    return templateCache.get(occasion);
  }

  // Trigger async loading but return empty array immediately
  getTemplatesByOccasion(occasion).then(templates => {
    // Templates will be cached and available for subsequent calls
    console.log(`📲 Async templates loaded for ${occasion}: ${templates.length}`);
  });

  return [];
};

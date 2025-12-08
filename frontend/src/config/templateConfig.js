// Template configuration with font and styling information
// Includes all available templates in fastapi_app/app/static/template_images/

export const templateConfig = {
  Birthday: [
    {
      id: 1,
      title: "Classic Birthday",
      img: "/templates/Template6.png",
      pngName: "Template6.png",
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
    {
      id: 2,
      title: "Celebration Birthday",
      img: "/templates/13da4667-e4f9-4206-8f1e-19b7d99b821d.png",
      pngName: "13da4667-e4f9-4206-8f1e-19b7d99b821d.png",
      messageStyle: {
        fontSize: "16px",
        fontFamily: "'Arial', sans-serif",
        color: "#F7EAD9",
        top: "35%",
        left: "15%",
        width: "70%",
        lineHeight: "1.6",
        textShadow: "1px 1px 3px rgba(0,0,0,0.8)"
      },
      signatureStyle: {
        fontSize: "14px",
        fontFamily: "'Lucida Handwriting', cursive",
        color: "#F7EAD9",
        bottom: "40px",
        right: "40px",
        fontWeight: "600"
      }
    }
  ],

  Christmas: [
    {
      id: 1,
      title: "Festive Christmas",
      img: "/templates/c5d68899-2202-4d47-9a33-17360bd1eb31.png",
      pngName: "c5d68899-2202-4d47-9a33-17360bd1eb31.png",
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
    }
  ],

  "New Year": [
    {
      id: 1,
      title: "Fresh Start",
      img: "/templates/6ac59b36-a548-45fd-83dd-4d0a50f12c64.png",
      pngName: "6ac59b36-a548-45fd-83dd-4d0a50f12c64.png",
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
  ]
};

export const getTemplateConfig = (occasion, templateId) => {
  return templateConfig[occasion]?.find(t => t.id === templateId) || templateConfig[occasion]?.[0];
};

export const getTemplatesByOccasion = (occasion) => {
  return templateConfig[occasion] || [];
};

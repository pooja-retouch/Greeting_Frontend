import React, { createContext, useContext, useState } from "react";

const FullscreenEditContext = createContext();

// Custom hook for easy usage
export const useFullscreenEdit = () => useContext(FullscreenEditContext);

// Provider component
export const FullscreenEditProvider = ({ children }) => {
  const [isFullscreenEdit, setIsFullscreenEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  const enterFullscreenEdit = (data) => {
    setIsFullscreenEdit(true);
    setEditData(data);
  };

  const exitFullscreenEdit = () => {
    setIsFullscreenEdit(false);
    setEditData(null);
  };

  // Callback for when card is finalized in editor
  const onFinalizeCard = (textPosition) => {
    console.log("🎨 Card finalized with text position:", textPosition);
    // Store the finalized position and trigger navigation to preview
    if (editData?.onFinalizeCardFromEditor) {
      editData.onFinalizeCardFromEditor({
        ...editData,
        finalTextPosition: textPosition
      });
    }
  };

  return (
    <FullscreenEditContext.Provider value={{
      isFullscreenEdit,
      editData,
      enterFullscreenEdit,
      exitFullscreenEdit,
      onFinalizeCard
    }}>
      {children}
    </FullscreenEditContext.Provider>
  );
};

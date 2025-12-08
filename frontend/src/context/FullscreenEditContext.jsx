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

  return (
    <FullscreenEditContext.Provider value={{
      isFullscreenEdit,
      editData,
      enterFullscreenEdit,
      exitFullscreenEdit
    }}>
      {children}
    </FullscreenEditContext.Provider>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { FullscreenEditProvider } from "./context/FullscreenEditContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <FullscreenEditProvider>
      <App />
    </FullscreenEditProvider>
  </AuthProvider>
);

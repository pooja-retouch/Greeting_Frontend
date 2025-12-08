import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import InteractiveTemplateEditor from "./components/MultiStepForm/InteractiveTemplateEditor";
import { useFullscreenEdit } from "./context/FullscreenEditContext";

function AppContent() {
  const { isFullscreenEdit, editData, exitFullscreenEdit } = useFullscreenEdit();

  // Fullscreen editing mode - show only the editor
  if (isFullscreenEdit) {
    return (
      <div className="min-h-screen w-full">
        <InteractiveTemplateEditor
          selectedTemplate={editData?.selectedTemplate}
          message={editData?.message}
          sender={editData?.sender}
          occasion={editData?.occasion}
          onPositionUpdate={editData?.onPositionUpdate}
          onCardGenerated={(success) => {
            if (success) {
              exitFullscreenEdit();
              // Optionally call editData?.onCardGenerated?.(success);
            }
          }}
        />
      </div>
    );
  }

  // Normal app layout
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

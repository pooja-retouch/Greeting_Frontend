import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import { useFullscreenEdit } from './context/FullscreenEditContext';
import InteractiveTemplateEditor from './components/MultiStepForm/InteractiveTemplateEditor';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const { editData, exitFullscreenEdit, isFullscreenEdit } = useFullscreenEdit();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {isFullscreenEdit ? (
        <InteractiveTemplateEditor
          selectedTemplate={editData?.selectedTemplate}
          message={editData?.message}
          sender={editData?.sender}
          recipients={editData?.recipients}
          occasion={editData?.occasion}
          onPositionUpdate={editData?.onPositionUpdate}
          onCardGenerated={(success) => {
            if (success) {
              exitFullscreenEdit();
              // Optionally call editData?.onCardGenerated?.(success);
            }
          }}
        />
      ) : (
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Routes>
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;

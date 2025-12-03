import React, { useState } from "react";
import StepSender from "./StepSender";
import StepRecipients from "./StepRecipients";
import StepToneOccasion from "./StepToneOccasion";
import StepGenerating from "./StepGenerating";
import StepEditMessage from "./StepEditMessage";
import StepTemplate from "./StepTemplate";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [showGeneratedCard, setShowGeneratedCard] = useState(false);

  const [sender, setSender] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const [recipients, setRecipients] = useState([{ name: "", email: "" }]);

  const [tone, setTone] = useState("Warm");
  const [occasion, setOccasion] = useState("New Year");

  const [generatedMessage, setGeneratedMessage] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Updated handleFinish function - shows card immediately
  const handleFinish = () => {
    console.log("Finish button clicked!");
    
    // Collect all data
    const formData = {
      sender,
      recipients,
      tone,
      occasion,
      generatedMessage,
      selectedTemplate,
    };
    
    console.log("Form Data:", formData);
    
    // Instead of showing an alert, show the generated card
    setShowGeneratedCard(true);
    
    // Scroll to the generated card
    setTimeout(() => {
      const cardElement = document.getElementById('generated-card');
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Function to handle going back to form
  const handleBackToForm = () => {
    setShowGeneratedCard(false);
  };

  // If showing generated card, display it
  if (showGeneratedCard) {
    return (
      <div id="generated-card" className="animate-fadeIn">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Your Generated Greeting Card</h2>
          <button 
            onClick={handleBackToForm}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            ← Back to Form
          </button>
        </div>
        
        {/* The Actual Greeting Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-300 p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Season's Greetings</h3>
            <p className="text-gray-600">
              Template: {selectedTemplate === 1 ? "Classic" : selectedTemplate === 2 ? "Modern" : "Festive"}
            </p>
            <p className="text-gray-600">Occasion: {occasion} | Tone: {tone}</p>
          </div>
          
          <div className="mb-6">
            <p className="text-lg mb-2">To:</p>
            <div className="pl-4">
              {recipients.map((recipient, index) => (
                <p key={index} className="text-xl font-semibold">
                  {recipient.name}
                  {recipient.email && <span className="text-gray-600 text-base block">({recipient.email})</span>}
                </p>
              ))}
            </div>
          </div>
          
          <div className="my-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-lg leading-relaxed italic">{generatedMessage || "Your personalized message will appear here."}</p>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-lg mb-2">From:</p>
            <p className="text-xl font-semibold">{sender.name || "Your Name"}</p>
            {sender.email && <p className="text-gray-600">{sender.email}</p>}
            {sender.whatsapp && <p className="text-gray-600">WhatsApp: {sender.whatsapp}</p>}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-200">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow hover:shadow-md">
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Card
            </button>
            
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow hover:shadow-md">
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send via Email
            </button>
            
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors shadow hover:shadow-md">
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Share on WhatsApp
            </button>
          </div>
        </div>
        
        {/* Card Details Summary */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Card Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-gray-700">Sender:</p>
              <p className="text-gray-600">{sender.name || "Not provided"}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Recipients:</p>
              <p className="text-gray-600">{recipients.length} recipient(s)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Template:</p>
              <p className="text-gray-600">{selectedTemplate === 1 ? "Classic" : selectedTemplate === 2 ? "Modern" : "Festive"}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Occasion:</p>
              <p className="text-gray-600">{occasion}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {step === 1 && (
        <StepSender sender={sender} setSender={setSender} onNext={() => setStep(2)} />
      )}

      {step === 2 && (
        <StepRecipients
          recipients={recipients}
          setRecipients={setRecipients}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <StepToneOccasion
          tone={tone}
          setTone={setTone}
          occasion={occasion}
          setOccasion={setOccasion}
          onNext={() => setStep(4)}
          onBack={() => setStep(2)}
          setGeneratedMessage={setGeneratedMessage}
        />
      )}

      {step === 4 && (
        <StepGenerating 
          message={generatedMessage} 
          onNext={() => setStep(5)} 
        />
      )}

      {step === 5 && (
        <StepEditMessage
          message={generatedMessage}
          setMessage={setGeneratedMessage}
          onNext={() => setStep(6)}
          onBack={() => setStep(4)}
        />
      )}

      {step === 6 && (
        <StepTemplate
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          onBack={() => setStep(5)}
          onFinish={handleFinish}
        />
      )}
    </div>
  );
}
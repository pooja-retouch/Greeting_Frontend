import React, { useState } from "react";
import StepMessageType from "./StepMessageType";
import StepSender from "./StepSender";
import StepRecipients from "./StepRecipients";
import StepToneOccasion from "./StepToneOccasion";
import StepGenerating from "./StepGenerating";
import StepEditMessage from "./StepEditMessage";
import StepTemplate from "./StepTemplate";
import StepSuccess from "./StepSuccess";

export default function MultiStepForm() {
  const [step, setStep] = useState(2); // Start from Step 2 (Sender) - Skip Step 1
  const [messageType] = useState("Card"); // Default message type for greeting cards
  const [sender, setSender] = useState({ name: "", email: "" });
  const [recipients, setRecipients] = useState([{ name: "", email: "" }]);
  const [tone, setTone] = useState("Warm");
  const [occasion, setOccasion] = useState("New Year");
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const restartForm = () => {
    setStep(2); // Restart from Step 2 (Sender) - Skip Step 1
    // setMessageType("Card"); // Fixed value for greeting cards
    setSender({ name: "", email: "" });
    setRecipients([{ name: "", email: "" }]);
    setTone("Warm");
    setOccasion("New Year");
    setGeneratedMessage("");
    setSelectedTemplate(null);
  };

  return (
    <div className="space-y-8">
      {step === 1 && (
        <StepMessageType
          messageType={messageType}
          setMessageType={setMessageType}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <StepSender
          sender={sender}
          setSender={setSender}
          onNext={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <StepRecipients
          recipients={recipients}
          setRecipients={setRecipients}
          onNext={() => setStep(4)}
          onBack={() => setStep(2)}
        />
      )}

      {step === 4 && (
        <StepToneOccasion
          tone={tone}
          setTone={setTone}
          occasion={occasion}
          setOccasion={setOccasion}
          messageType={messageType}
          recipients={recipients}
          setGeneratedMessage={setGeneratedMessage}
          onNext={() => setStep(5)}
          onBack={() => setStep(3)}
        />
      )}

      {step === 5 && (
        <StepGenerating
          message={generatedMessage}
          onNext={() => setStep(6)}
        />
      )}

      {step === 6 && (
        <StepEditMessage
          message={generatedMessage}
          setMessage={setGeneratedMessage}
          onNext={() => setStep(7)}
          onBack={() => setStep(4)}
          tone={tone}
          occasion={occasion}
          messageType={messageType}
        />
      )}

      {step === 7 && (
        <StepTemplate
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          onBack={() => setStep(6)}
          onNext={() => setStep(8)}
          message={generatedMessage}
          occasion={occasion}
        />
      )}

      {step === 8 && (
        <StepGenerating
          message={generatedMessage}
          onNext={() => setStep(9)}
        />
      )}

      {step === 9 && (
        <StepSuccess
          onRestart={restartForm}
          selectedTemplate={selectedTemplate}
          message={generatedMessage}
          sender={sender}
          occasion={occasion}
        />
      )}
    </div>
  );
}

import React, { useState } from "react";
import StepSenderRecipients from "./StepSenderRecipients";
import StepToneOccasion from "./StepToneOccasion";
import StepGenerating from "./StepGenerating";
import StepEditMessage from "./StepEditMessage";
import StepTemplate from "./StepTemplate";
import StepCardPreview from "./StepCardPreview";

export default function MultiStepForm() {
  const [step, setStep] = useState(1); // Start from Step 1 (Sender)
  const [messageType] = useState("Card"); // Default message type for greeting cards
  const [sender, setSender] = useState({ name: "", email: "" });
  const [recipients, setRecipients] = useState([{ name: "", email: "" }]);
  const [tone, setTone] = useState("Warm");
  const [occasion, setOccasion] = useState("New Year");
  const [description, setDescription] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(null);



  return (
    <div className="space-y-8">
      {step === 1 && (
        <StepSenderRecipients
          sender={sender}
          setSender={setSender}
          recipients={recipients}
          setRecipients={setRecipients}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <StepToneOccasion
          tone={tone}
          setTone={setTone}
          occasion={occasion}
          setOccasion={setOccasion}
          description={description}
          setDescription={setDescription}
          messageType={messageType}
          recipients={recipients}
          setGeneratedMessage={setGeneratedMessage}
          onNext={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <StepGenerating
          message={generatedMessage}
          onNext={() => setStep(4)}
        />
      )}

      {step === 4 && (
        <StepEditMessage
          message={generatedMessage}
          setMessage={setGeneratedMessage}
          onNext={() => setStep(5)}
          tone={tone}
          occasion={occasion}
          messageType={messageType}
        />
      )}

      {step === 5 && (
        <StepTemplate
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          onBack={() => setStep(4)}
          message={generatedMessage}
          occasion={occasion}
          sender={sender}
          recipients={recipients}
        />
      )}

      {step === 6 && (
        <StepCardPreview
          sender={sender}
          recipients={recipients}
          message={generatedMessage}
          occasion={occasion}
          tone={tone}
          selectedTemplate={selectedTemplate}
          onBack={() => setStep(5)}
        />
      )}
    </div>
  );
}

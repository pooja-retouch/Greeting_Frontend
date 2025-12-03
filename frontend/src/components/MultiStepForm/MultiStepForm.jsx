import React, { useState } from "react";
import StepSender from "./StepSender";
import StepRecipients from "./StepRecipients";
import StepToneOccasion from "./StepToneOccasion";
import StepGenerating from "./StepGenerating";
import StepEditMessage from "./StepEditMessage";
import StepTemplate from "./StepTemplate";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

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
        <StepGenerating message={generatedMessage} onNext={() => setStep(5)} />
      )}

      {step === 5 && (
        <StepEditMessage
          message={generatedMessage}
          setMessage={setGeneratedMessage}
          onNext={() => setStep(6)}
          onBack={() => setStep(3)}
        />
      )}

      {step === 6 && (
        <StepTemplate
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          onBack={() => setStep(5)}
        />
      )}
    </div>
  );
}

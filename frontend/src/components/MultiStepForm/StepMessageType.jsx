import React from "react";

export default function StepMessageType({ messageType, setMessageType, onNext }) {
  const messageTypes = [
    {
      id: "greeting",
      title: "Greeting Card",
      description: "Create beautiful greeting cards for birthdays, holidays, and celebrations",
      icon: "🎉",
      color: "blue"
    },
    {
      id: "thankyou",
      title: "Thank You Note",
      description: "Express gratitude to colleagues, clients, or loved ones",
      icon: "🙏",
      color: "green"
    },
    {
      id: "congratulation",
      title: "Congratulations",
      description: "Celebrate achievements and successes",
      icon: "🎊",
      color: "purple"
    },
    {
      id: "apology",
      title: "Apology",
      description: "Make amends and show sincerity",
      icon: "🤝",
      color: "yellow"
    },
    {
      id: "sympathy",
      title: "Sympathy",
      description: "Offer comfort and support during difficult times",
      icon: "🌹",
      color: "pink"
    }
  ];

  const handleSelect = (typeId) => {
    setMessageType(typeId);
    onNext?.();
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-slate-800 mb-2">
          What type of message would you like to create?
        </h3>
        <p className="text-slate-600">
          Choose the purpose of your message and we'll help craft the perfect one
        </p>
      </div>

      <div className="grid gap-4">
        {messageTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleSelect(type.id)}
            className={`w-full p-4 rounded-xl border-2 transition-all hover:scale-[1.02] ${
              messageType === type.id
                ? "border-blue-500 bg-blue-50 shadow-md"
                : "border-blue-200 bg-white hover:border-blue-300 hover:bg-blue-50"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{type.icon}</div>
              <div className="text-left flex-1">
                <h4 className="font-semibold text-slate-800 mb-1">{type.title}</h4>
                <p className="text-sm text-slate-600">{type.description}</p>
              </div>
              {messageType === type.id && (
                <div className="text-blue-500 text-xl">✓</div>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="text-center text-sm text-slate-500">
        All messages are generated with AI and can be customized
      </div>
    </div>
  );
}

import React from "react";

export default function StepTemplate({
  selectedTemplate,
  setSelectedTemplate,
  onBack,
  onNext,   // 🔵 MAKE SURE THIS PROP IS RECEIVED
}) {
  const templates = [
    {
      id: 1,
      title: "Classic",
      img: "https://via.placeholder.com/300x180.png?text=Classic+Card",
    },
    {
      id: 2,
      title: "Modern",
      img: "https://via.placeholder.com/300x180.png?text=Modern+Card",
    },
    {
      id: 3,
      title: "Festive",
      img: "https://via.placeholder.com/300x180.png?text=Festive+Card",
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold text-slate-800">
        Choose a Template
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {templates.map((t) => (
          <div
            key={t.id}
            className={`border rounded-2xl p-4 cursor-pointer shadow-sm bg-white/70 backdrop-blur-sm hover:shadow-xl hover:scale-[1.02] transition-all ${
              selectedTemplate === t.id
                ? "border-[#002D89] shadow-md"
                : "border-blue-200"
            }`}
            onClick={() => setSelectedTemplate(t.id)}
          >
            <img
              src={t.img}
              alt={t.title}
              className="rounded-lg w-full object-cover"
            />
            <p className="text-center mt-3 font-semibold text-slate-700">
              {t.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button
          className="px-6 py-3 bg-slate-200 rounded-xl"
          onClick={onBack}
        >
          Back
        </button>

        <button
          disabled={!selectedTemplate}
          onClick={onNext}   // 🔵 THIS TRIGGERS THE SUCCESS STEP
          className={`px-6 py-3 rounded-xl text-white font-semibold shadow-md transition ${
            selectedTemplate
              ? "bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] hover:opacity-90"
              : "bg-slate-300 cursor-not-allowed"
          }`}
        >
          Finish
        </button>
      </div>
    </div>
  );
}

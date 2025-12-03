import React from "react";

export default function StepTemplate({
  selectedTemplate,
  setSelectedTemplate,
  onBack,
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
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Choose a Template</h3>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {templates.map((t) => (
          <div
            key={t.id}
            className={`border rounded p-3 cursor-pointer ${
              selectedTemplate === t.id ? "border-primary" : "border-gray-300"
            }`}
            onClick={() => setSelectedTemplate(t.id)}
          >
            <img src={t.img} className="rounded" />
            <p className="text-center mt-2 font-semibold">{t.title}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 bg-gray-200 rounded" onClick={onBack}>
          Back
        </button>

        <button
          disabled={!selectedTemplate}
          className={`px-4 py-2 rounded text-white ${
            selectedTemplate ? "bg-primary" : "bg-gray-300"
          }`}
        >
          Finish
        </button>
      </div>
    </div>
  );
}

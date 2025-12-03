import React, { useEffect, useState } from "react";

export default function StepGenerating({ message, onNext }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 10;
      setProgress(i);
      if (i >= 100) {
        clearInterval(timer);
        setTimeout(onNext, 400);
      }
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Generating Message…</h3>

      <div className="w-full bg-gray-200 h-4 rounded overflow-hidden mt-4">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="mt-3 text-gray-600">Please wait a moment…</p>
    </div>
  );
}

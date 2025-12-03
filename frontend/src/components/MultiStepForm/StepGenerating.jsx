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
        setTimeout(onNext, 500);
      }
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-semibold text-slate-800">Generating Message…</h3>

      <div className="w-full bg-slate-200 h-4 rounded-xl overflow-hidden mt-4">
        <div
          className="h-full bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="mt-4 text-slate-600">Please wait…</p>
    </div>
  );
}

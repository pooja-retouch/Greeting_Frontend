import React from "react";

export default function StepSuccess({ onRestart }) {
  return (
    <div className="text-center py-10">
      <div className="mb-8">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-[#001B5E] mb-2">
          Greeting Card Created Successfully!
        </h2>
        <p className="text-slate-600">
          Your beautiful greeting card has been sent and saved to your gallery.
        </p>
      </div>

      {/* Preview of Sent Card */}
      <div className="max-w-md mx-auto mb-8">
        <div className="bg-gradient-to-br from-[#000F3A] to-[#002D89] rounded-2xl p-6 text-white shadow-2xl">
          <div className="text-center">
            <div className="text-4xl mb-4">💌</div>
            <h3 className="text-2xl font-bold mb-2">Your Sent Card</h3>
            <p className="text-blue-100 mb-4">Preview of what was sent</p>
            <div className="bg-white/20 p-4 rounded-lg text-left">
              <p className="font-semibold mb-2">Warm wishes for the New Year!</p>
              <p className="text-sm opacity-90">
                "Sending warm wishes, Wishing you a joyful and successful New Year ahead!"
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <span className="text-sm font-semibold">🎁 View in your Sent Cards Gallery</span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm text-slate-600">
          <p>You can view this card anytime in your free gallery</p>
        </div>
      </div>

      <div className="space-y-4">
        <button
          className="block w-full px-8 py-3 text-white rounded-xl shadow-md font-semibold bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] hover:opacity-90 transition"
          onClick={onRestart}
        >
          Create Another Card
        </button>
        <button
          className="block w-full px-8 py-3 border-2 border-[#001B5E] text-[#001B5E] rounded-xl font-semibold hover:bg-[#E5E9FF] transition"
        >
          📁 View Your Sent Cards Gallery
        </button>
      </div>
    </div>
  );
}
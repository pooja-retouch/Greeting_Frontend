import React from "react";

export default function Footer() {

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <span>Made with</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>by</span>
            <a
              href="https://www.risinternational.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-400 hover:text-blue-300 transition duration-200"
            >
              RIS International
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { useMotionPreference } from '../../hooks/useMotionPreference';

export default function CloudsEffect() {
  const prefersReduced = useMotionPreference();

  if (prefersReduced) return null;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
        {/* Cloud 1 */}
        <div
          className="absolute top-1/4 left-0 opacity-40 pointer-events-none"
          style={{
            animation: 'cloudFloat 30s linear infinite',
            width: '300px',
            height: '100px',
          }}
        >
          <svg viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 30 60 Q 60 40 90 40 Q 120 20 150 40 Q 180 15 210 40 Q 240 30 270 50 L 270 80 L 30 80 Z"
              fill="#E0F2FE"
              opacity="0.7"
              stroke="#BAE6FD"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Cloud 2 */}
        <div
          className="absolute top-1/3 right-0 opacity-30 pointer-events-none"
          style={{
            animation: 'cloudFloatReverse 35s linear infinite',
            width: '280px',
            height: '90px',
          }}
        >
          <svg viewBox="0 0 280 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 20 50 Q 50 35 80 35 Q 110 18 140 35 Q 170 12 200 35 Q 230 25 260 50 L 260 75 L 20 75 Z"
              fill="#DBEAFE"
              opacity="0.6"
              stroke="#ADD8E6"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Cloud 3 */}
        <div
          className="absolute top-1/2 left-1/4 opacity-35 pointer-events-none"
          style={{
            animation: 'cloudFloat 40s linear infinite',
            width: '250px',
            height: '80px',
          }}
        >
          <svg viewBox="0 0 250 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 15 45 Q 45 30 75 30 Q 105 15 135 30 Q 165 12 195 30 Q 220 20 245 45 L 245 70 L 15 70 Z"
              fill="#E0F2FE"
              opacity="0.5"
              stroke="#ADD8E6"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Cloud 4 */}
        <div
          className="absolute top-2/3 right-1/3 opacity-25 pointer-events-none"
          style={{
            animation: 'cloudFloatReverse 45s linear infinite',
            width: '220px',
            height: '70px',
          }}
        >
          <svg viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 10 40 Q 40 28 70 28 Q 100 15 130 28 Q 160 12 190 28 Q 215 20 215 40 L 215 65 L 10 65 Z"
              fill="#DBEAFE"
              opacity="0.4"
              stroke="#B0E0E6"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* Cloud 5 */}
        <div
          className="absolute top-20 left-1/3 opacity-25 pointer-events-none"
          style={{
            animation: 'cloudFloat 32s linear infinite',
            width: '240px',
            height: '75px',
          }}
        >
          <svg viewBox="0 0 240 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 12 42 Q 42 30 72 30 Q 102 16 132 30 Q 162 14 192 30 Q 225 22 228 42 L 228 68 L 12 68 Z"
              fill="#E0F2FE"
              opacity="0.45"
              stroke="#ADD8E6"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes cloudFloat {
          0% { transform: translateX(-100vw) translateY(0px); }
          50% { transform: translateX(50vw) translateY(-20px); }
          100% { transform: translateX(120vw) translateY(0px); }
        }
        @keyframes cloudFloatReverse {
          0% { transform: translateX(120vw) translateY(0px); }
          50% { transform: translateX(50vw) translateY(15px); }
          100% { transform: translateX(-100vw) translateY(0px); }
        }
      `}</style>
    </>
  );
}

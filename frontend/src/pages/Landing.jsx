import React from 'react';
import { useNavigate } from 'react-router-dom';
import MultiStepForm from '../components/MultiStepForm/MultiStepForm';
import TestimonialsSlider from '../components/MultiStepForm/TestimonialsSlider';
import TeamCarousel from '../components/TeamCarousel';
import { useMotionPreference } from '../hooks/useMotionPreference';

export default function Landing() {
  const prefersReduced = useMotionPreference();
  const navigate = useNavigate();

  return (
    <>
  

      {/* Main Content Container */}
      <div
        className="bg-[url(assets/bg1.mp4)] min-h-screen relative animate-in fade-in duration-700 overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 0%, rgba(30, 50, 100, 0.6) 0%, transparent 100%),
            radial-gradient(ellipse 80% 120% at 0% 50%, rgba(20, 40, 80, 0.5) 0%, transparent 100%),
            radial-gradient(ellipse 60% 80% at 100% 100%, rgba(15, 35, 70, 0.6) 0%, transparent 100%),
            linear-gradient(135deg, #0F1E3D 0%, #1A2F5C 35%, #1B3A70 70%, #0D1E35 100%)
          `,
        }}
      >
        

        {/* Moonlight Effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-transparent rounded-full blur-xl opacity-30"></div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16 relative z-10">
          {/* ========== HERO SECTION ========== */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 animate-in slide-in-from-bottom duration-500 delay-100">
            {/* LEFT SIDE: HERO TEXT */}
            <div className="order-1 lg:order-1">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-transparent bg-clip-text text-white">
                 Send Beautiful
                </span>
                <br />
                <span className="text-transparent bg-clip-text text-white">
                  Greeting Cards
                </span>
                <br />
                <span className="text-transparent bg-clip-text text-white">
                  With AI-Powered Templates
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-md">
                Send personalized, beautifully designed greeting cards powered by artificial intelligence. Perfect for every occasion.
              </p>

              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#000F3A] to-[#002D89] text-white shadow-md hover:shadow-xl hover:scale-[1.02] transition-all text-lg font-semibold"
              >
                Contact Us
              </button>
            </div>

            {/* RIGHT SIDE: CARD FORM WITH 3D ELEMENTS */}
            <div className="order-2 lg:order-2 relative">
              {/* 3D Rotating Cube - Only show if motion not reduced */}
              {!prefersReduced && (
                <div className="absolute -top-20 -right-20 pointer-events-none opacity-40" style={{ perspective: '1200px' }}>
                  <div
                    style={{
                      animation: 'rotate3DX 6s linear infinite',
                      width: '100px',
                      height: '100px',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#FFD700',
                        border: '2px solid rgba(255, 215, 0, 0.5)',
                        backdropFilter: 'blur(5px)',
                      }}
                    />
                  </div>
                </div>
              )}

              {/* 3D Floating Ornament */}
              {!prefersReduced && (
                <div className="absolute -top-10 -left-10 pointer-events-none" style={{ perspective: '1000px' }}>
                  <div
                    style={{
                      animation: 'floatSwirl 5s ease-in-out infinite',
                      width: '80px',
                      height: '80px',
                    }}
                  >
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="40" r="30" fill="#DC143C" opacity="0.8" />
                      <circle cx="40" cy="40" r="30" fill="none" stroke="#FFD700" strokeWidth="3" />
                      <path d="M40 10 L42 20 L40 25 L38 20 Z" fill="#FFD700" />
                      <circle cx="40" cy="40" r="5" fill="#FFFFFF" opacity="0.6" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Form Card - Main Focus */}
              <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-blue-200 animate-[fadeIn_1s_ease]">
               <div className="mb-4 text-center">
                 <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-emerald-700 rounded-full font-semibold text-sm shadow-md">
                   🎁 Forever Free - No Payment Needed
                 </span>
               </div>

               <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
                   Send Beautiful and Customized AI Greeting Card
                 </span>
               </h2>

               <MultiStepForm />
              </div>
            </div>
          </div>

          {/* ========== TESTIMONIALS SECTION ========== */}
          <div className="mb-24">
            <div className="text-center mb-12 animate-in slide-in-from-bottom duration-500">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B9D] via-[#FFA500] to-[#FFD700]">
                  What Our Users Say
                </span>
              </h3>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Loved by thousands, completely free forever
              </p>
            </div>
            <TestimonialsSlider />
          </div>

          {/* ========== TEAM SECTION ========== */}
          <div className="mb-24">
            <div className="text-center mb-12 animate-in slide-in-from-bottom duration-500 delay-100">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#00B8E6] to-[#0099FF]">
                  Meet Our Amazing Team
                </span>
              </h3>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                The talented minds behind your beautiful greeting cards
              </p>
            </div>

            <TeamCarousel />

            <div className="text-center mt-8 animate-in slide-in-from-bottom duration-500 delay-200">
              <div className="inline-block p-8 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-blue-900/30 rounded-2xl border border-purple-400/50 backdrop-blur-xl hover:border-purple-300/80 transition-all">
                <p className="text-xl font-bold mb-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B9D] via-[#FFD700] to-[#00D4FF]">
                    🎉 Thank You to Our Amazing Team!
                  </span>
                </p>
                <p className="text-blue-100 text-lg leading-relaxed max-w-md">
                  Behind Greetins is a talented team of passionate creators bringing joy and connection to people worldwide, completely free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

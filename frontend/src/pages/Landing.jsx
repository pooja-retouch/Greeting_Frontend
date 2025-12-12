import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MultiStepForm from '../components/MultiStepForm/MultiStepForm';
import TestimonialsSlider from '../components/MultiStepForm/TestimonialsSlider';
import TeamCarousel from '../components/TeamCarousel';

export default function Landing() {
  const navigate = useNavigate();

  // Safe motion preference implementation (no external hook needed)
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReduced(mediaQuery.matches);
      
      const handler = (e) => setPrefersReduced(e.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  // Video error handling
  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.addEventListener('error', (e) => {
        console.error('Video error:', e);
        video.style.display = 'none'; // Hide broken video
      });
      
      video.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully');
      });
    }
  }, []);

  return (
    <>
      {/* Main Content Container */}
      <div className="min-h-screen relative overflow-hidden">

        {/* ---- Background Video (Cloudinary) ---- */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source 
            src="https://res.cloudinary.com/dfmfib9sw/video/upload/Bg1_xwdk4n.mp4?_s=vp-3.5.2" 
            type="video/mp4" 
          />
          {/* Fallback gradient background if video fails */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        </video>

        {/* ---- Gradient Overlay ---- */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
              radial-gradient(ellipse 120% 80% at 50% 0%, rgba(30, 50, 100, 0.6) 0%, transparent 100%),
              radial-gradient(ellipse 80% 120% at 0% 50%, rgba(20, 40, 80, 0.5) 0%, transparent 100%),
              radial-gradient(ellipse 60% 80% at 100% 100%, rgba(15, 35, 70, 0.6) 0%, transparent 100%),
              linear-gradient(135deg, #0F1E3D 0%, #1A2F5C 35%, #1B3A70 70%, #0D1E35 100%)
            `
          }}
        ></div>

        {/* ---- Main Content ---- */}
        <div className="container mx-auto px-6 py-16 relative z-20">
          
          {/* ========== HERO SECTION ========== */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

            {/* LEFT SIDE: HERO TEXT */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">Send Beautiful</span><br />
                <span className="text-white">Greeting Cards</span><br />
                <span className="text-white">With AI-Powered Templates</span>
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

            {/* RIGHT SIDE: CARD FORM (SVGs removed) */}
            <div className="relative">
              {/* FORM CARD */}
              <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-blue-200">
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

          {/* TESTIMONIALS SECTION */}
          <div className="mb-24">
            <div className="text-center mb-12">
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

          {/* TEAM SECTION */}
          <div className="mb-24">
            <div className="text-center mb-12">
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

            <div className="text-center mt-8">
              <div className="inline-block p-8 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-blue-900/30 rounded-2xl border border-purple-400/50 backdrop-blur-xl">
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
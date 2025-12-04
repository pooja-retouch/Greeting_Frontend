import React, { useRef } from "react";
import Navbar from "../components/Navbar"; // ADD THIS IMPORT
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";
import TestimonialsSlider from "../components/MultiStepForm/TestimonialsSlider";
import { Link } from "react-router-dom";

export default function Landing() {
  const emptyCardRef = useRef(null);
  const formCardRef = useRef(null);

  const scrollToEmptyCard = () => {
    if (emptyCardRef.current) {
      emptyCardRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToFormCard = () => {
    if (formCardRef.current) {
      formCardRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FF] via-[#F0F7FF] to-[#E3F2FF] relative">
      {/* ADD NAVBAR HERE */}
      <Navbar />
      
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* ========== HERO SECTION (Writeups LEFT, Card RIGHT) ========== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* LEFT SIDE: WRITEUPS */}
          <div className="order-1 lg:order-1">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-bold text-lg">
              🎁 100% FREE FOREVER - NO PAYMENTS EVER
            </div>
            
            <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
              Create Beautiful Greeting Cards
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000F3A] to-[#002D89]">
                Completely Free • No Signup • No Credit Card
              </span>
            </h1>

            <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 rounded-r-lg">
              <p className="text-lg font-semibold text-green-700 flex items-center gap-2">
                <span className="text-xl">✓</span>
                No signup required - Start instantly
              </p>
              <p className="text-lg font-semibold text-green-700 flex items-center gap-2 mt-2">
                <span className="text-xl">✓</span>
                No credit card - 100% Free Forever
              </p>
              <p className="text-lg font-semibold text-green-700 flex items-center gap-2 mt-2">
                <span className="text-xl">✓</span>
                Send to colleagues, clients, friends & family
              </p>
            </div>

            <p className="text-xl text-slate-700 mb-8">
              Perfect for <span className="font-bold text-[#001B5E]">directors sending to staff</span>, 
              <span className="font-bold text-[#001B5E]"> professionals to clients</span>, or 
              <span className="font-bold text-[#001B5E]"> anyone to loved ones</span>. 
              Create, customize, and send beautiful cards instantly—no cost, no commitment.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button 
                onClick={scrollToEmptyCard}
                className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#000F3A] to-[#002D89] text-white shadow-md hover:shadow-xl hover:scale-[1.02] transition-all text-lg font-semibold"
              >
                Start From Empty Card
              </button>
              <button 
                onClick={scrollToFormCard}
                className="px-8 py-3 rounded-2xl border-2 border-[#001B5E] text-[#000F3A] hover:bg-[#E5E9FF] transition text-lg font-semibold"
              >
                Use Guided Form
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: CARD/FORM */}
          <div className="order-2 lg:order-2 relative">
            <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-blue-200 animate-[fadeIn_1s_ease]">
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                  🎁 Forever Free - No Payment Needed
                </span>
              </div>
              <h2 className="text-3xl font-semibold text-slate-800 mb-6 text-center">
                Create Your Free Greeting
              </h2>
              <div ref={formCardRef}>
                <MultiStepForm />
              </div>
            </div>
          </div>
        </div>

        {/* ========== EMPTY CARD SECTION (Writeups LEFT, Form RIGHT) ========== */}
        <div ref={emptyCardRef} className="mb-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Start From Empty Card
            </h2>
            <p className="text-xl text-slate-600">
              Quick and easy way to create a greeting card from scratch
            </p>
          </div>
          
          <EmptyCardSection />
        </div>

        {/* ========== PERFECT FOR EVERYONE SECTION ========== */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Perfect For Every Occasion
            </h2>
            <p className="text-xl text-slate-600">
              Send beautiful greeting cards to anyone, completely free
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-[#001B5E] mb-3">For Professionals & Businesses</h3>
              <p className="text-slate-700">
                Send professional greetings to colleagues, clients, or staff members. 
                Perfect for corporate communications and client appreciation.
              </p>
            </div>
            
            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-[#001B5E] mb-3">For Family & Friends</h3>
              <p className="text-slate-700">
                Share heartfelt messages with loved ones. Personalize for birthdays, 
                holidays, anniversaries, or just to say hello.
              </p>
            </div>
            
            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#001B5E] mb-3">For Directors & Leaders</h3>
              <p className="text-slate-700">
                Send motivational messages to your team or greetings to prospective customers. 
                Professional, elegant, and completely free.
              </p>
            </div>
          </div>
        </div>

        {/* ========== SENT CARDS PREVIEW SECTION (Writeups LEFT, Preview RIGHT) ========== */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE: WRITEUPS */}
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                See Exactly What You've Sent
              </h2>
              
              <p className="text-lg text-slate-600 mb-6">
                Every greeting card you create gets saved with a beautiful preview image. 
                <span className="font-bold text-[#001B5E]"> View all your sent cards anytime, completely free!</span>
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-200">
                <h3 className="font-semibold text-lg text-slate-800 mb-3">Your Sent Cards Gallery Includes:</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">📸</span>
                    <span><strong>High-resolution previews:</strong> See exactly what recipients received</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">📚</span>
                    <span><strong>Full history:</strong> View all your sent cards in one place</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">🔍</span>
                    <span><strong>Detailed view:</strong> See sender, recipient, and message details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">🎁</span>
                    <span><strong>100% Free:</strong> No charges ever for viewing your gallery</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE: PREVIEW CARD */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-br from-[#000F3A] to-[#002D89] rounded-2xl p-8 text-white shadow-2xl">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold mb-2">Your Sent Card</h3>
                    <p className="text-blue-100 mb-6">Preview of what recipients see</p>
                    
                    <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm text-left">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xl">👤</span>
                        </div>
                        <div>
                          <div className="font-bold">Birthday Wishes</div>
                          <div className="text-sm opacity-80">From: Company Name</div>
                        </div>
                      </div>
                      <p className="italic text-sm">"Wishing you a fantastic birthday celebration filled with joy and happiness!"</p>
                      <div className="mt-4 pt-4 border-t border-white/30 text-xs">
                        <div className="flex justify-between">
                          <span>To: Team Members</span>
                          <span>🎯 Professional</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg border">
                  <span className="text-sm font-semibold text-green-600">FREE PREVIEW</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== TESTIMONIALS SECTION ========== */}
        <div className="mb-24">
          <TestimonialsSlider />
        </div>

        {/* ========== ABSOLUTE FREE BANNER ========== */}
        <div className="mb-16 p-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">🎉 ABSOLUTELY FREE FOREVER</h2>
          <p className="text-xl mb-2">No signup • No payments • No subscriptions • No hidden costs</p>
          <p className="text-lg mb-6">Create unlimited cards • View all sent cards • 100% Free for Life</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={scrollToEmptyCard}
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition"
            >
              Start From Empty Card
            </button>
            <button 
              onClick={scrollToFormCard}
              className="px-8 py-3 bg-blue-800 text-white font-bold rounded-xl hover:bg-blue-900 transition"
            >
              Use Guided Form
            </button>
          </div>
        </div>

        {/* ========== FOOTER ========== */}
        <footer className="pt-8 border-t border-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#000F3A] to-[#002D89] bg-clip-text text-transparent">
                Greetin
              </h2>
              <p className="text-slate-600 mt-2">Beautiful greetings, absolutely free forever.</p>
            </div>
            <div className="flex gap-8 mt-6 md:mt-0">
              <Link to="/privacy" className="text-slate-600 hover:text-[#001B5E] transition font-medium">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-600 hover:text-[#001B5E] transition font-medium">
                Terms of Use
              </Link>
              <Link to="/contact" className="text-slate-600 hover:text-[#001B5E] transition font-medium">
                Contact
              </Link>
              <Link to="/sent-cards" className="text-slate-600 hover:text-[#001B5E] transition font-medium">
                View Sent Cards
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Greetin. All rights reserved. <strong>Forever free to use - No payments ever!</strong></p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// ========== EMPTY CARD SECTION COMPONENT ==========
function EmptyCardSection() {
  const [senderName, setSenderName] = React.useState('');
  const [recipientName, setRecipientName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [recipientType, setRecipientType] = React.useState('staff');

  const templates = {
    staff: "Dear team member, your dedication and hard work are truly appreciated. Thank you for your excellent contribution to our team.",
    client: "Dear valued client, thank you for your continued trust and partnership. We look forward to serving you in the coming year.",
    family: "To my dear family, sending you all my love and warmest wishes. You mean the world to me.",
    friend: "Hey friend! Just wanted to let you know how much I appreciate you. Thanks for always being there.",
    prospect: "Dear prospect, we appreciate your interest in our services and look forward to the opportunity to work together."
  };

  const recipientTypes = [
    { id: 'staff', label: 'Staff Member', icon: '👨‍💼', desc: 'Send to your team members' },
    { id: 'client', label: 'Client', icon: '🤝', desc: 'Send to valued customers' },
    { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦', desc: 'Send to loved ones' },
    { id: 'friend', label: 'Friend', icon: '👫', desc: 'Send to friends' },
    { id: 'prospect', label: 'Prospect', icon: '🎯', desc: 'Send to potential customers' }
  ];

  const handleTemplateSelect = (type) => {
    setRecipientType(type);
    setMessage(templates[type]);
  };

  const handleSendCard = () => {
    if (!senderName.trim() || !recipientName.trim() || !message.trim()) {
      alert("Please fill in all fields before sending the card.");
      return;
    }

    // Save to localStorage
    const savedCards = JSON.parse(localStorage.getItem('greetinCards') || '[]');
    savedCards.push({
      id: Date.now(),
      senderName,
      recipientName,
      message,
      recipientType,
      date: new Date().toISOString(),
      previewImage: `https://via.placeholder.com/400x250/000F3A/FFFFFF?text=Greeting+Card`
    });
    localStorage.setItem('greetinCards', JSON.stringify(savedCards));

    alert(`🎉 Card Sent Successfully!\n\nFrom: ${senderName}\nTo: ${recipientName}\n\n✅ Card saved to your gallery\n📁 Total cards saved: ${savedCards.length}`);
    
    // Reset form
    setSenderName('');
    setRecipientName('');
    setMessage('');
    setRecipientType('staff');
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* LEFT SIDE: WRITEUPS & INSTRUCTIONS */}
      <div className="lg:col-span-1">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 shadow-lg h-full">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">How It Works</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Select Recipient Type</h4>
                <p className="text-sm text-slate-600">Choose who you're sending to</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Fill Details</h4>
                <p className="text-sm text-slate-600">Add sender, recipient, and message</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Send & Save</h4>
                <p className="text-sm text-slate-600">Card is sent and saved to your gallery</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Free Forever Features:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• No signup required</li>
              <li>• Unlimited cards</li>
              <li>• View all sent cards</li>
              <li>• No payment ever</li>
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: FORM & PREVIEW */}
      <div className="lg:col-span-2">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 shadow-lg">
          {/* Quick Selection Tabs */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Quick Templates:</h4>
            <div className="flex flex-wrap gap-2">
              {recipientTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleTemplateSelect(type.id)}
                  className={`px-4 py-2 rounded-lg border font-medium transition-all flex items-center gap-2 ${
                    recipientType === type.id 
                      ? 'bg-gradient-to-r from-[#000F3A] to-[#002D89] text-white border-transparent' 
                      : 'border-blue-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <span className="text-lg">{type.icon}</span>
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full p-3 bg-white border border-blue-200 rounded-xl focus:ring-4 focus:ring-[#B8C2FF] outline-none"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Recipient Name</label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full p-3 bg-white border border-blue-200 rounded-xl focus:ring-4 focus:ring-[#B8C2FF] outline-none"
                placeholder="Who are you sending to?"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-32 p-3 bg-white border border-blue-200 rounded-xl focus:ring-4 focus:ring-[#B8C2FF] outline-none resize-none"
              placeholder="Type your custom message here..."
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleSendCard}
              disabled={!senderName.trim() || !recipientName.trim() || !message.trim()}
              className={`flex-1 py-3 rounded-xl font-bold text-lg shadow-md transition ${
                senderName.trim() && recipientName.trim() && message.trim()
                  ? 'bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] text-white hover:opacity-90'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
              }`}
            >
              SEND CARD NOW (FREE)
            </button>
            
            <div className="flex-1 p-3 bg-green-50 rounded-xl border border-green-200 flex items-center justify-center">
              <span className="text-green-700 font-medium text-sm">
                ✓ Card will be saved to your gallery
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
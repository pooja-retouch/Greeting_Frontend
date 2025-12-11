import React, { useState } from "react";
import { Link } from "react-router-dom";
import { submitContactForm } from "../api/apiClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting contact form:", formData);
      const response = await submitContactForm(formData);
      console.log("Contact form submitted successfully:", response);

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      setIsSubmitting(false);
      // You might want to show an error message to the user here
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FF] via-[#F0F7FF] to-[#E3F2FF]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Contact <span className="bg-gradient-to-r from-[#000F3A] to-[#002D89] bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Have questions, feedback, or need help? We're here for you. Get in touch with our friendly team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-200 shadow-lg sticky top-24">
              <h2 className="text-2xl font-bold text-slate-800 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Email Us</h3>
                    <p className="text-slate-600">support@greetin.app</p>
                    <p className="text-sm text-slate-500 mt-1">Typically reply within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Live Chat</h3>
                    <p className="text-slate-600">Available 9AM-6PM EST</p>
                    <p className="text-sm text-slate-500 mt-1">Click the chat icon in the corner</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Help Center</h3>
                    <p className="text-slate-600">FAQs & Guides</p>
                    <p className="text-sm text-slate-500 mt-1">Find answers to common questions</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-blue-200">
                <h3 className="font-bold text-slate-800 mb-4">Why Choose Greetin?</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>100% Free Forever</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>No Signup Required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Unlimited Greeting Cards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>View All Sent Cards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-200 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-bounce">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-spin">
                      <span className="text-green-600 text-2xl">🎉</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-green-800 animate-pulse">Message Sent Successfully! ✨</h3>
                      <p className="text-green-600 text-sm">Thank you for contacting us. We'll respond within 24 hours.</p>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-center space-x-2">
                    <span className="animate-bounce text-yellow-500" style={{ animationDelay: '0ms' }}>🎊</span>
                    <span className="animate-bounce text-blue-500" style={{ animationDelay: '200ms' }}>⭐</span>
                    <span className="animate-bounce text-red-500" style={{ animationDelay: '400ms' }}>🎁</span>
                    <span className="animate-bounce text-purple-500" style={{ animationDelay: '600ms' }}>✨</span>
                    <span className="animate-bounce text-pink-500" style={{ animationDelay: '800ms' }}>🎉</span>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-sm font-medium text-slate-700 mb-2 transform transition-all duration-200 group-focus-within:text-blue-600 group-focus-within:scale-105 origin-left animate-in slide-in-from-left duration-300 delay-100">
                      Your Name *
                      <span className="inline-block ml-1 opacity-0 group-focus-within:opacity-100 animate-in zoom-in duration-300 delay-200">✏️</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-white border border-blue-200 rounded-xl focus:ring-4 focus:ring-[#B8C2FF] outline-none transition-all duration-300 focus:scale-[1.02] focus:shadow-xl focus:border-blue-400 group/input relative z-10"
                        placeholder="Enter your name"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 rounded-xl blur-sm"></div>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-focus-within:w-full transition-all duration-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium text-slate-700 mb-2 transform transition-all duration-200 group-focus-within:text-blue-600 group-focus-within:scale-105 origin-left animate-in slide-in-from-right duration-300 delay-200">
                      Your Email *
                      <span className="inline-block ml-1 opacity-0 group-focus-within:opacity-100 animate-in zoom-in duration-300 delay-200">📧</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-white border border-blue-200 rounded-xl focus:ring-4 focus:ring-[#B8C2FF] outline-none transition-all duration-300 focus:scale-[1.02] focus:shadow-xl focus:border-blue-400 group/input relative z-10"
                        placeholder="Enter your email"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 rounded-xl blur-sm"></div>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-focus-within:w-full transition-all duration-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="relative group animate-in zoom-in duration-300 delay-300">
                  <label className="block text-sm font-medium text-slate-700 mb-2 transform transition-all duration-200 group-focus-within:text-blue-600 group-focus-within:scale-105 origin-left">
                    Subject *
                    <span className="inline-block ml-1 opacity-0 group-focus-within:opacity-100 animate-in bounce-in duration-300 delay-100">🎯</span>
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white border border-blue-200 rounded-xl focus:ring-4 focus:ring-[#B8C2FF] outline-none transition-all duration-300 focus:scale-[1.02] focus:shadow-xl focus:border-blue-400 appearance-none cursor-pointer relative z-10 pr-10"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="business">Business Inquiries</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 rounded-xl blur-sm"></div>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform duration-200 group-focus-within:rotate-180">
                      <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-focus-within:w-full transition-all duration-500 rounded-full"></div>
                  </div>
                </div>

                <div className="relative group animate-in slide-in-from-bottom duration-300 delay-400">
                  <label className="block text-sm font-medium text-slate-700 mb-2 transform transition-all duration-200 group-focus-within:text-blue-600 group-focus-within:scale-105 origin-left">
                    Your Message *
                    <span className="inline-block ml-1 opacity-0 group-focus-within:opacity-100 animate-in zoom-in duration-300 delay-200">💬</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full p-3 bg-white border border-blue-200 rounded-xl focus:ring-4 focus:ring-[#B8C2FF] outline-none resize-none transition-all duration-300 focus:scale-[1.02] focus:shadow-xl focus:border-blue-400 relative z-10"
                      placeholder="How can we help you? Tell us what you're looking for..."
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 rounded-xl blur-sm"></div>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-focus-within:w-full transition-all duration-500 rounded-full"></div>
                    <div className="absolute top-2 right-2 text-slate-400 text-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 delay-300">
                      {formData.message.length}/500
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 rounded-xl font-semibold transition ${
                      isSubmitting
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] text-white hover:opacity-90'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                  
                  <div className="text-sm text-slate-500">
                    * Required fields
                  </div>
                </div>
              </form>
              
              <div className="mt-8 pt-8 border-t border-blue-200">
                <h3 className="font-bold text-slate-800 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-1">Is Greetin really free forever?</h4>
                    <p className="text-sm text-slate-600">
                      Yes! Greetin is 100% free with no plans to charge. No credit card required, ever.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-1">Do I need to create an account?</h4>
                    <p className="text-sm text-slate-600">
                      No signup required. You can start creating and sending cards immediately.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-1">How long does support take to respond?</h4>
                    <p className="text-sm text-slate-600">
                      We typically respond within 24 hours, often much sooner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Quick Start</h3>
              <p className="text-slate-600">
                Ready to create your first card? It takes less than a minute to get started.
              </p>
              <Link 
                to="/"
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-[#000F3A] to-[#002D89] text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Create a Card
              </Link>
            </div>
            
            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Need Inspiration?</h3>
              <p className="text-slate-600">
                Check out examples and templates to get ideas for your greeting cards.
              </p>
              <Link 
                to="/"
                className="inline-block mt-4 px-6 py-2 border-2 border-[#001B5E] text-[#000F3A] rounded-lg font-semibold hover:bg-[#E5E9FF] transition"
              >
                See Examples
              </Link>
            </div>
            
            <div className="bg-white/80 p-6 rounded-2xl border border-blue-200 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Mobile Friendly</h3>
              <p className="text-slate-600">
                Create and send beautiful greeting cards from any device - phone, tablet, or computer.
              </p>
              <div className="mt-4 text-sm text-slate-500">
                No app download required
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

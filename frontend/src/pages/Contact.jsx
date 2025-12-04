import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FF] via-[#F0F7FF] to-[#E3F2FF]">
      <Navbar />
      
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
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-green-800">Message Sent Successfully!</h3>
                      <p className="text-green-600 text-sm">Thank you for contacting us. We'll respond within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white border border-blue-200 rounded-xl focus:ring-4 focus:ring-[#B8C2FF] outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white border border-blue-200 rounded-xl focus:ring-4 focus:ring-[#B8C2FF] outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white border border-blue-200 rounded-xl focus:ring-4 focus:ring-[#B8C2FF] outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="business">Business Inquiries</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full p-3 bg-white border border-blue-200 rounded-xl focus:ring-4 focus:ring-[#B8C2FF] outline-none resize-none"
                    placeholder="How can we help you?"
                  />
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
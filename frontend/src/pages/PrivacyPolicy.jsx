import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FF] via-[#F0F7FF] to-[#E3F2FF] relative overflow-hidden">
      {/* Animated SVG Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shield SVGs */}
        <svg className="absolute top-20 left-20 w-20 h-20 text-blue-400 opacity-15 animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>

        {/* Lock SVG */}
        <svg className="absolute top-1/4 right-16 w-16 h-16 text-green-500 opacity-20 animate-bounce" style={{animationDelay: '1s'}} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <circle cx="12" cy="16" r="1"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>

        {/* Eye SVG */}
        <svg className="absolute bottom-1/4 left-16 w-18 h-18 text-purple-400 opacity-18 animate-pulse" style={{animationDelay: '2s'}} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>

        {/* Checkmark SVG */}
        <svg className="absolute bottom-1/3 right-20 w-14 h-14 text-green-400 opacity-25 animate-ping" style={{animationDelay: '3s', animationDuration: '3s'}} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="20,6 9,17 4,12"/>
        </svg>

        {/* Data Protection Shield */}
        <svg className="absolute top-3/4 left-1/3 w-24 h-24 text-indigo-400 opacity-15 animate-spin" style={{animationDuration: '10s'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>

        {/* Privacy Wave */}
        <svg className="absolute bottom-10 right-1/4 w-32 h-16 text-blue-300 opacity-10 animate-pulse" style={{animationDelay: '4s'}} viewBox="0 0 400 100">
          <path d="M0,60 Q50,30 100,60 T200,60 Q250,80 300,60 T400,60 V100 H0 Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        <div className="animate-in fade-in duration-700">
          <h1 className="text-4xl font-bold text-slate-900 mb-8 animate-in slide-in-from-top duration-500">Privacy Policy</h1>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-blue-200 hover:shadow-2xl transition-all duration-500">
          {/* Key Privacy Promise */}
          <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200 animate-in slide-in-from-bottom duration-500 delay-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-green-800">Your Privacy is Protected</h2>
            </div>
            <p className="text-lg text-green-700 mb-4">
              <strong>Important:</strong> Greetin processes your greeting cards entirely in memory and never saves your templates, messages, or personal information. Everything is generated and forgotten immediately.
            </p>

            <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
              <div className="p-3 bg-white rounded-lg border border-green-300">
                <div className="text-green-600 font-bold">🚫 NO TEMPLATES SAVED</div>
                <div className="text-green-700">Your customizations exist only in memory</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-green-300">
                <div className="text-green-600 font-bold">🚫 NO MESSAGES SAVED</div>
                <div className="text-green-700">Personal messages vanish after sending</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-green-300">
                <div className="text-green-600 font-bold">🚫 NO DATA STORED</div>
                <div className="text-green-700">Complete privacy with zero retention</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* What We Do */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">🛡️ What We Do (and Don't Do)</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-800 mb-2">✅ What We DO:</h3>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Process your requests in real-time</li>
                    <li>• Generate greeting cards with AI</li>
                    <li>• Apply templates and customizations</li>
                    <li>• Send emails with your cards</li>
                    <li>• Provide beautiful templates instantly</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h3 className="font-bold text-red-800 mb-2">❌ What We DON'T Do:</h3>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Store your templates or messages</li>
                    <li>• Save your recipient information</li>
                    <li>• Track your usage patterns</li>
                    <li>• Sell your personal data</li>
                    <li>• Require email signups</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Template Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">🎨 Template Privacy & Security</h2>

              <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">We Don't Save Your Templates</h3>
                <div className="space-y-3">
                  <p className="text-blue-700">
                    <strong>Immediate Processing:</strong> When you customize a template with your personal message, it exists only in your browser memory while you work on it.
                  </p>
                  <p className="text-blue-700">
                    <strong>One-Time Generation:</strong> Cards are generated fresh each time you make changes. No cache, no storage, no history.
                  </p>
                  <p className="text-blue-700">
                    <strong>Complete Disappearance:</strong> Once you send your card or close the page, all template customizations and personal content vanish completely.
                  </p>
                </div>

                <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-slate-600">
                    <strong>Privacy Guarantee:</strong> Your greeting card templates containing personal messages, recipient names, and custom content are never stored on our servers. Period.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">📊 Information Collection</h2>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-2">What We Temporarily Process:</h3>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Template selections (exists only during your session)</li>
                    <li>• Text customizations (processed and forgotten)</li>
                    <li>• Email addresses (used only for sending, never stored)</li>
                    <li>• Communication preferences (temporary processing only)</li>
                  </ul>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="font-bold text-orange-800 mb-2">🚫 What We NEVER Store:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-1">Personal Data:</h4>
                      <ul className="text-orange-600 text-sm space-y-1">
                        <li>• Names and contact information</li>
                        <li>• Personalized message content</li>
                        <li>• Communication history</li>
                        <li>• Usage behavior patterns</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-1">Digital Assets:</h4>
                      <ul className="text-orange-600 text-sm space-y-1">
                        <li>• Custom greeting card images</li>
                        <li>• Template customizations</li>
                        <li>• Generated content/screenshots</li>
                        <li>• Processing metadata</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies & Analytics */}
            {/* in future implementation  */}
            

            {/* Email Security */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">✉️ Email Privacy</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-800 mb-3">✅ What We Protect:</h3>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Your email address is never stored</li>
                    <li>• Only used for the specific send request</li>
                    <li>• Immediately forgotten after sending</li>
                    <li>• No marketing or unsolicited emails</li>
                    <li>• Secure transmission via encrypted protocols</li>
                  </ul>
                </div>

                <div className="p-5 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-3">🔐 How Emails Work:</h3>
                  <div className="text-blue-700 text-sm space-y-2">
                    <p>• <strong>Email Processing:</strong> Your address is used only to send the greeting card</p>
                    <p>• <strong>Third-Party Service:</strong> We use secure email providers (like ZeptoMail) to deliver your cards</p>
                    <p>• <strong>No Logs:</strong> Delivery confirmations are not stored</p>
                    <p>• <strong>Your Control:</strong> You provide and can withdraw email consent at any time</p>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Data Processing */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">🤖 AI Processing Privacy</h2>

              <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-200">
                <h3 className="text-lg font-bold text-indigo-800 mb-3">Zero Data Retention</h3>

                <div className="space-y-3">
                  <p className="text-indigo-700">
                    <strong>AI Analysis:</strong> When you generate messages or customize cards, our AI processes your inputs in real-time but never stores or learns from personal content.
                  </p>

                  <div className="p-4 bg-white rounded-lg border-l-4 border-indigo-500">
                    <p className="text-sm text-slate-600">
                      <strong>Privacy First AI:</strong> Our AI models analyze text for context, tone, and personalization but all processing happens in memory. No templates, messages, or personal data enter our training datasets or permanent storage.
                    </p>
                  </div>

                  <p className="text-indigo-700">
                    <strong>Anonymous Processing:</strong> AI requests are processed without linking to user identities, making all operations completely anonymous and non-trackable.
                  </p>
                </div>
              </div>
            </section>

            {/* Free Service Commitment */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">🎁 Free Service Commitment</h2>

              <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-3">Why Privacy-First is Our Only Model</h3>

                <div className="space-y-3">
                  <p className="text-green-700">
                    <strong>No Business Model Based on Data:</strong> Since we provide Greetin completely free forever, we have no incentive to collect or monetize your personal information.
                  </p>

                  <p className="text-green-700">
                    <strong>Transparent Operations:</strong> All processing happens on-demand with no data accumulation. Each card you create is a fresh, independent process.
                  </p>

                  <p className="text-green-700">
                    <strong>User Trust is Paramount:</strong> We believe in the power of genuine connections through beautiful greetings, without the compromise of privacy invasions.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">📞 Contact Us</h2>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-slate-700 mb-4">
                  Questions about your privacy or how Greetin handles your data? We're here to help!
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Contact Support
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-500">
                      📧 Response time: Within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Privacy Guarantee */}
          <div className="mt-12 p-8 bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl text-white">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Privacy Guarantee</h3>
              <p className="text-lg opacity-90 mb-4">
                You can create beautiful greeting cards with complete confidence knowing your personal information stays personal.
              </p>
              <p className="text-sm opacity-75">
                Greetin • Privacy-First • 100% Free Forever • No Data Collection
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-blue-200">
            <p className="text-slate-500 text-sm">Last updated: December 9, 2025</p>
            <p className="text-slate-500 text-sm mt-2">Greetin - Free Greeting Card Service</p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a href="/" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] text-white rounded-xl font-semibold hover:opacity-90 transition">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

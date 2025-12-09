import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FF] via-[#F0F7FF] to-[#E3F2FF]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-blue-200">
          {/* Key Privacy Promise */}
          <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-green-800">Your Privacy is Protected</h2>
            </div>
            <p className="text-lg text-green-700">
              <strong>Important:</strong> Greetin processes your greeting cards entirely in memory and never saves your templates, messages, or personal information. Everything is generated and forgotten immediately.
            </p>
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

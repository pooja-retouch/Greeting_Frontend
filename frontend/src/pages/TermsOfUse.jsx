import React from "react";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FF] via-[#F0F7FF] to-[#E3F2FF] relative overflow-hidden">
      {/* Animated SVG Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Document Scroll SVG */}
        <svg className="absolute top-16 left-12 w-24 h-24 text-blue-500 opacity-12 animate-pulse" style={{animationDelay: '0s'}} fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>

        {/* Legal Scale SVG */}
        <svg className="absolute top-1/4 right-20 w-20 h-20 text-green-600 opacity-15 animate-bounce" style={{animationDelay: '1s'}} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001-0-.088 0L7.107 14 8 5.019M11 6h8l-2 2m0 0l2-2m-1 7l-2-2m1 2l-2 2"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8l-2 2m0 0l2-2m-1 7l-2-2m1 2l-2 2"/>
        </svg>

        {/* Rules Book SVG */}
        <svg className="absolute bottom-1/4 left-20 w-16 h-16 text-purple-500 opacity-20 animate-pulse" style={{animationDelay: '2s'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>

        {/* Contract Agreement SVG */}
        <svg className="absolute bottom-1/3 right-16 w-18 h-18 text-indigo-500 opacity-18 animate-ping" style={{animationDelay: '3s', animationDuration: '4s'}} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>

        {/* Privacy Lock SVG */}
        <svg className="absolute top-2/3 left-1/4 w-14 h-14 text-red-500 opacity-25 animate-bounce" style={{animationDelay: '4s'}} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <circle cx="12" cy="16" r="1"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>

        {/* Terms Wave */}
        <svg className="absolute bottom-8 right-1/3 w-36 h-18 text-indigo-400 opacity-8 animate-pulse" style={{animationDelay: '5s'}} viewBox="0 0 400 100">
          <path d="M0,50 Q60,20 120,50 T240,50 Q300,80 360,50 T480,50 Q420,20 360,50 T240,50 Q180,20 120,50 T0,50" fill="currentColor"/>
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10v20c5.5 0 10-4.5 10-10zm60 60c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        <div className="animate-in fade-in duration-700">
          <h1 className="text-4xl font-bold text-slate-900 mb-8 animate-in slide-in-from-top duration-500">Terms of Use</h1>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-blue-200 hover:shadow-2xl transition-all duration-500">
          {/* Data Privacy Guarantee */}
          <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200 animate-in slide-in-from-bottom duration-500 delay-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-green-800">No Data Saved Guarantee</h2>
            </div>
            <p className="text-lg text-green-700">
              <strong>Important:</strong> Greetin does NOT save your templates, messages, recipient information, or any personal data. All processing happens in real-time memory only. Your cards exist temporarily during creation and vanish completely afterwards.
            </p>
          </div>

          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">📋 1. Acceptance of Terms</h2>

              <p className="text-slate-700 mb-4">
                By accessing and using Greetin ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-700 font-semibold">
                  Free Service Agreement: All users access Greetin completely free with no payment or subscription requirements.
                </p>
              </div>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">🎨 2. Description of Service</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-800 mb-2">What We Provide:</h3>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• AI-powered greeting card generation</li>
                    <li>• Beautiful customizable templates</li>
                    <li>• Real-time card preview and editing</li>
                    <li>• Direct email delivery service</li>
                    <li>• Completely free for all users</li>
                    <li>• No signup or registration required</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h3 className="font-bold text-red-800 mb-2">What We DON'T Provide:</h3>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Permanent data storage</li>
                    <li>• User account management</li>
                    <li>• Message history retention</li>
                    <li>• Template save functionality</li>
                    <li>• Cloud storage for your cards</li>
                    <li>• Subscription services or payments</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Handling Policy */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">🛡️ 3. Data Handling Policy</h2>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-3">Zero Data Retention</h3>
                  <div className="space-y-3">
                    <p className="text-green-700">
                      <strong>We don't save templates:</strong> Your customized greeting cards only exist while you are creating them. Once you send the card or close the page, all template customizations disappear completely.
                    </p>
                    <p className="text-green-700">
                      <strong>We don't save messages:</strong> Your personal greeting messages are processed in real-time for card generation but are never stored permanently. They vanish immediately after sending.
                    </p>
                    <p className="text-green-700">
                      <strong>We don't save recipient data:</strong> Email addresses and recipient information are used only for the single email delivery and are never saved to our servers.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="font-bold text-orange-800 mb-2">🚫 Strict No-Data Policy:</h3>
                  <ul className="text-orange-600 space-y-1">
                    <li>• No cloud storage of your greeting card contents</li>
                    <li>• No permanent database entries for any user data</li>
                    <li>• No tracking of user activities or preferences</li>
                    <li>• No cookies or persistent user session data</li>
                    <li>• No analytics that could identify individual users</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">👤 4. User Responsibilities</h2>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-800 mb-3">Content Guidelines</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>You agree to use Greetin only for creating positive, appropriate greeting cards</li>
                  <li>You are responsible for ensuring recipient information is correct and you have permission to send emails</li>
                  <li>You understand that cards are sent immediately and cannot be recalled once delivered</li>
                  <li>You agree not to use the service for spam, harassment, or inappropriate communications</li>
                  <li>You acknowledge that AI-generated messages may vary in tone and content appropriateness</li>
                </ul>
              </div>
            </section>

            {/* Service Limitations */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">⚠️ 5. Service Limitations</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h3 className="font-bold text-yellow-800 mb-2">Important Limitations:</h3>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• Cards cannot be saved or retrieved later</li>
                    <li>• No delivery confirmations or tracking</li>
                    <li>• Service availability is not guaranteed</li>
                    <li>• AI-generated content may vary</li>
                    <li>• No technical support priorities</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-2">What Users Should Know:</h3>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Service is provided "as-is" with no warranties</li>
                    <li>• No data backup or recovery options</li>
                    <li>• Email delivery depends on recipient's email provider</li>
                    <li>• All processing is temporary and ephemeral</li>
                    <li>• Cards are generated fresh each time</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* AI Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">🤖 6. AI-Generated Content</h2>

              <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-200">
                <h3 className="text-lg font-bold text-indigo-800 mb-3">AI Limitations & Disclaimers</h3>

                <div className="space-y-3">
                  <p className="text-indigo-700">
                    <strong>AI Processing:</strong> Our AI generates personalized messages based on your input. Content quality and appropriateness may vary.
                  </p>

                  <div className="p-4 bg-white rounded-lg border-l-4 border-indigo-500">
                    <strong>User Responsibility:</strong> You are responsible for reviewing all AI-generated content before sending. We recommend always proofreading messages for tone, accuracy, and appropriateness.
                  </div>

                  <p className="text-indigo-700">
                    <strong>No Content Control:</strong> While we strive for positive, appropriate content, AI may occasionally generate unexpected results. You should always verify content before sending.
                  </p>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">🔒 7. Intellectual Property</h2>

              <div className="space-y-4">
                <p className="text-slate-700">
                  <strong>User Content:</strong> You retain all rights to your personal messages and content. We claim no ownership over message text you provide.
                </p>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-2">Template Usage:</h3>
                  <p className="text-purple-700">
                    <strong>How Templates Work:</strong> Our pre-designed templates are used only for displaying your content. We provide them as part of the service, and users do not "own" or permanently receive template files.
                  </p>
                </div>

                <p className="text-slate-700">
                  <strong>Service Copyright:</strong> Greetin service interface, functionality, and branding remain the property of the service providers.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">🚪 8. Termination</h2>

              <p className="text-slate-700 mb-4">
                As a free service with no accounts, there are no traditional "termination" procedures. You can simply stop using Greetin at any time without notice.
              </p>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-600">
                  <strong>Data Cleanup:</strong> Any temporary data processing you have active (such as unsent cards) will disappear when you close your browser or clear your session.
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">⚠️ 9. Disclaimer</h2>

              <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-300">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">Important Notices</h3>

                <div className="space-y-3">
                  <p className="text-yellow-700">
                    <strong>Free Service Limitation:</strong> Greetin is provided free of charge and therefore comes with no warranty, guarantee, or support commitments.
                  </p>

                  <p className="text-yellow-700">
                    <strong>Data Loss Warning:</strong> All cards are temporary. There is no backup, recovery, or preservation of any greeting card content after sending.
                  </p>

                  <p className="text-yellow-700">
                    <strong>Email Delivery:</strong> While we strive to deliver emails successfully, email delivery depends on recipient email providers and cannot be guaranteed.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">📞 10. Contact & Support</h2>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-slate-700 mb-4">
                  For questions about these terms or our privacy-first approach, please contact us.
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Contact Us
                  </a>
                  <span className="text-slate-500">Response within 24 hours</span>
                </div>
              </div>
            </section>
          </div>

          {/* Terms Guarantee */}
          <div className="mt-12 p-8 bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl text-white">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Privacy-First Terms</h3>
              <p className="text-lg opacity-90 mb-4">
                These terms are designed around our complete commitment to privacy - we simply don't save your data.
              </p>
              <p className="text-sm opacity-75">
                Greetin • Zero Data Retention • 100% Free Forever • No Accounts Required
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-blue-200">
            <p className="text-slate-500 text-sm">Last updated: December 11, 2025</p>
            <p className="text-slate-500 text-sm mt-2">Greetin - Free Privacy-First Greeting Card Service</p>
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

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-indigo-950 to-blue-950 geist-font">
      {/* Top Navbar */}
      <nav className="w-full backdrop-blur-md border-b border-white/10 sticky top-0 z-50" style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '1px solid rgba(255, 255, 255, 0.18)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden relative">
                <Image 
                  src="/logo.png" 
                  alt="TestTwin Logo" 
                  fill
                  className="object-fill"
                />
              </div>
              <span className="text-xl font-medium text-transparent" style={{fontWeight: '500', backgroundImage: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text'}}>
                TestTwin
              </span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#footer" className="text-gray-300 hover:text-white transition-colors">
                  Contact
              </Link>
              <Link href="/survey" style={{background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)', fontWeight: '500', color: '#000000'}} className="text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Get Matched
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Privacy{' '}
            <span className="text-transparent" style={{backgroundImage: 'linear-gradient(135deg,rgb(166, 130, 201) 0%, #a89fe7 50%,rgb(96, 107, 195) 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text'}}>
              Policy
            </span>
          </h1>
          <p className="text-gray-400" style={{fontWeight: '400'}}>
            Last Updated: May 27th, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8" style={{border: '2px solid #c8a8e9'}}>
          <div className="prose prose-invert max-w-none">
            
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                At TestTwin, we understand the highly sensitive nature of the information we gather from you. 
                This Privacy Policy explains how we collect, use, and protect your personal information when 
                you use our website and matching service.
              </p>
            </div>

            {/* Information Collection */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                Information Collection and Usage
              </h2>
              
              <h3 className="text-xl mb-3" style={{color: '#c8a8e9', fontWeight: '500'}}>
                What Information Do We Collect?
              </h3>
              
              <h4 className="text-lg mb-2" style={{color: '#c8a8e9', fontWeight: '500'}}>
                Information You Choose to Provide
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4" style={{fontWeight: '400'}}>
                We collect personal information about you when you use the TestTwin website and matching survey, including:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4" style={{fontWeight: '400'}}>
                <li><strong>Contact Information:</strong> First name, last name, and email address to facilitate communication and connect you with your match</li>
                <li><strong>Demographic Information:</strong> Age group (we will never ask for your specific age)</li>
                <li><strong>Test Information:</strong> Which test you're taking (MCAT or LSAT), test date, study resources, target score, attempt number, and diagnostic score</li>
                <li><strong>Matching Information:</strong> Preferred contact method, availability, study style, and qualities you value in a partner</li>
                <li><strong>Referrals:</strong> Names and email addresses of friends you refer to TestTwin</li>
                <li><strong>Follow-Up Data:</strong> Voluntary feedback about your TestTwin experience collected 3 months after matching</li>
              </ul>

              <h4 className="text-lg mb-2" style={{color: '#c8a8e9', fontWeight: '500'}}>
                Information Collected Automatically
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4" style={{fontWeight: '400'}}>
                When you use our website, we automatically collect:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4" style={{fontWeight: '400'}}>
                <li><strong>Device Information:</strong> Type of device, web browser, operating system, and IP address</li>
                <li><strong>Usage Information:</strong> How long and in what manner you use the TestTwin website</li>
              </ul>
            </div>

            {/* How We Collect Information */}
            <div className="mb-8">
              <h3 className="text-xl mb-3" style={{color: '#c8a8e9', fontWeight: '500'}}>
                How We Collect Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4" style={{fontWeight: '400'}}>
                All information is collected via testtwin.com and related platforms. We do not collect personal 
                information through our social media sites. Only completed applications are considered for matching, 
                and partial responses are not stored.
              </p>
            </div>

            {/* How We Use Information */}
            <div className="mb-8">
              <h3 className="text-xl mb-3" style={{color: '#c8a8e9', fontWeight: '500'}}>
                How We Use the Information Collected
              </h3>
              <ul className="text-gray-300 space-y-3 mb-4" style={{fontWeight: '400'}}>
                <li><strong>Matching:</strong> Information you provide is used to find your ideal study partner from our pool of applicants</li>
                <li><strong>Communication:</strong> We contact you via email for administrative purposes (authentication, announcements, security alerts) and follow-up surveys</li>
                <li><strong>Analysis:</strong> We analyze trends and usage patterns to improve TestTwin and prevent fraud</li>
                <li><strong>Research:</strong> Anonymized data may be used for research purposes to help expand and improve our service</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                How We Protect Your Data
              </h2>
              
              <h3 className="text-xl mb-3" style={{color: '#c8a8e9', fontWeight: '500'}}>
                Privacy Protection Steps
              </h3>
              <ul className="text-gray-300 space-y-3 mb-4" style={{fontWeight: '400'}}>
                <li>Your contact information will never be shared with or sold to any third party outside of TestTwin, except for sharing with your study partner</li>
                <li>After each matching period, collected data is anonymized within a maximum of 12 months</li>
                <li>All partial, unsubmitted responses are deleted and not stored</li>
                <li>Raw data is kept within the TestTwin team with strict internal safeguard procedures</li>
                <li>All team members are bound to strict confidentiality agreements</li>
              </ul>

              <h3 className="text-xl mb-3" style={{color: '#c8a8e9', fontWeight: '500'}}>
                Data Security
              </h3>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                Your Rights to Protect Your Data
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4" style={{fontWeight: '400'}}>
                You have the following rights regarding your personal data:
              </p>
              <ul className="text-gray-300 space-y-3 mb-4" style={{fontWeight: '400'}}>
                <li><strong>Data Access:</strong> Upon survey submission, you'll receive a copy of your answers via email</li>
                <li><strong>Data Correction:</strong> If your situation changes, re-submit the survey using the same email address</li>
                <li><strong>Withdraw Application:</strong> Email support@testtwin.com with "Withdraw Match Request" as the subject line</li>
                <li><strong>Data Deletion:</strong> Email support@testtwin.com with "Delete Data" as the subject line to permanently remove your information</li>
              </ul>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                Please note that information shared directly with your study partner is not accessible from TestTwin. 
                Be responsible with what you share with your study partner.
              </p>
            </div>

            {/* Third-Party Sites */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                Third-Party Sites
              </h2>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                TestTwin may contain links to other websites and services. We do not exercise control over 
                third-party websites or services, and we are not responsible for their privacy practices. 
                We encourage you to read the privacy policies of other websites and services you visit.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                We may update this Privacy Policy from time to time. If there are any substantive changes, 
                we will notify you by email or as otherwise required by applicable law. When we post changes, 
                we will revise the "last updated" date at the top of this policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                Although we are a student-run non-profit project, we take your privacy very seriously. 
                If you have any feedback or questions about our privacy policy, or concerns with our service, 
                please reach out to us at support@testtwin.com.
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100())'}}>
                  <div className="w-10 h-10 rounded-lg overflow-hidden relative">
                    <Image 
                      src="/logo.png" 
                      alt="TestTwin Logo" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className="text-xl font-medium" style={{fontWeight: '500'}}>TestTwin</span>
              </div>
              <p className="text-gray-400 text-sm" style={{fontWeight: '400'}}>
                Connecting study partners for academic success.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4" style={{fontWeight: '500'}}>Contact</h4>
              <div className="space-y-2 text-sm text-gray-400" style={{fontWeight: '400'}}>
                <p>support@testtwin.com</p>
                <p>partnership@testtwin.com</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="mb-4" style={{fontWeight: '500'}}>Follow Us</h4>
              <div className="space-y-2 text-sm text-gray-400" style={{fontWeight: '400'}}>
                <p>Reddit: testtwin</p>
                <p>Instagram: testtwin</p>
                <p>TikTok: testtwin</p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4" style={{fontWeight: '500'}}>Legal</h4>
              <div className="space-y-2 text-sm text-gray-400" style={{fontWeight: '400'}}>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <br />
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400" style={{fontWeight: '400'}}>
            <p>&copy; 2026 TestTwin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPage;
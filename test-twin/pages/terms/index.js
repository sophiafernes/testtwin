import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 geist-font">
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
            Terms of{' '}
            <span className="text-transparent" style={{backgroundImage: 'linear-gradient(135deg,rgb(166, 130, 201) 0%, #a89fe7 50%,rgb(96, 107, 195) 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text'}}>
              Service
            </span>
          </h1>
          <p className="text-gray-400" style={{fontWeight: '400'}}>
            Last Updated: May 27th, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8" style={{border: '2px solid #c8a8e9'}}>
          <div className="prose prose-invert max-w-none">
            
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                Welcome to TestTwin
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4" style={{fontWeight: '400'}}>
                These Terms of Service ("Terms") govern your access to and use of TestTwin's website, 
                services, and applications (collectively, the "Service") operated by TestTwin ("we," "us," or "our").
              </p>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                with any part of these terms, then you may not access the Service.
              </p>
            </div>

            {/* Core Principles */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                TestTwin's Core Principles
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4" style={{fontWeight: '400'}}>
                When it comes to data shared within the TestTwin matching survey, we understand the highly 
                sensitive nature of the information we gather from you. We want to make a few important 
                things clear upfront about our data principles:
              </p>
              
              <h3 className="text-xl mb-3" style={{color: '#c8a8e9', fontWeight: '500'}}>
                Your Data is Protected
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4" style={{fontWeight: '400'}}>
                Any data you opt to share with us will never be sold. Your contact information will only 
                be used for purposes related to TestTwin. We will not sell your information to any 
                advertisers or 3rd parties. We are strictly non-profit, and all work on the TestTwin 
                team is done by volunteers.
              </p>

              <h3 className="text-xl mb-3" style={{color: '#c8a8e9', fontWeight: '500'}}>
                Voluntary Participation, Always Free
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4" style={{fontWeight: '400'}}>
                Your participation is only considered when you complete and submit our official application. 
                You may withdraw from TestTwin at any point by emailing us at support@testtwin.com. We will 
                never ask you for any payment information. TestTwin is a free service.
              </p>

              <h3 className="text-xl mb-3" style={{color: '#c8a8e9', fontWeight: '500'}}>
                We Believe in Transparency
              </h3>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                We believe in being transparent and accountable. You should know who has access to your data. 
                Please reach out to us at support@testtwin.com and we will be happy to answer any questions. 
                All persons involved in any aspect of running TestTwin are bound to strict confidentiality.
              </p>
            </div>

            {/* Acceptable Use */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                Acceptable Use
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4" style={{fontWeight: '400'}}>
                You agree to use TestTwin only for lawful purposes and in accordance with these Terms. 
                You agree not to use the Service:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4" style={{fontWeight: '400'}}>
                <li>• In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>• To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
                <li>• To impersonate or attempt to impersonate TestTwin, a TestTwin employee, another user, or any other person or entity</li>
                <li>• To engage in any other conduct that we determine is inappropriate or harmful</li>
              </ul>
            </div>

            {/* User Accounts */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                User Accounts and Responsibilities
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4" style={{fontWeight: '400'}}>
                When you create an account with us, you must provide information that is accurate, complete, 
                and current at all times. You are responsible for safeguarding any information you share 
                with your study partner and for all activities that occur under your account.
              </p>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                You must notify us immediately upon becoming aware of any breach of security or unauthorized 
                use of your account.
              </p>
            </div>

            {/* Matching Service */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                Matching Service
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4" style={{fontWeight: '400'}}>
                TestTwin provides a matching service to connect students preparing for standardized tests. 
                We aim to match 90% of respondents, but we cannot guarantee that every user will receive a match. 
                In cases where we cannot match you due to insufficient responses, we will notify you via email.
              </p>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                Once matched, communication between study partners occurs outside of our platform. We are not 
                responsible for the content or nature of communications between matched users.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                TestTwin and its founders, employees, and volunteers shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including without limitation, loss 
                of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                Termination
              </h2>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                We may terminate or suspend your account immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms. Upon 
                termination, your right to use the Service will cease immediately.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                Changes to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new 
                terms taking effect.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-white" style={{fontWeight: '500'}}>
                Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                If you have any questions about these Terms of Service, please contact us at support@testtwin.com.
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
            <a 
                href="https://joshshergill.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-transparent hover:bg-clip-text"
                style={{
                  '--hover-gradient': 'linear-gradient(135deg, rgb(112, 26, 117), rgb(51, 80, 178))'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundImage = 'var(--hover-gradient)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundImage = '';
                }}
              >
                website design by josh shergill
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsPage;
import React from 'react';
import Link from 'next/link';
import Plasma from '../components/Plasma';
import Image from 'next/image';

const TestTwinHomepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-indigo-950 to-blue-950 geist-font">
      {/* Fixed Plasma Background for entire page */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <Plasma
          color="#c8a8e9"
          speed={0.5}
          direction="reverse"
          scale={2.5}
          opacity={0.4}
          mouseInteractive={true}
        />
      </div>

      {/* All content with relative positioning to appear above plasma */}
      <div className="relative z-10">
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

        {/* Hero Section */}
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl mt-20 font-semibold text-white md:text-7xl mb-8">
                Find Your{' '}
                <span className="text-transparent" style={{backgroundImage: 'linear-gradient(135deg,rgb(166, 130, 201) 0%, #a89fe7 50%,rgb(96, 107, 195) 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text'}}>
                  Study Twin
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mt-8 text-gray-300 mb-8 leading-relaxed" style={{fontWeight: '400'}}>
                Are you struggling to stay on track with your LSAT or MCAT study plan? Has procrastination taken over your prep journey?
              </p>

              <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link href="/survey" style={{color: '#000000', background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)', fontWeight: '500'}} className="text-white px-8 py-4 rounded-full text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Find a Study Partner
                </Link>
                <p className="text-gray-200" style={{fontWeight: '400'}}>Simply fill out our 2-minute form & get matched within a week!</p>
              </div>
            </div>

            {/* Features Section */}
            <div className="mt-20 grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300" style={{border: '2px solid #c8a8e9'}}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-4 text-white" style={{fontWeight: '500'}}>Matchmaking Excellence</h3>
                <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                  Our algorithm matches you with study partners who share your goals, target scores, and compatible study schedules. 
                  It's like a dating app - but way more suited to your academic needs!
                </p>
              </div>

              <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300" style={{border: '2px solid #c8a8e9'}}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl mb-4 text-white" style={{fontWeight: '500'}}>Affordable Solution</h3>
                <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                  We believe effective study resources shouldn't break the bank. TestTwin offers an affordable alternative 
                  to expensive prep courses, promoting accountability between study twins.
                </p>
              </div>

              <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300" style={{border: '2px solid #c8a8e9'}}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-4 text-white" style={{fontWeight: '500'}}>250+ Students Matched</h3>
                <p className="text-gray-200 leading-relaxed" style={{fontWeight: '400'}}>
                  We understand the costs of applying to professional school. TestTwin levels the playing field so every 
                  prospective student has the opportunity to excel with peer accountability.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center rounded-3xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl mb-4" style={{fontWeight: '500'}}>
                Transform Your Study Habits Today
              </h2>
              <p className="text-xl mb-8 opacity-90" style={{fontWeight: '400'}}>
                This is your chance to boost productivity and stride confidently towards your target score.
              </p>
              <p className="text-lg mb-8 opacity-80" style={{fontWeight: '400'}}>
                Join our community of dedicated test twins today—because together, we're a dynamic duo!
              </p>
              <Link href="/survey" className="inline-block bg-white px-8 py-4 rounded-full text-lg hover:shadow-xl transform hover:scale-105 text-white transition-all duration-200" style={{color: '#000000', fontWeight: '500', background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)'}}>
                Get Matched Now!
              </Link>
            </div>

            {/* Coming Soon Section */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl mb-8 text-white" style={{fontWeight: '500'}}>Coming Soon</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-800/60 backdrop-blur-sm p-4 rounded-xl" style={{border: '2px solid #c8a8e9'}}>
                  <span style={{color: '#c8a8e9', fontWeight: '500'}}>MCAT PrepPartner</span>
                </div>
                <div className="bg-gray-800/60 backdrop-blur-sm p-4 rounded-xl" style={{border: '2px solid #c8a8e9'}}>
                  <span style={{color: '#c8a8e9', fontWeight: '500'}}>Community Support Hub</span>
                </div>
                <div className="bg-gray-800/60 backdrop-blur-sm p-4 rounded-xl" style={{border: '2px solid #c8a8e9'}}>
                  <span style={{color: '#c8a8e9', fontWeight: '500'}}>GRE PrepPartner</span>
                </div>
                <div className="bg-gray-800/60 backdrop-blur-sm p-4 rounded-xl" style={{border: '2px solid #c8a8e9'}}>
                  <span style={{color: '#c8a8e9', fontWeight: '500'}}>Custom Study Plans</span>
                </div>
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
    </div>
  );
};

export default TestTwinHomepage;
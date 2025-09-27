import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
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
              <Link href="/about" className="text-white border-b-2" style={{borderColor: '#c8a8e9'}}>
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold text-white md:text-6xl mb-8">
            About{' '}
            <span className="text-transparent" style={{backgroundImage: 'linear-gradient(135deg,rgb(166, 130, 201) 0%, #a89fe7 50%,rgb(96, 107, 195) 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text'}}>
              TestTwin
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto" style={{fontWeight: '300'}}>
            We're a team of dedicated students who understand the challenges of test preparation and the power of peer accountability.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-gray-800/60 backdrop-blur-sm p-12 rounded-3xl" style={{border: '2px solid #c8a8e9'}}>
            <h2 className="text-3xl md:text-4xl mb-6 text-white text-center" style={{fontWeight: '500'}}>
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto" style={{fontWeight: '400'}}>
              TestTwin was born from our own experiences struggling with test preparation isolation and procrastination. 
              We believe that every student deserves access to the motivation and accountability that comes from having 
              a dedicated study partner. Our platform connects like-minded test-takers, creating partnerships that 
              transform individual struggles into shared success stories.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-white text-center" style={{fontWeight: '500'}}>
            Meet the Team
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl text-center" style={{border: '2px solid #c8a8e9'}}>
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden relative">
                <Image 
                  src="/lyla.png" 
                  alt="Lyla Malik" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl mb-3 text-white" style={{fontWeight: '500'}}>
                Lyla Malik
              </h3>
              <p className="text-lg mb-4" style={{color: '#c8a8e9', fontWeight: '500'}}>
                Co-Founder
              </p>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                Lyla is a pre-med student who experienced firsthand the challenges of MCAT preparation. 
                After struggling with motivation and accountability during her own test prep journey, 
                she co-founded TestTwin to help other students find the support system she wished she had. 
                When she's not working on TestTwin, you can find her volunteering at local hospitals 
                and researching innovative approaches to medical education.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl text-center" style={{border: '2px solid #c8a8e9'}}>
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden relative">
                <Image 
                  src="/sophia.png" 
                  alt="Sophia Fernandes" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl mb-3 text-white" style={{fontWeight: '500'}}>
                Sophia Fernandes
              </h3>
              <p className="text-lg mb-4" style={{color: '#c8a8e9', fontWeight: '500'}}>
                Co-Founder
              </p>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                Sophia is a pre-law student preparing for the LSAT. She focuses on building a supportive community 
                for students pursuing professional schools.  Her own journey navigating the challenges of LSAT preparation 
                inspired her to co-found TestTwin, where she advocates for accessible and collaborative study environments. 
                Outside of her studies, she enjoys debating current issues, volunteering in mentorship 
                programs, and exploring pathways to law school.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-white text-center" style={{fontWeight: '500'}}>
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl" style={{border: '2px solid #c8a8e9'}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-4 text-white" style={{fontWeight: '500'}}>Accessibility</h3>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                We believe quality test preparation support should be available to everyone, 
                regardless of financial background.
              </p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl" style={{border: '2px solid #c8a8e9'}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl mb-4 text-white" style={{fontWeight: '500'}}>Trust & Safety</h3>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                Your privacy and safety are our top priorities. We maintain strict data protection 
                and create a secure environment for meaningful connections.
              </p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl" style={{border: '2px solid #c8a8e9'}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl mb-4 text-white" style={{fontWeight: '500'}}>Excellence</h3>
              <p className="text-gray-300 leading-relaxed" style={{fontWeight: '400'}}>
                We're committed to continuous improvement, using data and feedback to create 
                the best possible matching experience.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-800/60 backdrop-blur-sm rounded-3xl p-12" style={{border: '2px solid #c8a8e9'}}>
          <h2 className="text-3xl md:text-4xl mb-4 text-white" style={{fontWeight: '500'}}>
            Ready to Find Your Study Twin?
          </h2>
          <p className="text-xl mb-8 text-gray-300" style={{fontWeight: '400'}}>
            Join thousands of students who have transformed their test prep with peer accountability.
          </p>
          <Link href="/survey" className="inline-block px-8 py-4 rounded-full text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" style={{color: '#000000', fontWeight: '500', background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)'}}>
            Get Matched Today
          </Link>
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
            <p>&copy; 2026 TestTwin. All rights reserved. </p>
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

export default AboutPage;
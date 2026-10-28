import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandShowcase } from './components/BrandShowcase';
import { FeaturedContent } from './components/FeaturedContent';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export const App: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07060B] text-[#F5F3FA] selection:bg-purple-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenPrivacy={() => setPrivacyOpen(true)} />

      {/* Main Page Sections */}
      <main id="main-content">
        <HeroSection />
        <BrandShowcase />
        <FeaturedContent />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />

      {/* Privacy Policy Modal */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
};

export default App;

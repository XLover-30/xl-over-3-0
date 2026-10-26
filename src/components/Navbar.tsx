import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenPrivacy: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPrivacy }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'brands', 'featured', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Brands', href: '#brands' },
    { label: 'Featured', href: '#featured' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07060B]/80 backdrop-blur-md border-b border-[#A855F7]/15 py-4 shadow-lg shadow-purple-950/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center space-x-2 text-xl font-bold tracking-wider text-white"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#A855F7] to-[#D8B4FE] flex items-center justify-center p-0.5 shadow-md shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#07060B] rounded-[6px] flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white font-black text-sm">XL</span>
            </div>
          </div>
          <span className="font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 group-hover:to-purple-400 transition-colors">
            XL <span className="text-[#A855F7] text-sm font-light">over 3.0</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 bg-[#100A1B]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-500/20">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-[#A855F7]/20 border border-[#A855F7]/40 shadow-sm shadow-purple-500/30'
                    : 'text-[#B8B0C8] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA in Navbar */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded-full bg-gradient-to-r from-[#A855F7] to-purple-600 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-200 border border-purple-400/30 flex items-center space-x-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-200" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 text-[#B8B0C8] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#A855F7] rounded-lg bg-white/5"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07060B]/95 backdrop-blur-xl border-b border-purple-500/20 px-6 py-6 space-y-3 transition-all animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-3 px-4 rounded-xl text-base font-medium text-[#F5F3FA] hover:bg-[#A855F7]/10 hover:text-[#D8B4FE] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrivacy();
              }}
              className="text-xs text-[#B8B0C8] hover:text-white underline"
            >
              Privacy Policy
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full bg-[#A855F7] text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'menu', 'about', 'gallery', 'location', 'contact'];
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    // { label: 'Menu', href: '#menu', id: 'menu' },
    // { label: 'About', href: '#about', id: 'about' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Location', href: '#location', id: 'location' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#121319] text-[#A69E90] text-xs py-1.5 px-4 border-b border-[#22242E] hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
              {RESTAURANT_INFO.neighborhood}, Biratnagar-4, Nepal
            </span>
            <span aria-hidden="true" className="text-[#3A3D4A]">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
              Dinner Hearth Seating 7:00 AM – 10:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${RESTAURANT_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-[#EDE8DF] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
              {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Strict 3-zone contract) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0C0D10]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#262833]'
            : 'bg-[#0C0D10]/70 backdrop-blur-sm py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-3 text-left focus:outline-none"
            >
              <div className="w-9 h-9 rounded-full border border-[#C59B27]/40 flex items-center justify-center bg-[#15171E] group-hover:border-[#C59B27] transition-colors">
                <span className="text-[#C59B27] font-serif text-lg font-bold leading-none">The’</span>
              </div>
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-[#FAF7F2] group-hover:text-[#E5B842] transition-colors">
                ’Kush Garden
              </span>
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative py-1 transition-colors ${
                      isActive ? 'text-[#C59B27]' : 'text-[#BFB8AA] hover:text-[#FAF7F2]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C59B27]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              {/* <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenReservation}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0C0D10] bg-gradient-to-r from-[#D4AF37] via-[#E5B842] to-[#C59B27] rounded-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book a Table
              </motion.button> */}

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#EDE8DF] hover:text-[#C59B27] focus:outline-none rounded-md"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Animated Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden fixed top-[60px] left-0 right-0 z-30 bg-[#0F1015]/98 backdrop-blur-xl border-b border-[#262833] shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-base font-serif tracking-wide py-2 border-b border-[#1E202A] transition-colors ${
                      activeSection === link.id ? 'text-[#C59B27] pl-2 font-semibold' : 'text-[#EDE8DF] hover:text-[#C59B27]'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-[#0C0D10] bg-gradient-to-r from-[#D4AF37] to-[#C59B27] rounded-sm shadow-md"
                >
                  Book a Table Now
                </button>
              </div>

              <div className="pt-3 text-xs text-[#8E8779] space-y-1">
                <p>Thamel, Kathmandu, Nepal</p>
                <p>{RESTAURANT_INFO.phone}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

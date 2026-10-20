import React from 'react';
import { ArrowUp, Instagram, Facebook, Globe, MapPin, Phone, Mail } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0A0B0E] text-[#B8B1A4] border-t border-[#1C1E26] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1C1F28]">
          {/* Brand & Narrative */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#C59B27]/40 flex items-center justify-center bg-[#15171E]">
                <span className="text-[#C59B27] font-serif font-bold">The’</span>
              </div>
              <span className="font-serif text-2xl font-medium tracking-wide text-[#FAF7F2]">
                ’Kush Garden
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#979083] font-light leading-relaxed max-w-sm">
          Experience delicious food, refreshing vibes, and a relaxing atmosphere at The Kush Garden. The perfect place to enjoy great flavors,
           connect with friends, and create unforgettable memories.
            </p>
            <div className="text-xs text-[#C59B27] font-medium tracking-wider">
              {RESTAURANT_INFO.coordinates.formatted}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#FAF7F2] font-semibold">
              Exploration
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#C59B27] transition-colors">Home Sanctuary</a>
              </li>
              {/* <li>
                <a href="#menu" className="hover:text-[#C59B27] transition-colors">Seasonal Hearth Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C59B27] transition-colors">The Chef & Story</a>
              </li> */}
              <li>
                <a href="#gallery" className="hover:text-[#C59B27] transition-colors">Atmosphere Gallery</a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#C59B27] transition-colors">Reserve a Table</a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#FAF7F2] font-semibold">
              Service Times
            </div>
            <div className="text-xs text-[#9E978A] space-y-1.5 font-light">
              <p><strong className="text-[#DDD7CC] font-medium">Mon – Fri:</strong> 07:00 AM – 09:30 PM</p>
              <p><strong className="text-[#DDD7CC] font-medium">Sat – Sun:</strong> 07:00 AM – 10:00 PM</p>
              <p className="text-[11px] text-[#787265] pt-1">Hearth Bar remains open until midnight on weekends.</p>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#FAF7F2] font-semibold">
              Hospitality Desk
            </div>
            <div className="text-xs text-[#9E978A] space-y-2 font-light">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                <span>{RESTAURANT_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#FAF7F2] transition-colors tabular-nums">
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-[#FAF7F2] transition-colors truncate">
                  {RESTAURANT_INFO.email}
                </a>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#14161E] hover:bg-[#1E212D] text-[#9A9385] hover:text-[#C59B27] rounded transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#14161E] hover:bg-[#1E212D] text-[#9A9385] hover:text-[#C59B27] rounded transition-colors"
                aria-label="Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@the.kush.garden"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#14161E] hover:bg-[#1E212D] text-[#9A9385] hover:text-[#C59B27] rounded transition-colors"
                aria-label="TikTok page"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#736D61] gap-4">
          <div>
            © {new Date().getFullYear()} The'Kush Garden. All rights reserved. 
            <a href="https://sajilonumber.com/ashish-sangroula/" target="_blank" rel="noreferrer"
             className="hover:text-[#C59B27] transition-colors">Ashish Sangroula</a>
          </div>
          <div className="flex items-center gap-4">
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#A8A193] transition-colors">Privacy Policy</span>
            <span className="hover:text-[#A8A193] transition-colors">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#14161E] hover:bg-[#1F222F] text-[#EDE8DF] hover:text-[#C59B27] border border-[#232635] rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

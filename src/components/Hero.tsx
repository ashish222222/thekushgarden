import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UtensilsCrossed, Calendar, Sparkles, MapPin, Award, Flame } from 'lucide-react';
import { RESTAURANT_INFO, HERO_IMAGE, DISH_TENDERLOIN_IMAGE } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center bg-[#0C0D10] overflow-hidden py-16 lg:py-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#C59B27]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#C59B27]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative subtle hairline borders */}
      <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-[#C59B27]/20 pointer-events-none hidden xl:block" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-[#C59B27]/20 pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative, Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Quiet editorial kicker */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-6 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C59B27] font-medium"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Airport mode, Biratnagar-4</span>
              <span aria-hidden="true" className="text-[#645638]">·</span>
              <span>The Kush Garden</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-[4.25rem] font-serif font-normal text-[#FAF7F2]
               tracking-tight leading-[1.08] mb-6"
              style={{ textWrap: 'balance' }}
            >
              The <br />
              <span className="italic font-light text-[#E5B842]">Kush Garden</span>
            </motion.h1>

            {/* Evocative Narrative Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#C8C2B5] max-w-xl font-light leading-relaxed mb-8"
            >
              An immersive culinary sanctuary celebrating heritage wood-fired cooking, wild mountain botanicals, and bespoke mixology in the heart of historic Kathmandu.
            </motion.p>

            {/* Animated CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              {/* <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(212,175,55,0.4)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenReservation}
                className="px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#0C0D10] bg-gradient-to-r from-[#D4AF37] via-[#E5B842] to-[#C59B27] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                Book a Table
              </motion.button> */}

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreMenu}
                className="px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#FAF7F2] bg-[#161820] border border-[#C59B27]/40 rounded-sm hover:border-[#C59B27] transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#C59B27]" />
                View Seasonal Menu
                <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
              </motion.button>
            </motion.div>

            {/* Trust Badges / Metadata (Zero-pill discipline) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-6 border-t border-[#232635] flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#9B9384] font-medium tracking-wider w-full"
            >
              <span>Est. 2012</span>
              <span aria-hidden="true" className="text-[#4E483D]">·</span>
              <span>Applewood Charcoal Hearth</span>
              <span aria-hidden="true" className="text-[#4E483D]">·</span>
              <span>Wild Foraged Botanicals</span>
              <span aria-hidden="true" className="text-[#4E483D]">·</span>
              <span>4.9★ Acclaim</span>
            </motion.div>
          </div>

          {/* Right Column: Hero Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame accent */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#C59B27]/30 via-transparent to-[#C59B27]/10 blur-sm pointer-events-none" />

              {/* Main Restaurant Interior Hero Image Frame */}
              <div className="relative aspect-[4/5] sm:aspect-[4/5] rounded-xl overflow-hidden border border-[#2D3040] bg-[#14161E] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                <img
                  src={HERO_IMAGE}
                  alt="L’Ambre restaurant interior with candlelit dining tables in Thamel"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10]/90 via-[#0C0D10]/20 to-transparent" />
                <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" />

                {/* Bottom Image Caption & Live Status */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#E5B842] font-medium mb-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>The Hearth Sanctuary</span>
                    <span aria-hidden="true" className="text-[#645638]">·</span>
                    <span className="text-[#FAF7F2]">Open Tonight</span>
                  </div>
                  <p className="text-sm font-serif italic text-[#FAF7F2] leading-snug">
                    "Intimate dark timber tables bathed in soft amber candlelight and warm acoustic textures."
                  </p>
                </div>
              </div>

              {/* Floating Signature Dish Inset Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#151720]/95 backdrop-blur-md border border-[#C59B27]/40 rounded-lg p-3 sm:p-3.5 shadow-2xl flex items-center gap-3.5 max-w-[280px]"
              >
                <div className="w-14 h-14 rounded-md overflow-hidden shrink-0 border border-[#2B2E3E]">
                  <img
                    src={DISH_TENDERLOIN_IMAGE}
                    alt="Signature Himalayan Spiced Tenderloin"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-[10px] uppercase tracking-wider text-[#C59B27] font-semibold flex items-center gap-1">
                    <Award className="w-3 h-3" /> Signature Dish
                  </div>
                  <div className="text-xs font-serif text-[#FAF7F2] font-medium truncate mt-0.5">
                    Himalayan Tenderloin
                  </div>
                  <div className="text-[11px] text-[#A69F91] mt-0.5 tabular-nums">
                    Wood-Fired · $34
                  </div>
                </div>
              </motion.div>

              {/* Floating Top Rating Card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-[#151720]/95 backdrop-blur-md border border-[#2D3040] rounded-lg py-2 px-3.5 shadow-2xl flex items-center gap-2 text-xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[#FAF7F2] font-semibold">Michelin Acclaimed</span>
                <span className="text-[#C59B27] font-serif">4.9★</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


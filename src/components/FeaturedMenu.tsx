import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Leaf, Eye, Wine } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem, MenuCategory } from '../types/restaurant';

interface FeaturedMenuProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenReservation: () => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ onSelectDish, onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  const categories: { key: MenuCategory; label: string }[] = [
    { key: 'all', label: 'All Dishes' },
    { key: 'starters', label: 'Starters' },
    { key: 'main', label: 'Main Course' },
    { key: 'desserts', label: 'Desserts' },
    { key: 'drinks', label: 'Craft Cocktails' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#0C0D10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-medium mb-3">
            Culinary Offerings
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FAF7F2] font-normal tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Seasonal Hearth Menu
          </h2>
          <p className="text-sm sm:text-base text-[#AEA799] font-light">
            Each creation is an exploration of wild Himalayan botanicals and charcoal roasting. Updated weekly based on mountain harvest cycles.
          </p>
        </div>

        {/* Category Filters (Interactive buttons per rule) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition-all rounded-sm cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#C59B27] text-[#0C0D10] shadow-[0_0_15px_rgba(212,175,55,0.25)] font-semibold'
                    : 'bg-[#14161E] text-[#B8B1A2] hover:text-[#FAF7F2] border border-[#232634] hover:border-[#383C4F]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Food Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                onClick={() => onSelectDish(item)}
                className="group bg-[#14161E] border border-[#232634] rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#C59B27]/50 transition-all cursor-pointer shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Food Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0B0E]">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161E] via-transparent to-black/30" />

                  {/* Top indicators */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-medium">
                    <span className="bg-[#0C0D10]/80 backdrop-blur-sm text-[#E5B842] px-2.5 py-1 rounded-sm border border-[#C59B27]/30 uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    {item.isSignature && (
                      <span className="bg-[#C59B27] text-[#0C0D10] font-semibold px-2 py-0.5 rounded-sm flex items-center gap-1 shadow">
                        <Sparkles className="w-3 h-3" /> Signature
                      </span>
                    )}
                  </div>

                  {/* Hover Quick Inspect overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-[#0C0D10]/90 text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-sm border border-[#C59B27]/40 flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-[#C59B27]" /> View Details & Pairing
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Row: Title & Price */}
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="text-xl font-serif text-[#FAF7F2] font-normal group-hover:text-[#E5B842] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <div className="text-base font-serif text-[#E5B842] tabular-nums font-semibold shrink-0">
                        ${item.price}
                      </div>
                    </div>

                    {item.nepaliSubtitle && (
                      <p className="text-[11px] text-[#8C8577] mb-2 font-light">
                        {item.nepaliSubtitle}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#AFA89A] font-light leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Clean unboxed footer metadata */}
                  <div className="pt-3 border-t border-[#202330] flex items-center justify-between text-xs text-[#878072]">
                    <div className="flex items-center gap-2">
                      {item.isVegetarian && (
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Leaf className="w-3 h-3" /> Veg
                        </span>
                      )}
                      {item.isGlutenFree && (
                        <span>Gluten-Free</span>
                      )}
                      {item.pairing && (
                        <span className="hidden sm:inline text-[#C59B27] flex items-center gap-1">
                          <Wine className="w-3 h-3 inline" /> Wine Paired
                        </span>
                      )}
                    </div>
                    <span className="text-[#C59B27] font-medium text-[11px] uppercase tracking-wider group-hover:underline">
                      Explore →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tasting Menu Notice & Quick Reservation Callout */}
        {/* <div className="mt-16 bg-[#14161E] border border-[#262938] rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs uppercase tracking-widest text-[#C59B27] font-medium">
              Chef’s 7-Course Omakase
            </div>
            <h4 className="text-xl font-serif text-[#FAF7F2]">
              Himalayan Hearth Tasting Journey ($85 per guest)
            </h4>
            <p className="text-xs sm:text-sm text-[#A49D90] font-light max-w-xl">
              A synchronized blind tasting experience paired with rare cellar selections and artisan spirits. Requires 24-hour advance reservation.
            </p>
          </div>
          <button
            onClick={onOpenReservation}
            className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#0C0D10] bg-gradient-to-r from-[#D4AF37] to-[#C59B27] rounded-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            Reserve Tasting Table
          </button>
        </div> */}
      </div>
    </section>
  );
};

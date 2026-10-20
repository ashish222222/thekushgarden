import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'ambiance', label: 'Ambiance' },
    { key: 'dishes', label: 'Signature Dishes' },
    // { key: 'hearth', label: 'Hearth & Craft' },
    { key: 'cocktails', label: 'Cocktails' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => 
        prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
      );
    }
  }, [activeLightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => 
        prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
      );
    }
  }, [activeLightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-24 bg-[#0F1015] relative border-t border-[#1F212B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-medium mb-3">
            Atmosphere Gallery
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FAF7F2] font-normal tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            T’he Kush Garden
          </h2>
          <p className="text-sm sm:text-base text-[#AEA799] font-light">
            A visual journey through our Himalayan-inspired sanctuary, showcasing the essence of our culinary artistry, intimate ambiance, and handcrafted cocktails.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all rounded-sm cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1E202B] text-[#E5B842] border border-[#C59B27]'
                    : 'bg-[#13141C] text-[#9A9385] hover:text-[#FAF7F2] border border-[#20222D]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-[#14151C] border border-[#232634] cursor-pointer shadow-md hover:border-[#C59B27]/60 transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between text-xs text-[#E5B842] uppercase tracking-wider mb-1">
                  <span>{item.categoryLabel}</span>
                  <Maximize2 className="w-4 h-4 text-[#FAF7F2]" />
                </div>
                <h3 className="text-lg font-serif text-[#FAF7F2] font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#C5BEB2] line-clamp-1 mt-1 font-light">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/95 backdrop-blur-md"
            />

            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
              {/* Top controls */}
              <div className="w-full flex items-center justify-between py-4 text-[#D8D2C6]">
                <div className="text-xs uppercase tracking-widest text-[#C59B27] flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  <span>{filteredItems[activeLightboxIndex].categoryLabel}</span>
                  <span aria-hidden="true" className="text-[#554D3F]">·</span>
                  <span className="text-[#A29A8C]">{activeLightboxIndex + 1} of {filteredItems.length}</span>
                </div>
                <button
                  onClick={closeLightbox}
                  className="p-2 text-[#EDE8DF] hover:text-[#C59B27] transition-colors rounded-full bg-[#1A1C25] border border-white/10"
                  aria-label="Close image lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Image Container */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[75vh] flex items-center justify-center bg-black/50 rounded-lg overflow-hidden border border-[#2B2E3C]">
                <motion.img
                  key={activeLightboxIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  src={filteredItems[activeLightboxIndex].image}
                  alt={filteredItems[activeLightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />

                {/* Left/Right Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-[#0C0D10]/80 text-[#FAF7F2] hover:text-[#C59B27] hover:bg-[#151720] border border-white/10 rounded-full transition-all"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-[#0C0D10]/80 text-[#FAF7F2] hover:text-[#C59B27] hover:bg-[#151720] border border-white/10 rounded-full transition-all"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption */}
              <div className="w-full text-center mt-4">
                <h3 className="text-xl font-serif text-[#FAF7F2]">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B4ADA0] max-w-xl mx-auto mt-1 font-light">
                  {filteredItems[activeLightboxIndex].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

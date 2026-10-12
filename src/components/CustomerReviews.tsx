import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';
import { REVIEWS } from '../data/restaurantData';

export const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoplay]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section className="py-24 bg-[#0C0D10] relative overflow-hidden border-t border-[#1C1E28]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C59B27]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-medium mb-3">
            Guest Testimonials
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FAF7F2] font-normal tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Acclaim & Recollections
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#A8A193]">
            <div className="flex text-[#E5B842]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E5B842]" />
              ))}
            </div>
            <span className="font-semibold text-[#FAF7F2] tabular-nums">4.9 / 5.0</span>
            <span aria-hidden="true" className="text-[#4E483B]">·</span>
            <span>Over 1,280 verified international reviews</span>
          </div>
        </div>

        {/* Carousel Card Container */}
        <div className="relative">
          <div className="min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full bg-[#14161F] border border-[#262938] rounded-xl p-8 sm:p-12 shadow-2xl relative"
              >
                {/* Quotation Watermark */}
                <Quote className="absolute top-6 right-8 w-14 h-14 text-[#C59B27]/10 pointer-events-none" />

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#E5B842] mb-6">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E5B842]" />
                  ))}
                </div>

                {/* Review Headline & Body */}
                <h3 className="text-xl sm:text-2xl font-serif text-[#FAF7F2] font-normal mb-4 leading-snug">
                  "{currentReview.title}"
                </h3>
                <p className="text-sm sm:text-base text-[#C2BBAE] font-light leading-relaxed mb-8">
                  {currentReview.comment}
                </p>

                {/* Author Info (Zero-pill discipline) */}
                <div className="flex items-center justify-between pt-6 border-t border-[#232635] flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#20222D] border border-[#C59B27]/40 flex items-center justify-center text-xs font-serif font-bold text-[#E5B842]">
                      {currentReview.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#FAF7F2]">
                        {currentReview.author}
                      </div>
                      <div className="text-xs text-[#8E8779] flex items-center gap-1.5">
                        <span>{currentReview.role}</span>
                        <span aria-hidden="true" className="text-[#4E483B]">·</span>
                        <span>{currentReview.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-[#8E8779]">
                    Dined in {currentReview.date}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoplay(false);
                    setCurrentIndex(idx);
                  }}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#C59B27]' : 'w-2 bg-[#2D3040] hover:bg-[#4A4E63]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-[#151720] border border-[#282B3A] text-[#EDE8DF] hover:text-[#C59B27] hover:border-[#C59B27] transition-all cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-[#151720] border border-[#282B3A] text-[#EDE8DF] hover:text-[#C59B27] hover:border-[#C59B27] transition-all cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

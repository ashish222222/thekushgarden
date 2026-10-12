import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Wine, Flame, Leaf, Check, Calendar } from 'lucide-react';
import { MenuItem } from '../types/restaurant';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onBookTable: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose, onBookTable }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (dish) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#14161E] border border-[#2B2E3C] rounded-lg shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-[#0C0D10]/80 rounded-full text-[#EDE8DF] hover:text-[#C59B27] border border-white/10 hover:border-[#C59B27] transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Dish Image Header */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0C0D10]">
            <img
              src={dish.image}
              alt={dish.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14161E] via-transparent to-black/40" />

            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5B842] font-medium mb-1">
                <span>{dish.categoryLabel}</span>
                {dish.isSignature && (
                  <>
                    <span aria-hidden="true" className="text-[#6C5627]">·</span>
                    <span className="flex items-center gap-1 text-[#E5B842]">
                      <Sparkles className="w-3 h-3" /> Chef’s Signature
                    </span>
                  </>
                )}
                {dish.isVegetarian && (
                  <>
                    <span aria-hidden="true" className="text-[#6C5627]">·</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Leaf className="w-3 h-3" /> Vegetarian
                    </span>
                  </>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF7F2] font-normal leading-tight">
                {dish.name}
              </h3>
              {dish.nepaliSubtitle && (
                <p className="text-xs text-[#A8A193] mt-0.5 font-light">
                  {dish.nepaliSubtitle}
                </p>
              )}
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#232634]">
              <div className="text-xs uppercase tracking-wider text-[#8A8477]">
                Tasting Menu & À La Carte
              </div>
              <div className="text-xl font-serif text-[#E5B842] tabular-nums font-semibold">
                {dish.formattedPrice}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#D0C9BD] leading-relaxed font-light">
              {dish.description}
            </p>

            {/* Key Ingredients */}
            {dish.ingredients && (
              <div>
                <div className="text-xs uppercase tracking-wider text-[#A69E8F] font-medium mb-3">
                  Sourced Ingredients & Elements
                </div>
                <div className="flex flex-wrap gap-2">
                  {dish.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="text-xs text-[#E0D9CE] bg-[#1C1F2B] border border-[#2A2E3E] px-3 py-1 rounded-sm"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Pairing */}
            {dish.pairing && (
              <div className="p-4 bg-[#191B24] border border-[#272B3A] rounded-md flex items-start gap-3">
                <Wine className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="text-[#C59B27] font-medium uppercase tracking-wider mb-0.5">
                    Sommelier’s Recommended Pairing
                  </div>
                  <div className="text-[#D3CCC0] leading-snug">
                    {dish.pairing}
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onBookTable();
                }}
                className="w-full sm:flex-1 py-3 px-6 text-xs uppercase font-semibold tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-[#0C0D10] rounded-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Reserve Table for this Dish
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto py-3 px-6 text-xs uppercase font-semibold tracking-wider bg-[#1A1C25] text-[#D0C9BD] border border-[#2D3040] rounded-sm hover:bg-[#222533] transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

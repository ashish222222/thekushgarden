import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, Sparkles, CheckCircle2, ChevronDown, Utensils, Shield, X, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationData } from '../types/restaurant';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '19:00',
    guests: 2,
    seatingArea: 'Main Hearth Dining',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState<{
    data: ReservationData;
    bookingCode: string;
  } | null>(null);

  const timeSlots = [
    '12:00 PM', '1:00 PM', '2:00 PM', 
    '5:30 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:30 PM', '9:00 PM'
  ];

  const seatingOptions = [
    { id: 'Main Hearth Dining', label: 'Main Hearth Dining', desc: 'Direct view of the open applewood fire pass' },
    { id: 'Courtyard Garden', label: 'Courtyard Garden', desc: 'Intimate heated outdoor terrace under the stars' },
    { id: 'Wine Cellar Alcove', label: 'Wine Cellar Alcove', desc: 'Private vintage enclave for celebrations' },
  ];

  const handleQuickDate = (offsetDays: number) => {
    const target = new Date();
    target.setDate(target.getDate() + offsetDays);
    setFormData((prev) => ({
      ...prev,
      date: target.toISOString().split('T')[0]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const code = `LAMBRE-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedReservation({
        data: { ...formData },
        bookingCode: code
      });

      // Launch celebratory gold confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#E5B842', '#FAF7F2', '#C59B27']
      });
    }, 1100);
  };

  const handleDownloadSummary = () => {
    if (!confirmedReservation) return;
    const details = `L'AMBRE HEARTH & LOUNGE RESERVATION CONFIRMATION
Reference Code: ${confirmedReservation.bookingCode}
Guest: ${confirmedReservation.data.name}
Party: ${confirmedReservation.data.guests} Guests
Date: ${confirmedReservation.data.date} at ${confirmedReservation.data.time}
Seating: ${confirmedReservation.data.seatingArea}
Location: Chaksibari Marg, Thamel, Kathmandu, Nepal
Phone: +977 1-4701892
Notes: ${confirmedReservation.data.specialRequests || 'None'}
Thank you for dining with us.`;

    const blob = new Blob([details], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `LAmbre-Booking-${confirmedReservation.bookingCode}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="reservation" className="py-24 bg-[#0C0D10] relative overflow-hidden border-t border-[#1C1E29]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C59B27]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-medium mb-3">
            Table Reservations
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FAF7F2] font-normal tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Book Your Culinary Experience
          </h2>
          <p className="text-sm sm:text-base text-[#AEA799] font-light max-w-xl mx-auto">
            Reserve your table for an evening of Himalayan fire gastronomy. For private events of 8 or more, our concierge will contact you directly.
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="bg-[#14161F] border border-[#262938] rounded-xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Party & Date Selection */}
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wider text-[#C59B27] font-semibold flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>1. Party Size & Preferred Date</span>
              </div>

              {/* Quick Guest Selector */}
              <div>
                <label className="block text-xs text-[#9B9384] mb-2 font-medium">
                  Number of Guests
                </label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6, 8, '10+'].map((count) => {
                    const numValue = typeof count === 'number' ? count : 10;
                    const isSelected = formData.guests === numValue;
                    return (
                      <button
                        type="button"
                        key={count}
                        onClick={() => setFormData({ ...formData, guests: numValue })}
                        className={`w-12 h-11 rounded-sm text-xs font-semibold tabular-nums transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-[#C59B27] text-[#0C0D10] border-[#C59B27] shadow'
                            : 'bg-[#181A24] text-[#C0B9AC] border-[#292D3D] hover:border-[#41465D]'
                        }`}
                      >
                        {count}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date with quick pills */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end pt-2">
                <div className="sm:col-span-6 space-y-2">
                  <label className="block text-xs text-[#9B9384] font-medium">
                    Date of Dining
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#181A24] border border-[#2B2F40] rounded-sm px-4 py-3 text-sm text-[#FAF7F2] focus:outline-none focus:border-[#C59B27] transition-colors"
                    />
                  </div>
                </div>

                {/* Quick Date Presets */}
                <div className="sm:col-span-6 flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickDate(0)}
                    className="flex-1 py-3 text-xs bg-[#181A24] border border-[#2B2F40] hover:border-[#C59B27] text-[#C0B9AC] rounded-sm transition-colors cursor-pointer"
                  >
                    Tonight
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickDate(1)}
                    className="flex-1 py-3 text-xs bg-[#181A24] border border-[#2B2F40] hover:border-[#C59B27] text-[#C0B9AC] rounded-sm transition-colors cursor-pointer"
                  >
                    Tomorrow
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickDate(2)}
                    className="flex-1 py-3 text-xs bg-[#181A24] border border-[#2B2F40] hover:border-[#C59B27] text-[#C0B9AC] rounded-sm transition-colors cursor-pointer"
                  >
                    In 2 Days
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2: Time & Seating Area */}
            <div className="space-y-4 pt-4 border-t border-[#232635]">
              <div className="text-xs uppercase tracking-wider text-[#C59B27] font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>2. Time Slot & Atmosphere</span>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs text-[#9B9384] mb-2 font-medium">
                  Seating Time
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
                  {timeSlots.map((slot) => {
                    const isSelected = formData.time === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setFormData({ ...formData, time: slot })}
                        className={`py-2 px-1 text-center text-xs font-medium rounded-sm border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#C59B27] text-[#0C0D10] border-[#C59B27] font-semibold shadow'
                            : 'bg-[#181A24] text-[#C0B9AC] border-[#292D3D] hover:border-[#41465D]'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Seating Areas */}
              <div>
                <label className="block text-xs text-[#9B9384] mb-2 font-medium">
                  Dining Ambience Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {seatingOptions.map((opt) => {
                    const isSelected = formData.seatingArea === opt.id;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, seatingArea: opt.id })}
                        className={`p-3.5 text-left rounded-sm border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1D202B] border-[#C59B27] shadow'
                            : 'bg-[#181A24] border-[#292D3D] hover:border-[#3D4359]'
                        }`}
                      >
                        <div className={`text-xs font-semibold mb-0.5 ${isSelected ? 'text-[#FAF7F2]' : 'text-[#C5BFB3]'}`}>
                          {opt.label}
                        </div>
                        <div className="text-[11px] text-[#867F71] leading-tight">
                          {opt.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Contact & Special Requests */}
            <div className="space-y-4 pt-4 border-t border-[#232635]">
              <div className="text-xs uppercase tracking-wider text-[#C59B27] font-semibold flex items-center gap-2">
                <Utensils className="w-4 h-4" />
                <span>3. Guest Contact & Dietary Requests</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-[#9B9384] mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#181A24] border border-[#2B2F40] rounded-sm px-4 py-2.5 text-sm text-[#FAF7F2] placeholder-[#57534A] focus:outline-none focus:border-[#C59B27] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#9B9384] mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#181A24] border border-[#2B2F40] rounded-sm px-4 py-2.5 text-sm text-[#FAF7F2] placeholder-[#57534A] focus:outline-none focus:border-[#C59B27] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#9B9384] mb-1.5 font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+977 980..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181A24] border border-[#2B2F40] rounded-sm px-4 py-2.5 text-sm text-[#FAF7F2] placeholder-[#57534A] focus:outline-none focus:border-[#C59B27] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#9B9384] mb-1.5 font-medium">
                  Special Notes, Dietary Preferences, or Anniversary Celebration
                </label>
                <textarea
                  rows={2}
                  placeholder="Allergies, seating requests, milestone celebrations..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-[#181A24] border border-[#2B2F40] rounded-sm px-4 py-2.5 text-sm text-[#FAF7F2] placeholder-[#57534A] focus:outline-none focus:border-[#C59B27] transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submission CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#0C0D10] bg-gradient-to-r from-[#D4AF37] via-[#E5B842] to-[#C59B27] rounded-sm hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#0C0D10] border-t-transparent rounded-full animate-spin" />
                    Confirming Reservation...
                  </span>
                ) : (
                  <>
                    <CalendarIcon className="w-4 h-4" />
                    Reserve a Table
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#7A7467] mt-3">
                <Shield className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Instant confirmation · No advance deposit required · Free cancellation up to 4h prior</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmedReservation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setConfirmedReservation(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 max-w-lg w-full bg-[#14161F] border border-[#C59B27]/50 rounded-xl p-8 shadow-2xl text-center"
            >
              <button
                onClick={() => setConfirmedReservation(null)}
                className="absolute top-4 right-4 p-2 text-[#9A9385] hover:text-[#FAF7F2] transition-colors"
                aria-label="Close confirmation"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-[#C59B27]/15 border border-[#C59B27] flex items-center justify-center mx-auto mb-4 text-[#C59B27]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="text-xs uppercase tracking-widest text-[#C59B27] font-semibold mb-1">
                Reservation Confirmed
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF7F2] mb-2">
                We Await Your Arrival
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A193] mb-6 font-light">
                A confirmation has been sent to <span className="text-[#FAF7F2] font-medium">{confirmedReservation.data.email}</span>.
              </p>

              {/* Receipt Summary Box */}
              <div className="bg-[#191B24] border border-[#272A3A] rounded-lg p-5 text-left text-xs space-y-3 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-[#232635]">
                  <span className="text-[#878072]">Booking Reference:</span>
                  <span className="font-mono text-sm font-semibold text-[#E5B842] tabular-nums">
                    {confirmedReservation.bookingCode}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#878072]">Guest Name:</span>
                  <span className="text-[#FAF7F2] font-medium">{confirmedReservation.data.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#878072]">Date & Time:</span>
                  <span className="text-[#FAF7F2] font-medium">{confirmedReservation.data.date} at {confirmedReservation.data.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#878072]">Party Size:</span>
                  <span className="text-[#FAF7F2] font-medium">{confirmedReservation.data.guests} Guests</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#878072]">Seating:</span>
                  <span className="text-[#FAF7F2] font-medium">{confirmedReservation.data.seatingArea}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDownloadSummary}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-[#0C0D10] text-xs font-semibold uppercase tracking-wider rounded-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Save Confirmation
                </button>
                <button
                  onClick={() => setConfirmedReservation(null)}
                  className="py-3 px-5 bg-[#1B1D27] text-[#D0C9BD] hover:text-[#FAF7F2] border border-[#2B2E3E] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

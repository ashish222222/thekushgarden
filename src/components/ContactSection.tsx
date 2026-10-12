import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Globe, CheckCircle2, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Dining Inquiry',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: 'General Dining Inquiry', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#0F1015] relative border-t border-[#1F212D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-medium mb-3">
            Inquiries & Private Hire
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FAF7F2] font-normal tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Connect With Our Concierge
          </h2>
          <p className="text-sm sm:text-base text-[#AEA799] font-light">
            Whether inquiring about private dining buyouts, press requests, or dietary accommodations, our hospitality team is at your disposal.
          </p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-12 space-y-6">
            <div className="bg-[#14161E] border border-[#232634] rounded-lg p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-serif text-[#FAF7F2]">
                Direct Contacts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1B1D27] border border-[#C59B27]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#C59B27]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#8A8477]">
                      Location
                    </div>
                    <div className="text-[#EDE8DF] font-medium mt-0.5">
                      {RESTAURANT_INFO.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1B1D27] border border-[#C59B27]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#C59B27]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#8A8477]">
                      Reservations Hotline
                    </div>
                    <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#EDE8DF] font-medium mt-0.5 block hover:text-[#C59B27] transition-colors tabular-nums">
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1B1D27] border border-[#C59B27]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#C59B27]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#8A8477]">
                      Email Concierge
                    </div>
                    <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-[#EDE8DF] font-medium mt-0.5 block hover:text-[#C59B27] transition-colors">
                      {RESTAURANT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-[#232634]">
                <div className="text-xs uppercase tracking-wider text-[#8A8477] mb-3">
                  Follow Our Journey
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/direct/t/18097536562889998/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-[#1A1C25] hover:bg-[#222533] border border-[#2B2E3E] hover:border-[#C59B27] text-[#D8D2C6] hover:text-[#C59B27] rounded-sm transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/kushgardenofficial"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-[#1A1C25] hover:bg-[#222533] border border-[#2B2E3E] hover:border-[#C59B27] text-[#D8D2C6] hover:text-[#C59B27] rounded-sm transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@the.kush.garden"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-[#1A1C25] hover:bg-[#222533] border border-[#2B2E3E] hover:border-[#C59B27] text-[#D8D2C6] hover:text-[#C59B27] rounded-sm transition-all"
                    aria-label="TikTok"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          {/* <div className="lg:col-span-7">
            <div className="bg-[#14161E] border border-[#232634] rounded-lg p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-serif text-[#FAF7F2] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#958E81] mb-6 font-light">
                We respond to all concierge requests within 4 hours during operating times.
              </p>

              {isSent && (
                <div className="mb-6 p-4 bg-emerald-950/60 border border-emerald-800/80 rounded-md text-emerald-200 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Your message has been dispatched to our concierge. We will be in touch shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#9B9384] mb-1 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Ross"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#181A24] border border-[#2B2F40] rounded-sm px-4 py-2.5 text-sm text-[#FAF7F2] placeholder-[#555047] focus:outline-none focus:border-[#C59B27] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#9B9384] mb-1 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="julian@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#181A24] border border-[#2B2F40] rounded-sm px-4 py-2.5 text-sm text-[#FAF7F2] placeholder-[#555047] focus:outline-none focus:border-[#C59B27] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#9B9384] mb-1 font-medium">
                    Topic of Inquiry
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#181A24] border border-[#2B2F40] rounded-sm px-4 py-2.5 text-sm text-[#FAF7F2] focus:outline-none focus:border-[#C59B27] transition-colors"
                  >
                    <option value="General Dining Inquiry">General Dining Inquiry</option>
                    <option value="Private Dining & Buyout (8+ Guests)">Private Dining & Buyout (8+ Guests)</option>
                    <option value="Dietary & Allergen Consultation">Dietary & Allergen Consultation</option>
                    <option value="Press & Media Relations">Press & Media Relations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#9B9384] mb-1 font-medium">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we may curate your experience..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#181A24] border border-[#2B2F40] rounded-sm px-4 py-2.5 text-sm text-[#FAF7F2] placeholder-[#555047] focus:outline-none focus:border-[#C59B27] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-[#0C0D10] text-xs font-semibold uppercase tracking-wider rounded-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSending ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Dispatch Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

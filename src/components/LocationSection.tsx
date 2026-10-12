import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  // ============================================================
  // ACTUAL RESTAURANT LOCATION
  // ============================================================

  const restaurantLatitude = 26.48584929929376;
  const restaurantLongitude = 87.27099097338366;

  // Google Maps Directions
  const googleMapsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=Kush%20garden&destination_place_id=ChIJi9jZQkJ17TkZmcI3MNLANVU';


  // Google Maps Embed
  const googleMapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1054.3245615364842!2d87.27099097338366!3d26.48584929929376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef752463d9f8af%3A0x54c237f310c23799!2sKush%20garden!5e1!3m2!1sen!2snp!4v1790924131004!5m2!1sen!2snp';

  // ============================================================
  // COPY ADDRESS
  // ============================================================

  const copyAddressToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(RESTAURANT_INFO.address);

      setCopiedAddress(true);

      setTimeout(() => {
        setCopiedAddress(false);
      }, 2500);
    } catch (error) {
      console.error('Unable to copy address:', error);
    }
  };

  return (
    <section
      id="location"
      className="py-24 bg-[#0F1015] relative border-t border-[#1F212C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================================================
            HEADER
        ======================================================= */}

        <div className="text-center max-w-2xl mx-auto mb-16">

          <div className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-medium mb-3">
            Find Us
          </div>

          <h2
            className="text-3xl sm:text-5xl font-serif text-[#FAF7F2] font-normal tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Location & Visiting Hours
          </h2>

          <p className="text-sm sm:text-base text-[#AEA799] font-light">
            Conveniently located in a convenient and accessible area.
            We look forward to welcoming you.
          </p>

        </div>

        {/* ======================================================
            MAIN CONTENT
        ======================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ====================================================
              LEFT COLUMN
          ===================================================== */}

          <div className="lg:col-span-5 space-y-6">

            {/* ==================================================
                ADDRESS CARD
            =================================================== */}

            <div className="bg-[#14161E] border border-[#232634] rounded-lg p-6 sm:p-8 space-y-4 shadow-lg">

              <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-[#1F222F] border border-[#C59B27]/40 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#C59B27]" />
                  </div>

                  <div>

                    <h3 className="text-lg font-serif text-[#FAF7F2]">
                      {RESTAURANT_INFO.name}
                    </h3>

                    <div className="text-xs text-[#8F887A]">
                      26.485849° N, 87.270991° E
                    </div>

                  </div>

                </div>

                {/* Copy Address */}

                <button
                  onClick={copyAddressToClipboard}
                  title="Copy address"
                  aria-label="Copy restaurant address"
                  className="p-2 text-[#9A9385] hover:text-[#C59B27] bg-[#1B1D27] rounded border border-white/5 transition-colors cursor-pointer"
                >
                  {copiedAddress ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>

              </div>

              {/* Address */}

              <p className="text-sm text-[#CDC6B9] font-light leading-relaxed">
                {RESTAURANT_INFO.address}
              </p>

              {/* =================================================
                  GET DIRECTIONS
              ================================================== */}

              <div className="pt-3 border-t border-[#232634]">

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-[#0C0D10] text-xs font-semibold uppercase tracking-wider rounded-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >

                  <Navigation className="w-4 h-4" />

                  Get Directions

                </a>

              </div>

            </div>

            {/* ==================================================
                OPENING HOURS
            =================================================== */}

            <div className="bg-[#14161E] border border-[#232634] rounded-lg p-6 sm:p-8 space-y-4 shadow-lg">

              <div className="flex items-center justify-between pb-3 border-b border-[#232634]">

                <div className="flex items-center gap-2 text-sm font-medium text-[#FAF7F2]">

                  <Clock className="w-4 h-4 text-[#C59B27]" />

                  <span>Opening Hours</span>

                </div>

                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">

                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />

                  Open Today

                </span>

              </div>

              <div className="space-y-3 text-xs sm:text-sm">

                <div className="flex items-center justify-between py-1 border-b border-[#1C1F2B]">

                  <span className="text-[#A49D8F]">
                    Monday – Friday
                  </span>

                  <span className="text-[#FAF7F2] font-medium tabular-nums">
                    07:00 AM – 10:00 PM
                  </span>

                </div>

                <div className="flex items-center justify-between py-1 border-b border-[#1C1F2B]">

                  <span className="text-[#A49D8F]">
                    Saturday – Sunday
                  </span>

                  <span className="text-[#FAF7F2] font-medium tabular-nums">
                    07:00 AM – 11:00 PM
                  </span>

                </div>

                {/* <div className="text-[11px] text-[#867F71] pt-1">
                  * Kitchen last orders taken 45 minutes prior to closing.
                </div> */}

              </div>

            </div>

            {/* ==================================================
                CONTACT CARD
            =================================================== */}

            <div className="bg-[#14161E] border border-[#232634] rounded-lg p-6 space-y-3 shadow-lg text-xs sm:text-sm">

              <div className="text-xs uppercase tracking-wider text-[#C59B27] font-medium mb-1">
                Concierge Direct Lines
              </div>

              {/* Phone */}

              <div className="flex items-center justify-between gap-4">

                <span className="text-[#968F81] flex items-center gap-2">

                  <Phone className="w-4 h-4 text-[#C59B27]" />

                  Reservations Desk

                </span>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="text-[#FAF7F2] hover:text-[#C59B27] font-medium tabular-nums transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>

              </div>

              {/* Email */}

              <div className="flex items-center justify-between gap-4">

                <span className="text-[#968F81] flex items-center gap-2">

                  <Mail className="w-4 h-4 text-[#C59B27]" />

                  Inquiries & VIP

                </span>

                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="text-[#FAF7F2] hover:text-[#C59B27] transition-colors truncate max-w-[200px]"
                >
                  {RESTAURANT_INFO.email}
                </a>

              </div>

            </div>

          </div>

          {/* ====================================================
              RIGHT COLUMN - GOOGLE MAP
          ===================================================== */}

          <div className="lg:col-span-7">

            <div className="bg-[#14161E] border border-[#232634] rounded-lg overflow-hidden shadow-2xl relative">

              {/* =================================================
                  MAP HEADER
              ================================================== */}

              <div className="px-4 py-3 bg-[#0F1016] border-b border-[#232634] flex items-center justify-between text-xs">

                <div className="flex items-center gap-2 text-[#C4BDB0]">

                  <span className="w-2 h-2 rounded-full bg-[#C59B27]" />

                  <span className="font-medium">
                    Kush Garden
                  </span>

                  <span className="text-[#645E52] hidden sm:inline">
                    · 26.485849° N, 87.270991° E
                  </span>

                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-[11px] bg-[#1A1C25] border border-[#2E3141] hover:border-[#C59B27] text-[#D0C9BD] rounded flex items-center gap-1 transition-colors"
                >

                  <span>Full Google Map</span>

                  <ExternalLink className="w-3 h-3 text-[#C59B27]" />

                </a>

              </div>

              {/* =================================================
                  REAL GOOGLE MAP
              ================================================== */}

              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#0A0B0E]">

                <iframe
                  src={googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Kush Garden Google Maps Location"
                />

              </div>

              {/* =================================================
                  MAP FOOTER
              ================================================== */}

              <div className="px-4 py-3 bg-[#0F1016] border-t border-[#232634] flex items-center justify-between">

                <div className="text-[11px] text-[#8C8578]">
                  Kush Garden · 26.485849° N, 87.270991° E
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#E5B842] font-medium hover:underline flex items-center gap-1"
                >

                  Navigate

                  <Navigation className="w-3 h-3" />

                </a>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

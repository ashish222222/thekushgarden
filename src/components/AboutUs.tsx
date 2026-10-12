import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Compass, Award, ShieldCheck, Quote } from 'lucide-react';
import { RESTAURANT_INFO, CHEF_IMAGE } from '../data/restaurantData';

export const AboutUs: React.FC = () => {
  const [activeStoryTab, setActiveStoryTab] = useState<'hearth' | 'terroir' | 'sanctuary'>('hearth');

  const storyTabs = [
    {
      id: 'hearth',
      title: 'The Applewood Hearth',
      icon: Flame,
      summary: 'Every evening, our open kitchen ignites seasoned wild applewood embers sourced from high Himalayan orchards, imparting nuanced sweetness and primal smokiness to our aged meats and mountain produce.'
    },
    {
      id: 'terroir',
      title: 'Wild Mountain Terroir',
      icon: Compass,
      summary: 'We collaborate with indigenous foraging collectives across Jumla, Mustang, and Manang to source rare mountain morels, wild timur peppercorns, organic mountain honey, and sacred herbs unavailable anywhere else.'
    },
    {
      id: 'sanctuary',
      title: 'A Thamel Sanctuary',
      icon: Award,
      summary: 'Tucked away from the vibrant electric labyrinth of Thamel, our dining room provides acoustic warmth, dark reclaimed timber, hand-beaten brass details, and soft amber illumination.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0F1015] relative overflow-hidden border-t border-[#1C1E26]">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-medium mb-3"
          >
            The Story Behind The Hearth
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif text-[#FAF7F2] font-normal tracking-tight mb-6"
            style={{ textWrap: 'balance' }}
          >
            Bridging Ancestral Himalayan Fire & Modern Haute Cuisine
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-[#B0A89A] leading-relaxed font-light"
          >
            Founded in 2012 by Executive Chef Soren and Master Sommelier Rajendra, L’Ambre was envisioned as a culinary homecoming—where the timeless wisdom of Nepalese hearth cooking meets European precision.
          </motion.p>
        </div>

        {/* Chef & Story Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Chef Image with Framed Luxury Border */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#2D303E] bg-[#161820] shadow-2xl relative group">
                <img
                  src={CHEF_IMAGE}
                  alt="Executive Chef Soren plating an artisanal dish with precision tweezers"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10]/85 via-transparent to-transparent" />
                
                {/* Overlay quote */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C59B27] font-medium mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                    <span>Executive Chef Soren Khaling</span>
                  </div>
                  <p className="text-sm font-serif italic text-[#FAF7F2] leading-snug">
                    "Fire is not merely heat; it is an ingredient with memory, season, and soul."
                  </p>
                </div>
              </div>

              {/* Decorative Corner Offset */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#C59B27]/40 pointer-events-none rounded-br-lg hidden sm:block" />
            </div>
          </motion.div>

          {/* Story Narrative & Interactive Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4 text-[#B5AEA1] text-sm sm:text-base leading-relaxed font-light">
              <p>
                In the historic lanes of Thamel, where silk merchants and mountaineers have crossed paths for centuries, L’Ambre stands as an architectural haven. Here, dining is conducted with reverence for every raw element.
              </p>
              <p>
                We do not believe in synthetic shortcuts. Our broths steep for forty-eight hours with marrow and charred wild alliums; our duck is slow-hung and smoked over dry pine needles; and our Yak cheeses mature in temperature-governed Himalayan stone cellars.
              </p>
            </div>

            {/* Interactive Pillar Tabs */}
            <div className="pt-4 border-t border-[#232632] space-y-3">
              <div className="text-xs uppercase tracking-widest text-[#8F8778] font-medium">
                Our Gastronomic Pillars
              </div>
              <div className="grid grid-cols-3 gap-2">
                {storyTabs.map((tab) => {
                  const isActive = activeStoryTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveStoryTab(tab.id as any)}
                      className={`p-3 rounded-md text-left transition-all border cursor-pointer ${
                        isActive
                          ? 'bg-[#1D1F28] border-[#C59B27] shadow-sm'
                          : 'bg-[#14151C] border-[#222530] hover:border-[#383B4A]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 mb-2 ${isActive ? 'text-[#C59B27]' : 'text-[#7D7669]'}`} />
                      <div className={`text-xs font-medium leading-tight ${isActive ? 'text-[#FAF7F2]' : 'text-[#9A9385]'}`}>
                        {tab.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Tab description text */}
              <div className="p-4 bg-[#14151C] border border-[#222530] rounded-md text-xs sm:text-sm text-[#C4BDB1] leading-relaxed">
                {storyTabs.find((t) => t.id === activeStoryTab)?.summary}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Row */}
        <div className="pt-10 border-t border-[#232632]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {RESTAURANT_INFO.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#14161E] border border-[#232632] p-6 rounded-lg text-center hover:border-[#C59B27]/40 transition-colors"
              >
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E5B842] mb-2 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#FAF7F2] mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#8A8375]">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

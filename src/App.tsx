/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { FeaturedMenu } from './components/FeaturedMenu';
import { Gallery } from './components/Gallery';
import { CustomerReviews } from './components/CustomerReviews';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { MenuItem } from './types/restaurant';

export default function App() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const handleOpenReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0D10] text-[#EDE8DF] selection:bg-[#C59B27]/30 selection:text-[#FAF7F2] font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenReservation={handleOpenReservation}
          onExploreMenu={handleExploreMenu}
        />

        {/* About Us & Chef's Story */}
        {/* <AboutUs /> */}

        {/* Featured Seasonal Menu with Filters */}
        {/* <FeaturedMenu
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenReservation={handleOpenReservation}
        /> */}

        {/* Visual Gallery with Lightbox */}
        <Gallery />

        {/* Testimonials & Reviews Slider */}
        {/* <CustomerReviews /> */}

        {/* Interactive Location, Google Maps Style Map & Hours */}
        <LocationSection />

        {/* Online Table Booking & Reservation Form */}
        {/* <ReservationSection /> */}

        {/* Concierge & Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Dish Inspection Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onBookTable={() => {
          setSelectedDish(null);
          handleOpenReservation();
        }}
      />
    </div>
  );
}

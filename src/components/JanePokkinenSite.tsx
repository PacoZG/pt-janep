'use client'

import React, { FC } from 'react'
import NavBar from '@/components/NavBar/NavBar'
import HeroSection from '@/components/HeroSection/HeroSection'
import TestimonialSection from '@/components/TestimonialSection/TestimonialSection'
import AboutSection from '@/components/AboutSection/AboutSection'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
import ImageGallerySection from '@/components/ImageGallerySection/ImageGallerySection'
import FAQSection from '@/components/FAQSection/FAQSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import ProgramsSection from '@/components/ProgramsSection/ProgramsSection'
import PricingSection from '@/components/PricingSections/PricingSection'
import Footer from '@/components/Footer/Footer'

const JanePokkinenSite: FC = () => {
  return (
    // Updated background and text colors to a lighter palette
    <div className="relative min-h-screen scroll-smooth bg-gray-100 text-gray-800">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Programs Section */}
      <ProgramsSection />

      {/* New Image Gallery Section */}
      <ImageGallerySection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
export default JanePokkinenSite

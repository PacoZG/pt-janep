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

// A map for dynamic icon rendering in the Services section

// // Share menu component for social media links
// const ShareMenu = ({ isVisible, onClose }) => {
//   const shareUrl = 'https://www.yourwebsite.com' // Replace with the actual URL
//   const shareTitle = 'Jane Pokkinen Coaching'
//   const shareHashtags = 'personaltrainer,healthcoach'
//
//   if (!isVisible) return null
//
//   return (
//     <div className="absolute top-12 left-0 right-0 z-10 rounded-xl border bg-white p-4 shadow-lg">
//       <div className="flex flex-col gap-2">
//         <a
//           href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-100"
//         >
//           {/*<Facebook className="h-5 w-5 text-blue-600" />*/}
//           <span>Share on Facebook</span>
//         </a>
//         <a
//           href={`https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-100"
//         >
//           {/*<Instagram className="h-5 w-5 text-pink-600" />*/}
//           <span>Share on Instagram</span>
//         </a>
//       </div>
//     </div>
//   )
// }

const JanePokkinenSite: FC = () => {
  return (
    // Updated background and text colors to a lighter palette
    <div className="relative min-h-screen scroll-smooth bg-gray-100 text-gray-800">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

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

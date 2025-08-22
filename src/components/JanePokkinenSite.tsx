'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import NavBar from '@/components/NavBar/NavBar'
import HeroSection from '@/components/HeroSection/HeroSection'
import TestimonialSection from '@/components/TestimonialSection/TestimonialSection'
import AboutSection from '@/components/AboutSection/AboutSection'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
import FAQSection from '@/components/FAQSection/FAQSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import ProgramsSection from '@/components/ProgramsSection/ProgramsSection'
import PricingSection from '@/components/PricingSections/PricingSection'
import Footer from '@/components/Footer/Footer'
import { motion } from 'motion/react'
import CardStack from '@/components/ImageGallerySection/CardStack'

const imageList: string[] = [
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427119/vjwvf7qpms8uqu7jetts.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755749709/z96ytmzu77b7shnorn8x.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427118/x0uiqbalssk1k4x57eph.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427123/kxcvzzebkqers0gx3zh3.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427121/jjkr3eaxhzr6wuyfqmmx.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755463820/nw4bgkxrvpxrv7p29mrp.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427118/tsznr5ml8vvwlv455vqh.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427117/edejyvx4wt0zuqwj95xq.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755463820/a5acetprjnqghyaknucd.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755463697/zabwipx5eij2wtvy7g35.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755463695/cymvrwsipldwlujhtnqr.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755463692/mweyotba7jqdboewjx8w.jpg',
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755463692/cxdzknbhsbehcyn41fqx.jpg',
]

const JanePokkinenSite: FC = () => {
  const [currentBgImage, setCurrentBgImage] = useState(imageList[0])
  const [showTopButton, setShowTopButton] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (pageRef.current) {
        const scrollPosition = pageRef.current.scrollTop
        setShowTopButton(scrollPosition > 1000)

        const sectionHeight = window.innerHeight
        const newImageIndex = Math.floor(scrollPosition / sectionHeight)
        if (newImageIndex >= 0 && newImageIndex < imageList.length) {
          setCurrentBgImage(imageList[newImageIndex])
        }
      }
    }

    const currentPageRef = pageRef.current
    if (currentPageRef) {
      currentPageRef.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (currentPageRef) {
        currentPageRef.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const scrollToTop = () => {
    if (pageRef.current) {
      pageRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div
        ref={pageRef}
        className="relative min-h-screen overflow-y-scroll text-gray-800"
        style={{
          backgroundImage: `url(${currentBgImage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in-out',
        }}
      >
        <div className="absolute inset-0 bg-gray-100 bg-opacity-70">
          <NavBar />

          {/* Use motion.div for sections to add animations */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <HeroSection />
          </motion.div>
          <hr className="my-10" />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <ServicesSection />
          </motion.div>
          <hr className="my-10" />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <AboutSection />
          </motion.div>
          <hr className="my-10" />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 5 }}
            viewport={{ once: true, amount: 'some' }}
          >
            <ProgramsSection />
          </motion.div>
          <hr className="my-10" />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.5 }}
            style={{ position: 'relative' }}
          >
            {/*<ImageGallerySection />*/}
            <CardStack />
          </motion.div>
          <hr className="my-10" />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <PricingSection />
          </motion.div>
          <hr className="my-10" />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <FAQSection />
          </motion.div>
          <hr className="my-10" />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <TestimonialSection />
          </motion.div>
          <hr className="my-10" />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <ContactSection />
          </motion.div>
          <hr className="my-10" />

          <Footer />
        </div>

        {showTopButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-gray-600 to-blue-500 shadow-lg hover:from-blue-600 hover:to-purple-600 transition"
            aria-label="Back to Top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  )
}

export default JanePokkinenSite

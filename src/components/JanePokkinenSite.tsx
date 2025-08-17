'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
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

const imageList: string[] = [
  'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1755427119/vjwvf7qpms8uqu7jetts.jpg',
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
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (pageRef.current) {
        const scrollPosition = pageRef.current.scrollTop
        const sectionHeight = window.innerHeight // Use viewport height for a simple threshold
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

  return (
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <HeroSection />
        </motion.div>
        <hr className="my-10" />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <ServicesSection />
        </motion.div>
        <hr className="my-10" />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <AboutSection />
        </motion.div>
        <hr className="my-10" />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <ProgramsSection />
        </motion.div>
        <hr className="my-10" />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <ImageGallerySection />
        </motion.div>
        <hr className="my-10" />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <PricingSection />
        </motion.div>
        <hr className="my-10" />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <FAQSection />
        </motion.div>
        <hr className="my-10" />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <TestimonialSection />
        </motion.div>
        <hr className="my-10" />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <ContactSection />
        </motion.div>
        <hr className="my-10" />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  )
}

export default JanePokkinenSite

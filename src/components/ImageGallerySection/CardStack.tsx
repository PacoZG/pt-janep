'use client'

import React, { useState } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import SectionTitle from '@/components/SectionTitle/SectionTitle'

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

const CardStack = () => {
  const [images, setImages] = useState(imageList)

  const xValues = [useMotionValue(0), useMotionValue(0), useMotionValue(0)]
  const rotateValues = [
    useTransform(xValues[0], [-200, 100], [-40, 20]),
    useTransform(xValues[1], [-150, 200], [-20, 40]),
    useTransform(xValues[2], [-200, 200], [-20, 20]),
  ]

  const swipe = () => {
    setImages(prev => {
      const updated = [...prev]
      const first = updated.shift()!
      updated.push(first)

      return updated
    })
  }

  return (
    <section id="gallery" className="bg-gray-900 bg-opacity-40 py-16 md:py-24">
      <SectionTitle
        className="text-blue-300"
        title="Gallery"
        // subtitle="A look into my coaching and training sessions."
      />

      <div className="flex justify-center items-center pt-9">
        <div className="relative w-[280px] h-[340px] md:w-[480px] md:h-[640px] select-none">
          {' '}
          {/* prevent text/image drag */}
          <AnimatePresence>
            {images
              .slice(0, 3)
              .reverse()
              .map((img, i) => {
                const index = images.indexOf(img)
                const isTop = index === 0
                const x = xValues[i]
                const rotate = rotateValues[i]

                return (
                  <motion.div
                    key={img}
                    className="absolute w-full h-full rounded-xl shadow-lg overflow-hidden bg-gray-500 cursor-grab active:cursor-grabbing"
                    style={{ x, rotate, zIndex: 100 - index }}
                    drag={isTop ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.5}
                    dragListener={true} // 👈 ensures drag starts immediately
                    onDragEnd={(e, info) => {
                      if (Math.abs(info.offset.x) > 120) {
                        swipe()
                      } else {
                        x.set(0)
                      }
                    }}
                    initial={{ scale: 0.95 + i * 0.03, y: i * 10, opacity: 0 }}
                    animate={{ scale: 1 - i * 0.03, y: -i * 10, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={img}
                      alt=""
                      draggable={false} // 👈 prevent browser's native image dragging
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </motion.div>
                )
              })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default CardStack

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ✅ IMPORT YOUR IMAGES (MUST BE FROM src/assets NOT C:\ PATH)
import img1 from '../assets/photos/Yash/img1.jpeg'
import img2 from '../assets/photos/Yash/img2.jpeg'
import img3 from '../assets/photos/Yash/img3.jpeg'
import img4 from '../assets/photos/Yash/img4.jpeg'
import img5 from '../assets/photos/Yash/img5.jpeg'
import img6 from '../assets/photos/Yash/img6.jpeg'
import img7 from '../assets/photos/Yash/img8.jpeg'

/**
 * Gallery — Memory Gallery with Lightbox
 */

const galleryPhotos = [
  {
    id: 1,
    image: img1,
    caption: 'Beautiful Memory 1',
    span: 'tall',
  },
  {
    id: 2,
    image: img2,
    caption: 'Beautiful Memory 2',
    span: 'medium',
  },
  {
    id: 3,
    image: img3,
    caption: 'Beautiful Memory 3',
    span: 'medium',
  },
  {
    id: 4,
    image: img4,
    caption: 'Beautiful Memory 4',
    span: 'tall',
  },
  {
    id: 5,
    image: img5,
    caption: 'Beautiful Memory 5',
    span: 'medium',
  },
  {
    id: 6,
    image: img6,
    caption: 'Beautiful Memory 6',
    span: 'medium',
  },
  {
    id: 7,
    image: img7,
    caption: 'Beautiful Memory 7',
    span: 'medium',
  },
]

const spanClasses = {
  tall: 'sm:row-span-2',
  medium: 'sm:row-span-2',
  short: 'sm:row-span-1',
}

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section className="section bg-velvet-gradient" id="gallery">
      <div className="relative z-10 w-full max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-display tracking-[0.35em] text-xs sm:text-sm text-blush uppercase">
            Page Three
          </span>

          <h2 className="font-display text-3xl sm:text-5xl shimmer-text font-bold mt-3">
            Memory Gallery
          </h2>

          <p className="font-body italic text-goldLight/80 mt-3 text-lg">
            A thousand little moments, frozen in time
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] sm:auto-rows-[120px] gap-3 sm:gap-4">

          {galleryPhotos.map((photo, i) => (
            <motion.button
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              onClick={() => setActive(photo)}
              className={`relative group overflow-hidden rounded-xl border border-gold/20 ${spanClasses[photo.span] || ''}`}
            >

              {/* IMAGE */}
              <img
                src={photo.image}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* HOVER CAPTION */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-end">
                <p className="font-body text-sm sm:text-base text-goldLight px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  {photo.caption}
                </p>
              </div>

            </motion.button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] bg-black/85 flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl w-full glass-card p-4"
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={active.image}
                alt={active.caption}
                className="w-full h-96 object-cover rounded-xl"
              />

              <p className="font-display text-center text-goldLight text-lg mt-4">
                {active.caption}
              </p>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
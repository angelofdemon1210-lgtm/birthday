import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { reasons } from '../data/content'

/**
 * Reasons — PAGE 4
 * 22 luxury "gift boxes" — one for each year of his life. Clicking a box
 * opens it with an animation and reveals a romantic message plus a
 * burst of floating heart particles.
 */
export default function Reasons() {
  const [openedId, setOpenedId] = useState(null)
  const [openedCount, setOpenedCount] = useState(new Set())

  const handleOpen = (idx) => {
    setOpenedId(idx)
    setOpenedCount((prev) => new Set(prev).add(idx))
  }

  return (
    <section className="section bg-velvet" id="reasons">
      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-display tracking-[0.35em] text-xs sm:text-sm text-blush uppercase">
            Page Four
          </span>
          <h2 className="font-display text-3xl sm:text-5xl shimmer-text font-bold mt-3">
            22 Reasons Why I Love You
          </h2>
          <p className="font-body italic text-goldLight/80 mt-3 text-lg">
            Tap each box to unwrap a little piece of my heart
          </p>
          <p className="text-gold/60 text-sm mt-2">
            {openedCount.size} / {reasons.length} opened
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-5">
          {reasons.map((reason, idx) => (
            <GiftBox
              key={idx}
              index={idx}
              reason={reason}
              isOpen={openedId === idx}
              opened={openedCount.has(idx)}
              onOpen={() => handleOpen(idx)}
              onClose={() => setOpenedId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function GiftBox({ index, reason, isOpen, opened, onOpen, onClose }) {
  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
        whileHover={{ y: -6, scale: 1.04 }}
        onClick={onOpen}
        className={`relative aspect-square rounded-2xl flex flex-col items-center justify-center border transition-all duration-500
          ${opened ? 'border-gold/60 bg-gradient-to-br from-orchid/30 to-plum/40' : 'border-blush/30 bg-gradient-to-br from-plum/60 to-velvet'}
          shadow-glowPurple hover:shadow-glowGold`}
      >
        <span className="text-2xl sm:text-3xl mb-1">🎁</span>
        <span className="font-display text-gold text-sm sm:text-base">#{index + 1}</span>
        {opened && (
          <span className="absolute top-1 right-1 text-blush text-xs">❤</span>
        )}
      </motion.button>

      {/* Modal reveal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/80 flex items-center justify-center p-6"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.6, rotate: -4, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full glass-card border-gold/50 p-8 text-center overflow-hidden"
            >
              {/* heart particle burst */}
              <HeartBurst />

              <span className="font-display text-gold text-xs tracking-[0.3em] uppercase">
                Reason #{index + 1}
              </span>
              <p className="font-display text-xl sm:text-2xl text-goldLight mt-4 leading-relaxed">
                {reason}
              </p>
              <button onClick={onClose} className="btn-luxury mt-6 text-sm py-2 px-6">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function HeartBurst() {
  const hearts = Array.from({ length: 14 })
  return (
    <div className="absolute inset-0 pointer-events-none">
      {hearts.map((_, i) => {
        const angle = (i / hearts.length) * Math.PI * 2
        const distance = 80 + Math.random() * 60
        return (
          <motion.span
            key={i}
            initial={{ opacity: 1, x: 0, y: 0, scale: 0.5 }}
            animate={{
              opacity: 0,
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              scale: 1.2,
            }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute left-1/2 top-1/2 text-blush text-lg"
          >
            ❤
          </motion.span>
        )
      })}
    </div>
  )
}

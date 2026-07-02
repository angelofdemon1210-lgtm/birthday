import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { secretLetter } from '../data/content'

/**
 * SecretLetter — PAGE 5
 * A sealed envelope sits center-stage. Clicking it triggers an opening
 * animation, after which the heartfelt letter is revealed with a
 * typewriter effect, paragraph by paragraph.
 */
export default function SecretLetter() {
  const [opened, setOpened] = useState(false)
  const [typedText, setTypedText] = useState('')
  const indexRef = useRef(0)

  useEffect(() => {
    if (!opened) return
    indexRef.current = 0
    setTypedText('')

    const interval = setInterval(() => {
      indexRef.current += 1
      setTypedText(secretLetter.slice(0, indexRef.current))
      if (indexRef.current >= secretLetter.length) clearInterval(interval)
    }, 18)

    return () => clearInterval(interval)
  }, [opened])

  return (
    <section className="section bg-velvet-gradient" id="letter">
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-display tracking-[0.35em] text-xs sm:text-sm text-blush uppercase">
            Page Five
          </span>
          <h2 className="font-display text-3xl sm:text-5xl shimmer-text font-bold mt-3">
            A Secret Letter For You
          </h2>
          <p className="font-body italic text-goldLight/80 mt-3 text-lg mb-12">
            Some words are better sealed... until you're ready
          </p>
        </motion.div>

        {!opened ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpened(true)}
            className="relative w-64 sm:w-80 aspect-[3/2] cursor-pointer"
            aria-label="Open the letter"
          >
            {/* Envelope body */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-plum to-velvet border border-gold/40 shadow-glowGold" />
            {/* Envelope flap */}
            <div
              className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-orchid/70 to-plum border-b border-gold/40"
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />
            {/* Wax seal */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center text-velvet text-xl shadow-glowGold animate-glowPulse">
                ❤
              </span>
            </div>
            <p className="absolute -bottom-10 left-0 right-0 font-display text-goldLight/80 text-sm tracking-wide">
              Tap to open
            </p>
          </motion.button>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-card border-gold/40 p-6 sm:p-10 text-left max-h-[60vh] overflow-y-auto"
            >
              {typedText.split('\n\n').map((para, i) => (
                <p key={i} className="font-body text-base sm:text-lg text-white/90 leading-relaxed mb-4 whitespace-pre-line">
                  {para}
                </p>
              ))}
              <span className="inline-block w-2 h-5 bg-gold animate-pulse align-middle" />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  )
}

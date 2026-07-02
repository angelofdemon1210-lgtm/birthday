import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PasswordGate({ children, onUnlock }) {
  const CORRECT_PIN = '2810'

  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  const unlockWebsite = () => {
    setUnlocked(true)
    onUnlock?.()
  }

  const handleNumber = (number) => {
    if (pin.length >= 4) return

    const newPin = pin + number
    setPin(newPin)

    if (newPin.length === 4) {
      setTimeout(() => {
        if (newPin === CORRECT_PIN) {
          unlockWebsite()
        } else {
          setError(true)
          setPin('')

          setTimeout(() => {
            setError(false)
          }, 700)
        }
      }, 200)
    }
  }

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1))
  }

  if (unlocked) {
    return children
  }

  const keypad = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '⌫', '0', '♥'
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-pink-950 flex items-center justify-center px-4">

      {/* Floating Hearts */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-500/30 text-xl pointer-events-none"
          animate={{
            y: [50, -800],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '-50px'
          }}
        >
          ❤️
        </motion.div>
      ))}

      <motion.div
        animate={
          error
            ? {
                x: [-10, 10, -10, 10, 0]
              }
            : {}
        }
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm rounded-[32px] bg-white/10 backdrop-blur-xl border border-pink-500/20 p-8 shadow-[0_0_50px_rgba(236,72,153,0.2)]"
      >
        <div className="text-center mb-8">
          <motion.div
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 2
            }}
            className="text-6xl mb-3"
          >
            💖
          </motion.div>

          <h1 className="text-3xl font-bold text-pink-400">
            Chapter 22
          </h1>

          <p className="text-pink-200 mt-2">
            Enter our special memory
          </p>

          <p className="text-pink-400/70 text-sm mt-1">
            Hint: Our First Meet ❤️
          </p>
        </div>

        {/* PIN Indicator */}
        <div className="flex justify-center gap-4 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              animate={
                pin[index]
                  ? {
                      scale: [0.7, 1.2, 1]
                    }
                  : {}
              }
              className="w-5 h-5 rounded-full border-2 border-pink-400 flex items-center justify-center"
            >
              {pin[index] && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-sm"
                >
                  ❤️
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-pink-300 mb-5"
            >
              Wrong memory ❤️ Try again
            </motion.p>
          )}
        </AnimatePresence>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-4">
          {keypad.map((key) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (key === '⌫') {
                  handleDelete()
                } else if (key === '♥') {
                  if (pin === CORRECT_PIN) {
                    unlockWebsite()
                  } else {
                    setError(true)
                    setPin('')
                    setTimeout(() => setError(false), 700)
                  }
                } else {
                  handleNumber(key)
                }
              }}
              className="h-16 rounded-full bg-white/10 backdrop-blur-md border border-pink-500/20 text-pink-200 text-xl font-semibold shadow-lg hover:bg-pink-500/10"
            >
              {key}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaPause, FaMusic, FaVolumeUp } from 'react-icons/fa'

export default function MusicPlayer({ audioRef }) {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.35)

  useEffect(() => {
    const audio = audioRef?.current
    if (!audio) return

    const update = () => setPlaying(!audio.paused)

    audio.addEventListener('play', update)
    audio.addEventListener('pause', update)

    return () => {
      audio.removeEventListener('play', update)
      audio.removeEventListener('pause', update)
    }
  }, [audioRef])

  const toggle = async () => {
    const audio = audioRef?.current
    if (!audio) return

    try {
      if (audio.paused) {
        await audio.play()
      } else {
        audio.pause()
      }
    } catch (err) {
      console.log(err)
    }
  }

  const changeVolume = (e) => {
    const val = parseFloat(e.target.value)
    setVolume(val)

    if (audioRef?.current) {
      audioRef.current.volume = val
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-2">

      {/* BUTTON */}
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full glass-card border-gold/40 flex items-center justify-center shadow-glowGold"
      >
        {playing ? (
          <FaPause className="text-gold text-sm" />
        ) : (
          <FaPlay className="text-gold text-sm" />
        )}
      </motion.button>

      {/* VOLUME SLIDER */}
      <div className="flex items-center gap-2 bg-black/40 px-2 py-1 rounded-full">
        <FaVolumeUp className="text-xs text-gold" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={changeVolume}
          className="w-20 accent-pink-400"
        />
      </div>

      {/* MUSIC ANIMATION */}
      {playing && (
        <motion.div
          className="text-blush text-xs"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        >
          <FaMusic />
        </motion.div>
      )}
    </div>
  )
}
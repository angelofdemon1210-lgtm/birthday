import React, { useState, useEffect, useRef } from 'react'
import PasswordGate from './components/PasswordGate'
import LoadingScreen from './components/LoadingScreen'
import ParticleBackground from './components/ParticleBackground'
import CursorGlow from './components/CursorGlow'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Reasons from './components/Reasons'
import SecretLetter from './components/SecretLetter'
import FutureDreams from './components/FutureDreams'
import GrandFinale from './components/GrandFinale'
import MusicPlayer from './components/MusicPlayer'
import { siteMeta } from './data/content'

import backgroundMusic from './assets/audio/Ammaadi.mp3'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isLight, setIsLight] = useState(false)

  const heroRef = useRef(null)
  const timelineRef = useRef(null)

  const audioRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const replayStory = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // called after correct PIN
  const handleUnlock = async () => {
    if (!audioRef.current) return
    try {
      audioRef.current.volume = 0.35
      await audioRef.current.play()
    } catch (err) {
      console.log('Autoplay blocked:', err)
    }
  }

  return (
    <PasswordGate onUnlock={handleUnlock}>
      {/* SINGLE AUDIO INSTANCE */}
      <audio
        ref={audioRef}
        src={backgroundMusic}
        loop
        preload="auto"
      />

      <div className="relative w-full">
        <LoadingScreen visible={loading} />

        <ParticleBackground />
        <CursorGlow />

        {/* MUSIC CONTROL BUTTON */}
        <MusicPlayer audioRef={audioRef} />

        <ThemeToggle isLight={isLight} setIsLight={setIsLight} />

        <main className="relative z-10">
          <div ref={heroRef}>
            <Hero scrollToNext={scrollToTimeline} />
          </div>

          <div ref={timelineRef}>
            <Timeline />
          </div>

          <Gallery />
          <Reasons />
          <SecretLetter />
          <FutureDreams />


          <GrandFinale onReplay={replayStory} />
        </main>
      </div>
    </PasswordGate>
  )
}
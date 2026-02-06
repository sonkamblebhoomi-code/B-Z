'use client'

import { useState, useEffect } from 'react'
import { Heart, Sparkles, Flower2, Star } from 'lucide-react'

const quotes = [
  '"In your arms, I found my home, my peace, and my forever." - Unknown',
  '"You are my today and all of my tomorrows." - Leo Christopher',
  '"I love you without knowing how, or when, or from where." - Pablo Neruda',
  '"You make me feel like I can do anything." - Unknown',
  '"My heart knew you before my mind caught up." - Unknown',
]

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 2 + 1.5,
  delay: Math.random() * 0.5,
}))

export default function ProposalClient() {
  const [stage, setStage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)
  const [floatingHearts, setFloatingHearts] = useState<Array<{ id: number; left: number }>>([])
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    if (stage < 3) {
      const timer = setTimeout(() => setStage(stage + 1), 3500 + stage * 600)
      return () => clearTimeout(timer)
    }
  }, [stage])

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(quoteTimer)
  }, [])

  const generateHearts = () => {
    const hearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
    }))
    setFloatingHearts(hearts)
  }

  const handleYes = () => {
    generateHearts()
    setIsAnimating(false)
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-200/25 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-200/25 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-300/15 to-transparent rounded-full blur-3xl animate-pulse-soft"></div>
        
        {/* Additional gradient overlays for depth */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-200/10 to-transparent rounded-full blur-3xl animate-pulse-soft" style={{ animationDuration: '3s' }}></div>
        
        {/* Animated star elements */}
        <Star className="absolute top-20 right-20 w-4 h-4 text-accent/40 animate-pulse" style={{ animationDelay: '0s' }} />
        <Star className="absolute bottom-32 left-20 w-3 h-3 text-red-300/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <Star className="absolute top-1/3 right-1/4 w-3 h-3 text-pink-300/40 animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Decorative sparkles with varying sizes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <Flower2 className="absolute top-1/2 right-1/3 w-4 h-4 text-pink-300/30 animate-bounce" style={{ animationDelay: '0.3s' }} />
      </div>

      {/* Floating hearts after YES */}
      {floatingHearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: `${heart.left}%`,
            top: '100%',
            animation: `float 4s ease-in forwards`,
            animationDelay: `${Math.random() * 0.4}s`,
          }}
        >
          <Heart
            className="w-8 h-8 text-red-500 fill-red-500"
            style={{
              filter: 'drop-shadow(0 0 12px rgba(239, 68, 68, 0.8))',
            }}
          />
        </div>
      ))}

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl">
          {/* Stage 1: Appearance */}
          {stage >= 0 && (
            <div className={`transition-all duration-1000 ${stage > 0 ? 'opacity-0 -translate-y-10' : 'opacity-100'}`}>
              <div className="mb-12 animate-scale-in">
                <div className="relative w-32 h-32 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/30 to-pink-400/30 rounded-full blur-2xl animate-glow-pulse"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-accent/20 to-red-300/20 rounded-full blur-xl animate-pulse-soft" style={{ animationDuration: '2.5s' }}></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Heart className="w-28 h-28 text-red-500 fill-red-500 animate-heart-beat drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.4))' }} />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up text-balance">
                Zaheen
              </h1>
              <p className="text-lg text-foreground/70 animate-fade-in-up mb-8" style={{ animationDelay: '0.2s' }}>
                I need to tell you something special...
              </p>
              <div className="min-h-20 flex items-center justify-center">
                <p className="text-sm md:text-base text-accent/80 italic animate-quote-fade max-w-md" style={{ animationDelay: '0.4s' }}>
                  {quotes[currentQuote]}
                </p>
              </div>
            </div>
          )}

          {/* Stage 2: Story */}
          {stage >= 1 && (
            <div
              className={`transition-all duration-1000 ${
                stage > 1 ? 'opacity-0 -translate-y-10' : 'opacity-100'
              }`}
            >
              <div className="space-y-10 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-10 text-balance animate-slide-in-left">
                  You are my greatest gift
                </h2>
                <div className="space-y-8 text-lg text-foreground/75 leading-relaxed">
                  <div className="flex gap-4 items-start animate-slide-in-left p-4 rounded-lg bg-accent/5 backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
                    <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-1 animate-spin" style={{ animationDuration: '3s' }} />
                    <p>Your strength and kindness inspire me every single day.</p>
                  </div>
                  <div className="flex gap-4 items-start animate-slide-in-right p-4 rounded-lg bg-red-50/5 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
                    <Heart className="w-6 h-6 text-accent fill-accent flex-shrink-0 mt-1 animate-heart-beat" />
                    <p>The way you care, dream, and love with your whole heart makes me believe in forever.</p>
                  </div>
                  <div className="flex gap-4 items-start animate-slide-in-left p-4 rounded-lg bg-accent/5 backdrop-blur-sm" style={{ animationDelay: '0.3s' }}>
                    <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-1 animate-spin" style={{ animationDuration: '3s' }} />
                    <p>With you, I've found my home, my best friend, and my soulmate.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stage 3: The Question */}
          {stage >= 2 && (
            <div
              className={`transition-all duration-1000 ${
                stage > 2 ? 'opacity-0 -translate-y-10' : 'opacity-100'
              }`}
            >
              <div className="space-y-12 animate-fade-in-up">
                <div className="space-y-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-red-400/10 to-accent/10 blur-3xl animate-pulse-soft"></div>
                    <h2 className="relative text-5xl md:text-6xl font-bold text-foreground mb-10 text-balance animate-rotate-in">
                      Can you be mine forever?
                    </h2>
                  </div>
                  <div className="flex justify-center gap-8 flex-wrap">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/30 rounded-full blur-lg animate-glow-pulse"></div>
                      <Heart className="relative w-12 h-12 text-accent fill-accent animate-bounce" />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-500/30 rounded-full blur-lg animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <Heart className="relative w-12 h-12 text-red-500 fill-red-500 animate-bounce" style={{ animationDelay: '0.1s' }} />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/30 rounded-full blur-lg animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
                      <Heart className="relative w-12 h-12 text-accent fill-accent animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
                <div className="min-h-16 flex items-center justify-center">
                  <p className="text-sm md:text-base text-foreground/70 italic animate-quote-fade max-w-md">
                    {quotes[(currentQuote + 1) % quotes.length]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Stage 4: The Buttons */}
          {stage >= 3 && (
            <div className={`transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="space-y-12 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">What do you say?</h2>

                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                  {/* YES Button */}
                  <button
                    onClick={handleYes}
                    className="relative px-16 py-4 text-lg font-bold text-primary-foreground bg-gradient-to-r from-red-500 to-accent rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300 animate-scale-in group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <Heart className="w-6 h-6 fill-current" />
                      YES!
                    </span>
                  </button>

                  {/* NO Button - with funny animation */}
                  <button
                    onMouseEnter={(e) => {
                      const btn = e.currentTarget
                      const randomX = (Math.random() - 0.5) * 250
                      const randomY = (Math.random() - 0.5) * 250
                      btn.style.transform = `translate(${randomX}px, ${randomY}px)`
                    }}
                    className="px-16 py-4 text-lg font-bold text-foreground bg-white border-2 border-muted rounded-full shadow-md hover:shadow-lg transform transition-transform duration-150 cursor-pointer"
                  >
                    No
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-foreground/10">
                  <p className="text-sm text-foreground/60 italic">
                    (The NO button will run away anyway)
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Celebration Message */}
          {!isAnimating && (
            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
              {/* Particle effects */}
              {particles.map((particle) => (
                <div
                  key={particle.id}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    animation: `particle-rise ${particle.duration}s ease-out forwards`,
                    animationDelay: `${particle.delay}s`,
                  }}
                >
                  <Sparkles
                    className="text-accent"
                    size={particle.size}
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.6))',
                      opacity: 0.8,
                    }}
                  />
                </div>
              ))}
              <div className="text-center animate-fade-in-up">
                <div className="mb-8 flex justify-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500/40 rounded-full blur-xl animate-glow-pulse"></div>
                    <Heart className="relative w-14 h-14 text-red-500 fill-red-500 animate-heart-beat" />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/40 rounded-full blur-xl animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <Heart className="relative w-14 h-14 text-accent fill-accent animate-heart-beat" style={{ animationDelay: '0.2s' }} />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500/40 rounded-full blur-xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
                    <Heart className="relative w-14 h-14 text-red-500 fill-red-500 animate-heart-beat" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 text-balance drop-shadow-2xl animate-slide-in-left">
                  HE'S MINE FOREVER!
                </h1>
                <p className="text-2xl md:text-3xl text-accent font-semibold drop-shadow-md mb-6 animate-slide-in-right">
                  You and me, forever
                </p>
                <p className="text-lg text-foreground/70 italic drop-shadow-sm max-w-md mx-auto animate-quote-fade">
                  {quotes[(currentQuote + 2) % quotes.length]}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

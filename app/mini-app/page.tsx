"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function MiniAppPage() {
  const [timeLeft, setTimeLeft] = useState(0)
  const [canClaim, setCanClaim] = useState(false)

  useEffect(() => {
    // Get current time in Singapore timezone
    const getSingaporeTime = () => {
      const now = new Date()
      const utc = now.getTime() + now.getTimezoneOffset() * 60000
      const singaporeTime = new Date(utc + 8 * 3600000) // UTC+8
      return singaporeTime.getTime()
    }

    const storedEndTime = localStorage.getItem("worldape-claim-end-time")
    const now = getSingaporeTime()

    let endTime: number

    if (storedEndTime) {
      endTime = Number.parseInt(storedEndTime)
      if (now >= endTime) {
        setCanClaim(true)
        setTimeLeft(0)
        return
      }
    } else {
      // Set initial 5-hour countdown from current Singapore time
      endTime = now + 5 * 60 * 60 * 1000
      localStorage.setItem("worldape-claim-end-time", endTime.toString())
    }

    const initialTimeLeft = Math.max(0, Math.floor((endTime - now) / 1000))
    setTimeLeft(initialTimeLeft)

    const timer = setInterval(() => {
      const currentTime = getSingaporeTime()
      const remainingTime = Math.max(0, Math.floor((endTime - currentTime) / 1000))

      setTimeLeft(remainingTime)

      if (remainingTime <= 0) {
        setCanClaim(true)
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleClaim = () => {
    const getSingaporeTime = () => {
      const now = new Date()
      const utc = now.getTime() + now.getTimezoneOffset() * 60000
      const singaporeTime = new Date(utc + 8 * 3600000) // UTC+8
      return singaporeTime.getTime()
    }

    const newEndTime = getSingaporeTime() + 5 * 60 * 60 * 1000
    localStorage.setItem("worldape-claim-end-time", newEndTime.toString())
    setCanClaim(false)
    setTimeLeft(5 * 60 * 60)
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: ["#ff00ff", "#00ffff", "#ffff00", "#ff6600", "#ffffff"][Math.floor(Math.random() * 5)],
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-4">
        <Link href="/">
          <Button
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
          >
            ← Back to Home
          </Button>
        </Link>
      </div>

      <section className="relative py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="relative mb-8">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              style={{
                background: "linear-gradient(45deg, #ff00ff, #00ffff, #ffff00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 30px rgba(255, 0, 255, 0.8)",
              }}
            >
              🚀 WORLD APE MINI APP 🚀
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Exclusive World App Integration • Daily APES Airdrops • World ID Verified Only
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <div
              className="relative p-1 rounded-2xl"
              style={{
                background: "linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff)",
                backgroundSize: "300% 300%",
                animation: "gradient-shift 2s ease-in-out infinite",
              }}
            >
              <Image
                src="/images/mini-app-ape.png"
                alt="World Ape Mini App"
                width={300}
                height={300}
                className="rounded-2xl animate-float bg-slate-900"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(255, 0, 255, 0.5))",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card
            className="relative bg-slate-800/50 border-0 p-1 rounded-xl mb-8"
            style={{
              background: "linear-gradient(45deg, rgba(255,0,255,0.2), rgba(0,255,255,0.2))",
            }}
          >
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background: "linear-gradient(45deg, #ff00ff, #00ffff)",
                margin: "-1px",
                zIndex: -1,
                filter: "blur(4px)",
              }}
            />
            <CardContent className="p-8 bg-slate-900/80 rounded-xl text-center">
              <h2
                className="text-3xl font-bold mb-4"
                style={{
                  color: "#ffff00",
                  textShadow: "0 0 20px #ffff00",
                }}
              >
                🎁 Daily Airdrop Claim
              </h2>

              {canClaim ? (
                <div>
                  <p className="text-xl text-green-400 mb-6">Ready to claim your APES!</p>
                  <Button
                    size="lg"
                    onClick={handleClaim}
                    className="relative px-8 py-4 text-lg font-bold bg-transparent border-2 text-white overflow-hidden group"
                    style={{
                      borderColor: "#00ff00",
                      boxShadow: "0 0 20px rgba(0, 255, 0, 0.5)",
                    }}
                  >
                    <span className="relative z-10">🎯 CLAIM 1000 APES</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </div>
              ) : (
                <div>
                  <p className="text-xl text-gray-300 mb-4">Next claim available in:</p>
                  <div
                    className="text-4xl font-mono font-bold mb-6"
                    style={{
                      color: "#ff00ff",
                      textShadow: "0 0 20px #ff00ff",
                    }}
                  >
                    {formatTime(timeLeft)}
                  </div>
                  <Button
                    size="lg"
                    disabled
                    className="px-8 py-4 text-lg font-bold bg-gray-600 text-gray-400 cursor-not-allowed"
                  >
                    ⏰ Claim Cooldown Active
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card
              className="relative bg-slate-800/50 border-0 p-1 rounded-xl"
              style={{
                background: "linear-gradient(45deg, rgba(0,255,255,0.2), rgba(0,0,0,0.3))",
              }}
            >
              <CardContent className="p-6 bg-slate-900/80 rounded-xl">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    color: "#00ffff",
                    textShadow: "0 0 15px #00ffff",
                  }}
                >
                  🌍 World ID Verified
                </h3>
                <p className="text-gray-300 mb-4">
                  Exclusive access for World ID verified users only. Ensuring authentic human participation in our
                  cosmic ecosystem.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Verification Required</span>
                </div>
              </CardContent>
            </Card>

            <Card
              className="relative bg-slate-800/50 border-0 p-1 rounded-xl"
              style={{
                background: "linear-gradient(45deg, rgba(255,255,0,0.2), rgba(0,0,0,0.3))",
              }}
            >
              <CardContent className="p-6 bg-slate-900/80 rounded-xl">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    color: "#ffff00",
                    textShadow: "0 0 15px #ffff00",
                  }}
                >
                  ⏰ Every 5 Hours
                </h3>
                <p className="text-gray-300 mb-4">
                  Claim your daily APES tokens every 5 hours. Consistent rewards for our dedicated space apes!
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-yellow-400 font-semibold">1000 APES per claim</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card
            className="relative bg-slate-800/50 border-0 p-1 rounded-xl mb-8"
            style={{
              background: "linear-gradient(45deg, rgba(255,0,255,0.2), rgba(255,255,0,0.2))",
            }}
          >
            <CardContent className="p-8 bg-slate-900/80 rounded-xl text-center">
              <h2
                className="text-3xl font-bold mb-6"
                style={{
                  background: "linear-gradient(45deg, #ff00ff, #ffff00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 20px rgba(255, 0, 255, 0.5)",
                }}
              >
                🏆 Official World Community Recognition
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                We are rapidly being noticed in the World community and taking over as the
                <span
                  className="font-bold mx-2"
                  style={{
                    color: "#00ffff",
                    textShadow: "0 0 10px #00ffff",
                  }}
                >
                  official WorldCoin MEME Mascot
                </span>
                among the world community!
              </p>
              <div className="flex justify-center space-x-4 text-4xl">
                <span className="animate-bounce">🌍</span>
                <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>
                  🦍
                </span>
                <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                  🚀
                </span>
                <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>
                  👑
                </span>
              </div>
            </CardContent>
          </Card>

          <Card
            className="relative bg-slate-800/50 border-0 p-1 rounded-xl"
            style={{
              background: "linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,255,0.2))",
            }}
          >
            <CardContent className="p-8 bg-slate-900/80 rounded-xl">
              <h2
                className="text-3xl font-bold mb-6 text-center"
                style={{
                  color: "#00ffff",
                  textShadow: "0 0 20px #00ffff",
                }}
              >
                📱 World App Integration
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🔗</div>
                  <h3 className="text-xl font-bold text-white mb-2">Seamless Integration</h3>
                  <p className="text-gray-300">Built natively for World App ecosystem</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🛡️</div>
                  <h3 className="text-xl font-bold text-white mb-2">Secure & Verified</h3>
                  <p className="text-gray-300">World ID verification ensures authenticity</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                  <p className="text-gray-300">Instant claims with zero gas fees</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function DiamondClubPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Enhanced Animated Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Diamonds */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <div
              className="w-8 h-8 rotate-45"
              style={{
                background: "linear-gradient(45deg, #ffff00, #ffd700)",
                boxShadow: "0 0 20px #ffff00",
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-20">
            <Link href="/">
              <Button
                variant="outline"
                className="mb-6 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 font-bold bg-transparent rounded-full transition-all duration-300"
              >
                ← Back to Home
              </Button>
            </Link>

            <div className="mb-6 sm:mb-8">
              <span className="inline-block text-4xl sm:text-6xl mb-4 animate-float">💎</span>
              <h1
                className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent px-2"
                style={{
                  textShadow: "0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.4)",
                  filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.9))",
                }}
              >
                DIAMOND CLUB
              </h1>
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
                <span className="text-2xl sm:text-4xl animate-float">💎</span>
                <p className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  EXCLUSIVE HOLDER REWARDS
                </p>
                <span className="text-2xl sm:text-4xl animate-float" style={{ animationDelay: "0.5s" }}>
                  🦍
                </span>
              </div>
            </div>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Welcome to the most exclusive club in the World Ape ecosystem. Diamond hands get diamond rewards with
              daily APES token airdrops!
            </p>
          </div>

          {/* Tier Cards */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
            {[
              {
                tier: "BRONZE DIAMOND",
                percentage: "1%",
                reward: "1,000",
                color: "#cd7f32",
                icon: "🥉",
                mascot: "/images/mascot-dance.jpg",
              },
              {
                tier: "SILVER DIAMOND",
                percentage: "2%",
                reward: "2,000",
                color: "#c0c0c0",
                icon: "🥈",
                mascot: "/images/mascot-love-large.jpg",
              },
              {
                tier: "GOLD DIAMOND",
                percentage: "3%",
                reward: "3,000",
                color: "#ffd700",
                icon: "🥇",
                mascot: "/images/mascot-stop.jpg",
              },
            ].map((tier, index) => (
              <Card
                key={index}
                className="relative bg-slate-800/80 border-0 p-1 rounded-xl group hover:scale-105 transition-all duration-300"
                style={{
                  background: `linear-gradient(45deg, ${tier.color}20, rgba(0,0,0,0.3))`,
                }}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${tier.color}, ${tier.color}80)`,
                    margin: "-1px",
                    zIndex: -1,
                    filter: "blur(6px)",
                  }}
                />
                <CardContent className="p-6 bg-slate-900/90 rounded-xl text-center">
                  <div className="text-4xl mb-4">{tier.icon}</div>
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-2"
                    style={{
                      color: tier.color,
                      textShadow: `0 0 10px ${tier.color}`,
                    }}
                  >
                    {tier.tier}
                  </h3>
                  <div className="mb-4">
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{
                        color: tier.color,
                        textShadow: `0 0 15px ${tier.color}`,
                      }}
                    >
                      {tier.percentage}
                    </div>
                    <p className="text-gray-400 text-sm">Holdings Required</p>
                  </div>

                  <div className="mb-4">
                    <Image
                      src={tier.mascot || "/placeholder.svg"}
                      alt="Diamond Club Mascot"
                      width={120}
                      height={120}
                      className="mx-auto rounded-lg"
                      style={{
                        filter: `drop-shadow(0 0 15px ${tier.color})`,
                        mixBlendMode: "screen",
                      }}
                    />
                  </div>

                  <div className="bg-slate-800/60 rounded-lg p-4 mb-4">
                    <div className="text-2xl font-bold text-white mb-1">{tier.reward} APES</div>
                    <p className="text-gray-300 text-sm">Daily Airdrop</p>
                  </div>

                  <div className="text-xs text-gray-400">Automatic daily rewards for qualified holders</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How It Works */}
          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-yellow-500/30 backdrop-blur-lg shadow-2xl shadow-yellow-500/20 mb-12 sm:mb-20">
            <CardContent className="p-6 sm:p-10">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">💎 HOW DIAMOND CLUB WORKS</h2>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🔍</span>
                    <div>
                      <h3 className="text-xl font-bold text-yellow-400 mb-2">Automatic Qualification</h3>
                      <p className="text-gray-300">
                        Hold 1%, 2%, or 3% of total supply to automatically qualify for daily APES airdrops.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <h3 className="text-xl font-bold text-green-400 mb-2">Daily Rewards</h3>
                      <p className="text-gray-300">
                        Receive your tier-based APES tokens every 24 hours directly to your wallet.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl">💎</span>
                    <div>
                      <h3 className="text-xl font-bold text-purple-400 mb-2">Diamond Hands Bonus</h3>
                      <p className="text-gray-300">
                        The longer you hold, the more exclusive benefits and surprise bonuses you unlock.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="relative">
                    <div className="relative w-48 h-48 mx-auto mb-4">
                      <div
                        className="w-full h-full rounded-full animate-float"
                        style={{
                          background: "linear-gradient(45deg, #ffd700, #ffff00, #ffa500)",
                          boxShadow: "0 0 40px #ffd700",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">💎</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-lg sm:text-xl mb-4">
                      DIAMOND HANDS ONLY
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm">Exclusive rewards for true believers</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center px-4">
            <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-yellow-500/50 backdrop-blur-lg shadow-2xl shadow-yellow-500/30">
              <CardContent className="p-6 sm:p-12">
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4">READY TO JOIN THE DIAMOND CLUB?</h3>
                  <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Start accumulating World Ape tokens and unlock exclusive daily rewards. The more you hold, the more
                    you earn!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8">
                  <Link href="/chart">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                    >
                      💎 BUY WORLD APE
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold bg-transparent rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                    >
                      ← BACK TO HOME
                    </Button>
                  </Link>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 max-w-3xl mx-auto">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    <span className="text-yellow-400 font-bold">⚠️ Disclaimer:</span> Diamond Club rewards are subject to
                    token availability and project sustainability.
                    <span className="text-cyan-400 font-bold">
                      {" "}
                      Always DYOR and never invest more than you can afford to lose.
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
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

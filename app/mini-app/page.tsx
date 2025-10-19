"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function SpaceApeGamePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Stars Background */}
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

      {/* Hero Section */}
      <section className="relative py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-8 text-center"
            style={{
              color: "white",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(147, 51, 234, 0.4)",
            }}
          >
            Space Ape Game
          </h1>

          <Card
            className="relative bg-slate-800/50 border-0 p-1 rounded-xl mb-8"
            style={{
              background: "linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,255,0.2))",
            }}
          >
            <CardContent className="p-8 bg-slate-900/90 rounded-xl">
              <h2
                className="text-3xl font-bold mb-6 text-center"
                style={{
                  background: "linear-gradient(45deg, #00ffff, #ff00ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Compete, Play, and Earn APE Rewards
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p className="text-center">
                  Welcome to <span className="text-cyan-400 font-bold">Space Ape Game</span> - an exciting 6-day weekly
                  competition where skill meets rewards! Blast through space, collect coins, dodge asteroids, and climb
                  the leaderboard to claim your share of APE tokens.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30">
                    <h3 className="text-xl font-bold text-purple-300 mb-3">🎮 Active Engagement</h3>
                    <p className="text-gray-300">
                      Play daily throughout the 6-day competition cycle. Every game counts as you compete for a spot in
                      the Top 20 leaderboard. The more you play, the better your chances of securing a top position and
                      earning rewards.
                    </p>
                  </div>
                  <div className="bg-pink-900/30 p-6 rounded-lg border border-pink-500/30">
                    <h3 className="text-xl font-bold text-pink-300 mb-3">🚀 Growing Value</h3>
                    <p className="text-gray-300">
                      As APE tokens appreciate in value, your rewards become increasingly attractive. What starts as a
                      fun competition transforms into a lucrative opportunity for skilled players to earn real value.
                    </p>
                  </div>
                  <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-500/30">
                    <h3 className="text-xl font-bold text-cyan-300 mb-3">👥 Community Driven</h3>
                    <p className="text-gray-300">
                      Join a vibrant community of players competing weekly. Share strategies, celebrate victories, and
                      build connections with fellow apes. Weekly announcements on X keep the excitement alive and the
                      community engaged.
                    </p>
                  </div>
                  <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-500/30">
                    <h3 className="text-xl font-bold text-yellow-300 mb-3">⏰ Weekly Reset</h3>
                    <p className="text-gray-300">
                      Every Monday at 0000hrs, a fresh competition begins. Track the countdown timer to know exactly
                      when the current cycle ends and plan your final push to secure or improve your leaderboard
                      position.
                    </p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg border border-purple-500/50">
                  <p className="text-center text-white font-semibold text-xl">
                    💰 The more APE grows, the more valuable your gaming skills become. Start playing today and turn
                    your high scores into real rewards!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Game Preview Section */}
          <Card
            className="relative bg-slate-800/50 border-0 p-1 rounded-xl mb-8"
            style={{
              background: "linear-gradient(45deg, rgba(139,92,246,0.3), rgba(236,72,153,0.3))",
            }}
          >
            <CardContent className="p-8 bg-slate-900/90 rounded-xl">
              <h2
                className="text-2xl font-bold mb-6 text-center"
                style={{
                  background: "linear-gradient(45deg, #a78bfa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Game Preview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Main Menu Screenshot */}
                <div className="rounded-lg overflow-hidden border-2 border-purple-500/50 hover:border-purple-400 transition-all hover:scale-105 transform duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-20%20at%2002.31.50-SuZboOIfc2Sqw7IhmEMbi2hmiHZqbq.jpeg"
                    alt="Space Ape Game Main Menu"
                    className="w-full h-auto"
                  />
                </div>

                {/* Weekly Rewards Screenshot */}
                <div className="rounded-lg overflow-hidden border-2 border-pink-500/50 hover:border-pink-400 transition-all hover:scale-105 transform duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-20%20at%2002.31.51-VkdBlZExsm3IeMQFbCtELPtI7Y1Byg.jpeg"
                    alt="Weekly Rewards Screen"
                    className="w-full h-auto"
                  />
                </div>

                {/* Gameplay Screenshot */}
                <div className="rounded-lg overflow-hidden border-2 border-cyan-500/50 hover:border-cyan-400 transition-all hover:scale-105 transform duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-20%20at%2002.31.51%20%281%29-x6JWyUYXCgE40AyD4kAPiIrVkxcJnf.jpeg"
                    alt="Space Ape Gameplay"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Competition Info */}
          <section className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              <Card
                className="relative bg-slate-800/50 border-0 p-1 rounded-xl mb-8"
                style={{
                  background: "linear-gradient(45deg, rgba(139,92,246,0.3), rgba(236,72,153,0.3))",
                }}
              >
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
                    margin: "-1px",
                    zIndex: -1,
                    filter: "blur(8px)",
                  }}
                />
                <CardContent className="p-8 bg-slate-900/90 rounded-xl">
                  <h2
                    className="text-3xl font-bold mb-6 text-center"
                    style={{
                      background: "linear-gradient(45deg, #a78bfa, #f472b6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 0 20px rgba(167, 139, 250, 0.5)",
                    }}
                  >
                    🏆 Weekly Gaming Competition
                  </h2>
                  <p className="text-center text-gray-300 text-lg mb-8 leading-relaxed">
                    Compete in an intense 6-day gaming marathon where only the best rise to the top. The countdown is
                    ticking - make every game count!
                  </p>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">📅</span>
                      <div>
                        <p className="font-semibold text-white">Competition Period</p>
                        <p>Monday 0000hrs to Saturday 2359hrs - Six full days of competitive gaming action</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <p className="font-semibold text-white">Top 20 Scores Recorded</p>
                        <p>
                          Only the highest 20 scores make it to the leaderboard. Push your limits to secure your spot
                          among the elite players!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">💰</span>
                      <div>
                        <p className="font-semibold text-white">Rewards Distribution</p>
                        <p>
                          Top 10 players receive generous APE token rewards every Sunday. As APE appreciates, so does
                          your prize value!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">📢</span>
                      <div>
                        <p className="font-semibold text-white">Results Announcement</p>
                        <p>
                          Winners celebrated and announced on X (Social Media) every Sunday. Join the community and
                          share in the excitement!
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rewards Table */}
              <Card
                className="relative bg-slate-800/50 border-0 p-1 rounded-xl"
                style={{
                  background: "linear-gradient(45deg, rgba(236,72,153,0.2), rgba(0,0,0,0.3))",
                }}
              >
                <CardContent className="p-8 bg-slate-900/90 rounded-xl">
                  <h2
                    className="text-3xl font-bold mb-6 text-center"
                    style={{
                      background: "linear-gradient(45deg, #f472b6, #fbbf24)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 0 20px rgba(244, 114, 182, 0.5)",
                    }}
                  >
                    💎 Weekly Rewards
                  </h2>
                  <p className="text-center text-gray-300 text-lg mb-6 leading-relaxed">
                    Climb the ranks and claim your share of{" "}
                    <span className="text-yellow-400 font-bold">6,500 APE tokens</span> distributed weekly. As the token
                    value grows, these rewards become increasingly valuable - making every game more rewarding!
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-pink-500/30">
                          <th className="text-left py-4 px-6 text-pink-300 font-bold text-lg">Rank</th>
                          <th className="text-right py-4 px-6 text-pink-300 font-bold text-lg">Reward (APE)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { rank: 1, reward: "2,000" },
                          { rank: 2, reward: "1,500" },
                          { rank: 3, reward: "1,000" },
                          { rank: 4, reward: "800" },
                          { rank: 5, reward: "700" },
                          { rank: 6, reward: "500" },
                          { rank: 7, reward: "400" },
                          { rank: 8, reward: "300" },
                          { rank: 9, reward: "200" },
                          { rank: 10, reward: "100" },
                        ].map((item, index) => (
                          <tr
                            key={index}
                            className="border-b border-slate-700/50 hover:bg-pink-900/20 transition-colors"
                          >
                            <td className="py-4 px-6 text-white font-bold text-lg">{item.rank}</td>
                            <td
                              className="py-4 px-6 text-right font-bold text-lg"
                              style={{
                                color: "#fbbf24",
                                textShadow: "0 0 10px #fbbf24",
                              }}
                            >
                              {item.reward}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </section>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}

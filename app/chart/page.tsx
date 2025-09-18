"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ChartPage() {
  const rocketStages = [
    { marketCap: "10k", burn: "1M", stage: "🚀 Launch", completed: true },
    { marketCap: "25k", burn: "1M", stage: "🌍 Earth Orbit", completed: true },
    { marketCap: "50k", burn: "1M", stage: "🌙 Moon Approach", completed: true },
    { marketCap: "75k", burn: "1M", stage: "🪐 Mars Transit", completed: true },
    { marketCap: "100k", burn: "1M", stage: "⭐ Asteroid Belt", completed: true },
    { marketCap: "125k", burn: "1M", stage: "🌌 Jupiter Orbit", completed: false },
    { marketCap: "150k", burn: "1M", stage: "🛸 Saturn Rings", completed: false },
    { marketCap: "200k", burn: "1M", stage: "🌠 Uranus Pass", completed: false },
    { marketCap: "250k", burn: "1M", stage: "💫 Neptune Zone", completed: false },
    { marketCap: "300k", burn: "1M", stage: "🌟 Deep Space", completed: false },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Animated Stars Background */}
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

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/">
            <Button
              variant="outline"
              className="mb-4 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
            >
              ← Back to Home
            </Button>
          </Link>
          <div className="relative mb-6">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #1a0033, #330066, #0d1b2a)",
                filter: "blur(20px)",
                transform: "scale(1.1)",
              }}
            />
            <div
              className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-8 rounded-2xl border border-purple-500/30"
              style={{
                boxShadow: "0 0 50px rgba(147, 51, 234, 0.3), inset 0 0 50px rgba(0, 255, 255, 0.1)",
              }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🚀</span>
                <h1
                  className="text-4xl md:text-6xl font-bold"
                  style={{
                    background: "linear-gradient(45deg, #9333ea, #00ffff, #ff00ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 30px rgba(147, 51, 234, 0.8)",
                  }}
                >
                  MISSION CONTROL
                </h1>
                <span className="text-4xl">🌌</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xl">🛸</span>
                <p
                  className="text-xl font-semibold"
                  style={{
                    background: "linear-gradient(45deg, #00ffff, #ffffff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  World Ape Space Command Center
                </p>
                <span className="text-xl">🛸</span>
              </div>
              <p className="text-gray-300 text-sm">
                🌟 Live cosmic data • 🔥 Burn mission tracking • 📊 Interstellar analytics
              </p>
            </div>
          </div>
        </div>

        {/* DEX Screener Section */}
        <Card
          className="mb-8 bg-slate-800/50 border-0 p-1 rounded-xl"
          style={{
            background: "rgba(15, 23, 42, 0.9)",
            border: "1px solid rgba(0, 255, 255, 0.3)",
          }}
        >
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              background: "linear-gradient(45deg, #00ffff, #ffffff)",
              margin: "-1px",
              zIndex: -1,
              filter: "blur(8px)",
            }}
          />
          <CardHeader className="bg-slate-900/90 rounded-t-xl">
            <CardTitle
              className="text-2xl font-bold text-center"
              style={{
                color: "#00ffff",
                textShadow: "0 0 20px #00ffff",
              }}
            >
              📊 Live Price Chart
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 bg-slate-900/90 rounded-b-xl">
            <div className="w-full h-[600px] rounded-b-xl overflow-hidden">
              <iframe
                src="https://dexscreener.com/worldchain/0x77a26739f06d9abcf8465aa11ff2f772eb045540?embed=1&theme=dark&trades=0&info=0"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-b-xl"
                title="DEX Screener Chart"
              />
            </div>
          </CardContent>
        </Card>

        {/* Burning Statistics Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card
            className="bg-slate-800/50 border-0 p-1 rounded-xl"
            style={{
              background: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(147, 51, 234, 0.3)",
            }}
          >
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background: "linear-gradient(45deg, #9333ea, #06b6d4)",
                margin: "-1px",
                zIndex: -1,
                filter: "blur(8px)",
              }}
            />
            <CardHeader className="bg-slate-900/90 rounded-t-xl">
              <CardTitle
                className="text-xl font-bold flex items-center gap-2"
                style={{
                  color: "#a855f7",
                  textShadow: "0 0 20px #a855f7",
                }}
              >
                🚀 Rocket Launch Stages
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-slate-900/90 rounded-b-xl">
              <div className="text-center mb-4">
                <div
                  className="text-2xl font-bold mb-2"
                  style={{
                    background: "linear-gradient(45deg, #9333ea, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Market Cap Milestone Burns
                </div>
                <p className="text-gray-300 text-sm">1M APES burned at each stage</p>
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {rocketStages.slice(0, 5).map((stage, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50 border border-purple-500/20"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{stage.stage.split(" ")[0]}</span>
                      <span className="text-sm text-gray-300">${stage.marketCap}</span>
                    </div>
                    {stage.completed ? (
                      <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">BURNED!</Badge>
                    ) : null}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card
            className="bg-slate-800/50 border-0 p-1 rounded-xl"
            style={{
              background: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(255, 0, 255, 0.3)",
            }}
          >
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background: "linear-gradient(45deg, #ff00ff, #ff0000)",
                margin: "-1px",
                zIndex: -1,
                filter: "blur(8px)",
              }}
            />
            <CardHeader className="bg-slate-900/90 rounded-t-xl">
              <CardTitle
                className="text-xl font-bold flex items-center gap-2"
                style={{
                  color: "#ff00ff",
                  textShadow: "0 0 20px #ff00ff",
                }}
              >
                💀 Total Burned
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-slate-900/90 rounded-b-xl">
              <div className="text-center">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{
                    background: "linear-gradient(45deg, #ff00ff, #ff0000)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  5,000,000 APES
                </div>
                <p className="text-gray-300 mb-4">Permanently removed from supply</p>
                <Badge className="bg-red-500/20 text-red-400 border-red-400/30">Deflationary Mechanism</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Burn Transaction Records Section */}
        <Card
          className="mb-8 bg-slate-800/50 border-0 p-1 rounded-xl"
          style={{
            background: "rgba(15, 23, 42, 0.9)",
            border: "1px solid rgba(0, 255, 255, 0.3)",
          }}
        >
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              background: "linear-gradient(45deg, #00ffff, #0066ff)",
              margin: "-1px",
              zIndex: -1,
              filter: "blur(8px)",
            }}
          />
          <CardHeader className="bg-slate-900/90 rounded-t-xl">
            <CardTitle
              className="text-2xl font-bold flex items-center gap-2"
              style={{
                color: "#00ffff",
                textShadow: "0 0 20px #00ffff",
              }}
            >
              🔥 Burn Transaction Records
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 bg-slate-900/90 rounded-b-xl">
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <div className="font-bold text-white">First Launch Burn</div>
                      <div className="text-sm text-gray-400">Market Cap Milestone: $10k</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-400">1,000,000 APES</div>
                    <div className="text-xs text-gray-500">BURNED</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">✅ Verified</Badge>
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌍</span>
                    <div>
                      <div className="font-bold text-white">Earth Orbit Burn</div>
                      <div className="text-sm text-gray-400">Market Cap Milestone: $25k</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-400">1,000,000 APES</div>
                    <div className="text-xs text-gray-500">BURNED</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">✅ Verified</Badge>
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌙</span>
                    <div>
                      <div className="font-bold text-white">Moon Approach Burn</div>
                      <div className="text-sm text-gray-400">Market Cap Milestone: $50k</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-400">1,000,000 APES</div>
                    <div className="text-xs text-gray-500">BURNED</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">✅ Verified</Badge>
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🪐</span>
                    <div>
                      <div className="font-bold text-white">Mars Transit Burn</div>
                      <div className="text-sm text-gray-400">Market Cap Milestone: $75k</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-400">1,000,000 APES</div>
                    <div className="text-xs text-gray-500">BURNED</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">✅ Verified</Badge>
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <div className="font-bold text-white">Asteroid Belt Burn</div>
                      <div className="text-sm text-gray-400">Market Cap Milestone: $100k</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-400">1,000,000 APES</div>
                    <div className="text-xs text-gray-500">BURNED</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">✅ Verified</Badge>
                </div>
              </div>

              <div className="text-center p-6 bg-slate-800/30 rounded-lg border border-dashed border-gray-600">
                <div className="text-3xl mb-2">⏳</div>
                <h3 className="text-lg font-bold text-gray-300 mb-2">Next Burns Coming Soon</h3>
                <p className="text-gray-400 text-sm">
                  Future burn transactions will be recorded here as market cap milestones are reached
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rocket Mission Progress Section */}
        <Card
          className="mb-8 bg-slate-800/50 border-0 p-1 rounded-xl"
          style={{
            background: "rgba(15, 23, 42, 0.9)",
            border: "1px solid rgba(255, 0, 255, 0.3)",
          }}
        >
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              background: "linear-gradient(45deg, #ff00ff, #00ffff)",
              margin: "-1px",
              zIndex: -1,
              filter: "blur(8px)",
            }}
          />
          <CardHeader className="bg-slate-900/90 rounded-t-xl">
            <CardTitle
              className="text-2xl font-bold"
              style={{
                color: "#ff00ff",
                textShadow: "0 0 20px #ff00ff",
              }}
            >
              🚀 Mission Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 bg-slate-900/90 rounded-b-xl">
            <div className="grid md:grid-cols-2 gap-6">
              {rocketStages.map((stage, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    stage.completed ? "bg-green-500/10 border-green-400/30" : "bg-slate-800/50 border-gray-600/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{stage.stage.split(" ")[0]}</span>
                      <div>
                        <div className="font-bold text-white">${stage.marketCap} Market Cap</div>
                        <div className="text-sm text-gray-400">{stage.stage.split(" ").slice(1).join(" ")}</div>
                      </div>
                    </div>
                    {stage.completed && (
                      <div className="text-right">
                        <div className="text-lg font-bold text-red-400">{stage.burn} APES</div>
                        <div className="text-xs text-green-400">BURNED!</div>
                      </div>
                    )}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        stage.completed ? "bg-green-400" : "bg-gray-600"
                      }`}
                      style={{ width: stage.completed ? "100%" : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6 p-4 bg-slate-800/30 rounded-lg">
              <div className="text-4xl mb-2">🌌</div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">Ready for Launch!</h3>
              <p className="text-gray-400">
                Each market cap milestone triggers automatic burns as we journey to the stars
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Rocket Banner Section */}
        <div className="flex justify-center">
          <div className="relative max-w-2xl w-full">
            <img
              src="/images/world-ape-rocket-banner.jpg"
              alt="World Ape Rocket Banner"
              className="w-full h-auto rounded-xl"
              style={{
                filter: "drop-shadow(0 0 30px rgba(255, 0, 255, 0.5))",
                mixBlendMode: "screen",
              }}
            />
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

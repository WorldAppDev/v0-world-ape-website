"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function RoadmapPage() {
  const milestones = [
    {
      phase: "Phase 1",
      title: "Launch & Foundation",
      status: "completed",
      items: ["Token Launch on WorldChain", "Community Building", "Initial Marketing Campaign", "Website & Branding"],
      icon: "🚀",
      color: "#00ffff",
    },
    {
      phase: "Phase 2",
      title: "Burn Mechanics",
      status: "in-progress",
      items: [
        "Automated Burn System",
        "Market Cap Milestones",
        "Rocket Launch Progression",
        "Transaction Verification",
      ],
      icon: "🔥",
      color: "#ff6600",
    },
    {
      phase: "Phase 3",
      title: "Mini App Integration",
      status: "upcoming",
      items: ["World App Mini App", "Daily Airdrop Claims", "World ID Verification", "5-Hour Claim Cycles"],
      icon: "📱",
      color: "#ffff00",
    },
    {
      phase: "Phase 4",
      title: "Community Features",
      status: "in-progress",
      items: ["Diamond Club Rewards", "Tiered Holder Benefits", "Community Governance", "Exclusive NFT Drops"],
      icon: "💎",
      color: "#ff00ff",
    },
    {
      phase: "Phase 5",
      title: "Exchange Listings",
      status: "upcoming",
      items: ["Major CEX Listings", "DEX Partnerships", "Liquidity Expansion", "Trading Competitions"],
      icon: "🏛️",
      color: "#00ff00",
    },
    {
      phase: "Phase 6",
      title: "Ecosystem Expansion",
      status: "upcoming",
      items: ["Cross-Chain Bridge", "DeFi Integrations", "Staking Rewards", "Yield Farming"],
      icon: "🌐",
      color: "#9400d3",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "#00ff00"
      case "in-progress":
        return "#ffff00"
      case "upcoming":
        return "#888888"
      default:
        return "#888888"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "✅ COMPLETED"
      case "in-progress":
        return "🚧 IN PROGRESS"
      case "upcoming":
        return "⏳ PENDING REVIEW"
      default:
        return "PLANNED"
    }
  }

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

      {/* Floating geometric shapes */}
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
              className="w-16 h-16 border-2 rotate-45"
              style={{
                borderColor: ["#ff00ff", "#00ffff", "#ffff00"][Math.floor(Math.random() * 3)],
                boxShadow: `0 0 20px currentColor`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Header Section */}
      <section className="relative py-12 sm:py-20 px-4">
        <div className="container mx-auto text-center">
          <Link href="/" className="inline-block mb-8">
            <Button
              variant="outline"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
            >
              ← Back to Home
            </Button>
          </Link>

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
                src="/images/world-ape-hero.png"
                alt="World Ape Astronaut"
                width={200}
                height={200}
                className="rounded-2xl animate-float bg-slate-900"
                priority
                style={{
                  filter: "drop-shadow(0 0 30px rgba(255, 0, 255, 0.5))",
                }}
              />
            </div>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 px-2"
            style={{
              color: "white",
              background: "linear-gradient(45deg, #00ffff, #ff00ff, #ffff00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            }}
          >
            WORLD APE ROADMAP
          </h1>

          <p
            className="text-xl sm:text-2xl mb-8 font-bold px-2"
            style={{
              color: "#ffff00",
              textShadow: "0 0 20px #ffff00",
            }}
          >
            🚀 Our Journey to the Moon and Beyond! 🌙
          </p>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 px-4 leading-relaxed">
            Follow our cosmic journey as we build the ultimate meme coin ecosystem. From humble beginnings to galactic
            domination, here's how we're taking World Ape to the stars!
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:gap-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Timeline connector */}
                {index < milestones.length - 1 && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-1 h-24 mt-8 z-0"
                    style={{
                      background: `linear-gradient(to bottom, ${milestone.color}, ${milestones[index + 1].color})`,
                      boxShadow: `0 0 10px ${milestone.color}`,
                    }}
                  />
                )}

                <Card
                  className="relative bg-slate-800/50 border-0 p-1 rounded-xl group hover:scale-105 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${milestone.color}20, rgba(0,0,0,0.3))`,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, ${milestone.color}, ${milestone.color}80)`,
                      margin: "-1px",
                      zIndex: -1,
                      filter: "blur(6px)",
                    }}
                  />
                  <CardContent className="p-6 sm:p-8 bg-slate-900/90 rounded-xl">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* Phase Icon */}
                      <div
                        className="text-6xl sm:text-7xl p-4 rounded-full border-4 flex-shrink-0"
                        style={{
                          borderColor: milestone.color,
                          boxShadow: `0 0 20px ${milestone.color}40`,
                          background: `${milestone.color}10`,
                        }}
                      >
                        {milestone.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3
                              className="text-sm font-bold mb-1"
                              style={{
                                color: milestone.color,
                                textShadow: `0 0 10px ${milestone.color}`,
                              }}
                            >
                              {milestone.phase}
                            </h3>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{milestone.title}</h2>
                          </div>
                          <div
                            className="px-4 py-2 rounded-full text-sm font-bold border-2"
                            style={{
                              borderColor: getStatusColor(milestone.status),
                              color: getStatusColor(milestone.status),
                              backgroundColor: `${getStatusColor(milestone.status)}20`,
                              boxShadow: `0 0 10px ${getStatusColor(milestone.status)}40`,
                            }}
                          >
                            {getStatusText(milestone.status)}
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3">
                          {milestone.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-center gap-3 p-3 rounded-lg border"
                              style={{
                                backgroundColor: "rgba(0,0,0,0.3)",
                                borderColor: `${milestone.color}40`,
                              }}
                            >
                              <div
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{
                                  backgroundColor:
                                    milestone.status === "completed"
                                      ? "#00ff00"
                                      : milestone.status === "in-progress"
                                        ? "#ffff00"
                                        : "#888888",
                                  boxShadow: `0 0 8px currentColor`,
                                }}
                              />
                              <span className="text-gray-300 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto text-center">
          <Card
            className="relative bg-slate-800/50 border-0 p-1 rounded-xl max-w-2xl mx-auto"
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
            <CardContent className="p-8 bg-slate-900/90 rounded-xl">
              <h3
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{
                  color: "white",
                  background: "linear-gradient(45deg, #00ffff, #ff00ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ready to Join the Journey?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Be part of the most ambitious meme coin project in the WorldChain ecosystem. Together, we're building
                something extraordinary!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/mini-app">
                  <Button
                    size="lg"
                    className="relative px-8 py-4 text-lg font-bold bg-transparent border-2 text-white overflow-hidden group w-full sm:w-auto"
                    style={{
                      borderColor: "#00ffff",
                      boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
                    }}
                  >
                    <span className="relative z-10">🎁 Claim Airdrops</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </Link>
                <Link href="/diamond-club">
                  <Button
                    variant="outline"
                    size="lg"
                    className="relative px-8 py-4 text-lg font-bold bg-transparent border-2 overflow-hidden group w-full sm:w-auto"
                    style={{
                      borderColor: "#ff00ff",
                      color: "#ff00ff",
                      boxShadow: "0 0 20px rgba(255, 0, 255, 0.5)",
                    }}
                  >
                    <span className="relative z-10">💎 Join Diamond Club</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </Link>
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

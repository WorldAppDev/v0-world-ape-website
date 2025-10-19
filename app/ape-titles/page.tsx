"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Crown } from "lucide-react"
import Image from "next/image"

export default function ApeTitlesPage() {
  const titles = [
    {
      rank: 1,
      title: "FOUNDER",
      payout: "100,000",
      description:
        "The ultimate pioneer. Reserved for the most dedicated ape who holds the largest position and leads the community with vision and strength.",
      image: "/images/founder-ape.png",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      glow: "#fbbf24",
    },
    {
      rank: 2,
      title: "CEO",
      payout: "90,000",
      description:
        "Chief Executive Ape. Commands respect with massive holdings and strategic influence in the World Ape ecosystem.",
      image: "/images/ceo-ape.png",
      gradient: "from-purple-400 via-pink-500 to-red-500",
      glow: "#a855f7",
    },
    {
      rank: 3,
      title: "President",
      payout: "70,000",
      description:
        "Presidential power holder. A top-tier ape with substantial influence and commitment to the mission.",
      image: "/images/president-ape.png",
      gradient: "from-blue-400 via-cyan-500 to-teal-500",
      glow: "#3b82f6",
    },
    {
      rank: 4,
      title: "Visionary",
      payout: "50,000",
      description:
        "Forward-thinking ape who sees the future. Holds significant APE and believes in the long-term moon mission.",
      image: "/images/visionary-ape.png",
      gradient: "from-green-400 via-emerald-500 to-teal-500",
      glow: "#10b981",
    },
    {
      rank: 5,
      title: "Director",
      payout: "40,000",
      description: "Strategic director with strong holdings. Guides the community with wisdom and dedication.",
      image: "/images/director-ape.png",
      gradient: "from-indigo-400 via-purple-500 to-pink-500",
      glow: "#6366f1",
    },
    {
      rank: 6,
      title: "Lead",
      payout: "30,000",
      description:
        "Leading ape in the pack. Demonstrates commitment through substantial holdings and active participation.",
      image: "/images/lead-ape.png",
      gradient: "from-orange-400 via-red-500 to-pink-500",
      glow: "#f97316",
    },
    {
      rank: 7,
      title: "Architect",
      payout: "20,000",
      description: "Builder of the future. Holds strong and helps construct the foundation of the World Ape community.",
      image: "/images/architect-ape.png",
      gradient: "from-cyan-400 via-blue-500 to-indigo-500",
      glow: "#06b6d4",
    },
    {
      rank: 8,
      title: "Strategist",
      payout: "15,000",
      description: "Tactical thinker with solid holdings. Plans for success and executes with precision.",
      image: "/images/strategist-ape.png",
      gradient: "from-lime-400 via-green-500 to-emerald-500",
      glow: "#84cc16",
    },
    {
      rank: 9,
      title: "Innovator",
      payout: "10,000",
      description: "Creative ape bringing fresh ideas. Holds APE and contributes to the ecosystem's growth.",
      image: "/images/innovator-ape.png",
      gradient: "from-fuchsia-400 via-purple-500 to-indigo-500",
      glow: "#d946ef",
    },
    {
      rank: 10,
      title: "Engineer",
      payout: "7,500",
      description: "Technical expert building the infrastructure. Solid holder working behind the scenes.",
      image: "/images/engineer-ape.png",
      gradient: "from-rose-400 via-red-500 to-orange-500",
      glow: "#f43f5e",
    },
    {
      rank: 11,
      title: "Analyst",
      payout: "5,000",
      description: "Data-driven ape analyzing trends. Holds APE and provides valuable insights to the community.",
      image: "/images/analyst-ape.png",
      gradient: "from-sky-400 via-blue-500 to-cyan-500",
      glow: "#0ea5e9",
    },
    {
      rank: 12,
      title: "Community",
      payout: "2,500",
      description: "Essential community member. Every ape starts here and contributes to the collective strength.",
      image: "/images/community-ape.png",
      gradient: "from-amber-400 via-yellow-500 to-orange-500",
      glow: "#f59e0b",
    },
  ]

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

      {/* Floating Shapes */}
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
                borderColor: ["#ff00ff", "#00ffff", "#ffff00", "#ff6600"][Math.floor(Math.random() * 4)],
                boxShadow: `0 0 20px currentColor`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Back Button */}
        <Link href="/">
          <Button
            variant="outline"
            className="mb-6 bg-slate-800/50 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{
              background: "linear-gradient(45deg, #ff6600, #ffff00, #ff6600)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 30px rgba(255, 102, 0, 0.5)",
            }}
          >
            👑 APE TITLES 👑
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Earn prestigious titles and monthly APE payouts based on your holdings. The more APE you hold, the higher
            your rank and rewards!
          </p>
        </div>

        {/* Info Card */}
        <Card
          className="max-w-4xl mx-auto mb-12 bg-slate-800/50 border-0 p-1 rounded-xl"
          style={{
            background: "linear-gradient(45deg, rgba(255,102,0,0.2), rgba(255,255,0,0.2))",
          }}
        >
          <CardContent className="p-6 bg-slate-900/90 rounded-xl">
            <h2 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-2">
              <Crown className="w-6 h-6" />
              How It Works
            </h2>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">•</span>
                <span>
                  <strong className="text-white">Automatic Assignment:</strong> Your title is automatically assigned
                  based on your APE token holdings
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">•</span>
                <span>
                  <strong className="text-white">Monthly Payouts:</strong> Receive monthly APE rewards directly to your
                  wallet based on your title rank
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">•</span>
                <span>
                  <strong className="text-white">Growing Value:</strong> As APE appreciates, your monthly rewards become
                  more valuable over time
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">•</span>
                <span>
                  <strong className="text-white">Community Status:</strong> Higher titles grant you prestige and
                  recognition within the World Ape community
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Titles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {titles.map((item) => {
            return (
              <Card
                key={item.rank}
                className="relative bg-slate-800/50 border-0 p-1 rounded-xl group hover:scale-105 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${item.glow}20, rgba(0,0,0,0.3))`,
                }}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${item.glow}, ${item.glow}80)`,
                    margin: "-1px",
                    zIndex: -1,
                    filter: "blur(8px)",
                  }}
                />
                <CardContent className="p-6 bg-slate-900/90 rounded-xl">
                  <div className="mb-4 flex justify-center">
                    <div
                      className="relative w-32 h-32 rounded-full overflow-hidden"
                      style={{
                        boxShadow: `0 0 30px ${item.glow}`,
                        border: `3px solid ${item.glow}`,
                      }}
                    >
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                  </div>

                  {/* Rank Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="px-3 py-1 rounded-full text-sm font-bold"
                      style={{
                        background: `linear-gradient(135deg, ${item.glow}, ${item.glow}80)`,
                        color: "#000",
                      }}
                    >
                      #{item.rank}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      color: item.glow,
                      textShadow: `0 0 15px ${item.glow}`,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Payout */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-1">Monthly Payout</p>
                    <p
                      className="text-3xl font-bold"
                      style={{
                        background: `linear-gradient(135deg, ${item.glow}, #ffffff)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {item.payout} APE
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <Card
            className="bg-slate-800/50 border-0 p-1 rounded-xl"
            style={{
              background: "linear-gradient(45deg, rgba(255,102,0,0.3), rgba(255,255,0,0.3))",
            }}
          >
            <CardContent className="p-8 bg-slate-900/90 rounded-xl">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Ready to Climb the Ranks?</h3>
              <p className="text-gray-300 mb-6">
                Start accumulating APE tokens today and watch your title and monthly rewards grow as you become a
                legendary member of the World Ape community!
              </p>
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold"
                >
                  Get APE Tokens
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
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

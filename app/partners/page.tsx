"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function PartnersPage() {
  const partners = [
    {
      name: "Dog Shit",
      image: "/images/partners/dog-shit.jpg",
      description: "Dog sniffed shitcoin, then became one",
    },
    {
      name: "Destinity",
      image: "/images/partners/destinity.jpg",
      description: "TechTriad innovation",
    },
    {
      name: "World Dog Community",
      image: "/images/partners/world-dog-community.jpg",
      description: "Meme coins for dogs worldwide",
    },
    {
      name: "Kepler Pay",
      image: "/images/partners/kepler-pay.jpg",
      description: "Smart payment solutions for the future",
    },
    {
      name: "Tribo",
      image: "/images/partners/tribo.jpg",
      description: "Crypto Digital Tribe support",
    },
    {
      name: "Corg Coin",
      image: "/images/partners/corg-coin.jpg",
      description: "World's coolest memecoin community",
    },
    {
      name: "PaVc0in",
      image: "/images/partners/pavc0in.jpg",
      description: "Revolutionary cryptocurrency",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: ["#ff00ff", "#00ffff", "#ffff00", "#ff3366"][Math.floor(Math.random() * 4)],
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Space Background Image */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <Image src="/images/world-ape-neon-1.jpg" alt="Space Background" fill className="object-cover" priority />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Back Button */}
        <Link href="/">
          <Button
            variant="outline"
            className="mb-8 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 bg-transparent"
          >
            ← Back to Home
          </Button>
        </Link>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              background: "linear-gradient(45deg, #ff3366, #ff00ff, #00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 40px rgba(255, 51, 102, 0.5)",
            }}
          >
            APE PARTNERS
          </h1>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              World Ape is building strategic partnerships with innovative projects across the World App ecosystem.
              These partnerships are crucial to our mission of securing capital for our{" "}
              <span className="text-cyan-400 font-bold">Centralized Exchange (CEX) listings</span>.
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Our partner projects are not just collaborators—they are{" "}
              <span className="text-purple-400 font-bold">investors</span> who believe in the World Ape vision.
              Together, we're raising the funds needed to list on major exchanges and bring APE to the masses!
            </p>
            <div
              className="inline-block px-6 py-3 rounded-lg border-2 border-yellow-500 bg-yellow-500/10 mt-4"
              style={{
                boxShadow: "0 0 20px rgba(234, 179, 8, 0.3)",
              }}
            >
              <p className="text-yellow-400 font-bold text-lg">
                🚀 Next Major Milestone: Biconomy Listing - December 2025
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <Card
          className="mb-16 bg-slate-800/50 border-2 border-purple-500/30 backdrop-blur-sm"
          style={{
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)",
          }}
        >
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-400">Why Partner With World Ape?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-slate-900/50 border border-cyan-500/30">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Mutual Growth</h3>
                <p className="text-gray-400">Cross-promotion and shared community building for exponential reach</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-slate-900/50 border border-purple-500/30">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Investment Opportunities</h3>
                <p className="text-gray-400">
                  Early access to APE token allocations and exclusive partnership benefits
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-slate-900/50 border border-pink-500/30">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-pink-400 mb-2">World App Ecosystem</h3>
                <p className="text-gray-400">Leverage the power of World App's growing user base and infrastructure</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Partner Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Strategic Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col">
                <Card
                  className="aspect-square bg-slate-800/50 border-2 border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden"
                  style={{
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <CardContent className="p-0 h-full flex items-center justify-center relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))",
                      }}
                    />
                    <Image
                      src={partner.image || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </CardContent>
                </Card>
                <p className="text-center mt-3 text-white font-semibold text-sm">{partner.name}</p>
              </div>
            ))}
            {[...Array(3)].map((_, index) => (
              <div key={`placeholder-${index}`} className="flex flex-col">
                <Card
                  className="aspect-square bg-slate-800/50 border-2 border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  style={{
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <CardContent className="p-0 h-full flex items-center justify-center relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))",
                      }}
                    />
                    <div className="text-center z-10">
                      <div className="text-6xl mb-2 opacity-50 group-hover:opacity-100 transition-opacity">🦍</div>
                      <p className="text-gray-500 text-sm font-semibold group-hover:text-cyan-400 transition-colors">
                        Partner {partners.length + index + 1}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <p className="text-center mt-3 text-gray-500 font-semibold text-sm">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card
          className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-purple-500/50 backdrop-blur-sm"
          style={{
            boxShadow: "0 0 40px rgba(168, 85, 247, 0.3)",
          }}
        >
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Want to Partner With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the World Ape revolution! We're actively seeking strategic partners who share our vision of
              dominating the World App ecosystem and bringing APE to major exchanges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://t.me/WLD_APE" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-6 text-lg"
                  style={{
                    boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
                  }}
                >
                  📱 Contact Us on Telegram
                </Button>
              </Link>
              <Link href="https://x.com/hellowldcoin" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 font-bold px-8 py-6 text-lg bg-transparent"
                  style={{
                    boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
                  }}
                >
                  🐦 Follow Us on Twitter
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

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

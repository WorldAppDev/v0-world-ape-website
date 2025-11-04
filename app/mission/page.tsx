import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
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

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-60 animate-float" />
        <div
          className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-50 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-40 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <div className="mb-6 sm:mb-8">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/images/mascot-dance.jpg"
                  alt="Dancing Mascot"
                  width={100}
                  height={100}
                  className="animate-float rounded-xl"
                  style={{
                    filter: "drop-shadow(0 0 20px #ff00ff)",
                    mixBlendMode: "screen",
                  }}
                />
              </div>
              <span className="inline-block text-4xl sm:text-6xl mb-4 animate-float">🚀</span>
              <h1
                className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent px-2"
                style={{
                  textShadow: "0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 165, 0, 0.4)",
                  filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.9))",
                }}
              >
                THE MISSION
              </h1>
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
                <span className="text-2xl sm:text-4xl animate-float">🦍</span>
                <p className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  WORLD APE TAKEOVER
                </p>
                <span className="text-2xl sm:text-4xl animate-float" style={{ animationDelay: "0.5s" }}>
                  🌍
                </span>
              </div>
            </div>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Join the most ambitious ape mission in crypto history. We're not just going to the moon – we're taking
              over the entire worldchain ecosystem.
            </p>
          </div>

          <div className="mb-12 sm:mb-20 px-4">
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-cyan-500/30 backdrop-blur-lg shadow-2xl shadow-cyan-500/20">
              <CardContent className="p-6 sm:p-10">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">🎯 MISSION BRIEFING</h2>
                  <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400 mb-2">Primary Mission</h3>
                        <p className="text-gray-300">
                          Create a number 1 MEME coin on worldchain that unite the crypto fans across all various
                          chains. We aim to take over as the official mascot for tokens launched on Worldchain.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-2xl">💎</span>
                      <div>
                        <h3 className="text-xl font-bold text-green-400 mb-2">Daily Operations</h3>
                        <p className="text-gray-300">
                          Giving back to the community for their support and contributions! World ape is about community
                          uniting together to create contents and be rewarded, we offer passive income to the titled
                          apes! simply download the app to join in the rank!
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-2xl">🔥</span>
                      <div>
                        <h3 className="text-xl font-bold text-orange-400 mb-2">Milestone Burns</h3>
                        <p className="text-gray-300">
                          After 2 million market cap, we will have 50,000 apes tokens burns every million that we reach.
                          Our goal is $1, we are comitted to burn our tokens to gain investors!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="relative">
                      <div className="relative w-48 h-48 mx-auto mb-4">
                        <img
                          src="/images/world-ape-rocket.jpg"
                          alt="World Ape Rocket Mission"
                          className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-purple-500/30 animate-float"
                          style={{
                            mixBlendMode: "screen",
                            filter: "brightness(1.1) contrast(1.2) saturate(1.1)",
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
                      </div>
                      <div className="absolute -top-2 -right-2 text-2xl sm:text-3xl animate-bounce">👑</div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-lg sm:text-xl mb-4">
                      DIAMOND CLUB STRONG
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm">Join the strongest ape community in worldchain</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12 sm:mb-20">
            <h2 className="text-4xl font-bold text-center text-white mb-12">🗺️ MISSION ROADMAP</h2>
            <div className="relative">
              {/* Timeline line - hidden on mobile for better readability */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>

              <div className="space-y-8 sm:space-y-12">
                {[
                  {
                    phase: "PHASE 1",
                    title: "Launch & Community Building",
                    icon: "🚀",
                    desc: "Deploy World Ape, build initial community, establish social presence",
                    position: "left",
                    mascot: "/images/mascot-dance.jpg",
                  },
                  {
                    phase: "PHASE 2",
                    title: "Worldchain Domination",
                    icon: "🌍",
                    desc: "Become the top meme coin on worldchain through strategic marketing",
                    position: "right",
                    mascot: "/images/mascot-love-large.jpg",
                  },
                  {
                    phase: "PHASE 3",
                    title: "Burn Protocol Activation",
                    icon: "🔥",
                    desc: "Implement weekly burn mechanism and team buying program",
                    position: "left",
                    mascot: "/images/mascot-stop.jpg",
                  },
                  {
                    phase: "PHASE 4",
                    title: "Moon Mission Complete",
                    icon: "🌙",
                    desc: "Achieve moon status and expand to other chains",
                    position: "right",
                    mascot: "/images/mascot-dance.jpg",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${item.position === "right" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-1/2 ${item.position === "right" ? "pl-8" : "pr-8"}`}>
                      <Card className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl">{item.icon}</span>
                            <div>
                              <span className="text-sm text-cyan-400 font-bold">{item.phase}</span>
                              <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            </div>
                            <div className="ml-auto">
                              <Image
                                src={item.mascot || "/placeholder.svg"}
                                alt="Phase Mascot"
                                width={50}
                                height={50}
                                className="rounded-lg animate-float"
                                style={{
                                  filter: "drop-shadow(0 0 10px #00ffff)",
                                  mixBlendMode: "screen",
                                }}
                              />
                            </div>
                          </div>
                          <p className="text-gray-300">{item.desc}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-slate-900 z-10 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12 sm:mb-20 px-4">
            <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-cyan-500/30 backdrop-blur-lg shadow-2xl shadow-cyan-500/20">
              <CardContent className="p-6 sm:p-10">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">📊 MISSION STATS</h2>
                  <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { label: "Total Supply", value: "100M", icon: "💰", color: "from-yellow-400 to-orange-500" },
                    { label: "Burned Forever", value: "10M", icon: "🔥", color: "from-red-400 to-pink-500" },
                    { label: "Community Airdrop", value: "20M", icon: "🎁", color: "from-green-400 to-cyan-500" },
                    { label: "Mission Progress", value: "∞", icon: "🚀", color: "from-purple-400 to-blue-500" },
                  ].map((stat, index) => (
                    <Card
                      key={index}
                      className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
                        <div
                          className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                        >
                          {stat.value}
                        </div>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center px-4">
            <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-cyan-500/50 backdrop-blur-lg shadow-2xl shadow-cyan-500/30">
              <CardContent className="p-6 sm:p-12">
                <div className="mb-6 sm:mb-8">
                  <div className="mb-6 sm:mb-8">
                    <img
                      src="/images/world-ape-dragon-banner.jpg"
                      alt="World Ape Dragon Banner"
                      className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl shadow-purple-500/30 animate-float"
                      style={{
                        mixBlendMode: "screen",
                        filter: "brightness(1.1) contrast(1.2) saturate(1.1)",
                      }}
                    />
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4">READY TO JOIN THE MISSION?</h3>
                  <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Become part of the strongest ape army in crypto. Together, we'll reach the moon and beyond!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  >
                    🦍 JOIN APE ARMY
                  </Button>
                  <Link href="/">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold bg-transparent rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                    >
                      ← BACK TO HOME
                    </Button>
                  </Link>
                </div>

                <div className="mb-6 flex justify-center">
                  <div className="flex gap-4 justify-center items-center">
                    <a
                      href="https://www.geckoterminal.com/world-chain/pools/APE-WLD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="relative p-3 rounded-lg bg-slate-800/50 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                        <Image
                          src="/images/geckoterminal-logo.png"
                          alt="GeckoTerminal"
                          width={120}
                          height={36}
                          className="rounded"
                          style={{
                            filter: "drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))",
                          }}
                        />
                      </div>
                    </a>
                    <a
                      href="https://dexscreener.com/worldchain/APE-WLD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="relative p-3 rounded-lg bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
                        <Image
                          src="/images/dexscreener-logo.png"
                          alt="DEX Screener"
                          width={40}
                          height={40}
                          className="rounded mx-auto"
                          style={{
                            filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))",
                          }}
                        />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 max-w-3xl mx-auto">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    <span className="text-yellow-400 font-bold">⚠️ Disclaimer:</span> World Ape is a meme coin with no
                    utility or financial expectations. Join for the memes, stay for the ape energy, and remember - this
                    is pure entertainment!
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
    </main>
  )
}

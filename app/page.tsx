"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-8">
        <div
          className="container mx-auto text-center z-10 p-4 sm:p-8 rounded-3xl relative max-w-4xl"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            border: "2px solid rgba(0, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 px-2"
            style={{
              color: "white",
              background: "linear-gradient(45deg, #e2e8f0, #cbd5e1, #94a3b8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.5), 0 4px 8px rgba(0, 0, 0, 0.8)",
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.9))",
            }}
          >
            WORLD APE
          </h1>

          <p
            className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 font-bold animate-bounce px-2"
            style={{
              color: "#ffff00",
              textShadow: "0 0 20px #ffff00, 0 0 40px #ffff00, 0 0 60px #ffff00",
            }}
          >
            🌙 TO THE MOON! 🌙
          </p>

          <div className="mb-6 sm:mb-8 flex justify-center">
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
                width={280}
                height={280}
                className="rounded-2xl animate-float bg-slate-900 sm:w-[350px] sm:h-[350px]"
                priority
                style={{
                  filter: "drop-shadow(0 0 30px rgba(255, 0, 255, 0.5))",
                }}
              />
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto text-gray-300 leading-relaxed px-4">
            The ultimate meme coin with absolutely no purpose or utility. Just pure ape energy on a mission to dominate
            the worldchain crypto space!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Link href="/mission">
              <Button
                size="lg"
                className="relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold bg-transparent border-2 text-white overflow-hidden group w-full sm:w-auto"
                style={{
                  borderColor: "#00ffff",
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
                }}
              >
                <span className="relative z-10">🚀 JOIN THE MISSION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Link href="/chart">
              <Button
                variant="outline"
                size="lg"
                className="relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold bg-transparent border-2 overflow-hidden group w-full sm:w-auto"
                style={{
                  borderColor: "#ffff00",
                  color: "#ffff00",
                  boxShadow: "0 0 20px rgba(255, 255, 0, 0.5)",
                }}
              >
                <span className="relative z-10">📊 VIEW CHART</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Link href="/roadmap">
              <Button
                variant="outline"
                size="lg"
                className="relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold bg-transparent border-2 overflow-hidden group w-full sm:w-auto"
                style={{
                  borderColor: "#ff00ff",
                  color: "#ff00ff",
                  boxShadow: "0 0 20px rgba(255, 0, 255, 0.5)",
                }}
              >
                <span className="relative z-10">🗺️ ROADMAP</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
          </div>

          <Card
            className="relative bg-slate-800/50 backdrop-blur-sm border-0 p-1 rounded-xl mx-4"
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
            <CardContent className="p-3 sm:p-4 bg-slate-900/80 rounded-xl">
              <p className="text-xs sm:text-sm text-gray-400 mb-2">Contract Address:</p>
              <code
                className="font-mono text-xs sm:text-sm break-all"
                style={{
                  color: "#00ffff",
                  textShadow: "0 0 10px #00ffff",
                }}
              >
                0x13e20981D9bd3dC45e99802f06488C5AD7c28360
              </code>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 px-2"
            style={{
              color: "white",
              background: "linear-gradient(45deg, #00ffff, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            }}
          >
            PURE MEME ENERGY
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Space Ape Game",
                desc: "Play our space shooter game and compete for weekly APE rewards! Top 10 players win big.",
                color: "#ff00ff",
                mascot: "/images/mini-app-ape.png",
              },
              {
                title: "Moon Mission",
                desc: "Our astronaut ape is ready to take over the entire crypto space!",
                color: "#00ffff",
                mascot: "/images/mascot-love-large.jpg",
              },
              {
                title: "Tiered Claims",
                desc: "Join the strongest ape community in the worldchain ecosystem!",
                color: "#ffff00",
                mascot: "/images/mascot-dance.jpg",
              },
              {
                title: "APE TITLES",
                desc: "Earn prestigious titles and monthly APE payouts based on your holdings!",
                color: "#ff6600",
                mascot: "/images/mascot-love-large.jpg",
              },
            ].map((item, index) => (
              <Link
                href={
                  item.title === "Tiered Claims"
                    ? "/tiered-claims"
                    : item.title === "Moon Mission"
                      ? "/chart"
                      : item.title === "Space Ape Game"
                        ? "/mini-app"
                        : item.title === "APE TITLES"
                          ? "/ape-titles"
                          : "#"
                }
                key={index}
              >
                <Card
                  className="relative bg-slate-800/50 border-0 p-1 rounded-xl group hover:scale-105 transition-transform duration-300 cursor-pointer"
                  style={{
                    background: `linear-gradient(45deg, ${item.color}20, rgba(0,0,0,0.3))`,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, ${item.color}, ${item.color}80)`,
                      margin: "-1px",
                      zIndex: -1,
                      filter: "blur(6px)",
                    }}
                  />
                  <CardContent className="p-6 bg-slate-900/80 rounded-xl">
                    <div className="relative mb-4">
                      <Image
                        src={item.mascot || "/placeholder.svg"}
                        alt="World Ape Mascot"
                        width={150}
                        height={150}
                        className="mx-auto rounded-lg"
                        style={{
                          filter: `drop-shadow(0 0 15px ${item.color})`,
                          mixBlendMode: "screen",
                        }}
                      />
                    </div>
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-2"
                      style={{
                        color: item.color,
                        textShadow: `0 0 10px ${item.color}`,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center px-2"
            style={{
              color: "white",
              background: "linear-gradient(45deg, #ffff00, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 20px rgba(255, 255, 0, 0.5)",
            }}
          >
            TOKENOMICS
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card
              className="relative bg-slate-800/50 border-0 p-1 rounded-xl mb-6 sm:mb-8 mx-4"
              style={{
                background: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(0, 255, 255, 0.3)",
              }}
            >
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: "linear-gradient(45deg, #ff6600, #ffff00, #00ffff, #ff6600)",
                  margin: "-1px",
                  zIndex: -1,
                  filter: "blur(8px)",
                }}
              />
              <CardContent className="p-6 bg-slate-900/90 rounded-xl">
                <div className="text-center mb-6 sm:mb-8">
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-2"
                    style={{
                      color: "#ffff00",
                      textShadow: "0 0 20px #ffff00",
                    }}
                  >
                    Total Supply
                  </h3>
                  <p
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{
                      background: "linear-gradient(45deg, #ff00ff, #00ffff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 0 30px rgba(255, 0, 255, 0.8)",
                    }}
                  >
                    100,000,000 APE
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-4">
                    {[
                      { label: "Airdrop", percent: "20%", color: "#ffff00" },
                      { label: "Team", percent: "10%", color: "#00ff00" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 rounded-lg border-2"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.5)",
                          borderColor: item.color,
                          boxShadow: `0 0 15px ${item.color}40`,
                        }}
                      >
                        <span className="text-white font-semibold">{item.label}</span>
                        <span
                          className="font-bold"
                          style={{
                            color: item.color,
                            textShadow: `0 0 10px ${item.color}`,
                          }}
                        >
                          {item.percent}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Marketing", percent: "10%", color: "#ff00ff" },
                      { label: "Burned Forever", percent: "10%", color: "#ff0000" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 rounded-lg border-2"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.5)",
                          borderColor: item.color,
                          boxShadow: `0 0 15px ${item.color}40`,
                        }}
                      >
                        <span className="text-white font-semibold">{item.label}</span>
                        <span
                          className="font-bold"
                          style={{
                            color: item.color,
                            textShadow: `0 0 10px ${item.color}`,
                          }}
                        >
                          {item.percent}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 px-2"
            style={{
              color: "white",
              background: "linear-gradient(45deg, #ff00ff, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 20px rgba(255, 0, 255, 0.5)",
            }}
          >
            JOIN THE APE ARMY
          </h2>

          <div className="mb-8 flex justify-center">
            <Image
              src="/images/mascot-love-large.jpg"
              alt="Love Mascot"
              width={300}
              height={300}
              className="rounded-xl"
              style={{
                filter: "drop-shadow(0 0 20px #ff69b4)",
                mixBlendMode: "screen",
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
            <Link href="https://x.com/hellowldcoin" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="relative bg-transparent border-2 text-white px-8 py-4 overflow-hidden group w-full sm:w-auto"
                style={{
                  borderColor: "#1da1f2",
                  boxShadow: "0 0 20px rgba(29, 161, 242, 0.5)",
                }}
              >
                <span className="relative z-10">🐦 Twitter</span>
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Link href="https://t.me/WLD_APE" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="relative bg-transparent border-2 text-white px-8 py-4 overflow-hidden group w-full sm:w-auto"
                style={{
                  borderColor: "#0088cc",
                  boxShadow: "0 0 20px rgba(0, 136, 204, 0.5)",
                }}
              >
                <span className="relative z-10">📱 Telegram</span>
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Ready to go bananas? Join our community of space apes and help us conquer the worldchain!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 border-t border-slate-700">
        <div className="container mx-auto text-center">
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.geckoterminal.com/world-chain/pools/0x77a26739f06d9abcf8465aa11ff2f772eb045540"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative p-4 rounded-xl bg-slate-800/50 border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 w-64 h-20 flex items-center justify-center">
                <div className="absolute inset-2 bg-white rounded-lg" />
                <Image
                  src="/images/geckoterminal-logo.png"
                  alt="GeckoTerminal - APE/WLD Price"
                  width={240}
                  height={50}
                  className="relative z-10 object-contain"
                  style={{
                    filter: "drop-shadow(0 0 15px rgba(147, 51, 234, 0.5))",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
            <a
              href="https://dexscreener.com/worldchain/APE-WLD"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative p-4 rounded-xl bg-slate-800/50 border-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:scale-105 w-64 h-20 flex flex-col items-center justify-center">
                <Image
                  src="/images/dexscreener-logo.png"
                  alt="DEX Screener - WORLD APE / WLD"
                  width={40}
                  height={40}
                  className="rounded-lg"
                  style={{
                    filter: "drop-shadow(0 0 15px rgba(6, 182, 212, 0.5))",
                  }}
                />
                <p className="text-cyan-400 font-bold text-xs mt-1">DEX Screener</p>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          </div>

          <p
            className="mb-4 text-base sm:text-lg px-4 font-medium"
            style={{
              color: "#cbd5e1",
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.7)",
            }}
          >
            @ September 2025 World Ape. This is a meme coin with no intrinsic value or expectation of financial return.
          </p>
        </div>
      </footer>

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

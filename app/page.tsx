"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  Gamepad2,
  ExternalLink,
  Trophy,
  Gift,
  Sparkles,
  Users,
  Shield,
  TrendingUp,
  Flame,
  Lock,
  Coins,
  ChevronRight,
} from "lucide-react"

export default function HomePage() {
  const [activeGame, setActiveGame] = useState(0)
  const [activeStaking, setActiveStaking] = useState(false)

  const games = [
    {
      title: "DIAMOND HUNT",
      desc: "Flip cards to find diamonds. 1 Diamond = 1 WLD reward.",
      img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.27-34zrH5rr5xKLcEFVEsCUUXLpWWmGhG.jpeg",
      badge: "1 WLD / Diamond",
      color: "from-yellow-500/20 to-yellow-900/5",
      border: "group-hover:border-yellow-500/50",
    },
    {
      title: "PARTY RHYTHM",
      desc: "Free to play rhythm game. Tap the beat and climb the weekly leaderboard.",
      img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.28-Edw6SNRSf6LvARdyPMTUh7DMpJaYXH.jpeg",
      badge: "Free to Play",
      color: "from-purple-500/20 to-purple-900/5",
      border: "group-hover:border-purple-500/50",
    },
    {
      title: "SPACE APE",
      desc: "Dodge asteroids, collect coins and compete for 10 WLD weekly.",
      img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.27%20%281%29-XzIbhKukqvXZgkOBbaJ9lkoyLvr7pV.jpeg",
      badge: "10 WLD Weekly",
      color: "from-blue-500/20 to-blue-900/5",
      border: "group-hover:border-blue-500/50",
    },
    {
      title: "LUCKY WHEEL",
      desc: "Spin the wheel and win up to 10 WLD instantly.",
      img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.26-1E3EeJFriTuYHaVphh3iaxVPIgqmV0.jpeg",
      badge: "Win 1–10 WLD",
      color: "from-green-500/20 to-green-900/5",
      border: "group-hover:border-green-500/50",
    },
  ]

  const tokenomics = [
    { label: "LOCKED", percent: "50%", sub: "PUF Wallet", icon: Lock, color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
    { label: "CIRCULATION", percent: "32.27%", sub: "Trading", icon: Coins, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
    { label: "DEV HOLDING", percent: "10%", sub: "Team", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
    { label: "BURNT", percent: "7.73%", sub: "Burned forever", icon: Flame, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
  ]

  const poolStats = [
    { label: "TOTAL STAKED", value: "3,498,250", sub: "APE", icon: Coins },
    { label: "STAKERS", value: "1,673", sub: "Active", icon: Users },
    { label: "TVL", value: "$18.04M", sub: "Locked", icon: TrendingUp },
    { label: "APY RATE", value: "49.5%", sub: "Annual", icon: Shield },
    { label: "DISTRIBUTION", value: "11.5M", sub: "APE Pool", icon: Gift },
    { label: "REWARD RESERVE", value: "10.3M", sub: "Remaining", icon: Sparkles },
  ]

  return (
    <main className="min-h-screen">

      {/* ─── HEADER ─── */}
      <header className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/30">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/world-ape-hero.png" alt="World Ape" width={38} height={38} className="rounded-full ring-2 ring-primary/30" />
            <span className="font-black text-xl tracking-tight text-white">WORLD APE</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/roadmap" className="text-sm font-semibold text-white/60 hover:text-white transition-colors">ROADMAP</Link>
            <Link href="/chart" className="text-sm font-semibold text-white/60 hover:text-white transition-colors">CHART</Link>
            <a href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-black hover:bg-primary/90 font-black px-6">PLAY NOW</Button>
            </a>
          </nav>
          <a href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c" target="_blank" rel="noopener noreferrer" className="md:hidden">
            <Button size="sm" className="bg-primary text-black font-black">PLAY</Button>
          </a>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative py-20 md:py-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto max-w-4xl relative">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-primary/30 rounded-full scale-150 animate-pulse" />
              <Image src="/images/world-ape-hero.png" alt="World Ape" width={130} height={130} className="rounded-3xl relative ring-4 ring-primary/30 shadow-2xl shadow-primary/20" priority />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-3 tracking-tight drop-shadow-lg">WORLD APE</h1>
          <p className="text-lg md:text-xl text-primary font-bold mb-4 tracking-widest">THE #1 GAMING PLATFORM ON WORLD CHAIN</p>
          <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">Play free games, earn APE tokens, and compete for 20 WLD in weekly prizes.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 w-full sm:w-auto text-base px-8 font-black">
                <Gamepad2 className="mr-2 h-5 w-5" />PLAY NOW
              </Button>
            </a>
            <Link href="/roadmap">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 font-bold border-white/20 text-white hover:bg-white/10">VIEW ROADMAP</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div className="border-y border-white/10 backdrop-blur-sm bg-black/20 py-5 px-4">
        <div className="container mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { val: "20 WLD", label: "Weekly Rewards" },
            { val: "49.5%", label: "Staking APY" },
            { val: "1,673", label: "Active Stakers" },
            { val: "4", label: "Games Available" },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-black text-primary">{s.val}</p>
              <p className="text-xs text-white/50 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── MAIN CONTENT GRID ─── */}
      <div className="container mx-auto w-full max-w-7xl px-3 md:px-4 py-8 md:py-12 space-y-6 md:space-y-10">

        {/* ── GAMES ── */}
        <section>
          <h2 className="text-xl md:text-3xl font-black text-white mb-4 md:mb-6 tracking-tight">FEATURED GAMES</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
            {games.map((game, i) => (
              <div
                key={i}
                className={`group relative rounded-lg md:rounded-2xl border border-white/10 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-gradient-to-b ${game.color} ${game.border}`}
                onClick={() => setActiveGame(i)}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image src={game.img} alt={game.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-1 left-1 md:top-2 md:left-2 text-[8px] md:text-[10px] font-black bg-primary text-black px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">{game.badge}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                    <p className="text-[9px] md:text-xs font-black text-white tracking-wide">{game.title}</p>
                    <p className="text-[7px] md:text-[10px] text-white/60 mt-0.5 leading-tight line-clamp-2">{game.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EARN + REWARDS bento row ── */}
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">

          {/* How to Earn */}
          <div className="md:col-span-1 rounded-lg md:rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-4 md:p-6">
            <h2 className="text-base md:text-lg font-black text-white mb-3 md:mb-5 tracking-tight">HOW TO EARN</h2>
            <div className="space-y-2 md:space-y-3">
              {[
                { icon: Gift, title: "DAILY CLAIM", desc: "5 APE every 24h", color: "text-green-400", bg: "bg-green-500/10" },
                { icon: Sparkles, title: "PARTY GAME", desc: "Free to play", color: "text-purple-400", bg: "bg-purple-500/10" },
                { icon: Gamepad2, title: "SPACE APE", desc: "Free to play", color: "text-blue-400", bg: "bg-blue-500/10" },
                { icon: Trophy, title: "LUCKY WHEEL", desc: "Win 1–10 WLD", color: "text-yellow-400", bg: "bg-yellow-500/10" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg md:rounded-xl border border-white/5 hover:border-white/15 transition-colors group cursor-default">
                  <div className={`w-7 h-7 md:w-9 md:h-9 rounded-lg md:rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`h-3 w-3 md:h-4 md:w-4 ${item.color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] md:text-xs font-bold text-white truncate">{item.title}</p>
                    <p className="text-[9px] md:text-[11px] text-white/50 truncate">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Rewards */}
          <div className="md:col-span-2 rounded-lg md:rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-4 md:p-6">
            <h2 className="text-base md:text-lg font-black text-white mb-3 md:mb-5 tracking-tight">WEEKLY REWARDS</h2>
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { title: "PARTY RHYTHM GAME", prize: "10 WLD", desc: "Top scorer each week", color: "border-purple-500/30 hover:border-purple-500/60 from-purple-500/10" },
                { title: "SPACE APE GAME", prize: "10 WLD", desc: "Top scorer each week", color: "border-blue-500/30 hover:border-blue-500/60 from-blue-500/10" },
              ].map((r, i) => (
                <div key={i} className={`rounded-lg md:rounded-xl border bg-gradient-to-br ${r.color} to-transparent p-4 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-yellow-500/10 flex items-center justify-center mb-2 md:mb-3">
                    <Trophy className="h-5 w-5 md:h-7 md:w-7 text-yellow-400" />
                  </div>
                  <p className="text-2xl md:text-4xl font-black text-primary mb-0.5 md:mb-1">{r.prize}</p>
                  <p className="text-[10px] md:text-xs font-bold text-white tracking-wide">{r.title}</p>
                  <p className="text-[8px] md:text-[11px] text-white/40 mt-0.5 md:mt-1">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── STAKING bento row ── */}
        <div className="grid lg:grid-cols-5 gap-3 md:gap-4">

          {/* APY Card */}
          <div className="lg:col-span-2 rounded-lg md:rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-black/30 backdrop-blur-sm p-4 md:p-6 flex flex-col items-center justify-center text-center">
            <Shield className="h-7 w-7 md:h-10 md:w-10 text-primary mb-2 md:mb-3" />
            <p className="text-5xl md:text-7xl font-black text-primary leading-none">49.5%</p>
            <p className="text-lg md:text-xl font-bold text-white mt-0.5 md:mt-1">APY</p>
            <p className="text-[9px] md:text-xs text-white/50 mt-1 md:mt-2">60 DAYS LOCKUP</p>
            <div className="mt-4 md:mt-6 w-full space-y-1.5 md:space-y-2 text-left">
              {["Stake APE in ANI", "Lock 60 days", "Earn rewards"].map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary/20 text-primary text-[8px] md:text-[10px] font-black flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-[9px] md:text-xs text-white/60">{s}</span>
                </div>
              ))}
            </div>
            <a href="https://worldcoin.org/mini-app?app_id=app_4593f73390a9843503ec096086b43612&app_mode=mini-app" target="_blank" rel="noopener noreferrer" className="w-full mt-4 md:mt-6">
              <Button className="w-full bg-primary text-black hover:bg-primary/90 font-black text-xs md:text-sm py-2 md:py-3">
                OPEN ANI <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </a>
          </div>

          {/* Pool Stats */}
          <div className="lg:col-span-3 rounded-lg md:rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-4 md:p-6">
            <div className="flex items-center justify-between mb-3 md:mb-5">
              <h2 className="text-base md:text-lg font-black text-white tracking-tight">APE STAKING POOL #35</h2>
              <span className="text-[8px] md:text-[10px] font-bold bg-primary/20 text-primary px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">LIVE</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-5">
              {poolStats.map((stat, i) => (
                <div key={i} className="rounded-lg md:rounded-xl border border-white/8 bg-white/5 p-2 md:p-4 hover:bg-white/10 transition-colors">
                  <stat.icon className="h-3 w-3 md:h-4 md:w-4 text-primary mb-1 md:mb-2" />
                  <p className="text-sm md:text-lg font-black text-primary">{stat.value}</p>
                  <p className="text-[8px] md:text-[10px] text-white/50 font-semibold">{stat.label}</p>
                  <p className="text-[8px] text-white/30">{stat.sub}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="rounded-lg md:rounded-xl overflow-hidden border border-white/10 h-20 md:h-28">
                <img src="/staking-pool-1.jpg" alt="Staking Pool" className="w-full h-full object-cover object-top" />
              </div>
              <div className="rounded-lg md:rounded-xl overflow-hidden border border-white/10 h-20 md:h-28">
                <img src="/staking-pool-2.jpg" alt="Staking Stats" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>

        {/* ── TOKENOMICS + PUF WALLET ── */}
        <div className="grid lg:grid-cols-5 gap-3 md:gap-4">
          <div className="lg:col-span-3 rounded-lg md:rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-4 md:p-6">
            <div className="flex items-center justify-between mb-3 md:mb-5">
              <div>
                <h2 className="text-base md:text-lg font-black text-white">TOKENOMICS</h2>
                <p className="text-[8px] md:text-xs text-white/40">Total: 100M APE</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-5">
              {tokenomics.map((item, i) => (
                <div key={i} className={`rounded-lg md:rounded-xl border ${item.bg} p-3 md:p-4 hover:scale-[1.02] transition-transform cursor-default`}>
                  <item.icon className={`h-4 w-4 md:h-5 md:w-5 ${item.color} mb-1 md:mb-2`} />
                  <p className={`text-2xl md:text-3xl font-black ${item.color}`}>{item.percent}</p>
                  <p className="text-[10px] md:text-xs font-bold text-white mt-0.5 md:mt-1">{item.label}</p>
                  <p className="text-[8px] text-white/40">{item.sub}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg md:rounded-xl border border-green-500/20 bg-green-500/5 p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[10px] md:text-xs font-bold text-white">TOKENS LOCKED IN PUF</p>
                <p className="text-[8px] md:text-[11px] text-white/40 mt-0.5">50% secured for transparency</p>
              </div>
              <a href="https://worldcoin.org/mini-app?app_id=app_e5ba7c3061400e361f98ce44d8b1b9c4&app_mode=mini-app" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <Button size="sm" className="bg-green-500 hover:bg-green-400 text-black font-black text-[9px] md:text-xs py-1 md:py-2 px-2 md:px-3 whitespace-nowrap">VIEW <ExternalLink className="ml-0.5 md:ml-1 h-2.5 w-2.5 md:h-3 md:w-3" /></Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-lg md:rounded-2xl overflow-hidden border border-white/10 relative group h-32 md:h-auto">
            <img src="/puf-wallet.jpg" alt="PUF Wallet" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
              <p className="text-[8px] md:text-xs font-black text-white tracking-widest mb-1 md:mb-2">PUF WALLET</p>
              <a href="https://worldcoin.org/mini-app?app_id=app_e5ba7c3061400e361f98ce44d8b1b9c4&app_mode=mini-app" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="w-full bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-bold text-[9px] md:text-xs py-1 md:py-2">
                  OPEN <ExternalLink className="ml-0.5 md:ml-1 h-2.5 w-2.5 md:h-3 md:w-3" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* ── WORLDCHAIN MINI-APP + TOP FANS ── */}
        <div className="w-full grid md:grid-cols-2 gap-3 md:gap-4 overflow-hidden">
          <div className="rounded-lg md:rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-4 md:p-6 min-w-0">
            <h2 className="text-base md:text-lg font-black text-white mb-2 md:mb-4 tracking-tight truncate">PLAY ON WORLDCHAIN</h2>
            <p className="text-[9px] md:text-xs text-white/50 mb-3 md:mb-4 line-clamp-2">Available on Worldchain ecosystem</p>
            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-5 w-full">
              <div className="rounded-lg md:rounded-xl overflow-hidden border border-white/10 hover:border-primary/40 transition-colors w-full">
                <img src="/worldapp-card-1.jpg" alt="World Ape Mini-App" className="w-full h-auto md:h-24 object-cover object-center" />
              </div>
              <div className="rounded-lg md:rounded-xl overflow-hidden border border-white/10 hover:border-primary/40 transition-colors w-full">
                <img src="/worldapp-card-2.jpg" alt="Space Apes on Worldchain" className="w-full h-auto md:h-24 object-cover object-center" />
              </div>
            </div>
            <a href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c" target="_blank" rel="noopener noreferrer" className="w-full block">
              <Button className="w-full bg-primary text-black hover:bg-primary/90 font-black text-xs md:text-sm py-2 md:py-3 truncate">
                <Sparkles className="mr-1.5 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />OPEN
              </Button>
            </a>
          </div>

          <div className="rounded-lg md:rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-4 md:p-6 min-w-0">
            <h2 className="text-base md:text-lg font-black text-white mb-2 md:mb-4 tracking-tight truncate">TOP APE FANS</h2>
            <div className="space-y-2 md:space-y-3">
              <p className="text-[9px] md:text-xs text-white/50 leading-relaxed line-clamp-3">Join the leaderboard. Compete with the community for top spots.</p>
              {[
                { icon: Users, text: "Custom avatars" },
                { icon: Trophy, text: "Live rankings" },
                { icon: Shield, text: "World ID verified" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3 min-w-0">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                  </div>
                  <p className="text-[9px] md:text-xs text-white/70 truncate">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/* ── GAMES ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight">FEATURED GAMES</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {games.map((game, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl border border-white/10 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-gradient-to-b ${game.color} ${game.border}`}
                onClick={() => setActiveGame(i)}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image src={game.img} alt={game.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-2 left-2 text-[10px] font-black bg-primary text-black px-2 py-1 rounded-full">{game.badge}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-xs font-black text-white tracking-wide">{game.title}</p>
                    <p className="text-[10px] text-white/60 mt-0.5 leading-tight">{game.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EARN + REWARDS bento row ── */}
        <div className="grid md:grid-cols-3 gap-4">

          {/* How to Earn */}
          <div className="md:col-span-1 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-6">
            <h2 className="text-lg font-black text-white mb-5 tracking-tight">HOW TO EARN</h2>
            <div className="space-y-3">
              {[
                { icon: Gift, title: "DAILY CLAIM", desc: "5 APE every 24h", color: "text-green-400", bg: "bg-green-500/10" },
                { icon: Sparkles, title: "PARTY GAME", desc: "Free to play", color: "text-purple-400", bg: "bg-purple-500/10" },
                { icon: Gamepad2, title: "SPACE APE", desc: "Free to play", color: "text-blue-400", bg: "bg-blue-500/10" },
                { icon: Trophy, title: "LUCKY WHEEL", desc: "Win 1–10 WLD", color: "text-yellow-400", bg: "bg-yellow-500/10" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:border-white/15 transition-colors group cursor-default">
                  <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{item.title}</p>
                    <p className="text-[11px] text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Rewards */}
          <div className="md:col-span-2 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-6">
            <h2 className="text-lg font-black text-white mb-5 tracking-tight">WEEKLY REWARDS</h2>
            <div className="grid sm:grid-cols-2 gap-4 h-[calc(100%-3rem)]">
              {[
                { title: "PARTY RHYTHM GAME", prize: "10 WLD", desc: "Top scorer each week", color: "border-purple-500/30 hover:border-purple-500/60 from-purple-500/10" },
                { title: "SPACE APE GAME", prize: "10 WLD", desc: "Top scorer each week", color: "border-blue-500/30 hover:border-blue-500/60 from-blue-500/10" },
              ].map((r, i) => (
                <div key={i} className={`rounded-xl border bg-gradient-to-br ${r.color} to-transparent p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center mb-3">
                    <Trophy className="h-7 w-7 text-yellow-400" />
                  </div>
                  <p className="text-4xl font-black text-primary mb-1">{r.prize}</p>
                  <p className="text-xs font-bold text-white tracking-wide">{r.title}</p>
                  <p className="text-[11px] text-white/40 mt-1">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── STAKING bento row ── */}
        <div className="grid lg:grid-cols-5 gap-4">

          {/* APY Card */}
          <div className="lg:col-span-2 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-black/30 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center">
            <Shield className="h-10 w-10 text-primary mb-3" />
            <p className="text-7xl font-black text-primary leading-none">49.5%</p>
            <p className="text-xl font-bold text-white mt-1">APY</p>
            <p className="text-xs text-white/50 mt-2">60 DAYS LOCKUP PERIOD</p>
            <div className="mt-6 w-full space-y-2 text-left">
              {["Stake APE in ANI Wallet", "Lock for 60 days", "Earn rewards automatically"].map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center">{i + 1}</span>
                  <span className="text-xs text-white/60">{s}</span>
                </div>
              ))}
            </div>
            <a href="https://worldcoin.org/mini-app?app_id=app_4593f73390a9843503ec096086b43612&app_mode=mini-app" target="_blank" rel="noopener noreferrer" className="w-full mt-6">
              <Button className="w-full bg-primary text-black hover:bg-primary/90 font-black text-sm">
                OPEN ANI WALLET <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Pool Stats */}
          <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-black text-white tracking-tight">APE STAKING POOL #35</h2>
              <span className="text-[10px] font-bold bg-primary/20 text-primary px-2 py-1 rounded-full">LIVE</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
              {poolStats.map((stat, i) => (
                <div key={i} className="rounded-xl border border-white/8 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                  <stat.icon className="h-4 w-4 text-primary mb-2" />
                  <p className="text-lg font-black text-primary">{stat.value}</p>
                  <p className="text-[10px] text-white/50 font-semibold">{stat.label}</p>
                  <p className="text-[10px] text-white/30">{stat.sub}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img src="/staking-pool-1.jpg" alt="Staking Pool" className="w-full h-28 object-cover object-top" />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img src="/staking-pool-2.jpg" alt="Staking Stats" className="w-full h-28 object-cover object-top" />
              </div>
            </div>
          </div>
        </div>

        {/* ── TOKENOMICS + PUF WALLET ── */}
        <div className="grid lg:grid-cols-5 gap-4">
          <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg font-black text-white">TOKENOMICS</h2>
                <p className="text-xs text-white/40">Total Supply: 100,000,000 APE</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {tokenomics.map((item, i) => (
                <div key={i} className={`rounded-xl border ${item.bg} p-4 hover:scale-[1.02] transition-transform cursor-default`}>
                  <item.icon className={`h-5 w-5 ${item.color} mb-2`} />
                  <p className={`text-3xl font-black ${item.color}`}>{item.percent}</p>
                  <p className="text-xs font-bold text-white mt-1">{item.label}</p>
                  <p className="text-[10px] text-white/40">{item.sub}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-white">TOKENS LOCKED IN PUF WALLET</p>
                <p className="text-[11px] text-white/40 mt-0.5">50% securely locked on Worldchain for transparency</p>
              </div>
              <a href="https://worldcoin.org/mini-app?app_id=app_e5ba7c3061400e361f98ce44d8b1b9c4&app_mode=mini-app" target="_blank" rel="noopener noreferrer" className="shrink-0">
                <Button size="sm" className="bg-green-500 hover:bg-green-400 text-black font-black text-xs">VIEW LOCK <ExternalLink className="ml-1 h-3 w-3" /></Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/10 relative group">
            <img src="/puf-wallet.jpg" alt="PUF Wallet" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-black text-white tracking-widest mb-2">PUF WALLET</p>
              <a href="https://worldcoin.org/mini-app?app_id=app_e5ba7c3061400e361f98ce44d8b1b9c4&app_mode=mini-app" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="w-full bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-bold text-xs">
                  OPEN PUF WALLET <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* ── WORLDCHAIN MINI-APP + TOP FANS ── */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-6">
            <h2 className="text-lg font-black text-white mb-4 tracking-tight">PLAY ON WORLDCHAIN</h2>
            <p className="text-xs text-white/50 mb-4">World Ape is officially available as a mini-app on Worldchain</p>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="rounded-xl overflow-hidden border border-white/10 hover:border-primary/40 transition-colors">
                <img src="/worldapp-card-1.jpg" alt="World Ape Mini-App" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 hover:border-primary/40 transition-colors">
                <img src="/worldapp-card-2.jpg" alt="Space Apes on Worldchain" className="w-full h-full object-cover" />
              </div>
            </div>
            <a href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-primary text-black hover:bg-primary/90 font-black">
                <Sparkles className="mr-2 h-4 w-4" />OPEN ON WORLDCHAIN
              </Button>
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-6">
            <h2 className="text-lg font-black text-white mb-4 tracking-tight">TOP APE FANS</h2>
            <div className="flex gap-4">
              <div className="flex-1 space-y-3">
                <p className="text-xs text-white/50 leading-relaxed">Join the leaderboard and showcase your APE holdings. Compete with the community for top spots.</p>
                {[
                  { icon: Users, text: "Custom profile avatars" },
                  { icon: Trophy, text: "Live rankings weekly" },
                  { icon: Shield, text: "World ID verified" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs text-white/70 font-medium">{item.text}</span>
                  </div>
                ))}
                <a href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c" target="_blank" rel="noopener noreferrer" className="block pt-2">
                  <Button className="w-full bg-primary text-black hover:bg-primary/90 font-black text-sm">
                    VIEW LEADERBOARD <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div className="w-36 rounded-xl overflow-hidden border border-white/10 shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.28%20%281%29-IT7tnHmTRZmamisza7BNVPlhGd6AS6.jpeg"
                  alt="Top Ape Fans"
                  width={144}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── LIVE CHART ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-black text-white">LIVE PRICE CHART</h2>
              <p className="text-xs text-white/40">APE/WLD on World Chain</p>
            </div>
            <a href="https://dexscreener.com/worldchain/0x77a26739f06d9abcf8465aa11ff2f772eb045540" target="_blank" rel="noopener noreferrer" className="text-xs text-white/50 hover:text-white flex items-center gap-1 transition-colors">
              DEX Screener <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://dexscreener.com/worldchain/0x77a26739f06d9abcf8465aa11ff2f772eb045540?embed=1&theme=dark&info=0"
              className="w-full h-[450px]"
              title="DEX Screener Chart"
            />
          </div>
        </section>

        {/* ── CONTRACT ── */}
        <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-5 text-center">
          <p className="text-[10px] font-black text-white/40 tracking-widest mb-3">CONTRACT ADDRESS</p>
          <code className="text-sm font-mono text-white/80 break-all">0x13e20981D9bd3dC45e99802f06488C5AD7c28360</code>
        </div>

      </div>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 px-4 bg-gradient-to-t from-primary/10 to-transparent">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">START PLAYING TODAY</h2>
          <p className="text-white/50 mb-8">Open World Ape in the World App and start earning APE tokens now.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 w-full sm:w-auto text-base px-8 font-black">
                <Gamepad2 className="mr-2 h-5 w-5" />OPEN MINI APP
              </Button>
            </a>
            <a href="https://world.org/download" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 font-bold border-white/20 text-white hover:bg-white/10">
                <ExternalLink className="mr-2 h-5 w-5" />GET WORLD APP
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-10 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/images/world-ape-hero.png" alt="World Ape" width={32} height={32} className="rounded-full" />
            <span className="font-black text-lg text-white">WORLD APE</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/roadmap" className="text-xs font-bold text-white/40 hover:text-white transition-colors">ROADMAP</Link>
            <a href="https://www.geckoterminal.com/world-chain/pools/0x77a26739f06d9abcf8465aa11ff2f772eb045540" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white/40 hover:text-white transition-colors">GECKOTERMINAL</a>
            <a href="https://x.com/hellowldcoin" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://t.me/WLD_APE" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
            </a>
          </div>
        </div>
        <div className="container mx-auto max-w-5xl mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-[11px] text-white/30">2025 WORLD APE. This is a meme coin with no intrinsic value or expectation of financial return.</p>
        </div>
      </footer>

    </main>
  )
}

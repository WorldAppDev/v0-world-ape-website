import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
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
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-md sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/world-ape-hero.png"
              alt="World Ape"
              width={40}
              height={40}
              className="rounded-full ring-2 ring-primary/20"
            />
            <span className="font-bold text-xl tracking-tight text-foreground">WORLD APE</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/roadmap" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              ROADMAP
            </Link>
            <Link href="/chart" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              CHART
            </Link>
            <a
              href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">
                PLAY NOW
              </Button>
            </a>
          </nav>
          <a
            href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden"
          >
            <Button size="sm" className="bg-primary text-primary-foreground font-semibold">
              PLAY
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto max-w-5xl text-center relative">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-150" />
              <Image
                src="/images/world-ape-hero.png"
                alt="World Ape"
                width={140}
                height={140}
                className="rounded-3xl relative ring-4 ring-primary/20"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-4 tracking-tight">
            WORLD APE
          </h1>
          <p className="text-xl md:text-2xl text-primary font-bold mb-6 tracking-wide">
            THE #1 GAMING PLATFORM ON WORLD CHAIN
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Play free games, earn APE tokens, and compete for 20 WLD in weekly prizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-lg px-8 py-6 font-bold">
                <Gamepad2 className="mr-2 h-5 w-5" />
                PLAY NOW
              </Button>
            </a>
            <Link href="/roadmap">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 font-semibold border-2">
                VIEW ROADMAP
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 px-4 bg-card/50 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">20 WLD</p>
              <p className="text-sm text-muted-foreground mt-1">Weekly Rewards</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">49.5%</p>
              <p className="text-sm text-muted-foreground mt-1">Staking APY</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">1,673</p>
              <p className="text-sm text-muted-foreground mt-1">Active Stakers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">4</p>
              <p className="text-sm text-muted-foreground mt-1">Games Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">FEATURED GAMES</h2>
            <p className="text-muted-foreground text-lg">Play and earn real rewards</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "DIAMOND HUNT",
                desc: "Flip cards to find diamonds. 1 Diamond = 1 WLD",
                img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.27-34zrH5rr5xKLcEFVEsCUUXLpWWmGhG.jpeg",
                badge: "1 WLD/Diamond"
              },
              {
                title: "PARTY RHYTHM",
                desc: "Free to play! Tap to the beat and earn APE",
                img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.27%20%281%29-XzIbhKukqvXZgkOBbaJ9lkoyLvr7pV.jpeg",
                badge: "Free to Play"
              },
              {
                title: "SPACE APE",
                desc: "Dodge asteroids and collect coins",
                img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.26-1E3EeJFriTuYHaVphh3iaxVPIgqmV0.jpeg",
                badge: "Free to Play"
              },
              {
                title: "LEADERBOARDS",
                desc: "Compete weekly for WLD prizes",
                img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.28-Edw6SNRSf6LvARdyPMTUh7DMpJaYXH.jpeg",
                badge: "10 WLD Weekly"
              },
            ].map((game, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <div className="aspect-[9/16] relative overflow-hidden">
                  <Image
                    src={game.img}
                    alt={game.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full">
                      {game.badge}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-foreground mb-2 text-lg">{game.title}</h3>
                  <p className="text-sm text-muted-foreground">{game.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Rewards */}
      <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">WEEKLY REWARDS</h2>
            <p className="text-muted-foreground text-lg">20 WLD distributed every week to top players</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="bg-card border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
                <p className="text-4xl font-black text-accent mb-2">10 WLD</p>
                <p className="text-foreground font-semibold mb-1">PARTY RHYTHM GAME</p>
                <p className="text-sm text-muted-foreground">Top scorers each week</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
                <p className="text-4xl font-black text-accent mb-2">10 WLD</p>
                <p className="text-foreground font-semibold mb-1">SPACE APE GAME</p>
                <p className="text-sm text-muted-foreground">Top scorers each week</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Earn */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">HOW TO EARN</h2>
            <p className="text-muted-foreground text-lg">Multiple ways to earn real tokens</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Gift, title: "DAILY CLAIM", desc: "5 APE every 24h", color: "text-green-400" },
              { icon: Sparkles, title: "PARTY GAME", desc: "Free to play", color: "text-purple-400" },
              { icon: Gamepad2, title: "SPACE APE", desc: "Free to play", color: "text-blue-400" },
              { icon: Trophy, title: "LUCKY WHEEL", desc: "Win 1-10 WLD", color: "text-accent" },
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/40 transition-all group">
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 rounded-2xl bg-card flex items-center justify-center mx-auto mb-4 border border-border group-hover:border-primary/40 transition-colors`}>
                    <item.icon className={`h-7 w-7 ${item.color}`} />
                  </div>
                  <p className="font-bold text-foreground mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staking Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 via-transparent to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">STAKING REWARDS</h2>
            <p className="text-muted-foreground text-lg">Earn passive income by staking APE tokens in ANI Wallet</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Staking Info */}
            <div className="space-y-6">
              <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-card to-card/50 p-8 text-center">
                <Shield className="h-14 w-14 text-primary mx-auto mb-4" />
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-6xl font-black text-primary">49.5%</span>
                  <span className="text-2xl font-bold text-foreground">APY</span>
                </div>
                <p className="text-muted-foreground font-medium">60 DAYS LOCKUP PERIOD</p>
              </div>
              
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-4 text-lg">HOW IT WORKS</h3>
                <ul className="space-y-3">
                  {[
                    "Stake your APE tokens in ANI Wallet",
                    "Lock for 60 days to earn 49.5% APY",
                    "Receive rewards directly to your wallet",
                  ].map((step, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">{i + 1}</span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href="https://worldcoin.org/mini-app?app_id=app_4593f73390a9843503ec096086b43612&app_mode=mini-app"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-bold">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  OPEN ANI WALLET
                </Button>
              </a>
            </div>
            
            {/* Staking Image */}
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src="/ani-wallet-2.jpg"
                alt="ANI Wallet staking interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Staking Pool Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">APE STAKING POOL #35</h2>
            <p className="text-muted-foreground text-lg">Real-time staking statistics</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Pool Images */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src="/staking-pool-1.jpg"
                  alt="APE Staking Pool Overview"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src="/staking-pool-2.jpg"
                  alt="APE Staking Pool Stats"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "TOTAL STAKED", value: "3,498,250", sub: "APE Tokens", icon: Coins },
                { label: "TOTAL STAKERS", value: "1,673", sub: "Active participants", icon: Users },
                { label: "TVL", value: "$18.04M", sub: "Total Value Locked", icon: TrendingUp },
                { label: "DISTRIBUTION", value: "11.5M", sub: "APE rewards pool", icon: Gift },
                { label: "REWARD RESERVE", value: "10.3M", sub: "APE remaining", icon: Shield },
                { label: "APY RATE", value: "49.5%", sub: "Annual yield", icon: TrendingUp },
              ].map((stat, i) => (
                <Card key={i} className="bg-card border-border">
                  <CardContent className="p-5">
                    <stat.icon className="h-5 w-5 text-primary mb-3" />
                    <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.sub}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <a
              href="https://worldcoin.org/mini-app?app_id=app_4593f73390a9843503ec096086b43612&app_mode=mini-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10">
                START STAKING NOW
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Available on Worldchain */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">PLAY ON WORLDCHAIN</h2>
            <p className="text-muted-foreground text-lg">World Ape is officially available as a mini-app on Worldchain</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border-2 border-border hover:border-primary/40 transition-all duration-300">
              <img
                src="/worldapp-card-1.jpg"
                alt="World Ape Mini-App Card"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-border hover:border-primary/40 transition-all duration-300">
              <img
                src="/worldapp-card-2.jpg"
                alt="Space Apes on Worldchain"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <a
              href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10">
                <Sparkles className="mr-2 h-5 w-5" />
                OPEN ON WORLDCHAIN
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">TOKENOMICS</h2>
            <p className="text-muted-foreground text-lg">Total Supply: 100,000,000 APE</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
            {/* Tokenomics Breakdown */}
            <div className="space-y-4">
              {[
                { label: "LOCKED (PUF WALLET)", percent: "50%", color: "bg-green-500", icon: Lock },
                { label: "IN CIRCULATION", percent: "32.27%", color: "bg-accent", icon: Coins },
                { label: "DEVELOPER HOLDING", percent: "10%", color: "bg-blue-500", icon: Users },
                { label: "BURNT", percent: "7.73%", color: "bg-red-500", icon: Flame },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-2xl font-bold text-foreground">{item.percent}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* PUF Wallet Image */}
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src="/puf-wallet.jpg"
                alt="PUF Wallet - APE Tokens Locked"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* PUF Wallet CTA */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">TOKENS LOCKED IN PUF WALLET</h3>
                <p className="text-muted-foreground">
                  50% of all APE tokens are securely locked in the PUF Wallet on Worldchain, ensuring transparency and security.
                </p>
              </div>
              <a
                href="https://worldcoin.org/mini-app?app_id=app_e5ba7c3061400e361f98ce44d8b1b9c4&app_mode=mini-app"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                  VIEW ON PUF WALLET
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Top Ape Fans */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">TOP APE FANS</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Join the leaderboard and showcase your APE holdings. Set custom avatars, shoutouts, and compete with the community.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Users, text: "Custom profile avatars" },
                  { icon: Trophy, text: "Live rankings updated weekly" },
                  { icon: Shield, text: "World ID verified players" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[9/16] max-w-[300px] mx-auto rounded-3xl overflow-hidden border-2 border-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.28%20%281%29-IT7tnHmTRZmamisza7BNVPlhGd6AS6.jpeg"
                alt="Top Ape Fans Leaderboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Chart */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">LIVE PRICE CHART</h2>
            <p className="text-muted-foreground text-lg">APE/WLD on World Chain</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border bg-card">
            <iframe
              src="https://dexscreener.com/worldchain/0x77a26739f06d9abcf8465aa11ff2f772eb045540?embed=1&theme=dark&info=0"
              className="w-full h-[500px] md:h-[600px]"
              title="DEX Screener Chart"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://dexscreener.com/worldchain/0x77a26739f06d9abcf8465aa11ff2f772eb045540"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              View on DEX Screener
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contract Address */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold text-muted-foreground mb-4 tracking-wider">CONTRACT ADDRESS</p>
          <code className="text-sm md:text-base font-mono text-foreground break-all bg-card px-6 py-4 rounded-xl border border-border block">
            0x13e20981D9bd3dC45e99802f06488C5AD7c28360
          </code>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-t from-primary/10 to-transparent">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">START PLAYING TODAY</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Open World Ape in the World App to start earning APE tokens and compete for weekly WLD prizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-lg px-10 py-6 font-bold">
                <Gamepad2 className="mr-2 h-5 w-5" />
                OPEN MINI APP
              </Button>
            </a>
            <a href="https://world.org/download" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-10 py-6 font-semibold border-2">
                <ExternalLink className="mr-2 h-5 w-5" />
                GET WORLD APP
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <Image
                src="/images/world-ape-hero.png"
                alt="World Ape"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="font-bold text-xl text-foreground">WORLD APE</span>
            </div>
            
            <div className="flex items-center gap-8">
              <Link href="/roadmap" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                ROADMAP
              </Link>
              <a
                href="https://www.geckoterminal.com/world-chain/pools/0x77a26739f06d9abcf8465aa11ff2f772eb045540"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                GECKOTERMINAL
              </a>
              <a
                href="https://x.com/hellowldcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://t.me/WLD_APE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              2025 WORLD APE. This is a meme coin with no intrinsic value or expectation of financial return.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

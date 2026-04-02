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
} from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/90">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/world-ape-hero.png"
              alt="World Ape"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-bold text-lg text-foreground">World Ape</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Roadmap
            </Link>
            <Link href="/chart" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Chart
            </Link>
            <a
              href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Play Now
              </Button>
            </a>
          </nav>
          <a
            href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden"
          >
            <Button size="sm" className="bg-primary text-primary-foreground">
              Play
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/world-ape-hero.png"
              alt="World Ape"
              width={120}
              height={120}
              className="rounded-2xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            World Ape
          </h1>
          <p className="text-lg text-primary font-medium mb-4">
            The #1 Gaming Platform on World Chain
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Play free games, earn APE tokens, and compete for 20 WLD in weekly prizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Play Now
              </Button>
            </a>
            <Link href="/roadmap">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Roadmap
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Games Showcase */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Featured Games</h2>
            <p className="text-muted-foreground">Play and earn real rewards</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Diamond Hunt */}
            <Card className="bg-card border-border overflow-hidden group hover:border-primary/40 transition-all">
              <div className="aspect-[9/16] relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.27-34zrH5rr5xKLcEFVEsCUUXLpWWmGhG.jpeg"
                  alt="Diamond Hunt Game"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-1">Diamond Hunt</h3>
                <p className="text-sm text-muted-foreground">Flip cards to find diamonds. 1 Diamond = 1 WLD</p>
              </CardContent>
            </Card>

            {/* Party Rhythm Game */}
            <Card className="bg-card border-border overflow-hidden group hover:border-primary/40 transition-all">
              <div className="aspect-[9/16] relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.27%20%281%29-XzIbhKukqvXZgkOBbaJ9lkoyLvr7pV.jpeg"
                  alt="Party Rhythm Game"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-1">Party Rhythm</h3>
                <p className="text-sm text-muted-foreground">Free to play! Tap to the beat and earn APE</p>
              </CardContent>
            </Card>

            {/* Space Ape */}
            <Card className="bg-card border-border overflow-hidden group hover:border-primary/40 transition-all">
              <div className="aspect-[9/16] relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.26-1E3EeJFriTuYHaVphh3iaxVPIgqmV0.jpeg"
                  alt="Space Ape Game"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-1">Space Ape</h3>
                <p className="text-sm text-muted-foreground">FREE! Dodge asteroids and collect coins</p>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="bg-card border-border overflow-hidden group hover:border-primary/40 transition-all">
              <div className="aspect-[9/16] relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-01%20at%2018.15.28-Edw6SNRSf6LvARdyPMTUh7DMpJaYXH.jpeg"
                  alt="Weekly Leaderboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-1">Leaderboards</h3>
                <p className="text-sm text-muted-foreground">Compete weekly for WLD prizes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weekly Rewards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Weekly Rewards</h2>
            <p className="text-muted-foreground">20 WLD distributed every week</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Trophy className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">10 WLD</p>
                <p className="text-sm text-muted-foreground">Party Rhythm Game</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Trophy className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">10 WLD</p>
                <p className="text-sm text-muted-foreground">Space Ape Game</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Earn */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">How to Earn</h2>
            <p className="text-muted-foreground">Multiple ways to earn real tokens</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-card border-border">
              <CardContent className="p-5 text-center">
                <Gift className="h-6 w-6 text-primary mx-auto mb-3" />
                <p className="font-medium text-foreground text-sm mb-1">Daily Claim</p>
                <p className="text-xs text-muted-foreground">5 APE every 24h</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-5 text-center">
                <Sparkles className="h-6 w-6 text-primary mx-auto mb-3" />
                <p className="font-medium text-foreground text-sm mb-1">Party Game</p>
                <p className="text-xs text-muted-foreground">Free to play</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-5 text-center">
                <Gamepad2 className="h-6 w-6 text-primary mx-auto mb-3" />
                <p className="font-medium text-foreground text-sm mb-1">Space Ape</p>
                <p className="text-xs text-muted-foreground">Free to play</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-5 text-center">
                <Trophy className="h-6 w-6 text-primary mx-auto mb-3" />
                <p className="font-medium text-foreground text-sm mb-1">Lucky Wheel</p>
                <p className="text-xs text-muted-foreground">Win 1-10 WLD</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staking Rewards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Staking Rewards</h2>
            <p className="text-muted-foreground">Earn passive income by staking APE tokens in ANI Wallet</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Images */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden border border-border">
                <img
                  src="/ani-wallet-2.jpg"
                  alt="ANI Wallet staking interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Right - Info */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <Shield className="h-12 w-12 text-accent mx-auto mb-3" />
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-accent">49.5%</span>
                    <span className="text-foreground text-lg">APY</span>
                  </div>
                  <p className="text-sm text-muted-foreground">60 days lockup period</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">How it works:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Stake your APE tokens in ANI Wallet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Lock for 60 days to earn 49.5% APY</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Receive rewards directly to your wallet</span>
                  </li>
                </ul>
              </div>
              
              <a
                href="https://worldcoin.org/mini-app?app_id=app_4593f73390a9843503ec096086b43612&app_mode=mini-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Open ANI Wallet
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Staking Pool Details */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">APE Staking Pool #35</h2>
            <p className="text-muted-foreground">Real-time staking statistics and rewards information</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Images */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden border border-border">
                <img
                  src="/staking-pool-1.jpg"
                  alt="APE Staking Pool Overview"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-border">
                <img
                  src="/staking-pool-2.jpg"
                  alt="APE Staking Pool Stats"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Stats */}
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-muted-foreground text-sm mb-1">Total Staked</p>
                <p className="text-3xl font-bold text-accent">3,498,250</p>
                <p className="text-sm text-muted-foreground">APE Tokens</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-muted-foreground text-sm mb-1">Total Stakers</p>
                <p className="text-3xl font-bold text-accent">1,673</p>
                <p className="text-sm text-muted-foreground">Active participants</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-muted-foreground text-sm mb-1">Total Value Locked (TVL)</p>
                <p className="text-3xl font-bold text-accent">$18,047,892.54</p>
                <p className="text-sm text-muted-foreground">USD equivalent</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-muted-foreground text-sm mb-1">Total Distribution</p>
                <p className="text-3xl font-bold text-accent">11,500,000</p>
                <p className="text-sm text-muted-foreground">APE rewards pool</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-muted-foreground text-sm mb-1">Reward Reserve</p>
                <p className="text-3xl font-bold text-accent">10,311,804.27</p>
                <p className="text-sm text-muted-foreground">APE remaining</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://worldcoin.org/mini-app?app_id=app_4593f73390a9843503ec096086b43612&app_mode=mini-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Staking Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Top Fans Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Top Ape Fans</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join the leaderboard and showcase your APE holdings. Set custom avatars, shoutouts, and compete with the community.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Custom profile avatars</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Live rankings updated weekly</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">World ID verified players</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[9/16] max-w-[280px] mx-auto rounded-2xl overflow-hidden border border-border">
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

      {/* Tokenomics */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Tokenomics</h2>
            <p className="text-muted-foreground">Total Supply: 100,000,000 APE</p>
          </div>
          <div className="space-y-3">
            {[
              { label: "Community & Liquidity", percent: "66%" },
              { label: "Marketing", percent: "10%" },
              { label: "Game Rewards Pool", percent: "10%" },
              { label: "Developer Wallet", percent: "10%" },
              { label: "Rewards & Airdrops", percent: "4%" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-foreground">{item.label}</span>
                <span className="text-sm font-semibold text-foreground">{item.percent}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chart */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Live Price Chart</h2>
            <p className="text-muted-foreground">APE/WLD on World Chain</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-border bg-card">
            <iframe
              src="https://dexscreener.com/worldchain/0x77a26739f06d9abcf8465aa11ff2f772eb045540?embed=1&theme=dark&info=0"
              className="w-full h-[500px] md:h-[600px]"
              title="DEX Screener Chart"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://dexscreener.com/worldchain/0x77a26739f06d9abcf8465aa11ff2f772eb045540"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View on DEX Screener
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contract */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto max-w-xl text-center">
          <p className="text-sm text-muted-foreground mb-2">Contract Address</p>
          <code className="text-xs md:text-sm font-mono text-foreground break-all bg-card px-4 py-3 rounded-lg border border-border block">
            0x13e20981D9bd3dC45e99802f06488C5AD7c28360
          </code>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Start Playing</h2>
          <p className="text-muted-foreground mb-6">
            Open World Ape in the World App to start earning.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Open Mini App
              </Button>
            </a>
            <a href="https://world.org/download" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <ExternalLink className="mr-2 h-5 w-5" />
                Get World App
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/world-ape-hero.png"
                alt="World Ape"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="font-semibold text-foreground">World Ape</span>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Roadmap
              </Link>
              <a
                href="https://www.geckoterminal.com/world-chain/pools/0x77a26739f06d9abcf8465aa11ff2f772eb045540"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GeckoTerminal
              </a>
              <a
                href="https://x.com/hellowldcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://t.me/WLD_APE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              2025 World Ape. This is a meme coin with no intrinsic value or expectation of financial return.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

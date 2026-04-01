import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import {
  Gamepad2,
  Music,
  Rocket,
  CircleDot,
  Gift,
  Trophy,
  Shield,
  Users,
  ExternalLink,
  Copy,
} from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/world-ape-hero.png"
              alt="World Ape"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-foreground">World Ape</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
              Roadmap
            </Link>
            <Link href="/chart" className="text-muted-foreground hover:text-foreground transition-colors">
              Chart
            </Link>
            <a
              href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
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
              Play Now
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/world-ape-hero.png"
              alt="World Ape"
              width={180}
              height={180}
              className="rounded-2xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            World Ape
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-6">
            The #1 Gaming Platform on World Chain
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Play free games, earn real tokens, and compete for weekly WLD prizes. 
            Daily claims, multiple games, and 20 WLD distributed every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

          {/* Contract Address */}
          <Card className="max-w-lg mx-auto bg-card border-border">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-2">Contract Address</p>
              <code className="text-sm font-mono text-foreground break-all">
                0x13e20981D9bd3dC45e99802f06488C5AD7c28360
              </code>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Games</h2>
            <p className="text-muted-foreground text-lg">Play and earn real rewards</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Diamond Hunt */}
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Gamepad2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Diamond Hunt</h3>
                    <p className="text-muted-foreground mb-4">
                      Use APE tokens to flip cards and find the hidden diamond. Win 1 WLD per diamond found!
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>100 APE = 1 game token</li>
                      <li>1,000 APE = 10 tokens + 1 banana</li>
                      <li>10,000 APE = 100 tokens + 6 bananas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Party Rhythm Game */}
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Music className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Party Rhythm Game</h3>
                    <p className="text-muted-foreground mb-4">
                      FREE to play! Tap to the beat and earn APE based on your accuracy. 10 WLD weekly prize pool!
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>S Rank (95%+): 15 APE</li>
                      <li>A Rank (90-94%): 10 APE</li>
                      <li>B Rank (80-89%): 5 APE</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Space Ape Game */}
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Space Ape</h3>
                    <p className="text-muted-foreground mb-4">
                      FREE arcade game! Pilot your spaceship, avoid asteroids, and collect coins. 10 WLD weekly prize pool!
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Free to play</li>
                      <li>Score-based leaderboard</li>
                      <li>Top performers win WLD</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lucky Wheel */}
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <CircleDot className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Lucky Wheel</h3>
                    <p className="text-muted-foreground mb-4">
                      Spin with bananas earned from Diamond Hunt. Win 1-10 WLD per spin - every spin is a guaranteed win!
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>1 banana = 1 spin</li>
                      <li>Win 1-10 WLD instantly</li>
                      <li>~2.3 WLD average per spin</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weekly Rewards Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Weekly WLD Rewards</h2>
            <p className="text-muted-foreground text-lg">20 WLD distributed every week</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Trophy className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">10 WLD</h3>
                <p className="text-muted-foreground">Party Rhythm Game</p>
                <p className="text-sm text-muted-foreground mt-2">Score-based competition</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Trophy className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">10 WLD</h3>
                <p className="text-muted-foreground">Space Ape Game</p>
                <p className="text-sm text-muted-foreground mt-2">Score-based competition</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Monday-Saturday: Active gameplay | Sunday: Rewards distribution
          </p>
        </div>
      </section>

      {/* How to Earn Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How to Earn</h2>
            <p className="text-muted-foreground text-lg">Multiple ways to earn real tokens</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Gift className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Daily Claim</h3>
                <p className="text-sm text-muted-foreground">5 APE every 24 hours with World ID verification</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Music className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Party Game</h3>
                <p className="text-sm text-muted-foreground">Earn up to 15 APE per game + weekly WLD</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Rocket className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Space Ape</h3>
                <p className="text-sm text-muted-foreground">Free arcade game with weekly WLD prizes</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <CircleDot className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Lucky Wheel</h3>
                <p className="text-sm text-muted-foreground">Spin bananas for 1-10 WLD</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Community Features</h2>
            <p className="text-muted-foreground text-lg">Connect with the Ape Army</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">User Profiles</h3>
                <p className="text-sm text-muted-foreground">Custom avatars and display names</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">3 Leaderboards</h3>
                <p className="text-sm text-muted-foreground">Party scores, Space Ape scores, APE holdings</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">World ID Verified</h3>
                <p className="text-sm text-muted-foreground">Bot-free, fair play guaranteed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tokenomics</h2>
            <p className="text-muted-foreground text-lg">Total Supply: 100,000,000 APE</p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Marketing", percent: "10%", color: "bg-chart-1" },
              { label: "Game Rewards Pool", percent: "10%", color: "bg-chart-2" },
              { label: "Developer Wallet", percent: "10%", color: "bg-chart-3" },
              { label: "Reward & Airdrop", percent: "4%", color: "bg-chart-4" },
              { label: "Community & Liquidity", percent: "66%", color: "bg-chart-5" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-foreground">{item.label}</span>
                </div>
                <span className="font-semibold text-foreground">{item.percent}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini App CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Play on World App</h2>
          <p className="text-muted-foreground text-lg mb-8">
            World Ape is a verified mini-app on World App with seamless wallet connection and instant rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Download World App
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/world-ape-hero.png"
                  alt="World Ape"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-bold text-lg text-foreground">World Ape</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The #1 gaming platform on World Chain. Play games, earn tokens, win weekly prizes.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.geckoterminal.com/world-chain/pools/0x77a26739f06d9abcf8465aa11ff2f772eb045540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GeckoTerminal
                  </a>
                </li>
                <li>
                  <a
                    href="https://dexscreener.com/worldchain/APE-WLD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    DEX Screener
                  </a>
                </li>
                <li>
                  <Link href="/roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Community</h4>
              <div className="flex gap-3">
                <a
                  href="https://x.com/hellowldcoin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <svg className="h-5 w-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/WLD_APE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <svg className="h-5 w-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              2025 World Ape. This is a meme coin with no intrinsic value or expectation of financial return.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

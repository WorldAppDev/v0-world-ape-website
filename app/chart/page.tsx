import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function ChartPage() {
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
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
              Roadmap
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
          <Link href="/" className="md:hidden">
            <Button size="sm" variant="outline">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Price Chart</h1>
            <p className="text-muted-foreground text-lg">Live APE/WLD price data from DEX Screener</p>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-5xl">
          <Card className="bg-card border-border overflow-hidden">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-xl text-foreground">Live Price Chart</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[600px]">
                <iframe
                  src="https://dexscreener.com/worldchain/0x77a26739f06d9abcf8465aa11ff2f772eb045540?embed=1&theme=dark&trades=0&info=0"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="DEX Screener Chart"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Trading Links</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://www.geckoterminal.com/world-chain/pools/0x77a26739f06d9abcf8465aa11ff2f772eb045540"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <ExternalLink className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">GeckoTerminal</h3>
                    <p className="text-sm text-muted-foreground">View pool analytics</p>
                  </div>
                </CardContent>
              </Card>
            </a>
            <a
              href="https://dexscreener.com/worldchain/APE-WLD"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <ExternalLink className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">DEX Screener</h3>
                    <p className="text-sm text-muted-foreground">Full trading view</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Contract Info */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Contract Information</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">APE Token</p>
                <code className="text-sm font-mono text-foreground break-all">
                  0x13e20981D9bd3dC45e99802f06488C5AD7c28360
                </code>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-1">Network</p>
                <p className="text-foreground font-medium">World Chain</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

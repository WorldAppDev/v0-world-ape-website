import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-lg px-6 py-2 animate-glow">
            🚀 OFFICIAL WORLDCHAIN MASCOT 🚀
          </Badge>

          {/* Main Hero Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative animate-float">
              <Image
                src="/images/world-ape-hero.png"
                alt="World Ape Astronaut"
                width={400}
                height={400}
                className="rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400 bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0_0_30px_rgba(255,255,255,0.8)]">
            WORLD APE
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl mb-8 text-muted-foreground font-bold">{"🌙 TO THE MOON! 🌙"}</p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-foreground/80 leading-relaxed">
            The ultimate meme coin with absolutely no purpose or utility. Just pure ape energy on a mission to dominate
            the worldchain crypto space!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 text-lg font-bold animate-glow"
            >
              🚀 JOIN THE MISSION
            </Button>
            <Link href="/chart">
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-bold bg-transparent"
              >
                📊 VIEW CHART
              </Button>
            </Link>
          </div>

          {/* Contract Address */}
          <div className="mt-12 p-4 bg-card/50 rounded-lg border border-border/50 backdrop-blur-sm">
            <p className="text-sm text-muted-foreground mb-2">Contract Address:</p>
            <code className="text-accent font-mono text-sm break-all">0x13e20981D9bd3dC45e99802f06488C5AD7c28360</code>
          </div>
        </div>
      </div>
    </section>
  )
}

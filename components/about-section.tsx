import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const features = [
    {
      emoji: "🦍",
      title: "Pure Ape Energy",
      description: "No roadmap, no promises, just pure meme magic and ape vibes",
    },
    {
      emoji: "🌙",
      title: "Moon Mission",
      description: "Our only destination is the moon. No stops, no detours, just UP!",
    },
    {
      emoji: "🚀",
      title: "Worldchain Takeover",
      description: "The official mascot ready to dominate the entire worldchain ecosystem",
    },
    {
      emoji: "💎",
      title: "Diamond Hands",
      description: "Built for the strongest hands in the crypto universe",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            Why World Ape?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Because sometimes the best investments are the ones that make absolutely no sense. Welcome to the chaos!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/30 rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-accent">⚠️ DISCLAIMER ⚠️</h3>
            <p className="text-lg text-muted-foreground">
              This is a meme coin with ZERO utility. We're not building anything. We're not solving any problems. We're
              just here for the memes and the moon mission. DYOR and only invest what you can afford to lose! 🦍
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

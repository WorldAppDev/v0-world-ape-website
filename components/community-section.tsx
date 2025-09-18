import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CommunitySection() {
  const socialLinks = [
    {
      name: "Twitter",
      emoji: "🐦",
      description: "Follow for memes and moon updates",
      color: "hover:bg-primary/20",
    },
    {
      name: "Telegram",
      emoji: "📱",
      description: "Join the ape army chat",
      color: "hover:bg-secondary/20",
    },
    {
      name: "Discord",
      emoji: "🎮",
      description: "Hang with fellow space apes",
      color: "hover:bg-accent/20",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Join the Ape Army
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with thousands of apes on the same moon mission. Share memes, diamond hand together, and prepare for
            takeoff!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <Card
              key={index}
              className={`bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 cursor-pointer ${social.color}`}
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">{social.emoji}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{social.name}</h3>
                <p className="text-muted-foreground mb-6">{social.description}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Join Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4 text-foreground">🚀 Ready for Launch? 🚀</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Strap in, hold tight, and prepare for the wildest ride to the moon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 text-lg font-bold"
              >
                🦍 BUY WORLD APE
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-bold bg-transparent"
              >
                📈 TRACK PRICE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

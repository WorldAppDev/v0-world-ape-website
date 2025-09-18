import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function TokenomicsSection() {
  const tokenomics = [
    {
      label: "Dev Accumulation",
      percentage: 50,
      color: "bg-primary",
      description: "Dev will buy till 50% accumulated over time",
    },
    { label: "Airdrop", percentage: 20, color: "bg-secondary", description: "Community rewards" },
    { label: "Team", percentage: 10, color: "bg-accent", description: "Team allocation" },
    { label: "Marketing", percentage: 10, color: "bg-yellow-500", description: "Marketing & partnerships" },
    { label: "Burn Forever", percentage: 10, color: "bg-red-500", description: "Permanently removed from supply" },
  ]

  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple, fair, and designed for maximum ape energy distribution
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Stats */}
            <div className="space-y-6">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-accent">🪙 Total Supply</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-center text-foreground">100,000,000</p>
                  <p className="text-center text-muted-foreground mt-2">One hundred million apes ready for takeoff</p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">0%</p>
                    <p className="text-sm text-muted-foreground">Tax</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-secondary">LP</p>
                    <p className="text-sm text-muted-foreground">Burned</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Distribution */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-foreground mb-6">Distribution</h3>
              {tokenomics.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-foreground font-medium">{item.label}</span>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="text-foreground font-bold">{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} className="h-3" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-6 border border-border/50">
              <p className="text-lg font-bold text-foreground mb-2">🔥 10% BURNED FOREVER 🔥</p>
              <p className="text-muted-foreground">
                10 million tokens permanently removed from supply - deflationary ape power!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

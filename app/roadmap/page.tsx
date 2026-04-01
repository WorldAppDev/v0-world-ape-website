import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Clock, Wrench } from "lucide-react"

export default function RoadmapPage() {
  const milestones = [
    {
      phase: "Phase 1",
      title: "Launch & Foundation",
      status: "completed",
      items: [
        "Token Launch on WorldChain",
        "Community Building",
        "Website & Branding",
        "Initial Marketing Campaign",
      ],
    },
    {
      phase: "Phase 2",
      title: "Mini App & Daily Claims",
      status: "completed",
      items: [
        "World App Mini App Integration",
        "Daily 5 APE Claim System",
        "World ID Verification",
        "Bot Prevention & Monitoring",
      ],
    },
    {
      phase: "Phase 3",
      title: "Games Launch",
      status: "completed",
      items: [
        "Diamond Hunt Card Flip Game",
        "Party Rhythm Game (FREE)",
        "Space Ape Arcade Game (FREE)",
        "Lucky Wheel with Banana Economy",
      ],
    },
    {
      phase: "Phase 4",
      title: "Weekly Competitions",
      status: "completed",
      items: [
        "20 WLD Weekly Prize Pools",
        "Party Game Leaderboard (Score-based)",
        "Space Ape Leaderboard (Score-based)",
        "APE Fans Leaderboard (Token Holdings)",
      ],
    },
    {
      phase: "Phase 5",
      title: "Social Features",
      status: "completed",
      items: [
        "User Profiles & Custom Avatars",
        "Shoutout Messages",
        "Community Engagement Tools",
        "Custom Display Names",
      ],
    },
    {
      phase: "Phase 6",
      title: "In Development",
      status: "in-progress",
      items: [
        "Reaction System for Shoutouts",
        "More Rhythm Game Songs",
        "Difficulty Levels (Easy/Medium/Hard)",
        "Daily Challenges with Bonus APE",
      ],
    },
    {
      phase: "Phase 7",
      title: "Coming Soon",
      status: "upcoming",
      items: [
        "Seasonal Tournaments",
        "Guild/Team System",
        "More Games",
        "Enhanced Social Features",
      ],
    },
  ]

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "completed":
        return {
          icon: Check,
          label: "Completed",
          className: "bg-primary/10 text-primary border-primary/30",
        }
      case "in-progress":
        return {
          icon: Wrench,
          label: "In Progress",
          className: "bg-accent/10 text-accent border-accent/30",
        }
      case "upcoming":
        return {
          icon: Clock,
          label: "Coming Soon",
          className: "bg-muted text-muted-foreground border-border",
        }
      default:
        return {
          icon: Clock,
          label: "Planned",
          className: "bg-muted text-muted-foreground border-border",
        }
    }
  }

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
          <Link href="/" className="md:hidden">
            <Button size="sm" variant="outline">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Roadmap</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our journey building the ultimate gaming platform on World Chain. Here&apos;s what we&apos;ve accomplished and what&apos;s coming next.
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-8 px-4 pb-24">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-6">
            {milestones.map((milestone, index) => {
              const statusConfig = getStatusConfig(milestone.status)
              const StatusIcon = statusConfig.icon

              return (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Phase indicator */}
                      <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:w-20 flex-shrink-0">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          milestone.status === "completed" ? "bg-primary/20" :
                          milestone.status === "in-progress" ? "bg-accent/20" :
                          "bg-muted"
                        }`}>
                          <StatusIcon className={`h-5 w-5 ${
                            milestone.status === "completed" ? "text-primary" :
                            milestone.status === "in-progress" ? "text-accent" :
                            "text-muted-foreground"
                          }`} />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground sm:text-center">
                          {milestone.phase}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                          <h2 className="text-xl font-semibold text-foreground">{milestone.title}</h2>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusConfig.className} w-fit`}>
                            {statusConfig.label}
                          </span>
                        </div>

                        <ul className="grid sm:grid-cols-2 gap-2">
                          {milestone.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                milestone.status === "completed" ? "bg-primary" :
                                milestone.status === "in-progress" ? "bg-accent" :
                                "bg-muted-foreground/50"
                              }`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-card/30 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Join?</h2>
          <p className="text-muted-foreground mb-8">
            Start playing today and be part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                Play Now
              </Button>
            </a>
            <Link href="/">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

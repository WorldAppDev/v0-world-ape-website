"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Lock, TrendingUp, Clock, AlertCircle } from "lucide-react"
import Image from "next/image"

export default function StakingPage() {
  const stakingPlans = [
    {
      id: "macaque",
      name: "Macaque",
      duration: "60 days",
      apy: "5%",
      minStake: "50,000 APE",
      description:
        "Perfect for newcomers! Get your feet wet with steady returns and medium-term commitment. Start your APE staking journey here!",
    },
    {
      id: "gorilla",
      name: "Gorilla",
      duration: "120 days",
      apy: "15%",
      minStake: "200,000 APE",
      description:
        "Level up your game! Triple the rewards with this powerful long-term option. For serious APEs ready to commit and earn big!",
    },
    {
      id: "silverback",
      name: "Silverback",
      duration: "180 days",
      apy: "25%",
      minStake: "500,000 APE",
      description:
        "The ultimate alpha move! Maximum rewards for the most dedicated diamond hands. Join the elite Silverback club and dominate!",
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/world-ape-neon-1.jpg"
          alt="Space background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/70 to-slate-950" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-cyan-400 hover:text-cyan-300 hover:bg-slate-800/50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center text-white">
            APE Token Staking Pools
          </h1>
          <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto">
            Explore our staking pools and their competitive APY rates. Stake your APE tokens directly in the World
            Miniapp to start earning rewards.
          </p>
        </div>

        {/* Staking Plans - Information Only */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {stakingPlans.map((plan) => (
            <Card
              key={plan.id}
              className="border border-slate-700 bg-slate-900/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Plan Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-400">{plan.duration}</p>
                    <p className="text-3xl font-bold text-cyan-400">{plan.apy}</p>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {plan.name} ({plan.duration})
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{plan.description}</p>
                  <p className="text-gray-400 text-xs">Minimum: {plan.minStake}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How it works Section */}
        <Card className="max-w-4xl mx-auto mb-8 border border-slate-700 bg-slate-900/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">How it works:</h2>
            <ul className="space-y-4">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  text: "Choose a staking plan with your desired APY",
                },
                {
                  icon: <Lock className="h-6 w-6" />,
                  text: "Approve and send your tokens to smart contract",
                },
                {
                  icon: <Clock className="h-6 w-6" />,
                  text: "Stake and collect your Principal + Rewards on UNLOCK DATE",
                },
                {
                  icon: <AlertCircle className="h-6 w-6" />,
                  text: 'Unstake anytime, however "NO REWARDS!"',
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 text-cyan-400">{item.icon}</div>
                  <p className="text-gray-300 text-lg">{item.text}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Smart Contract Info */}
        <Card className="max-w-4xl mx-auto mb-8 border border-slate-700 bg-slate-900/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Smart Contract Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400 mb-1">Smart Contract Address:</p>
                <code className="font-mono text-sm break-all block p-3 bg-slate-800/50 rounded-lg text-cyan-400 border border-slate-700">
                  0x06Fd0B6d0ad8C4308D2f1e1240BAaE2B43678DAD
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <Card className="border border-cyan-500/30 bg-slate-900/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Stake?</h3>
              <p className="text-gray-300 mb-6">
                Visit the World Miniapp to connect your wallet and start staking your APE tokens today!
              </p>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-6 text-lg">
                Open World Miniapp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

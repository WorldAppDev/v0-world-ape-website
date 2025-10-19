import Link from "next/link"
import { ArrowLeft, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-cyan-400 hover:text-cyan-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-3">
              <FileText className="h-10 w-10 text-cyan-400" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                APE Token White Paper
              </h1>
            </div>
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <p className="text-xl text-gray-300 mb-2">Decentralized Rewards and Community Incentivization Protocol</p>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <p>
              Project Website:{" "}
              <a href="https://worldape.fun" className="text-cyan-400 hover:text-cyan-300 underline">
                Worldape.fun
              </a>
            </p>
            <p className="break-all">Token Contract Address: 0x13e20981D9bd3dC45e99802f06488C5AD7c28360</p>
          </div>
        </div>

        {/* White Paper Content */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="prose prose-invert prose-cyan max-w-none">
            {/* 1. Abstract */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">1. Abstract</h2>
              <p className="text-gray-300 leading-relaxed">
                The APE Token is a decentralized reward and incentive asset, fundamentally designed to compensate active
                participants in the Worldape.fun ecosystem. Its primary utility is earned through tiered claims,
                liquidity provision rewards, and gaming rewards within the community-driven platform. Operating with a
                strictly capped supply of 100 million tokens, APE is engineered to reward long-term participation
                through robust staking mechanisms and to maintain deflationary pressure via an aggressive burning
                policy. By establishing a clear reward loop tied to participation, the APE Token establishes a
                self-sustaining ecosystem that prioritizes community ownership, transparent rewards, and verifiable
                digital identity within the Web3 space.
              </p>
            </section>

            {/* 2. Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">2. Introduction: The Worldape Ecosystem</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Worldape.fun platform (currently a website) is designed to be the nexus for decentralized social
                interaction and engagement. It is structured to soon offer a suite of interactive applications,
                including the upcoming mini-app on Worldchain, where APE is the sole medium of utility and exchange,
                primarily for rewards. The ecosystem is built on the principles of transparency, fun, and community
                governance.
              </p>

              <h3 className="text-2xl font-semibold text-purple-400 mt-8 mb-3">2.1 Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                Our vision is to create a vibrant, decentralized community where ownership is validated by token
                holding, and participation is tangibly rewarded. APE is more than a digital currency; it is a membership
                token that grants access to exclusive features, rewards, and governance rights within the Worldape
                ecosystem.
              </p>

              <h3 className="text-2xl font-semibold text-purple-400 mt-8 mb-3">2.2 Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To build a sustainable, community-first platform where every participant is rewarded fairly for their
                engagement, liquidity provision, and long-term commitment. We aim to demonstrate that decentralized
                systems can be both fun and financially rewarding.
              </p>
            </section>

            {/* 3. Tokenomics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">3. Tokenomics</h2>

              <h3 className="text-2xl font-semibold text-purple-400 mt-8 mb-3">3.1 Token Specifications</h3>
              <div className="bg-slate-800/50 rounded-lg p-6 mb-6">
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <strong className="text-cyan-400">Token Name:</strong> WORLD APE
                  </li>
                  <li>
                    <strong className="text-cyan-400">Token Symbol:</strong> APE
                  </li>
                  <li>
                    <strong className="text-cyan-400">Blockchain:</strong> World Chain (EVM-compatible)
                  </li>
                  <li>
                    <strong className="text-cyan-400">Total Supply:</strong> 100,000,000 APE (fixed, non-mintable)
                  </li>
                  <li>
                    <strong className="text-cyan-400">Decimals:</strong> 18
                  </li>
                  <li>
                    <strong className="text-cyan-400">Contract Address:</strong>{" "}
                    0x13e20981D9bd3dC45e99802f06488C5AD7c28360
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-purple-400 mt-8 mb-3">
                3.2 Supply Dynamics and Vesting Schedules
              </h3>

              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-pink-400 mb-3">Liquidity Pool (LP)</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>Allocation:</strong> 70,000,000 APE (70%)
                    </li>
                    <li>
                      <strong>Purpose:</strong> Paired with WLD on Uniswap V2 (World Chain) to establish initial market
                      liquidity
                    </li>
                    <li>
                      <strong>Lockup:</strong> LP tokens are locked for 6 months to ensure stability and prevent rug
                      pulls
                    </li>
                    <li>
                      <strong>Transparency:</strong> Lock contract address and proof will be published on the official
                      website
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-pink-400 mb-3">Staking Lockup</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>Allocation:</strong> Reserved for community staking rewards
                    </li>
                    <li>
                      <strong>Purpose:</strong> Incentivize long-term holding and reduce circulating supply
                    </li>
                    <li>
                      <strong>Lockup Period:</strong> 6 months minimum lock with 25% APY rewards
                    </li>
                    <li>
                      <strong>Reward Distribution:</strong> Paid out in APE tokens from the staking reserve pool
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-pink-400 mb-3">Airdrop and Community Rewards</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>Allocation:</strong> 30,000,000 APE (30%)
                    </li>
                    <li>
                      <strong>Purpose:</strong> Distributed through tiered claims, gaming rewards, and community
                      engagement
                    </li>
                    <li>
                      <strong>Distribution Method:</strong> Tiered claim system based on APE holdings (see Section 4)
                    </li>
                    <li>
                      <strong>Vesting:</strong> Released gradually through the mini-app claim cycles (every 5 hours)
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-purple-400 mt-8 mb-3">3.3 Deflationary Mechanism</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                APE implements an aggressive burn policy to create scarcity and increase value over time:
              </p>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <strong className="text-cyan-400">Burn Milestones:</strong> Tokens are burned at specific market cap
                    thresholds ($25k, $50k, $75k, $100k)
                  </li>
                  <li>
                    <strong className="text-cyan-400">Total Burned to Date:</strong> 5,000,000 APE permanently removed
                    from circulation
                  </li>
                  <li>
                    <strong className="text-cyan-400">Burn Address:</strong> 0x000000000000000000000000000000000000dead
                  </li>
                  <li>
                    <strong className="text-cyan-400">Verification:</strong> All burns are publicly verifiable on
                    WorldScan
                  </li>
                  <li>
                    <strong className="text-cyan-400">Future Burns:</strong> Additional burns planned as community
                    milestones are achieved
                  </li>
                </ul>
              </div>
            </section>

            {/* 4. Tiered Claims System */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">4. Tiered Claims System</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The tiered claims system is the primary reward distribution mechanism, designed to incentivize both new
                participants and long-term holders. Claims are unlocked every 5 hours and are based on the amount of APE
                tokens held in a user's wallet.
              </p>

              <div className="bg-slate-800/50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Claim Tiers</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                    <div>
                      <p className="font-semibold text-white">Basic Ape Claims</p>
                      <p className="text-sm text-gray-400">Minimum: For everyone</p>
                    </div>
                    <span className="text-2xl font-bold text-yellow-400">5 APE</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                    <div>
                      <p className="font-semibold text-white">Advanced Ape Claims</p>
                      <p className="text-sm text-gray-400">Minimum: 500k APE</p>
                    </div>
                    <span className="text-2xl font-bold text-yellow-400">100 APE</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                    <div>
                      <p className="font-semibold text-white">Elite Ape Claims</p>
                      <p className="text-sm text-gray-400">Minimum: 1 Million APE</p>
                    </div>
                    <span className="text-2xl font-bold text-yellow-400">200 APE</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                    <div>
                      <p className="font-semibold text-white">Premium Ape Claims</p>
                      <p className="text-sm text-gray-400">Minimum: 2 Million APE</p>
                    </div>
                    <span className="text-2xl font-bold text-yellow-400">300 APE</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                    <div>
                      <p className="font-semibold text-white">Prestige Ape Claims</p>
                      <p className="text-sm text-gray-400">Minimum: 5 Million APE</p>
                    </div>
                    <span className="text-2xl font-bold text-yellow-400">500 APE</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-purple-400 mt-8 mb-3">4.1 Claim Mechanics</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Claims are available every 5 hours (Singapore Time, UTC+8)</li>
                <li>Users must verify their identity using World ID to prevent abuse</li>
                <li>Claim amount is determined by the highest tier the user qualifies for</li>
                <li>Unclaimed rewards do not accumulate; users must claim within each cycle</li>
              </ul>
            </section>

            {/* 5. Utility and Use Cases */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">5. Utility and Use Cases</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-3">5.1 Governance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    APE holders will have voting rights on key platform decisions, including feature additions, burn
                    schedules, and reward distribution adjustments. Governance will be implemented through a
                    decentralized voting mechanism.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-3">5.2 Staking Rewards</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Users can stake their APE tokens for a minimum of 6 months to earn 25% APY. Staking reduces
                    circulating supply and rewards long-term commitment to the ecosystem.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-3">5.3 Mini-App Integration</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The upcoming Worldape mini-app on Worldchain will feature exclusive games, social features, and
                    rewards that can only be accessed and earned using APE tokens.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-3">5.4 Liquidity Provision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Users who provide liquidity to the APE/WLD pool on Uniswap V2 will earn trading fees and may be
                    eligible for additional APE rewards through future liquidity mining programs.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Roadmap */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">6. Roadmap</h2>

              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Phase 1: Launch (Completed)</h3>
                  <ul className="space-y-1 text-gray-300 list-disc list-inside">
                    <li>Token deployment on World Chain</li>
                    <li>Liquidity pool creation and locking</li>
                    <li>Website launch</li>
                    <li>Community building</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Phase 2: Burn Mechanics (In Progress)</h3>
                  <ul className="space-y-1 text-gray-300 list-disc list-inside">
                    <li>Automated burn system implementation</li>
                    <li>Market cap milestone tracking</li>
                    <li>Rocket launch progression visualization</li>
                    <li>Transaction verification system</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">
                    Phase 3: Mini App Integration (Pending Review)
                  </h3>
                  <ul className="space-y-1 text-gray-300 list-disc list-inside">
                    <li>World App mini-app launch</li>
                    <li>Daily airdrop claims system</li>
                    <li>World ID verification integration</li>
                    <li>5-hour claim cycles implementation</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">Phase 4: Staking Platform (Upcoming)</h3>
                  <ul className="space-y-1 text-gray-300 list-disc list-inside">
                    <li>Staking contract deployment</li>
                    <li>6-month lockup with 25% APY</li>
                    <li>Staking dashboard and analytics</li>
                    <li>Reward distribution automation</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">Phase 5: Governance (Upcoming)</h3>
                  <ul className="space-y-1 text-gray-300 list-disc list-inside">
                    <li>DAO structure implementation</li>
                    <li>Proposal and voting system</li>
                    <li>Community treasury management</li>
                    <li>Decentralized decision-making</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">Phase 6: Ecosystem Expansion (Upcoming)</h3>
                  <ul className="space-y-1 text-gray-300 list-disc list-inside">
                    <li>CEX listings (target exchanges TBA)</li>
                    <li>Cross-chain bridge development</li>
                    <li>Partnership announcements</li>
                    <li>Additional utility features</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">7. Security and Transparency</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-3">7.1 Smart Contract Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The APE token contract is deployed on World Chain and follows ERC-20 standards. The contract is
                    non-upgradeable and has no admin functions that could compromise user funds.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-3">7.2 Liquidity Lock</h3>
                  <p className="text-gray-300 leading-relaxed">
                    70% of the total supply is locked in the liquidity pool for 6 months, with the lock contract address
                    publicly verifiable. This prevents rug pulls and ensures long-term project commitment.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-3">7.3 Transparent Burns</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All token burns are sent to the dead address (0x000000000000000000000000000000000000dead) and are
                    publicly verifiable on WorldScan. Burn transactions are tracked and displayed on the website.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-3">7.4 World ID Verification</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The tiered claims system requires World ID verification to prevent Sybil attacks and ensure fair
                    distribution of rewards to real users.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. Community */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">8. Community and Social</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Worldape community is the heart of the ecosystem. We encourage active participation through:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Telegram group for real-time discussions and updates</li>
                <li>Twitter/X for announcements and community engagement</li>
                <li>Discord server for governance discussions and support</li>
                <li>Regular AMAs with the development team</li>
                <li>Community-driven content creation and rewards</li>
              </ul>
            </section>

            {/* 9. Legal Disclaimer */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">9. Legal Disclaimer</h2>
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  This white paper is for informational purposes only and does not constitute financial, investment, or
                  legal advice. APE tokens are utility tokens designed for use within the Worldape ecosystem and should
                  not be considered as securities or investment instruments.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cryptocurrency investments carry inherent risks, including but not limited to market volatility,
                  regulatory changes, and technical vulnerabilities. Users should conduct their own research and consult
                  with qualified professionals before participating in the APE ecosystem.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The Worldape team makes no guarantees regarding future token value, platform development timelines, or
                  specific outcomes. All projections and roadmap items are subject to change based on market conditions,
                  technical feasibility, and community governance decisions.
                </p>
              </div>
            </section>

            {/* 10. Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">10. Conclusion</h2>
              <p className="text-gray-300 leading-relaxed">
                The APE Token represents a new paradigm in community-driven rewards and decentralized engagement. By
                combining transparent tokenomics, aggressive deflationary mechanisms, and a tiered reward system, we are
                building an ecosystem that truly values and compensates its participants. With a fixed supply of 100
                million tokens, robust security measures, and a clear roadmap for growth, APE is positioned to become a
                leading utility token in the World Chain ecosystem. Join us on this journey to the moon and beyond.
              </p>
            </section>

            {/* Contact */}
            <section className="border-t border-purple-500/20 pt-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact Information</h2>
              <div className="space-y-2 text-gray-300">
                <p>
                  <strong className="text-purple-400">Website:</strong>{" "}
                  <a href="https://worldape.fun" className="text-cyan-400 hover:text-cyan-300 underline">
                    worldape.fun
                  </a>
                </p>
                <p>
                  <strong className="text-purple-400">Contract:</strong> 0x13e20981D9bd3dC45e99802f06488C5AD7c28360
                </p>
                <p>
                  <strong className="text-purple-400">Email:</strong> contact@worldape.fun
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>© 2025 Worldape.fun. All rights reserved.</p>
          <p className="mt-2">Version 1.0 | Last Updated: January 2025</p>
        </div>
      </div>
    </div>
  )
}

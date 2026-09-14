import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Crosshair, ExternalLink, Gem, Hammer, Shield, Swords, Target, Trophy, Users, Zap } from "lucide-react"

const WORLD_APP_URL = "https://world.org/ecosystem/app_daa4586c54e6f7f1d16cd573d96ad83c"
const MINI_APP_URL = "https://worldcoin.org/mini-app?app_id=app_4593f73390a9843503ec096086b43612&app_mode=mini-app"
const CONTRACT = "0x77a26739f06d9abcf8465aa11ff2f772eb045540"
const DEX_URL = `https://dexscreener.com/worldchain/${CONTRACT}`
const GECKO_URL = `https://www.geckoterminal.com/world-chain/pools/${CONTRACT}`

const features = [
  [Hammer, "Fortress upgrades", "Build a base that can withstand the next attack."],
  [Swords, "Attack & Defence", "Tune your stats and choose how you want to play."],
  [Shield, "Equipment loadout", "Buy and equip gear to shape your battle strategy."],
  [Crosshair, "PvP battle arena", "Fight connected World Ape players in direct combat."],
  [Target, "Scout reports", "Spend Plasma to scout opponents before you commit."],
  [Gem, "Titanite loot", "Win battles, claim Titanite, and invest it back into your base."],
  [Trophy, "Battle Points", "Every fight moves you up the competitive ladder."],
  [Users, "World Ape Club", "Check in daily, complete missions, and stay in the fight."],
] as const

const steps = [
  ["01", "Build your fortress", "Upgrade the systems that protect your territory."],
  ["02", "Equip your gear", "Create a loadout that fits your attack plan."],
  ["03", "Scout or select", "Read the field, then choose a connected player."],
  ["04", "Attack and defend", "Battle for Titanite and improve your base."],
]

const loadoutGroups = [
  {
    label: "ATTACK GEAR",
    accent: "text-fuchsia-300",
    items: [
      ["Banana Bomb", "ATK 18", "A compact blast for opening a breach.", "https://pub-1c4eed914ff74398b885854987ee78fa.r2.dev/world-ape-attack-banana-bomb.png"],
      ["Plasma Cannon", "ATK 42", "Focused plasma for fortified targets.", "https://pub-1c4eed914ff74398b885854987ee78fa.r2.dev/space-ape-attack-plasma-cannon.png"],
      ["Space Gorilla Mech", "ATK 88", "Heavy impact when subtlety is not the plan.", "https://pub-1c4eed914ff74398b885854987ee78fa.r2.dev/world-ape-attack-space-gorilla-mech.png"],
    ],
  },
  {
    label: "DEFENCE GEAR",
    accent: "text-cyan-300",
    items: [
      ["Energy Shield", "DEF 24", "Absorb the first strike and hold the line.", "https://pub-1c4eed914ff74398b885854987ee78fa.r2.dev/world-ape-defence-energy-shield.png"],
      ["Rocket Turret", "DEF 51", "Automated firepower for incoming attackers.", "https://pub-1c4eed914ff74398b885854987ee78fa.r2.dev/world-ape-defence-rocket-turret.png"],
      ["Meteor Barrier", "DEF 76", "A last line of defence for serious threats.", "https://pub-1c4eed914ff74398b885854987ee78fa.r2.dev/world-ape-defence-meteor-barrier.png"],
    ],
  },
  {
    label: "FORTRESS BASES",
    accent: "text-amber-300",
    items: [
      ["Base Level 1", "TIER 01", "Start small, scout the arena, and build up.", "https://pub-1c4eed914ff74398b885854987ee78fa.r2.dev/world-ape-base-level-1.png"],
      ["Base Level 8", "TIER 08", "A growing fortress with room for stronger gear.", "https://pub-1c4eed914ff74398b885854987ee78fa.r2.dev/world-ape-base-level-8.png"],
      ["Base Level 26", "TIER 26", "The endgame stronghold built to be challenged.", "https://pub-1c4eed914ff74398b885854987ee78fa.r2.dev/world-ape-base-level-26.png"],
    ],
  },
  {
    label: "RESOURCES",
    accent: "text-lime-300",
    items: [
      ["Titanite", "LOOT", "Claimed from victories and invested into your base.", "https://pub-1c4eed914ff74398b885854987ee78fa.r2.dev/titanite.png"],
      ["Plasma", "FUEL", "Power battles, scouting, and your next move.", "https://pub-1c4eed914ff74398b885854987ee78fa.r2.dev/plasma.png"],
    ],
  },
] as const

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="World Ape home"><Image src="/images/world-ape-hero.png" alt="World Ape" width={42} height={42} className="rounded-xl ring-1 ring-cyan-300/40" priority /><span className="font-mono text-sm font-bold tracking-[0.25em] text-white">WORLD APE</span></Link>
        <nav className="hidden items-center gap-8 text-xs font-bold tracking-[0.2em] text-slate-400 md:flex"><a href="#game" className="transition hover:text-cyan-300">THE GAME</a><a href="#features" className="transition hover:text-cyan-300">FEATURES</a><Link href="/roadmap" className="transition hover:text-cyan-300">ROADMAP</Link><Link href="/chart" className="transition hover:text-cyan-300">CHART</Link></nav>
        <a href={WORLD_APP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cyan-300/50 bg-cyan-300 px-4 py-2 text-xs font-black tracking-widest text-slate-950 transition hover:bg-white">PLAY NOW</a>
      </header>

      <section className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:pb-28 lg:pt-16">
        <div className="relative z-10"><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-2 font-mono text-[10px] font-bold tracking-[0.22em] text-fuchsia-200"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" /> WORLD CHAIN // ONLINE ARENA</div><h1 className="max-w-3xl text-5xl font-black leading-[.94] tracking-[-.06em] text-white sm:text-7xl lg:text-8xl">BUILD YOUR<br /><span className="text-cyan-300">FORTRESS.</span><br />BREAK THE <span className="text-fuchsia-400">META.</span></h1><p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">World Ape is a competitive strategy game for players who build, gear up, scout connected opponents, and fight for control of the arena.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={WORLD_APP_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 rounded-xl bg-cyan-300 px-6 py-4 text-sm font-black tracking-widest text-slate-950 transition hover:bg-white">PLAY WORLD APE <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a><Link href="/chart" className="flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-black tracking-widest text-white transition hover:border-cyan-300/60 hover:bg-white/10">VIEW TOKEN / CHART</Link></div><p className="mt-5 font-mono text-[10px] tracking-[0.18em] text-slate-500">A PUBLIC MINI-APP BUILT FOR THE WORLD APP ECOSYSTEM</p></div>
        <div className="relative mx-auto w-full max-w-[510px]"><div className="absolute inset-10 rounded-full bg-fuchsia-500/20 blur-[100px]" /><div className="relative rounded-[2rem] border border-cyan-300/30 bg-slate-950/50 p-3 shadow-2xl shadow-fuchsia-950/40 backdrop-blur-sm"><div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-indigo-950 via-slate-950 to-fuchsia-950/60 p-8 sm:p-12"><div className="mb-8 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-cyan-300"><span>SECTOR 07</span><span className="text-fuchsia-300">LIVE // PVP</span></div><Image src="/images/world-ape-hero.png" alt="World Ape space ape commander" width={340} height={340} className="mx-auto w-full max-w-[340px] rounded-3xl object-cover shadow-[0_0_70px_rgba(34,211,238,.2)]" priority /><div className="mt-8 grid grid-cols-3 gap-2 font-mono text-[10px] text-slate-400"><div className="rounded-lg border border-white/10 p-3"><span className="block text-cyan-300">ATK</span> 084</div><div className="rounded-lg border border-white/10 p-3"><span className="block text-fuchsia-300">DEF</span> 071</div><div className="rounded-lg border border-white/10 p-3"><span className="block text-amber-300">BP</span> 2480</div></div></div></div></div>
      </section>

      <section id="game" className="border-y border-white/10 bg-black/20 px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="font-mono text-xs font-bold tracking-[.3em] text-cyan-300">01 // THE MISSION</p><h2 className="mt-4 max-w-lg text-4xl font-black tracking-[-.04em] text-white sm:text-6xl">A STRATEGY GAME<br /><span className="text-fuchsia-400">IN ORBIT.</span></h2></div><p className="max-w-2xl text-lg leading-8 text-slate-300">The arena is connected. Build a fortress, improve Attack and Defence, buy the right equipment, then take your shot. Every decision changes your next battle.</p></div><div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-white/[.04] p-6"><Zap className="h-6 w-6 text-cyan-300" /><h3 className="mt-8 font-bold text-white">PLASMA</h3><p className="mt-2 text-sm leading-6 text-slate-400">Fuel for battles and optional scouting.</p></div><div className="rounded-2xl border border-white/10 bg-white/[.04] p-6"><Gem className="h-6 w-6 text-amber-300" /><h3 className="mt-8 font-bold text-white">TITANITE</h3><p className="mt-2 text-sm leading-6 text-slate-400">Loot from victories. Invest it into your fortress.</p></div><div className="rounded-2xl border border-white/10 bg-white/[.04] p-6"><Trophy className="h-6 w-6 text-fuchsia-300" /><h3 className="mt-8 font-bold text-white">BATTLE POINTS</h3><p className="mt-2 text-sm leading-6 text-slate-400">A record of your progress in the arena.</p></div></div></section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="font-mono text-xs font-bold tracking-[.3em] text-fuchsia-300">02 // LOADOUT</p><h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-white sm:text-6xl">PLAY YOUR<br /><span className="text-cyan-300">ANGLE.</span></h2></div><p className="max-w-md text-sm leading-6 text-slate-400">Nine systems. Infinite ways to become the player nobody wants to face.</p></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{features.map(([Icon, title, copy]) => <article key={title} className="group rounded-2xl border border-white/10 bg-white/[.03] p-5 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/[.06]"><Icon className="h-5 w-5 text-cyan-300 transition group-hover:text-fuchsia-300" /><h3 className="mt-8 text-sm font-bold text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{copy}</p></article>)}</div><div className="mt-4 rounded-2xl border border-dashed border-fuchsia-400/30 bg-fuchsia-400/[.04] p-5"><p className="font-mono text-xs font-bold tracking-widest text-fuchsia-300">INCOMING // TOWER DEFENCE</p><p className="mt-2 text-sm text-slate-400">A new way to defend your territory is coming soon.</p></div></section>

      <section id="loadout" className="border-y border-white/10 bg-[radial-gradient(circle_at_top,rgba(88,28,135,.24),transparent_55%)] px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="font-mono text-xs font-bold tracking-[.3em] text-fuchsia-300">02 // WORLD APE LOADOUT</p><h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-white sm:text-6xl">SEE YOUR<br /><span className="text-cyan-300">ARSENAL.</span></h2></div><p className="max-w-md text-sm leading-6 text-slate-400">Real equipment, real resources, and real fortress tiers. Build a loadout that fits your battle plan.</p></div><div className="mt-12 space-y-12">{loadoutGroups.map((group) => <div key={group.label}><div className="mb-4 flex items-center gap-3"><span className={`font-mono text-xs font-bold tracking-[.25em] ${group.accent}`}>{group.label}</span><span className="h-px flex-1 bg-white/10" /></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{group.items.map(([name, stat, description, image]) => <article key={name} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_18px_50px_rgba(34,211,238,.12)]"><div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950/80 via-slate-950 to-fuchsia-950/40 p-5"><div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:22px_22px]" /><img src={image} alt={name} loading="lazy" className="relative h-full w-full object-contain transition duration-500 group-hover:scale-110" /></div><div className="p-5"><div className="flex items-start justify-between gap-3"><h3 className="text-sm font-bold text-white">{name}</h3><span className="shrink-0 rounded-full border border-white/15 px-2 py-1 font-mono text-[9px] font-bold tracking-widest text-cyan-200">{stat}</span></div><p className="mt-3 text-xs leading-5 text-slate-400">{description}</p></div></article>)}</div></div>)}</div></div></section>

      <section className="border-y border-white/10 bg-indigo-950/20 px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><p className="font-mono text-xs font-bold tracking-[.3em] text-cyan-300">03 // THE LOOP</p><h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-white sm:text-6xl">MAKE A MOVE.<br /><span className="text-fuchsia-400">MAKE IT COUNT.</span></h2><div className="mt-14 grid gap-4 md:grid-cols-4">{steps.map(([number, title, copy]) => <div key={number} className="relative border-l border-cyan-300/30 pl-5"><span className="font-mono text-xs text-cyan-300">{number}</span><h3 className="mt-8 font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p></div>)}</div></div></section>

      <section id="token" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center"><div><p className="font-mono text-xs font-bold tracking-[.3em] text-amber-300">04 // TOKEN INTEL</p><h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-white sm:text-6xl">CHECK THE<br /><span className="text-amber-300">SIGNAL.</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-slate-400">Review the live market information and token details through the existing public tools.</p><div className="mt-8 flex flex-wrap gap-3"><a href={DEX_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-amber-300/40 px-4 py-3 text-xs font-bold tracking-widest text-amber-200 transition hover:bg-amber-300/10">DEX SCREENER <ExternalLink className="h-3 w-3" /></a><a href={GECKO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-xs font-bold tracking-widest text-slate-300 transition hover:bg-white/10">GECKOTERMINAL <ExternalLink className="h-3 w-3" /></a></div><p className="mt-6 break-all font-mono text-[10px] leading-5 text-slate-500">CONTRACT<br />{CONTRACT}</p></div><div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30"><div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><span className="font-mono text-xs tracking-widest text-white">LIVE MARKET VIEW</span><span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" /></div><iframe src={`${DEX_URL}?embed=1&theme=dark&info=0`} className="h-[420px] w-full" title="World Ape DEX Screener chart" /></div></div></section>

      <section className="px-5 pb-24 pt-8 text-center sm:px-8 lg:pb-32"><div className="mx-auto max-w-4xl rounded-[2rem] border border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-500/10 via-indigo-950/40 to-cyan-300/10 px-6 py-16 sm:px-12"><p className="font-mono text-xs font-bold tracking-[.3em] text-cyan-300">05 // ENTER THE ARENA</p><h2 className="mt-5 text-4xl font-black tracking-[-.05em] text-white sm:text-7xl">YOUR FORTRESS<br /><span className="text-fuchsia-400">IS WAITING.</span></h2><p className="mx-auto mt-6 max-w-lg text-slate-300">Open World Ape in World App and make your first move.</p><a href={WORLD_APP_URL} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-xl bg-cyan-300 px-7 py-4 text-sm font-black tracking-widest text-slate-950 transition hover:bg-white">PLAY WORLD APE <ArrowRight className="h-4 w-4" /></a><a href={MINI_APP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 block text-xs font-bold tracking-widest text-slate-500 underline decoration-slate-700 underline-offset-4 transition hover:text-white">OPEN MINI-APP DIRECTLY</a></div></section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><Image src="/images/world-ape-hero.png" alt="World Ape" width={28} height={28} className="rounded-lg" /><span className="font-mono font-bold tracking-widest text-slate-300">WORLD APE</span></div><div className="flex flex-wrap gap-5 font-bold tracking-widest"><Link href="/roadmap" className="hover:text-white">ROADMAP</Link><Link href="/chart" className="hover:text-white">CHART</Link><a href={GECKO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">GECKOTERMINAL</a><a href="https://x.com/hellowldcoin" target="_blank" rel="noopener noreferrer" className="hover:text-white">X</a><a href="https://t.me/WLD_APE" target="_blank" rel="noopener noreferrer" className="hover:text-white">TELEGRAM</a></div><p>© 2026 WORLD APE // BUILT FOR THE ARENA</p></div></footer>
    </main>
  )
}

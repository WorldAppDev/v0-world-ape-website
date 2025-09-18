export function Footer() {
  return (
    <footer className="py-12 px-4 bg-card/30 border-t border-border/50">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              WORLD APE
            </h3>
            <p className="text-muted-foreground">The official mascot of the worldchain crypto space</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              Telegram
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Discord
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Chart
            </a>
          </div>

          <div className="border-t border-border/50 pt-8">
            <p className="text-muted-foreground text-sm">
              © 2024 World Ape. This is a meme coin with no utility. Invest responsibly and only what you can afford to
              lose. 🦍🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

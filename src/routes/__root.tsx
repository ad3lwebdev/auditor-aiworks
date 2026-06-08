import { HeadContent, Scripts, createRootRoute, Link, useRouterState } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Adel Auditor — AI Automation Architect' },
      { name: 'description', content: 'AI Automation Architect & n8n Expert. Building intelligent workflows that scale.' },
    ],
  }),
  shellComponent: RootDocument,
})

const navLinks = [
  { to: '/' as const, label: 'Home' },
  { to: '/projects' as const, label: 'Projects' },
  { to: '/resume' as const, label: 'Resume' },
  { to: '/blog' as const, label: 'Blog' },
  { to: '/contact' as const, label: 'Contact' },
]

function Nav() {
  const router = useRouterState()
  const pathname = router.location.pathname

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-display font-800 text-white text-sm tracking-tight">
              AA
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-green-400 border border-background" />
          </div>
          <span className="font-display font-semibold text-foreground text-sm tracking-wide hidden sm:block">
            Adel Auditor
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = link.to === '/' ? pathname === '/' : pathname.startsWith(link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-600/20 text-orange-400'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border mt-24 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-orange-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold font-display">AA</span>
          </div>
          <span className="text-muted-foreground text-sm font-display">Adel Auditor</span>
        </div>
        <p className="text-muted-foreground text-xs mono">
          AI Automation Architect · n8n Expert · Building workflows that scale
        </p>
        <div className="flex gap-4">
          <a href="https://github.com" className="text-muted-foreground hover:text-orange-400 transition-colors text-sm">
            GitHub
          </a>
          <a href="https://linkedin.com" className="text-muted-foreground hover:text-orange-400 transition-colors text-sm">
            LinkedIn
          </a>
          <a href="https://twitter.com" className="text-muted-foreground hover:text-orange-400 transition-colors text-sm">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <Nav />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}

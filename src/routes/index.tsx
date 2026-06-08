import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function WorkflowDiagram() {
  return (
    <div className="relative w-full h-80 lg:h-96">
      <svg
        viewBox="0 0 480 320"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection paths */}
        <path
          d="M 100 80 C 160 80, 160 140, 220 140"
          fill="none"
          stroke="rgba(234,88,12,0.5)"
          strokeWidth="1.5"
          className="workflow-path"
        />
        <path
          d="M 100 160 C 160 160, 160 140, 220 140"
          fill="none"
          stroke="rgba(234,88,12,0.35)"
          strokeWidth="1.5"
          className="workflow-path-slow"
        />
        <path
          d="M 100 240 C 160 240, 160 200, 220 200"
          fill="none"
          stroke="rgba(234,88,12,0.3)"
          strokeWidth="1.5"
          className="workflow-path"
          style={{ animationDelay: '0.4s' }}
        />
        <path
          d="M 280 140 C 340 140, 340 160, 380 160"
          fill="none"
          stroke="rgba(234,88,12,0.6)"
          strokeWidth="2"
          className="workflow-path"
          style={{ animationDelay: '0.2s' }}
        />
        <path
          d="M 280 200 C 340 200, 340 160, 380 160"
          fill="none"
          stroke="rgba(234,88,12,0.4)"
          strokeWidth="1.5"
          className="workflow-path-slow"
          style={{ animationDelay: '0.6s' }}
        />

        {/* Trigger node */}
        <g className="workflow-node" style={{ animationDelay: '0s' }}>
          <rect x="40" y="56" width="60" height="48" rx="8" fill="rgba(13,13,20,0.9)" stroke="rgba(234,88,12,0.8)" strokeWidth="1.5" />
          <rect x="40" y="56" width="60" height="8" rx="4" fill="rgba(234,88,12,0.6)" />
          <text x="70" y="79" textAnchor="middle" fill="#f97316" fontSize="8" fontFamily="IBM Plex Mono" fontWeight="600">TRIGGER</text>
          <text x="70" y="93" textAnchor="middle" fill="#7a7a9a" fontSize="7" fontFamily="IBM Plex Mono">Webhook</text>
        </g>

        {/* HTTP node */}
        <g className="workflow-node" style={{ animationDelay: '0.1s' }}>
          <rect x="40" y="136" width="60" height="48" rx="8" fill="rgba(13,13,20,0.9)" stroke="rgba(99,102,241,0.6)" strokeWidth="1.5" />
          <rect x="40" y="136" width="60" height="8" rx="4" fill="rgba(99,102,241,0.4)" />
          <text x="70" y="159" textAnchor="middle" fill="#818cf8" fontSize="8" fontFamily="IBM Plex Mono" fontWeight="600">HTTP</text>
          <text x="70" y="173" textAnchor="middle" fill="#7a7a9a" fontSize="7" fontFamily="IBM Plex Mono">Request</text>
        </g>

        {/* Schedule node */}
        <g className="workflow-node" style={{ animationDelay: '0.15s' }}>
          <rect x="40" y="216" width="60" height="48" rx="8" fill="rgba(13,13,20,0.9)" stroke="rgba(34,197,94,0.5)" strokeWidth="1.5" />
          <rect x="40" y="216" width="60" height="8" rx="4" fill="rgba(34,197,94,0.3)" />
          <text x="70" y="239" textAnchor="middle" fill="#4ade80" fontSize="8" fontFamily="IBM Plex Mono" fontWeight="600">SCHEDULE</text>
          <text x="70" y="253" textAnchor="middle" fill="#7a7a9a" fontSize="7" fontFamily="IBM Plex Mono">Cron</text>
        </g>

        {/* AI / GPT node - center */}
        <g className="workflow-node" style={{ animationDelay: '0.25s' }}>
          <rect x="200" y="108" width="80" height="64" rx="8" fill="rgba(13,13,20,0.95)" stroke="#ea580c" strokeWidth="2" />
          <rect x="200" y="108" width="80" height="10" rx="4" fill="rgba(234,88,12,0.7)" />
          <text x="240" y="129" textAnchor="middle" fill="#f97316" fontSize="9" fontFamily="IBM Plex Mono" fontWeight="700">AI AGENT</text>
          <text x="240" y="145" textAnchor="middle" fill="#f0f0f5" fontSize="7.5" fontFamily="IBM Plex Mono">GPT-4o</text>
          <text x="240" y="160" textAnchor="middle" fill="#7a7a9a" fontSize="7" fontFamily="IBM Plex Mono">Processing...</text>
          {/* Pulse dot */}
          <circle cx="272" cy="116" r="3" fill="#4ade80">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Output node */}
        <g className="workflow-node" style={{ animationDelay: '0.4s' }}>
          <rect x="360" y="136" width="80" height="48" rx="8" fill="rgba(13,13,20,0.9)" stroke="rgba(234,88,12,0.6)" strokeWidth="1.5" />
          <rect x="360" y="136" width="80" height="8" rx="4" fill="rgba(234,88,12,0.5)" />
          <text x="400" y="158" textAnchor="middle" fill="#f97316" fontSize="8" fontFamily="IBM Plex Mono" fontWeight="600">NOTIFY</text>
          <text x="400" y="172" textAnchor="middle" fill="#7a7a9a" fontSize="7" fontFamily="IBM Plex Mono">Slack + Email</text>
        </g>

        {/* Decorative grid dots */}
        {[...Array(6)].map((_, i) =>
          [...Array(4)].map((_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={20 + i * 80}
              cy={20 + j * 80}
              r="1"
              fill="rgba(234,88,12,0.1)"
            />
          ))
        )}
      </svg>

      {/* Glow under diagram */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 glow-orb pointer-events-none" />
    </div>
  )
}

const stats = [
  { value: '200+', label: 'Workflows Deployed', delay: '0.1s' },
  { value: '47M+', label: 'Tasks Automated', delay: '0.2s' },
  { value: '91%', label: 'Time Saved Avg.', delay: '0.3s' },
  { value: '38', label: 'Enterprise Clients', delay: '0.4s' },
]

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Workflow Architecture',
    desc: 'End-to-end n8n workflow design for complex business logic, multi-step integrations, and error-resilient pipelines.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'AI Integration',
    desc: 'Connecting LLMs (GPT-4, Claude, Gemini) into production workflows with structured outputs, fallback chains, and prompt versioning.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M3 4.5v15A2.25 2.25 0 005.25 21.75h6a2.25 2.25 0 002.25-2.25v-2.625M3 4.5A2.25 2.25 0 015.25 2.25h7.5A2.25 2.25 0 0115 4.5v9.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'API & Data Pipelines',
    desc: 'Unified data flows connecting CRMs, databases, SaaS tools, and custom APIs — synced, transformed, and delivered on schedule.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Self-Hosted n8n Setup',
    desc: 'Secure, scalable n8n deployments on your infrastructure — Docker, Kubernetes, or cloud VMs — with monitoring and backups.',
  },
]

const tools = [
  'n8n', 'OpenAI GPT-4o', 'Anthropic Claude', 'Google Gemini',
  'Slack API', 'Notion API', 'HubSpot', 'Airtable',
  'PostgreSQL', 'Supabase', 'Zapier (migration)', 'Make.com',
  'Docker', 'Kubernetes', 'AWS Lambda', 'Cloudflare Workers',
]

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-60" />
      <div className="fixed top-0 right-0 w-96 h-96 glow-orb pointer-events-none opacity-60" />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="space-y-8" style={{ animation: 'fade-up 0.7s ease-out both' }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-600/30 bg-orange-600/10">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="mono text-orange-400 text-xs font-medium tracking-wider">AVAILABLE FOR NEW PROJECTS</span>
              </div>

              <div>
                <h1 className="font-display font-bold text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight text-foreground">
                  Automating<br />
                  <span className="text-gradient-orange">the work</span><br />
                  humans hate.
                </h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                AI Automation Architect with 6+ years building production-grade n8n workflows.
                I turn repetitive processes into intelligent, self-running systems.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm transition-all duration-200 animate-glow"
                >
                  View Projects
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-orange-600/40 text-foreground font-medium text-sm transition-all duration-200 hover:bg-secondary"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Stack chips */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-muted-foreground text-xs mono">CORE STACK:</span>
                {['n8n', 'GPT-4o', 'Python', 'Docker'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded border border-border bg-secondary text-xs mono text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Workflow diagram */}
            <div
              className="relative"
              style={{ animation: 'fade-in 1s ease-out 0.3s both' }}
            >
              <div className="relative rounded-xl border border-border bg-card/80 p-2 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-border mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="mono text-muted-foreground text-xs ml-2">customer-support-triage.n8n</span>
                  <span className="ml-auto flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="mono text-green-400 text-xs">Active</span>
                  </span>
                </div>
                <WorkflowDiagram />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative border-y border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ animation: `counter-up 0.6s ease-out ${stat.delay} both` }}
              >
                <div className="font-display font-bold text-3xl lg:text-4xl text-gradient-orange">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="mono text-orange-400 text-xs tracking-widest">WHAT I BUILD</span>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mt-2 text-foreground">
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="card-hover group p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.1}s both` }}
            >
              <div className="w-10 h-10 rounded-lg bg-orange-600/15 border border-orange-600/25 flex items-center justify-center text-orange-400 mb-4 group-hover:bg-orange-600/25 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="relative border-t border-border bg-card/20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-shrink-0">
              <span className="mono text-orange-400 text-xs tracking-widest block mb-1">TOOLBOX</span>
              <h2 className="font-display font-bold text-2xl text-foreground">Stack & Tools</h2>
            </div>
            <div className="flex flex-wrap gap-2 flex-1">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg border border-border bg-secondary text-xs mono text-muted-foreground hover:border-orange-600/40 hover:text-orange-400 transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="relative rounded-2xl border border-orange-600/20 bg-gradient-to-br from-orange-600/10 to-transparent p-10 lg:p-16 overflow-hidden text-center">
          <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4 relative">
            Ready to automate your workflows?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let's discuss your automation challenges. Free 30-minute discovery call to map out what's possible.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold transition-all duration-200 text-sm"
          >
            Start a Conversation
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ExternalLink, Github, Zap } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

const categoryColors: Record<string, string> = {
  'AI Automation': 'text-orange-400 bg-orange-600/15 border-orange-600/25',
  'Data Pipeline': 'text-indigo-400 bg-indigo-600/15 border-indigo-600/25',
  'Workflow': 'text-green-400 bg-green-600/15 border-green-600/25',
  'Integration': 'text-blue-400 bg-blue-600/15 border-blue-600/25',
}

function Projects() {
  const [featured, ...others] = allProjects

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        {/* Header */}
        <div className="mb-16" style={{ animation: 'fade-up 0.6s ease-out both' }}>
          <span className="mono text-orange-400 text-xs tracking-widest">CASE STUDIES</span>
          <h1 className="font-display font-bold text-4xl lg:text-5xl mt-2 text-foreground">
            Automation Projects
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Real-world n8n workflows and AI automation systems built for production. Each project represents a complex business problem solved through intelligent automation.
          </p>
        </div>

        {/* Featured project */}
        {featured && (
          <div
            className="mb-10 rounded-xl border border-border bg-card/60 overflow-hidden card-hover relative"
            style={{ animation: 'fade-up 0.6s ease-out 0.1s both' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-orange-600 via-orange-400 to-transparent" />
            <div className="p-8 lg:p-10">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 rounded border mono text-xs border-orange-600/30 bg-orange-600/10 text-orange-400">
                      FEATURED
                    </span>
                    {featured.tags[0] && (
                      <span className={`px-2 py-0.5 rounded border mono text-xs ${categoryColors[featured.tags[0]] || 'text-muted-foreground bg-secondary border-border'}`}>
                        {featured.tags[0]}
                      </span>
                    )}
                  </div>
                  <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded border border-border bg-secondary mono text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {featured.github && (
                      <a
                        href={featured.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={15} />
                        View on GitHub
                      </a>
                    )}
                    {featured.liveUrl && (
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Workflow preview mockup */}
                <div className="rounded-xl border border-border bg-background/60 p-4 flex items-center justify-center min-h-48">
                  <div className="w-full">
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="mono text-green-400 text-xs">Running</span>
                      <span className="ml-auto mono text-muted-foreground text-xs">
                        <Zap size={10} className="inline mr-1" />
                        2,847 executions
                      </span>
                    </div>
                    <div className="space-y-2">
                      {['Webhook Trigger', 'AI Classification', 'Route Decision', 'Send Response'].map((node, i) => (
                        <div key={node} className="flex items-center gap-2">
                          <div
                            className="w-full rounded border px-3 py-1.5 mono text-xs flex items-center justify-between"
                            style={{
                              borderColor: i === 1 ? 'rgba(234,88,12,0.5)' : 'rgba(30,30,46,1)',
                              background: i === 1 ? 'rgba(234,88,12,0.08)' : 'rgba(17,17,27,0.6)',
                              color: i === 1 ? '#f97316' : '#7a7a9a',
                            }}
                          >
                            {node}
                            {i === 1 && <span className="text-green-400">✓</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((project, i) => (
            <div
              key={project._meta.path}
              className="card-hover group flex flex-col rounded-xl border border-border bg-card/60 overflow-hidden"
              style={{ animation: `fade-up 0.6s ease-out ${0.2 + i * 0.08}s both` }}
            >
              {/* Top accent */}
              <div className="h-px bg-gradient-to-r from-orange-600/60 to-transparent" />

              <div className="p-6 flex-1 flex flex-col">
                {/* Category */}
                {project.tags[0] && (
                  <span className={`inline-flex self-start px-2 py-0.5 rounded border mono text-xs mb-4 ${categoryColors[project.tags[0]] || 'text-muted-foreground bg-secondary border-border'}`}>
                    {project.tags[0]}
                  </span>
                )}

                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(1).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded border border-border bg-secondary mono text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-3 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={13} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 transition-colors ml-auto"
                    >
                      <ExternalLink size={13} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center p-8 rounded-xl border border-border bg-card/40">
          <p className="text-muted-foreground mb-4">
            Interested in a custom automation solution?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  )
}

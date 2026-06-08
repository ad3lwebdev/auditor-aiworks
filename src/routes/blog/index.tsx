import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  const posts = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  const [featured, ...rest] = posts

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        {/* Header */}
        <div className="mb-16" style={{ animation: 'fade-up 0.6s ease-out both' }}>
          <span className="mono text-orange-400 text-xs tracking-widest">INSIGHTS & TUTORIALS</span>
          <h1 className="font-display font-bold text-4xl lg:text-5xl mt-2 text-foreground">
            The Automation Lab
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Deep dives into n8n workflows, AI integration patterns, and the craft of building automation systems that last.
          </p>
        </div>

        {posts.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <div className="mono text-xs tracking-wider mb-2">NO POSTS YET</div>
            <p>Coming soon — check back shortly.</p>
          </div>
        )}

        {/* Featured post */}
        {featured && (
          <Link
            to="/blog/$slug"
            params={{ slug: featured._meta.path }}
            className="block mb-10 group"
            style={{ animation: 'fade-up 0.6s ease-out 0.1s both' }}
          >
            <div className="card-hover rounded-xl border border-border bg-card/60 p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-600 to-transparent" />
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 rounded bg-orange-600/20 border border-orange-600/30 mono text-orange-400 text-xs">FEATURED</span>
              </div>
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-3 group-hover:text-orange-400 transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                {featured.summary}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {new Date(featured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                  <span>·</span>
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {Math.ceil(featured.content.split(' ').length / 200)} min read
                  </span>
                </div>
                <span className="flex items-center gap-1 text-orange-400 text-sm group-hover:gap-2 transition-all">
                  Read <ArrowRight size={14} />
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {featured.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded border border-border bg-secondary mono text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        )}

        {/* Rest of posts */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((post, i) => (
              <Link
                key={post._meta.path}
                to="/blog/$slug"
                params={{ slug: post._meta.path }}
                className="block group"
                style={{ animation: `fade-up 0.6s ease-out ${0.2 + i * 0.1}s both` }}
              >
                <div className="card-hover h-full rounded-xl border border-border bg-card/60 p-6 flex flex-col">
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-orange-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.summary}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 mono text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded border border-border bg-secondary mono text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

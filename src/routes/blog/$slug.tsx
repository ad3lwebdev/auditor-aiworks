import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mono text-orange-400 text-xs tracking-widest mb-3">404</div>
          <h1 className="font-display font-bold text-2xl text-foreground mb-4">Post not found</h1>
          <Link to="/blog" className="text-orange-400 hover:text-orange-300 transition-colors text-sm">
            Back to blog
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)
  const readTime = Math.ceil(post.content.split(' ').length / 200)

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-30" />

      <div className="max-w-3xl mx-auto px-6 py-16 relative">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-orange-400 transition-colors text-sm mb-12"
        >
          <ArrowLeft size={14} />
          Back to blog
        </Link>

        <article style={{ animation: 'fade-up 0.6s ease-out both' }}>
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded border border-orange-600/30 bg-orange-600/10 mono text-orange-400 text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {post.summary}
            </p>
            <div className="flex items-center gap-4 text-xs mono text-muted-foreground pt-4 border-t border-border">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span>·</span>
              <span className="text-foreground font-medium">{post.author}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {readTime} min read
              </span>
            </div>
          </header>

          <div
            className="prose prose-invert prose-orange max-w-none
              prose-headings:font-display prose-headings:font-semibold prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-orange-400 prose-a:no-underline hover:prose-a:underline
              prose-code:text-orange-300 prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-secondary prose-pre:border prose-pre:border-border prose-pre:rounded-xl
              prose-blockquote:border-l-orange-600 prose-blockquote:text-muted-foreground
              prose-strong:text-foreground
              prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </div>
  )
}

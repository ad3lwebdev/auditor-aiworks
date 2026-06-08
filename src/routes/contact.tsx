import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Send, Mail, MessageSquare, User, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const services = [
  'Workflow Architecture & Design',
  'AI Agent Integration',
  'n8n Self-Hosted Setup',
  'API & Data Pipeline',
  'Automation Audit',
  'Training & Consulting',
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md mx-auto" style={{ animation: 'fade-up 0.6s ease-out both' }}>
          <div className="w-16 h-16 rounded-2xl bg-orange-600/20 border border-orange-600/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-orange-400" />
          </div>
          <h2 className="font-display font-bold text-2xl text-foreground mb-2">Message received!</h2>
          <p className="text-muted-foreground mb-8">
            Thanks for reaching out. I typically respond within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 rounded-lg border border-border bg-secondary text-sm text-foreground hover:border-orange-600/40 transition-colors"
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto px-6 py-16 relative">
        {/* Header */}
        <div className="mb-16" style={{ animation: 'fade-up 0.6s ease-out both' }}>
          <span className="mono text-orange-400 text-xs tracking-widest">LET'S WORK TOGETHER</span>
          <h1 className="font-display font-bold text-4xl lg:text-5xl mt-2 text-foreground">
            Start a project
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Have an automation challenge? Drop a message and let's explore what's possible.
            Free 30-minute discovery call included.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3" style={{ animation: 'fade-up 0.6s ease-out 0.1s both' }}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const formData = new FormData(form)
                if (selected) formData.set('service', selected)
                fetch('/contact.html', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
                }).then(() => setSubmitted(true))
              }}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-2 mono tracking-wider uppercase">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:border-orange-600/60 focus:ring-1 focus:ring-orange-600/40 transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-2 mono tracking-wider uppercase">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:border-orange-600/60 focus:ring-1 focus:ring-orange-600/40 transition-colors text-sm"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
              </div>

              {/* Service selector */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 mono tracking-wider uppercase">
                  Service (optional)
                </label>
                <input type="hidden" name="service" value={selected || ''} />
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelected(selected === s ? null : s)}
                      className={`px-3 py-1.5 rounded-lg border text-xs mono transition-all ${
                        selected === s
                          ? 'border-orange-600/60 bg-orange-600/15 text-orange-400'
                          : 'border-border bg-secondary text-muted-foreground hover:border-orange-600/30 hover:text-foreground'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-2 mono tracking-wider uppercase">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:border-orange-600/60 focus:ring-1 focus:ring-orange-600/40 transition-colors resize-none text-sm"
                    placeholder="Describe what you'd like to automate, the current process, and any tools you're using..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-medium text-sm transition-all duration-200 w-full justify-center"
              >
                <Send size={15} />
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-2 space-y-6" style={{ animation: 'fade-up 0.6s ease-out 0.2s both' }}>
            <div className="rounded-xl border border-border bg-card/60 p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">What to expect</h3>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Discovery call', desc: '30 min to understand your processes and automation goals.' },
                  { step: '02', title: 'Scope & proposal', desc: 'Detailed workflow architecture plan and timeline estimate.' },
                  { step: '03', title: 'Build & deploy', desc: 'Iterative n8n development with testing at each stage.' },
                  { step: '04', title: 'Handoff & docs', desc: 'Full documentation and training for your team.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <span className="mono text-orange-400 text-xs font-bold flex-shrink-0 mt-0.5">{item.step}</span>
                    <div>
                      <div className="text-sm font-medium text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6 space-y-3">
              <h3 className="font-display font-semibold text-foreground mb-2">Availability</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-muted-foreground">Taking new projects — June 2026</span>
              </div>
              <div className="mono text-xs text-muted-foreground">
                Typical response time: &lt; 24 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

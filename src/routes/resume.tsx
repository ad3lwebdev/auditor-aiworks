import { createFileRoute, Link } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { marked } from 'marked'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

const skills = [
  { name: 'n8n Workflow Design', level: 98 },
  { name: 'AI/LLM Integration', level: 94 },
  { name: 'API Architecture', level: 91 },
  { name: 'Python Scripting', level: 87 },
  { name: 'Docker & DevOps', level: 82 },
  { name: 'Data Transformation', level: 89 },
  { name: 'Prompt Engineering', level: 93 },
  { name: 'Webhook Systems', level: 96 },
]

const certifications = [
  { name: 'n8n Certified Expert', issuer: 'n8n.io', year: '2023' },
  { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', year: '2022' },
  { name: 'OpenAI API Developer', issuer: 'OpenAI', year: '2023' },
]

function Resume() {
  const jobs = [...allJobs].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto px-6 py-16 relative">
        {/* Header */}
        <div className="mb-16" style={{ animation: 'fade-up 0.6s ease-out both' }}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center font-display font-bold text-2xl text-white">
                  AA
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-background" />
              </div>
              <div>
                <span className="mono text-orange-400 text-xs tracking-widest block mb-1">RESUME</span>
                <h1 className="font-display font-bold text-3xl lg:text-4xl text-foreground">Adel Auditor</h1>
                <p className="text-muted-foreground mt-1">AI Automation Architect · n8n Expert</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary text-sm text-foreground hover:border-orange-600/40 transition-colors"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-orange-400">
                  <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                </svg>
                Download PDF
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm transition-colors"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Summary */}
            <section style={{ animation: 'fade-up 0.6s ease-out 0.1s both' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 rounded-full bg-orange-600" />
                <h2 className="font-display font-semibold text-xl text-foreground">Professional Summary</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                AI Automation Architect with 6+ years specialising in n8n workflow design and AI integration.
                I've built and deployed 200+ production workflows for enterprise clients across SaaS, e-commerce,
                and finance. My focus is on designing automation systems that are resilient, observable, and
                genuinely reduce human toil — not just technically impressive but operationally sound.
              </p>
            </section>

            {/* Experience */}
            <section style={{ animation: 'fade-up 0.6s ease-out 0.2s both' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 rounded-full bg-orange-600" />
                <h2 className="font-display font-semibold text-xl text-foreground">Experience</h2>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-3.5 top-2 bottom-2 w-px bg-border" />

                <div className="space-y-10">
                  {jobs.map((job, i) => (
                    <div
                      key={job.jobTitle}
                      className="relative pl-12"
                      style={{ animation: `fade-up 0.5s ease-out ${0.3 + i * 0.1}s both` }}
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-0 top-1 w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                        i === 0
                          ? 'border-orange-600 bg-orange-600/20'
                          : 'border-border bg-background'
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-orange-400' : 'bg-muted-foreground'}`} />
                      </div>

                      <div className="rounded-xl border border-border bg-card/60 p-6">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h3 className="font-display font-semibold text-lg text-foreground">
                              {job.jobTitle}
                            </h3>
                            <p className="text-muted-foreground text-sm mt-0.5">
                              {job.company} — {job.location}
                            </p>
                          </div>
                          <span className="mono text-xs px-2.5 py-1 rounded border border-border bg-secondary text-muted-foreground flex-shrink-0">
                            {job.startDate} — {job.endDate || 'Present'}
                          </span>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {job.summary}
                        </p>

                        {job.content && (
                          <div
                            className="prose prose-invert prose-sm max-w-none
                              prose-p:text-muted-foreground prose-li:text-muted-foreground
                              prose-headings:text-foreground prose-headings:font-display prose-strong:text-foreground"
                            dangerouslySetInnerHTML={{ __html: marked(job.content) as string }}
                          />
                        )}

                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {job.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded border border-border bg-secondary mono text-xs text-muted-foreground hover:border-orange-600/30 hover:text-orange-400 transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Education */}
            <section style={{ animation: 'fade-up 0.6s ease-out 0.5s both' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 rounded-full bg-orange-600" />
                <h2 className="font-display font-semibold text-xl text-foreground">Education</h2>
              </div>
              <div className="space-y-4">
                {allEducations.map((edu) => (
                  <div key={edu.school} className="rounded-xl border border-border bg-card/60 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-semibold text-foreground">{edu.school}</h3>
                      <span className="mono text-xs px-2.5 py-1 rounded border border-border bg-secondary text-muted-foreground">
                        {edu.startDate} — {edu.endDate || 'Present'}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{edu.summary}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <div
              className="rounded-xl border border-border bg-card/60 p-6"
              style={{ animation: 'fade-up 0.6s ease-out 0.2s both' }}
            >
              <h3 className="font-display font-semibold text-foreground mb-6">Core Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="mono text-xs text-orange-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-0.5 bg-border rounded-full overflow-hidden">
                      <div
                        className="skill-bar"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div
              className="rounded-xl border border-border bg-card/60 p-6"
              style={{ animation: 'fade-up 0.6s ease-out 0.3s both' }}
            >
              <h3 className="font-display font-semibold text-foreground mb-4">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-600/15 border border-orange-600/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="#f97316" strokeWidth="1.5">
                        <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="10" cy="10" r="7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-foreground font-medium">{cert.name}</div>
                      <div className="mono text-xs text-muted-foreground">{cert.issuer} · {cert.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div
              className="rounded-xl border border-orange-600/20 bg-orange-600/5 p-6"
              style={{ animation: 'fade-up 0.6s ease-out 0.4s both' }}
            >
              <h3 className="font-display font-semibold text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-orange-400 flex-shrink-0">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"/>
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"/>
                  </svg>
                  <span>adel@adelauditor.dev</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-orange-400 flex-shrink-0">
                    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd"/>
                  </svg>
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition-colors"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

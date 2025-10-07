'use client'
import React from 'react'

const projects = [
  {
    id: 'adaptive-ai',
    title: 'Adaptive AI',
    tagline: 'Introspective, self-adaptive core — memory & simulation focus',
    status: 'v0.2.0-pre',
    repo: '<https://github.com/CodeLikeC/AdaptiveAI->'
  },
  {
    id: 'ibcs',
    title: 'IBCS',
    tagline: 'Introspective Behavioral Compiler System',
    status: 'in-progress',
    repo: '<https://github.com/your-org/ibcs>'
  },
  {
    id: 'aifordriver',
    title: 'AIForDriver',
    tagline: 'Applied safety & context reasoning',
    status: 'concept',
    repo: '<https://github.com/your-org/aifordriver>'
  },
  {
    id: 'adaptive-os',
    title: 'Adaptive OS',
    tagline: 'Root-level protection & behavior orchestration',
    status: 'research',
    repo: '#'
  }
]

function Nav() {
  return (
    <nav className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center text-white font-semibold">TN</div>
        <div className="text-gray-200 text-sm">Tri ND — Adaptive Systems</div>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
        <a href="#philosophy" className="text-gray-300 hover:text-white">Philosophy</a>
        <a href="#timeline" className="text-gray-300 hover:text-white">Timeline</a>
        <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Adaptive AI — an architecture that remembers itself</h1>
          <p className="mt-6 text-gray-300 max-w-xl">Building introspective systems: memory-first design, sandboxed simulation, and ethical adaptive loops. Founder-driven research and modular codebases — view repositories and join early-stage collaboration.</p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="px-5 py-2 rounded-md bg-white text-slate-900 font-medium">Explore projects</a>
            <a href="<https://github.com/your-org>" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-md border border-slate-600 text-gray-300">GitHub</a>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-lg card-glass">
            <pre className="text-sm text-gray-200 font-mono overflow-x-auto">{`// snippet: memory snapshot API
snapshot = Memory.create()
snapshot.capture(context)
if (snapshot.diff(prev)) rollback()
`}</pre>
          </div>
        </div>
      </div>
    </header>
  )
}

function ProjectCard({p}){
  return (
    <article className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 hover:-translate-y-1 transition-transform card-glass">
      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
      <p className="mt-2 text-gray-300 text-sm">{p.tagline}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs px-2 py-1 rounded-md bg-slate-700 text-gray-200">{p.status}</span>
        <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:underline">Repo →</a>
      </div>
    </article>
  )
}

function Projects(){
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-white">Projects</h2>
      <p className="mt-2 text-gray-300 max-w-2xl">Selected projects that form the pillars of the platform: memory, simulation, introspection, and applied systems.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map(p => <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}

function Philosophy(){
  return (
    <section id="philosophy" className="w-full max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-white">Philosophy</h2>
      <div className="mt-4 text-gray-300 max-w-3xl space-y-4">
        <p>Adaptive intelligence should be built from memory outward — not as ephemeral models but as context that evolves. Memory is not storage; it is a living substrate that shapes future inference.</p>
        <blockquote className="pl-4 border-l-2 border-slate-600 text-gray-200 italic">“We design machines that remember — and in remembering, they learn to be better custodians of behavior.”</blockquote>
        <p>Ethics, introspection, and testable simulation are core: before any behavior is executed, it should pass a sandboxed simulation and a rollback score.</p>
      </div>
    </section>
  )
}

const timeline = [
  {year: '2024-12', note: 'Conceptualization — adaptive memory idea'},
  {year: '2025-02', note: 'Preprocessing & prototype modules'},
  {year: '2025-05', note: 'IBCS core draft'},
  {year: '2025-10', note: 'v0.2.0 pre-release: memory & simulation foundation'}
]

function Timeline(){
  return (
    <section id="timeline" className="w-full max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-white">Timeline</h2>
      <ol className="mt-6 border-l border-slate-700 ml-4 space-y-6">
        {timeline.map((t, i) => (
          <li key={i} className="pl-6 relative">
            <div className="absolute -left-3 top-1 w-2 h-2 rounded-full bg-slate-500" />
            <div className="text-sm text-gray-300 font-medium">{t.year}</div>
            <div className="text-gray-400 text-sm mt-1">{t.note}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Footer(){
  return (
    <footer id="contact" className="w-full max-w-6xl mx-auto px-6 py-10 border-t border-slate-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-300 text-sm">© {new Date().getFullYear()} Tri ND — Built for research & collaboration</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="<https://github.com/your-org>" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">GitHub</a>
          <a href="<https://www.linkedin.com/in/your-profile>" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">LinkedIn</a>
          <a href="<https://www.reddit.com/user/your-profile>" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">Reddit</a>
        </div>
      </div>
    </footer>
  )
}

export default function PortfolioPage(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-gray-100">
      <Nav />
      <Hero />
      <main>
        <Projects />
        <Philosophy />
        <Timeline />
      </main>
      <Footer />
    </div>
  )
}

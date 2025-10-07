export default function Navbar(){
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

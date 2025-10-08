import Image from 'next/image'
export default function Navbar(){
  return (
    <nav className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      {/* Logo + tên thương hiệu */}
      <div className="flex items-center gap-4">
        <Image
          src="/logo.png"              // 📁 nằm trong public/
          alt="Adaptive AI Logo"
          width={40}
          height={40}
          className="rounded-md shadow-sm hover:opacity-90 transition-opacity"
          priority
        />
        <div className="text-gray-200 text-sm">
          Tri ND — Adaptive Systems
        </div>
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

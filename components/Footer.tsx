import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const projects = [
    { src: "/adaptive AI.png", alt: "adaptive ai" },
    { src: "/ibcs.jpg", alt: "IBCS" },
    { src: "/aifordriver.png", alt: "AI for Driver" },
    { src: "/adaptive OS.png", alt: "adaptive OS" },
    { src: "/platform.png", alt: "Platform" },
  ]

  return (
    <footer className="w-full max-w-6xl mx-auto px-6 py-10 border-t border-slate-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-300 text-sm">
          © {new Date().getFullYear()} Tri ND — Built for research & collaboration
        </div>

        <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
          {projects.map((p) => (
            <Image
              key={p.src}
              src={p.src}
              alt={p.alt}
              width={24}
              height={24}
              className="rounded-sm"
            />
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm">
          <Link
            href="https://github.com/CodeLikeC"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/Nguyễnđứctrí"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:ndtribk@gmail.com"
            className="text-gray-300 hover:text-white"
          >
            Email
          </Link>
          <Link
            href="https://www.reddit.com/user/Ill_Committee1580"
            className="text-gray-300 hover:text-white"
          >
            Reddit
          </Link>
        </div>
      </div>
    </footer>
  )
}

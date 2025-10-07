export default function Footer(){
  return (
    <footer id="contact" className="w-full max-w-6xl mx-auto px-6 py-10 border-t border-slate-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-300 text-sm">© {new Date().getFullYear()} Tri ND — Built for research & collaboration</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="<https://github.com/your-org>" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">GitHub</a>
          <a href="<https://www.linkedin.com/in/nguyễnđứctrí/>" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">LinkedIn</a>
          <a href="<https://www.reddit.com/user/Ill_Committee1580>" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">Reddit</a>
        </div>
      </div>
    </footer>
  )
}

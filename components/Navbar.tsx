export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Portfolio</a>
        <div className="space-x-4">
          <a href="/projects" className="text-gray-700 hover:text-blue-500">Projects</a>
          <a href="/philosophy" className="text-gray-700 hover:text-blue-500">Philosophy</a>
          <a href="/timeline" className="text-gray-700 hover:text-blue-500">Timeline</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}
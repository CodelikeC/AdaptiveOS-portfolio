export function TechStack() {
  const technologies = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'];
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Technologies We Use</h3>
      <div className="flex space-x-4">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
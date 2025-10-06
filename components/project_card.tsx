interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
}

export function ProjectCard({ id, title, description, link }: Project) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href={link} className="text-blue-500 mt-4 inline-block">Learn More</a>
    </div>
  );
}
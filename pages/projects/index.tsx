import { ProjectCard } from '../../components/ProjectCard';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import projects from '../../data/projects.json';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
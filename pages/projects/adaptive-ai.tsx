import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AdaptiveAI() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Adaptive AI</h1>
        <p className="text-lg">
          A project focused on self-adapting AI systems for dynamic environments.
        </p>
      </main>
      <Footer />
    </div>
  );
}
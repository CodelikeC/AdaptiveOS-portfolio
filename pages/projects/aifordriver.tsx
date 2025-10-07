import Navbar  from '../../components/Navbar';
import Footer  from '../../components/Footer';

export default function AIForDriver() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">AI for Drivers</h1>
        <p className="text-lg">
          AI-powered solutions for enhancing driver safety and experience.
        </p>
      </main>
      <Footer />
    </div>
  );
}
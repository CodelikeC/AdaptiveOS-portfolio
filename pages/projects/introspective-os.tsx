import Navbar  from '../../components/Navbar';
import Footer  from '../../components/Footer';

export default function IntrospectiveOS() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Introspective OS</h1>
        <p className="text-lg">
          An operating system with self-awareness and optimization capabilities.
        </p>
      </main>
      <Footer />
    </div>
  );
}
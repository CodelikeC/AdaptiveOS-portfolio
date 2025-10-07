import  Navbar  from '../../components/Navbar';
import  Footer  from '../../components/Footer';

export default function IBCS() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">IBCS</h1>
        <p className="text-lg">
          Integrated Business Control System for streamlined operations.
        </p>
      </main>
      <Footer />
    </div>
  );
}
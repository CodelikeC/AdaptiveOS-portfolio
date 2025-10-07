import VisionHeader  from '../components/VisionHeader';
import QuoteBlock  from '../components/QuoteBlock';
import Navbar  from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <VisionHeader />
      <main className="container mx-auto px-4 py-12">
        <QuoteBlock 
          quote="Building the future with intelligent systems."
          author="Your Name"
        />
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg">
            We aim to create adaptive, introspective AI systems that empower human potential.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
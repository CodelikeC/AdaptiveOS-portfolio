import Navbar  from '../components/Navbar';
import Footer  from '../components/Footer';
import QuoteBlock  from '../components/QuoteBlock';

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Our Philosophy</h1>
        <QuoteBlock 
          quote="Technology should amplify human potential, not replace it."
          author="Your Name"
        />
        <p className="text-lg mt-6">
          Our approach combines innovation with ethics, focusing on sustainable AI solutions.
        </p>
      </main>
      <Footer />
    </div>
  );
}
import Navbar  from '../components/Navbar';
import Footer  from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg">
          Connect with us on social media or send an email to collaborate!
        </p>
        <div className="mt-6">
          <a href="https://x.com/NguyncT09972002" className="text-blue-500">X Profile</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
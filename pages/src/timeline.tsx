import Timeline  from './components/Timeline'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import timelineData from './data/timeline'

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Research Timeline</h1>
        <Timeline events={timelineData} />
      </main>
      <Footer />
    </div>
  );
}
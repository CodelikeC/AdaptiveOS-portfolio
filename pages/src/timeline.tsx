import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {Timeline} from '@/components/timeline'
import timelineData from '@/data/timeline.json'

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
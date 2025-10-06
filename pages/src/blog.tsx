import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Blog Post: {params.slug}</h1>
        <p className="text-lg">
          This is a dynamic blog post page. Content will be fetched based on the slug.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [], // Add your blog slugs here
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  return {
    props: { params },
  };
}
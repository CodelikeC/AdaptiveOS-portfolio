interface QuoteBlockProps {
  quote: string;
  author: string;
}

export function QuoteBlock({ quote, author }: QuoteBlockProps) {
  return (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
      <p className="text-lg">{quote}</p>
      <cite className="block mt-2 text-sm text-gray-500">— {author}</cite>
    </blockquote>
  );
}
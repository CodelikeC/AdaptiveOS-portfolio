interface Event {
  year: string;
  description: string;
}

export function Timeline({ events }: { events: Event[] }) {
  return (
    <div className="space-y-6">
      {events.map((event, index) => (
        <div key={index} className="flex items-start">
          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
            {event.year}
          </div>
          <p className="text-lg">{event.description}</p>
        </div>
      ))}
    </div>
  );
}
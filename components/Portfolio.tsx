
export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Portfolio</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        <div className="bg-gray-100 p-4 rounded shadow w-72 h-40">Project 1</div>
        <div className="bg-gray-100 p-4 rounded shadow w-72 h-40">Project 2</div>
        <div className="bg-gray-100 p-4 rounded shadow w-72 h-40">Project 3</div>
      </div>
    </section>
  );
}

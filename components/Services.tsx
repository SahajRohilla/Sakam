
export default function Services() {
  return (
    <section id="services" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-gray-100 p-6 rounded-md w-80 shadow">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p>Custom web solutions to enhance your presence.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-md w-80 shadow">
          <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
          <p>Creating user-friendly apps for various platforms.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-md w-80 shadow">
          <h3 className="text-xl font-semibold mb-2">AI Consulting</h3>
          <p>Expert guidance on integrating AI into business.</p>
        </div>
      </div>
    </section>
  );
}

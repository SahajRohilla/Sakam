export default function Testimonials() {
  const testimonials = [
    {
      quote: "Sakam transformed our outdated website into a modern, user-friendly platform that increased our online conversions by 150%. Their attention to detail and technical expertise is unmatched.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechFlow Solutions",
      avatar: "🌟",
      rating: 5
    },
    {
      quote: "The mobile app they developed for our e-commerce business exceeded all expectations. Our customer engagement has tripled, and the app's performance is flawless across all devices.",
      author: "Michael Chen",
      position: "Founder",
      company: "EcoMarket",
      avatar: "🚀",
      rating: 5
    },
    {
      quote: "Working with Sakam was a game-changer for our startup. They delivered a complex AI-powered solution on time and within budget. Highly recommend their services!",
      author: "Emily Rodriguez",
      position: "CTO",
      company: "DataInsight Labs",
      avatar: "⭐",
      rating: 5
    },
    {
      quote: "Their digital marketing strategy helped us reach new markets and increased our brand visibility significantly. The ROI has been exceptional, and the team is incredibly professional.",
      author: "David Thompson",
      position: "Marketing Director",
      company: "GrowthCorp",
      avatar: "💎",
      rating: 5
    }
  ];

  const companies = [
    { name: "TechFlow", logo: "🏢" },
    { name: "EcoMarket", logo: "🌱" },
    { name: "DataInsight", logo: "📊" },
    { name: "GrowthCorp", logo: "📈" },
    { name: "InnovateLabs", logo: "🔬" },
    { name: "CloudSync", logo: "☁️" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full -ml-36 -mt-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-200/30 to-transparent rounded-full -mr-48 -mb-48"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our amazing clients have to say about 
            working with our team and the results we've achieved together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.position}</div>
                  <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-8">Trusted by Leading Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="font-medium text-lg">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a solution that will make your business 
              the next success story we'll be proud to showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-semibold transition-colors duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

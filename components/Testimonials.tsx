export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with Sakam transformed our business. Their expertise in web development and commitment to quality delivered exceptional results.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      quote: "The team's innovative approach to mobile development helped us launch a successful app that our users love.",
      author: "Michael Chen",
      position: "Product Manager",
      company: "MobileFirst",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      quote: "Their cybersecurity solutions gave us peace of mind. Professional, thorough, and always available when we need them.",
      author: "Emma Davis",
      position: "CTO",
      company: "SecureNet",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      quote: "Outstanding DevOps services that streamlined our deployment process and improved our team's efficiency.",
      author: "Alex Thompson",
      position: "Lead Developer",
      company: "CloudScale",
      rating: 5,
      avatar: "👨‍💻"
    }
  ];

  const companies = [
    { name: "TechCorp", logo: "🏢" },
    { name: "InnovateLabs", logo: "🔬" },
    { name: "FutureWorks", logo: "🚀" },
    { name: "SmartSystems", logo: "💡" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/30 dark:from-blue-400/10 to-transparent rounded-full -ml-36 -mt-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-200/30 dark:from-cyan-400/10 to-transparent rounded-full -mr-48 -mb-48"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-4">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our amazing clients have to say about 
            working with our team and the results we've achieved together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800"
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
              <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-full flex items-center justify-center text-white text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.position}</div>
                  <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-8">Trusted by Leading Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="font-medium text-lg">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a solution that will make your business 
              the next success story we'll be proud to showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold transition-colors duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

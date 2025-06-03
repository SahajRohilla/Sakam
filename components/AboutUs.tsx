export default function AboutUs() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: "🚀" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "98%", label: "Success Rate", icon: "✨" },
    { number: "24/7", label: "Support Available", icon: "💪" }
  ];

  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing to ensure exceptional performance and reliability."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through transparency and communication."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50 to-transparent rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-50 to-transparent rounded-full -ml-48 -mb-48"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 text-sm font-medium">About Sakam</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Crafting Digital Excellence Since Day One
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of developers, designers, and strategists committed to delivering 
            innovative digital solutions that drive real business results.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Sakam, we believe technology should empower businesses to reach their full potential. 
                With years of experience and a focus on innovation, we help companies navigate the digital 
                landscape and achieve sustainable growth through strategic digital transformation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From startups to enterprise-level organizations, we've partnered with businesses across 
                various industries to deliver solutions that not only meet today's needs but are scalable 
                for tomorrow's challenges.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Core Values</h4>
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {value.icon}
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">{value.title}</h5>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full"></div>
              
              <div className="relative space-y-6">
                <h4 className="text-xl font-bold mb-6">Why Choose Sakam?</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold mb-1">{stat.number}</div>
                      <div className="text-blue-100 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-white/20">
                  <p className="text-blue-100 text-sm leading-relaxed">
                    "Working with Sakam transformed our business. Their expertise and dedication 
                    to quality is unmatched in the industry."
                  </p>
                  <div className="mt-3 font-semibold">- Happy Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Digital Journey?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life and accelerate your business growth 
              through innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300">
                Get In Touch
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-semibold transition-colors duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

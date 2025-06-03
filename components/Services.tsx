export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Best Practices",
        "Modern Frameworks"
      ]
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS & Android",
        "Cross-Platform",
        "User-Centric Design",
        "App Store Support"
      ]
    },
    {
      icon: "🛠️",
      title: "DevOps Services",
      description: "Streamline your development and deployment processes",
      features: [
        "CI/CD Pipeline",
        "Cloud Solutions",
        "Infrastructure Setup",
        "Monitoring & Alerts"
      ]
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Protect your digital assets with enterprise-grade security",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Support",
        "24/7 Monitoring"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100/50 dark:from-blue-500/10 to-transparent rounded-full -ml-36 -mt-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-100/50 dark:from-cyan-500/10 to-transparent rounded-full -mr-48 -mb-48"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-4">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From web development to cybersecurity, we offer end-to-end services to help your 
            business thrive in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our expert team can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 dark:text-blue-500 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-50 transition-colors duration-300">
                Start Your Project
              </button>
              <button className="px-8 py-3 border-2 border-white/30 hover:border-white/50 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

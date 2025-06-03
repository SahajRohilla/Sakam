export default function Portfolio() {
  const projects = [
    {
      title: "EcoCommerce Platform",
      description: "A comprehensive e-commerce solution with AI-powered recommendations and sustainable shopping features.",
      image: "🛍️",
      category: "E-commerce",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML"],
      metrics: { increase: "+150%", metric: "Sales Growth" },
      link: "#"
    },
    {
      title: "HealthTech Mobile App",
      description: "Revolutionary healthcare app connecting patients with doctors through secure video consultations.",
      image: "🏥",
      category: "Healthcare",
      technologies: ["React Native", "Firebase", "WebRTC", "AI"],
      metrics: { increase: "+200%", metric: "User Engagement" },
      link: "#"
    },
    {
      title: "FinanceFlow Dashboard",
      description: "Advanced financial analytics dashboard with real-time data visualization and predictive insights.",
      image: "📊",
      category: "Fintech",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      metrics: { increase: "+85%", metric: "Efficiency Gain" },
      link: "#"
    },
    {
      title: "EduLearn Platform",
      description: "Interactive learning management system with personalized AI tutoring and progress tracking.",
      image: "🎓",
      category: "EdTech",
      technologies: ["Angular", "Django", "TensorFlow", "AWS"],
      metrics: { increase: "+300%", metric: "Learning Outcomes" },
      link: "#"
    },
    {
      title: "Smart Home IoT System",
      description: "Integrated IoT platform for smart home automation with voice control and energy optimization.",
      image: "🏠",
      category: "IoT",
      technologies: ["IoT", "Arduino", "React", "AWS IoT"],
      metrics: { increase: "+40%", metric: "Energy Savings" },
      link: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media monitoring and analytics platform with sentiment analysis.",
      image: "📱",
      category: "Analytics",
      technologies: ["React", "Python", "MongoDB", "NLP"],
      metrics: { increase: "+180%", metric: "Insights Accuracy" },
      link: "#"
    }
  ];

  const categories = ["All", "E-commerce", "Healthcare", "Fintech", "EdTech", "IoT", "Analytics"];

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-50 to-transparent rounded-full -mr-36 -mt-36"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-50 to-transparent rounded-full -ml-48 -mb-48"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 text-sm font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of innovative solutions that have transformed businesses 
            across various industries and delivered measurable results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Project Image/Icon */}
              <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 h-48 flex items-center justify-center text-white">
                <div className="text-6xl">{project.image}</div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-2xl font-bold text-green-600">{project.metrics.increase}</div>
                    <div className="text-sm text-gray-600">{project.metrics.metric}</div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors duration-300">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Success Metrics</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">150%</div>
                <div className="text-gray-600 text-sm">Avg. Performance Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Support & Maintenance</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Let's discuss your project and explore how we can bring your vision to life 
              with innovative technology solutions.
            </p>
            <div className="space-y-4">
              <button className="w-full py-3 px-6 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Your Project
              </button>
              <button className="w-full py-3 px-6 border-2 border-white/30 hover:border-white/50 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

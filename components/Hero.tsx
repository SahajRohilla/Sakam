export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-blue-900/50 dark:from-black/50 dark:to-blue-950/50 opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh] py-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <div className="space-y-8">
              {/* Tagline */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 dark:bg-blue-400/10 rounded-full border border-blue-400/30 backdrop-blur-sm">
                <span className="text-blue-300 dark:text-blue-200 text-sm font-medium">🚀 Innovation-Driven Solutions</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white">Digital Excellence</span>
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
                  Tailored For You
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We provide cutting-edge technology services and innovative solutions 
                to transform your business and accelerate growth in the digital era.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center justify-center gap-2">
                    Get Started Today
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <button className="px-8 py-4 border-2 border-white/30 hover:border-white/50 dark:border-white/20 dark:hover:border-white/40 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  View Our Work
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 justify-center lg:justify-start">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900"></div>
                    <div className="w-8 h-8 bg-green-500 dark:bg-green-400 rounded-full border-2 border-white dark:border-gray-900"></div>
                    <div className="w-8 h-8 bg-purple-500 dark:bg-purple-400 rounded-full border-2 border-white dark:border-gray-900"></div>
                    <div className="w-8 h-8 bg-orange-500 dark:bg-orange-400 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs font-bold">
                      +
                    </div>
                  </div>
                  <div className="text-sm text-gray-300 dark:text-gray-400">
                    <div className="font-semibold text-white">500+ Clients</div>
                    <div>Trust our expertise</div>
                  </div>
                </div>
                <div className="text-sm text-gray-300 dark:text-gray-400">
                  <div className="font-semibold text-white">98% Success Rate</div>
                  <div>Project completion</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="flex-1 relative">
            {/* Add your hero image or illustration here */}
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white dark:fill-gray-900"></path>
        </svg>
      </div>
    </section>
  );
}

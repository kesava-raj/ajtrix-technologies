import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Lightbulb, ShieldCheck } from 'lucide-react';

const AboutSummary: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative z-10" id="about-summary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
              Pioneering the Future of <br className="hidden md:block" />
              <span className="text-indigo-600 dark:text-indigo-400">Digital Transformation</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              At Ajtrix Technologies, we believe in building technology that doesn't just solve today's problems, but anticipates tomorrow's challenges. From bespoke AI agents to comprehensive enterprise software, we are your partners in scaling innovation.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400">Empowering businesses with intelligent automation and scalable software solutions that drive measurable growth.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation First</h3>
                  <p className="text-gray-600 dark:text-gray-400">We leverage the latest in AI, Playwright automation, and modern web frameworks to keep you ahead of the curve.</p>
                </div>
              </div>
            </div>

            <Link 
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#121543] dark:bg-white dark:text-[#121543] border border-transparent rounded-full hover:bg-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right Side: Visual */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
            <div className="relative bg-white/50 dark:bg-[#111330]/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gray-100 dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                    <ShieldCheck className="w-10 h-10 text-indigo-500 mb-4" />
                    <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100%</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Secure & Compliant</p>
                  </div>
                  <div className="bg-indigo-500 text-white rounded-2xl p-6 shadow-lg shadow-indigo-500/30">
                    <h4 className="text-3xl font-bold mb-2">24/7</h4>
                    <p className="text-sm text-indigo-100">Automated Operations</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-white dark:bg-white/10 rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-xl">
                    <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50+</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise Clients</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                    <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">16+</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Industry Templates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;

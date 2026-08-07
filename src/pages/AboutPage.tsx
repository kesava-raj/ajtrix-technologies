import React, { useEffect } from 'react';
import { Shield, Target, Zap, Users, Globe2, Code2 } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-6 h-6 text-indigo-500" />,
    title: "Precision & Excellence",
    description: "We don't just write code; we engineer solutions. Every pixel, every endpoint, and every automated workflow is crafted with absolute precision."
  },
  {
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
    title: "Innovation at Speed",
    description: "Technology moves fast, and so do we. We leverage cutting-edge AI and robust automation tools to deliver rapid, future-proof results."
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    title: "Uncompromising Security",
    description: "From custom Virtual Data Rooms to proprietary ERPs, we build with enterprise-grade security as a foundational layer, never an afterthought."
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    title: "Client-Centric Partnership",
    description: "Your success is our metric. We act as an extension of your team, providing transparent communication and dedicated ongoing support."
  }
];

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            About <span className="text-indigo-600 dark:text-indigo-400">Ajtrix</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are a collective of engineers, designers, and AI specialists dedicated to transforming ambitious ideas into digital realities.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Founded on the belief that software should adapt to the business (not the other way around), Ajtrix Technologies was born to bridge the gap between complex operational needs and elegant technological solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We recognized early on that the future of business operations lies in intelligence and automation. Today, we stand at the forefront of AI integration, deploying custom agentic systems, voice automation, and bespoke web platforms that empower our clients to operate faster, smarter, and with unprecedented efficiency.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 group">
              <div className="absolute inset-0 bg-gray-900/20 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" 
                alt="Ajtrix Team Collaboration" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="bg-white/50 dark:bg-[#111330]/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-10 md:p-12 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-8">
              <Globe2 className="w-8 h-8 text-indigo-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              To architect and deliver high-performance digital ecosystems that automate the mundane, secure the critical, and scale the ambitious for enterprises worldwide.
            </p>
          </div>
          <div className="bg-white/50 dark:bg-[#111330]/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-10 md:p-12 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-8">
              <Code2 className="w-8 h-8 text-indigo-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              To be the definitive technology partner for modern businesses, recognized for setting the gold standard in AI integration and custom software engineering.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">The principles that guide our code and our culture.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:bg-white dark:hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-white dark:bg-[#111330] rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-white/5">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;

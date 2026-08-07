import React, { useEffect } from 'react';
import { Shield, Target, Zap, Users, Globe2, Code2 } from 'lucide-react';

const advantages = [
  {
    icon: <Target className="w-6 h-6 text-indigo-500" />,
    title: "01. Niche-Specific Expertise",
    description: "Each template is purpose-built for its industry with conversion patterns proven to work in that specific vertical."
  },
  {
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
    title: "02. Rapid Deployment",
    description: "With 16+ ready-to-customize templates, launch your website in days, not months. Get to market faster without sacrificing quality."
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    title: "03. Mobile-First & Conversion-Focused",
    description: "Every design is built mobile-first with WhatsApp integration, inquiry forms, and clear CTAs that turn visitors into leads."
  },
  {
    icon: <Globe2 className="w-6 h-6 text-indigo-500" />,
    title: "04. International Experience",
    description: "From Singapore to India to the Middle East, we've delivered projects across geographies and understand diverse market needs."
  },
  {
    icon: <Code2 className="w-6 h-6 text-indigo-500" />,
    title: "05. Premium Design Standards",
    description: "Our websites don't just function - they impress. Modern aesthetics, smooth animations, and professional typography."
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    title: "06. End-to-End Service",
    description: "From design concept to deployment and beyond - hosting, domain setup, SEO basics, and ongoing support included."
  }
];

const workflowSteps = [
  {
    number: "1",
    title: "Discovery & Strategy",
    description: "We understand your business, target audience, and goals. Research your industry and competitors to craft the perfect digital strategy."
  },
  {
    number: "2",
    title: "Design & Prototyping",
    description: "We select or create the ideal design direction for your brand. You see mockups and provide feedback before any code is written."
  },
  {
    number: "3",
    title: "Development & Integration",
    description: "We build your website with clean code, integrate essential tools (WhatsApp, forms, analytics), and ensure flawless performance."
  },
  {
    number: "4",
    title: "Testing & Launch",
    description: "Rigorous testing across devices and browsers. We handle deployment, domain configuration, and ensure everything is production-ready."
  },
  {
    number: "5",
    title: "Support & Growth",
    description: "Post-launch support, performance monitoring, and iterative improvements to keep your website converting at its best."
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

        {/* Why Choose Us */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Why Choose <span className="text-indigo-600 dark:text-indigo-400">AJTRIX?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              What makes us different from other agencies and freelancers. Our unique combination of niche expertise, rapid deployment, and premium design standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-white/50 dark:bg-[#111330]/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {adv.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{adv.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Our <span className="text-indigo-600 dark:text-indigo-400">Workflow</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A streamlined 5-step process designed to deliver results efficiently.
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-indigo-500/50 to-purple-500/50" />
            
            <div className="space-y-12">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 relative z-10 w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-indigo-500/30">
                    {step.number}
                  </div>
                  <div className="bg-white/50 dark:bg-[#111330]/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 flex-grow hover:border-indigo-500/50 transition-colors duration-300">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;

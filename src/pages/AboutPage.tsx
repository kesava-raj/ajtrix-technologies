import React, { useEffect } from 'react';
import { Shield, Target, Zap, Users, Globe2, Code2 } from 'lucide-react';
import HowItWorks from '../components/ui/how-it-works';
import BorderBeamPanel from '../components/ui/border-beam-panel';
import { SeoHead } from '../components/SeoHead';

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
    title: "04. Chennai, Chicago & Global Reach",
    description: "With presence in Chennai, Tamil Nadu and Chicago, Illinois—plus projects across Singapore and the Middle East—we understand diverse market needs."
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

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 relative z-10">
      <SeoHead
        title="About Ajtrix Technologies | Chennai, Tamil Nadu & Chicago, Illinois"
        description="Meet Ajtrix Technologies—engineers, designers, and strategists operating from Chennai, India and Chicago, USA across websites, branding, digital marketing, and custom software."
        path="/about"
        keywords="About Ajtrix Technologies, Software Studio Chennai, Digital Agency Chicago Illinois, Web Design Tamil Nadu"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Ajtrix Technologies',
          url: 'https://www.ajtrix.com/about',
          mainEntity: { '@id': 'https://www.ajtrix.com/#organization' },
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            About <span className="text-indigo-600 dark:text-indigo-400">Ajtrix</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are a team of engineers, designers, and strategists who help businesses build sharper digital products, stronger brands, and cleaner workflows.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-20 sm:mb-24 md:mb-32">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Ajtrix Technologies started with a simple idea: technology should fit the way a business actually works, not force teams into rigid workarounds.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Today we partner with growing companies across websites, branding, digital marketing, custom software, digital transformation, and presentation design, helping them ship faster and communicate with clarity.
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
              To build reliable websites, thoughtful brands, and custom software that make day-to-day operations simpler and help businesses grow steadily.
            </p>
          </div>
          <div className="bg-white/50 dark:bg-[#111330]/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-10 md:p-12 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-8">
              <Code2 className="w-8 h-8 text-indigo-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              To be the long-term digital partner businesses trust when they want honest advice, clean design, and software built to last.
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
              <BorderBeamPanel key={idx} radius={16} className="p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {adv.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{adv.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{adv.description}</p>
              </BorderBeamPanel>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Our <span className="text-indigo-600 dark:text-indigo-400">Workflow</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A streamlined 5-step process designed to deliver results efficiently.
            </p>
          </div>
          <HowItWorks />
        </div>

      </div>
    </div>
  );
};

export default AboutPage;

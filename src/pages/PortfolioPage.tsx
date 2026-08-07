import React, { useEffect } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const Github = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const allProjects = [
  {
    id: 1,
    title: "GlobalFin Secure Portal",
    category: "Custom Software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    description: "A proprietary Virtual Data Room (VDR) handling billions in secure transaction data with biometric authentication.",
    tags: ["React", "Node.js", "AWS", "WebCrypto API"]
  },
  {
    id: 2,
    title: "Aura AI Support Agent",
    category: "AI Integration",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    description: "An autonomous agentic system resolving 85% of tier-1 customer support tickets for a major e-commerce brand.",
    tags: ["OpenAI", "Python", "FastAPI", "Vector Database"]
  },
  {
    id: 3,
    title: "Scale CRM Automation",
    category: "Business Automation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    description: "End-to-end n8n workflow optimizing internal data syncing across 5 different operational platforms.",
    tags: ["n8n", "Playwright", "PostgreSQL", "Docker"]
  },
  {
    id: 4,
    title: "Nexus Digital Platform",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
    description: "A bespoke, high-converting digital experience designed for a leading logistics firm, leveraging modern web frameworks.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"]
  },
  {
    id: 5,
    title: "Echo Voice Booking Bot",
    category: "AI Voice Agents",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200",
    description: "An automated telephony agent that handles 1,000+ daily inbound restaurant bookings with natural human inflection.",
    tags: ["Twilio", "11Labs", "Node.js", "Redis"]
  },
  {
    id: 6,
    title: "Stratos Pitch Deck",
    category: "Corporate Presentations",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
    description: "A comprehensive B2B pitch deck and collateral suite that helped a SaaS startup secure $5M in Series A funding.",
    tags: ["Figma", "Visual Storytelling", "Copywriting"]
  }
];

const PortfolioPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            Our <span className="text-indigo-600 dark:text-indigo-400">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our curated showcase of digital transformations, AI integrations, and bespoke software solutions built for industry leaders.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {allProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative bg-white/50 dark:bg-[#111330]/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 ${index % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
            >
              {/* Image Container */}
              <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/10 dark:bg-black/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Links */}
                <div className="absolute top-6 right-6 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <button className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shadow-lg">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition-colors shadow-lg">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-40 text-center bg-indigo-600 dark:bg-indigo-900/40 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to build something extraordinary?
          </h2>
          <p className="relative z-10 text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how our custom software and AI solutions can transform your operational efficiency.
          </p>
          <button className="relative z-10 px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:bg-gray-50 transition-colors shadow-xl">
            Start Your Project
          </button>
        </div>

      </div>
    </div>
  );
};

export default PortfolioPage;

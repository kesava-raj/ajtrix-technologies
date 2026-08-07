import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "UrbanEra Interiors",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    description: "End-to-end turnkey execution and bespoke design. Features an animated CTA, process timeline, and WhatsApp integration.",
  },
  {
    id: 2,
    title: "Oceanus Advisory",
    category: "Management Consulting",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "A global advisory firm website utilizing a sophisticated dark purple aesthetic with glowing wave animations and interactive cards.",
  },
  {
    id: 3,
    title: "Design Alchemy",
    category: "Interior & Architecture",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    description: "A dark, luxurious aesthetic. Deliverables include VR preview integration, Instagram feeds, and consultation booking CTAs.",
  }
];

const PortfolioSummary: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative z-10 bg-gray-50/50 dark:bg-[#050512]/50 border-y border-gray-200 dark:border-white/5" id="portfolio-summary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
              Featured <span className="text-indigo-600 dark:text-indigo-400">Work</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A glimpse into the digital solutions we've engineered for industry leaders. Real problems, elegant solutions.
            </p>
          </div>
          <Link 
            to="/portfolio"
            className="group hidden md:inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            View Full Portfolio 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link to="/portfolio" key={project.id} className="group block relative rounded-[2rem] overflow-hidden bg-white dark:bg-[#111330] border border-gray-200 dark:border-white/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/70 backdrop-blur-md p-2 rounded-full transform opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-gray-900 dark:text-white" />
                </div>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full mb-4">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/portfolio"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            View Full Portfolio 
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSummary;

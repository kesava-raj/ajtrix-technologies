import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Cpu, Workflow, LayoutTemplate, Mic, Share2, Presentation } from 'lucide-react';

const services = [
  {
    title: 'Custom Software & Portal Development',
    description: 'Bespoke ERPs, Secure Dashboards (like VDRs), and scalable Web Platforms tailored to your needs.',
    icon: <Monitor className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
  },
  {
    title: 'AI Integration & Custom Agentic Systems',
    description: 'Deploy Autonomous Agents, rapid prototyping, and Intelligent BI to future-proof your operations.',
    icon: <Cpu className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
  },
  {
    title: 'Business Automation & Lead Generation',
    description: 'End-to-end Playwright/n8n outreach pipelines and custom CRMs designed to scale your revenue.',
    icon: <Workflow className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
  },
  {
    title: 'Web Design & Digital Experiences',
    description: 'Crafting bespoke websites and leveraging 16+ industry templates for a stunning online presence.',
    icon: <LayoutTemplate className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
  },
  {
    title: 'AI Voice Agents & Telephony Automation',
    description: 'Inbound and outbound booking and notification bots to handle your communications 24/7.',
    icon: <Mic className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
  },
  {
    title: 'Social Media & Content Distribution',
    description: 'Comprehensive multi-platform management, intelligent DM automation, and targeted paid media.',
    icon: <Share2 className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
  },
  {
    title: 'Corporate Presentation Services',
    description: 'High-converting B2B pitch decks and professional sales collateral that close deals.',
    icon: <Presentation className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
  },
];

const ServicesSummary: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative z-10" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Core Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide a comprehensive suite of digital solutions to accelerate your growth, automate your workflows, and elevate your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/50 dark:bg-[#111330]/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#121543] dark:bg-white dark:text-[#121543] border border-transparent rounded-full hover:bg-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;

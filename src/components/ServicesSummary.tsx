import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { ServiceIcon } from './ServiceIcon';

const ServicesSummary: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 relative z-10" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">Services We Offer</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From websites and branding to custom software and growth campaigns, here is what our team builds with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {SERVICES.map((service) => (
            <Link
              to={`/services/${service.id}`}
              key={service.id}
              className="group bg-white/50 dark:bg-[#111330]/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <ServiceIcon icon={service.icon} className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {service.summary}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
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

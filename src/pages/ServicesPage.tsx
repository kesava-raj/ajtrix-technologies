import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import BorderBeamPanel from '../components/ui/border-beam-panel';
import { SERVICES } from '../data/services';
import { ServiceIcon } from '../components/ServiceIcon';
import { SeoHead } from '../components/SeoHead';

const ServicesPage: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 relative z-10">
      <SeoHead
        title="Services We Offer | Ajtrix Technologies (Chennai & Chicago)"
        description="Explore our six core services in Chennai, Tamil Nadu and Chicago, Illinois: Web & Digital Experiences, Digital Marketing & Growth, Branding & Creative, Custom Software, Consulting, and Presentation Design."
        path="/services"
        keywords="Web Design Chennai, Digital Marketing Chicago, Branding Creative Agency, Custom Software Development Illinois, Digital Transformation Tamil Nadu"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Page Header */}
        <div className="text-center mb-14 sm:mb-20 md:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            Services We <span className="text-indigo-600 dark:text-indigo-400">Offer</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Whether you need a sharper online presence, consistent marketing, custom software, or clear presentation materials, here is how we help businesses move forward.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                  <ServiceIcon icon={service.icon} className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-500" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  <Link to={`/services/${service.id}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {service.title}
                  </Link>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/services/${service.id}`}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121543] text-white dark:bg-white dark:text-[#121543] text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>Explore {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Visual Side - Border Beam Image Card */}
              <div className="w-full lg:w-1/2">
                <Link to={`/services/${service.id}`} className="block">
                  <BorderBeamPanel
                    radius={32}
                    className="!p-[2px] relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] border-0 overflow-hidden shadow-2xl"
                  >
                    <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-[#0c0e2b]">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0e2b]/35 via-transparent to-transparent" />
                    </div>
                  </BorderBeamPanel>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

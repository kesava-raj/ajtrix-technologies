import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import BorderBeamPanel from '../components/ui/border-beam-panel';
import { ShinyButton } from '../components/ui/shiny-button';
import { ServiceIcon } from '../components/ServiceIcon';
import { getServiceById, SERVICES } from '../data/services';
import { useContactModal } from '../context/ContactContext';

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openModal } = useContactModal();
  const service = getServiceById(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen pt-40 pb-24 px-6 md:px-12 relative z-10 flex items-center justify-center">
        <div className="max-w-xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Service not found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The service page you are looking for does not exist. Explore all six services we offer below.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121543] text-white dark:bg-white dark:text-[#121543] font-semibold hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = SERVICES.findIndex((item) => item.id === service.id);
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <div className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Services</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6">
              <ServiceIcon icon={service.icon} className="w-8 h-8 text-indigo-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {service.tagline}
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <ShinyButton onClick={openModal} className="px-8 py-4 text-base">
                Discuss Your Project
              </ShinyButton>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <BorderBeamPanel
              radius={32}
              className="!p-[2px] relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] border-0 overflow-hidden shadow-2xl"
            >
              <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-[#0c0e2b]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0e2b]/35 via-transparent to-transparent" />
              </div>
            </BorderBeamPanel>
          </div>
        </div>

        {/* Who It's For + What You Walk Away With */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <div className="bg-white/50 dark:bg-[#111330]/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Who this is for
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {service.whoItsFor}
            </p>
          </div>

          <div className="bg-white/50 dark:bg-[#111330]/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What you walk away with
            </h2>
            <ul className="space-y-3">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How We Approach It + Detail Image */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-24">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              {service.approachTitle}
            </h2>
            {service.approachBody.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="w-full lg:w-1/2">
            <BorderBeamPanel
              radius={32}
              className="!p-[2px] relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] border-0 overflow-hidden shadow-2xl"
            >
              <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-[#0c0e2b]">
                <img
                  src={service.detailImage}
                  alt={`${service.title} detail`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0e2b]/35 via-transparent to-transparent" />
              </div>
            </BorderBeamPanel>
          </div>
        </div>

        {/* Full Scope / Capabilities */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              What we cover
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Here is the full breakdown of work included under {service.title}.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
              service.categories.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
            } gap-8`}
          >
            {service.categories.map((category) => (
              <div
                key={category.title}
                className="bg-white/50 dark:bg-[#111330]/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2.5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How a Typical Project Runs */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              How we work together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A straightforward process so you always know what is happening next.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((item) => (
              <div
                key={item.step}
                className="bg-white/50 dark:bg-[#111330]/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6"
              >
                <span className="inline-block text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA & Next Service */}
        <div className="bg-white/60 dark:bg-[#111330]/60 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Have a project in mind for {service.title}?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Tell us what you are trying to build or fix, and we will share a clear scope and timeline.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <ShinyButton onClick={openModal} className="px-7 py-3.5 text-base">
              Start a Conversation
            </ShinyButton>
            <Link
              to={`/services/${nextService.id}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gray-300 dark:border-white/15 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              <span>Next: {nextService.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;

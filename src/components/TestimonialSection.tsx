import { useState } from 'react';
import { Star, Heart, X } from 'lucide-react';

interface Testimonial {
  name: string;
  subtitle: string;
  quote: string;
  rankText: string;
  avatarUrl: string;
  caseStudy: {
    title: string;
    challenge: string;
    solution: string;
    results: string;
  };
}

const testimonials: Testimonial[] = [
  {
    name: "Diwakar",
    subtitle: "Design alchemy, Interior Designer, Chennai",
    quote: '"They built our studio website in just a week. Within the first month, we had 13 new project inquiries from the website alone."',
    rankText: "Website Design",
    avatarUrl: "https://ui-avatars.com/api/?name=Diwakar&background=random",
    caseStudy: {
      title: "Accelerating Growth for a Chennai Design Studio",
      challenge: "The interior design studio lacked a digital presence to showcase their portfolio, relying entirely on word-of-mouth which limited their growth potential.",
      solution: "We rapidly developed a visually stunning, high-performance studio website within a single week, optimized for SEO and client acquisition.",
      results: "Within the first month post-launch, the new website successfully generated 13 new high-value project inquiries organically."
    }
  },
  {
    name: "Logeshwaran",
    subtitle: "EPG Building services, Singapore",
    quote: '"Clean, minimal design that speaks volumes about the brand. With both light and dark themes"',
    rankText: "Brand Identity & Web Development",
    avatarUrl: "https://ui-avatars.com/api/?name=Logeshwaran&background=random",
    caseStudy: {
      title: "Crafting a Minimalist Brand Experience with Dual Themes",
      challenge: "EPG Building Services needed a modern web presence that accurately reflected their clean, professional brand identity to a global audience in Singapore.",
      solution: "We designed a minimalist, highly responsive website featuring a custom toggleable light and dark mode to enhance user experience.",
      results: "The clean design successfully elevated their brand perception, providing a seamless browsing experience that speaks volumes to their prospective clients."
    }
  },
  {
    name: "Sai Nandhini",
    subtitle: "SSVSP Trust, Bangalore",
    quote: '"We needed a CRM tool built for our school and they built it along with post deployment support and assistance."',
    rankText: "Custom CRM Development",
    avatarUrl: "https://ui-avatars.com/api/?name=Sai+Nandhini&background=random",
    caseStudy: {
      title: "Building a Custom CRM Solution for Educational Management",
      challenge: "SSVSP Trust in Bangalore was struggling with managing school operations and student data using disjointed manual processes.",
      solution: "We engineered a bespoke CRM tool specifically tailored to their school's workflow, ensuring secure data handling and streamlined administration.",
      results: "The custom CRM successfully centralized their operations. We also provided continuous post-deployment support to ensure seamless adoption by their staff."
    }
  }
];

const TestimonialSection = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Testimonial | null>(null);

  return (
    <>
      <section className="py-20 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1 mb-6">
              <Heart className="w-4 h-4 text-purple-500 fill-purple-500" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Testimonials & Case Studies</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Client's Feedback
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              See how ajtrix is helping businesses scale and automate
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.subtitle}
                    </p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-grow">
                  <p className="text-xl font-medium text-gray-900 dark:text-white mb-3 leading-snug">
                    {testimonial.quote}
                  </p>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-6">
                    {testimonial.rankText}
                  </p>
                </div>

                {/* Footer Button */}
                <div className="mt-auto">
                  <button 
                    onClick={() => setSelectedCaseStudy(testimonial)}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Read Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm transition-opacity">
          <div 
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Case Study</h3>
              <button 
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                <img 
                  src={selectedCaseStudy.avatarUrl} 
                  alt={selectedCaseStudy.name}
                  className="w-16 h-16 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{selectedCaseStudy.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400">{selectedCaseStudy.subtitle}</p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {selectedCaseStudy.caseStudy.title}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">The Challenge</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedCaseStudy.caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">Our Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedCaseStudy.caseStudy.solution}
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 mt-8">
                  <h3 className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">The Results</h3>
                  <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                    {selectedCaseStudy.caseStudy.results}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialSection;

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Where does Ajtrix Technologies operate?',
    answer:
      'We have offices in Chennai, Tamil Nadu (India) and Chicago, Illinois (USA). We work closely with businesses in both cities and surrounding regions, as well as clients across Singapore and the Middle East.',
  },
  {
    question: 'What services does Ajtrix offer?',
    answer:
      'We focus on six core areas: Web & Digital Experiences, Digital Marketing & Growth, Branding & Creative, Custom Software & Products, Digital Transformation & Consulting, and Business & Presentation Design.',
  },
  {
    question: 'How fast can you build and launch a website?',
    answer:
      'A focused business website or one customized from our 16+ industry templates can go live within days—for example, Design Alchemy in Chennai launched in one week. Custom web applications, portals, and CRMs are shipped in planned milestones.',
  },
  {
    question: 'Do you build custom CRM, ERP, or SaaS platforms?',
    answer:
      'Yes. We design and engineer custom web apps, SaaS MVPs, CRMs, ERPs, client portals, booking systems, inventory tools, and payment or API integrations tailored to how your team operates.',
  },
  {
    question: 'Do you handle local SEO, Meta Ads, and Google Ads for Chennai and Chicago businesses?',
    answer:
      'Yes. Our Digital Marketing & Growth team manages local digital marketing, Google Business Profile optimization, geo-targeted Meta and Google ad campaigns, content creation, and conversion tracking.',
  },
  {
    question: 'How do we get started on a project?',
    answer:
      'Fill out the contact form below or email hello@ajtrix.com with what you want to build or improve. We read every note personally and reply within one business day.',
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 relative z-10"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Common <span className="text-indigo-600 dark:text-indigo-400">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Quick answers about working with our teams in Chennai, Tamil Nadu and Chicago, Illinois.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-[#111330]/60 backdrop-blur-md overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

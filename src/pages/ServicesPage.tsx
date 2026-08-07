import React, { useEffect } from 'react';
import { Monitor, Cpu, Workflow, LayoutTemplate, Mic, Share2, Presentation, CheckCircle2 } from 'lucide-react';

const detailedServices = [
  {
    title: 'Custom Software & Portal Development',
    description: 'We build robust, scalable, and secure software solutions tailored to your unique business requirements. From bespoke ERPs that streamline your operations to secure dashboards like Virtual Data Rooms (VDRs), our custom web platforms are engineered for high performance and seamless integration.',
    features: ['Custom ERP Systems', 'Secure Virtual Data Rooms', 'Scalable Web Applications', 'Legacy System Modernization'],
    icon: <Monitor className="w-10 h-10 text-indigo-500" />
  },
  {
    title: 'AI Integration & Custom Agentic Systems',
    description: 'Harness the power of Artificial Intelligence to transform your business. We specialize in deploying Autonomous Agents and custom agentic systems that think and act intelligently. From rapid prototyping to advanced Intelligent Business Intelligence (BI), we future-proof your operations.',
    features: ['Autonomous AI Agents', 'LLM Integration', 'Intelligent Business Intelligence', 'Rapid AI Prototyping'],
    icon: <Cpu className="w-10 h-10 text-indigo-500" />
  },
  {
    title: 'Business Automation & Lead Generation',
    description: 'Scale your revenue without scaling your headcount. We build end-to-end automation pipelines using tools like Playwright and n8n to supercharge your outreach. Coupled with custom CRMs, we ensure no lead falls through the cracks.',
    features: ['Playwright & n8n Automation', 'Outreach Pipelines', 'Custom CRM Development', 'Workflow Optimization'],
    icon: <Workflow className="w-10 h-10 text-indigo-500" />
  },
  {
    title: 'Web Design & Digital Experiences',
    description: 'Your website is your digital storefront. We craft bespoke, high-converting websites and offer 16+ industry-specific templates. Our designs are focused on stunning aesthetics, seamless user experience, and driving actual business results.',
    features: ['Bespoke UI/UX Design', '16+ Industry Templates', 'High-Converting Landing Pages', 'Responsive Web Development'],
    icon: <LayoutTemplate className="w-10 h-10 text-indigo-500" />
  },
  {
    title: 'AI Voice Agents & Telephony Automation',
    description: 'Revolutionize your customer support and outbound sales with intelligent AI Voice Agents. Our telephony bots handle inbound and outbound calls, manage bookings, and send notifications 24/7, providing a human-like experience at a fraction of the cost.',
    features: ['Inbound Support Bots', 'Outbound Sales & Booking', '24/7 Availability', 'Human-like Voice Interactions'],
    icon: <Mic className="w-10 h-10 text-indigo-500" />
  },
  {
    title: 'Social Media & Content Distribution',
    description: 'Amplify your brand presence across all channels. We provide comprehensive multi-platform management, intelligent DM automation to nurture audiences, and targeted paid media campaigns designed to maximize your ROI.',
    features: ['Multi-Platform Management', 'Intelligent DM Automation', 'Targeted Paid Media', 'Content Strategy & Distribution'],
    icon: <Share2 className="w-10 h-10 text-indigo-500" />
  },
  {
    title: 'Corporate Presentation Services',
    description: 'First impressions matter. We design high-stakes B2B pitch decks, professional sales collateral, and corporate presentations that communicate your value proposition clearly and persuade stakeholders to take action.',
    features: ['B2B Pitch Decks', 'Sales Collateral', 'Investor Presentations', 'Visual Storytelling'],
    icon: <Presentation className="w-10 h-10 text-indigo-500" />
  },
];

const ServicesPage: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            Our <span className="text-indigo-600 dark:text-indigo-400">Services</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We deliver end-to-end technological solutions—from bespoke software and cutting-edge AI integrations to growth-driving automation and stunning digital experiences.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-24">
          {detailedServices.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-8">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Side - Glassmorphism Card */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-gray-200 dark:border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-white/40 dark:bg-black/20" />
                  <div className="relative z-10 w-48 h-48 bg-white dark:bg-[#111330] rounded-full shadow-2xl flex items-center justify-center animate-pulse duration-3000 border border-gray-100 dark:border-white/5">
                     {service.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

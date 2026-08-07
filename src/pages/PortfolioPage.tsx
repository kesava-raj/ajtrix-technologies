import React, { useEffect } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const featuredWorks = [
  {
    id: 1,
    title: "UrbanEra Interiors",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    description: "End-to-end turnkey execution and bespoke design for residential and commercial spaces. Features include an animated hero CTA, process timeline, WhatsApp integration, and a portfolio gallery.",
    tags: ["React", "Animations", "WhatsApp Integration", "Portfolio"],
    link: "https://urbanera-new.vercel.app/"
  },
  {
    id: 2,
    title: "Oceanus Advisory",
    category: "Management Consulting",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    description: "A global advisory firm website utilizing a sophisticated dark purple aesthetic with glowing wave animations. Features include interactive service cards, statistics counter, and floating action buttons.",
    tags: ["Corporate", "Animations", "Interactive UI", "Forms"],
    link: "https://oceanus-new.vercel.app/"
  },
  {
    id: 3,
    title: "Design Alchemy",
    category: "Interior & Architecture",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    description: "A dark, luxurious aesthetic for a Chennai-based interior studio. Deliverables include VR preview integration, 45-day delivery promise highlights, Instagram feeds, and consultation booking CTAs.",
    tags: ["VR Integration", "Luxury Design", "Booking CTAs", "Instagram API"],
    link: "https://www.designalchemy.net.in/"
  },
  {
    id: 4,
    title: "EPG Building Services",
    category: "M&E Building Services",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    description: "A B2B corporate website for a provider of premium Mechanical & Electrical building services across Singapore. Prominently displays industry certifications (BCA, bizSAFE, ISO) and includes an inquiry system.",
    tags: ["B2B", "Corporate", "Certifications", "Inquiry System"],
    link: "https://epgbspl.com/"
  }
];

const industryTemplates = [
  { title: "Al Hak Perfumes", category: "Fragrance", description: "Dark, luxurious aesthetic tailored for a product showcase, complete with WhatsApp ordering integration." },
  { title: "The Harsha Crafts & Gifts", category: "Gifting & Crafts", description: "Vibrant red theme highlighting a gift collections gallery and custom order forms." },
  { title: "Saffron Thali", category: "Catering", description: "Elegant warm tones, designed to display menus and facilitate tasting session bookings." },
  { title: "Vinlee", category: "Digital Marketing", description: "A dark, modern aesthetic built to showcase marketing services and performance metrics." },
  { title: "Laya Alankara", category: "Jewelry", description: "Premium dark aesthetic with a curated jewelry collection gallery and WhatsApp ordering capabilities." },
  { title: "Shasthava Real Estate", category: "Real Estate", description: "Modern blue palette focusing on property listings, location mapping, and inquiry forms." },
  { title: "SR Luxury Cars", category: "Luxury Car Rental", description: "Elegant dark design highlighting a fleet gallery alongside floating contact buttons." },
  { title: "TerraPrime Consulting", category: "Land Consulting", description: "Professional blue-orange palette to present service overviews and consultation forms." },
  { title: "DJ Break & Play Arena", category: "Gaming Lounge", description: "Neon-themed dark aesthetic with vibrant pink and cyan accents, integrating booking functionalities." },
  { title: "Bond By Bites", category: "Artisanal Bakery", description: "Premium brown-gold palette to showcase a signature collection alongside bespoke gifting forms." },
  { title: "Auréa Salon", category: "Beauty & Salon", description: "Black and gold luxury design built to display service pricing and facilitate appointment bookings." },
  { title: "Hyle Laban", category: "Desserts & F&B", description: "Fresh light blue design that accommodates full menu categories and customer reviews." },
  { title: "Dr. Cloud Dentistry", category: "Healthcare", description: "Clean, timeless design equipped with a portfolio gallery and Google Reviews integration." },
  { title: "South Spark Photography", category: "Photography", description: "Dark luxury aesthetic to present a service portfolio alongside appointment booking tools." },
  { title: "Fifth Stitch", category: "Bespoke Menswear", description: "Refined dark aesthetic focused on a tailoring gallery and customer inquiry forms." },
  { title: "Buzz Media Fame", category: "Digital Marketing", description: "Modern dark design featuring gold accents, designed to highlight service showcases and client metrics." }
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
            Explore our curated showcase of live, fully responsive projects designed for real businesses, and our premium industry-specific templates.
          </p>
        </div>

        {/* Featured Client Works */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Featured Client Works</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Live projects optimized for conversions and measurable results.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {featuredWorks.map((project, index) => (
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
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition-colors shadow-lg">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
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

        {/* Industry-Specific Templates */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">16+ Industry-Specific Templates</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl">Premium, ready-to-deploy, mobile-responsive website templates designed for rapid deployment and lead generation across specific niches.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industryTemplates.map((template, index) => (
            <div key={index} className="bg-white dark:bg-[#111330] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full mb-4">
                {template.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {template.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {template.description}
              </p>
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

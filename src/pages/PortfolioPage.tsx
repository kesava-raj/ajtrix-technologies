import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import BorderBeamPanel from '../components/ui/border-beam-panel';

const featuredWorks = [
  {
    id: 1,
    title: "UrbanEra Interiors",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    description: "Beyond Interiors, We Design Experiences. We create inspiring spaces that reflect your lifestyle, elevate your everyday, and stand the test of time. UrbanEra Interiors is an interior design company providing end-to-end turnkey execution and bespoke design solutions for residential and commercial spaces. We built a modern, elegant website that reflects their premium positioning with structured layouts, high-quality project imagery, and smooth user interactions.",
    tags: ["Hero section with animated CTA", "Work cycle / process timeline", "WhatsApp integration", "Portfolio gallery showcase", "Client testimonials section", "Fully responsive design"],
    link: "https://urbanera-new.vercel.app/"
  },
  {
    id: 2,
    title: "Oceanus Advisory",
    category: "Management Consulting",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    description: "Bridging Investors, Businesses, and Governments to Create Sustainable Global Growth. A global advisory and management consulting firm specializing in strategic advisory, investment facilitation, infrastructure development, commodity trade, and public affairs—with presence across India, the Middle East, Africa, and international markets. Oceanus Advisory is a global advisory and management consulting firm specializing in strategic advisory, investment facilitation, and infrastructure development across India, the Middle East, Africa, and international markets. We designed a sophisticated website with dark purple aesthetics, glowing wave animations, and interactive elements.",
    tags: ["Animated hero with wave effects", "Interactive service cards", "Contact form integration", "Client logos carousel", "Statistics counter display", "Floating action buttons"],
    link: "https://oceanus-new.vercel.app/"
  },
  {
    id: 3,
    title: "Design Alchemy",
    category: "Interior Design & Architecture",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    description: "Chennai's Finest Interior Design Studio. Cohesive, luxurious living environments crafted in Chennai. 45-day delivery. 10-year warranty. Every space a work of art. Design Alchemy is a Chennai-based interior design studio specializing in bespoke interiors and architecture. We created a dark, luxurious website with elegant typography and high-quality imagery that communicates their premium positioning. Features VR preview integration, 45-day delivery promises, and Instagram feed integration.",
    tags: ["Dark luxury aesthetic design", "Instagram feed integration", "Consultation booking CTA", "Portfolio gallery with categories", "Client testimonials & FAQ", "Mobile-first responsive"],
    link: "https://www.designalchemy.net.in/"
  },
  {
    id: 4,
    title: "EPG Building Services",
    category: "M&E Building Services",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    description: "Building Excellence into Every Structure. EPG Building Services Pte Ltd delivers premium Mechanical & Electrical building services across Singapore—from prestigious condominiums to landmark commercial projects. EPG Building Services provides premium Mechanical & Electrical building services across Singapore. We developed a professional corporate website showcasing their certifications (BCA, bizSAFE, ISO), project references, and organizational structure for a B2B audience in the construction industry.",
    tags: ["Corporate professional layout", "Certifications display", "Service categories", "Project references showcase", "Organization chart", "Contact & inquiry system"],
    link: "https://epgbspl.com/"
  }
];

const industryTemplates = [
  { title: "Al Hak Perfumes", category: "Fragrance", description: "Any perfume. Any brand. Cloned, your price. Dark, luxurious aesthetic with product showcase and WhatsApp ordering..." },
  { title: "The Harsha Crafts & Gifts", category: "Gifting & Crafts", description: "Gifts from the Heart. Vibrant red theme with gift collections gallery and custom order fo..." },
  { title: "Saffron Thali", category: "Catering", description: "Weddings, served with soul. Elegant warm tones with menu showcase and tasting session booking." },
  { title: "Vinlee", category: "Digital Marketing", description: "Marketing that converts. Dark modern aesthetic with service showcase and performance metrics." },
  { title: "Laya Alankara", category: "Jewelry", description: "Handcrafted Heirlooms, Worn Today. Premium dark aesthetic with curated collection and gallery WhatsApp..." },
  { title: "Shasthava Real Estate", category: "Real Estate", description: "Discover Your Dream Home. Modern blue palette with property listings, inquiry forms, and loca..." },
  { title: "SR Luxury Cars", category: "Luxury Car Rental", description: "Arrive in elegance. Dark elegant design with fleet gallery and floating contact buttons." },
  { title: "TerraPrime Consulting", category: "Land Consulting", description: "Buy land. Without the worry. Professional blue-orange palette with service and overview consulta..." },
  { title: "DJ Break & Play Arena", category: "Gaming Lounge", description: "PLAY HARD CHILL HARDER. Neon-themed dark aesthetic with vibrant pink/cyan accents and booki..." },
  { title: "Bond By Bites", category: "Artisanal Bakery", description: "Where Every Bite Creates a Bond. Premium brown-gold palette with signature and collection bespoke gi..." },
  { title: "Auréa Salon", category: "Beauty & Salon", description: "Your Hair, Your Statement. Black and gold luxury design with service pricing and appointment b..." },
  { title: "Hyle Laban", category: "Desserts & F&B", description: "Authentic Middle Eastern Desserts. Fresh light blue design with full menu categories and customer revi..." },
  { title: "Dr. Cloud Dentistry", category: "Healthcare", description: "Dr. Cloud Dentistry. Clean timeless design with portfolio gallery and Google Reviews int..." },
  { title: "South Spark Photography", category: "Photography", description: "Stories, timelessly told. Dark luxury aesthetic with appointment booking and service portfolio." },
  { title: "Fifth Stitch", category: "Bespoke Menswear", description: "Tailored for the groom. Refined dark aesthetic with tailoring gallery and inquiry forms." },
  { title: "Buzz Media Fame", category: "Digital Marketing", description: "Make Your Brand Go Viral. Modern dark design with gold accents, service and showcase, client..." }
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
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
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
            <BorderBeamPanel key={index} radius={16} className="p-6">
              <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full mb-4">
                {template.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {template.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {template.description}
              </p>
            </BorderBeamPanel>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-40 text-center bg-indigo-600 dark:bg-indigo-900/40 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="relative z-10 text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Whether you need a custom website built from scratch or want to launch quickly with one of our industry templates, we're here to make it happen.
          </p>
          <button className="relative z-10 px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:bg-gray-50 transition-colors shadow-xl">
            Let's Start a Conversation
          </button>
        </div>

      </div>
    </div>
  );
};

export default PortfolioPage;

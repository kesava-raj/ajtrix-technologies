import { Star, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const testimonials = [
  {
    name: "Dr. James Bazzi",
    subtitle: "SKIN MD Medspa",
    quote: '"Solora ranked us #1 with more bookings."',
    rankText: '#1 Ranked for "Medspa Dearborn"',
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    name: "Vivian Bousi",
    subtitle: "Skin Care Specialist",
    quote: '"Solora got us 270 5-Star Google Reviews!"',
    rankText: '#1 Ranked for "Facial Dearborn"',
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    name: "Dr. Rula Al-Aouar",
    subtitle: "OB/GYN",
    quote: '"Solora re-booked over 40 patients for us!"',
    rankText: "OB/GYN",
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    name: "Dr. Raychouni",
    subtitle: "MiSpine Chiropractic",
    quote: '"Solora brought in patients we haven\'t seen in years."',
    rankText: '#1 Ranked for "Chiropractor Dearborn Heights"',
    avatarUrl: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    name: "Rasha Dakroub",
    subtitle: "Peek A Boutique",
    quote: '"Solora helped us get 40 ultrasound bookings."',
    rankText: '#1 Ranked for "Ultrasound Ann Arbor/Dearborn"',
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704c",
  },
  {
    name: "Linda",
    subtitle: "Northville Beauty Spa",
    quote: '"Solora got us 36 Botox patients in our first month"',
    rankText: '#1 Ranked for "Botox Northville"',
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
  },
];

const TestimonialSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1 mb-6">
            <Heart className="w-4 h-4 text-purple-500 fill-purple-500" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Client's Feedback
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            See how Solora is helping practices grow
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
                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

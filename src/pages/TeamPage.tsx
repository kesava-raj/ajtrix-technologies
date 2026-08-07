import React, { useEffect } from 'react';
import TeamSection from '../components/TeamSection';

const TeamPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            Meet Our <span className="text-indigo-600 dark:text-indigo-400">Team</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The brilliant minds behind our enterprise solutions. We are a collective of software engineers, AI specialists, and designers dedicated to pushing the boundaries of what's possible.
          </p>
        </div>

        {/* The existing Team Carousel Section */}
        <div className="mt-8">
          <TeamSection />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;

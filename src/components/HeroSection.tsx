import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContact } from '../context/ContactContext';
import { ShinyButton } from './ui/shiny-button';

const HeroSection: React.FC = () => {
  const { scrollToContact } = useContact();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="hero-section flex items-center justify-center min-h-screen relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 pointer-events-none" id="home">
      <div className="z-10 px-4 sm:px-6 max-w-5xl mx-auto pointer-events-auto w-full flex flex-col items-center text-center mt-4 sm:mt-8 md:mt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8 flex flex-col items-center"
        >
          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-2xl leading-[1.12] max-w-4xl"
          >
            We build digital experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">elevate brands</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed"
          >
            We design thoughtful websites, brands, and custom software built around how your business actually works.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
            <ShinyButton
              onClick={() => scrollToContact()}
              className="w-full sm:w-auto text-base sm:text-lg px-7 sm:px-8 py-3.5 sm:py-4 bg-[#121543] text-white dark:bg-white dark:text-[#121543] rounded-full hover:scale-105 transition-transform duration-300"
            >
              Start a Project
            </ShinyButton>
            <Link 
              to="/portfolio"
              className="group inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/5 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
            >
              <span className="font-semibold">View Our Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

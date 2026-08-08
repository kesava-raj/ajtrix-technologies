import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactContext';
import { ShinyButton } from './ui/shiny-button';

const HeroSection: React.FC = () => {
  const { openModal } = useContactModal();

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
    <section className="hero-section flex items-center justify-center min-h-screen relative pt-32 md:pt-40 pb-24 overflow-hidden pointer-events-none" id="home">
      <div className="z-10 px-6 max-w-5xl mx-auto pointer-events-auto w-full flex flex-col items-center text-center mt-20 md:mt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 flex flex-col items-center"
        >
          {/* Top Spacer to maintain layout without the badge */}
          <motion.div variants={itemVariants} className="h-10" aria-hidden="true" />

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-2xl leading-[1.1] max-w-4xl"
          >
            We build digital experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">elevate brands</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed"
          >
            Transform your digital presence with cutting-edge design, seamless animations, and strategic development. We engineer high-converting scalable solutions for modern businesses.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <div onClick={openModal} className="w-full sm:w-auto">
              <ShinyButton className="w-full sm:w-auto text-lg px-8 py-4 bg-[#121543] text-white dark:bg-white dark:text-[#121543] rounded-full hover:scale-105 transition-transform duration-300">
                Start a Project
              </ShinyButton>
            </div>
            <Link 
              to="/portfolio"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/5 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
            >
              <span className="font-semibold">View Our Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div 
            variants={itemVariants}
            className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl opacity-80"
          >
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white">20+</h4>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Projects Delivered</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white">16+</h4>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Industry Niches</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white">3+</h4>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white">4+</h4>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Countries Served</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

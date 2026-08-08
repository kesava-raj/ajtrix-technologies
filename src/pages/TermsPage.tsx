import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900 dark:text-white">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Intellectual Property</h2>
              <p>
                The Site and its original content, features, and functionality are owned by Ajtrix Technologies and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Services Provided</h2>
              <p>
                We provide digital agency services including but not limited to web design, web development, UI/UX design, and digital marketing. The specific terms of any project will be outlined in a separate Statement of Work (SOW) or Service Agreement signed by both parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. User Responsibilities</h2>
              <p>As a user of our website, you agree not to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Use the site in any way that violates any applicable national or international law or regulation.</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the site.</li>
                <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the site or any server, computer, or database connected to the site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall Ajtrix Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;

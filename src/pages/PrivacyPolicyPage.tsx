import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Policy</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
              Effective Date: August 8, 2026
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Ajtrix Technologies ("we," "our," or "us"). We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (ajtrix.com) or engage with our digital, automation, and AI engineering services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us and the website, and may include:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-gray-900 dark:text-gray-200">Contact Information:</strong> Name, email address, phone number, and company name.</li>
                <li><strong className="text-gray-900 dark:text-gray-200">Project Data:</strong> Information regarding your business operations, technical requirements, and digital assets necessary to fulfill our service agreements.</li>
                <li><strong className="text-gray-900 dark:text-gray-200">AI Voice Agent Data:</strong> If you interact with our AI Voice Agents, we may collect audio recordings, transcripts, and call metadata for quality assurance, training, and service execution.</li>
                <li><strong className="text-gray-900 dark:text-gray-200">Automated Interaction Data:</strong> Data collected via our B2B outreach pipelines, web scrapers, and CRM integrations, executed strictly within the bounds of public data availability and client instruction.</li>
                <li><strong className="text-gray-900 dark:text-gray-200">Website Usage Data:</strong> IP addresses, browser types, operating systems, and pages viewed, collected via cookies and tracking technologies to improve our website performance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use personal information collected via our website for a variety of business purposes, including:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>To facilitate and manage client project delivery (e.g., web development, software engineering, and AI deployment).</li>
                <li>To deploy and train custom AI agents and conversational voice bots.</li>
                <li>To automate CRM workflows and lead generation pipelines on behalf of our clients.</li>
                <li>To send administrative information, such as updates to our terms, conditions, and policies.</li>
                <li>To respond to inquiries and offer support.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Sharing Your Information</h2>
              <p className="leading-relaxed">
                We do not sell your personal data. We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf (e.g., hosting providers, LLM API providers like OpenAI, telephony providers like Twilio/Vapi, and automation platforms like n8n). We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Data Retention and Security</h2>
              <p className="leading-relaxed">
                We will only retain your personal information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Your Rights</h2>
              <p className="leading-relaxed">
                Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete the personal information we hold about you. To exercise these rights, please contact us at hello@ajtrix.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. The updated version will be indicated by an updated "Effective Date" and the updated version will be effective as soon as it is accessible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions or comments about this notice, you may email us at <strong>hello@ajtrix.com</strong> or by post to:
              </p>
              <address className="mt-4 not-italic text-gray-600 dark:text-gray-400 p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                <strong>Ajtrix Technologies</strong><br />
                Chennai, Tamil Nadu, India<br />
                hello@ajtrix.com
              </address>
            </section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

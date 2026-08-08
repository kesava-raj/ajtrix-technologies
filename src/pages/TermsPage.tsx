import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsPage: React.FC = () => {
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
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Service</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
              Effective Date: August 8, 2026
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Ajtrix Technologies ("we," "us," or "our"), concerning your access to and use of the ajtrix.com website and our related digital engineering, AI, and automation services. By accessing the site or utilizing our services, you agree that you have read, understood, and agree to be bound by all of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Our Services</h2>
              <p className="leading-relaxed">
                Ajtrix Technologies provides custom software development, AI agent deployment, business automation, web design, and digital marketing services. The specific scope, deliverables, and timelines for any project will be outlined in a separate, written Proposal, Statement of Work (SOW), or Service Level Agreement (SLA) agreed upon by both parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. AI and Automation Disclaimers</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong className="text-gray-900 dark:text-gray-200">AI Voice Agents & Bots:</strong> While we engineer our conversational AI and autonomous agents using state-of-the-art Large Language Models (LLMs) and telephony APIs, artificial intelligence is inherently probabilistic. We do not guarantee 100% accuracy in AI responses, transcriptions, or decision-making. Clients are responsible for providing accurate training data and overseeing the outputs of deployed agents.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-gray-200">Outreach & Scraping Compliance:</strong> For automated lead generation and web scraping services, we build the infrastructure. The Client assumes full responsibility for ensuring that all target data, email outreach, and communication complies with applicable anti-spam laws (e.g., CAN-SPAM, GDPR) and third-party platform terms of service.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Intellectual Property Rights</h2>
              <p className="leading-relaxed">
                Unless otherwise indicated or explicitly stated in a project SOW, the website, our custom templates, and proprietary backend automation workflows remain the intellectual property of Ajtrix Technologies. Upon full payment of project fees, the Client is granted a non-exclusive, non-transferable license to use the custom software, websites, and AI systems developed specifically for their operational use. We reserve the right to showcase completed projects in our portfolio unless a Non-Disclosure Agreement (NDA) specifically prohibits it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Fees and Payment</h2>
              <p className="leading-relaxed">
                Payment terms, including one-time setup fees and ongoing monthly retainers for hosting, maintenance, or API usage, will be detailed in your specific service agreement. We reserve the right to suspend services, including shutting off active AI agents or automated pipelines, if payments are not received by the agreed-upon due dates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Limitation of Liability</h2>
              <p className="leading-relaxed">
                In no event will Ajtrix Technologies, our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our deployed systems, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and defined following the laws of India. Ajtrix Technologies and yourself irrevocably consent that the courts of Chennai, Tamil Nadu, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Contact Information</h2>
              <p className="leading-relaxed">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
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

export default TermsPage;

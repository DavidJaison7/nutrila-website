import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
        >
          <div className="mb-10 pb-10 border-b border-gray-100">
            <h1 className="text-4xl md:text-5xl font-bold font-royal text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-500">Effective Date: 2026</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p>
                Nutrila Lifecare ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage our manufacturing services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-gray-900">Contact Information:</strong> Name, email address, phone number, and company details when you fill out our contact or inquiry forms.</li>
                <li><strong className="text-gray-900">Business Information:</strong> Specifications, product formulas, and branding assets you provide for Third-Party Manufacturing or Private Labeling.</li>
                <li><strong className="text-gray-900">Website Usage Data:</strong> Non-personally identifiable information such as IP addresses, browser types, and pages visited via standard analytics tracking.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="mb-3">We use your information exclusively to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide manufacturing quotes.</li>
                <li>Fulfill business contracts, including manufacturing and delivering your products.</li>
                <li>Improve our website experience and customer service.</li>
                <li>Maintain legally required business and financial records.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality and Data Sharing</h2>
              <p>
                As a trusted manufacturing partner, we treat all client formulas and brand assets with strict confidentiality. We do <strong>not</strong> sell, trade, or rent your personal or business information to third parties. We only share information with trusted logistics partners to fulfill your orders, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data stored by us. To exercise these rights, please contact us at <a href="mailto:nutrilalifecare@gmail.com" className="text-primary-green hover:underline font-medium">nutrilalifecare@gmail.com</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;

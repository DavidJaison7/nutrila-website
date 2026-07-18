import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
        >
          <div className="mb-10 pb-10 border-b border-gray-100">
            <h1 className="text-4xl md:text-5xl font-bold font-royal text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-gray-500">Effective Date: 2026</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing our website and engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Manufacturing Services</h2>
              <p>
                Nutrila Lifecare provides Third-Party Manufacturing and Private Labeling services. All manufacturing timelines, minimum order quantities (MOQs), and pricing will be established in a separate, written contract or purchase order between Nutrila Lifecare and the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-gray-900">Client IP:</strong> You retain all rights to any custom formulas, branding, and packaging designs you provide to us. By providing them, you grant us a temporary license to use them solely for the purpose of fulfilling your manufacturing order.</li>
                <li><strong className="text-gray-900">Nutrila Lifecare IP:</strong> Our proprietary ready-to-brand formulas, website content, text, graphics, and logos are the property of Nutrila Lifecare and may not be reproduced without permission.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Liability and Compliance</h2>
              <p>
                While we guarantee that all products are manufactured in our ISO & cGMP certified facility according to the agreed-upon specifications, the client assumes full responsibility for the legal and regulatory compliance of the final product in their respective target markets (including FDA, FSSAI, or other local regulations). Nutrila Lifecare is not liable for marketing claims made by the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment and Cancellation</h2>
              <p>
                Payment terms will be outlined in your specific contract. Due to the custom nature of third-party manufacturing and private labeling, orders cannot be canceled or refunded once raw materials have been procured or production has begun.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
              <p>
                These terms are governed by the laws of India, specifically the jurisdiction of Himachal Pradesh.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
              <p className="mb-2">For any questions regarding these terms, please contact us at:</p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="font-bold text-gray-900 mb-1">Nutrila Lifecare</p>
                <p>Khasra no-953/270, opp. Dusshera Ground, Sector 5,</p>
                <p>Parwanoo, Himachal Pradesh 173220</p>
                <p className="mt-4"><strong>Email:</strong> <a href="mailto:nutrilalifecare@gmail.com" className="text-primary-green hover:underline">nutrilalifecare@gmail.com</a></p>
                <p><strong>Phone:</strong> +91 78076 88954</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;

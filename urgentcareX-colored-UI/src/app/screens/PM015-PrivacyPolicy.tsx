import { ArrowLeft } from 'lucide-react';
import { ScrollArea } from '../components/ui/scroll-area';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-semibold text-[#1F2937] ml-2">Privacy Policy</h1>
      </div>

      {/* Scrollable Content */}
      <ScrollArea className="flex-1">
        <div className="px-8 py-6">
          {/* Last Updated */}
          <p className="text-sm text-[#6B7280] mb-6">Last Updated: January 2026</p>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Section 1 */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            1. Information We Collect
          </h2>
          <p className="text-base text-[#6B7280] mb-4">
            We collect information you provide directly, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-base text-[#6B7280]">
            <li>Personal information (name, email, phone)</li>
            <li>Health information (symptoms, health profile)</li>
            <li>Insurance information</li>
            <li>Location data</li>
          </ul>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            2. How We Use Your Data
          </h2>
          <p className="text-base text-[#6B7280] mb-4">
            Your data is used to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-base text-[#6B7280]">
            <li>Provide symptom guidance</li>
            <li>Match you with providers</li>
            <li>Process appointments</li>
            <li>Verify insurance</li>
            <li>Improve our services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Section 3 */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            3. Data Sharing and Disclosure
          </h2>
          <p className="text-base text-[#6B7280] mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-base text-[#6B7280]">
            <li>Healthcare providers you choose to book appointments with</li>
            <li>Insurance companies for verification purposes</li>
            <li>Service providers who assist in operating our platform</li>
            <li>Legal authorities when required by law</li>
          </ul>
          <p className="text-base text-[#6B7280] mb-6">
            We never sell your personal health information to third parties.
          </p>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Section 4 */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            4. Data Security
          </h2>
          <p className="text-base text-[#6B7280] mb-6">
            We implement industry-standard security measures including encryption, 
            secure data storage, and access controls to protect your information. 
            All health data is encrypted both in transit and at rest.
          </p>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Section 5 */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            5. Your Rights
          </h2>
          <p className="text-base text-[#6B7280] mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-base text-[#6B7280]">
            <li>Access your personal data</li>
            <li>Request corrections to your data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Export your data</li>
          </ul>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Section 6 */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            6. Cookies and Tracking
          </h2>
          <p className="text-base text-[#6B7280] mb-6">
            We use cookies and similar technologies to improve your experience, 
            analyze usage patterns, and remember your preferences. You can manage 
            cookie preferences in your device settings.
          </p>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Section 7 */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            7. Children's Privacy
          </h2>
          <p className="text-base text-[#6B7280] mb-6">
            Our services are not intended for children under 13. We do not 
            knowingly collect information from children without parental consent.
          </p>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Section 8 */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            8. Changes to This Policy
          </h2>
          <p className="text-base text-[#6B7280] mb-6">
            We may update this Privacy Policy from time to time. We will notify 
            you of any material changes via email or in-app notification.
          </p>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Section 9 */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            9. International Users
          </h2>
          <p className="text-base text-[#6B7280] mb-6">
            If you are accessing our services from outside the United States, 
            please be aware that your information may be transferred to and 
            processed in the United States.
          </p>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Section 10 */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            10. Contact Us
          </h2>
          <p className="text-base text-[#6B7280] mb-2">
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <p className="text-base font-medium text-[#1F2937] mb-8">
            privacy@urgentcarex.com
          </p>
        </div>
      </ScrollArea>
    </div>
  );
}

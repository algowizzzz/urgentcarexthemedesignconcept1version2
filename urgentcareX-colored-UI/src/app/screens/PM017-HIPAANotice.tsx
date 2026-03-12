import { ArrowLeft } from 'lucide-react';
import { ScrollArea } from '../components/ui/scroll-area';

interface HIPAANoticeProps {
  onBack: () => void;
}

export default function HIPAANotice({ onBack }: HIPAANoticeProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-semibold text-[#1F2937] ml-2">HIPAA Notice</h1>
      </div>

      {/* Scrollable Content */}
      <ScrollArea className="flex-1">
        <div className="px-8 py-6">
          {/* Title */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-6">
            Notice of Privacy Practices
          </h2>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Intro */}
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">
            Your Information. Your Rights. Our Responsibilities.
          </h3>

          {/* Info Box */}
          <div className="bg-[#FEF2F2] border border-[#D72638]/20 rounded-2xl p-5 mb-6">
            <div className="text-2xl mb-3">🔒</div>
            <p className="text-sm text-[#6B7280]">
              This notice describes how medical information about you may be used 
              and disclosed and how you can get access to this information. 
              Please review it carefully.
            </p>
          </div>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Your Rights */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            Your Rights
          </h2>
          <p className="text-base text-[#6B7280] mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-6 text-base text-[#6B7280]">
            <li>Get a copy of your paper or electronic medical records</li>
            <li>Request corrections to your medical records</li>
            <li>Request confidential communications</li>
            <li>Ask us to limit what we share</li>
            <li>Get a list of those with whom we've shared information</li>
            <li>Get a copy of this privacy notice</li>
            <li>Choose someone to act for you</li>
            <li>File a complaint if you feel your rights are violated</li>
          </ul>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Your Choices */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            Your Choices
          </h2>
          <p className="text-base text-[#6B7280] mb-4">
            For certain health information, you can tell us your choices about 
            what we share:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-6 text-base text-[#6B7280]">
            <li>Share information with your family, close friends, or others involved in your care</li>
            <li>Share information in a disaster relief situation</li>
            <li>Include your information in a hospital directory</li>
          </ul>
          <p className="text-base text-[#6B7280] mb-6">
            If you are not able to tell us your preference, we may go ahead and 
            share your information if we believe it is in your best interest.
          </p>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Our Uses and Disclosures */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            How We May Use and Disclose Medical Information
          </h2>
          
          <h3 className="text-lg font-semibold text-[#1F2937] mb-3 mt-6">
            Treatment
          </h3>
          <p className="text-base text-[#6B7280] mb-4">
            We can use your health information and share it with healthcare 
            providers who are treating you.
          </p>
          <p className="text-sm text-[#6B7280] mb-6 italic">
            Example: A doctor treating you for an injury asks about your medications. 
            We can share this information with the doctor.
          </p>

          <h3 className="text-lg font-semibold text-[#1F2937] mb-3">
            Payment
          </h3>
          <p className="text-base text-[#6B7280] mb-4">
            We can use and share your health information to bill and get payment 
            from health plans or other entities.
          </p>
          <p className="text-sm text-[#6B7280] mb-6 italic">
            Example: We share information about your treatment with your health 
            insurance plan so it will pay for your care.
          </p>

          <h3 className="text-lg font-semibold text-[#1F2937] mb-3">
            Healthcare Operations
          </h3>
          <p className="text-base text-[#6B7280] mb-6">
            We can use and share your information to run our organization and 
            improve your care.
          </p>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Other Uses */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            Other Ways We May Use or Share Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-3 mb-6 text-base text-[#6B7280]">
            <li>When required by law</li>
            <li>For public health and safety activities</li>
            <li>To respond to lawsuits and legal actions</li>
            <li>For law enforcement purposes</li>
            <li>With health oversight agencies</li>
            <li>For workers' compensation claims</li>
            <li>In emergency situations</li>
            <li>For research purposes (with your authorization or under strict conditions)</li>
          </ul>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Our Responsibilities */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            Our Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-3 mb-6 text-base text-[#6B7280]">
            <li>We are required by law to maintain the privacy and security of your protected health information</li>
            <li>We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information</li>
            <li>We must follow the duties and privacy practices described in this notice</li>
            <li>We will not use or share your information other than as described here unless you tell us we can in writing</li>
          </ul>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Changes */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            Changes to This Notice
          </h2>
          <p className="text-base text-[#6B7280] mb-6">
            We can change the terms of this notice, and the changes will apply to 
            all information we have about you. The new notice will be available 
            upon request and on our website.
          </p>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Contact */}
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            Questions or Complaints
          </h2>
          <p className="text-base text-[#6B7280] mb-4">
            If you have questions about this notice or need more information:
          </p>
          <p className="text-base font-medium text-[#1F2937] mb-6">
            privacy@urgentcarex.com<br />
            1-800-URGENT-X
          </p>
          <p className="text-base text-[#6B7280] mb-8">
            If you believe your privacy rights have been violated, you can file a 
            complaint with us or with the U.S. Department of Health and Human Services 
            Office for Civil Rights. We will not retaliate against you for filing a complaint.
          </p>
        </div>
      </ScrollArea>
    </div>
  );
}

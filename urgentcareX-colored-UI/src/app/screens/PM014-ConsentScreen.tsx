import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ConsentScreenProps {
  onContinue: () => void;
  onBack?: () => void;
  onViewPrivacyPolicy: () => void;
  onViewTermsOfService: () => void;
  onViewDataUsage: () => void;
  onViewDisclaimer: () => void;
  onViewHIPAA: () => void;
}

export default function ConsentScreen({
  onContinue,
  onBack,
  onViewPrivacyPolicy,
  onViewTermsOfService,
  onViewDataUsage,
  onViewDisclaimer,
  onViewHIPAA
}: ConsentScreenProps) {

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Back Button */}
      {onBack && (
        <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
          <button onClick={onBack} className="p-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h2 className="text-lg font-semibold text-white ml-2">Before We Begin</h2>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-8">
            Please review the following to continue.
          </p>

          {/* Privacy Policy Card */}
          <button
            onClick={onViewPrivacyPolicy}
            className="w-full bg-white border border-[#D72638]/20 rounded-2xl p-5 mb-4 text-left hover:bg-[#FEF2F2] transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">🔒</div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                  Privacy Policy
                </h3>
                <p className="text-sm text-[#6B7280] mb-3">
                  Learn how we collect, use, and protect your personal information.
                </p>
                <div className="text-sm font-medium text-[#1F2937]">
                  Read Privacy Policy →
                </div>
              </div>
            </div>
          </button>

          {/* Terms of Service Card */}
          <button
            onClick={onViewTermsOfService}
            className="w-full bg-white border border-[#D72638]/20 rounded-2xl p-5 mb-4 text-left hover:bg-[#FEF2F2] transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">📄</div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                  Terms of Service
                </h3>
                <p className="text-sm text-[#6B7280] mb-3">
                  Review the terms and conditions for using our services.
                </p>
                <div className="text-sm font-medium text-[#1F2937]">
                  Read Terms of Service →
                </div>
              </div>
            </div>
          </button>

          {/* How We Use Your Data Card */}
          <button
            onClick={onViewDataUsage}
            className="w-full bg-white border border-[#D72638]/20 rounded-2xl p-5 mb-4 text-left hover:bg-[#FEF2F2] transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">📋</div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                  How We Use Your Data
                </h3>
                <p className="text-sm text-[#6B7280] mb-3">
                  Understand how your health data is stored and processed.
                </p>
                <div className="text-sm font-medium text-[#1F2937]">
                  Learn More →
                </div>
              </div>
            </div>
          </button>

          {/* Important Disclaimer Card */}
          <button
            onClick={onViewDisclaimer}
            className="w-full bg-white border border-[#D72638]/20 rounded-2xl p-5 mb-4 text-left hover:bg-[#FEF2F2] transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚠️</div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm text-[#6B7280] mb-3">
                  This app does NOT provide medical diagnoses.
                </p>
                <div className="text-sm font-medium text-[#1F2937]">
                  Read Full Disclaimer →
                </div>
              </div>
            </div>
          </button>

          {/* HIPAA Notice Card */}
          <button
            onClick={onViewHIPAA}
            className="w-full bg-white border border-[#D72638]/20 rounded-2xl p-5 mb-4 text-left hover:bg-[#FEF2F2] transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">🏥</div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                  HIPAA Notice
                </h3>
                <p className="text-sm text-[#6B7280] mb-3">
                  Your health information is protected under HIPAA regulations.
                </p>
                <div className="text-sm font-medium text-[#1F2937]">
                  View HIPAA Notice →
                </div>
              </div>
            </div>
          </button>

          {/* Important Notes Section */}
          <div className="bg-[#FEF3C7] border border-[#F59E0B] rounded-2xl p-5 mt-6 text-center">
            <h3 className="text-base font-semibold text-[#1F2937] mb-3">
              Important Notes
            </h3>
            <div className="space-y-3">
              <p className="text-sm text-[#1F2937]">
                Subject to availability and service terms, you may be charged for certain services in the future.
              </p>
              <p className="text-sm text-[#1F2937]">
                When calling a provider, please state <span className="font-semibold">"Customer of UrgentCareX"</span> to receive priority assistance.
              </p>
              <p className="text-sm text-[#1F2937]">
                Wait times are estimates and may change due to new arrivals, walk-ins, or other real-time factors at the facility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-8 pb-4">
        <p className="text-[10px] text-[#9CA3AF] leading-tight text-center">
          DISCLAIMER: This tool provides general care navigation information and does not provide medical advice, diagnosis, or treatment.
        </p>
      </div>

      {/* Fixed Bottom Button */}
      <div className="bg-white border-t border-[#D72638]/20 p-4">
        <Button
          onClick={onContinue}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
        >
          I Understand & Agree
        </Button>
      </div>
    </div>
  );
}
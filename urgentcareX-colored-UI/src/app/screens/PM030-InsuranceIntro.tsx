import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface InsuranceIntroProps {
  onAddInsurance: () => void;
  onNoInsurance: () => void;
  onBack: () => void;
}

export default function InsuranceIntro({ onAddInsurance, onNoInsurance, onBack }: InsuranceIntroProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Progress */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] px-4 py-4">
        <button onClick={onBack} className="p-2 mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="px-2">
          <p className="text-sm font-medium text-white/80 mb-2">
            Step 8 of 9
          </p>
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '88.89%' }}></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Headline */}
          <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
            Insurance Information
          </h1>

          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-8">
            Adding your insurance helps us:
          </p>

          {/* Benefits Cards */}
          <div className="space-y-3 mb-8">
            <div className="bg-white border border-[#D72638]/20 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <div>
                  <p className="text-base text-[#1F2937]">
                    Verify your coverage in real-time
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#D72638]/20 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <div>
                  <p className="text-base text-[#1F2937]">
                    Find in-network providers near you
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#D72638]/20 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <div>
                  <p className="text-base text-[#1F2937]">
                    Estimate your out-of-pocket costs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="flex items-start gap-3 mb-6 p-4 bg-[#FEF2F2] rounded-xl">
            <span className="text-xl">🔒</span>
            <p className="text-sm text-[#6B7280]">
              Your insurance information is encrypted and secure.
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="bg-white border-t border-[#D72638]/20 p-4 space-y-3">
        <Button 
          onClick={onAddInsurance}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
        >
          Add Insurance
        </Button>

        <Button 
          onClick={onNoInsurance}
          variant="outline"
          className="w-full h-[52px] border-[#D72638]/20 text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2]"
        >
          I don't have insurance
        </Button>
      </div>
    </div>
  );
}
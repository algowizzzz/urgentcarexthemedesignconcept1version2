import { Button } from '../components/ui/button';
import { ArrowLeft, MessageSquare, Shield, Clock, Stethoscope } from 'lucide-react';

interface SymptomCheckerStartProps {
  onStart: () => void;
  onBack: () => void;
}

export default function SymptomCheckerStart({ onStart, onBack }: SymptomCheckerStartProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-8 overflow-y-auto pb-4">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-[#D72638]/5 rounded-full flex items-center justify-center">
            <Stethoscope className="w-12 h-12 text-[#1F2937]" />
          </div>
        </div>

        {/* Subhead */}
        <p className="text-base text-[#6B7280] mb-8 text-center">
          Our AI will ask you general questions about your needs to help match you with healthcare facilities and providers.
        </p>

        {/* Features */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4 p-4 bg-[#FEF2F2] rounded-xl">
            <div className="w-10 h-10 bg-[#10B981]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <p className="text-base font-semibold text-[#1F2937] mb-1">
                Approximately 60 seconds
              </p>
              <p className="text-sm text-[#6B7280]">
                Quick and easy conversation to understand your symptoms
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-[#FEF2F2] rounded-xl">
            <div className="w-10 h-10 bg-[#10B981]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <p className="text-base font-semibold text-[#1F2937] mb-1">
                Private & Secure
              </p>
              <p className="text-sm text-[#6B7280]">
                We use industry-standard safeguards designed to protect your information consistent with HIPAA requirements
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-[#FEF2F2] rounded-xl">
            <div className="w-10 h-10 bg-[#10B981]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <p className="text-base font-semibold text-[#1F2937] mb-1">
                Explore Care Options Near You
              </p>
              <p className="text-sm text-[#6B7280]">
                Connect with healthcare providers who can help with your symptoms
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="border-2 border-[#EF4444] rounded-xl p-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-xl">🚨</span>
            <div>
              <p className="text-base font-semibold text-[#EF4444] mb-2">
                Emergency Warning
              </p>
              <p className="text-sm text-[#1F2937] mb-3">
                If you believe you may be experiencing a medical emergency — such as:
              </p>
              <ul className="text-sm text-[#1F2937] space-y-1 ml-4 mb-3">
                <li>• Chest pain or difficulty breathing</li>
                <li>• Severe bleeding or head injury</li>
                <li>• Loss of consciousness</li>
                <li>• Severe allergic reaction</li>
              </ul>
              <p className="text-sm font-semibold text-[#EF4444]">
                Call 911 immediately or go to the nearest emergency room.
              </p>
            </div>
          </div>
        </div>

        </div>

      {/* Bottom Button */}
      <div className="px-8 py-4 bg-white border-t border-[#D72638]/20">
        <Button 
          onClick={onStart}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
        >
          Care Search
        </Button>
      </div>
    </div>
  );
}
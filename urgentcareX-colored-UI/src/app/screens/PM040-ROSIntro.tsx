import { Button } from '../components/ui/button';
import { ArrowLeft, ClipboardList, Shield } from 'lucide-react';
import { QUESTIONNAIRE_NAME } from '../constants/questionnaire';

interface ROSIntroProps {
  onStart: () => void;
  onSkip: () => void;
  onBack: () => void;
}

export default function ROSIntro({ onStart, onSkip, onBack }: ROSIntroProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-8 overflow-y-auto pb-8">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-[#D72638]/5 rounded-full flex items-center justify-center">
            <ClipboardList className="w-12 h-12 text-[#1F2937]" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-[28px] font-bold text-[#1F2937] mb-3 text-center">
          {QUESTIONNAIRE_NAME}
        </h1>

        {/* Estimated Time */}
        <p className="text-sm text-[#6B7280] text-center mb-4">Approximate time to complete: 1 minute</p>

        {/* Disclaimer Card */}
        <div className="bg-[#FEF2F2] rounded-xl p-5 mb-4">
          <p className="text-sm text-[#6B7280]">
            To help you save time at the doctor's office, please complete this questionnaire.
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-[#FEF2F2] rounded-xl p-5 mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-3">
            What is the {QUESTIONNAIRE_NAME}?
          </h3>
          <p className="text-sm text-[#6B7280]">
            The {QUESTIONNAIRE_NAME} is a comprehensive set of questions healthcare providers use to understand your overall health. It helps identify symptoms you might not have mentioned initially.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button 
            onClick={onSkip}
            variant="outline"
            className="flex-1 h-[52px] border-[#D72638]/20 text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2]"
          >
            Skip all / Complete Later
          </Button>
          <Button
            onClick={onStart}
            className="flex-1 h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
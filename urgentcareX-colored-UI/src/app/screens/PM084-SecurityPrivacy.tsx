import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Lock, Shield, ChevronRight } from 'lucide-react';

interface SecurityPrivacyProps {
  onNavigate: (section: string) => void;
  onBack: () => void;
}

export default function SecurityPrivacy({ onNavigate, onBack }: SecurityPrivacyProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Security & Privacy</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Security */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-4">Security</h3>
          <div className="space-y-3">
            <button
              onClick={() => onNavigate('change-password')}
              className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#D72638] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-[#6B7280]" />
                <span className="text-base text-[#1F2937]">Change Password</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#6B7280]" />
            </button>
          </div>
        </div>

        {/* Privacy */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-4">Privacy</h3>
          <div className="space-y-3">
            <button
              onClick={() => onNavigate('delete-account')}
              className="w-full flex items-center justify-between p-4 bg-white border border-[#EF4444] rounded-xl hover:bg-[#EF4444]/5 transition-colors"
            >
              <span className="text-base text-[#EF4444] font-medium">Delete Account</span>
              <ChevronRight className="w-5 h-5 text-[#EF4444]" />
            </button>
          </div>
        </div>

        {/* HIPAA Compliance */}
        <div className="bg-[#FEF2F2] border-l-4 border-[#D72638] rounded-xl p-4">
          <h3 className="text-sm font-semibold text-[#1F2937] mb-2">
            🔒 HIPAA Compliant
          </h3>
          <p className="text-sm text-[#6B7280]">
            Your health information is protected and encrypted according to HIPAA regulations. We never share your data without your explicit consent.
          </p>
        </div>
      </div>
    </div>
  );
}
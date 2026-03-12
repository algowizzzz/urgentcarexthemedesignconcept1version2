import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface AppointmentReasonProps {
  providerName: string;
  onContinue: (reason: string, details: string) => void;
  onBack: () => void;
}

const VISIT_REASONS = [
  'Follow-up visit',
  'New problem or symptom',
  'Routine checkup',
  'Prescription refill',
  'Lab results review',
  'Chronic condition management',
  'Second opinion',
  'Other'
];

export default function AppointmentReason({ providerName, onContinue, onBack }: AppointmentReasonProps) {
  const [selectedReason, setSelectedReason] = useState('');
  const [details, setDetails] = useState('');

  const handleContinue = () => {
    if (selectedReason) {
      onContinue(selectedReason, details);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Reason for Visit</h2>
      </div>

      {/* Provider Info */}
      <div className="px-4 py-3 bg-[#FEF2F2] border-b border-[#D72638]/20">
        <p className="text-sm text-[#6B7280]">Appointment with</p>
        <p className="text-base font-semibold text-[#1F2937]">{providerName}</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Reason Selection */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-4">
            What is the reason for your visit?
          </h3>
          <div className="space-y-3">
            {VISIT_REASONS.map((reason) => (
              <button
                key={reason}
                onClick={() => setSelectedReason(reason)}
                className={`w-full text-left p-4 rounded-xl transition-all ${
                  selectedReason === reason
                    ? 'bg-[#D72638] text-white'
                    : 'bg-white border border-[#D72638]/20 text-[#1F2937] hover:border-[#D72638]'
                }`}
              >
                {reason}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Details */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-2">
            Additional Details (Optional)
          </h3>
          <p className="text-sm text-[#6B7280] mb-3">
            Provide any additional information that might help your provider prepare for your visit.
          </p>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Describe your symptoms, concerns, or questions..."
            className="w-full h-32 px-4 py-3 border border-[#D72638]/20 rounded-xl text-base resize-none focus:outline-none focus:border-[#D72638]"
          />
        </div>

        {/* Info Notice */}
        <div className="bg-[#FEF2F2] rounded-xl p-4">
          <div className="flex items-start gap-2">
            <span className="text-lg">ℹ️</span>
            <p className="text-sm text-[#6B7280]">
              This information will be shared with your provider before your appointment to help them provide better care.
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#D72638]/20 p-4 max-w-[390px] mx-auto">
        <Button 
          onClick={handleContinue}
          disabled={!selectedReason}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

interface CancelAppointmentProps {
  providerName: string;
  date: string;
  time: string;
  onConfirmCancel: (reason: string, additionalInfo: string) => void;
  onBack: () => void;
}

const CANCEL_REASONS = [
  'Feeling better',
  'Schedule conflict',
  'Found another provider',
  'Financial reasons',
  'Transportation issues',
  'Weather conditions',
  'Personal emergency',
  'Other'
];

export default function CancelAppointment({ 
  providerName, 
  date, 
  time, 
  onConfirmCancel, 
  onBack 
}: CancelAppointmentProps) {
  const [selectedReason, setSelectedReason] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleConfirm = () => {
    onConfirmCancel(selectedReason, additionalInfo);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Confirm Cancellation</h2>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8 overflow-y-auto">
        {/* Warning Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-[#EF4444]/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-[#EF4444]" />
          </div>
        </div>

        {/* Confirmation Text */}
        <h3 className="text-xl font-bold text-[#1F2937] mb-3 text-center">
          Are you sure you want to cancel?
        </h3>
        <p className="text-base text-[#6B7280] mb-6 text-center">
          This action cannot be undone. You'll need to book a new appointment if you change your mind.
        </p>

        {/* Appointment Info */}
        <div className="bg-[#FEF2F2] rounded-xl p-5 mb-6">
          <p className="text-sm text-[#6B7280] mb-2">Appointment Being Cancelled</p>
          <p className="text-base font-semibold text-[#1F2937] mb-1">{providerName}</p>
          <p className="text-sm text-[#6B7280]">
            {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at {time}
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleConfirm}
            className="w-full h-[52px] bg-[#EF4444] text-white rounded-xl text-base font-medium hover:bg-[#DC2626]"
          >
            Yes, Cancel Appointment
          </Button>

          <Button 
            onClick={onBack}
            variant="outline"
            className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2]"
          >
            Keep Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
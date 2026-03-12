import { Button } from '../components/ui/button';
import { CheckCircle, Calendar, Home, Search } from 'lucide-react';

interface CancelConfirmationProps {
  providerName: string;
  onFindNewProvider: () => void;
  onGoHome: () => void;
}

export default function CancelConfirmation({ 
  providerName, 
  onFindNewProvider, 
  onGoHome 
}: CancelConfirmationProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Success Header */}
      <div className="bg-gradient-to-br from-[#8B1A2B] to-[#D72638] px-6 pt-12 pb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
            <CheckCircle className="w-12 h-12 text-[#D72638]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Appointment Cancelled
          </h1>
          <p className="text-base text-white/90">
            Your appointment has been cancelled
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto pb-8">
        {/* Cancellation Details */}
        <div className="bg-[#FEF2F2] rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-[#1F2937] mb-4">Cancellation Details</h2>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-[#6B7280] mb-1">Provider</p>
              <p className="text-base font-semibold text-[#1F2937]">{providerName}</p>
            </div>

            <div>
              <p className="text-sm text-[#6B7280] mb-1">Status</p>
              <p className="text-base font-semibold text-[#6B7280]">Cancelled</p>
            </div>

            <div>
              <p className="text-sm text-[#6B7280] mb-1">Cancellation Date</p>
              <p className="text-base font-semibold text-[#1F2937]">
                {new Date().toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={onGoHome}
            className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
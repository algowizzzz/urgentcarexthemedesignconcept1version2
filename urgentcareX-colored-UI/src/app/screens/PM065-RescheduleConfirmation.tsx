import { Button } from '../components/ui/button';
import { CheckCircle, Calendar, Clock, Home } from 'lucide-react';

interface RescheduleConfirmationProps {
  providerName: string;
  newDate: string;
  newTime: string;
  onViewAppointment: () => void;
  onGoHome: () => void;
}

export default function RescheduleConfirmation({ 
  providerName, 
  newDate, 
  newTime, 
  onViewAppointment, 
  onGoHome 
}: RescheduleConfirmationProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Success Header */}
      <div className="bg-gradient-to-br from-[#8B1A2B] to-[#D72638] px-6 pt-12 pb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
            <CheckCircle className="w-12 h-12 text-[#D72638]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Appointment Rescheduled!
          </h1>
          <p className="text-base text-white/90">
            Your appointment has been successfully updated
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto pb-8">
        {/* New Appointment Details */}
        <div className="bg-[#FEF2F2] rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-[#1F2937] mb-4">Updated Appointment</h2>
          
          <div className="space-y-4 mb-4">
            <div>
              <p className="text-sm text-[#6B7280] mb-1">Provider</p>
              <p className="text-base font-semibold text-[#1F2937]">{providerName}</p>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#6B7280] mt-0.5" />
              <div>
                <p className="text-sm text-[#6B7280] mb-1">New Date</p>
                <p className="text-base font-semibold text-[#1F2937]">
                  {new Date(newDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#6B7280] mt-0.5" />
              <div>
                <p className="text-sm text-[#6B7280] mb-1">New Time</p>
                <p className="text-base font-semibold text-[#1F2937]">{newTime}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={onViewAppointment}
            variant="outline"
            className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2]"
          >
            <Calendar className="w-5 h-5 mr-2" />
            View Appointment Details
          </Button>

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
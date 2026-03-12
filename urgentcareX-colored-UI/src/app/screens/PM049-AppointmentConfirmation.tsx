import { Button } from '../components/ui/button';
import { Home, Calendar, Share, MapPin, Clock, User } from 'lucide-react';

interface AppointmentConfirmationProps {
  providerName: string;
  date: string;
  time: string;
  onGoHome: () => void;
  onViewAppointments: () => void;
}

export default function AppointmentConfirmation({ 
  providerName, 
  date, 
  time, 
  onGoHome, 
  onViewAppointments 
}: AppointmentConfirmationProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Success Header */}
      <div className="bg-gradient-to-br from-[#8B1A2B] to-[#D72638] px-6 pt-12 pb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
            <span className="text-4xl">✓</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Provider approval in progress
          </h1>
          <p className="text-base text-white/90">
            You'll receive a notification once confirmed
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto pb-24">
        {/* Appointment Details Card */}
        <div className="bg-white border-2 border-[#D72638] rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-[#1F2937] mb-4">Scheduled Visit Details</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-[#6B7280] mt-0.5" />
              <div>
                <p className="text-sm text-[#6B7280] mb-1">Provider</p>
                <p className="text-base font-semibold text-[#1F2937]">{providerName}</p>
                <p className="text-sm text-[#6B7280]">Primary Care Physician</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#6B7280] mt-0.5" />
              <div>
                <p className="text-sm text-[#6B7280] mb-1">Date</p>
                <p className="text-base font-semibold text-[#1F2937]">
                  {new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#6B7280] mt-0.5" />
              <div>
                <p className="text-sm text-[#6B7280] mb-1">Time</p>
                <p className="text-base font-semibold text-[#1F2937]">{time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#6B7280] mt-0.5" />
              <div>
                <p className="text-sm text-[#6B7280] mb-1">Location</p>
                <p className="text-base font-semibold text-[#1F2937]">UrgentCareX Medical Center</p>
                <p className="text-sm text-[#6B7280]">123 Healthcare Drive</p>
                <p className="text-sm text-[#6B7280]">Los Angeles, CA 90210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">What's Next?</h3>
          <div className="space-y-3">
            {/* Removed Check Your Email card */}

            <div className="flex items-start gap-3 p-4 bg-[#FEF2F2] rounded-xl">
              <span className="text-xl">📋</span>
              <div>
                <p className="text-sm font-medium text-[#1F2937] mb-1">Prepare for Your Visit</p>
                <p className="text-sm text-[#6B7280]">Bring your insurance card and ID</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#FEF2F2] rounded-xl">
              <span className="text-xl">⏰</span>
              <div>
                <p className="text-sm font-medium text-[#1F2937] mb-1">Arrive Early</p>
                <p className="text-sm text-[#6B7280]">Please arrive 15 minutes before your appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="bg-white border-t border-[#D72638]/20 p-4">
        <Button 
          onClick={onGoHome}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
        >
          <Home className="w-5 h-5 mr-2" />
          Confirm
        </Button>
      </div>
    </div>
  );
}
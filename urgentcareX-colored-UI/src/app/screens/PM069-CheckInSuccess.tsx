import { Button } from '../components/ui/button';
import { CheckCircle, Home, MapPin } from 'lucide-react';

interface CheckInSuccessProps {
  providerName: string;
  estimatedWaitTime?: number;
  onViewAppointment: () => void;
  onGoHome: () => void;
}

export default function CheckInSuccess({ 
  providerName, 
  estimatedWaitTime = 15,
  onViewAppointment, 
  onGoHome 
}: CheckInSuccessProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Success Header */}
      <div className="bg-[#10B981] px-6 pt-12 pb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
            <CheckCircle className="w-12 h-12 text-[#10B981]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Check-In Complete!
          </h1>
          <p className="text-base text-white/90">
            You're all set for your appointment
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto pb-8">
        {/* Wait Time Card */}
        <div className="bg-gradient-to-r from-[#10B981]/10 to-[#10B981]/5 border-2 border-[#10B981] rounded-2xl p-6 mb-6">
          <div className="text-center">
            <p className="text-sm text-[#6B7280] mb-2">Estimated Wait Time</p>
            <p className="text-4xl font-bold text-[#10B981] mb-1">{estimatedWaitTime} min</p>
            <p className="text-sm text-[#6B7280]">The provider will see you shortly</p>
          </div>
        </div>

        {/* Status Info */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 mb-6">
          <h2 className="text-lg font-semibold text-[#1F2937] mb-4">Appointment Status</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1F2937]">Checked In</p>
                <p className="text-xs text-[#6B7280]">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#FEF2F2] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-base">👨‍⚕️</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1F2937]">Provider Notified</p>
                <p className="text-xs text-[#6B7280]">{providerName} knows you're here</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#FEF2F2] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-base">⏳</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1F2937]">Waiting for Provider</p>
                <p className="text-xs text-[#6B7280]">You'll be called soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* While You Wait */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">While You Wait</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-[#FEF2F2] rounded-xl">
              <span className="text-lg">📱</span>
              <div>
                <p className="text-sm font-medium text-[#1F2937] mb-1">Stay Nearby</p>
                <p className="text-sm text-[#6B7280]">Please remain in the waiting area. You'll receive a notification when it's your turn.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#FEF2F2] rounded-xl">
              <span className="text-lg">🚻</span>
              <div>
                <p className="text-sm font-medium text-[#1F2937] mb-1">Restrooms Available</p>
                <p className="text-sm text-[#6B7280]">Located down the hall to the left</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#FEF2F2] rounded-xl">
              <span className="text-lg">💧</span>
              <div>
                <p className="text-sm font-medium text-[#1F2937] mb-1">Water & Coffee</p>
                <p className="text-sm text-[#6B7280]">Complimentary beverages in the waiting area</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Reminders */}
        <div className="bg-[#10B981]/10 border-l-4 border-[#10B981] rounded-xl p-4 mb-6">
          <h3 className="text-sm font-semibold text-[#1F2937] mb-2">
            Important Reminders
          </h3>
          <ul className="text-sm text-[#6B7280] space-y-1 ml-4">
            <li>• Keep your phone notifications on</li>
            <li>• Have your insurance card ready</li>
            <li>• Inform staff if you need to step out</li>
            <li>• Wait times are estimates and may vary</li>
          </ul>
        </div>

        {/* Need Help? */}
        <div className="bg-[#FEF2F2] rounded-xl p-5 mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-2">
            Need Help?
          </h3>
          <p className="text-sm text-[#6B7280] mb-3">
            If you have any questions or concerns, please speak with our reception staff.
          </p>
          <button className="text-sm font-medium text-[#1F2937] hover:underline">
            Contact Reception
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={onViewAppointment}
            variant="outline"
            className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2]"
          >
            <MapPin className="w-5 h-5 mr-2" />
            View Clinic Information
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

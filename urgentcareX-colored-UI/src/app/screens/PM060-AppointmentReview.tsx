import { Button } from '../components/ui/button';
import { ArrowLeft, Calendar, Clock, User, MapPin, FileText, CreditCard } from 'lucide-react';

interface AppointmentReviewProps {
  providerName: string;
  date: string;
  time: string;
  reason: string;
  details?: string;
  onConfirm: () => void;
  onBack: () => void;
}

export default function AppointmentReview({ 
  providerName, 
  date, 
  time, 
  reason, 
  details,
  onConfirm, 
  onBack 
}: AppointmentReviewProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Review & Confirm</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Review Your Appointment */}
        <div className="px-6 py-6">
          <h3 className="text-xl font-semibold text-[#1F2937] mb-6">
            Review Your Appointment
          </h3>

          {/* Provider Details */}
          <div className="border border-[#D72638]/20 rounded-2xl p-5 mb-4">
            <div className="flex items-start gap-3 mb-4">
              <User className="w-5 h-5 text-[#6B7280] mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-[#6B7280] mb-1">Provider</p>
                <p className="text-base font-semibold text-[#1F2937]">{providerName}</p>
                <p className="text-sm text-[#6B7280]">Primary Care Physician</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <Calendar className="w-5 h-5 text-[#6B7280] mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-[#6B7280] mb-1">Date</p>
                <p className="text-base font-semibold text-[#1F2937]">
                  {new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <Clock className="w-5 h-5 text-[#6B7280] mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-[#6B7280] mb-1">Time</p>
                <p className="text-base font-semibold text-[#1F2937]">{time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-[#6B7280] mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-[#6B7280] mb-1">Location</p>
                <p className="text-base font-semibold text-[#1F2937]">UrgentCareX Medical Center</p>
                <p className="text-sm text-[#6B7280]">123 Healthcare Drive, Los Angeles, CA 90210</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-[#6B7280] mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-[#6B7280] mb-1">Reason for Visit</p>
                <p className="text-base font-semibold text-[#1F2937]">{reason}</p>
                {details && (
                  <p className="text-sm text-[#6B7280] mt-2">{details}</p>
                )}
              </div>
            </div>
          </div>

          {/* Insurance */}
          <div className="border border-[#D72638]/20 rounded-2xl p-5 mb-6">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-[#6B7280]" />
              <div className="flex-1">
                <p className="text-sm text-[#6B7280] mb-1">Insurance</p>
                <p className="text-base font-semibold text-[#1F2937]">Blue Cross Blue Shield</p>
                <p className="text-sm text-[#6B7280]">Member ID: ABC123456789</p>
              </div>
              <button className="text-sm text-[#1F2937] font-medium">Change</button>
            </div>
          </div>

          {/* Important Reminders */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-[#1F2937] mb-4">
              Important Reminders
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-[#FEF2F2] rounded-xl">
                <span className="text-lg">⏰</span>
                <div>
                  <p className="text-sm font-medium text-[#1F2937] mb-1">Arrive Early</p>
                  <p className="text-sm text-[#6B7280]">Please arrive 15 minutes before your appointment</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FEF2F2] rounded-xl">
                <span className="text-lg">📋</span>
                <div>
                  <p className="text-sm font-medium text-[#1F2937] mb-1">What to Bring</p>
                  <p className="text-sm text-[#6B7280]">Insurance card, photo ID, list of current medications</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FEF2F2] rounded-xl">
                <span className="text-lg">📱</span>
                <div>
                  <p className="text-sm font-medium text-[#1F2937] mb-1">Appointment Reminders</p>
                  <p className="text-sm text-[#6B7280]">You'll receive reminders 24 hours and 1 hour before</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-[#F59E0B]/10 border-l-4 border-[#F59E0B] rounded-xl p-4 mb-6">
            <h3 className="text-sm font-semibold text-[#1F2937] mb-2">
              Cancellation Policy
            </h3>
            <p className="text-sm text-[#6B7280]">
              Please cancel or reschedule at least 24 hours in advance to avoid a cancellation fee.
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#D72638]/20 p-4 max-w-[390px] mx-auto">
        <Button 
          onClick={onConfirm}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
        >
          Confirm Appointment
        </Button>
      </div>
    </div>
  );
}

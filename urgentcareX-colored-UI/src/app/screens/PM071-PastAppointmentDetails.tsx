import { Button } from '../components/ui/button';
import { ArrowLeft, Calendar, Clock, User, FileText, Download, Share } from 'lucide-react';

interface PastAppointment {
  id: string;
  providerName: string;
  specialty: string;
  date: string;
  time: string;
  diagnosis: string;
  type: 'in-person' | 'virtual';
  hasDocuments: boolean;
}

interface PastAppointmentDetailsProps {
  appointment: PastAppointment;
  onBookFollowUp: () => void;
  onBack: () => void;
}

export default function PastAppointmentDetails({ 
  appointment, 
  onBookFollowUp, 
  onBack 
}: PastAppointmentDetailsProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Visit Summary</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-8">
        {/* Status Banner */}
        <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] px-6 py-4">
          <div className="flex items-center gap-2 text-white">
            <span className="text-lg">✓</span>
            <p className="text-sm font-medium">Visit Completed</p>
          </div>
        </div>

        {/* Provider Info */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-[#FEF2F2] rounded-full flex items-center justify-center text-3xl">
              👨‍⚕️
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#1F2937] mb-1">
                {appointment.providerName}
              </h3>
              <p className="text-base text-[#6B7280]">
                {appointment.specialty}
              </p>
            </div>
          </div>
        </div>

        {/* Visit Details */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Visit Details</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#6B7280] mt-0.5" />
              <div>
                <p className="text-sm text-[#6B7280] mb-1">Date</p>
                <p className="text-base font-semibold text-[#1F2937]">
                  {new Date(appointment.date).toLocaleDateString('en-US', { 
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
                <p className="text-sm text-[#6B7280] mb-1">Time</p>
                <p className="text-base font-semibold text-[#1F2937]">{appointment.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-[#6B7280] mt-0.5" />
              <div>
                <p className="text-sm text-[#6B7280] mb-1">Type</p>
                <p className="text-base font-semibold text-[#1F2937]">
                  {appointment.type === 'virtual' ? '📹 Virtual Consultation' : '🏥 In-Person Visit'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Diagnosis & Treatment */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Diagnosis & Treatment</h3>
          
          <div className="bg-[#FEF2F2] rounded-xl p-5 mb-4">
            <p className="text-sm text-[#6B7280] mb-2">Diagnosis</p>
            <p className="text-base font-semibold text-[#1F2937] mb-4">
              {appointment.diagnosis}
            </p>
            
            <p className="text-sm text-[#6B7280] mb-2">Treatment Plan</p>
            <p className="text-sm text-[#1F2937]">
              Patient advised to rest, increase fluid intake, and take prescribed medications as directed. Follow up if symptoms persist beyond 7 days.
            </p>
          </div>

          {/* Prescriptions */}
          <div className="mb-4">
            <p className="text-sm font-medium text-[#1F2937] mb-3">Prescriptions</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-white border border-[#E5E7EB] rounded-xl">
                <div>
                  <p className="text-sm font-medium text-[#1F2937]">Amoxicillin 500mg</p>
                  <p className="text-xs text-[#6B7280]">Take twice daily for 10 days</p>
                </div>
                <span className="text-lg">💊</span>
              </div>
            </div>
          </div>

          {/* Lab Orders */}
          <div>
            <p className="text-sm font-medium text-[#1F2937] mb-3">Lab Orders</p>
            <div className="p-3 bg-white border border-[#E5E7EB] rounded-xl">
              <p className="text-sm text-[#6B7280]">No lab orders for this visit</p>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Documents</h3>
          
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#D72638] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D72638]/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#1F2937]" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-[#1F2937]">Visit Summary</p>
                  <p className="text-xs text-[#6B7280]">PDF • 2 pages</p>
                </div>
              </div>
              <Download className="w-5 h-5 text-[#6B7280]" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#D72638] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D72638]/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#1F2937]" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-[#1F2937]">Prescription</p>
                  <p className="text-xs text-[#6B7280]">PDF • 1 page</p>
                </div>
              </div>
              <Download className="w-5 h-5 text-[#6B7280]" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#D72638] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D72638]/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#1F2937]" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-[#1F2937]">After Visit Instructions</p>
                  <p className="text-xs text-[#6B7280]">PDF • 1 page</p>
                </div>
              </div>
              <Download className="w-5 h-5 text-[#6B7280]" />
            </button>
          </div>
        </div>

        {/* Follow-Up Care */}
        <div className="px-6 py-6">
          <div className="bg-[#10B981]/10 border-l-4 border-[#10B981] rounded-xl p-5 mb-6">
            <h3 className="text-base font-semibold text-[#1F2937] mb-2">
              Follow-Up Recommended
            </h3>
            <p className="text-sm text-[#6B7280] mb-4">
              Your provider recommends a follow-up visit in 2 weeks to monitor your progress.
            </p>
            <Button 
              onClick={onBookFollowUp}
              className="w-full h-[48px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Follow-Up Appointment
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              variant="outline"
              className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2]"
            >
              <Share className="w-5 h-5 mr-2" />
              Share Visit Summary
            </Button>

            <Button 
              variant="outline"
              className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2]"
            >
              <Download className="w-5 h-5 mr-2" />
              Download All Documents
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

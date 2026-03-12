import { Button } from '../components/ui/button';
import { ArrowLeft, Calendar, Clock, CheckCircle, MessageSquare, FileText, ClipboardList, Building2 } from 'lucide-react';
import { QUESTIONNAIRE_NAME } from '../constants/questionnaire';

interface Appointment {
  id: string;
  providerName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  rosCompleted?: boolean;
  type?: 'doctor' | 'facility';
}

interface AppointmentDetailsProps {
  appointment: Appointment;
  onReschedule: () => void;
  onCancel: () => void;
  onMarkComplete?: () => void;
  onLeaveReview?: () => void;
  onCompleteROS?: () => void;
  onRebook?: () => void;
  onBack: () => void;
}

export default function AppointmentDetails({
  appointment,
  onReschedule,
  onCancel,
  onMarkComplete,
  onLeaveReview,
  onCompleteROS,
  onRebook,
  onBack
}: AppointmentDetailsProps) {
  const isConfirmed = appointment.status === 'confirmed';
  const isCompleted = appointment.status === 'completed';
  const isCancelled = appointment.status === 'cancelled';

  // Mock ROS summary data - would come from backend in real app
  const rosSummary = [
    { category: 'General', symptoms: 'No significant concerns reported' },
    { category: 'Head & Neck', symptoms: 'No headaches or neck pain' },
    { category: 'Eyes', symptoms: 'No vision changes' },
    { category: 'Ears, Nose & Throat', symptoms: 'No hearing issues or sore throat' },
    { category: 'Cardiovascular', symptoms: 'No chest pain or palpitations' },
    { category: 'Respiratory', symptoms: 'No shortness of breath' },
    { category: 'Gastrointestinal', symptoms: 'No nausea or digestive issues' },
    { category: 'Musculoskeletal', symptoms: 'No joint pain or muscle weakness' },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Appointment Details</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Provider Info */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          {/* Type Badge */}
          <div className="flex items-center gap-2 mb-4">
            {appointment.type === 'facility' ? (
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#D72638]/5 rounded-full">
                <Building2 className="w-3.5 h-3.5 text-[#1F2937]" />
                <span className="text-xs font-medium text-[#1F2937]">Facility</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#10B981]/10 rounded-full">
                <span className="text-xs font-medium text-[#10B981]">Individual Doctor</span>
              </div>
            )}
          </div>

          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-[#FEF2F2] rounded-full flex items-center justify-center text-3xl">
              {appointment.type === 'facility' ? '🏥' : '👨‍⚕️'}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#1F2937] mb-1">
                {appointment.providerName}
              </h3>
              <p className="text-base text-[#6B7280] mb-2">
                {appointment.specialty}
              </p>
              <div className={`inline-flex px-3 py-1 ${
                appointment.status === 'confirmed' ? 'bg-[#D72638]' :
                appointment.status === 'pending' ? 'bg-[#D72638]' :
                appointment.status === 'cancelled' ? 'bg-[#EF4444]' :
                'bg-[#D72638]'
              }/10 rounded-full`}>
                <p className={`text-sm font-medium ${
                  appointment.status === 'confirmed' ? 'text-[#D72638]' :
                  appointment.status === 'pending' ? 'text-[#D72638]' :
                  appointment.status === 'cancelled' ? 'text-[#EF4444]' :
                  'text-[#D72638]'
                }`}>
                  {appointment.status === 'confirmed' ? 'Status: Confirmed' :
                   appointment.status === 'pending' ? 'Status: Pending Confirmation' :
                   appointment.status === 'cancelled' ? 'Status: Cancelled' :
                   'Status: Completed'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Details */}
        <div className="px-6 py-6">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Details</h3>
          
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
          </div>
        </div>

        {/* ROS Summary */}
        {appointment.rosCompleted && (
          <div className="px-6 py-6 border-b border-[#E5E7EB]">
            <h3 className="text-lg font-semibold text-[#1F2937] mb-4">{QUESTIONNAIRE_NAME} Summary</h3>
            <div className="space-y-2">
              {rosSummary.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#6B7280] mt-0.5" />
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">{item.category}</p>
                    <p className="text-base font-semibold text-[#1F2937]">{item.symptoms}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="px-6 pt-2 pb-6 space-y-3">
          {/* Rebook - Only for Cancelled */}
          {isCancelled && onRebook && (
            <Button
              onClick={onRebook}
              className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Rebook Appointment
            </Button>
          )}

          {/* Complete ROS - Only for appointments without ROS completed, not cancelled */}
          {!appointment.rosCompleted && !isCompleted && !isCancelled && onCompleteROS && (
            <>
              <Button
                onClick={onCompleteROS}
                className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] flex items-center justify-center gap-2"
              >
                <ClipboardList className="w-5 h-5" />
                Complete Pre-Visit Questionnaire
              </Button>
              <p className="text-[10px] text-[#9CA3AF] text-center mt-1.5">(option to skip — skip all / skip per page)</p>
            </>
          )}

          {/* Mark as Complete - Only for Confirmed */}
          {isConfirmed && onMarkComplete && (
            <Button
              onClick={onMarkComplete}
              className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Mark Visit as Complete
            </Button>
          )}

          {/* Leave Review - Only for Completed */}
          {isCompleted && onLeaveReview && (
            <Button
              onClick={onLeaveReview}
              className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Leave a Review
            </Button>
          )}

          {/* Reschedule - Not available for Completed or Cancelled */}
          {!isCompleted && !isCancelled && (
            <Button
              onClick={onReschedule}
              variant="outline"
              className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2]"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Reschedule Appointment
            </Button>
          )}

          {/* Cancel - Not available for Completed or Cancelled */}
          {!isCompleted && !isCancelled && (
            <Button
              onClick={onCancel}
              variant="outline"
              className="w-full h-[52px] border-[#EF4444] text-[#EF4444] rounded-xl text-base font-medium hover:bg-[#EF4444]/5"
            >
              Cancel Appointment
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
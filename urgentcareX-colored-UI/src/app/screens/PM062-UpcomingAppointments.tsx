import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Calendar, Clock, CheckCircle, MessageSquare, ClipboardList, Building2 } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';

interface Appointment {
  id: string;
  providerName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  rosCompleted?: boolean; // Add ROS completion tracking
  type?: 'doctor' | 'facility'; // Provider type
}

interface UpcomingAppointmentsProps {
  onViewDetails: (appointment: Appointment) => void;
  onBack: () => void;
  initialFilter?: 'all' | 'pending' | 'confirmed' | 'completed' | 'cancelled';
  onMarkComplete?: () => void;
  onLeaveReview?: (appointment: Appointment) => void;
  onViewHistory?: () => void;
  onViewProfile?: () => void;
  onNavigateChat?: () => void;
  onCompleteROS?: (appointmentId: string) => void; // Add ROS callback
  onRebook?: (appointment: Appointment) => void; // Rebook cancelled appointment
}

const DEMO_APPOINTMENTS: Appointment[] = [
  {
    id: '1',
    providerName: 'Dr. Sarah Johnson',
    specialty: 'Primary Care Physician',
    date: '2026-01-15',
    time: '10:00 AM',
    status: 'confirmed',
    rosCompleted: true,
    type: 'doctor'
  },
  {
    id: '2',
    providerName: 'Dr. Michael Chen',
    specialty: 'Internal Medicine',
    date: '2026-01-20',
    time: '2:30 PM',
    status: 'confirmed',
    rosCompleted: false,
    type: 'doctor'
  },
  {
    id: '3',
    providerName: 'Dr. Emily Rodriguez',
    specialty: 'Family Medicine',
    date: '2026-02-05',
    time: '11:00 AM',
    status: 'pending',
    rosCompleted: true,
    type: 'doctor'
  },
  {
    id: '4',
    providerName: 'Dr. James Williams',
    specialty: 'Urgent Care',
    date: '2026-01-05',
    time: '3:00 PM',
    status: 'completed',
    rosCompleted: true,
    type: 'doctor'
  },
  {
    id: '5',
    providerName: 'Dr. Lisa Anderson',
    specialty: 'Family Medicine',
    date: '2025-12-28',
    time: '9:30 AM',
    status: 'completed',
    rosCompleted: true,
    type: 'doctor'
  },
  // Facility appointments
  {
    id: 'f1',
    providerName: 'CityHealth Urgent Care Center',
    specialty: 'Urgent Care',
    date: '2026-01-18',
    time: '3:30 PM',
    status: 'confirmed',
    rosCompleted: false,
    type: 'facility'
  },
  {
    id: 'f2',
    providerName: 'Memorial Medical Center',
    specialty: 'Hospital',
    date: '2026-02-10',
    time: '9:00 AM',
    status: 'pending',
    rosCompleted: false,
    type: 'facility'
  },
  {
    id: 'f3',
    providerName: 'QuickCare Walk-In Clinic',
    specialty: 'Walk-In Clinic',
    date: '2026-01-08',
    time: '1:00 PM',
    status: 'completed',
    rosCompleted: true,
    type: 'facility'
  },
  // Cancelled appointments
  {
    id: 'c1',
    providerName: 'Dr. Robert Martinez',
    specialty: 'Dermatology',
    date: '2026-01-10',
    time: '2:00 PM',
    status: 'cancelled',
    rosCompleted: false,
    type: 'doctor'
  },
  {
    id: 'c2',
    providerName: 'Westside Family Health Center',
    specialty: 'Family Medicine',
    date: '2026-01-12',
    time: '10:30 AM',
    status: 'cancelled',
    rosCompleted: false,
    type: 'facility'
  }
];

export default function UpcomingAppointments({ onViewDetails, onBack, initialFilter, onMarkComplete, onLeaveReview, onViewHistory, onViewProfile, onNavigateChat, onCompleteROS, onRebook }: UpcomingAppointmentsProps) {
  const [appointments] = useState<Appointment[]>(DEMO_APPOINTMENTS);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed' | 'cancelled'>(initialFilter || 'all');

  const filteredAppointments = appointments.filter(apt => {
    if (filter === 'all') return true;
    return apt.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-[#10B981]';
      case 'pending': return 'bg-[#F59E0B]';
      case 'completed': return 'bg-[#3B82F6]';
      case 'cancelled': return 'bg-[#EF4444]';
      default: return 'bg-[#6B7280]';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Status: Confirmed';
      case 'pending': return 'Status: Pending';
      case 'completed': return 'Status: Completed';
      case 'cancelled': return 'Status: Cancelled';
      default: return status;
    }
  };

  const handleMarkComplete = (e: React.MouseEvent, appointmentId: string) => {
    e.stopPropagation();
    // In a real app, this would update the appointment status
    if (onMarkComplete) {
      onMarkComplete();
    }
  };

  const handleLeaveReview = (e: React.MouseEvent, appointment: Appointment) => {
    e.stopPropagation();
    // In a real app, this would navigate to the review screen
    if (onLeaveReview) {
      onLeaveReview(appointment);
    }
  };

  const handleCompleteROS = (e: React.MouseEvent, appointmentId: string) => {
    e.stopPropagation();
    // In a real app, this would update the ROS completion status
    if (onCompleteROS) {
      onCompleteROS(appointmentId);
    }
  };

  const handleRebook = (e: React.MouseEvent, appointment: Appointment) => {
    e.stopPropagation();
    // In a real app, this would navigate to the booking flow
    if (onRebook) {
      onRebook(appointment);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center justify-between px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white">My Scheduled Visits</h2>
        <div className="w-10"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 px-4 py-3 border-b border-[#E5E7EB] overflow-x-auto">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'all'
              ? 'bg-[#D72638] text-white'
              : 'bg-[#FEF2F2] text-[#D72638] hover:bg-[#FECDD3]'
          }`}
        >
          All ({appointments.length})
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'pending'
              ? 'bg-[#D72638] text-white'
              : 'bg-[#FEF2F2] text-[#D72638] hover:bg-[#FECDD3]'
          }`}
        >
          Pending ({appointments.filter(a => a.status === 'pending').length})
        </button>
        <button
          onClick={() => setFilter('confirmed')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'confirmed'
              ? 'bg-[#D72638] text-white'
              : 'bg-[#FEF2F2] text-[#D72638] hover:bg-[#FECDD3]'
          }`}
        >
          Confirmed ({appointments.filter(a => a.status === 'confirmed').length})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'completed'
              ? 'bg-[#D72638] text-white'
              : 'bg-[#FEF2F2] text-[#D72638] hover:bg-[#FECDD3]'
          }`}
        >
          Completed ({appointments.filter(a => a.status === 'completed').length})
        </button>
        <button
          onClick={() => setFilter('cancelled')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'cancelled'
              ? 'bg-[#D72638] text-white'
              : 'bg-[#FEF2F2] text-[#D72638] hover:bg-[#FECDD3]'
          }`}
        >
          Cancelled ({appointments.filter(a => a.status === 'cancelled').length})
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-24">
        {filteredAppointments.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-12">
            <div className="w-24 h-24 bg-[#FEF2F2] rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-12 h-12 text-[#6B7280]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-2">No Scheduled Visits</h3>
            <p className="text-sm text-[#6B7280] text-center">
              You don't have any upcoming appointments
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAppointments.map((appointment) => (
              <div
                key={appointment.id}
                onClick={() => onViewDetails(appointment)}
                className="border border-[#E5E7EB] rounded-2xl p-5 hover:border-[#D72638] transition-colors cursor-pointer"
              >
                {/* Type Badge */}
                <div className="flex items-center gap-2 mb-3">
                  {appointment.type === 'facility' ? (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#3B82F6]/10 rounded-full">
                      <Building2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span className="text-xs font-medium text-[#3B82F6]">Facility</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#10B981]/10 rounded-full">
                      <span className="text-xs font-medium text-[#10B981]">Individual Doctor</span>
                    </div>
                  )}
                </div>

                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#1F2937] mb-1">
                      {appointment.providerName}
                    </h3>
                    <p className="text-sm text-[#6B7280] mb-3">
                      {appointment.specialty}
                    </p>
                  </div>
                  <div className={`px-3 py-1 ${getStatusColor(appointment.status)}/10 rounded-full`}>
                    <p className={`text-xs font-medium ${getStatusColor(appointment.status).replace('bg-', 'text-')}`}>
                      {getStatusText(appointment.status)}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(appointment.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <Clock className="w-4 h-4" />
                    <span>{appointment.time}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                {(appointment.status === 'pending' || appointment.status === 'confirmed') && !appointment.rosCompleted && (
                  <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                    <button
                      onClick={(e) => handleCompleteROS(e, appointment.id)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#D72638] text-white rounded-xl text-sm font-medium hover:bg-[#B91C2E] transition-colors"
                    >
                      <ClipboardList className="w-4 h-4" />
                      Complete Pre-Visit Questionnaire
                    </button>
                    <p className="text-[10px] text-[#9CA3AF] text-center mt-1.5">(option to skip — skip all / skip per page)</p>
                  </div>
                )}

                {appointment.status === 'confirmed' && (
                  <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                    <button
                      onClick={(e) => handleMarkComplete(e, appointment.id)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#D72638] text-white rounded-xl text-sm font-medium hover:bg-[#B91C2E] transition-colors"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Mark Visit as Complete
                    </button>
                  </div>
                )}

                {appointment.status === 'completed' && (
                  <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                    <button
                      onClick={(e) => handleLeaveReview(e, appointment)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#D72638] text-white rounded-xl text-sm font-medium hover:bg-[#B91C2E] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Leave a Review
                    </button>
                  </div>
                )}

                {appointment.status === 'cancelled' && (
                  <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                    <button
                      onClick={(e) => handleRebook(e, appointment)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#D72638] text-white rounded-xl text-sm font-medium hover:bg-[#B91C2E] transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      Rebook Appointment
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Disclaimers */}
        <p className="text-[10px] text-[#9CA3AF] leading-tight mt-4 px-1">
          DISCLAIMER: Appointment details are based on information provided by the user and/or provider and should be confirmed directly with the office.
        </p>
        <p className="text-[10px] text-[#9CA3AF] leading-tight mt-2 px-1 mb-4">
          DISCLAIMER: This platform facilitates appointment tracking and informational tools. It does not provide medical advice or guarantee appointment availability or confirmation.
        </p>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0">
        <BottomNavigation
          activeTab="appointments"
          onNavigateHome={onBack}
          onNavigateAppointments={() => {}}
          onNavigateChat={onNavigateChat || (() => {})}
          onNavigateHistory={onViewHistory || (() => {})}
          onNavigateProfile={onViewProfile || (() => {})}
        />
      </div>
    </div>
  );
}
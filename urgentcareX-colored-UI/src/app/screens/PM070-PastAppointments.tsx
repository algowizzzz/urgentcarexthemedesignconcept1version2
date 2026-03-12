import { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';

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

interface PastAppointmentsProps {
  onViewDetails: (appointment: PastAppointment) => void;
  onBack: () => void;
}

const DEMO_PAST_APPOINTMENTS: PastAppointment[] = [
  {
    id: '1',
    providerName: 'Dr. Sarah Johnson',
    specialty: 'Primary Care Physician',
    date: '2026-01-08',
    time: '10:00 AM',
    diagnosis: 'Upper Respiratory Infection',
    type: 'in-person',
    hasDocuments: true
  },
  {
    id: '2',
    providerName: 'Dr. Michael Chen',
    specialty: 'Internal Medicine',
    date: '2025-12-15',
    time: '2:30 PM',
    diagnosis: 'Annual Physical Exam',
    type: 'in-person',
    hasDocuments: true
  },
  {
    id: '3',
    providerName: 'Dr. Emily Rodriguez',
    specialty: 'Family Medicine',
    date: '2025-11-20',
    time: '11:00 AM',
    diagnosis: 'Follow-up - Hypertension',
    type: 'virtual',
    hasDocuments: true
  },
  {
    id: '4',
    providerName: 'Dr. James Wilson',
    specialty: 'Cardiology',
    date: '2025-10-05',
    time: '9:00 AM',
    diagnosis: 'Cardiac Consultation',
    type: 'in-person',
    hasDocuments: true
  }
];

const doctorColors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'];
const doctorBgs = ['#EFF6FF', '#F5F3FF', '#ECFDF5', '#FFFBEB'];
const doctorBorders = ['#BFDBFE', '#DDD6FE', '#A7F3D0', '#FDE68A'];

export default function PastAppointments({ onViewDetails, onBack }: PastAppointmentsProps) {
  const [appointments] = useState<PastAppointment[]>(DEMO_PAST_APPOINTMENTS);
  const [filterPeriod, setFilterPeriod] = useState<'all' | '30' | '90' | '365'>('all');

  const filteredAppointments = appointments.filter(apt => {
    if (filterPeriod === 'all') return true;
    const daysAgo = Math.floor((new Date().getTime() - new Date(apt.date).getTime()) / (1000 * 60 * 60 * 24));
    return daysAgo <= parseInt(filterPeriod);
  });

  const filters = [
    { value: 'all' as const, label: 'All' },
    { value: '30' as const, label: '30 Days' },
    { value: '90' as const, label: '90 Days' },
    { value: '365' as const, label: '1 Year' }
  ];

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="p-2">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-lg font-semibold text-white">Past Scheduled Visits</h2>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 bg-white/10 rounded-full">
          <span className="text-xs font-semibold text-white">{filteredAppointments.length}</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white px-4 py-3 border-b border-[#E5E7EB]">
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilterPeriod(f.value)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                filterPeriod === f.value
                  ? 'bg-[#D72638] text-white'
                  : 'bg-[#FEF2F2] text-[#D72638] hover:bg-[#E5E7EB] border border-[#FECACA]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {filteredAppointments.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-12">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 border border-[#E5E7EB]">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="3" stroke="#D1D5DB" strokeWidth="1.5" />
                <path d="M8 2V6M16 2V6M3 10H21" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-[#1F2937] mb-1">No Past Scheduled Visits</h3>
            <p className="text-sm text-[#9CA3AF] text-center">
              No appointments found in this period
            </p>
          </div>
        ) : (
          <div className="space-y-3 pb-4">
            {filteredAppointments.map((appointment, idx) => {
              const color = doctorColors[idx % doctorColors.length];
              const bg = doctorBgs[idx % doctorBgs.length];
              const borderColor = doctorBorders[idx % doctorBorders.length];

              return (
                <div
                  key={appointment.id}
                  onClick={() => onViewDetails(appointment)}
                  className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#D72638]/30 hover:shadow-md transition-all cursor-pointer group"
                  style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      {/* Doctor Avatar */}
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: bg, border: `1px solid ${borderColor}` }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="8" r="4" fill={color} />
                          <path d="M5 20C5 17.2386 8.13401 15 12 15C15.866 15 19 17.2386 19 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[15px] font-semibold text-[#1F2937] mb-0.5">
                          {appointment.providerName}
                        </h3>
                        <p className="text-xs text-[#9CA3AF]">
                          {appointment.specialty}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#D1D5DB] group-hover:text-[#D72638] transition-colors mt-1 shrink-0" />
                    </div>

                    {/* Divider */}
                    <div className="border-t border-dashed border-[#E5E7EB] my-3"></div>

                    {/* Details row */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="4" width="18" height="18" rx="3" fill="#D72638" />
                          <path d="M3 10H21" stroke="white" strokeWidth="1.5" />
                          <rect x="7" y="13" width="3" height="3" rx="0.5" fill="white" />
                        </svg>
                        <span className="text-xs font-medium text-[#374151]">
                          {new Date(appointment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <div className="w-px h-3 bg-[#E5E7EB]"></div>
                      <div className="flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" fill="#6366F1" />
                          <path d="M12 7V12L15 15" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-xs font-medium text-[#374151]">{appointment.time}</span>
                      </div>
                    </div>

                    {/* Diagnosis */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#10B981" strokeWidth="1.5" />
                        <rect x="9" y="3" width="6" height="4" rx="1" fill="#10B981" />
                      </svg>
                      <span className="text-xs text-[#6B7280]">{appointment.diagnosis}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full border ${
                        appointment.type === 'virtual'
                          ? 'bg-[#F0FDF4] border-[#BBF7D0]'
                          : 'bg-[#EFF6FF] border-[#BFDBFE]'
                      }`}>
                        {appointment.type === 'virtual' ? (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="4" width="20" height="14" rx="3" fill="#10B981" />
                            <circle cx="12" cy="11" r="3" stroke="white" strokeWidth="1.5" />
                          </svg>
                        ) : (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M3 21H21M5 21V7L12 3L19 7V21" stroke="#3B82F6" strokeWidth="1.5" />
                            <path d="M10 12H14M12 10V14" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        )}
                        <span className={`text-[10px] font-semibold ${
                          appointment.type === 'virtual' ? 'text-[#059669]' : 'text-[#2563EB]'
                        }`}>
                          {appointment.type === 'virtual' ? 'Virtual' : 'In-Person'}
                        </span>
                      </div>
                      {appointment.hasDocuments && (
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-[#FFFBEB] rounded-full border border-[#FDE68A]">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="#F59E0B" />
                            <path d="M14 2V8H20" stroke="white" strokeWidth="1.5" />
                          </svg>
                          <span className="text-[10px] font-semibold text-[#B45309]">Docs</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-[#FEF2F2] rounded-full border border-[#E5E7EB]">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" fill="#6B7280" />
                          <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[10px] font-semibold text-[#6B7280]">Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Summary Footer */}
      <div className="border-t border-[#E5E7EB] px-4 py-3 bg-white" style={{ boxShadow: '0 -1px 3px rgba(0,0,0,0.04)' }}>
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#9CA3AF]">
            {filteredAppointments.length} appointment{filteredAppointments.length !== 1 ? 's' : ''}
          </p>
          <button className="flex items-center gap-1.5 text-xs font-semibold text-[#D72638]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="#D72638" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Export All
          </button>
        </div>
      </div>
    </div>
  );
}

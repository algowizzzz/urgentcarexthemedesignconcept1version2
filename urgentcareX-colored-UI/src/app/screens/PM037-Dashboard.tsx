import { Button } from '../components/ui/button';
import { X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import BottomNavigation from '../components/BottomNavigation';

interface DashboardProps {
  onStartSymptomCheck: () => void;
  onViewAppointments: () => void;
  onViewHistory: () => void;
  onViewProfile: () => void;
  onViewFacility?: (facilityId: string) => void;
  userName?: string;
}

export default function Dashboard({
  onStartSymptomCheck,
  onViewAppointments,
  onViewHistory,
  onViewProfile,
  onViewFacility,
  userName = 'John'
}: DashboardProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      type: 'appointment-reminder',
      title: 'Appointment Reminder',
      message: 'Your appointment with Dr. Sarah Johnson is tomorrow at 10:00 AM',
      time: '2h ago',
      color: '#D72638',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" fill="#D72638" />
          <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#D72638" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 2,
      type: 'medical-history',
      title: 'Complete Health Profile',
      message: 'Help us serve you better by completing your health profile',
      time: '1d ago',
      color: '#F59E0B',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" fill="none" stroke="#F59E0B" strokeWidth="1.8" />
          <rect x="9" y="3" width="6" height="4" rx="1" fill="#F59E0B" />
          <path d="M9 12H15M9 16H13" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 3,
      type: 'appointment-confirmed',
      title: 'Appointment Confirmed',
      message: 'Dr. Emily Rodriguez has confirmed your appointment for February 5, 2026 at 2:30 PM',
      time: '3d ago',
      color: '#10B981',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" fill="#10B981" />
          <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] px-6 pt-8 pb-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* User Avatar */}
            <div className="w-10 h-10 rounded-full bg-[#D72638] flex items-center justify-center ring-2 ring-white/20">
              <span className="text-sm font-bold text-white">{userName.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">{userName}</h1>
            </div>
          </div>
          <button className="p-2.5 relative bg-white/10 rounded-xl" onClick={() => setShowNotifications(!showNotifications)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" fill="white" fillOpacity="0.9" />
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {/* Notification Badge */}
            <div className="absolute -top-0.5 -right-0.5 flex items-center justify-center">
              <div className="w-[18px] h-[18px] bg-white rounded-full ring-2 ring-[#D72638] flex items-center justify-center">
                <span className="text-[9px] font-bold text-[#D72638]">3</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Notification Panel Overlay */}
      {showNotifications && (
        <>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowNotifications(false)}
          ></div>

          {/* Notification Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-full bg-white z-50 shadow-2xl">
            {/* Panel Header */}
            <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-white">Notifications</h2>
                <div className="px-2 py-0.5 bg-[#D72638] rounded-full">
                  <span className="text-[10px] font-bold text-white">{notifications.length}</span>
                </div>
              </div>
              <button
                onClick={() => setShowNotifications(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Notifications List */}
            <div className="overflow-y-auto h-full pb-20">
              <div className="p-4 space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="bg-white border border-[#E5E7EB] rounded-xl p-4 hover:border-[#D1D5DB] transition-all"
                    style={{ borderLeftWidth: '3px', borderLeftColor: notification.color }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        {notification.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="text-sm font-semibold text-[#1F2937]">
                            {notification.title}
                          </h3>
                          <span className="text-[11px] text-[#9CA3AF] shrink-0">{notification.time}</span>
                        </div>
                        <p className="text-sm text-[#6B7280] leading-relaxed">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State (hidden when there are notifications) */}
              {notifications.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 px-6">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mb-4">
                    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#FECDD3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#FECDD3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-base font-medium text-[#9CA3AF] text-center">
                    No notifications yet
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Content */}
      <div className="flex-1 px-5 py-5 overflow-y-auto pb-24">
        {/* Quick Actions Card */}
        <div className="bg-white rounded-2xl p-5 mb-5 shadow-sm border border-[#E5E7EB]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#FEE2E2] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 14C19 18.4183 15.4183 22 11 22C6.58172 22 3 18.4183 3 14C3 9.58172 6.58172 6 11 6C15.4183 6 19 9.58172 19 14Z" fill="#FECACA" stroke="#D72638" strokeWidth="1.5" />
                <path d="M11 10V14M9 12H13" stroke="#D72638" strokeWidth="2" strokeLinecap="round" />
                <path d="M17.5 2.5L21.5 6.5" stroke="#D72638" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M14 3L17 6" stroke="#D72638" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-[#1F2937]">
                How can we help you today?
              </h2>
            </div>
          </div>
          <Button
            onClick={onStartSymptomCheck}
            className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
              <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" fill="white" />
              <path d="M9.5 10.5H9.51M12.5 10.5H12.51M15.5 10.5H15.51" stroke="#D72638" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            Find Care Now
          </Button>
        </div>

        {/* Upcoming Appointments */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 rounded-full bg-[#D72638]"></div>
              <h3 className="text-[15px] font-semibold text-[#1F2937]">Upcoming Scheduled Visits</h3>
            </div>
            <button onClick={onViewAppointments} className="text-xs font-medium text-[#D72638]">See All</button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
            <div className="border-l-4 border-[#D72638] p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1">
                  {/* Doctor Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0 border border-[#DBEAFE]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" fill="#3B82F6" />
                      <path d="M5 20C5 17.2386 8.13401 15 12 15C15.866 15 19 17.2386 19 20" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-[#1F2937] mb-0.5">
                      Dr. Sarah Johnson
                    </p>
                    <p className="text-xs text-[#6B7280]">
                      Primary Care Physician
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#ECFDF5] rounded-full border border-[#A7F3D0]">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" fill="#10B981" />
                    <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[11px] font-semibold text-[#059669]">Status: Confirmed</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-[#E5E7EB] my-3"></div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="3" fill="#D72638" />
                    <path d="M8 2V6M16 2V6" stroke="#D72638" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M3 10H21" stroke="white" strokeWidth="1.5" />
                    <rect x="7" y="13" width="3" height="3" rx="0.5" fill="white" />
                  </svg>
                  <span className="text-xs font-medium text-[#374151]">Jan 15, 2026 &bull; 10:00 AM</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#6366F1" />
                    <circle cx="12" cy="9" r="2.5" fill="white" />
                  </svg>
                  <span className="text-xs font-medium text-[#374151]">Downtown</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Open Facilities */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 rounded-full bg-[#10B981]"></div>
              <h3 className="text-[15px] font-semibold text-[#1F2937]">Nearby Urgent Care</h3>
            </div>
          </div>
          <div className="space-y-3">
            {/* Facility 1 */}
            <div
              onClick={() => onViewFacility?.('facility-1')}
              className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] hover:border-[#D72638]/30 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-9 h-9 rounded-lg bg-[#FEF2F2] flex items-center justify-center shrink-0 border border-[#FECACA]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M3 21H21M5 21V7L12 3L19 7V21" stroke="#D72638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 12H14M12 10V14" stroke="#D72638" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#1F2937] mb-1">
                      UrgentCare Center - Downtown
                    </p>
                    <div className="flex items-center gap-1 text-xs text-[#6B7280] mb-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#6366F1" />
                        <circle cx="12" cy="9" r="2.5" fill="white" />
                      </svg>
                      <span className="font-medium text-[#6366F1]">0.8 mi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-[#ECFDF5] rounded-full border border-[#A7F3D0]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></div>
                        <p className="text-[10px] font-semibold text-[#059669]">Open Now</p>
                      </div>
                      <p className="text-[11px] text-[#9CA3AF]">Closes at 9:00 PM</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#D1D5DB] group-hover:text-[#D72638] transition-colors mt-1 shrink-0" />
              </div>
            </div>

            {/* Facility 2 */}
            <div
              onClick={() => onViewFacility?.('facility-2')}
              className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] hover:border-[#D72638]/30 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0 border border-[#BFDBFE]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M3 21H21M5 21V7L12 3L19 7V21" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 12H14M12 10V14" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#1F2937] mb-1">
                      HealthFirst Urgent Care
                    </p>
                    <div className="flex items-center gap-1 text-xs text-[#6B7280] mb-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#6366F1" />
                        <circle cx="12" cy="9" r="2.5" fill="white" />
                      </svg>
                      <span className="font-medium text-[#6366F1]">1.2 mi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-[#ECFDF5] rounded-full border border-[#A7F3D0]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></div>
                        <p className="text-[10px] font-semibold text-[#059669]">Open Now</p>
                      </div>
                      <p className="text-[11px] text-[#9CA3AF]">Closes at 8:00 PM</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#D1D5DB] group-hover:text-[#D72638] transition-colors mt-1 shrink-0" />
              </div>
            </div>

            {/* Facility 3 */}
            <div
              onClick={() => onViewFacility?.('facility-3')}
              className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] hover:border-[#D72638]/30 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-9 h-9 rounded-lg bg-[#F5F3FF] flex items-center justify-center shrink-0 border border-[#DDD6FE]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M3 21H21M5 21V7L12 3L19 7V21" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 12H14M12 10V14" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#1F2937] mb-1">
                      CityMed Urgent Care - Westside
                    </p>
                    <div className="flex items-center gap-1 text-xs text-[#6B7280] mb-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#6366F1" />
                        <circle cx="12" cy="9" r="2.5" fill="white" />
                      </svg>
                      <span className="font-medium text-[#6366F1]">2.4 mi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-[#ECFDF5] rounded-full border border-[#A7F3D0]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></div>
                        <p className="text-[10px] font-semibold text-[#059669]">Open Now</p>
                      </div>
                      <p className="text-[11px] text-[#9CA3AF]">Open 24 Hours</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#D1D5DB] group-hover:text-[#D72638] transition-colors mt-1 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0">
        <BottomNavigation
          activeTab="home"
          onNavigateHome={() => {}}
          onNavigateAppointments={onViewAppointments}
          onNavigateChat={onStartSymptomCheck}
          onNavigateHistory={onViewHistory}
          onNavigateProfile={onViewProfile}
        />
      </div>
    </div>
  );
}

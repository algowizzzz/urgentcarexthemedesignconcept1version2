import { Button } from '../components/ui/button';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';
import BottomNavigation from '../components/BottomNavigation';

interface SettingsProps {
  onNavigate: (section: string) => void;
  onLogout: () => void;
  onBack: () => void;
  onNavigateHome?: () => void;
  onNavigateAppointments?: () => void;
  onNavigateChat?: () => void;
  onNavigateHistory?: () => void;
}

export default function Settings({ onNavigate, onLogout, onBack, onNavigateHome, onNavigateAppointments, onNavigateChat, onNavigateHistory }: SettingsProps) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' }
  ];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleConfirmLanguage = () => {
    setShowLanguageModal(false);
    setShowConfirmModal(true);
  };

  const handleFinalConfirm = () => {
    setCurrentLanguage(selectedLanguage);
    setShowConfirmModal(false);
  };

  const handleCancelLanguage = () => {
    setSelectedLanguage(currentLanguage);
    setShowLanguageModal(false);
  };

  const menuSections = [
    {
      title: 'ACCOUNT',
      items: [
        {
          label: 'Security & Privacy',
          action: () => onNavigate('security-privacy'),
          color: '#6366F1',
          bg: '#EEF2FF',
          border: '#C7D2FE',
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="11" width="14" height="10" rx="2" fill="#6366F1" />
              <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="16" r="1.5" fill="white" />
            </svg>
          )
        },
        {
          label: 'Insurance',
          action: () => onNavigate('insurance-management'),
          color: '#0EA5E9',
          bg: '#F0F9FF',
          border: '#BAE6FD',
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="5" width="20" height="14" rx="3" fill="#0EA5E9" />
              <path d="M2 10H22" stroke="white" strokeWidth="1.5" />
              <rect x="5" y="14" width="6" height="2" rx="1" fill="white" opacity="0.6" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'HEALTH',
      items: [
        {
          label: 'Health Profile',
          action: () => onNavigate('medical-history'),
          color: '#10B981',
          bg: '#ECFDF5',
          border: '#A7F3D0',
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#10B981" strokeWidth="1.8" />
              <rect x="9" y="3" width="6" height="4" rx="1" fill="#10B981" />
              <path d="M9 12H15M9 16H13" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'PREFERENCES',
      items: [
        {
          label: 'Search Radius',
          action: () => onNavigate('location-radius'),
          color: '#F59E0B',
          bg: '#FFFBEB',
          border: '#FDE68A',
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#F59E0B" />
              <circle cx="12" cy="9" r="2.5" fill="white" />
            </svg>
          )
        },
        {
          label: 'Language',
          action: () => setShowLanguageModal(true),
          color: '#8B5CF6',
          bg: '#F5F3FF',
          border: '#DDD6FE',
          suffix: currentLanguage,
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#8B5CF6" strokeWidth="1.8" />
              <path d="M3 12H21M12 3C14.5 5.5 15.5 8.5 15.5 12C15.5 15.5 14.5 18.5 12 21C9.5 18.5 8.5 15.5 8.5 12C8.5 8.5 9.5 5.5 12 3Z" stroke="#8B5CF6" strokeWidth="1.5" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'SUPPORT',
      items: [
        {
          label: 'Help & Support',
          action: () => onNavigate('help-support'),
          color: '#D72638',
          bg: '#F9FAFB',
          border: '#FECACA',
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" fill="#D72638" />
              <path d="M9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.3062 14.1652 11.4175 13 11.8293V13" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="16" r="1" fill="white" />
            </svg>
          )
        },
        {
          label: 'Legal & Policies',
          action: () => onNavigate('legal'),
          color: '#6B7280',
          bg: '#F9FAFB',
          border: '#E5E7EB',
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2Z" fill="#6B7280" />
              <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Profile</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Profile Section */}
        <div className="bg-white mx-4 mt-4 rounded-2xl border border-[#E5E7EB] overflow-hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
          <div className="p-5">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 bg-[#D72638] rounded-2xl flex items-center justify-center text-white text-xl font-bold ring-2 ring-[#D72638]/20">
                JS
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#1F2937] mb-0.5">John Smith</h3>
                <p className="text-sm text-[#6B7280]">demo.patient@urgentcarex.com</p>
              </div>
            </div>
            <Button
              onClick={() => onNavigate('edit-profile')}
              variant="outline"
              className="w-full h-[44px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-sm font-medium hover:bg-[#FEF2F2]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-2">
                <circle cx="12" cy="8" r="4" stroke="#6B7280" strokeWidth="1.8" />
                <path d="M4 21C4 17.134 7.582 14 12 14C16.418 14 20 17.134 20 21" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Menu Sections */}
        {menuSections.map((section) => (
          <div key={section.title} className="mt-5 mx-4">
            <h3 className="text-[11px] font-bold text-[#9CA3AF] tracking-wider mb-2 px-1">{section.title}</h3>
            <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              {section.items.map((item, idx) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`w-full flex items-center justify-between p-3.5 hover:bg-[#FEF2F2] transition-colors ${
                    idx < section.items.length - 1 ? 'border-b border-[#E5E7EB]' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg, border: `1px solid ${item.border}` }}>
                      {item.icon}
                    </div>
                    <span className="text-[15px] text-[#1F2937] font-medium">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {item.suffix && <span className="text-xs text-[#9CA3AF]">{item.suffix}</span>}
                    <ChevronRight className="w-4 h-4 text-[#D1D5DB]" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Notifications Toggle - separate card */}
        <div className="mt-5 mx-4">
          <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div className="flex items-center justify-between p-3.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-[#FEF3C7] border border-[#FDE68A]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" fill="#F59E0B" />
                    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[15px] text-[#1F2937] font-medium">Notifications</span>
              </div>
              <button
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`relative w-[44px] h-[26px] rounded-full transition-colors ${
                  notificationsEnabled ? 'bg-[#D72638]' : 'bg-[#D1D5DB]'
                }`}
              >
                <div
                  className={`absolute top-[3px] left-[3px] w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${
                    notificationsEnabled ? 'translate-x-[18px]' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-6 mx-4">
          <Button
            onClick={onLogout}
            variant="outline"
            className="w-full h-[48px] border-[#FECACA] bg-[#FEF2F2] text-[#DC2626] rounded-xl text-sm font-semibold hover:bg-[#FEE2E2] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mr-2">
              <path d="M9 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H9" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M16 17L21 12L16 7M21 12H9" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Sign Out
          </Button>
        </div>

        {/* App Info */}
        <div className="mt-4 mx-4 pb-6">
          <div className="rounded-xl p-3 text-center">
            <p className="text-xs text-[#9CA3AF]">UrgentCareX &bull; Version 1.0.0</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0">
        <BottomNavigation
          activeTab="profile"
          onNavigateHome={onNavigateHome || (() => {})}
          onNavigateAppointments={onNavigateAppointments || (() => {})}
          onNavigateChat={onNavigateChat || (() => {})}
          onNavigateHistory={onNavigateHistory || (() => {})}
          onNavigateProfile={() => {}}
        />
      </div>

      {/* Language Selection Modal */}
      {showLanguageModal && (
        <div className="absolute inset-0 bg-black/50 flex items-end z-50">
          <div className="bg-white w-full rounded-t-3xl p-6 animate-slide-up">
            <div className="w-10 h-1 bg-[#E5E7EB] rounded-full mx-auto mb-5"></div>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-1">Select Language</h2>
            <p className="text-sm text-[#6B7280] mb-6">Choose your preferred language for the app</p>

            <div className="space-y-3 mb-6">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.name)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                    selectedLanguage === lang.name
                      ? 'border-[#D72638] bg-[#FEF2F2]'
                      : 'border-[#E5E7EB] hover:border-[#D72638]/30'
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <span className="text-base font-medium text-[#1F2937]">{lang.name}</span>
                    <span className="text-sm text-[#6B7280]">{lang.nativeName}</span>
                  </div>
                  {selectedLanguage === lang.name && (
                    <div className="w-6 h-6 bg-[#D72638] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleCancelLanguage}
                variant="outline"
                className="flex-1 h-[48px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmLanguage}
                className="flex-1 h-[48px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Language Change Modal */}
      {showConfirmModal && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className="bg-white w-full max-w-sm rounded-2xl p-6 animate-scale-up">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#F5F3FF] rounded-2xl flex items-center justify-center border border-[#DDD6FE]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#8B5CF6" strokeWidth="1.8" />
                  <path d="M3 12H21M12 3C14.5 5.5 15.5 8.5 15.5 12C15.5 15.5 14.5 18.5 12 21C9.5 18.5 8.5 15.5 8.5 12C8.5 8.5 9.5 5.5 12 3Z" stroke="#8B5CF6" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-[#1F2937] mb-2 text-center">
              Change Language?
            </h2>
            <p className="text-sm text-[#6B7280] mb-6 text-center">
              Are you sure you want to change the app language to <span className="font-semibold text-[#1F2937]">{selectedLanguage}</span>?
            </p>

            <div className="flex gap-3">
              <Button
                onClick={() => {
                  setShowConfirmModal(false);
                  setSelectedLanguage(currentLanguage);
                }}
                variant="outline"
                className="flex-1 h-[48px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium"
              >
                Cancel
              </Button>
              <Button
                onClick={handleFinalConfirm}
                className="flex-1 h-[48px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

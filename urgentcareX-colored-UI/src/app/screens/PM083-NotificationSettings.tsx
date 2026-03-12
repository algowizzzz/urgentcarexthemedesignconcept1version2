import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface NotificationSettingsProps {
  onSave: () => void;
  onBack: () => void;
}

export default function NotificationSettings({ onSave, onBack }: NotificationSettingsProps) {
  const [appointmentReminders, setAppointmentReminders] = useState(true);
  const [medicationReminders, setMedicationReminders] = useState(true);
  const [testResults, setTestResults] = useState(true);
  const [promotions, setPromotions] = useState(false);
  const [healthTips, setHealthTips] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB]">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
        <h2 className="text-lg font-semibold text-[#1F2937]">Notifications</h2>
        <button onClick={onSave} className="text-base font-medium text-[#1F2937]">
          Save
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Notification Types */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-4">Notification Types</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-base text-[#1F2937] font-medium">Appointment Reminders</p>
                <p className="text-sm text-[#6B7280]">Get notified before appointments</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={appointmentReminders}
                  onChange={(e) => setAppointmentReminders(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-base text-[#1F2937] font-medium">Medication Reminders</p>
                <p className="text-sm text-[#6B7280]">Remember to take your medications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={medicationReminders}
                  onChange={(e) => setMedicationReminders(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-base text-[#1F2937] font-medium">Test Results</p>
                <p className="text-sm text-[#6B7280]">When new results are available</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={testResults}
                  onChange={(e) => setTestResults(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-base text-[#1F2937] font-medium">Health Tips</p>
                <p className="text-sm text-[#6B7280]">Helpful health and wellness tips</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={healthTips}
                  onChange={(e) => setHealthTips(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-base text-[#1F2937] font-medium">Promotions & Offers</p>
                <p className="text-sm text-[#6B7280]">Special offers and discounts</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={promotions}
                  onChange={(e) => setPromotions(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Delivery Methods */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-4">Delivery Methods</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-base text-[#1F2937] font-medium">Push Notifications</p>
                <p className="text-sm text-[#6B7280]">Notifications on this device</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={pushNotifications}
                  onChange={(e) => setPushNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-base text-[#1F2937] font-medium">Email</p>
                <p className="text-sm text-[#6B7280]">demo.patient@urgentcarex.com</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-base text-[#1F2937] font-medium">SMS Text</p>
                <p className="text-sm text-[#6B7280]">(555) 123-4567</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={smsNotifications}
                  onChange={(e) => setSmsNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Info Notice */}
        <div className="bg-[#FEF2F2] rounded-xl p-4">
          <p className="text-sm text-[#6B7280]">
            You can change these settings at any time. Critical health alerts will always be sent regardless of your preferences.
          </p>
        </div>
      </div>
    </div>
  );
}

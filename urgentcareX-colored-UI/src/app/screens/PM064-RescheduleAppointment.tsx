import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface RescheduleAppointmentProps {
  providerName: string;
  currentDate: string;
  currentTime: string;
  onConfirmReschedule: (newDate: string, newTime: string) => void;
  onBack: () => void;
}

const DEMO_DATES = [
  { date: '2026-01-16', day: 'Thu', month: 'Jan', dayNum: '16' },
  { date: '2026-01-17', day: 'Fri', month: 'Jan', dayNum: '17' },
  { date: '2026-01-20', day: 'Mon', month: 'Jan', dayNum: '20' },
  { date: '2026-01-21', day: 'Tue', month: 'Jan', dayNum: '21' },
  { date: '2026-01-22', day: 'Wed', month: 'Jan', dayNum: '22' }
];

const TIME_SLOTS = {
  morning: ['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
  afternoon: ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'],
  evening: ['4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM']
};

export default function RescheduleAppointment({ 
  providerName, 
  currentDate, 
  currentTime, 
  onConfirmReschedule, 
  onBack 
}: RescheduleAppointmentProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      onConfirmReschedule(selectedDate, selectedTime);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Reschedule</h2>
      </div>

      {/* Current Appointment Info */}
      <div className="px-6 py-4 bg-[#FEF2F2] border-b border-[#E5E7EB]">
        <p className="text-sm text-[#6B7280] mb-2">Current Appointment</p>
        <p className="text-base font-semibold text-[#1F2937]">{providerName}</p>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1 text-sm text-[#6B7280]">
            <Calendar className="w-4 h-4" />
            <span>{new Date(currentDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-[#6B7280]">
            <Clock className="w-4 h-4" />
            <span>{currentTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Date Selection */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-4">Select New Date</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {DEMO_DATES.map((date) => (
              <button
                key={date.date}
                onClick={() => {
                  setSelectedDate(date.date);
                  setSelectedTime('');
                }}
                className={`flex-shrink-0 w-16 py-3 rounded-xl text-center transition-all ${
                  selectedDate === date.date
                    ? 'bg-[#D72638] text-white'
                    : 'bg-white border border-[#E5E7EB] text-[#1F2937] hover:border-[#D72638]'
                }`}
              >
                <p className="text-xs mb-1">{date.day}</p>
                <p className="text-lg font-bold">{date.dayNum}</p>
                <p className="text-xs">{date.month}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        {selectedDate && (
          <div className="mb-6">
            <h3 className="text-base font-semibold text-[#1F2937] mb-4">Select New Time</h3>
            
            {/* Morning */}
            <div className="mb-6">
              <p className="text-sm font-medium text-[#6B7280] mb-3">Morning</p>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.morning.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedTime === time
                        ? 'bg-[#D72638] text-white'
                        : 'bg-white border border-[#E5E7EB] text-[#1F2937] hover:border-[#D72638]'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Afternoon */}
            <div className="mb-6">
              <p className="text-sm font-medium text-[#6B7280] mb-3">Afternoon</p>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.afternoon.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedTime === time
                        ? 'bg-[#D72638] text-white'
                        : 'bg-white border border-[#E5E7EB] text-[#1F2937] hover:border-[#D72638]'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Evening */}
            <div className="mb-6">
              <p className="text-sm font-medium text-[#6B7280] mb-3">Evening</p>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.evening.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedTime === time
                        ? 'bg-[#D72638] text-white'
                        : 'bg-white border border-[#E5E7EB] text-[#1F2937] hover:border-[#D72638]'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Button */}
        <Button 
          onClick={handleConfirm}
          disabled={!selectedDate || !selectedTime}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirm Reschedule
        </Button>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Calendar as CalendarIcon } from 'lucide-react';

interface AppointmentTimeSelectionProps {
  providerName: string;
  onSelectTime: (date: string, time: string) => void;
  onBack: () => void;
}

const DEMO_DATES = [
  { date: '2026-01-10', day: 'Fri', month: 'Jan', dayNum: '10' },
  { date: '2026-01-11', day: 'Sat', month: 'Jan', dayNum: '11' },
  { date: '2026-01-12', day: 'Sun', month: 'Jan', dayNum: '12' },
  { date: '2026-01-13', day: 'Mon', month: 'Jan', dayNum: '13' },
  { date: '2026-01-14', day: 'Tue', month: 'Jan', dayNum: '14' }
];

const TIME_SLOTS = {
  morning: ['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
  afternoon: ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'],
  evening: ['4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM']
};

export default function AppointmentTimeSelection({ providerName, onSelectTime, onBack }: AppointmentTimeSelectionProps) {
  const [selectedDate, setSelectedDate] = useState(DEMO_DATES[0].date);
  const [selectedTime, setSelectedTime] = useState('');

  const handleContinue = () => {
    if (selectedTime) {
      onSelectTime(selectedDate, selectedTime);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Select Date & Time</h2>
      </div>

      {/* Provider Info */}
      <div className="px-4 py-3 bg-[#FEF2F2] border-b border-[#D72638]/20">
        <p className="text-sm text-[#6B7280]">Appointment with</p>
        <p className="text-base font-semibold text-[#1F2937]">{providerName}</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Date Selection */}
        <div className="px-4 py-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-4">Select Date</h3>
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
                    : 'bg-white border border-[#D72638]/20 text-[#1F2937] hover:bg-[#FEF2F2] hover:border-[#D72638]'
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
        <div className="px-4 pb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-4">Select Time</h3>
          
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
                      : 'bg-white border border-[#D72638]/20 text-[#1F2937] hover:border-[#D72638]'
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
                      : 'bg-white border border-[#D72638]/20 text-[#1F2937] hover:border-[#D72638]'
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
                      : 'bg-white border border-[#D72638]/20 text-[#1F2937] hover:border-[#D72638]'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="bg-white border-t border-[#D72638]/20 p-4">
        <Button 
          onClick={handleContinue}
          disabled={!selectedTime}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <CalendarIcon className="w-5 h-5 mr-2" />
          Continue
        </Button>
      </div>
    </div>
  );
}
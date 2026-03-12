import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { ArrowLeft } from 'lucide-react';
import { QUESTIONNAIRE_NAME } from '../constants/questionnaire';

interface ROSCardiovascularProps {
  onContinue: (responses: Record<string, boolean>) => void;
  onBack: () => void;
  initialData?: Record<string, boolean>;
}

const SYMPTOMS = [
  'Chest pain or discomfort',
  'Palpitations (racing heart)',
  'Shortness of breath',
  'Swelling in legs or feet',
  'Irregular heartbeat',
  'Fainting or near-fainting',
  'High blood pressure',
  'Leg pain with walking',
  'None of the above'
];

export default function ROSCardiovascular({ onContinue, onBack, initialData }: ROSCardiovascularProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<Record<string, boolean>>(initialData || {});

  const handleToggle = (symptom: string) => {
    const isNone = symptom === 'None of the above';
    
    if (isNone) {
      setSelectedSymptoms({ [symptom]: !selectedSymptoms[symptom] });
    } else {
      const updated = { ...selectedSymptoms, 'None of the above': false };
      updated[symptom] = !selectedSymptoms[symptom];
      setSelectedSymptoms(updated);
    }
  };

  const handleContinue = () => {
    onContinue(selectedSymptoms);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Sticky Header Section */}
      <div className="px-8 pb-4 bg-white">
        {/* Progress */}
        <div className="mb-6">
          <p className="text-sm font-medium text-[#6B7280] mb-2">
            {QUESTIONNAIRE_NAME}: Step 5 of 8
          </p>
          <div className="w-full h-1 bg-[#FECDD3] rounded-full overflow-hidden">
            <div className="h-full bg-[#D72638] rounded-full" style={{ width: '62.5%' }}></div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
          Cardiovascular
        </h1>

        {/* Subhead */}
        <p className="text-base text-[#6B7280] mb-6">
          Select any heart or circulation symptoms you're currently experiencing.
        </p>

        {/* Warning Notice */}
        <div className="bg-[#EF4444]/10 border-l-4 border-[#EF4444] rounded-xl p-4">
          <div className="flex items-start gap-2">
            <span className="text-lg">⚠️</span>
            <p className="text-sm text-[#1F2937]">
              <span className="font-semibold">If you're experiencing severe chest pain or difficulty breathing, call 911 immediately.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 px-8 overflow-y-auto pb-24">
        {/* Symptoms List */}
        <div className="space-y-3 mb-8">
          {SYMPTOMS.map((symptom) => (
            <div
              key={symptom}
              onClick={() => handleToggle(symptom)}
              className={`flex items-center gap-3 cursor-pointer p-4 rounded-xl transition-all ${
                selectedSymptoms[symptom]
                  ? 'bg-[#D72638]/5 border-2 border-[#D72638]'
                  : 'bg-white border-2 border-[#D72638]/20 hover:border-[#D72638]/30'
              }`}
            >
              <Checkbox
                checked={selectedSymptoms[symptom] || false}
                onCheckedChange={() => handleToggle(symptom)}
              />
              <label className="text-base text-[#1F2937] cursor-pointer flex-1">
                {symptom}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="bg-white border-t border-[#D72638]/20 p-4">
        <Button 
          onClick={handleContinue}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
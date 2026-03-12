import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface SocialHistoryProps {
  onContinue: (data: SocialHistoryData) => void;
  onSkip: () => void;
  onBack: () => void;
  initialData?: SocialHistoryData;
}

interface SocialHistoryData {
  tobacco: string;
  tobaccoDetails?: string;
  alcohol: string;
  alcoholDetails?: string;
  drugs: string;
  drugsDetails?: string;
  caffeine: string;
}

const TOBACCO_OPTIONS = ['Never', 'Former smoker', 'Current smoker'];
const ALCOHOL_OPTIONS = ['Never', 'Occasionally', 'Regularly', 'Daily'];
const DRUGS_OPTIONS = ['Never', 'Past use', 'Current use'];
const CAFFEINE_OPTIONS = ['None', '1-2 cups/day', '3-4 cups/day', '5+ cups/day'];

export default function SocialHistory({ onContinue, onSkip, onBack, initialData }: SocialHistoryProps) {
  const [tobacco, setTobacco] = useState(initialData?.tobacco || 'Never');
  const [tobaccoDetails, setTobaccoDetails] = useState(initialData?.tobaccoDetails || '');
  const [alcohol, setAlcohol] = useState(initialData?.alcohol || 'Occasionally');
  const [alcoholDetails, setAlcoholDetails] = useState(initialData?.alcoholDetails || '');
  const [drugs, setDrugs] = useState(initialData?.drugs || 'Never');
  const [drugsDetails, setDrugsDetails] = useState(initialData?.drugsDetails || '');
  const [caffeine, setCaffeine] = useState(initialData?.caffeine || '1-2 cups/day');

  const handleContinue = () => {
    onContinue({
      tobacco,
      tobaccoDetails,
      alcohol,
      alcoholDetails,
      drugs,
      drugsDetails,
      caffeine
    });
  };

  const OptionButton = ({ 
    selected, 
    onClick, 
    label 
  }: { 
    selected: boolean; 
    onClick: () => void; 
    label: string;
  }) => (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
        selected
          ? 'bg-[#D72638] text-white'
          : 'bg-white border border-[#D72638]/20 text-[#1F2937] hover:bg-[#FEF2F2]'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Progress */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] px-4 py-4">
        <button onClick={onBack} className="p-2 mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="px-2">
          <p className="text-sm font-medium text-white/80 mb-2">
            Step 6 of 9
          </p>
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '66.67%' }}></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Headline */}
          <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
            Social History
          </h1>

          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-8">
            This helps us understand your lifestyle and health risks.
          </p>

          {/* Tobacco Use */}
          <div className="mb-6">
            <label className="text-base font-semibold text-[#1F2937] mb-3 block">
              Tobacco Use
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {TOBACCO_OPTIONS.map((option) => (
                <OptionButton
                  key={option}
                  selected={tobacco === option}
                  onClick={() => setTobacco(option)}
                  label={option}
                />
              ))}
            </div>
            {(tobacco === 'Former smoker' || tobacco === 'Current smoker') && (
              <input
                type="text"
                value={tobaccoDetails}
                onChange={(e) => setTobaccoDetails(e.target.value)}
                placeholder="e.g., 1 pack per day for 5 years"
                className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base"
              />
            )}
          </div>

          {/* Alcohol Use */}
          <div className="mb-6">
            <label className="text-base font-semibold text-[#1F2937] mb-3 block">
              Alcohol Use
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {ALCOHOL_OPTIONS.map((option) => (
                <OptionButton
                  key={option}
                  selected={alcohol === option}
                  onClick={() => setAlcohol(option)}
                  label={option}
                />
              ))}
            </div>
            {(alcohol === 'Occasionally' || alcohol === 'Regular') && (
              <input
                type="text"
                value={alcoholDetails}
                onChange={(e) => setAlcoholDetails(e.target.value)}
                placeholder="e.g., 2-3 drinks per week"
                className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base"
              />
            )}
          </div>

          {/* Recreational Drug Use */}
          <div className="mb-6">
            <label className="text-base font-semibold text-[#1F2937] mb-3 block">
              Recreational Drug Use
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {DRUGS_OPTIONS.map((option) => (
                <OptionButton
                  key={option}
                  selected={drugs === option}
                  onClick={() => setDrugs(option)}
                  label={option}
                />
              ))}
            </div>
            {(drugs === 'Past use' || drugs === 'Current use') && (
              <input
                type="text"
                value={drugsDetails}
                onChange={(e) => setDrugsDetails(e.target.value)}
                placeholder="Type (optional)"
                className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base"
              />
            )}
          </div>

          {/* Caffeine Intake */}
          <div className="mb-6">
            <label className="text-base font-semibold text-[#1F2937] mb-3 block">
              Caffeine Intake
            </label>
            <div className="flex flex-wrap gap-2">
              {CAFFEINE_OPTIONS.map((option) => (
                <OptionButton
                  key={option}
                  selected={caffeine === option}
                  onClick={() => setCaffeine(option)}
                  label={option}
                />
              ))}
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="flex items-start gap-2 mb-6 p-4 bg-[#FEF2F2] rounded-xl">
            <span className="text-lg">🔒</span>
            <p className="text-sm text-[#6B7280]">
              Your answers are confidential and help us provide better care.
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="bg-white border-t border-[#D72638]/20 p-4">
        <div className="flex gap-3">
          <Button 
            onClick={onSkip}
            variant="outline"
            className="flex-1 h-[52px] border-[#D72638]/20 text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2]"
          >
            Skip all / Complete Later
          </Button>
          <Button
            onClick={handleContinue}
            className="flex-1 h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
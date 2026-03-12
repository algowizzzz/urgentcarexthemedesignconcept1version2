import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ArrowLeft } from 'lucide-react';

interface LifestyleProps {
  onContinue: (data: LifestyleData) => void;
  onSkip: () => void;
  onBack: () => void;
  initialData?: LifestyleData;
}

interface LifestyleData {
  exercise: string;
  diet: string;
  sleepHours: number;
  stressLevel: string;
  occupation: string;
}

const EXERCISE_OPTIONS = ['Sedentary', 'Light (1-2 days/week)', 'Moderate (3-4 days/week)', 'Active (5+ days/week)'];
const DIET_OPTIONS = ['Balanced', 'Vegetarian', 'Vegan', 'Low-carb', 'Other'];
const STRESS_OPTIONS = ['Low', 'Moderate', 'High'];

export default function Lifestyle({ onContinue, onSkip, onBack, initialData }: LifestyleProps) {
  const [exercise, setExercise] = useState(initialData?.exercise || 'Moderate (3-4 days/week)');
  const [diet, setDiet] = useState(initialData?.diet || 'Balanced');
  const [sleepHours, setSleepHours] = useState(initialData?.sleepHours || 7);
  const [stressLevel, setStressLevel] = useState(initialData?.stressLevel || 'Moderate');
  const [occupation, setOccupation] = useState(initialData?.occupation || 'Software Engineer');

  const handleContinue = () => {
    onContinue({
      exercise,
      diet,
      sleepHours,
      stressLevel,
      occupation
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
      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
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
            Step 7 of 9
          </p>
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '77.78%' }}></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Headline */}
          <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
            Lifestyle
          </h1>

          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-8">
            Tell us about your daily habits and lifestyle.
          </p>

          {/* Exercise */}
          <div className="mb-6">
            <label className="text-base font-semibold text-[#1F2937] mb-3 block">
              Exercise Frequency
            </label>
            <div className="grid grid-cols-2 gap-2">
              {EXERCISE_OPTIONS.map((option) => (
                <OptionButton
                  key={option}
                  selected={exercise === option}
                  onClick={() => setExercise(option)}
                  label={option}
                />
              ))}
            </div>
          </div>

          {/* Diet */}
          <div className="mb-6">
            <label className="text-base font-semibold text-[#1F2937] mb-3 block">
              Diet Type
            </label>
            <div className="flex flex-wrap gap-2">
              {DIET_OPTIONS.map((option) => (
                <OptionButton
                  key={option}
                  selected={diet === option}
                  onClick={() => setDiet(option)}
                  label={option}
                />
              ))}
            </div>
          </div>

          {/* Sleep Hours */}
          <div className="mb-6">
            <label className="text-base font-semibold text-[#1F2937] mb-3 block">
              Average Sleep (hours per night)
            </label>
            <div className="px-4">
              <input
                type="range"
                min="3"
                max="12"
                step="0.5"
                value={sleepHours}
                onChange={(e) => setSleepHours(parseFloat(e.target.value))}
                className="w-full h-2 bg-[#FECDD3] rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #D72638 0%, #D72638 ${((sleepHours - 3) / 9) * 100}%, #FECDD3 ${((sleepHours - 3) / 9) * 100}%, #FECDD3 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-[#6B7280] mt-2">
                <span>3h</span>
                <span className="text-[#1F2937] font-semibold text-base">{sleepHours}h</span>
                <span>12h</span>
              </div>
            </div>
          </div>

          {/* Stress Level */}
          <div className="mb-6">
            <label className="text-base font-semibold text-[#1F2937] mb-3 block">
              Stress Level
            </label>
            <div className="flex gap-2">
              {STRESS_OPTIONS.map((option, index) => (
                <button
                  key={option}
                  onClick={() => setStressLevel(option)}
                  className={`flex-1 py-3 rounded-xl text-base font-medium transition-all ${
                    stressLevel === option
                      ? index === 0
                        ? 'bg-[#10B981] text-white'
                        : index === 1
                        ? 'bg-[#F59E0B] text-white'
                        : 'bg-[#EF4444] text-white'
                      : 'bg-white border border-[#D72638]/20 text-[#1F2937] hover:bg-[#FEF2F2]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Occupation */}
          <div className="mb-6">
            <label className="text-base font-semibold text-[#1F2937] mb-3 block">
              Occupation (Optional)
            </label>
            <Input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              placeholder="e.g., Software Engineer, Teacher"
              className="h-[52px] rounded-xl border-[#D72638]/20 bg-[#FEF2F2] text-base"
            />
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
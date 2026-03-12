import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

interface FamilyHistoryProps {
  onContinue: (data: FamilyHistoryData) => void;
  onSkip: () => void;
  onBack: () => void;
  initialData?: FamilyHistoryData;
}

interface FamilyHistoryData {
  father: string[];
  mother: string[];
  siblings: string[];
  grandparents: string[];
  noneSelected: boolean;
}

const CONDITIONS = [
  'Heart Disease',
  'Diabetes',
  'High Blood Pressure',
  'Cancer',
  'Stroke',
  'Asthma',
  'Mental Health Conditions',
  'Kidney Disease',
  'Alzheimer\'s/Dementia',
  'Thyroid Disorder',
  'Osteoporosis',
  'Blood Clotting Disorder'
];

export default function FamilyHistory({ onContinue, onSkip, onBack, initialData }: FamilyHistoryProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('father');
  const [fatherConditions, setFatherConditions] = useState<string[]>(initialData?.father || ['Heart Disease']);
  const [motherConditions, setMotherConditions] = useState<string[]>(initialData?.mother || ['Diabetes', 'High Blood Pressure']);
  const [siblingsConditions, setSiblingsConditions] = useState<string[]>(initialData?.siblings || []);
  const [grandparentsConditions, setGrandparentsConditions] = useState<string[]>(initialData?.grandparents || ['Cancer']);
  const [noneSelected, setNoneSelected] = useState(initialData?.noneSelected || false);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleConditionToggle = (section: string, condition: string) => {
    setNoneSelected(false);
    
    const updateConditions = (current: string[]) => {
      if (current.includes(condition)) {
        return current.filter(c => c !== condition);
      }
      return [...current, condition];
    };

    switch (section) {
      case 'father':
        setFatherConditions(updateConditions(fatherConditions));
        break;
      case 'mother':
        setMotherConditions(updateConditions(motherConditions));
        break;
      case 'siblings':
        setSiblingsConditions(updateConditions(siblingsConditions));
        break;
      case 'grandparents':
        setGrandparentsConditions(updateConditions(grandparentsConditions));
        break;
    }
  };

  const getConditionsCount = (section: string) => {
    switch (section) {
      case 'father': return fatherConditions.length;
      case 'mother': return motherConditions.length;
      case 'siblings': return siblingsConditions.length;
      case 'grandparents': return grandparentsConditions.length;
      default: return 0;
    }
  };

  const getConditions = (section: string) => {
    switch (section) {
      case 'father': return fatherConditions;
      case 'mother': return motherConditions;
      case 'siblings': return siblingsConditions;
      case 'grandparents': return grandparentsConditions;
      default: return [];
    }
  };

  const handleNoneToggle = () => {
    const newValue = !noneSelected;
    setNoneSelected(newValue);
    if (newValue) {
      setFatherConditions([]);
      setMotherConditions([]);
      setSiblingsConditions([]);
      setGrandparentsConditions([]);
    }
  };

  const handleContinue = () => {
    onContinue({
      father: fatherConditions,
      mother: motherConditions,
      siblings: siblingsConditions,
      grandparents: grandparentsConditions,
      noneSelected
    });
  };

  const FamilySection = ({ title, section, icon }: { title: string; section: string; icon: string }) => {
    const isExpanded = expandedSection === section;
    const count = getConditionsCount(section);
    const conditions = getConditions(section);

    return (
      <div className="border border-[#D72638]/20 rounded-xl mb-3 overflow-hidden">
        <button
          onClick={() => toggleSection(section)}
          className="w-full p-4 flex items-center justify-between bg-white hover:bg-[#FEF2F2] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">{icon}</span>
            <div className="text-left">
              <p className="text-base font-semibold text-[#1F2937]">{title}</p>
              {count > 0 && (
                <p className="text-sm text-[#6B7280]">{count} condition{count !== 1 ? 's' : ''} selected</p>
              )}
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-[#6B7280]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#6B7280]" />
          )}
        </button>

        {isExpanded && (
          <div className="border-t border-[#D72638]/20 p-4 bg-[#FEF2F2]/50">
            <div className="space-y-3">
              {CONDITIONS.map((condition) => (
                <div
                  key={condition}
                  onClick={() => handleConditionToggle(section, condition)}
                  className="flex items-center gap-3 cursor-pointer p-2 hover:bg-white rounded-lg transition-colors"
                >
                  <Checkbox
                    checked={conditions.includes(condition)}
                    onCheckedChange={() => handleConditionToggle(section, condition)}
                  />
                  <label className="text-base text-[#1F2937] cursor-pointer flex-1">
                    {condition}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Progress */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] px-4 py-4">
        <button onClick={onBack} className="p-2 mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="px-2">
          <p className="text-sm font-medium text-white/80 mb-2">
            Step 3 of 9
          </p>
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '33.33%' }}></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Headline */}
          <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
            Family Health History
          </h1>

          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-6">
            Select any conditions that run in your family.
          </p>

          {/* Family Sections */}
          <FamilySection title="Father" section="father" icon="👨" />
          <FamilySection title="Mother" section="mother" icon="👩" />
          <FamilySection title="Siblings" section="siblings" icon="👥" />
          <FamilySection title="Grandparents" section="grandparents" icon="👴👵" />

          {/* None of the above */}
          <div
            onClick={handleNoneToggle}
            className="flex items-center gap-3 cursor-pointer mb-6 p-4 bg-[#FEF2F2] rounded-xl"
          >
            <Checkbox
              checked={noneSelected}
              onCheckedChange={handleNoneToggle}
            />
            <label className="text-base text-[#1F2937] cursor-pointer flex-1">
              No known family health history
            </label>
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
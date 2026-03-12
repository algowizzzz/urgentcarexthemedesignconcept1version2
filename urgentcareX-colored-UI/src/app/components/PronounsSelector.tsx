import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface PronounsSelectorProps {
  value: string;
  onChange: (pronouns: string) => void;
  showLabel?: boolean;
  showDescription?: boolean;
}

const pronounOptions = [
  { id: 'he/him', label: 'He/Him' },
  { id: 'she/her', label: 'She/Her' },
  { id: 'they/them', label: 'They/Them' },
  { id: 'custom', label: 'Other' },
];

export default function PronounsSelector({
  value,
  onChange,
  showLabel = true,
  showDescription = true
}: PronounsSelectorProps) {
  const [customValue, setCustomValue] = useState('');

  // Check if current value is a custom one (not in predefined options)
  const isCustomSelected = value === 'custom' ||
    (value !== '' && !pronounOptions.slice(0, -1).some(opt => opt.id === value));

  const handleOptionClick = (optionId: string) => {
    if (optionId === 'custom') {
      onChange('custom');
    } else {
      onChange(optionId);
      setCustomValue('');
    }
  };

  const handleCustomInputChange = (inputValue: string) => {
    setCustomValue(inputValue);
    if (inputValue.trim()) {
      onChange(inputValue.trim());
    } else {
      onChange('custom');
    }
  };

  return (
    <div className="mb-6">
      {showLabel && (
        <Label className="text-sm font-medium text-[#374151] mb-2 block">
          Pronouns <span className="text-[#6B7280]">(optional)</span>
        </Label>
      )}
      {showDescription && (
        <p className="text-sm text-[#6B7280] mb-4">
          How would you like to be addressed?
        </p>
      )}

      {/* Pronoun Options - 2 column grid */}
      <div className="grid grid-cols-2 gap-3">
        {pronounOptions.map((option) => {
          const isSelected = option.id === 'custom'
            ? isCustomSelected
            : value === option.id;

          return (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className={`h-[52px] rounded-xl border-2 text-base font-medium transition-all ${
                isSelected
                  ? 'border-[#D72638] bg-[#FEF2F2]'
                  : 'border-[#D72638]/20 bg-white hover:bg-[#FEF2F2]'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Custom Input Field */}
      {isCustomSelected && (
        <Input
          type="text"
          placeholder="Enter your pronouns (e.g., xe/xem)"
          value={customValue}
          onChange={(e) => handleCustomInputChange(e.target.value)}
          className="h-[52px] rounded-xl border-[#D72638]/20 text-base mt-3"
        />
      )}
    </div>
  );
}

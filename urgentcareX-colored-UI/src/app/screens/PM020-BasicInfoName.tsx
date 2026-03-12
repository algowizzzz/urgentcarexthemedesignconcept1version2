import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ArrowLeft } from 'lucide-react';

interface BasicInfoNameProps {
  onContinue: (data: { firstName: string; lastName: string; middleName: string }) => void;
  onBack: () => void;
  initialData?: { firstName?: string; lastName?: string; middleName?: string };
}

export default function BasicInfoName({ onContinue, onBack, initialData }: BasicInfoNameProps) {
  const [firstName, setFirstName] = useState(initialData?.firstName || 'John');
  const [middleName, setMiddleName] = useState(initialData?.middleName || 'Michael');
  const [lastName, setLastName] = useState(initialData?.lastName || 'Smith');

  const isValid = firstName.trim() !== '' && lastName.trim() !== '';

  const handleContinue = () => {
    if (isValid) {
      onContinue({ firstName, lastName, middleName });
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Headline */}
          <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
            What's your name?
          </h1>

          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-8">
            We need your legal name for medical records.
          </p>

          {/* Form */}
          <div className="space-y-6">
            {/* First Name */}
            <div>
              <Label htmlFor="firstName" className="text-sm font-medium text-[#374151] mb-2 block">
                First Name <span className="text-[#EF4444]">*</span>
              </Label>
              <Input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Maria"
                className="h-[52px] rounded-xl border-[#D72638]/20 text-base"
              />
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="lastName" className="text-sm font-medium text-[#374151] mb-2 block">
                Last Name <span className="text-[#EF4444]">*</span>
              </Label>
              <Input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Garcia"
                className="h-[52px] rounded-xl border-[#D72638]/20 text-base"
              />
            </div>

            {/* Middle Name */}
            <div>
              <Label htmlFor="middleName" className="text-sm font-medium text-[#374151] mb-2 block">
                Middle Name (Optional)
              </Label>
              <Input
                id="middleName"
                type="text"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                placeholder=""
                className="h-[52px] rounded-xl border-[#D72638]/20 text-base"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="bg-white border-t border-[#D72638]/20 p-4">
        <Button 
          onClick={handleContinue}
          disabled={!isValid}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
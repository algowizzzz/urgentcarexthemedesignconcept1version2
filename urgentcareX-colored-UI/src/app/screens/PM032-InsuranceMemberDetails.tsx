import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ArrowLeft } from 'lucide-react';

interface InsuranceMemberDetailsProps {
  providerName: string;
  onContinue: (data: InsuranceData) => void;
  onBack: () => void;
  initialData?: InsuranceData;
}

interface InsuranceData {
  memberId: string;
  groupNumber: string;
  subscriberName: string;
  relationship: string;
}

const RELATIONSHIPS = ['Self', 'Spouse', 'Child', 'Parent', 'Other'];

export default function InsuranceMemberDetails({ providerName, onContinue, onBack, initialData }: InsuranceMemberDetailsProps) {
  const [memberId, setMemberId] = useState(initialData?.memberId || 'ABC123456789');
  const [groupNumber, setGroupNumber] = useState(initialData?.groupNumber || 'GRP987654');
  const [subscriberName, setSubscriberName] = useState(initialData?.subscriberName || 'John Michael Smith');
  const [relationship, setRelationship] = useState(initialData?.relationship || 'Self');

  const isValid = memberId.trim() !== '' && 
                  groupNumber.trim() !== '' && 
                  subscriberName.trim() !== '' && 
                  relationship !== '';

  const handleContinue = () => {
    if (isValid) {
      onContinue({ memberId, groupNumber, subscriberName, relationship });
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
          {/* Provider Name */}
          <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
            {providerName}
          </h1>

          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-8">
            Enter your insurance details as shown on your card.
          </p>

          {/* Form */}
          <div className="space-y-6 mb-6">
            {/* Member ID */}
            <div>
              <Label htmlFor="memberId" className="text-sm font-medium text-[#374151] mb-2 block">
                Member ID <span className="text-[#EF4444]">*</span>
              </Label>
              <Input
                id="memberId"
                type="text"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                placeholder="BCB789456123"
                className="h-[52px] rounded-xl border-[#D72638]/20 bg-[#FEF2F2] text-base"
              />
            </div>

            {/* Group Number */}
            <div>
              <Label htmlFor="groupNumber" className="text-sm font-medium text-[#374151] mb-2 block">
                Group Number <span className="text-[#EF4444]">*</span>
              </Label>
              <Input
                id="groupNumber"
                type="text"
                value={groupNumber}
                onChange={(e) => setGroupNumber(e.target.value)}
                placeholder="GRP-LA-2024"
                className="h-[52px] rounded-xl border-[#D72638]/20 bg-[#FEF2F2] text-base"
              />
            </div>

            {/* Subscriber Name */}
            <div>
              <Label htmlFor="subscriberName" className="text-sm font-medium text-[#374151] mb-2 block">
                Subscriber Name
              </Label>
              <Input
                id="subscriberName"
                type="text"
                value={subscriberName}
                onChange={(e) => setSubscriberName(e.target.value)}
                placeholder="Maria Garcia"
                className="h-[52px] rounded-xl border-[#D72638]/20 bg-[#FEF2F2] text-base"
              />
            </div>

            {/* Relationship */}
            <div>
              <Label htmlFor="relationship" className="text-sm font-medium text-[#374151] mb-2 block">
                Relationship to Subscriber
              </Label>
              <select
                id="relationship"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 bg-[#FEF2F2] text-base"
              >
                {RELATIONSHIPS.map(rel => (
                  <option key={rel} value={rel}>{rel}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Help Link */}
          <button className="w-full mb-6 p-4 bg-[#FEF2F2] rounded-xl text-left hover:bg-[#FECDD3] transition-colors">
            <div className="flex items-center gap-2">
              <span className="text-xl">💡</span>
              <span className="text-base text-[#1F2937]">Where do I find this?</span>
            </div>
          </button>
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
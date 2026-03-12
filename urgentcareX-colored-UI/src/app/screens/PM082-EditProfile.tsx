import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Camera } from 'lucide-react';
import PronounsSelector from '../components/PronounsSelector';

interface EditProfileProps {
  onSave: (profileData: any) => void;
  onBack: () => void;
}

export default function EditProfile({ onSave, onBack }: EditProfileProps) {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Smith');
  const [email, setEmail] = useState('demo.patient@urgentcarex.com');
  const [phone, setPhone] = useState('(555) 123-4567');
  const [dateOfBirth, setDateOfBirth] = useState('1985-06-15');
  const [pronouns, setPronouns] = useState('he/him');

  const handleSave = () => {
    onSave({ firstName, lastName, email, phone, dateOfBirth, pronouns });
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center justify-between px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white">Edit Profile</h2>
        <div className="w-10"></div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-6">
        {/* Profile Photo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-[#D72638] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-3">
              JS
            </div>
            <button className="absolute bottom-2 right-0 w-8 h-8 bg-[#D72638] rounded-full flex items-center justify-center">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>
          <p className="text-sm text-[#6B7280]">Tap to change photo</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full h-[52px] px-4 border border-[#E5E7EB] rounded-xl text-base bg-[#FEF2F2] focus:outline-none focus:border-[#D72638]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full h-[52px] px-4 border border-[#E5E7EB] rounded-xl text-base bg-[#FEF2F2] focus:outline-none focus:border-[#D72638]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              readOnly
              className="w-full h-[52px] px-4 border border-[#E5E7EB] rounded-xl text-base bg-[#FEF2F2] text-[#6B7280]"
            />
            <p className="text-xs text-[#6B7280] mt-1">Email cannot be changed</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-[52px] px-4 border border-[#E5E7EB] rounded-xl text-base bg-[#FEF2F2] focus:outline-none focus:border-[#D72638]"
            />
            <p className="text-xs text-[#6B7280] mt-1">Providers may call to coordinate appointment details</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full h-[52px] px-4 border border-[#E5E7EB] rounded-xl text-base bg-[#FEF2F2] focus:outline-none focus:border-[#D72638]"
            />
          </div>

          {/* Pronouns */}
          <PronounsSelector
            value={pronouns}
            onChange={setPronouns}
          />
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <Button 
            onClick={handleSave}
            className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
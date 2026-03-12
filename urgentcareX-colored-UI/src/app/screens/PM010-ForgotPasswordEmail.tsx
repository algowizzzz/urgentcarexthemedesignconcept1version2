import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ArrowLeft } from 'lucide-react';

interface ForgotPasswordEmailProps {
  onSendCode: (email: string) => void;
  onBack: () => void;
}

export default function ForgotPasswordEmail({ onSendCode, onBack }: ForgotPasswordEmailProps) {
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const isValid = emailOrPhone.length > 0;

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-[#8B1A2B] via-[#B91C2E] to-[#D72638]">
      {/* Header with Back Button */}
      <div className="flex items-center p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-8 pt-8">
        {/* Headline */}
        <h1 className="text-[28px] font-bold text-white mb-3">
          Reset Password
        </h1>

        {/* Subhead */}
        <p className="text-base text-white/70 mb-8">
          Enter your email or phone number and we'll send you a reset code.
        </p>

        {/* Input */}
        <div className="mb-8">
          <Label className="text-sm font-medium text-white/90 mb-2 block">
            Email or Phone Number
          </Label>
          <Input
            type="text"
            placeholder="email@example.com"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="h-[52px] rounded-xl border-white/20 bg-white text-[#1F2937] placeholder:text-[#9CA3AF]"
          />
        </div>

        {/* Send Code Button */}
        <Button
          onClick={() => onSendCode(emailOrPhone)}
          disabled={!isValid}
          className="w-full h-[52px] bg-white text-[#D72638] rounded-xl text-base font-semibold hover:bg-white/90 disabled:bg-white/30 disabled:text-white/50 mb-4"
        >
          Send Reset Code
        </Button>

        {/* Back to Sign In Button */}
        <Button
          onClick={onBack}
          variant="outline"
          className="w-full h-[52px] bg-transparent border-white/40 text-white rounded-xl text-base font-medium hover:bg-white/10"
        >
          Back to Sign In
        </Button>
      </div>
    </div>
  );
}

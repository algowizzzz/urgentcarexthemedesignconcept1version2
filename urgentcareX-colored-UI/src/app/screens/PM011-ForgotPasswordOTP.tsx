import { useState, useRef, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ForgotPasswordOTPProps {
  email: string;
  onVerify: () => void;
  onBack: () => void;
}

export default function ForgotPasswordOTP({ email, onVerify, onBack }: ForgotPasswordOTPProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      const pastedData = value.slice(0, 6).split('');
      const newOtp = [...otp];
      pastedData.forEach((char, i) => {
        if (index + i < 6) {
          newOtp[index + i] = char;
        }
      });
      setOtp(newOtp);

      const nextIndex = Math.min(index + pastedData.length, 5);
      inputRefs.current[nextIndex]?.focus();

      if (newOtp.every(digit => digit !== '')) {
        setTimeout(() => onVerify(), 300);
      }
    } else {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }

      if (newOtp.every(digit => digit !== '')) {
        setTimeout(() => onVerify(), 300);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setResendTimer(30);
  };

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
          Enter Reset Code
        </h1>

        {/* Subhead */}
        <p className="text-base text-white/70 mb-12">
          We sent a 6-digit code to{' '}
          <span className="font-medium text-white">{email}</span>
        </p>

        {/* OTP Input Boxes */}
        <div className="flex gap-2 justify-center mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-11 h-13 text-center text-2xl font-bold border-2 rounded-xl focus:outline-none transition-colors"
              style={{
                backgroundColor: digit ? 'white' : 'rgba(255,255,255,0.15)',
                borderColor: digit ? 'white' : 'rgba(255,255,255,0.3)',
                color: digit ? '#D72638' : 'white',
              }}
            />
          ))}
        </div>

        {/* Resend Link */}
        <div className="text-center mb-12">
          <span className="text-base text-white/60">Didn't receive the code? </span>
          {resendTimer > 0 ? (
            <span className="text-base text-white/60">Resend ({resendTimer}s)</span>
          ) : (
            <button
              onClick={handleResend}
              className="text-base font-bold text-white underline"
            >
              Resend
            </button>
          )}
        </div>

        {/* Verify Button */}
        <Button
          onClick={onVerify}
          disabled={otp.some(digit => !digit)}
          className="w-full h-[52px] bg-white text-[#D72638] rounded-xl text-base font-semibold hover:bg-white/90 disabled:bg-white/30 disabled:text-white/50"
        >
          Verify
        </Button>
      </div>
    </div>
  );
}

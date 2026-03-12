import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface ForgotPasswordNewProps {
  onReset: () => void;
  onBack: () => void;
}

export default function ForgotPasswordNew({ onReset, onBack }: ForgotPasswordNewProps) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const requirements = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecial: /[!@#$%^&*]/.test(password),
  };

  const allRequirementsMet = Object.values(requirements).every(Boolean) &&
    password === confirmPassword &&
    password.length > 0;

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-[#8B1A2B] via-[#B91C2E] to-[#D72638]">
      {/* Header with Back Button */}
      <div className="flex items-center p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-8 pt-8 overflow-y-auto">
        {/* Headline */}
        <h1 className="text-[28px] font-bold text-white mb-3">
          Create New Password
        </h1>

        {/* Subhead */}
        <p className="text-base text-white/70 mb-8">
          Choose a strong password for your account.
        </p>

        {/* New Password Input */}
        <div className="mb-6">
          <Label className="text-sm font-medium text-white/90 mb-2 block">
            New Password
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[52px] rounded-xl border-white/20 bg-white text-[#1F2937] placeholder:text-[#9CA3AF] pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-[#9CA3AF]" />
              ) : (
                <Eye className="w-5 h-5 text-[#9CA3AF]" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <Label className="text-sm font-medium text-white/90 mb-2 block">
            Confirm New Password
          </Label>
          <div className="relative">
            <Input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="h-[52px] rounded-xl border-white/20 bg-white text-[#1F2937] placeholder:text-[#9CA3AF] pr-12"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showConfirm ? (
                <EyeOff className="w-5 h-5 text-[#9CA3AF]" />
              ) : (
                <Eye className="w-5 h-5 text-[#9CA3AF]" />
              )}
            </button>
          </div>
        </div>

        {/* Requirements List */}
        <div className="mb-8">
          <p className="text-sm font-medium text-white mb-3">Password must have:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={requirements.minLength ? 'text-white' : 'text-white/40'}>
                {requirements.minLength ? '✓' : '○'}
              </span>
              <span className="text-sm text-white/80">At least 8 characters</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={requirements.hasUppercase ? 'text-white' : 'text-white/40'}>
                {requirements.hasUppercase ? '✓' : '○'}
              </span>
              <span className="text-sm text-white/80">One uppercase letter</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={requirements.hasLowercase ? 'text-white' : 'text-white/40'}>
                {requirements.hasLowercase ? '✓' : '○'}
              </span>
              <span className="text-sm text-white/80">One lowercase letter</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={requirements.hasNumber ? 'text-white' : 'text-white/40'}>
                {requirements.hasNumber ? '✓' : '○'}
              </span>
              <span className="text-sm text-white/80">One number</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={requirements.hasSpecial ? 'text-white' : 'text-white/40'}>
                {requirements.hasSpecial ? '✓' : '○'}
              </span>
              <span className="text-sm text-white/80">One special character</span>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <Button
          onClick={onReset}
          disabled={!allRequirementsMet}
          className="w-full h-[52px] bg-white text-[#D72638] rounded-xl text-base font-semibold hover:bg-white/90 disabled:bg-white/30 disabled:text-white/50 mb-8"
        >
          Reset Password
        </Button>
      </div>
    </div>
  );
}

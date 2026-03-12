import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Eye, EyeOff, Check } from 'lucide-react';

interface ChangePasswordProps {
  onSave: () => void;
  onBack: () => void;
}

export default function ChangePassword({ onSave, onBack }: ChangePasswordProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const hasMinLength = newPassword.length >= 8;
  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasLowercase = /[a-z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasSpecial = /[!@#$%^&*]/.test(newPassword);
  const passwordsMatch = newPassword === confirmPassword && newPassword.length > 0;

  const canSubmit = hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecial && passwordsMatch && currentPassword.length > 0;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Change Password</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        <div className="space-y-6">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showCurrent ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full h-[52px] px-4 pr-12 border border-[#E5E7EB] rounded-xl text-base bg-[#FEF2F2] focus:outline-none focus:border-[#D72638]"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showCurrent ? (
                  <EyeOff className="w-5 h-5 text-[#6B7280]" />
                ) : (
                  <Eye className="w-5 h-5 text-[#6B7280]" />
                )}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full h-[52px] px-4 pr-12 border border-[#E5E7EB] rounded-xl text-base bg-[#FEF2F2] focus:outline-none focus:border-[#D72638]"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showNew ? (
                  <EyeOff className="w-5 h-5 text-[#6B7280]" />
                ) : (
                  <Eye className="w-5 h-5 text-[#6B7280]" />
                )}
              </button>
            </div>
          </div>

          {/* Password Requirements */}
          {newPassword && (
            <div className="bg-[#FEF2F2] rounded-xl p-4">
              <p className="text-sm font-medium text-[#1F2937] mb-3">Password Requirements:</p>
              <div className="space-y-2">
                <div className={`flex items-center gap-2 text-sm ${hasMinLength ? 'text-[#10B981]' : 'text-[#6B7280]'}`}>
                  <Check className="w-4 h-4" />
                  <span>At least 8 characters</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${hasUppercase ? 'text-[#10B981]' : 'text-[#6B7280]'}`}>
                  <Check className="w-4 h-4" />
                  <span>One uppercase letter</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${hasLowercase ? 'text-[#10B981]' : 'text-[#6B7280]'}`}>
                  <Check className="w-4 h-4" />
                  <span>One lowercase letter</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${hasNumber ? 'text-[#10B981]' : 'text-[#6B7280]'}`}>
                  <Check className="w-4 h-4" />
                  <span>One number</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${hasSpecial ? 'text-[#10B981]' : 'text-[#6B7280]'}`}>
                  <Check className="w-4 h-4" />
                  <span>One special character (!@#$%^&*)</span>
                </div>
              </div>
            </div>
          )}

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-[52px] px-4 pr-12 border border-[#E5E7EB] rounded-xl text-base bg-[#FEF2F2] focus:outline-none focus:border-[#D72638]"
                placeholder="Confirm new password"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showConfirm ? (
                  <EyeOff className="w-5 h-5 text-[#6B7280]" />
                ) : (
                  <Eye className="w-5 h-5 text-[#6B7280]" />
                )}
              </button>
            </div>
            {confirmPassword && !passwordsMatch && (
              <p className="text-sm text-[#EF4444] mt-2">Passwords do not match</p>
            )}
            {passwordsMatch && (
              <p className="text-sm text-[#10B981] mt-2">Passwords match</p>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="bg-white border-t border-[#E5E7EB] p-4">
        <Button 
          onClick={onSave}
          disabled={!canSubmit}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Update Password
        </Button>
      </div>
    </div>
  );
}
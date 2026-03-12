import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface SignInProps {
  onSignIn: () => void;
  onForgotPassword: () => void;
  onCreateAccount: () => void;
  onBack: () => void;
}

export default function SignIn({ onSignIn, onForgotPassword, onCreateAccount, onBack }: SignInProps) {
  const [email, setEmail] = useState('demo.patient@urgentcarex.com');
  const [password, setPassword] = useState('Patient@2026!');
  const [showPassword, setShowPassword] = useState(false);

  const isValid = email.length > 0 && email.includes('@') && password.length > 0;

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
          Welcome Back
        </h1>

        {/* Subhead */}
        <p className="text-base text-white/70 mb-8">
          Enter your email to sign in.
        </p>

        {/* Email Input */}
        <div className="mb-6">
          <Label className="text-sm font-medium text-white/90 mb-2 block">
            Email
          </Label>
          <Input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[52px] rounded-xl border-white/20 bg-white text-[#1F2937] placeholder:text-[#9CA3AF]"
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <Label className="text-sm font-medium text-white/90 mb-2 block">
            Password
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
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

        {/* Forgot Password Link */}
        <div className="flex justify-end mb-8">
          <button
            onClick={onForgotPassword}
            className="text-base text-white font-medium hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Sign In Button */}
        <Button
          onClick={onSignIn}
          disabled={!isValid}
          className="w-full h-[52px] bg-white text-[#D72638] rounded-xl text-base font-semibold hover:bg-white/90 disabled:bg-white/30 disabled:text-white/50 mb-8"
        >
          Sign In
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-[1px] bg-white/30"></div>
          <span className="text-sm text-white/60">or</span>
          <div className="flex-1 h-[1px] bg-white/30"></div>
        </div>

        {/* Create Account Link */}
        <div className="text-center">
          <span className="text-base text-white/70">Don't have an account? </span>
          <button
            onClick={onCreateAccount}
            className="text-base font-bold text-white underline"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

import { Button } from '../components/ui/button';

interface OnboardingCompleteProps {
  onStartFindingCare: () => void;
}

export default function OnboardingComplete({ onStartFindingCare }: OnboardingCompleteProps) {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-[#8B1A2B] via-[#B91C2E] to-[#D72638]">
      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-16 flex flex-col items-center justify-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
            <span className="text-5xl text-white">🎉</span>
          </div>

          {/* Headline */}
          <h1 className="text-[28px] font-bold text-white text-center mb-3">
            You're All Set!
          </h1>

          {/* Subhead */}
          <p className="text-base text-white/80 text-center mb-8 max-w-[280px]">
            Your profile is complete. You're ready to find care.
          </p>

          {/* Completion List */}
          <div className="w-full bg-white/10 border border-white/20 rounded-2xl p-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl text-white">✓</span>
                <p className="text-base text-white">Basic information</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-white">✓</span>
                <p className="text-base text-white">Medical history</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-white">✓</span>
                <p className="text-base text-white">Insurance verified</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-white">✓</span>
                <p className="text-base text-white">Location set</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full mb-2">
            <p className="text-sm text-white/70 text-center mb-2">
              Profile Completion: 100%
            </p>
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="border-t border-white/20 p-4">
        <Button
          onClick={onStartFindingCare}
          className="w-full h-[52px] bg-white text-[#D72638] rounded-xl text-base font-medium hover:bg-white/90"
        >
          Start Finding Care
        </Button>
      </div>
    </div>
  );
}

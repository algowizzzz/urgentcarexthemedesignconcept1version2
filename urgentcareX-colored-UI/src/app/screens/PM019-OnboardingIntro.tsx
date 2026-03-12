import { Button } from '../components/ui/button';

interface OnboardingIntroProps {
  onStart: () => void;
}

export default function OnboardingIntro({ onStart }: OnboardingIntroProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] px-8 pt-12 pb-4">
        <h1 className="text-[28px] font-bold text-white">
          Let's Set Up Your Profile
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-8">
            Complete your profile to get personalized care recommendations.
          </p>

          {/* Steps Card */}
          <div className="bg-[#FEF2F2] border border-[#D72638]/20 rounded-2xl p-6 mb-8">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="text-2xl">👤</div>
                <div>
                  <h3 className="text-base font-semibold text-[#1F2937] mb-1">
                    Basic Information
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    Name, date of birth
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🏥</div>
                <div>
                  <h3 className="text-base font-semibold text-[#1F2937] mb-1">
                    Health Profile
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    Conditions, meds, allergies
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">💳</div>
                <div>
                  <h3 className="text-base font-semibold text-[#1F2937] mb-1">
                    Insurance Info
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    Provider, member ID
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="text-base font-semibold text-[#1F2937] mb-1">
                    Location
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    Where to find care
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Time Estimate */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">⏱️</span>
            <p className="text-base text-[#6B7280]">
              Takes about 5-7 minutes
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="bg-white border-t border-[#D72638]/20 p-4">
        <Button 
          onClick={onStart}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
        >
          Let's Get Started
        </Button>
      </div>
    </div>
  );
}
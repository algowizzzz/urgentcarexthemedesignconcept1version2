import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, MapPin } from 'lucide-react';

interface LocationRadiusProps {
  onContinue: (radius: number) => void;
  onBack: () => void;
  initialData?: number;
}

export default function LocationRadius({ onContinue, onBack, initialData }: LocationRadiusProps) {
  const [radius, setRadius] = useState(initialData || 10);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(Number(e.target.value));
  };

  const handleContinue = () => {
    onContinue(radius);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Search Radius</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Headline */}
          <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
            Search Radius
          </h1>

          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-8">
            How far are you willing to travel for care?
          </p>

          {/* Radius Slider */}
          <div className="mb-8">
            {/* Current Value Display */}
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-[#1F2937]">{radius}</span>
              <span className="text-xl text-[#6B7280] ml-2">miles</span>
            </div>

            {/* Slider */}
            <div className="px-2">
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={radius}
                onChange={handleSliderChange}
                className="w-full h-2 bg-[#FECDD3] rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-6
                  [&::-webkit-slider-thumb]:h-6
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-[#D72638]
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:shadow-md
                  [&::-moz-range-thumb]:w-6
                  [&::-moz-range-thumb]:h-6
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-[#D72638]
                  [&::-moz-range-thumb]:border-0
                  [&::-moz-range-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:shadow-md"
              />
              {/* Min/Max Labels */}
              <div className="flex justify-between mt-2">
                <span className="text-sm text-[#6B7280]">5 mi</span>
                <span className="text-sm text-[#6B7280]">50 mi</span>
              </div>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="bg-[#FEF2F2] rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-[#1F2937]" />
              <p className="text-base text-[#374151]">
                Searching <span className="font-semibold text-[#1F2937]">{radius} miles</span> from your location
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="bg-white border-t border-[#D72638]/20 p-4">
        <Button
          onClick={handleContinue}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Input } from '../components/ui/input';
import { ArrowLeft, Search, ChevronRight } from 'lucide-react';

interface InsuranceProviderSelectionProps {
  onSelectProvider: (provider: string) => void;
  onBack: () => void;
}

const INSURANCE_PROVIDERS = [
  { name: 'Blue Cross Blue Shield', icon: '🏢' },
  { name: 'Aetna', icon: '🏢' },
  { name: 'Cigna', icon: '🏢' },
  { name: 'United Healthcare', icon: '🏢' },
  { name: 'Kaiser Permanente', icon: '🏢' },
  { name: 'Medicare', icon: '🏢' },
  { name: 'Medi-Cal', icon: '🏢' },
  { name: 'Humana', icon: '🏢' },
  { name: 'Anthem', icon: '🏢' },
  { name: 'Other Provider', icon: '🏢' },
];

export default function InsuranceProviderSelection({ onSelectProvider, onBack }: InsuranceProviderSelectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProviders = INSURANCE_PROVIDERS.filter(provider =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Progress */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] px-4 py-4">
        <button onClick={onBack} className="p-2 mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="px-2">
          <p className="text-sm font-medium text-white/80 mb-2">
            Step 9 of 9
          </p>
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Headline */}
          <h1 className="text-[28px] font-bold text-[#1F2937] mb-6">
            Select Your Insurance Provider
          </h1>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="🔍 Search providers..."
              className="h-[52px] rounded-xl border-[#D72638]/20 text-base pl-12"
            />
          </div>

          {/* Popular Providers */}
          <h3 className="text-base font-semibold text-[#1F2937] mb-4">
            Popular Providers
          </h3>

          <div className="space-y-2">
            {filteredProviders.map((provider) => (
              <button
                key={provider.name}
                onClick={() => onSelectProvider(provider.name)}
                className="w-full bg-white border border-[#D72638]/20 rounded-xl p-4 flex items-center justify-between hover:bg-[#FEF2F2] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{provider.icon}</span>
                  <span className="text-base text-[#1F2937]">{provider.name}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#6B7280]" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { ArrowLeft, MapPin, Star, Building2, Clock, Check } from 'lucide-react';

interface Provider {
  id: string;
  type: 'facility' | 'doctor';
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  distance: string;
  nextAvailable: string;
  image: string;
  acceptingNew: boolean;
  // Facility-specific fields
  facilityType?: string;
  servicesCount?: number;
  hoursToday?: string;
  acceptsInsurance?: boolean; // Only for facilities
  waitTime?: number; // Wait time in minutes - Only for facilities
}

interface ProviderSearchProps {
  onSelectProvider: (provider: Provider) => void;
  onBack: () => void;
}

const DEMO_PROVIDERS: Provider[] = [
  {
    id: 'f1',
    type: 'facility',
    name: 'CityHealth Urgent Care Center',
    specialty: 'Urgent Care',
    facilityType: 'Urgent Care',
    rating: 4.7,
    reviewCount: 342,
    distance: '1.2 miles',
    nextAvailable: 'Walk-ins Welcome',
    hoursToday: 'Open until 9:00 PM',
    servicesCount: 15,
    image: '🏥',
    acceptingNew: true,
    acceptsInsurance: true,
    waitTime: 15
  },
  {
    id: '1',
    type: 'doctor',
    name: 'Dr. Sarah Johnson',
    specialty: 'Primary Care Physician',
    rating: 4.2,
    reviewCount: 127,
    distance: '2.3 miles',
    nextAvailable: 'Today at 2:00 PM',
    image: '👩‍⚕️',
    acceptingNew: true
  },
  {
    id: 'f2',
    type: 'facility',
    name: 'Memorial Medical Center',
    specialty: 'Hospital',
    facilityType: 'Hospital',
    rating: 4.9,
    reviewCount: 856,
    distance: '2.8 miles',
    nextAvailable: 'Emergency 24/7',
    hoursToday: 'Open 24 hours',
    servicesCount: 45,
    image: '🏥',
    acceptingNew: true,
    acceptsInsurance: false,
    waitTime: 90
  },
  {
    id: '2',
    type: 'doctor',
    name: 'Dr. Michael Chen',
    specialty: 'Internal Medicine',
    rating: 4.6,
    reviewCount: 95,
    distance: '3.1 miles',
    nextAvailable: 'Tomorrow at 10:00 AM',
    image: '👨‍⚕️',
    acceptingNew: true
  },
  {
    id: 'f3',
    type: 'facility',
    name: 'QuickCare Walk-In Clinic',
    specialty: 'Walk-In Clinic',
    facilityType: 'Walk-In Clinic',
    rating: 4.8,
    reviewCount: 215,
    distance: '3.5 miles',
    nextAvailable: 'No Appointment Needed',
    hoursToday: 'Open until 8:00 PM',
    servicesCount: 12,
    image: '🏥',
    acceptingNew: true,
    acceptsInsurance: true,
    waitTime: 25
  },
  {
    id: '3',
    type: 'doctor',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Family Medicine',
    rating: 4.1,
    reviewCount: 143,
    distance: '4.5 miles',
    nextAvailable: 'Today at 4:30 PM',
    image: '👩‍⚕️',
    acceptingNew: true
  }
];

export default function ProviderSearch({ onSelectProvider, onBack }: ProviderSearchProps) {
  const [providers] = useState<Provider[]>(DEMO_PROVIDERS);
  const [activeTab, setActiveTab] = useState<'all' | 'facilities' | 'doctors' | 'insurance'>('all');

  // Simulating user has insurance saved (set to false to test "Add insurance" prompt)
  const userHasInsurance = true;

  // Filter providers based on active tab and sort by rating (highest first)
  const filteredProviders = providers
    .filter(provider => {
      // Filter by tab
      if (activeTab === 'facilities' && provider.type !== 'facility') return false;
      if (activeTab === 'doctors' && provider.type !== 'doctor') return false;

      // Insurance tab: only show facilities that accept insurance
      if (activeTab === 'insurance') {
        if (provider.type !== 'facility') return false;
        if (!provider.acceptsInsurance) return false;
      }

      return true;
    })
    .sort((a, b) => b.rating - a.rating);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Local Care Options</h2>
      </div>

      {/* Location - With change button */}
      <div className="px-4 py-3 bg-[#FEF2F2] flex items-center gap-2">
        <MapPin className="w-4 h-4 text-[#D72638]" />
        <span className="text-sm text-[#D72638]">Los Angeles, CA 90210 • Showing results within approximately 10 miles</span>
        <button className="ml-auto text-sm text-[#B91C2E] font-semibold">Change</button>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 py-3 border-b border-[#D72638]/20 overflow-x-auto">
        <div className="flex gap-2 whitespace-nowrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'all'
                ? 'bg-[#D72638] text-white'
                : 'bg-[#FEF2F2] text-[#D72638] hover:bg-[#FECDD3]'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('facilities')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'facilities'
                ? 'bg-[#D72638] text-white'
                : 'bg-[#FEF2F2] text-[#D72638] hover:bg-[#FECDD3]'
            }`}
          >
            Facilities
          </button>
          <button
            onClick={() => setActiveTab('doctors')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'doctors'
                ? 'bg-[#D72638] text-white'
                : 'bg-[#FEF2F2] text-[#D72638] hover:bg-[#FECDD3]'
            }`}
          >
            Doctors
          </button>
          {/* Accepts My Insurance Tab - Only show when user has insurance */}
          {userHasInsurance && (
            <button
              onClick={() => setActiveTab('insurance')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'insurance'
                  ? 'bg-[#D72638] text-white'
                  : 'bg-[#FEF2F2] text-[#D72638] hover:bg-[#FECDD3]'
              }`}
            >
              Filter by Insurance
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="px-4 py-3">
        <p className="text-sm text-[#D72638] font-medium">{filteredProviders.length} providers match your filters</p>
      </div>

      {/* Provider List */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-4">
          {filteredProviders.map((provider) => (
            <div
              key={provider.id}
              onClick={() => onSelectProvider(provider)}
              className="border border-[#D72638]/20 rounded-2xl p-4 hover:border-[#D72638] hover:bg-[#FEF2F2] transition-colors cursor-pointer"
            >
              {/* Type Badge + Insurance Tag */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                {provider.type === 'facility' ? (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#3B82F6]/10 rounded-full">
                    <Building2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span className="text-xs font-medium text-[#3B82F6]">Facility</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#10B981]/10 rounded-full">
                    <span className="text-xs font-medium text-[#10B981]">Individual Doctor</span>
                  </div>
                )}
                {/* Insurance Accepted Tag - Only for facilities */}
                {provider.type === 'facility' && userHasInsurance && provider.acceptsInsurance && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#ECFDF5] rounded-full">
                    <Check className="w-3.5 h-3.5 text-[#059669]" />
                    <span className="text-xs font-medium text-[#059669]">Insurance Accepted</span>
                  </div>
                )}
                {/* Add Insurance Prompt - Only for facilities when user has no insurance */}
                {provider.type === 'facility' && !userHasInsurance && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FEF3C7] rounded-full">
                    <span className="text-xs font-medium text-[#D97706]">Add insurance to check coverage</span>
                  </div>
                )}
              </div>

              <div className="flex gap-4 mb-3">
                <div className="w-16 h-16 bg-[#FEF2F2] rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                  {provider.image}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#1F2937] mb-1">
                    {provider.name}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-2">
                    {provider.specialty}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      <span className="text-sm font-medium text-[#1F2937]">{provider.rating}</span>
                      <span className="text-sm text-[#6B7280]">({provider.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-[#6B7280]">
                      <MapPin className="w-4 h-4" />
                      <span>Approx. {provider.distance}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#9CA3AF] mt-1">Ratings are based on publicly available patient reviews</p>
                </div>
              </div>

              {/* Facility-specific info */}
              {provider.type === 'facility' && provider.hoursToday && (
                <div>
                  <div className="grid grid-cols-2 gap-0 bg-[#FEF2F2] rounded-lg overflow-hidden">
                    <div className="flex items-center gap-1.5 px-3 py-2 border-r border-[#E5E7EB]">
                      <Clock className="w-3.5 h-3.5 text-[#6B7280] shrink-0" />
                      <div>
                        <span className="text-xs font-medium text-[#1F2937] leading-tight block">{provider.hoursToday}</span>
                        <span className="text-[9px] text-[#9CA3AF] leading-tight">(reported hours)</span>
                      </div>
                    </div>
                    {provider.waitTime !== undefined && (
                      <div className="flex flex-col justify-center px-3 py-2">
                        <span className="text-xs text-[#6B7280] leading-tight">Approx. wait time: <span className="font-medium text-[#1F2937]">{provider.waitTime} min</span></span>
                        <span className="text-[9px] text-[#9CA3AF] italic leading-tight">Last updated {Math.floor(Math.random() * 10) + 2} min ago</span>
                      </div>
                    )}
                  </div>
                  <p className="text-[9px] text-[#9CA3AF] mt-1 px-3">Hours are reported by the facility and may change.</p>
                </div>
              )}

              {/* Insurance disclaimer inside card - only on insurance tab */}
              {activeTab === 'insurance' && provider.type === 'facility' && (
                <p className="text-[9px] text-[#9CA3AF] leading-tight mt-2 px-1 italic">Insurance participation should be confirmed directly with the facility. Wait times are estimated and not guaranteed.</p>
              )}
            </div>
          ))}
          {/* Disclaimers */}
          {activeTab !== 'insurance' && (
            <>
              <p className="text-[10px] text-[#9CA3AF] leading-tight mt-4 px-1">
                DISCLAIMER: Provider listings are for informational purposes only. UrgentCareX does not endorse, recommend, or guarantee any provider or outcome. Users should independently verify provider credentials, availability, and insurance participation.
              </p>
              <p className="text-[10px] text-[#9CA3AF] leading-tight mt-2 px-1">
                Results are based on your selected filters and general information.
              </p>
              <p className="text-[10px] text-[#9CA3AF] leading-tight mt-1 px-1">
                Results are informational and do not constitute medical advice.
              </p>
            </>
          )}
          {activeTab === 'insurance' && (
            <p className="text-[10px] text-[#9CA3AF] leading-tight mt-4 px-1">
              DISCLAIMER: Provider information, hours, insurance participation, and wait times are reported estimates for informational purposes only. Please confirm details directly with the facility. This platform does not provide medical advice or endorse any provider.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
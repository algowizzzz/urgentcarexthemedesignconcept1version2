import { Button } from '../components/ui/button';
import { ArrowLeft, Star, MapPin, Clock, Award, Calendar, Building2, Phone, Globe, Check } from 'lucide-react';

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

interface ProviderProfileProps {
  provider: Provider;
  onBookAppointment: () => void;
  onBack: () => void;
}

export default function ProviderProfile({ provider, onBookAppointment, onBack }: ProviderProfileProps) {
  // Simulating user has insurance saved (set to false to test "Add insurance" prompt)
  const userHasInsurance = true;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Provider Details</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">

        {/* Provider Header */}
        <div className="px-6 py-6">
          <div className="flex gap-4 mb-4">
            <div className="w-20 h-20 bg-[#FEF2F2] rounded-full flex items-center justify-center text-4xl flex-shrink-0">
              {provider.image}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-[#1F2937] mb-1">
                {provider.name}
              </h1>
              <p className="text-base text-[#6B7280] mb-2">
                {provider.specialty}
              </p>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                <span className="text-base font-semibold text-[#1F2937]">{provider.rating}</span>
                <span className="text-sm text-[#6B7280]">({provider.reviewCount} reviews)</span>
              </div>
            </div>
          </div>

          {/* Insurance Status - Only for facilities */}
          {provider.type === 'facility' && (
            <div className="mt-4">
              {userHasInsurance && provider.acceptsInsurance && (
                <div className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#ECFDF5] rounded-xl">
                  <Check className="w-5 h-5 text-[#059669]" />
                  <span className="text-base font-semibold text-[#059669]">Insurance Accepted</span>
                </div>
              )}
              {userHasInsurance && provider.acceptsInsurance === false && (
                <div className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FEF2F2] rounded-xl">
                  <span className="text-base font-semibold text-[#DC2626]">Insurance Not Accepted</span>
                </div>
              )}
              {!userHasInsurance && (
                <div className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FEF3C7] rounded-xl">
                  <span className="text-base font-semibold text-[#D97706]">Add insurance to check coverage</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* About */}
        <div className="px-6 py-6 border-t border-[#D72638]/20">
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">About</h2>
          <p className="text-base text-[#6B7280] mb-4">
            {provider.type === 'facility' 
              ? `${provider.name} is a ${provider.specialty.toLowerCase()} facility providing comprehensive healthcare services to the community. Our dedicated team offers quality care in a comfortable environment.`
              : `Dr. ${provider.name.split(' ')[1]} is a board-certified ${provider.specialty.toLowerCase()} with over 15 years of experience. Known for compassionate care and thorough examinations, Dr. ${provider.name.split(' ')[1]} specializes in preventive medicine and chronic disease management.`
            }
          </p>
        </div>

        {/* Credentials */}
        {provider.type === 'doctor' && (
          <div className="px-6 py-6 border-t border-[#D72638]/20">
            <h2 className="text-xl font-semibold text-[#1F2937] mb-4">Credentials & Experience</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#D72638] mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#1F2937]">Medical School</p>
                  <p className="text-sm text-[#6B7280]">Harvard Medical School</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#D72638] mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#1F2937]">Residency</p>
                  <p className="text-sm text-[#6B7280]">Johns Hopkins Hospital</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#D72638] mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#1F2937]">Years of Experience</p>
                  <p className="text-sm text-[#6B7280]">15+ years</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Facility Hours & Services */}
        {provider.type === 'facility' && (
          <div className="px-6 py-6 border-t border-[#D72638]/20">
            <h2 className="text-xl font-semibold text-[#1F2937] mb-4">Hours & Services</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D72638] mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#1F2937]">Today's Hours</p>
                  <p className="text-sm text-[#6B7280]">{provider.hoursToday || 'Open 8:00 AM - 8:00 PM'}</p>
                </div>
              </div>
              {provider.waitTime !== undefined && (
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D72638] mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1F2937]">Estimated Wait Time</p>
                    <p className="text-sm text-[#6B7280]">~{provider.waitTime} minutes</p>
                    <p className="text-xs text-[#9CA3AF] mt-1">Wait times are estimates and may vary due to walk-ins, emergencies, or other factors.</p>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#D72638] mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#1F2937]">Services Available</p>
                  <p className="text-sm text-[#6B7280]">{provider.servicesCount || 15} medical services offered</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D72638] mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#1F2937]">Contact</p>
                  <p className="text-sm text-[#6B7280]">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Specialties */}
        <div className="px-6 py-6 border-t border-[#D72638]/20">
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">Specialties</h2>
          <div className="flex flex-wrap gap-2">
            {['Preventive Care', 'Chronic Disease', 'Diabetes Management', 'Hypertension', 'Annual Checkups'].map((specialty) => (
              <div key={specialty} className="px-4 py-2 bg-[#FEF2F2] border border-[#D72638]/20 rounded-full">
                <p className="text-sm text-[#D72638]">{specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="px-6 py-6 border-t border-[#D72638]/20">
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">Location</h2>
          <div className="bg-[#FEF2F2] rounded-xl p-4 mb-3">
            <p className="text-sm font-medium text-[#1F2937] mb-1">UrgentCareX Medical Center</p>
            <p className="text-sm text-[#6B7280] mb-2">123 Healthcare Drive, Los Angeles, CA 90210</p>
            <div className="flex items-center gap-1 text-sm text-[#6B7280]">
              <MapPin className="w-4 h-4" />
              <span>{provider.distance} from your location</span>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="px-6 py-6 border-t border-[#D72638]/20">
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            {provider.type === 'facility' ? 'Facility Reviews' : 'Patient Reviews'}
          </h2>
          <div className="space-y-4">
            <div className="border border-[#D72638]/20 rounded-xl p-4 border-l-4 border-l-[#D72638]">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="text-sm text-[#6B7280]">2 weeks ago</span>
              </div>
              <p className="text-sm text-[#1F2937] mb-2">
                {provider.type === 'facility'
                  ? `"${provider.name} provides excellent care. Clean facility, friendly staff, and minimal wait times."`
                  : `"Dr. ${provider.name.split(' ')[1]} is an excellent physician. Very thorough and takes time to listen to concerns."`
                }
              </p>
              <p className="text-xs text-[#6B7280]">- John D.</p>
            </div>
            {provider.type === 'facility' && (
              <>
                <div className="border border-[#D72638]/20 rounded-xl p-4 border-l-4 border-l-[#D72638]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                      <Star className="w-4 h-4 text-[#FECDD3]" />
                    </div>
                    <span className="text-sm text-[#6B7280]">1 month ago</span>
                  </div>
                  <p className="text-sm text-[#1F2937] mb-2">
                    "Great urgent care facility. Was seen quickly and the medical team was very professional."
                  </p>
                  <p className="text-xs text-[#6B7280]">- Maria S.</p>
                </div>
                <div className="border border-[#D72638]/20 rounded-xl p-4 border-l-4 border-l-[#D72638]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                    <span className="text-sm text-[#6B7280]">2 months ago</span>
                  </div>
                  <p className="text-sm text-[#1F2937] mb-2">
                    "Highly recommend this facility. Modern equipment and caring healthcare providers."
                  </p>
                  <p className="text-xs text-[#6B7280]">- Robert K.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="bg-white border-t border-[#D72638]/20 p-4">
        <Button
          onClick={onBookAppointment}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Book Appointment
        </Button>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface CheckInProps {
  providerName: string;
  appointmentTime: string;
  onCompleteCheckIn: () => void;
  onBack: () => void;
}

export default function CheckIn({ 
  providerName, 
  appointmentTime, 
  onCompleteCheckIn, 
  onBack 
}: CheckInProps) {
  const [symptomsChanged, setSymptomsChanged] = useState<boolean | null>(null);
  const [medicationsChanged, setMedicationsChanged] = useState<boolean | null>(null);
  const [insuranceConfirmed, setInsuranceConfirmed] = useState(false);
  const [consentAgreed, setConsentAgreed] = useState(false);

  const canCheckIn = symptomsChanged !== null && 
                     medicationsChanged !== null && 
                     insuranceConfirmed && 
                     consentAgreed;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Check In</h2>
      </div>

      {/* Appointment Info */}
      <div className="px-6 py-4 bg-[#FEF2F2] border-b border-[#E5E7EB]">
        <p className="text-sm text-[#6B7280] mb-1">Checking in for</p>
        <p className="text-base font-semibold text-[#1F2937]">{providerName}</p>
        <p className="text-sm text-[#6B7280] mt-1">Today at {appointmentTime}</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-[#6B7280]">Complete check-in</p>
            <p className="text-sm font-medium text-[#1F2937]">
              {[symptomsChanged !== null, medicationsChanged !== null, insuranceConfirmed, consentAgreed].filter(Boolean).length}/4
            </p>
          </div>
          <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#10B981] rounded-full transition-all duration-300"
              style={{ width: `${([symptomsChanged !== null, medicationsChanged !== null, insuranceConfirmed, consentAgreed].filter(Boolean).length / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Symptoms Update */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-3">
            Have your symptoms changed since booking?
          </h3>
          <div className="space-y-2">
            <button
              onClick={() => setSymptomsChanged(false)}
              className={`w-full text-left p-4 rounded-xl transition-all ${
                symptomsChanged === false
                  ? 'bg-[#10B981] text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#1F2937] hover:border-[#D72638]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>No, my symptoms are the same</span>
                {symptomsChanged === false && <CheckCircle className="w-5 h-5" />}
              </div>
            </button>
            <button
              onClick={() => setSymptomsChanged(true)}
              className={`w-full text-left p-4 rounded-xl transition-all ${
                symptomsChanged === true
                  ? 'bg-[#F59E0B] text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#1F2937] hover:border-[#D72638]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>Yes, my symptoms have changed</span>
                {symptomsChanged === true && <CheckCircle className="w-5 h-5" />}
              </div>
            </button>
          </div>
          {symptomsChanged === true && (
            <div className="mt-3 p-3 bg-[#F59E0B]/10 rounded-xl">
              <p className="text-sm text-[#6B7280]">
                Please inform the receptionist about changes to your symptoms when you arrive.
              </p>
            </div>
          )}
        </div>

        {/* Medications Update */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-3">
            Are you taking any new medications?
          </h3>
          <div className="space-y-2">
            <button
              onClick={() => setMedicationsChanged(false)}
              className={`w-full text-left p-4 rounded-xl transition-all ${
                medicationsChanged === false
                  ? 'bg-[#10B981] text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#1F2937] hover:border-[#D72638]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>No new medications</span>
                {medicationsChanged === false && <CheckCircle className="w-5 h-5" />}
              </div>
            </button>
            <button
              onClick={() => setMedicationsChanged(true)}
              className={`w-full text-left p-4 rounded-xl transition-all ${
                medicationsChanged === true
                  ? 'bg-[#F59E0B] text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#1F2937] hover:border-[#D72638]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>Yes, I have new medications</span>
                {medicationsChanged === true && <CheckCircle className="w-5 h-5" />}
              </div>
            </button>
          </div>
          {medicationsChanged === true && (
            <div className="mt-3 p-3 bg-[#F59E0B]/10 rounded-xl">
              <p className="text-sm text-[#6B7280]">
                Please bring a list of your new medications or the medication bottles.
              </p>
            </div>
          )}
        </div>

        {/* Insurance Confirmation */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-3">
            Insurance Information
          </h3>
          <div className="bg-[#FEF2F2] rounded-xl p-4 mb-3">
            <p className="text-sm font-medium text-[#1F2937] mb-1">Blue Cross Blue Shield</p>
            <p className="text-sm text-[#6B7280]">Member ID: ABC123456789</p>
          </div>
          <div
            onClick={() => setInsuranceConfirmed(!insuranceConfirmed)}
            className="flex items-start gap-3 cursor-pointer"
          >
            <Checkbox
              checked={insuranceConfirmed}
              onCheckedChange={setInsuranceConfirmed}
            />
            <label className="text-sm text-[#1F2937] cursor-pointer">
              I confirm this insurance information is current and accurate
            </label>
          </div>
        </div>

        {/* Consent */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-3">
            Consent to Treat
          </h3>
          <div className="bg-[#FEF2F2] rounded-xl p-4 mb-3">
            <p className="text-sm text-[#6B7280]">
              By checking in, you consent to examination and treatment by the healthcare provider. You understand that you are financially responsible for all charges not covered by insurance.
            </p>
          </div>
          <div
            onClick={() => setConsentAgreed(!consentAgreed)}
            className="flex items-start gap-3 cursor-pointer"
          >
            <Checkbox
              checked={consentAgreed}
              onCheckedChange={setConsentAgreed}
            />
            <label className="text-sm text-[#1F2937] cursor-pointer">
              I agree to the consent to treat and understand my financial responsibilities
            </label>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-[#10B981]/10 border-l-4 border-[#10B981] rounded-xl p-4">
          <h3 className="text-sm font-semibold text-[#1F2937] mb-2">
            What Happens After Check-In
          </h3>
          <ul className="text-sm text-[#6B7280] space-y-1 ml-4">
            <li>• You'll receive a confirmation notification</li>
            <li>• The provider will be notified you've arrived</li>
            <li>• Please wait in the designated area</li>
            <li>• You'll be called when the provider is ready</li>
          </ul>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4 max-w-[390px] mx-auto">
        <Button 
          onClick={onCompleteCheckIn}
          disabled={!canCheckIn}
          className="w-full h-[52px] bg-[#10B981] text-white rounded-xl text-base font-medium hover:bg-[#059669] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          Complete Check-In
        </Button>
      </div>
    </div>
  );
}

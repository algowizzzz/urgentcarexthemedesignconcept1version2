import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { ScrollArea } from '../components/ui/scroll-area';

interface MedicalDisclaimerProps {
  onUnderstand: () => void;
  onBack: () => void;
}

export default function MedicalDisclaimer({ onUnderstand, onBack }: MedicalDisclaimerProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-semibold text-[#1F2937] ml-2">Medical Disclaimer</h1>
      </div>

      {/* Scrollable Content */}
      <ScrollArea className="flex-1">
        <div className="px-8 py-6">
          {/* Warning Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center text-5xl">
              ⚠️
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-[#1F2937] text-center mb-6">
            Important Medical Notice
          </h2>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* This app does NOT */}
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">
            This app does NOT:
          </h3>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-[#EF4444] text-xl font-bold">✗</span>
              <div>
                <p className="text-base font-semibold text-[#1F2937]">
                  Diagnose medical conditions
                </p>
                <p className="text-sm text-[#6B7280] mt-1">
                  Our AI provides guidance only. Only licensed healthcare providers 
                  can diagnose medical conditions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#EF4444] text-xl font-bold">✗</span>
              <div>
                <p className="text-base font-semibold text-[#1F2937]">
                  Provide medical advice
                </p>
                <p className="text-sm text-[#6B7280] mt-1">
                  The information provided is for educational purposes and should 
                  not replace professional medical advice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#EF4444] text-xl font-bold">✗</span>
              <div>
                <p className="text-base font-semibold text-[#1F2937]">
                  Replace professional medical care
                </p>
                <p className="text-sm text-[#6B7280] mt-1">
                  This app is a tool to help you find appropriate care, not a 
                  substitute for seeing a healthcare provider.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#EF4444] text-xl font-bold">✗</span>
              <div>
                <p className="text-base font-semibold text-[#1F2937]">
                  Prescribe medications
                </p>
                <p className="text-sm text-[#6B7280] mt-1">
                  Only licensed healthcare providers can prescribe medications. 
                  We do not provide prescriptions.
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Emergency Warning */}
          <div className="bg-[#FEF2F2] border-2 border-[#EF4444] rounded-2xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚨</span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#EF4444] mb-3">
                  EMERGENCY WARNING
                </h3>
                <p className="text-base text-[#1F2937] mb-3">
                  If you are experiencing a medical emergency, call 911 immediately 
                  or go to your nearest emergency room.
                </p>
                <p className="text-sm font-semibold text-[#1F2937]">
                  Do not use this app for emergencies such as:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#1F2937]">
                  <li>Chest pain or pressure</li>
                  <li>Difficulty breathing</li>
                  <li>Severe bleeding</li>
                  <li>Loss of consciousness</li>
                  <li>Severe allergic reactions</li>
                  <li>Suspected stroke or heart attack</li>
                  <li>Severe injuries</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* What We Do */}
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">
            What This App Does:
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-base text-[#6B7280]">
            <li>Help you describe your symptoms to healthcare providers</li>
            <li>Provide general health information and education</li>
            <li>Connect you with appropriate healthcare providers</li>
            <li>Help you understand when to seek different levels of care</li>
            <li>Facilitate appointment booking with healthcare providers</li>
            <li>Organize your medical information for provider visits</li>
          </ul>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Your Responsibility */}
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">
            Your Responsibility:
          </h3>
          <p className="text-base text-[#6B7280] mb-4">
            By using this app, you acknowledge that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-base text-[#6B7280]">
            <li>You understand this app does not provide medical diagnoses</li>
            <li>You will seek professional medical care when appropriate</li>
            <li>You will call 911 for emergencies</li>
            <li>The information you provide should be accurate and complete</li>
            <li>You are responsible for following up with healthcare providers</li>
            <li>You will not rely solely on this app for health decisions</li>
          </ul>

          <div className="h-px bg-[#FECDD3] mb-6"></div>

          {/* Limitation of Liability */}
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">
            Limitation of Liability:
          </h3>
          <p className="text-base text-[#6B7280] mb-8">
            UrgentCareX and its affiliates are not liable for any health outcomes, 
            missed diagnoses, treatment delays, or other health-related issues that 
            may result from using this app. Always consult with qualified healthcare 
            professionals for medical advice, diagnosis, and treatment.
          </p>
        </div>
      </ScrollArea>

      {/* Fixed Bottom Button */}
      <div className="p-6 border-t border-[#D72638]/20 bg-white">
        <Button 
          onClick={onUnderstand}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
        >
          I Understand
        </Button>
      </div>
    </div>
  );
}

import { Button } from '../components/ui/button';
import { CheckCircle, Home, FileText, ArrowLeft } from 'lucide-react';
import { QUESTIONNAIRE_NAME } from '../constants/questionnaire';

interface ROSCompleteProps {
  onViewResults: () => void;
  onGoHome: () => void;
  onBack?: () => void;
}

export default function ROSComplete({ onViewResults, onGoHome, onBack }: ROSCompleteProps) {
  // Mock ROS summary data
  const rosSummary = [
    { category: 'General', symptoms: 'No significant concerns reported' },
    { category: 'Head & Neck', symptoms: 'No headaches or neck pain' },
    { category: 'Eyes', symptoms: 'No vision changes' },
    { category: 'Ears, Nose & Throat', symptoms: 'No hearing issues or sore throat' },
    { category: 'Cardiovascular', symptoms: 'No chest pain or palpitations' },
    { category: 'Respiratory', symptoms: 'No shortness of breath' },
    { category: 'Gastrointestinal', symptoms: 'No nausea or digestive issues' },
    { category: 'Musculoskeletal', symptoms: 'No joint pain or muscle weakness' },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Success Header */}
      <div className="bg-gradient-to-br from-[#8B1A2B] to-[#D72638] px-6 pt-12 pb-8 relative">
        {/* Back Button */}
        {onBack && (
          <button 
            onClick={onBack}
            className="absolute top-4 left-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
        )}
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
            <CheckCircle className="w-12 h-12 text-[#1F2937]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Questionnaire Complete!
          </h1>
          <p className="text-base text-white/90">
            Thank you for completing the {QUESTIONNAIRE_NAME}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 py-8">
          {/* Summary Card */}
          <div className="bg-[#FEF2F2] rounded-2xl p-6 mb-6">
            <h2 className="text-lg font-semibold text-[#1F2937] mb-4">
              {QUESTIONNAIRE_NAME} Summary
            </h2>
            <div className="space-y-3 mb-4">
              {rosSummary.map((item, index) => (
                <div key={index} className="pb-3 border-b border-[#D72638]/20 last:border-0 last:pb-0">
                  <p className="text-sm font-medium text-[#1F2937] mb-1">
                    {item.category}
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    {item.symptoms}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Info Notice */}
          <div className="bg-[#FEF2F2] border-l-4 border-[#D72638] rounded-xl p-5 mb-6">
            <h3 className="text-base font-semibold text-[#1F2937] mb-2">
              Shared with Your Provider
            </h3>
            <p className="text-sm text-[#6B7280]">
              This information will be shared with your healthcare provider to save time during your visit and help them better assess your condition.
            </p>
          </div>

          {/* Go to Dashboard Button */}
          <Button 
            onClick={onGoHome}
            variant="outline"
            className="w-full h-[48px] border-[#D72638]/20 text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2]"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Dashboard
          </Button>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="bg-white border-t border-[#D72638]/20 p-4">
        <Button 
          onClick={onViewResults}
          className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
        >
          <FileText className="w-5 h-5 mr-2" />
          Confirm Appointment
        </Button>
      </div>
    </div>
  );
}
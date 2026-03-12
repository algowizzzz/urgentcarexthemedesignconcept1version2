import { Button } from '../components/ui/button';
import { AlertTriangle, Phone, X } from 'lucide-react';

interface EmergencyAlertProps {
  onCall911: () => void;
  onDismiss: () => void;
}

export default function EmergencyAlert({ onCall911, onDismiss }: EmergencyAlertProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
        <div className="flex justify-end mb-4">
          <button onClick={onDismiss} className="p-2">
            <X className="w-6 h-6 text-[#6B7280]" />
          </button>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-[#EF4444] rounded-full flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#1F2937] text-center mb-4">
          Emergency Symptoms Detected
        </h2>

        <p className="text-base text-[#6B7280] text-center mb-6">
          Based on your symptoms, you may need immediate emergency care. Please call 911 or go to the nearest emergency room.
        </p>

        <div className="bg-[#EF4444]/10 border-l-4 border-[#EF4444] rounded-xl p-4 mb-6">
          <p className="text-sm font-semibold text-[#EF4444] mb-2">Warning Signs:</p>
          <ul className="text-sm text-[#6B7280] space-y-1 ml-4">
            <li>• Chest pain or pressure</li>
            <li>• Difficulty breathing</li>
            <li>• Severe bleeding</li>
            <li>• Loss of consciousness</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Button 
            onClick={onCall911}
            className="w-full h-[56px] bg-[#EF4444] text-white rounded-xl text-lg font-bold hover:bg-[#DC2626]"
          >
            <Phone className="w-6 h-6 mr-2" />
            Call 911
          </Button>

          <Button 
            onClick={onDismiss}
            variant="outline"
            className="w-full h-[48px] border-[#D72638]/20 text-[#6B7280] rounded-xl text-base font-medium hover:bg-[#FEF2F2]"
          >
            I'll Seek Care on My Own
          </Button>
        </div>
      </div>
    </div>
  );
}

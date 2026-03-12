import { Button } from '../components/ui/button';
import { ArrowLeft, CreditCard, Plus, Edit, Trash2 } from 'lucide-react';

interface InsuranceManagementProps {
  onAddInsurance: () => void;
  onEditInsurance: () => void;
  onBack: () => void;
}

export default function InsuranceManagement({ onAddInsurance, onEditInsurance, onBack }: InsuranceManagementProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Insurance & Billing</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-4">Primary Insurance</h3>
          <div className="border border-[#E5E7EB] rounded-xl p-5">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#D72638]/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-[#1F2937]" />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#1F2937]">Blue Cross Blue Shield</p>
                  <p className="text-sm text-[#6B7280] mt-1">Member ID: ABC123456789</p>
                  <p className="text-sm text-[#6B7280]">Group: GRP987654</p>
                </div>
              </div>
              <button onClick={onEditInsurance}>
                <Edit className="w-5 h-5 text-[#6B7280]" />
              </button>
            </div>
            <div className="pt-4 border-t border-[#E5E7EB]">
              <p className="text-xs text-[#6B7280]">Last verified: January 9, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, FileText, Activity, Pill, ClipboardList, Search, Filter } from 'lucide-react';

interface MedicalRecordsProps {
  onViewConditions: () => void;
  onViewAllergies: () => void;
  onBack: () => void;
}

export default function MedicalRecords({
  onViewConditions,
  onViewAllergies,
  onBack
}: MedicalRecordsProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#D72638]/20">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
        <h2 className="text-lg font-semibold text-[#1F2937]">Health Information Summary</h2>
        <button className="p-2">
          <Filter className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Search */}
      <div className="px-4 py-4 border-b border-[#D72638]/20">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search health information..."
            className="w-full h-[48px] pl-12 pr-4 border border-[#D72638]/20 rounded-xl text-base focus:outline-none focus:border-[#D72638]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {/* Quick Access */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onViewConditions}
              className="p-5 bg-white border border-[#D72638]/20 rounded-2xl hover:border-[#D72638] transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-full flex items-center justify-center mb-3">
                  <ClipboardList className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <p className="text-sm font-medium text-[#1F2937] mb-1">Conditions</p>
                <p className="text-xs text-[#6B7280]">View all</p>
              </div>
            </button>

            <button
              onClick={onViewAllergies}
              className="p-5 bg-white border border-[#D72638]/20 rounded-2xl hover:border-[#D72638] transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#EF4444]/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">⚠️</span>
                </div>
                <p className="text-sm font-medium text-[#1F2937] mb-1">Allergies</p>
                <p className="text-xs text-[#6B7280]">2 listed</p>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Records */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1F2937]">Recent Records</h3>
            <button className="text-sm font-medium text-[#1F2937] hover:underline">View All</button>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-white border border-[#D72638]/20 rounded-xl hover:border-[#D72638] transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-[#10B981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5 text-[#10B981]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1F2937] mb-1">Blood Test Results</p>
                <p className="text-xs text-[#6B7280]">January 8, 2026 • Dr. Sarah Johnson</p>
              </div>
              <div className="px-2 py-1 bg-[#10B981]/10 rounded-full">
                <p className="text-xs font-medium text-[#10B981]">Normal</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white border border-[#D72638]/20 rounded-xl hover:border-[#D72638] transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-[#D72638]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Pill className="w-5 h-5 text-[#1F2937]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1F2937] mb-1">Amoxicillin Prescription</p>
                <p className="text-xs text-[#6B7280]">January 8, 2026 • Dr. Sarah Johnson</p>
              </div>
              <div className="px-2 py-1 bg-[#10B981]/10 rounded-full">
                <p className="text-xs font-medium text-[#10B981]">Active</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white border border-[#D72638]/20 rounded-xl hover:border-[#D72638] transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-[#D72638]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-[#1F2937]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1F2937] mb-1">Visit Summary</p>
                <p className="text-xs text-[#6B7280]">January 8, 2026 • Dr. Sarah Johnson</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white border border-[#D72638]/20 rounded-xl hover:border-[#D72638] transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-[#10B981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5 text-[#10B981]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1F2937] mb-1">X-Ray Results</p>
                <p className="text-xs text-[#6B7280]">December 20, 2025 • Dr. Michael Chen</p>
              </div>
              <div className="px-2 py-1 bg-[#10B981]/10 rounded-full">
                <p className="text-xs font-medium text-[#10B981]">Normal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Health Summary */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Health Summary</h3>
          <div className="bg-[#FEF2F2] rounded-2xl p-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#6B7280]">Blood Type</p>
                <p className="text-sm font-semibold text-[#1F2937]">O+</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#6B7280]">Height</p>
                <p className="text-sm font-semibold text-[#1F2937]">5'10" (178 cm)</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#6B7280]">Weight</p>
                <p className="text-sm font-semibold text-[#1F2937]">175 lbs (79 kg)</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#6B7280]">Last Updated</p>
                <p className="text-sm font-semibold text-[#1F2937]">January 8, 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Notice */}
        <div className="bg-[#10B981]/10 border-l-4 border-[#10B981] rounded-xl p-4">
          <p className="text-sm text-[#6B7280]">
            Your health information is securely stored consistent with HIPAA requirements. You can download or share it anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

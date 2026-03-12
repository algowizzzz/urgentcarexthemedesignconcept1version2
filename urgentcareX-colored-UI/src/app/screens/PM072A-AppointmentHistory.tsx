import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Calendar, Search, Filter, TrendingUp } from 'lucide-react';

interface AppointmentHistoryProps {
  onViewPast: () => void;
  onViewUpcoming: () => void;
  onBack: () => void;
}

interface AppointmentStats {
  total: number;
  thisYear: number;
  lastVisit: string;
  mostVisitedProvider: string;
  totalProviders: number;
}

const DEMO_STATS: AppointmentStats = {
  total: 15,
  thisYear: 4,
  lastVisit: '2026-01-08',
  mostVisitedProvider: 'Dr. Sarah Johnson',
  totalProviders: 6
};

export default function AppointmentHistory({ onViewPast, onViewUpcoming, onBack }: AppointmentHistoryProps) {
  const [stats] = useState<AppointmentStats>(DEMO_STATS);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center justify-between px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white">Appointment History</h2>
        <button className="p-2">
          <Search className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-8">
        {/* Overview Stats */}
        <div className="px-6 py-6 bg-gradient-to-br from-[#1F2937] to-[#374151]">
          <div className="text-center mb-6">
            <p className="text-sm text-white/80 mb-2">Total Scheduled Visits</p>
            <p className="text-5xl font-bold text-white mb-1">{stats.total}</p>
            <p className="text-sm text-white/80">All time</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-white mb-1">{stats.thisYear}</p>
              <p className="text-xs text-white/80">This Year</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-white mb-1">{stats.totalProviders}</p>
              <p className="text-xs text-white/80">Providers</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Quick Stats</h3>
          
          <div className="space-y-4">
            <div className="bg-[#FEF2F2] rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-[#6B7280]">Last Visit</p>
                <Calendar className="w-4 h-4 text-[#6B7280]" />
              </div>
              <p className="text-base font-semibold text-[#1F2937]">
                {new Date(stats.lastVisit).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <div className="bg-[#FEF2F2] rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-[#6B7280]">Most Visited Provider</p>
                <TrendingUp className="w-4 h-4 text-[#6B7280]" />
              </div>
              <p className="text-base font-semibold text-[#1F2937]">{stats.mostVisitedProvider}</p>
              <p className="text-xs text-[#6B7280] mt-1">5 visits</p>
            </div>

            <div className="bg-[#FEF2F2] rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-[#6B7280]">Average Visits Per Year</p>
                <TrendingUp className="w-4 h-4 text-[#6B7280]" />
              </div>
              <p className="text-base font-semibold text-[#1F2937]">3.8 visits</p>
              <p className="text-xs text-[#6B7280] mt-1">Based on last 4 years</p>
            </div>
          </div>
        </div>

        {/* Visit Types */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Visit Types</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-[#FEF2F2] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D72638] rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🏥</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1F2937]">In-Person</p>
                  <p className="text-xs text-[#6B7280]">Office visits</p>
                </div>
              </div>
              <p className="text-lg font-bold text-[#1F2937]">11</p>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#FEF2F2] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D72638]/70 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">📹</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1F2937]">Virtual</p>
                  <p className="text-xs text-[#6B7280]">Telemedicine</p>
                </div>
              </div>
              <p className="text-lg font-bold text-[#1F2937]">4</p>
            </div>
          </div>
        </div>

        {/* Top Providers */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Your Providers</h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white border border-[#E5E7EB] rounded-xl">
              <div className="w-12 h-12 bg-[#FEF2F2] rounded-full flex items-center justify-center text-2xl">
                👩‍⚕️
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1F2937]">Dr. Sarah Johnson</p>
                <p className="text-xs text-[#6B7280]">Primary Care • 5 visits</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white border border-[#E5E7EB] rounded-xl">
              <div className="w-12 h-12 bg-[#FEF2F2] rounded-full flex items-center justify-center text-2xl">
                👨‍⚕️
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1F2937]">Dr. Michael Chen</p>
                <p className="text-xs text-[#6B7280]">Internal Medicine • 3 visits</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white border border-[#E5E7EB] rounded-xl">
              <div className="w-12 h-12 bg-[#FEF2F2] rounded-full flex items-center justify-center text-2xl">
                👩‍⚕️
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1F2937]">Dr. Emily Rodriguez</p>
                <p className="text-xs text-[#6B7280]">Family Medicine • 2 visits</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-6 space-y-3">
          <Button 
            onClick={onViewUpcoming}
            className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
          >
            <Calendar className="w-5 h-5 mr-2" />
            View Upcoming Scheduled Visits
          </Button>

          <Button 
            onClick={onViewPast}
            variant="outline"
            className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2]"
          >
            <Filter className="w-5 h-5 mr-2" />
            View Past Scheduled Visits
          </Button>
        </div>
      </div>
    </div>
  );
}

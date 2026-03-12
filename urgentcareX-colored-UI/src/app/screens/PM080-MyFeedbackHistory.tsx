import { Button } from '../components/ui/button';
import { ArrowLeft, Star, Calendar, MessageSquare } from 'lucide-react';

interface MyFeedbackHistoryProps {
  onViewFeedback: (feedbackId: string) => void;
  onProvideFeedback: () => void;
  onBack: () => void;
}

interface Feedback {
  id: string;
  type: 'provider' | 'app';
  targetName: string;
  rating: number;
  date: string;
  hasComment: boolean;
}

const DEMO_FEEDBACK: Feedback[] = [
  {
    id: '1',
    type: 'provider',
    targetName: 'Dr. Sarah Johnson',
    rating: 5,
    date: '2026-01-08',
    hasComment: true
  },
  {
    id: '2',
    type: 'app',
    targetName: 'UrgentCareX App',
    rating: 4,
    date: '2026-01-05',
    hasComment: true
  },
  {
    id: '3',
    type: 'provider',
    targetName: 'Dr. Michael Chen',
    rating: 5,
    date: '2025-12-20',
    hasComment: false
  },
  {
    id: '4',
    type: 'provider',
    targetName: 'Dr. Emily Rodriguez',
    rating: 4,
    date: '2025-11-20',
    hasComment: true
  }
];

export default function MyFeedbackHistory({ onViewFeedback, onProvideFeedback, onBack }: MyFeedbackHistoryProps) {
  const feedbackList = DEMO_FEEDBACK;
  const averageRating = (feedbackList.reduce((sum, f) => sum + f.rating, 0) / feedbackList.length).toFixed(1);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">My Feedback</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Stats Summary */}
        <div className="px-6 py-6 bg-gradient-to-br from-[#1F2937] to-[#374151]">
          <div className="text-center">
            <p className="text-sm text-white/80 mb-2">Your Average Rating</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-8 h-8 fill-[#F59E0B] text-[#F59E0B]" />
              <p className="text-4xl font-bold text-white">{averageRating}</p>
            </div>
            <p className="text-sm text-white/80">{feedbackList.length} feedback submissions</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#FEF2F2] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#1F2937] mb-1">
                {feedbackList.filter(f => f.type === 'provider').length}
              </p>
              <p className="text-xs text-[#6B7280]">Provider Reviews</p>
            </div>
            <div className="bg-[#FEF2F2] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#1F2937] mb-1">
                {feedbackList.filter(f => f.type === 'app').length}
              </p>
              <p className="text-xs text-[#6B7280]">App Feedback</p>
            </div>
          </div>
        </div>

        {/* Feedback List */}
        <div className="px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1F2937]">Recent Feedback</h3>
            <button 
              onClick={onProvideFeedback}
              className="text-sm font-medium text-[#1F2937] hover:underline"
            >
              + New
            </button>
          </div>

          <div className="space-y-3">
            {feedbackList.map((feedback) => (
              <div
                key={feedback.id}
                onClick={() => onViewFeedback(feedback.id)}
                className="border border-[#E5E7EB] rounded-xl p-4 hover:border-[#D72638] transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">
                        {feedback.type === 'provider' ? '👨‍⚕️' : '📱'}
                      </span>
                      <h4 className="text-sm font-semibold text-[#1F2937]">
                        {feedback.targetName}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= feedback.rating
                              ? 'fill-[#F59E0B] text-[#F59E0B]'
                              : 'text-[#FECDD3]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  {feedback.hasComment && (
                    <MessageSquare className="w-5 h-5 text-[#10B981]" />
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                  <Calendar className="w-3 h-3" />
                  <span>
                    {new Date(feedback.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span>•</span>
                  <span className="capitalize">{feedback.type} Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="px-6 pb-6">
          <div className="bg-[#10B981]/10 border-l-4 border-[#10B981] rounded-xl p-5">
            <h3 className="text-base font-semibold text-[#1F2937] mb-2">
              🎉 Thank You for Your Feedback!
            </h3>
            <p className="text-sm text-[#6B7280] mb-3">
              You've helped improve healthcare for {Math.floor(Math.random() * 50) + 100}+ patients through your reviews.
            </p>
            <button 
              onClick={onProvideFeedback}
              className="text-sm font-medium text-[#10B981] hover:underline"
            >
              Provide More Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

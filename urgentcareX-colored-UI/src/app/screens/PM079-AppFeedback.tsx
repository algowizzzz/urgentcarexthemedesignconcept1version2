import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Star } from 'lucide-react';

interface AppFeedbackProps {
  onSubmit: (rating: number, feedback: string, category: string) => void;
  onSkip: () => void;
  onBack: () => void;
}

const CATEGORIES = [
  'Ease of Use',
  'Navigation',
  'Appointment Booking',
  'Care Navigation Tool',
  'Performance',
  'Design',
  'Features',
  'Other'
];

export default function AppFeedback({ onSubmit, onSkip, onBack }: AppFeedbackProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = () => {
    if (rating > 0) {
      onSubmit(rating, feedback, selectedCategory);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">App Feedback</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Header Text */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#D72638]/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
            📱
          </div>
          <h3 className="text-xl font-bold text-[#1F2937] mb-2">
            How's the UrgentCareX app?
          </h3>
          <p className="text-sm text-[#6B7280]">
            Your feedback helps us improve your experience
          </p>
        </div>

        {/* Star Rating */}
        <div className="mb-8">
          <p className="text-base font-semibold text-[#1F2937] text-center mb-4">
            Rate Your Experience <span className="text-[#EF4444]">*</span>
          </p>
          <div className="flex justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`w-12 h-12 ${
                    star <= (hoveredRating || rating)
                      ? 'fill-[#F59E0B] text-[#F59E0B]'
                      : 'text-[#FECDD3]'
                  }`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-sm text-[#6B7280] text-center">
              {rating === 5 && 'Love it!'}
              {rating === 4 && 'Great'}
              {rating === 3 && 'Good'}
              {rating === 2 && 'Could be better'}
              {rating === 1 && 'Needs improvement'}
            </p>
          )}
        </div>

        {/* Category Selection */}
        {rating > 0 && (
          <div className="mb-8">
            <p className="text-base font-semibold text-[#1F2937] mb-4">
              What aspect would you like to comment on? (Optional)
            </p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#D72638] text-white'
                      : 'bg-[#FEF2F2] text-[#D72638] hover:bg-[#FECDD3]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Written Feedback */}
        {rating > 0 && (
          <div className="mb-8">
            <p className="text-base font-semibold text-[#1F2937] mb-2">
              Tell us more (Optional)
            </p>
            <p className="text-sm text-[#6B7280] mb-3">
              What do you love? What could we improve?
            </p>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full h-32 px-4 py-3 border border-[#D72638]/20 rounded-xl text-base resize-none focus:outline-none focus:border-[#D72638]"
            />
            <p className="text-xs text-[#6B7280] mt-2">
              Your feedback is reviewed by our product team
            </p>
          </div>
        )}

        {/* Feature Suggestions */}
        {rating > 0 && rating >= 4 && (
          <div className="bg-[#10B981]/10 rounded-xl p-4 mb-8">
            <p className="text-sm font-semibold text-[#1F2937] mb-2">
              💡 Loving the app?
            </p>
            <p className="text-sm text-[#6B7280] mb-3">
              Help us spread the word! Share UrgentCareX with friends and family.
            </p>
            <button className="text-sm font-medium text-[#10B981] hover:underline">
              Share App
            </button>
          </div>
        )}

        {/* Common Issues */}
        {rating > 0 && rating <= 2 && (
          <div className="bg-[#F59E0B]/10 rounded-xl p-4 mb-8">
            <p className="text-sm font-semibold text-[#1F2937] mb-2">
              ⚡ Need immediate help?
            </p>
            <p className="text-sm text-[#6B7280] mb-3">
              If you're experiencing technical issues, our support team is here to help.
            </p>
            <button className="text-sm font-medium text-[#F59E0B] hover:underline">
              Contact Support
            </button>
          </div>
        )}

        {/* Privacy Notice */}
        <div className="bg-[#FEF2F2] rounded-xl p-4">
          <p className="text-xs text-[#6B7280]">
            Your feedback is confidential and helps us improve the app. We may contact you for clarification if needed.
          </p>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#D72638]/20 p-4 max-w-[390px] mx-auto">
        <div className="space-y-3">
          <Button 
            onClick={handleSubmit}
            disabled={rating === 0}
            className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Feedback
          </Button>
          <button
            onClick={onSkip}
            className="w-full text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors"
          >
            Skip all / Complete Later
          </button>
        </div>
      </div>
    </div>
  );
}

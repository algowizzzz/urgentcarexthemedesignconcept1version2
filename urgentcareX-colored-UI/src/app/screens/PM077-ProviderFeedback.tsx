import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Star } from 'lucide-react';

interface ProviderFeedbackProps {
  providerName: string;
  appointmentDate: string;
  onSubmit: (rating: number, feedback: string) => void;
  onSkip: () => void;
  onBack: () => void;
}

export default function ProviderFeedback({ 
  providerName, 
  appointmentDate, 
  onSubmit, 
  onSkip, 
  onBack 
}: ProviderFeedbackProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [selectedAspects, setSelectedAspects] = useState<string[]>([]);

  const ASPECTS = [
    'Professional',
    'Knowledgeable',
    'Good Listener',
    'Explained Clearly',
    'Compassionate',
    'Thorough',
    'On Time',
    'Respectful'
  ];

  const handleSubmit = () => {
    if (rating > 0) {
      onSubmit(rating, feedback);
    }
  };

  const toggleAspect = (aspect: string) => {
    if (selectedAspects.includes(aspect)) {
      setSelectedAspects(selectedAspects.filter(a => a !== aspect));
    } else {
      setSelectedAspects([...selectedAspects, aspect]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Rate Your Visit</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Provider Info */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#FEF2F2] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
            👨‍⚕️
          </div>
          <h3 className="text-xl font-bold text-[#1F2937] mb-2">
            How was your visit with {providerName}?
          </h3>
          <p className="text-sm text-[#6B7280]">
            {new Date(appointmentDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Star Rating */}
        <div className="mb-8">
          <p className="text-base font-semibold text-[#1F2937] text-center mb-4">
            Overall Experience <span className="text-[#EF4444]">*</span>
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
              {rating === 5 && 'Excellent!'}
              {rating === 4 && 'Very Good'}
              {rating === 3 && 'Good'}
              {rating === 2 && 'Fair'}
              {rating === 1 && 'Needs Improvement'}
            </p>
          )}
        </div>

        {/* Written Feedback */}
        {rating > 0 && (
          <div className="mb-8">
            <p className="text-base font-semibold text-[#1F2937] mb-2">
              Additional Comments (Optional)
            </p>
            <p className="text-sm text-[#6B7280] mb-3">
              Share more details about your experience
            </p>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="What went well? What could be improved?"
              className="w-full h-32 px-4 py-3 border border-[#D72638]/20 rounded-xl text-base resize-none focus:outline-none focus:border-[#D72638]"
            />
            <p className="text-xs text-[#6B7280] mt-2">
              Your feedback helps us improve our service
            </p>
          </div>
        )}

        {/* Bottom Buttons */}
        <div className="space-y-3 mt-8">
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
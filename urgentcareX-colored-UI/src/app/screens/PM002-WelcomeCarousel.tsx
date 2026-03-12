import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { Button } from '../components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface WelcomeCarouselProps {
  onComplete: () => void;
  onSkip: () => void;
}

/* ── Slide 1: AI Chat Illustration ── */
function ChatIllustration() {
  return (
    <svg width="240" height="200" viewBox="0 0 240 200" fill="none">
      {/* Phone body */}
      <rect x="60" y="10" width="120" height="180" rx="16" fill="#1F2937" />
      <rect x="66" y="22" width="108" height="156" rx="8" fill="#FFFFFF" />
      {/* Notch */}
      <rect x="95" y="12" width="50" height="6" rx="3" fill="#374151" />

      {/* AI message bubble */}
      <rect x="76" y="42" width="72" height="28" rx="10" fill="#FEF2F2" />
      <circle cx="88" cy="56" r="3" fill="#9CA3AF" />
      <circle cx="100" cy="56" r="3" fill="#9CA3AF" />
      <circle cx="112" cy="56" r="3" fill="#9CA3AF" />
      {/* AI avatar */}
      <circle cx="76" cy="78" r="8" fill="#D72638" />
      <text x="76" y="82" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">X</text>

      {/* User message bubble */}
      <rect x="104" y="86" width="60" height="22" rx="10" fill="#D72638" />
      <rect x="112" y="93" width="32" height="3" rx="1.5" fill="white" opacity="0.7" />

      {/* AI response */}
      <rect x="76" y="118" width="80" height="22" rx="10" fill="#FEF2F2" />
      <rect x="84" y="126" width="50" height="3" rx="1.5" fill="#9CA3AF" />

      {/* User message */}
      <rect x="110" y="150" width="54" height="18" rx="9" fill="#D72638" />
      <rect x="118" y="156" width="28" height="3" rx="1.5" fill="white" opacity="0.7" />

      {/* Floating decorative elements */}
      <circle cx="32" cy="50" r="12" fill="#D72638" opacity="0.1" />
      <circle cx="210" cy="140" r="16" fill="#D72638" opacity="0.08" />
      <circle cx="200" cy="40" r="8" fill="#10B981" opacity="0.15" />
      <circle cx="40" cy="160" r="10" fill="#F59E0B" opacity="0.12" />

      {/* Pulse rings around phone */}
      <rect x="50" y="0" width="140" height="200" rx="22" stroke="#D72638" strokeWidth="1" opacity="0.1" fill="none" />
      <rect x="42" y="-8" width="156" height="216" rx="28" stroke="#D72638" strokeWidth="0.5" opacity="0.06" fill="none" />
    </svg>
  );
}

/* ── Slide 2: Map & Care Matching Illustration ── */
function MapIllustration() {
  return (
    <svg width="240" height="200" viewBox="0 0 240 200" fill="none">
      {/* Map background */}
      <rect x="20" y="20" width="200" height="160" rx="16" fill="#F0F9FF" />
      {/* Map grid lines */}
      <line x1="20" y1="70" x2="220" y2="70" stroke="#DBEAFE" strokeWidth="1" />
      <line x1="20" y1="120" x2="220" y2="120" stroke="#DBEAFE" strokeWidth="1" />
      <line x1="90" y1="20" x2="90" y2="180" stroke="#DBEAFE" strokeWidth="1" />
      <line x1="160" y1="20" x2="160" y2="180" stroke="#DBEAFE" strokeWidth="1" />
      {/* Roads */}
      <path d="M20 95 L220 95" stroke="#FECDD3" strokeWidth="6" />
      <path d="M125 20 L125 180" stroke="#FECDD3" strokeWidth="6" />
      <path d="M40 40 L180 160" stroke="#FECDD3" strokeWidth="3" opacity="0.5" />

      {/* Location pin 1 - Primary (you are here) */}
      <circle cx="125" cy="95" r="18" fill="#D72638" opacity="0.15" />
      <circle cx="125" cy="95" r="10" fill="#D72638" opacity="0.25" />
      <circle cx="125" cy="95" r="5" fill="#D72638" />

      {/* Doctor pin 1 */}
      <g>
        <path d="M70 55 C70 45 80 38 80 38 C80 38 90 45 90 55 C90 62 80 70 80 70 C80 70 70 62 70 55Z" fill="#10B981" />
        <circle cx="80" cy="53" r="5" fill="white" />
        <text x="80" y="56" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="bold">+</text>
      </g>

      {/* Doctor pin 2 */}
      <g>
        <path d="M155 45 C155 35 165 28 165 28 C165 28 175 35 175 45 C175 52 165 60 165 60 C165 60 155 52 155 45Z" fill="#10B981" />
        <circle cx="165" cy="43" r="5" fill="white" />
        <text x="165" y="46" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="bold">+</text>
      </g>

      {/* Doctor pin 3 */}
      <g>
        <path d="M90 130 C90 120 100 113 100 113 C100 113 110 120 110 130 C110 137 100 145 100 145 C100 145 90 137 90 130Z" fill="#3B82F6" />
        <circle cx="100" cy="128" r="5" fill="white" />
        <text x="100" y="131" textAnchor="middle" fill="#3B82F6" fontSize="7" fontWeight="bold">+</text>
      </g>

      {/* Distance line */}
      <line x1="125" y1="95" x2="80" y2="57" stroke="#D72638" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
      <line x1="125" y1="95" x2="165" y2="47" stroke="#D72638" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />

      {/* Radius circle */}
      <circle cx="125" cy="95" r="55" stroke="#D72638" strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity="0.2" />

      {/* Decorative corners */}
      <circle cx="30" cy="30" r="4" fill="#F59E0B" opacity="0.3" />
      <circle cx="210" cy="170" r="4" fill="#D72638" opacity="0.2" />
    </svg>
  );
}

/* ── Slide 3: Calendar & Booking Illustration ── */
function CalendarIllustration() {
  return (
    <svg width="240" height="200" viewBox="0 0 240 200" fill="none">
      {/* Calendar body */}
      <rect x="40" y="30" width="160" height="140" rx="14" fill="white" stroke="#FECDD3" strokeWidth="1.5" />
      {/* Calendar header */}
      <rect x="40" y="30" width="160" height="40" rx="14" fill="#D72638" />
      <rect x="40" y="56" width="160" height="14" fill="#D72638" />
      {/* Calendar hooks */}
      <rect x="80" y="22" width="4" height="20" rx="2" fill="#1F2937" />
      <rect x="156" y="22" width="4" height="20" rx="2" fill="#1F2937" />
      {/* Month text */}
      <text x="120" y="53" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Alice, serif">February 2026</text>

      {/* Day headers */}
      {['S','M','T','W','T','F','S'].map((d, i) => (
        <text key={i} x={58 + i * 20} y="84" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontWeight="600">{d}</text>
      ))}

      {/* Date grid - Row 1 */}
      {[1,2,3,4,5,6,7].map((d, i) => (
        <text key={d} x={58 + i * 20} y="100" textAnchor="middle" fill="#374151" fontSize="9">{d}</text>
      ))}
      {/* Row 2 */}
      {[8,9,10,11,12,13,14].map((d, i) => (
        <text key={d} x={58 + i * 20} y="116" textAnchor="middle" fill="#374151" fontSize="9">{d}</text>
      ))}
      {/* Row 3 */}
      {[15,16,17,18,19,20,21].map((d, i) => (
        <text key={d} x={58 + i * 20} y="132" textAnchor="middle" fill={d === 17 ? 'white' : '#374151'} fontSize="9" fontWeight={d === 17 ? 'bold' : 'normal'}>{d}</text>
      ))}
      {/* Selected date highlight */}
      <circle cx={58 + 2 * 20} cy={129} r="10" fill="#D72638" />
      <text x={58 + 2 * 20} y="132" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">17</text>

      {/* Row 4 */}
      {[22,23,24,25,26,27,28].map((d, i) => (
        <text key={d} x={58 + i * 20} y="148" textAnchor="middle" fill="#374151" fontSize="9">{d}</text>
      ))}

      {/* Checkmark badge */}
      <circle cx="185" cy="155" r="18" fill="#10B981" />
      <path d="M176 155 L182 161 L194 149" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Decorative elements */}
      <circle cx="22" cy="60" r="10" fill="#D72638" opacity="0.08" />
      <circle cx="220" cy="50" r="14" fill="#10B981" opacity="0.1" />
      <circle cx="28" cy="160" r="8" fill="#3B82F6" opacity="0.1" />
      <circle cx="215" cy="130" r="6" fill="#F59E0B" opacity="0.12" />

      {/* Clock icon */}
      <circle cx="30" cy="110" r="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
      <path d="M30 104 L30 110 L34 113" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const slides = [
  {
    illustration: ChatIllustration,
    title: 'Describe Your Symptoms',
    description: "Tell us how you're feeling using our friendly AI chat. It's quick and easy."
  },
  {
    illustration: MapIllustration,
    title: 'Get Matched to Care',
    description: "We'll find doctors and facilities that match your symptoms, location, and insurance."
  },
  {
    illustration: CalendarIllustration,
    title: 'Schedule Visits',
    description: 'Schedule visits with doctors directly in the app. No phone calls needed.'
  }
];

export default function WelcomeCarousel({ onComplete, onSkip }: WelcomeCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slides.length - 1;

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const goNext = () => {
    if (isLastSlide) {
      onComplete();
    } else {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const goBack = () => {
    if (!isFirstSlide) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    const { offset } = info;

    if (offset.x < -threshold && !isLastSlide) {
      goNext();
    } else if (offset.x > threshold && !isFirstSlide) {
      goBack();
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const SlideIllustration = slides[currentSlide].illustration;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Skip Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={onSkip}
          className="text-base font-medium text-[#D72638]"
        >
          Skip all / Complete Later
        </button>
      </div>

      {/* Content - Swipeable Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.2, ease: "easeOut" },
              opacity: { duration: 0.15 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="flex flex-col items-center w-full cursor-grab active:cursor-grabbing"
          >
            {/* Illustration */}
            <div className="w-[280px] h-[240px] flex items-center justify-center mb-12">
              <SlideIllustration />
            </div>

            {/* Headline */}
            <h2 className="text-2xl font-bold text-[#1F2937] text-center mb-4">
              {slides[currentSlide].title}
            </h2>

            {/* Body Text */}
            <p className="text-base text-[#6B7280] text-center max-w-[280px] mb-12">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Page Dots - Clickable */}
        <div className="flex gap-3 mb-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-[#D72638]' : 'bg-[#FECDD3]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="w-full max-w-[326px] flex gap-3">
          {/* Back Button - Hidden on first slide */}
          {!isFirstSlide && (
            <Button
              onClick={goBack}
              variant="outline"
              className="h-[52px] px-4 border-[#D72638]/20 text-[#1F2937] rounded-xl"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          )}

          {/* Next / Get Started Button */}
          <Button
            onClick={goNext}
            className="flex-1 h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
          >
            {isLastSlide ? 'Get Started' : 'Next'}
          </Button>
        </div>
      </div>

      <div className="h-8"></div>
    </div>
  );
}

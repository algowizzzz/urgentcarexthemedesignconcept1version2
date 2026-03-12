import { Button } from '../components/ui/button';
import { ArrowLeft, MapPin } from 'lucide-react';
import logo from '../../assets/logo.svg';
import { Message, ChatSession } from './PM072-SymptomCheckHistory';

interface SymptomCheckTranscriptProps {
  session: ChatSession;
  onBack: () => void;
  onFindCare?: () => void;
}

export default function SymptomCheckTranscript({ session, onBack, onFindCare }: SymptomCheckTranscriptProps) {
  const getStatusBadge = (status: ChatSession['status']) => {
    switch (status) {
      case 'completed':
        return (
          <span className="px-3 py-1 bg-[#D72638] text-white text-xs rounded-full">
            Completed
          </span>
        );
      case 'in-progress':
        return (
          <span className="px-3 py-1 bg-[#6B7280] text-white text-xs rounded-full">
            In Progress
          </span>
        );
      case 'abandoned':
        return (
          <span className="px-3 py-1 bg-[#9CA3AF] text-white text-xs rounded-full">
            Abandoned
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Session Info */}
      <div className="px-6 py-4 bg-[#FEF2F2] border-b border-[#D72638]/20">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-[#6B7280]">
            {session.startedAt.toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
          {getStatusBadge(session.status)}
        </div>
        <p className="text-xs text-[#6B7280]">
          {session.messages.length} messages
        </p>
      </div>

      {/* Messages (Read-only) */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-4 max-w-full">
          {session.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className="max-w-[80%]">
                {message.sender === 'ai' && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-[#D72638] rounded-full flex items-center justify-center">
                      <img src={logo} alt="UrgentCareX" className="w-5 h-5 brightness-0 invert" />
                    </div>
                    <span className="text-xs text-[#6B7280]">UrgentCareX</span>
                  </div>
                )}
                
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-[#D72638] text-white rounded-tr-sm'
                      : 'bg-[#FEF2F2] text-[#1F2937] rounded-tl-sm'
                  }`}
                >
                  <p className="text-base">{message.text}</p>
                </div>

                {/* Show options that were presented (read-only) */}
                {message.options && message.sender === 'ai' && (
                  <div className="mt-3 space-y-2 opacity-60">
                    {message.options.map((option, index) => (
                      <div
                        key={index}
                        className="w-full text-left px-4 py-3 bg-white border border-[#D72638]/20 rounded-xl text-sm text-[#6B7280]"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}

                <p className={`text-xs text-[#6B7280] mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Notice */}
      <div className="border-t border-[#D72638]/20 p-4 bg-[#FEF2F2]">
        <p className="text-xs text-center text-[#6B7280]">
          This is a read-only transcript of your symptom check conversation
        </p>
      </div>

      {/* Find Care Button - Only for completed sessions */}
      {session.status === 'completed' && onFindCare && (
        <div className="bg-white border-t border-[#D72638]/20 p-4">
          <Button
            onClick={onFindCare}
            className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Find Care
          </Button>
        </div>
      )}
    </div>
  );
}

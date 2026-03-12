// PM-103 through PM-115: Modal and Alert Components
import { Button } from '../components/ui/button';
import { CheckCircle, AlertCircle, X, Loader2, Info } from 'lucide-react';

// PM-103: Success Modal
export function SuccessModal({ title, message, onClose }: { title: string; message: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#1F2937] text-center mb-3">{title}</h3>
        <p className="text-base text-[#6B7280] text-center mb-6">{message}</p>
        <Button onClick={onClose} className="w-full h-[52px] bg-[#D72638] text-white rounded-xl">
          Continue
        </Button>
      </div>
    </div>
  );
}

// PM-104: Error Modal
export function ErrorModal({ title, message, onClose, onRetry }: { title: string; message: string; onClose: () => void; onRetry?: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-[#EF4444] rounded-full flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#1F2937] text-center mb-3">{title}</h3>
        <p className="text-base text-[#6B7280] text-center mb-6">{message}</p>
        <div className="space-y-3">
          {onRetry && (
            <Button onClick={onRetry} className="w-full h-[52px] bg-[#D72638] text-white rounded-xl">
              Try Again
            </Button>
          )}
          <Button onClick={onClose} variant="outline" className="w-full h-[52px] border-[#D72638]/20 text-[#1F2937] rounded-xl">
            {onRetry ? 'Cancel' : 'Close'}
          </Button>
        </div>
      </div>
    </div>
  );
}

// PM-105: Confirmation Modal
export function ConfirmationModal({ 
  title, 
  message, 
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm, 
  onCancel,
  variant = 'default'
}: { 
  title: string; 
  message: string; 
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void; 
  onCancel: () => void;
  variant?: 'default' | 'danger';
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
        <h3 className="text-xl font-bold text-[#1F2937] mb-3">{title}</h3>
        <p className="text-base text-[#6B7280] mb-6">{message}</p>
        <div className="space-y-3">
          <Button 
            onClick={onConfirm} 
            className={`w-full h-[52px] rounded-xl ${
              variant === 'danger' 
                ? 'bg-[#EF4444] hover:bg-[#DC2626]' 
                : 'bg-[#D72638] hover:bg-[#B91C2E]'
            } text-white`}
          >
            {confirmText}
          </Button>
          <Button onClick={onCancel} variant="outline" className="w-full h-[52px] border-[#D72638]/20 text-[#1F2937] rounded-xl">
            {cancelText}
          </Button>
        </div>
      </div>
    </div>
  );
}

// PM-106: Loading Modal
export function LoadingModal({ message = 'Please wait...' }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center">
        <Loader2 className="w-12 h-12 text-[#1F2937] mx-auto mb-4 animate-spin" />
        <p className="text-base text-[#6B7280]">{message}</p>
      </div>
    </div>
  );
}

// PM-107: Info Modal
export function InfoModal({ title, message, onClose }: { title: string; message: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
        <div className="flex justify-between items-start mb-4">
          <Info className="w-6 h-6 text-[#1F2937]" />
          <button onClick={onClose}>
            <X className="w-6 h-6 text-[#6B7280]" />
          </button>
        </div>
        <h3 className="text-xl font-bold text-[#1F2937] mb-3">{title}</h3>
        <p className="text-base text-[#6B7280] mb-6">{message}</p>
        <Button onClick={onClose} className="w-full h-[52px] bg-[#D72638] text-white rounded-xl">
          Got It
        </Button>
      </div>
    </div>
  );
}

// PM-108: Toast Notification (positioned at top)
export function ToastNotification({ 
  message, 
  type = 'info',
  onClose 
}: { 
  message: string; 
  type?: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
}) {
  const bgColor = {
    success: 'bg-[#10B981]',
    error: 'bg-[#EF4444]',
    warning: 'bg-[#F59E0B]',
    info: 'bg-[#D72638]'
  }[type];

  return (
    <div className="fixed top-4 left-4 right-4 z-50 animate-slide-down">
      <div className={`${bgColor} rounded-xl p-4 shadow-lg flex items-center justify-between`}>
        <p className="text-white text-sm font-medium flex-1">{message}</p>
        <button onClick={onClose} className="ml-3">
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}

// PM-109-115: Additional modal variants (placeholder)
export function GenericModal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
        {children}
      </div>
    </div>
  );
}

// PM-088 through PM-101: Additional Settings Screens
import { Button } from '../components/ui/button';
import { ArrowLeft, ChevronRight } from 'lucide-react';

interface GenericSettingsProps {
  title: string;
  onBack: () => void;
}

interface PolicyDetailProps {
  policyType: 'privacy' | 'terms' | 'data' | 'disclaimer' | 'hipaa';
  onBack: () => void;
}

// PM-088: Help & Support
export function HelpSupport({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Help & Support</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {/* Contact Support */}
        <div className="bg-[#FEF2F2] border border-[#E5E7EB] rounded-xl p-5">
          <h3 className="text-base font-semibold text-[#1F2937] mb-3">Contact Support</h3>
          <p className="text-sm text-[#6B7280] mb-2">
            Need help? Email us anytime:
          </p>
          <a 
            href="mailto:support@urgentcarex.com"
            className="text-base font-medium text-[#D72638] underline"
          >
            support@urgentcarex.com
          </a>
          <p className="text-xs text-[#6B7280] mt-3">
            We typically respond within 24 hours
          </p>
        </div>

        {/* FAQs Section */}
        <div>
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-4">
              <h4 className="text-base font-semibold text-[#1F2937] mb-2">
                How do I book an appointment?
              </h4>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Start a symptom check, get matched with providers, and select an available time slot to book your appointment.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-4">
              <h4 className="text-base font-semibold text-[#1F2937] mb-2">
                How does the AI Care Navigation Tool work?
              </h4>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Our AI chat asks you about your symptoms and provides triage recommendations. It does NOT diagnose - always consult healthcare professionals.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-4">
              <h4 className="text-base font-semibold text-[#1F2937] mb-2">
                Is my health information secure?
              </h4>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Yes, all data is protected under HIPAA regulations with industry-standard encryption and security measures.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-4">
              <h4 className="text-base font-semibold text-[#1F2937] mb-2">
                Can I book for family members?
              </h4>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Currently, you can only book appointments for yourself. Family member bookings coming soon.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-4">
              <h4 className="text-base font-semibold text-[#1F2937] mb-2">
                What if I need to cancel my appointment?
              </h4>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Go to your Scheduled Visits tab, select the visit, and choose Cancel Visit.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-4">
              <h4 className="text-base font-semibold text-[#1F2937] mb-2">
                Do you accept insurance?
              </h4>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Yes, we verify your insurance during the booking process. You can manage your insurance in Settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// PM-089: FAQ
export function FAQ({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">FAQ</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <p className="text-sm text-[#6B7280]">Frequently Asked Questions coming soon...</p>
      </div>
    </div>
  );
}

// PM-090: Contact Support
export function ContactSupport({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Contact Support</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <textarea
          placeholder="Describe your issue..."
          className="w-full h-32 px-4 py-3 border border-[#E5E7EB] rounded-xl text-base resize-none focus:outline-none focus:border-[#D72638]"
        />
        <Button className="w-full h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] mt-4">
          Send Message
        </Button>
      </div>
    </div>
  );
}

// PM-091-101: Generic placeholder screens
export function GenericSettings({ title, onBack }: GenericSettingsProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">{title}</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="bg-[#FEF2F2] rounded-xl p-4">
          <p className="text-sm text-[#6B7280]">{title} screen</p>
        </div>
      </div>
    </div>
  );
}

// Legal & Policies Screen
export function LegalPolicies({ onBack, onNavigate }: { onBack: () => void; onNavigate: (screen: string) => void }) {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white ml-2">Legal & Policies</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-6 space-y-3">
        {/* Privacy Policy */}
        <button 
          onClick={() => onNavigate('policy-privacy')}
          className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#D72638] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">🔒</span>
            <span className="text-base font-medium text-[#1F2937]">Privacy Policy</span>
          </div>
          <ChevronRight className="w-5 h-5 text-[#D72638]" />
        </button>

        {/* Terms of Service */}
        <button 
          onClick={() => onNavigate('policy-terms')}
          className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#D72638] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">📄</span>
            <span className="text-base font-medium text-[#1F2937]">Terms of Service</span>
          </div>
          <ChevronRight className="w-5 h-5 text-[#D72638]" />
        </button>

        {/* How We Use Your Data */}
        <button 
          onClick={() => onNavigate('policy-data')}
          className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#D72638] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">📋</span>
            <span className="text-base font-medium text-[#1F2937]">How We Use Your Data</span>
          </div>
          <ChevronRight className="w-5 h-5 text-[#D72638]" />
        </button>

        {/* Important Disclaimer */}
        <button 
          onClick={() => onNavigate('policy-disclaimer')}
          className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#D72638] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">⚠️</span>
            <span className="text-base font-medium text-[#1F2937]">Important Disclaimer</span>
          </div>
          <ChevronRight className="w-5 h-5 text-[#D72638]" />
        </button>

        {/* HIPAA Notice */}
        <button 
          onClick={() => onNavigate('policy-hipaa')}
          className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#D72638] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">🏥</span>
            <span className="text-base font-medium text-[#1F2937]">HIPAA Notice</span>
          </div>
          <ChevronRight className="w-5 h-5 text-[#D72638]" />
        </button>

        {/* Version Info */}
        <div className="mt-4 p-4 bg-[#FEF2F2] rounded-xl text-center">
          <p className="text-xs text-[#6B7280]">Last updated: January 10, 2026</p>
          <p className="text-xs text-[#6B7280] mt-1">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}

// Policy Detail Screen
export function PolicyDetail({ policyType, onBack }: PolicyDetailProps) {
  const getPolicyContent = () => {
    switch (policyType) {
      case 'privacy':
        return {
          icon: '🔒',
          title: 'Privacy Policy',
          sections: [
            {
              heading: 'Information We Collect',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              heading: 'How We Use Your Information',
              content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
              heading: 'Data Protection & Security',
              content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
            },
            {
              heading: 'Your Privacy Rights',
              content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
            },
            {
              heading: 'Cookies & Tracking',
              content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
            }
          ]
        };
      case 'terms':
        return {
          icon: '📄',
          title: 'Terms of Service',
          sections: [
            {
              heading: 'Acceptance of Terms',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
              heading: 'User Responsibilities',
              content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            },
            {
              heading: 'Service Availability',
              content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
            },
            {
              heading: 'Account Termination',
              content: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
            },
            {
              heading: 'Limitation of Liability',
              content: 'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.'
            }
          ]
        };
      case 'data':
        return {
          icon: '📋',
          title: 'How We Use Your Data',
          sections: [
            {
              heading: 'HIPAA Compliance',
              content: 'Your health information is protected under HIPAA regulations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
            },
            {
              heading: 'Health Data Collection',
              content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
              heading: 'Data Sharing Practices',
              content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
            },
            {
              heading: 'Data Retention Policy',
              content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
            },
            {
              heading: 'Your Data Rights',
              content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
            }
          ]
        };
      case 'disclaimer':
        return {
          icon: '⚠️',
          title: 'Important Disclaimer',
          sections: [
            {
              heading: 'Not a Medical Diagnosis',
              content: 'This app does NOT provide medical diagnoses. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This is an informational tool only and should not replace professional medical advice.'
            },
            {
              heading: 'Emergency Situations',
              content: 'If you are experiencing a medical emergency, call 911 immediately. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Do not rely on this app for emergency medical care.'
            },
            {
              heading: 'Professional Medical Advice',
              content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Always consult with qualified healthcare providers for medical decisions and treatment plans.'
            },
            {
              heading: 'Accuracy of Information',
              content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. While we strive for accuracy, information may not be complete or up-to-date. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.'
            },
            {
              heading: 'Limitation of Service',
              content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione. This service is for informational and appointment scheduling purposes only.'
            }
          ]
        };
      case 'hipaa':
        return {
          icon: '🏥',
          title: 'HIPAA Notice',
          sections: [
            {
              heading: 'Protected Health Information',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your Protected Health Information (PHI) is safeguarded according to HIPAA regulations. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
              heading: 'Notice of Privacy Practices',
              content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This notice describes how medical information about you may be used and disclosed and how you can get access to this information.'
            },
            {
              heading: 'Your Rights Under HIPAA',
              content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. You have the right to inspect, copy, and request amendments to your health information. Excepteur sint occaecat cupidatat non proident.'
            },
            {
              heading: 'Security Measures',
              content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. We employ administrative, physical, and technical safeguards to protect your health information from unauthorized access.'
            },
            {
              heading: 'Breach Notification',
              content: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. In the event of a breach of unsecured PHI, we will notify affected individuals as required by HIPAA regulations.'
            }
          ]
        };
      default:
        return {
          icon: '📄',
          title: 'Policy',
          sections: []
        };
    }
  };

  const policy = getPolicyContent();

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center px-4 py-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <span className="text-xl ml-2">{policy.icon}</span>
        <h2 className="text-lg font-semibold text-white ml-2">{policy.title}</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <div className="text-xs text-[#6B7280] mb-4">
          Effective Date: January 10, 2026
        </div>
        
        {policy.sections.map((section, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-base font-semibold text-[#1F2937]">{section.heading}</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">{section.content}</p>
          </div>
        ))}

        <div className="mt-8 p-4 bg-[#FEF2F2] rounded-xl">
          <p className="text-xs text-[#6B7280] text-center">
            For questions about this policy, contact us at legal@urgentcarex.com
          </p>
        </div>
      </div>
    </div>
  );
}

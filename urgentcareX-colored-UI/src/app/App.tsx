import { useState, useEffect } from 'react';
// App Component - UrgentCareX Patient Mobile App
import SplashScreen from './screens/PM001-SplashScreen';
import WelcomeCarousel from './screens/PM002-WelcomeCarousel';
import SignUpEmail from './screens/PM005-SignUpEmail';
import SignUpPassword from './screens/PM006-SignUpPassword';
import SignUpOTP from './screens/PM007-SignUpOTP';
import SignUpSuccess from './screens/PM008-SignUpSuccess';
import SignIn from './screens/PM009-SignIn';
import ForgotPasswordEmail from './screens/PM010-ForgotPasswordEmail';
import ForgotPasswordOTP from './screens/PM011-ForgotPasswordOTP';
import ForgotPasswordNew from './screens/PM012-ForgotPasswordNew';
import ForgotPasswordSuccess from './screens/PM013-ForgotPasswordSuccess';
import ConsentScreen from './screens/PM014-ConsentScreen';
import PrivacyPolicy from './screens/PM015-PrivacyPolicy';
import HIPAANotice from './screens/PM017-HIPAANotice';
import MedicalDisclaimer from './screens/PM018-MedicalDisclaimer';
import OnboardingIntro from './screens/PM019-OnboardingIntro';
import BasicInfoName from './screens/PM020-BasicInfoName';
import BasicInfoDOBSex from './screens/PM021-BasicInfoDOBSex';
import MedicalHistoryIntro from './screens/PM022-MedicalHistoryIntro';
import ChronicConditions from './screens/PM023-ChronicConditions';
import PastSurgeries from './screens/PM024-PastSurgeries';
import FamilyHistory from './screens/PM025-FamilyHistory';
import Allergies from './screens/PM026-Allergies';
import CurrentMedications from './screens/PM027-CurrentMedications';
import SocialHistory from './screens/PM028-SocialHistory';
import Lifestyle from './screens/PM029-Lifestyle';
import InsuranceIntro from './screens/PM030-InsuranceIntro';
import InsuranceProviderSelection from './screens/PM031-InsuranceProviderSelection';
import InsuranceMemberDetails from './screens/PM032-InsuranceMemberDetails';
import InsuranceCardPhoto from './screens/PM033-InsuranceCardPhoto';
import LocationSetup from './screens/PM034-LocationSetup';
import LocationRadius from './screens/PM035-LocationRadius';
import OnboardingComplete from './screens/PM036-OnboardingComplete';
import Dashboard from './screens/PM037-Dashboard';
import SymptomCheckerStart from './screens/PM038-SymptomCheckerStart';
import SymptomCheckerChat from './screens/PM039-SymptomCheckerChat';
import ROSIntro from './screens/PM040-ROSIntro';
import ROSGeneral from './screens/PM041-ROSGeneral';
import ProviderSearch from './screens/PM046-ProviderSearch';
import ProviderProfile from './screens/PM047-ProviderProfile';
import AppointmentTimeSelection from './screens/PM048-AppointmentTimeSelection';
import AppointmentConfirmation from './screens/PM049-AppointmentConfirmation';
import ROSHeadNeck from './screens/PM050-ROSHeadNeck';
import ROSEyes from './screens/PM051-ROSEyes';
import ROSEarsNoseThroat from './screens/PM052-ROSEarsNoseThroat';
import ROSCardiovascular from './screens/PM053-ROSCardiovascular';
import ROSRespiratory from './screens/PM054-ROSRespiratory';
import ROSGastrointestinal from './screens/PM055-ROSGastrointestinal';
import ROSMusculoskeletal from './screens/PM056-ROSMusculoskeletal';
import AppointmentReason from './screens/PM057-AppointmentReason';
import ROSComplete from './screens/PM059-ROSComplete';
import AppointmentReview from './screens/PM060-AppointmentReview';
import UpcomingAppointments from './screens/PM062-UpcomingAppointments';
import AppointmentDetails from './screens/PM063-AppointmentDetails';
import RescheduleAppointment from './screens/PM064-RescheduleAppointment';
import RescheduleConfirmation from './screens/PM065-RescheduleConfirmation';
import CancelAppointment from './screens/PM066-CancelAppointment';
import CancelConfirmation from './screens/PM067-CancelConfirmation';
import CheckIn from './screens/PM068-CheckIn';
import CheckInSuccess from './screens/PM069-CheckInSuccess';
import PastAppointments from './screens/PM070-PastAppointments';
import PastAppointmentDetails from './screens/PM071-PastAppointmentDetails';
import AppointmentHistory from './screens/PM072A-AppointmentHistory';
import MedicalRecords from './screens/PM073-MedicalRecords';
import ProviderFeedback from './screens/PM077-ProviderFeedback';
import FeedbackSuccess from './screens/PM078-FeedbackSuccess';
import AppFeedback from './screens/PM079-AppFeedback';
import MyFeedbackHistory from './screens/PM080-MyFeedbackHistory';
import Settings from './screens/PM081-Settings';
import EditProfile from './screens/PM082-EditProfile';
import NotificationSettings from './screens/PM083-NotificationSettings';
import SecurityPrivacy from './screens/PM084-SecurityPrivacy';
import ChangePassword from './screens/PM085-ChangePassword';
import InsuranceManagement from './screens/PM086-InsuranceManagement';
import { HelpSupport, FAQ, ContactSupport, GenericSettings, LegalPolicies, PolicyDetail } from './screens/PM088-101-RemainingSettings';
import EmergencyAlert from './screens/PM102-EmergencyAlert';
import { SuccessModal, ErrorModal, ConfirmationModal, LoadingModal, InfoModal, ToastNotification } from './screens/PM103-115-Modals';
import SymptomCheckHistory from './screens/PM072-SymptomCheckHistory';
import SymptomCheckTranscript from './screens/PM116-SymptomCheckTranscript';
import MedicalHistoryView from './screens/PM091-MedicalHistoryView';
import type { ChatSession, Message } from './screens/PM072-SymptomCheckHistory';

export default function App() {
  // Check URL hash for direct screen navigation (for screenshots/testing)
  const getInitialScreen = () => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'splash';
  };

  const [currentScreen, setCurrentScreen] = useState(getInitialScreen());
  const [previousScreen, setPreviousScreen] = useState<string>('');
  const [userData, setUserData] = useState<any>({});

  // Listen for hash changes to navigate directly to screens
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentScreen(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  // Chat Session Management with dummy data
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      sessionId: 'session-1704902400000',
      messages: [
        {
          id: 'msg-1',
          text: "I've been experiencing headaches and mild fever for the past 2 days",
          sender: 'user',
          timestamp: new Date('2026-01-08T09:00:00')
        },
        {
          id: 'msg-2',
          text: "I understand you're experiencing headaches and a mild fever. Can you tell me more about the headache? Where exactly do you feel the pain?",
          sender: 'ai',
          timestamp: new Date('2026-01-08T09:00:15')
        },
        {
          id: 'msg-3',
          text: "It's mostly on the front of my head, around my forehead area",
          sender: 'user',
          timestamp: new Date('2026-01-08T09:01:00')
        },
        {
          id: 'msg-4',
          text: "Thank you. And what about the fever? Have you measured your temperature?",
          sender: 'ai',
          timestamp: new Date('2026-01-08T09:01:10')
        },
        {
          id: 'msg-5',
          text: "Yes, it's been around 100.5°F",
          sender: 'user',
          timestamp: new Date('2026-01-08T09:02:00')
        }
      ],
      startedAt: new Date('2026-01-08T09:00:00'),
      lastUpdatedAt: new Date('2026-01-08T09:15:00'),
      status: 'completed',
      firstMessage: "I've been experiencing headaches and mild fever for the past 2 days"
    },
    {
      sessionId: 'session-1704816000000',
      messages: [
        {
          id: 'msg-6',
          text: "I have a persistent cough that won't go away",
          sender: 'user',
          timestamp: new Date('2026-01-06T14:30:00')
        },
        {
          id: 'msg-7',
          text: "I'm sorry to hear about your cough. How long have you had this cough?",
          sender: 'ai',
          timestamp: new Date('2026-01-06T14:30:10')
        },
        {
          id: 'msg-8',
          text: "About 5 days now",
          sender: 'user',
          timestamp: new Date('2026-01-06T14:31:00')
        },
        {
          id: 'msg-9',
          text: "Is it a dry cough or are you coughing up phlegm?",
          sender: 'ai',
          timestamp: new Date('2026-01-06T14:31:15')
        },
        {
          id: 'msg-10',
          text: "It's mostly dry, but sometimes I cough up a bit of mucus",
          sender: 'user',
          timestamp: new Date('2026-01-06T14:32:00')
        }
      ],
      startedAt: new Date('2026-01-06T14:30:00'),
      lastUpdatedAt: new Date('2026-01-06T14:45:00'),
      status: 'completed',
      firstMessage: "I have a persistent cough that won't go away"
    },
    {
      sessionId: 'session-1704556800000',
      messages: [
        {
          id: 'msg-11',
          text: "I'm feeling nauseous and have stomach pain",
          sender: 'user',
          timestamp: new Date('2026-01-03T11:00:00')
        },
        {
          id: 'msg-12',
          text: "I'm sorry you're not feeling well. When did the nausea and stomach pain start?",
          sender: 'ai',
          timestamp: new Date('2026-01-03T11:00:12')
        },
        {
          id: 'msg-13',
          text: "Started last night after dinner",
          sender: 'user',
          timestamp: new Date('2026-01-03T11:01:00')
        },
        {
          id: 'msg-14',
          text: "Have you vomited at all?",
          sender: 'ai',
          timestamp: new Date('2026-01-03T11:01:10')
        },
        {
          id: 'msg-15',
          text: "Yes, twice this morning",
          sender: 'user',
          timestamp: new Date('2026-01-03T11:02:00')
        }
      ],
      startedAt: new Date('2026-01-03T11:00:00'),
      lastUpdatedAt: new Date('2026-01-03T11:20:00'),
      status: 'completed',
      firstMessage: "I'm feeling nauseous and have stomach pain"
    },
    {
      sessionId: 'session-1704297600000',
      messages: [
        {
          id: 'msg-16',
          text: "I twisted my ankle while playing basketball",
          sender: 'user',
          timestamp: new Date('2026-01-01T16:00:00')
        },
        {
          id: 'msg-17',
          text: "I'm sorry about your ankle injury. When did this happen?",
          sender: 'ai',
          timestamp: new Date('2026-01-01T16:00:10')
        },
        {
          id: 'msg-18',
          text: "About 3 hours ago",
          sender: 'user',
          timestamp: new Date('2026-01-01T16:01:00')
        },
        {
          id: 'msg-19',
          text: "Can you put weight on it? Is there any swelling or bruising?",
          sender: 'ai',
          timestamp: new Date('2026-01-01T16:01:15')
        }
      ],
      startedAt: new Date('2026-01-01T16:00:00'),
      lastUpdatedAt: new Date('2026-01-01T16:10:00'),
      status: 'in-progress',
      firstMessage: "I twisted my ankle while playing basketball"
    },
    {
      sessionId: 'session-1704124800000',
      messages: [
        {
          id: 'msg-20',
          text: "I've been having trouble sleeping lately",
          sender: 'user',
          timestamp: new Date('2025-12-30T22:00:00')
        },
        {
          id: 'msg-21',
          text: "Sleep issues can be very frustrating. How long have you been experiencing sleep difficulties?",
          sender: 'ai',
          timestamp: new Date('2025-12-30T22:00:15')
        },
        {
          id: 'msg-22',
          text: "For about 2 weeks now",
          sender: 'user',
          timestamp: new Date('2025-12-30T22:01:00')
        }
      ],
      startedAt: new Date('2025-12-30T22:00:00'),
      lastUpdatedAt: new Date('2025-12-30T22:10:00'),
      status: 'completed',
      firstMessage: "I've been having trouble sleeping lately"
    }
  ]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);

  const navigate = (screen: string, data?: any) => {
    if (data) {
      setUserData({ ...userData, ...data });
    }
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (previousScreen) {
      setCurrentScreen(previousScreen);
      setPreviousScreen('');
    }
  };

  // Session Management Functions
  const createNewSession = (): string => {
    const sessionId = `session-${Date.now()}`;
    const newSession: ChatSession = {
      sessionId,
      messages: [],
      startedAt: new Date(),
      lastUpdatedAt: new Date(),
      status: 'in-progress',
      firstMessage: ''
    };
    setChatSessions(prev => [...prev, newSession]);
    setCurrentSessionId(sessionId);
    return sessionId;
  };

  const updateSessionMessages = (sessionId: string, messages: Message[]) => {
    setChatSessions(prev => prev.map(session => {
      if (session.sessionId === sessionId) {
        // Get first user message for preview
        const firstUserMessage = messages.find(m => m.sender === 'user')?.text || 'New symptom check';
        
        return {
          ...session,
          messages,
          lastUpdatedAt: new Date(),
          firstMessage: session.firstMessage || firstUserMessage
        };
      }
      return session;
    }));
  };

  const markSessionComplete = (sessionId: string) => {
    setChatSessions(prev => prev.map(session => 
      session.sessionId === sessionId 
        ? { ...session, status: 'completed' as const, lastUpdatedAt: new Date() }
        : session
    ));
  };

  const deleteSession = (sessionId: string) => {
    setChatSessions(prev => prev.filter(session => session.sessionId !== sessionId));
    if (currentSessionId === sessionId) {
      setCurrentSessionId(null);
    }
  };

  const getCurrentSession = (): ChatSession | null => {
    return chatSessions.find(s => s.sessionId === currentSessionId) || null;
  };

  const getSessionById = (sessionId: string): ChatSession | null => {
    return chatSessions.find(s => s.sessionId === sessionId) || null;
  };

  console.log('Current screen:', currentScreen);

  // Mobile container wrapper
  const MobileContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[390px] h-[844px] rounded-[32px] shadow-2xl overflow-hidden relative border-4 border-[#1F2937]">
        {children}
      </div>
    </div>
  );

  return (
    <MobileContainer>
      {currentScreen === 'splash' && <SplashScreen onComplete={() => navigate('welcome')} />}
      {currentScreen === 'welcome' && (
        <WelcomeCarousel
          onComplete={() => navigate('signup-email')}
          onSkip={() => navigate('signin')}
        />
      )}
      {currentScreen === 'signup-email' && (
        <SignUpEmail
          onContinue={(email) => navigate('signup-password', { email })}
          onSignIn={() => navigate('signin')}
          onBack={() => navigate('welcome')}
          onViewTerms={() => navigate('signup-terms')}
          onViewPrivacy={() => navigate('signup-privacy')}
        />
      )}
      {currentScreen === 'signup-terms' && (
        <PolicyDetail
          policyType="terms"
          onBack={() => navigate('signup-email')}
        />
      )}
      {currentScreen === 'signup-privacy' && (
        <PolicyDetail
          policyType="privacy"
          onBack={() => navigate('signup-email')}
        />
      )}
      {currentScreen === 'signup-password' && (
        <SignUpPassword
          onContinue={(password) => navigate('signup-otp', { password })}
          onBack={() => navigate('signup-email')}
        />
      )}
      {currentScreen === 'signup-otp' && (
        <SignUpOTP 
          email={userData.email}
          onVerify={() => navigate('signup-success')}
          onBack={() => navigate('signup-password')}
        />
      )}
      {currentScreen === 'signup-success' && (
        <SignUpSuccess 
          onSetupProfile={() => navigate('consent')}
          onSkip={() => navigate('home')}
        />
      )}
      {currentScreen === 'consent' && (
        <ConsentScreen 
          onContinue={() => navigate('onboarding-intro')}
          onBack={() => navigate('signup-success')}
          onViewPrivacy={() => navigate('privacy-policy')}
          onViewHIPAA={() => navigate('hipaa-notice')}
          onViewDisclaimer={() => navigate('medical-disclaimer')}
        />
      )}
      {currentScreen === 'privacy-policy' && (
        <PrivacyPolicy 
          onBack={() => navigate('consent')}
        />
      )}
      {currentScreen === 'hipaa-notice' && (
        <HIPAANotice 
          onBack={() => navigate('consent')}
        />
      )}
      {currentScreen === 'medical-disclaimer' && (
        <MedicalDisclaimer 
          onUnderstand={() => navigate('consent')}
          onBack={() => navigate('consent')}
        />
      )}
      {currentScreen === 'signin' && (
        <SignIn
          onSignIn={() => navigate('home')}
          onForgotPassword={() => navigate('forgot-password-email')}
          onCreateAccount={() => navigate('signup-email')}
          onBack={() => navigate('welcome')}
        />
      )}
      {currentScreen === 'forgot-password-email' && (
        <ForgotPasswordEmail 
          onSendCode={(email) => navigate('forgot-password-otp', { resetEmail: email })}
          onBack={() => navigate('signin')}
        />
      )}
      {currentScreen === 'forgot-password-otp' && (
        <ForgotPasswordOTP 
          email={userData.resetEmail}
          onVerify={() => navigate('forgot-password-new')}
          onBack={() => navigate('forgot-password-email')}
        />
      )}
      {currentScreen === 'forgot-password-new' && (
        <ForgotPasswordNew 
          onReset={() => navigate('forgot-password-success')}
          onBack={() => navigate('forgot-password-otp')}
        />
      )}
      {currentScreen === 'forgot-password-success' && (
        <ForgotPasswordSuccess 
          onBackToSignIn={() => navigate('signin')}
        />
      )}
      {currentScreen === 'home' && (
        <Dashboard 
          onStartSymptomCheck={() => navigate('symptom-checker-start')}
          onViewAppointments={() => navigate('upcoming-appointments')}
          onViewHistory={() => navigate('symptom-check-history')}
          onViewProfile={() => navigate('settings')}
          onViewFacility={(facilityId) => {
            // Map facility IDs to full provider objects
            const facilityData: { [key: string]: any } = {
              'facility-1': {
                id: 'facility-1',
                type: 'facility',
                name: 'UrgentCare Center - Downtown',
                specialty: 'Urgent Care',
                rating: 4.8,
                reviewCount: 234,
                distance: '0.8 miles',
                nextAvailable: 'Open Now',
                image: '🏥',
                acceptingNew: true,
                facilityType: 'Urgent Care',
                servicesCount: 15,
                hoursToday: 'Open until 9:00 PM'
              },
              'facility-2': {
                id: 'facility-2',
                type: 'facility',
                name: 'HealthFirst Urgent Care',
                specialty: 'Urgent Care',
                rating: 4.7,
                reviewCount: 189,
                distance: '1.2 miles',
                nextAvailable: 'Open Now',
                image: '🏥',
                acceptingNew: true,
                facilityType: 'Urgent Care',
                servicesCount: 12,
                hoursToday: 'Open until 8:00 PM'
              },
              'facility-3': {
                id: 'facility-3',
                type: 'facility',
                name: 'CityMed Urgent Care - Westside',
                specialty: 'Urgent Care',
                rating: 4.9,
                reviewCount: 312,
                distance: '2.4 miles',
                nextAvailable: 'Open Now',
                image: '🏥',
                acceptingNew: true,
                facilityType: 'Urgent Care',
                servicesCount: 18,
                hoursToday: 'Open 24 Hours'
              }
            };
            navigate('provider-profile', { selectedProvider: facilityData[facilityId] });
          }}
          userName={userData.firstName || 'John'}
        />
      )}
      {currentScreen === 'onboarding-intro' && (
        <OnboardingIntro 
          onStart={() => navigate('basic-info-name')}
        />
      )}
      {currentScreen === 'basic-info-name' && (
        <BasicInfoName 
          onContinue={(data) => navigate('basic-info-dobsex', data)}
          onBack={() => navigate('onboarding-intro')}
          initialData={userData}
        />
      )}
      {currentScreen === 'basic-info-dobsex' && (
        <BasicInfoDOBSex 
          onContinue={(data) => navigate('medical-history-intro', data)}
          onBack={() => navigate('basic-info-name')}
          initialData={userData}
        />
      )}
      {currentScreen === 'medical-history-intro' && (
        <MedicalHistoryIntro 
          onContinue={() => navigate('chronic-conditions')}
          onBack={() => navigate('basic-info-dobsex')}
        />
      )}
      {currentScreen === 'chronic-conditions' && (
        <ChronicConditions 
          onContinue={(conditions) => navigate('past-surgeries', { conditions })}
          onSkip={() => navigate('past-surgeries')}
          onBack={() => navigate('medical-history-intro')}
          initialData={userData.conditions}
        />
      )}
      {currentScreen === 'past-surgeries' && (
        <PastSurgeries 
          onContinue={(surgeries) => navigate('family-history', { surgeries })}
          onSkip={() => navigate('family-history')}
          onBack={() => navigate('chronic-conditions')}
          initialData={userData.surgeries}
        />
      )}
      {currentScreen === 'family-history' && (
        <FamilyHistory 
          onContinue={(familyHistory) => navigate('allergies', { familyHistory })}
          onSkip={() => navigate('allergies')}
          onBack={() => navigate('past-surgeries')}
          initialData={userData.familyHistory}
        />
      )}
      {currentScreen === 'allergies' && (
        <Allergies 
          onContinue={(allergies) => navigate('current-medications', { allergies })}
          onSkip={() => navigate('current-medications')}
          onBack={() => navigate('family-history')}
          initialData={userData.allergies}
        />
      )}
      {currentScreen === 'current-medications' && (
        <CurrentMedications 
          onContinue={(medications) => navigate('social-history', { medications })}
          onSkip={() => navigate('social-history')}
          onBack={() => navigate('allergies')}
          initialData={userData.medications}
        />
      )}
      {currentScreen === 'social-history' && (
        <SocialHistory 
          onContinue={(socialHistory) => navigate('lifestyle', { socialHistory })}
          onSkip={() => navigate('lifestyle')}
          onBack={() => navigate('current-medications')}
          initialData={userData.socialHistory}
        />
      )}
      {currentScreen === 'lifestyle' && (
        <Lifestyle 
          onContinue={(lifestyle) => navigate('insurance-intro', { lifestyle })}
          onSkip={() => navigate('insurance-intro')}
          onBack={() => navigate('social-history')}
          initialData={userData.lifestyle}
        />
      )}
      {currentScreen === 'insurance-intro' && (
        <InsuranceIntro 
          onAddInsurance={() => navigate('insurance-provider-selection')}
          onNoInsurance={() => navigate('location-setup')}
          onBack={() => navigate('lifestyle')}
        />
      )}
      {currentScreen === 'insurance-provider-selection' && (
        <InsuranceProviderSelection 
          onSelectProvider={(provider) => navigate('insurance-member-details', { insuranceProvider: provider })}
          onBack={() => navigate('insurance-intro')}
        />
      )}
      {currentScreen === 'insurance-member-details' && (
        <InsuranceMemberDetails 
          providerName={userData.insuranceProvider || 'Blue Cross Blue Shield'}
          onContinue={(data) => navigate('insurance-card-photo', data)}
          onBack={() => navigate('insurance-provider-selection')}
          initialData={userData}
        />
      )}
      {currentScreen === 'insurance-card-photo' && (
        <InsuranceCardPhoto 
          onContinue={(photos) => navigate('location-setup', { insurancePhotos: photos })}
          onSkip={() => navigate('location-setup')}
          onBack={() => navigate('insurance-member-details')}
          initialData={userData.insurancePhotos}
        />
      )}
      {currentScreen === 'location-setup' && (
        <LocationSetup 
          onContinue={(location) => navigate('location-radius', { location })}
          onBack={() => navigate('insurance-card-photo')}
          initialData={userData.location}
        />
      )}
      {currentScreen === 'location-radius' && (
        <LocationRadius 
          onContinue={(radius) => {
            // When from settings, go back to settings, otherwise continue onboarding
            if (previousScreen === 'settings') {
              navigate('settings', { radius });
            } else {
              navigate('onboarding-complete', { radius });
            }
          }}
          onBack={() => {
            // When from settings, go back to settings, otherwise go to location-setup
            if (previousScreen === 'settings') {
              navigate('settings');
            } else {
              navigate('location-setup');
            }
          }}
          initialData={userData.radius}
        />
      )}
      {currentScreen === 'onboarding-complete' && (
        <OnboardingComplete 
          onStartFindingCare={() => navigate('dashboard')}
        />
      )}
      
      {/* Phase 4: Main App Experience */}
      {currentScreen === 'dashboard' && (
        <Dashboard 
          onStartSymptomCheck={() => navigate('symptom-checker-start')}
          onViewAppointments={() => navigate('upcoming-appointments')}
          onViewHistory={() => navigate('symptom-check-history')}
          onViewProfile={() => navigate('settings')}
          onViewFacility={(facilityId) => {
            // Map facility IDs to full provider objects
            const facilityData: { [key: string]: any } = {
              'facility-1': {
                id: 'facility-1',
                type: 'facility',
                name: 'UrgentCare Center - Downtown',
                specialty: 'Urgent Care',
                rating: 4.8,
                reviewCount: 234,
                distance: '0.8 miles',
                nextAvailable: 'Open Now',
                image: '🏥',
                acceptingNew: true,
                facilityType: 'Urgent Care',
                servicesCount: 15,
                hoursToday: 'Open until 9:00 PM'
              },
              'facility-2': {
                id: 'facility-2',
                type: 'facility',
                name: 'HealthFirst Urgent Care',
                specialty: 'Urgent Care',
                rating: 4.7,
                reviewCount: 189,
                distance: '1.2 miles',
                nextAvailable: 'Open Now',
                image: '🏥',
                acceptingNew: true,
                facilityType: 'Urgent Care',
                servicesCount: 12,
                hoursToday: 'Open until 8:00 PM'
              },
              'facility-3': {
                id: 'facility-3',
                type: 'facility',
                name: 'CityMed Urgent Care - Westside',
                specialty: 'Urgent Care',
                rating: 4.9,
                reviewCount: 312,
                distance: '2.4 miles',
                nextAvailable: 'Open Now',
                image: '🏥',
                acceptingNew: true,
                facilityType: 'Urgent Care',
                servicesCount: 18,
                hoursToday: 'Open 24 Hours'
              }
            };
            navigate('provider-profile', { selectedProvider: facilityData[facilityId] });
          }}
          userName={userData.firstName || 'John'}
        />
      )}
      
      {currentScreen === 'symptom-checker-start' && (
        <SymptomCheckerStart 
          onStart={() => navigate('symptom-checker-chat')}
          onBack={() => navigate('dashboard')}
        />
      )}
      
      {currentScreen === 'symptom-checker-chat' && (
        <SymptomCheckerChat 
          onComplete={(symptoms) => navigate('provider-search', { symptoms })}
          onBack={() => navigate('symptom-checker-start')}
          sessionId={currentSessionId}
          initialMessages={getCurrentSession()?.messages}
          onSaveMessages={updateSessionMessages}
          onCreateSession={createNewSession}
          onMarkComplete={markSessionComplete}
        />
      )}
      
      {currentScreen === 'ros-intro' && (
        <ROSIntro 
          onStart={() => navigate('ros-general')}
          onSkip={() => navigate('appointment-confirmation')}
          onBack={() => navigate('appointment-time-selection')}
        />
      )}
      
      {currentScreen === 'ros-general' && (
        <ROSGeneral 
          onContinue={(responses) => navigate('ros-head-neck', { rosGeneral: responses })}
          onBack={() => navigate('ros-intro')}
          initialData={userData.rosGeneral}
        />
      )}
      
      {currentScreen === 'ros-head-neck' && (
        <ROSHeadNeck 
          onContinue={(responses) => navigate('ros-eyes', { rosHeadNeck: responses })}
          onBack={() => navigate('ros-general')}
          initialData={userData.rosHeadNeck}
        />
      )}
      
      {currentScreen === 'ros-eyes' && (
        <ROSEyes 
          onContinue={(responses) => navigate('ros-ears-nose-throat', { rosEyes: responses })}
          onBack={() => navigate('ros-head-neck')}
          initialData={userData.rosEyes}
        />
      )}
      
      {currentScreen === 'ros-ears-nose-throat' && (
        <ROSEarsNoseThroat 
          onContinue={(responses) => navigate('ros-cardiovascular', { rosEarsNoseThroat: responses })}
          onBack={() => navigate('ros-eyes')}
          initialData={userData.rosEarsNoseThroat}
        />
      )}
      
      {currentScreen === 'ros-cardiovascular' && (
        <ROSCardiovascular 
          onContinue={(responses) => navigate('ros-respiratory', { rosCardiovascular: responses })}
          onBack={() => navigate('ros-ears-nose-throat')}
          initialData={userData.rosCardiovascular}
        />
      )}
      
      {currentScreen === 'ros-respiratory' && (
        <ROSRespiratory 
          onContinue={(responses) => navigate('ros-gastrointestinal', { rosRespiratory: responses })}
          onBack={() => navigate('ros-cardiovascular')}
          initialData={userData.rosRespiratory}
        />
      )}
      
      {currentScreen === 'ros-gastrointestinal' && (
        <ROSGastrointestinal 
          onContinue={(responses) => navigate('ros-musculoskeletal', { rosGastrointestinal: responses })}
          onBack={() => navigate('ros-respiratory')}
          initialData={userData.rosGastrointestinal}
        />
      )}
      
      {currentScreen === 'ros-musculoskeletal' && (
        <ROSMusculoskeletal 
          onContinue={(responses) => navigate('ros-complete', { rosMusculoskeletal: responses })}
          onBack={() => navigate('ros-gastrointestinal')}
          initialData={userData.rosMusculoskeletal}
        />
      )}
      
      {currentScreen === 'ros-complete' && (
        <ROSComplete 
          onViewResults={() => navigate('appointment-confirmation')}
          onGoHome={() => navigate('dashboard')}
          onBack={() => navigate('ros-musculoskeletal')}
        />
      )}
      
      {currentScreen === 'provider-search' && (
        <ProviderSearch 
          onSelectProvider={(provider) => navigate('provider-profile', { selectedProvider: provider })}
          onBack={() => navigate('dashboard')}
        />
      )}
      
      {currentScreen === 'provider-profile' && (
        <ProviderProfile 
          provider={userData.selectedProvider || {
            id: '1',
            name: 'Dr. Sarah Johnson',
            specialty: 'Primary Care Physician',
            rating: 4.9,
            reviewCount: 127,
            distance: '2.3 miles',
            nextAvailable: 'Today at 2:00 PM',
            image: '👩‍⚕️',
            acceptingNew: true
          }}
          onBookAppointment={() => navigate('appointment-time-selection')}
          onBack={() => navigate('provider-search')}
        />
      )}
      
      {currentScreen === 'appointment-time-selection' && (
        <AppointmentTimeSelection 
          providerName={userData.selectedProvider?.name || 'Dr. Sarah Johnson'}
          onSelectTime={(date, time) => navigate('ros-intro', { appointmentDate: date, appointmentTime: time })}
          onBack={() => navigate('provider-profile')}
        />
      )}
      
      {currentScreen === 'appointment-confirmation' && (
        <AppointmentConfirmation 
          providerName={userData.selectedProvider?.name || 'Dr. Sarah Johnson'}
          date={userData.appointmentDate || '2026-01-10'}
          time={userData.appointmentTime || '10:00 AM'}
          onGoHome={() => navigate('dashboard')}
          onViewAppointments={() => navigate('dashboard')}
        />
      )}
      
      {currentScreen === 'appointment-reason' && (
        <AppointmentReason 
          providerName={userData.selectedProvider?.name || 'Dr. Sarah Johnson'}
          onContinue={(reason, details) => navigate('appointment-review', { appointmentReason: reason, appointmentDetails: details })}
          onBack={() => navigate('appointment-time-selection')}
        />
      )}
      
      {currentScreen === 'appointment-review' && (
        <AppointmentReview 
          providerName={userData.selectedProvider?.name || 'Dr. Sarah Johnson'}
          date={userData.appointmentDate || '2026-01-10'}
          time={userData.appointmentTime || '10:00 AM'}
          reason={userData.appointmentReason || 'Follow-up visit'}
          details={userData.appointmentDetails}
          onConfirm={() => navigate('appointment-confirmation')}
          onBack={() => navigate('appointment-reason')}
        />
      )}
      
      {/* Phase 5: Appointments Management */}
      {currentScreen === 'upcoming-appointments' && (
        <UpcomingAppointments
          onViewDetails={(appointment) => navigate('appointment-details', { currentAppointment: appointment })}
          onBack={() => navigate('dashboard')}
          initialFilter={userData.appointmentFilter}
          onMarkComplete={() => navigate('upcoming-appointments', { appointmentFilter: 'completed' })}
          onLeaveReview={(appointment) => navigate('provider-feedback', { currentAppointment: appointment })}
          onViewHistory={() => navigate('symptom-check-history')}
          onViewProfile={() => navigate('settings')}
          onNavigateChat={() => navigate('symptom-checker-start')}
          onCompleteROS={(appointmentId) => navigate('ros-intro')}
        />
      )}
      
      {currentScreen === 'appointment-details' && (
        <AppointmentDetails 
          appointment={userData.currentAppointment || {
            id: '1',
            providerName: 'Dr. Sarah Johnson',
            specialty: 'Primary Care Physician',
            date: '2026-01-15',
            time: '10:00 AM',
            status: 'confirmed'
          }}
          onReschedule={() => navigate('reschedule-appointment')}
          onCancel={() => navigate('cancel-appointment')}
          onMarkComplete={() => navigate('upcoming-appointments', { appointmentFilter: 'completed' })}
          onLeaveReview={() => navigate('provider-feedback')}
          onCompleteROS={() => navigate('ros-intro')}
          onBack={() => navigate('upcoming-appointments')}
        />
      )}
      
      {currentScreen === 'reschedule-appointment' && (
        <RescheduleAppointment 
          providerName={userData.currentAppointment?.providerName || 'Dr. Sarah Johnson'}
          currentDate={userData.currentAppointment?.date || '2026-01-15'}
          currentTime={userData.currentAppointment?.time || '10:00 AM'}
          onConfirmReschedule={(newDate, newTime) => navigate('reschedule-confirmation', { rescheduledDate: newDate, rescheduledTime: newTime })}
          onBack={() => navigate('appointment-details')}
        />
      )}
      
      {currentScreen === 'reschedule-confirmation' && (
        <RescheduleConfirmation 
          providerName={userData.currentAppointment?.providerName || 'Dr. Sarah Johnson'}
          newDate={userData.rescheduledDate || '2026-01-20'}
          newTime={userData.rescheduledTime || '2:00 PM'}
          onViewAppointment={() => navigate('appointment-details')}
          onGoHome={() => navigate('dashboard')}
        />
      )}
      
      {currentScreen === 'cancel-appointment' && (
        <CancelAppointment 
          providerName={userData.currentAppointment?.providerName || 'Dr. Sarah Johnson'}
          date={userData.currentAppointment?.date || '2026-01-15'}
          time={userData.currentAppointment?.time || '10:00 AM'}
          onConfirmCancel={(reason, info) => navigate('cancel-confirmation', { cancelReason: reason, cancelInfo: info })}
          onBack={() => navigate('appointment-details')}
        />
      )}
      
      {currentScreen === 'cancel-confirmation' && (
        <CancelConfirmation 
          providerName={userData.currentAppointment?.providerName || 'Dr. Sarah Johnson'}
          onFindNewProvider={() => navigate('provider-search')}
          onGoHome={() => navigate('dashboard')}
        />
      )}
      
      {currentScreen === 'check-in' && (
        <CheckIn 
          providerName={userData.currentAppointment?.providerName || 'Dr. Sarah Johnson'}
          appointmentTime={userData.currentAppointment?.time || '10:00 AM'}
          onCompleteCheckIn={() => navigate('check-in-success')}
          onBack={() => navigate('appointment-details')}
        />
      )}
      
      {currentScreen === 'check-in-success' && (
        <CheckInSuccess 
          providerName={userData.currentAppointment?.providerName || 'Dr. Sarah Johnson'}
          estimatedWaitTime={15}
          onViewAppointment={() => navigate('appointment-details')}
          onGoHome={() => navigate('dashboard')}
        />
      )}
      
      {currentScreen === 'past-appointments' && (
        <PastAppointments 
          onViewDetails={(appointment) => navigate('past-appointment-details', { pastAppointment: appointment })}
          onBack={() => navigate('dashboard')}
        />
      )}
      
      {currentScreen === 'past-appointment-details' && (
        <PastAppointmentDetails 
          appointment={userData.pastAppointment || {
            id: '1',
            providerName: 'Dr. Sarah Johnson',
            specialty: 'Primary Care Physician',
            date: '2026-01-08',
            time: '10:00 AM',
            diagnosis: 'Upper Respiratory Infection',
            type: 'in-person',
            hasDocuments: true
          }}
          onBookFollowUp={() => navigate('provider-search')}
          onBack={() => navigate('past-appointments')}
        />
      )}
      
      {currentScreen === 'appointment-history' && (
        <AppointmentHistory 
          onViewPast={() => navigate('past-appointments')}
          onViewUpcoming={() => navigate('upcoming-appointments')}
          onBack={() => navigate('dashboard')}
        />
      )}
      
      {/* Phase 6: Medical Records and Feedback */}
      {currentScreen === 'medical-records' && (
        <MedicalRecords
          onViewConditions={() => navigate('medical-records')}
          onViewAllergies={() => navigate('medical-records')}
          onBack={() => navigate('dashboard')}
        />
      )}
      
      
      {currentScreen === 'provider-feedback' && (
        <ProviderFeedback 
          providerName={userData.currentAppointment?.providerName || 'Dr. Sarah Johnson'}
          appointmentDate={userData.currentAppointment?.date || '2026-01-08'}
          onSubmit={(rating, feedback) => navigate('feedback-success', { feedbackRating: rating, feedbackText: feedback })}
          onSkip={() => navigate('dashboard')}
          onBack={() => navigate('past-appointment-details')}
        />
      )}
      
      {currentScreen === 'feedback-success' && (
        <FeedbackSuccess 
          providerName={userData.currentAppointment?.providerName || 'Dr. Sarah Johnson'}
          rating={userData.feedbackRating || 5}
          onGoHome={() => navigate('dashboard')}
          onViewHistory={() => navigate('my-feedback-history')}
        />
      )}
      
      {currentScreen === 'app-feedback' && (
        <AppFeedback 
          onSubmit={(rating, feedback, category) => navigate('feedback-success', { feedbackRating: rating })}
          onSkip={() => navigate('dashboard')}
          onBack={() => navigate('dashboard')}
        />
      )}
      
      {currentScreen === 'my-feedback-history' && (
        <MyFeedbackHistory 
          onViewFeedback={(id) => navigate('my-feedback-history')}
          onProvideFeedback={() => navigate('provider-feedback')}
          onBack={() => navigate('dashboard')}
        />
      )}
      
      {/* Phase 7: Settings and Profile Management */}
      {currentScreen === 'settings' && (
        <Settings
          onNavigate={(section) => navigate(section)}
          onLogout={() => navigate('signin')}
          onBack={() => navigate('dashboard')}
          onNavigateHome={() => navigate('dashboard')}
          onNavigateAppointments={() => navigate('upcoming-appointments')}
          onNavigateChat={() => navigate('symptom-checker-start')}
          onNavigateHistory={() => navigate('symptom-check-history')}
        />
      )}
      
      {currentScreen === 'edit-profile' && (
        <EditProfile 
          onSave={(data) => navigate('settings', data)}
          onBack={() => navigate('settings')}
        />
      )}
      
      {currentScreen === 'notification-settings' && (
        <NotificationSettings 
          onSave={() => navigate('settings')}
          onBack={() => navigate('settings')}
        />
      )}
      
      {currentScreen === 'security-privacy' && (
        <SecurityPrivacy 
          onNavigate={(section) => navigate(section)}
          onBack={() => navigate('settings')}
        />
      )}
      
      {currentScreen === 'change-password' && (
        <ChangePassword 
          onSave={() => navigate('settings')}
          onBack={() => navigate('security-privacy')}
        />
      )}
      
      {currentScreen === 'insurance-management' && (
        <InsuranceManagement 
          onAddInsurance={() => navigate('settings')}
          onEditInsurance={() => navigate('settings')}
          onBack={() => navigate('settings')}
        />
      )}
      
      
      {currentScreen === 'medical-history' && (
        <MedicalHistoryView 
          onBack={() => navigate('settings')}
          onEdit={(section) => navigate(section)}
          userData={userData}
        />
      )}
      
      {currentScreen === 'help-support' && (
        <HelpSupport onBack={() => navigate('settings')} />
      )}
      
      {currentScreen === 'faq' && (
        <FAQ onBack={() => navigate('settings')} />
      )}
      
      {currentScreen === 'contact-support' && (
        <ContactSupport onBack={() => navigate('settings')} />
      )}
      
      {currentScreen === 'legal' && (
        <LegalPolicies onBack={() => navigate('settings')} onNavigate={navigate} />
      )}
      
      {currentScreen === 'policy-privacy' && (
        <PolicyDetail policyType="privacy" onBack={() => navigate('legal')} />
      )}
      
      {currentScreen === 'policy-terms' && (
        <PolicyDetail policyType="terms" onBack={() => navigate('legal')} />
      )}
      
      {currentScreen === 'policy-data' && (
        <PolicyDetail policyType="data" onBack={() => navigate('legal')} />
      )}
      
      {currentScreen === 'policy-disclaimer' && (
        <PolicyDetail policyType="disclaimer" onBack={() => navigate('legal')} />
      )}
      
      {currentScreen === 'policy-hipaa' && (
        <PolicyDetail policyType="hipaa" onBack={() => navigate('legal')} />
      )}
      
      {/* Phase 8: Alerts and Modals */}
      {currentScreen === 'emergency-alert' && (
        <EmergencyAlert 
          onCall911={() => navigate('dashboard')}
          onDismiss={() => navigate('dashboard')}
        />
      )}
      
      {/* Symptom Check History */}
      {currentScreen === 'symptom-check-history' && (
        <SymptomCheckHistory
          sessions={chatSessions}
          onViewTranscript={(sessionId) => navigate('symptom-check-transcript', { viewingSessionId: sessionId })}
          onResumeSession={(sessionId) => {
            setCurrentSessionId(sessionId);
            navigate('symptom-checker-chat');
          }}
          onDeleteSession={deleteSession}
          onBack={() => navigate('dashboard')}
          onNavigateHome={() => navigate('dashboard')}
          onNavigateAppointments={() => navigate('upcoming-appointments')}
          onNavigateChat={() => navigate('symptom-checker-start')}
          onNavigateProfile={() => navigate('settings')}
        />
      )}
      
      {currentScreen === 'symptom-check-transcript' && (
        <SymptomCheckTranscript
          session={getSessionById(userData.viewingSessionId) || chatSessions[0]}
          onBack={() => navigate('symptom-check-history')}
          onFindCare={() => navigate('provider-search')}
        />
      )}
    </MobileContainer>
  );
}
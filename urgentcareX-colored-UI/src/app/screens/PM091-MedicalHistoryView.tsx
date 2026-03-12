// PM-091: Medical History View Screen
import { ArrowLeft, Edit2, Plus } from 'lucide-react';

interface MedicalHistoryViewProps {
  onBack: () => void;
  onEdit: (section: string) => void;
  userData?: any;
}

// Define types for structured data
interface Allergy {
  allergen: string;
  type: string;
  reaction: string;
  severity: string;
}

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  purpose: string;
}

interface Surgery {
  id: string;
  type: string;
  year: string;
}

export default function MedicalHistoryView({ onBack, onEdit, userData = {} }: MedicalHistoryViewProps) {
  // Process allergies - they might be objects or strings
  const processAllergies = () => {
    if (!userData.allergies || userData.allergies.length === 0) return null;
    
    return userData.allergies.map((allergy: any) => {
      if (typeof allergy === 'string') {
        return allergy;
      }
      // If it's an object with allergen property
      return `${allergy.allergen} (${allergy.type}) - ${allergy.severity}`;
    });
  };

  // Process medications - they might be objects or strings
  const processMedications = () => {
    if (!userData.medications || userData.medications.length === 0) return null;
    
    return userData.medications.map((med: any) => {
      if (typeof med === 'string') {
        return med;
      }
      // If it's an object with medication properties
      return `${med.name} ${med.dosage} - ${med.frequency}`;
    });
  };

  // Process surgeries - they might be objects or strings
  const processSurgeries = () => {
    if (!userData.surgeries || userData.surgeries.length === 0) return null;
    
    return userData.surgeries.map((surgery: any) => {
      if (typeof surgery === 'string') {
        return surgery;
      }
      // If it's an object with surgery properties
      return `${surgery.type} (${surgery.year})`;
    });
  };

  // Mock data with fallbacks - in a real app this would come from userData
  const chronicConditions = userData.conditions || ['Hypertension', 'Type 2 Diabetes'];
  const allergies = processAllergies() || ['Penicillin', 'Shellfish'];
  const medications = processMedications() || ['Metformin 500mg - Twice daily', 'Lisinopril 10mg - Once daily'];
  const surgeries = processSurgeries() || ['Appendectomy (2018)', 'Knee Surgery (2020)'];
  const familyHistory = userData.familyHistory || ['Heart Disease (Father)', 'Diabetes (Mother)'];
  const socialHistory = userData.socialHistory || {
    smoking: 'Never',
    alcohol: 'Occasional',
    exercise: '3-4 times per week'
  };

  const InfoCard = ({ 
    title, 
    icon, 
    items, 
    onEditClick 
  }: { 
    title: string; 
    icon: string; 
    items: string[] | null; 
    onEditClick: () => void;
  }) => (
    <div className="bg-white border border-[#D72638]/20 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <h3 className="text-base font-semibold text-[#1F2937]">{title}</h3>
        </div>
        <button 
          onClick={onEditClick}
          className="p-2 hover:bg-[#FEF2F2] rounded-lg transition-colors"
        >
          <Edit2 className="w-4 h-4 text-[#D72638]" />
        </button>
      </div>
      
      {items && items.length > 0 ? (
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-[#6B7280] text-sm mt-0.5">•</span>
              <p className="text-sm text-[#1F2937]">{item}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-[#6B7280] italic">No {title.toLowerCase()} recorded</p>
      )}
    </div>
  );

  const SocialHistoryCard = () => (
    <div className="bg-white border border-[#D72638]/20 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏃</span>
          <h3 className="text-base font-semibold text-[#1F2937]">Lifestyle & Social History</h3>
        </div>
        <button 
          onClick={() => onEdit('social-history')}
          className="p-2 hover:bg-[#FEF2F2] rounded-lg transition-colors"
        >
          <Edit2 className="w-4 h-4 text-[#D72638]" />
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#6B7280]">Smoking:</span>
          <span className="text-sm font-medium text-[#1F2937]">{socialHistory.smoking}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#6B7280]">Alcohol:</span>
          <span className="text-sm font-medium text-[#1F2937]">{socialHistory.alcohol}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#6B7280]">Exercise:</span>
          <span className="text-sm font-medium text-[#1F2937]">{socialHistory.exercise}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h2 className="text-lg font-semibold text-white">Health Profile</h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {/* Info Banner */}
        <div className="bg-[#FEF2F2] border border-[#D72638]/20 rounded-xl p-4">
          <p className="text-sm text-[#1F2937]">
            Keep your health profile up to date for better care recommendations and faster appointments.
          </p>
        </div>

        {/* Chronic Conditions */}
        <InfoCard 
          title="Chronic Conditions"
          icon="🏥"
          items={chronicConditions}
          onEditClick={() => onEdit('chronic-conditions')}
        />

        {/* Allergies */}
        <InfoCard 
          title="Allergies"
          icon="⚠️"
          items={allergies}
          onEditClick={() => onEdit('allergies')}
        />

        {/* Current Medications */}
        <InfoCard 
          title="Current Medications"
          icon="💊"
          items={medications}
          onEditClick={() => onEdit('current-medications')}
        />

        {/* Past Surgeries */}
        <InfoCard 
          title="Past Surgeries"
          icon="🔪"
          items={surgeries}
          onEditClick={() => onEdit('past-surgeries')}
        />

        {/* Family History */}
        <InfoCard 
          title="Family History"
          icon="👨‍👩‍👧‍👦"
          items={familyHistory}
          onEditClick={() => onEdit('family-history')}
        />

        {/* Social History */}
        <SocialHistoryCard />

        {/* Add New Button */}
        <button 
          onClick={() => onEdit('chronic-conditions')}
          className="w-full flex items-center justify-center gap-2 p-4 bg-white border-2 border-dashed border-[#D72638]/20 rounded-xl hover:border-[#D72638] transition-colors"
        >
          <Plus className="w-5 h-5 text-[#D72638]" />
          <span className="text-base font-medium text-[#D72638]">Update Medical Information</span>
        </button>

        {/* Last Updated */}
        <div className="text-center pt-2 pb-4">
          <p className="text-xs text-[#6B7280]">Last updated: January 10, 2026</p>
        </div>
      </div>
    </div>
  );
}
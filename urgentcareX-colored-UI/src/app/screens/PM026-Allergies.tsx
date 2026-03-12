import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { ArrowLeft, X } from 'lucide-react';

interface Allergy {
  allergen: string;
  type: string;
  reaction: string;
  severity: string;
}

interface AllergiesProps {
  onContinue: (allergies: Allergy[]) => void;
  onSkip: () => void;
  onBack: () => void;
  initialData?: Allergy[];
}

const ALLERGY_TYPES = ['Medication', 'Food', 'Environmental', 'Other'];
const REACTIONS = ['Rash', 'Itching', 'Swelling', 'Breathing difficulty', 'Anaphylaxis', 'Nausea', 'Hives'];
const SEVERITIES = ['Mild', 'Moderate', 'Severe'];

// Common allergens by type
const COMMON_ALLERGENS: { [key: string]: string[] } = {
  'Medication': ['Penicillin', 'Aspirin', 'Ibuprofen', 'Amoxicillin', 'Codeine', 'Sulfa drugs', 'Morphine', 'Other'],
  'Food': ['Peanuts', 'Tree nuts', 'Shellfish', 'Milk', 'Eggs', 'Wheat', 'Soy', 'Fish', 'Other'],
  'Environmental': ['Pollen', 'Dust mites', 'Mold', 'Pet dander', 'Bee stings', 'Latex', 'Other'],
  'Other': ['Other']
};

export default function Allergies({ onContinue, onSkip, onBack, initialData = [] }: AllergiesProps) {
  const [allergies, setAllergies] = useState<Allergy[]>(
    initialData.length > 0 ? initialData : [
      { allergen: 'Penicillin', type: 'Medication', reaction: 'Rash', severity: 'Moderate' },
      { allergen: 'Peanuts', type: 'Food', reaction: 'Anaphylaxis', severity: 'Severe' }
    ]
  );
  const [noneSelected, setNoneSelected] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAllergy, setNewAllergy] = useState<Allergy>({
    allergen: '',
    type: '',
    reaction: '',
    severity: ''
  });
  const [customAllergen, setCustomAllergen] = useState('');

  const handleAddAllergy = () => {
    if (newAllergy.allergen && newAllergy.type && newAllergy.reaction && newAllergy.severity) {
      setAllergies([...allergies, newAllergy]);
      setNewAllergy({ allergen: '', type: '', reaction: '', severity: '' });
      setShowAddModal(false);
      setNoneSelected(false);
    }
  };

  const handleRemoveAllergy = (index: number) => {
    setAllergies(allergies.filter((_, i) => i !== index));
  };

  const handleNoneToggle = () => {
    setNoneSelected(!noneSelected);
    if (!noneSelected) {
      setAllergies([]);
    }
  };

  const handleContinue = () => {
    onContinue(noneSelected ? [] : allergies);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Medication': return '💊';
      case 'Food': return '🦐';
      case 'Environmental': return '🌿';
      default: return '⚠️';
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Progress */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#D72638] px-4 py-4">
        <button onClick={onBack} className="p-2 mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="px-2">
          <p className="text-sm font-medium text-white/80 mb-2">
            Step 4 of 9
          </p>
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '44.44%' }}></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Headline */}
          <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
            Allergies
          </h1>

          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-6">
            Do you have any allergies?
          </p>

          {/* Add Allergy Button */}
          <Button 
            onClick={() => setShowAddModal(true)}
            variant="outline"
            className="w-full h-[52px] border-[#D72638]/20 text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2] mb-6"
          >
            + Add Allergy
          </Button>

          {/* Your Allergies */}
          {allergies.length > 0 && (
            <>
              <h3 className="text-base font-semibold text-[#1F2937] mb-4">
                Your Allergies
              </h3>
              <div className="space-y-3 mb-6">
                {allergies.map((allergy, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#D72638]/20 rounded-xl p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{getTypeIcon(allergy.type)}</span>
                        <p className="text-base font-semibold text-[#1F2937]">
                          {allergy.allergen}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveAllergy(index)}
                        className="p-2 hover:bg-[#FEF2F2] rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-[#6B7280]" />
                      </button>
                    </div>
                    <p className="text-sm text-[#6B7280] mb-1">
                      Type: {allergy.type}
                    </p>
                    <p className="text-sm text-[#6B7280] mb-2">
                      Severity: {allergy.severity}
                    </p>
                    {allergy.reaction && (
                      <p className="text-sm text-[#6B7280]">
                        Reaction: {allergy.reaction}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* None of the above */}
          <div
            onClick={handleNoneToggle}
            className="flex items-center gap-3 cursor-pointer mb-6 p-4 bg-[#FEF2F2] rounded-xl"
          >
            <Checkbox
              checked={noneSelected}
              onCheckedChange={handleNoneToggle}
            />
            <label className="text-base text-[#1F2937] cursor-pointer flex-1">
              No known allergies (NKDA)
            </label>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="bg-white border-t border-[#D72638]/20 p-4">
        <div className="flex gap-3">
          <Button 
            onClick={onSkip}
            variant="outline"
            className="flex-1 h-[52px] border-[#D72638]/20 text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2]"
          >
            Skip all / Complete Later
          </Button>
          <Button
            onClick={handleContinue}
            className="flex-1 h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E]"
          >
            Continue
          </Button>
        </div>
      </div>

      {/* Add Allergy Modal */}
      {showAddModal && (
        <div className="absolute inset-0 bg-black/50 flex items-end z-50">
          <div className="bg-white w-full rounded-t-3xl p-6 animate-slide-up max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold text-[#1F2937] mb-6">Add Allergy</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Type
                </label>
                <select
                  value={newAllergy.type}
                  onChange={(e) => setNewAllergy({ ...newAllergy, type: e.target.value })}
                  className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base"
                >
                  <option value="">Select type...</option>
                  {ALLERGY_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Allergen
                </label>
                {newAllergy.type && newAllergy.type !== 'Other' ? (
                  <>
                    <select
                      value={newAllergy.allergen === customAllergen ? 'Other' : newAllergy.allergen}
                      onChange={(e) => {
                        if (e.target.value === 'Other') {
                          setCustomAllergen('');
                          setNewAllergy({ ...newAllergy, allergen: '' });
                        } else {
                          setNewAllergy({ ...newAllergy, allergen: e.target.value });
                        }
                      }}
                      className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base mb-3"
                    >
                      <option value="">Select allergen...</option>
                      {COMMON_ALLERGENS[newAllergy.type]?.map(allergen => (
                        <option key={allergen} value={allergen}>{allergen}</option>
                      ))}
                    </select>
                    {(newAllergy.allergen === 'Other' || customAllergen || (!COMMON_ALLERGENS[newAllergy.type]?.includes(newAllergy.allergen) && newAllergy.allergen)) && (
                      <input
                        type="text"
                        value={customAllergen || newAllergy.allergen}
                        onChange={(e) => {
                          setCustomAllergen(e.target.value);
                          setNewAllergy({ ...newAllergy, allergen: e.target.value });
                        }}
                        placeholder="Enter custom allergen"
                        className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base"
                      />
                    )}
                  </>
                ) : (
                  <input
                    type="text"
                    value={newAllergy.allergen}
                    onChange={(e) => setNewAllergy({ ...newAllergy, allergen: e.target.value })}
                    placeholder="e.g., Penicillin"
                    className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base"
                  />
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Reaction Type
                </label>
                <select
                  value={newAllergy.reaction}
                  onChange={(e) => setNewAllergy({ ...newAllergy, reaction: e.target.value })}
                  className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base"
                >
                  <option value="">Select reaction...</option>
                  {REACTIONS.map(reaction => (
                    <option key={reaction} value={reaction}>{reaction}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Severity
                </label>
                <select
                  value={newAllergy.severity}
                  onChange={(e) => setNewAllergy({ ...newAllergy, severity: e.target.value })}
                  className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base"
                >
                  <option value="">Select severity...</option>
                  {SEVERITIES.map(severity => (
                    <option key={severity} value={severity}>{severity}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={() => {
                  setShowAddModal(false);
                  setNewAllergy({ allergen: '', type: '', reaction: '', severity: '' });
                  setCustomAllergen('');
                }}
                variant="outline"
                className="flex-1 h-[52px] border-[#D72638]/20 text-[#1F2937] rounded-xl text-base font-medium"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleAddAllergy}
                disabled={!newAllergy.allergen || !newAllergy.type || !newAllergy.reaction || !newAllergy.severity}
                className="flex-1 h-[52px] bg-[#D72638] text-white rounded-xl text-base font-medium hover:bg-[#B91C2E] disabled:bg-[#FECDD3] disabled:text-[#9CA3AF]"
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
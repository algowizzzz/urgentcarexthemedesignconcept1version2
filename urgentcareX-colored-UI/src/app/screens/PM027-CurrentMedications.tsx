import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { ArrowLeft, X } from 'lucide-react';

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  purpose: string;
}

interface CurrentMedicationsProps {
  onContinue: (medications: Medication[]) => void;
  onSkip: () => void;
  onBack: () => void;
  initialData?: Medication[];
}

const FREQUENCIES = ['Once daily', 'Twice daily', 'Three times daily', 'Four times daily', 'As needed', 'Weekly'];

const DOSAGE_QUANTITIES = [
  '5', '10', '15', '20', '25', '50', '75', '100', '150', '200', '250', '300', '400', '500', '600', '750', '800', '1000', 'Other'
];

const DOSAGE_UNITS = [
  'mg', 'mcg', 'ml', 'g', 'IU', 'tablets', 'capsules', 'puffs', 'drops', 'Other'
];

const MEDICATIONS = [
  'Metformin',
  'Lisinopril',
  'Atorvastatin',
  'Amlodipine',
  'Omeprazole',
  'Levothyroxine',
  'Losartan',
  'Gabapentin',
  'Hydrochlorothiazide',
  'Sertraline',
  'Simvastatin',
  'Montelukast',
  'Escitalopram',
  'Pantoprazole',
  'Acetaminophen',
  'Ibuprofen',
  'Aspirin',
  'Prednisone',
  'Albuterol',
  'Fluticasone',
  'Other'
];

const PURPOSES = [
  'Diabetes',
  'Blood Pressure',
  'Cholesterol',
  'Heart Health',
  'Thyroid',
  'Pain Relief',
  'Acid Reflux',
  'Anxiety',
  'Depression',
  'Allergies',
  'Asthma',
  'Inflammation',
  'Infection',
  'Sleep',
  'Other'
];

export default function CurrentMedications({ onContinue, onSkip, onBack, initialData = [] }: CurrentMedicationsProps) {
  const [medications, setMedications] = useState<Medication[]>(
    initialData.length > 0 ? initialData : [
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', purpose: 'Blood pressure' },
      { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', purpose: 'Diabetes' }
    ]
  );
  const [noneSelected, setNoneSelected] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMedication, setNewMedication] = useState<Medication>({
    name: '',
    dosage: '',
    frequency: '',
    purpose: ''
  });
  const [dosageQuantity, setDosageQuantity] = useState('');
  const [dosageUnit, setDosageUnit] = useState('');
  const [customQuantity, setCustomQuantity] = useState('');
  const [customUnit, setCustomUnit] = useState('');

  // Get the effective dosage string
  const getEffectiveDosage = () => {
    const qty = dosageQuantity === 'Other' ? customQuantity : dosageQuantity;
    const unit = dosageUnit === 'Other' ? customUnit : dosageUnit;
    if (qty && unit) {
      return `${qty} ${unit}`;
    }
    return '';
  };

  const isDosageValid = () => {
    const qty = dosageQuantity === 'Other' ? customQuantity : dosageQuantity;
    const unit = dosageUnit === 'Other' ? customUnit : dosageUnit;
    return qty && unit;
  };

  const handleAddMedication = () => {
    const effectiveDosage = getEffectiveDosage();
    if (newMedication.name && effectiveDosage && newMedication.frequency) {
      setMedications([...medications, { ...newMedication, dosage: effectiveDosage }]);
      setNewMedication({ name: '', dosage: '', frequency: '', purpose: '' });
      setDosageQuantity('');
      setDosageUnit('');
      setCustomQuantity('');
      setCustomUnit('');
      setShowAddModal(false);
      setNoneSelected(false);
    }
  };

  const handleRemoveMedication = (index: number) => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  const handleNoneToggle = () => {
    setNoneSelected(!noneSelected);
    if (!noneSelected) {
      setMedications([]);
    }
  };

  const handleContinue = () => {
    onContinue(noneSelected ? [] : medications);
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
            Step 5 of 9
          </p>
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '55.56%' }}></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Headline */}
          <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
            Current Medications
          </h1>

          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-6">
            What medications do you take regularly?
          </p>

          {/* Add Medication Button */}
          <Button 
            onClick={() => setShowAddModal(true)}
            variant="outline"
            className="w-full h-[52px] border-[#D72638]/20 text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#FEF2F2] mb-6"
          >
            + Add Medication
          </Button>

          {/* Your Medications */}
          {medications.length > 0 && (
            <>
              <h3 className="text-base font-semibold text-[#1F2937] mb-4">
                Your Medications
              </h3>
              <div className="space-y-3 mb-6">
                {medications.map((medication, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#D72638]/20 rounded-xl p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">💊</span>
                        <p className="text-base font-semibold text-[#1F2937]">
                          {medication.name}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveMedication(index)}
                        className="p-2 hover:bg-[#FEF2F2] rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-[#6B7280]" />
                      </button>
                    </div>
                    <p className="text-sm text-[#6B7280] ml-7 mb-1">{medication.dosage}</p>
                    <p className="text-sm text-[#6B7280] ml-7 mb-1">{medication.frequency}</p>
                    {medication.purpose && (
                      <p className="text-sm text-[#6B7280] ml-7">For: {medication.purpose}</p>
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
              Not currently taking any medications
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

      {/* Add Medication Modal */}
      {showAddModal && (
        <div className="absolute inset-0 bg-black/50 flex items-end z-50">
          <div className="bg-white w-full rounded-t-3xl p-6 animate-slide-up max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold text-[#1F2937] mb-6">Add Medication</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Medication Name
                </label>
                <select
                  value={newMedication.name}
                  onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
                  className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base bg-white"
                >
                  <option value="">Select medication...</option>
                  {MEDICATIONS.map(med => (
                    <option key={med} value={med}>{med}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Dosage
                </label>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <select
                      value={dosageQuantity}
                      onChange={(e) => setDosageQuantity(e.target.value)}
                      className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base bg-white"
                    >
                      <option value="">Quantity...</option>
                      {DOSAGE_QUANTITIES.map(qty => (
                        <option key={qty} value={qty}>{qty}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1">
                    <select
                      value={dosageUnit}
                      onChange={(e) => setDosageUnit(e.target.value)}
                      className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base bg-white"
                    >
                      <option value="">Unit...</option>
                      {DOSAGE_UNITS.map(unit => (
                        <option key={unit} value={unit}>{unit}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Custom quantity input when "Other" is selected */}
                {dosageQuantity === 'Other' && (
                  <input
                    type="text"
                    value={customQuantity}
                    onChange={(e) => setCustomQuantity(e.target.value)}
                    placeholder="Enter quantity"
                    className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base mt-3"
                  />
                )}
                {/* Custom unit input when "Other" is selected */}
                {dosageUnit === 'Other' && (
                  <input
                    type="text"
                    value={customUnit}
                    onChange={(e) => setCustomUnit(e.target.value)}
                    placeholder="Enter unit"
                    className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base mt-3"
                  />
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Frequency
                </label>
                <select
                  value={newMedication.frequency}
                  onChange={(e) => setNewMedication({ ...newMedication, frequency: e.target.value })}
                  className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base bg-white"
                >
                  <option value="">Select frequency...</option>
                  {FREQUENCIES.map(freq => (
                    <option key={freq} value={freq}>{freq}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Purpose (Optional)
                </label>
                <select
                  value={newMedication.purpose}
                  onChange={(e) => setNewMedication({ ...newMedication, purpose: e.target.value })}
                  className="w-full h-[52px] px-4 rounded-xl border border-[#D72638]/20 text-base bg-white"
                >
                  <option value="">Select purpose...</option>
                  {PURPOSES.map(purpose => (
                    <option key={purpose} value={purpose}>{purpose}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => {
                  setShowAddModal(false);
                  setNewMedication({ name: '', dosage: '', frequency: '', purpose: '' });
                  setDosageQuantity('');
                  setDosageUnit('');
                  setCustomQuantity('');
                  setCustomUnit('');
                }}
                variant="outline"
                className="flex-1 h-[52px] border-[#D72638]/20 text-[#1F2937] rounded-xl text-base font-medium"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddMedication}
                disabled={!newMedication.name || !isDosageValid() || !newMedication.frequency}
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
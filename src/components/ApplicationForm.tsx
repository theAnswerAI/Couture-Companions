import React, { useState } from 'react';
import { InquiryFormData, Companion } from '../types';
import { ShieldCheck, ArrowRight, ArrowLeft, Heart, Award, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ApplicationFormProps {
  preferredCompanion?: Companion | null;
  companions: Companion[];
  onSuccess: () => void;
}

export default function ApplicationForm({ preferredCompanion, companions, onSuccess }: ApplicationFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryNo, setInquiryNo] = useState('');

  const [formData, setFormData] = useState<InquiryFormData>({
    salutation: 'Mr.',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    residenceType: 'Private Estate',
    cityState: '',
    hasPets: 'No, none currently',
    experienceLevel: 'Experienced Owner',
    lifestyleOverview: '',
    companionChoiceId: preferredCompanion?.id || '',
    additionalNotes: '',
    agreedToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleNext = () => {
    // Validate current step
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        alert('Please complete all contact details to proceed with registration.');
        return;
      }
    } else if (step === 2) {
      if (!formData.cityState || !formData.lifestyleOverview) {
        alert('Please tell us briefly about your city of residence and your companion lifestyle vision.');
        return;
      }
    }
    setStep((prev) => prev + 1);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      alert('Please read and agree to our Curation Philosophy and Ethical Placement Agreement.');
      return;
    }

    setIsSubmitting(true);
    // Simulate luxury API response / curation matching
    setTimeout(() => {
      const generatedNo = `CC-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryNo(generatedNo);
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccess();
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
      {/* Editorial Title */}
      <div className="text-center mb-16">
        <span className="font-sans text-[11px] tracking-[0.3em] text-amber-600 font-medium uppercase">
          Matchmaking alignment
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-wide font-light uppercase mt-3">
          Private Placement Registry
        </h2>
        <div className="w-12 h-[1px] bg-amber-600/60 mx-auto mt-6" />
        <p className="mt-4 text-xs md:text-sm text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
          Entry into the Companion Couture circle is reserved for individuals and families who pledge absolute emotional devotion and state-of-the-art care. Please complete our confidential registration below.
        </p>
      </div>

      <div className="bg-stone-50 border border-stone-200/50 p-6 md:p-12 relative overflow-hidden shadow-sm">
        {/* Subtle decorative crest in the background */}
        <div className="absolute right-0 top-0 opacity-[0.02] pointer-events-none transform translate-x-12 -translate-y-12">
          <Award size={400} className="text-stone-900" />
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="relative z-10">
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-12 text-[10px] tracking-[0.2em] uppercase font-sans text-stone-400">
                <span className={step >= 1 ? 'text-amber-600 font-medium' : ''}>1. Guardian Profile</span>
                <div className="h-[1px] bg-stone-200 flex-grow mx-4" />
                <span className={step >= 2 ? 'text-amber-600 font-medium' : ''}>2. Living & Alignment</span>
                <div className="h-[1px] bg-stone-200 flex-grow mx-4" />
                <span className={step >= 3 ? 'text-amber-600 font-medium' : ''}>3. Curation Agreement</span>
              </div>

              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-lg text-stone-800 tracking-wide mb-6 uppercase border-b border-stone-200/40 pb-2">
                    Primary Contact & Dignitary Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                    <div className="sm:col-span-1">
                      <label className="block text-[10px] tracking-[0.15em] uppercase text-stone-500 mb-2 font-medium">Salutation</label>
                      <select
                        name="salutation"
                        value={formData.salutation}
                        onChange={handleChange}
                        className="w-full bg-white text-stone-800 border border-stone-200 px-4 py-3 text-xs focus:border-amber-600/60 outline-none transition-all rounded-none"
                      >
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Ms.</option>
                        <option>Dr.</option>
                        <option>Honorable</option>
                      </select>
                    </div>
                    <div className="sm:col-span-1.5">
                      <label className="block text-[10px] tracking-[0.15em] uppercase text-stone-500 mb-2 font-medium">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-white text-stone-800 border border-stone-200 px-4 py-3 text-xs focus:border-amber-600/60 outline-none transition-all rounded-none"
                      />
                    </div>
                    <div className="sm:col-span-1.5">
                      <label className="block text-[10px] tracking-[0.15em] uppercase text-stone-500 mb-2 font-medium">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-white text-stone-800 border border-stone-200 px-4 py-3 text-xs focus:border-amber-600/60 outline-none transition-all rounded-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] tracking-[0.15em] uppercase text-stone-500 mb-2 font-medium">Private Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white text-stone-800 border border-stone-200 px-4 py-3 text-xs focus:border-amber-600/60 outline-none transition-all rounded-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.15em] uppercase text-stone-500 mb-2 font-medium">Direct Telephone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white text-stone-800 border border-stone-200 px-4 py-3 text-xs focus:border-amber-600/60 outline-none transition-all rounded-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase text-stone-500 mb-2 font-medium">
                      Select Preferred Companion (Optional Curation)
                    </label>
                    <select
                      name="companionChoiceId"
                      value={formData.companionChoiceId}
                      onChange={handleChange}
                      className="w-full bg-white text-stone-800 border border-stone-200 px-4 py-3 text-xs focus:border-amber-600/60 outline-none transition-all rounded-none"
                    >
                      <option value="">-- Let our Concierge Curate My Choice --</option>
                      {companions.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.breed})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-3 bg-stone-900 text-stone-100 text-xs tracking-widest uppercase font-medium hover:bg-amber-600 hover:text-stone-950 transition-all duration-300 flex items-center gap-2"
                    >
                      Continue to Alignment <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-lg text-stone-800 tracking-wide mb-6 uppercase border-b border-stone-200/40 pb-2">
                    Residency & Household Harmony
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] tracking-[0.15em] uppercase text-stone-500 mb-2 font-medium">Estate Typology</label>
                      <select
                        name="residenceType"
                        value={formData.residenceType}
                        onChange={handleChange}
                        className="w-full bg-white text-stone-800 border border-stone-200 px-4 py-3 text-xs focus:border-amber-600/60 outline-none transition-all rounded-none"
                      >
                        <option>Private Estate / Country House</option>
                        <option>Luxury Penthouse / High-Rise Apartment</option>
                        <option>Detached Suburban Villa</option>
                        <option>Other Architectural Living Arrangement</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.15em] uppercase text-stone-500 mb-2 font-medium">City, State & Country</label>
                      <input
                        type="text"
                        name="cityState"
                        placeholder="e.g. Zurich, Switzerland or Beverly Hills, CA"
                        required
                        value={formData.cityState}
                        onChange={handleChange}
                        className="w-full bg-white text-stone-800 border border-stone-200 px-4 py-3 text-xs focus:border-amber-600/60 outline-none transition-all rounded-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] tracking-[0.15em] uppercase text-stone-500 mb-2 font-medium">Current Pet Residents</label>
                      <select
                        name="hasPets"
                        value={formData.hasPets}
                        onChange={handleChange}
                        className="w-full bg-white text-stone-800 border border-stone-200 px-4 py-3 text-xs focus:border-amber-600/60 outline-none transition-all rounded-none"
                      >
                        <option>No, none currently</option>
                        <option>Yes, small breed canine(s)</option>
                        <option>Yes, large breed canine(s)</option>
                        <option>Yes, equine or estate animals</option>
                        <option>Feline companions</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.15em] uppercase text-stone-500 mb-2 font-medium">Canine Guardianship Experience</label>
                      <select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleChange}
                        className="w-full bg-white text-stone-800 border border-stone-200 px-4 py-3 text-xs focus:border-amber-600/60 outline-none transition-all rounded-none"
                      >
                        <option>Experienced Owner (Have had multi-dogs)</option>
                        <option>First Time Guardian (Committed to high-end trainers)</option>
                        <option>Professional Handler / Estate Staff Supported</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase text-stone-500 mb-2 font-medium">
                      Lifestyle Philosophy & Daily Companion Integration (Detailed)
                    </label>
                    <textarea
                      name="lifestyleOverview"
                      required
                      rows={4}
                      placeholder="Please describe how this companion will integrate into your daily rhythms, travel arrangements, and home life. We value depth over brevity."
                      value={formData.lifestyleOverview}
                      onChange={handleChange}
                      className="w-full bg-white text-stone-800 border border-stone-200 px-4 py-3 text-xs focus:border-amber-600/60 outline-none transition-all rounded-none leading-relaxed"
                    />
                  </div>

                  <div className="pt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 border border-stone-300 text-stone-700 text-xs tracking-widest uppercase font-medium hover:bg-stone-100 transition-all duration-300 flex items-center gap-2"
                    >
                      <ArrowLeft size={14} /> Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-3 bg-stone-900 text-stone-100 text-xs tracking-widest uppercase font-medium hover:bg-amber-600 hover:text-stone-950 transition-all duration-300 flex items-center gap-2"
                    >
                      Continue to Terms <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-lg text-stone-800 tracking-wide mb-6 uppercase border-b border-stone-200/40 pb-2">
                    Ethical Alignment & Verification
                  </h3>

                  {/* Ethical Statement Textbox */}
                  <div className="bg-stone-100 border border-stone-200 p-6 max-h-60 overflow-y-auto text-[11px] leading-relaxed text-stone-600 font-light space-y-4">
                    <h4 className="font-serif text-stone-900 font-medium uppercase tracking-wide">
                      THE COMPANION COUTURE GUARDIAN AGREEMENT
                    </h4>
                    <p>
                      <strong>1. Non-Product Integrity:</strong> The applicant acknowledges that the requested canine companion is a living, feeling individual of noble breed heritage. The applicant agrees that this companion shall never be bartered, sold, or abandoned to a public shelter. If a lifestyle emergency dictates that you can no longer retain guardianship, Companion Couture retains the absolute first right of return to house the companion within our private reserve.
                    </p>
                    <p>
                      <strong>2. Standard of Nobility:</strong> You pledge to provide high-fidelity living quarters, premium veterinary care, pristine organic nutrition, and kind, force-free social development under the guidance of authorized behaviorists.
                    </p>
                    <p>
                      <strong>3. Confidentiality and Security:</strong> The applicant certifies that all information provided is accurate and truthful. Companion Couture reserves the absolute right to decline placement requests without disclosure of proprietary behavioral alignment metrics.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase text-stone-500 mb-2 font-medium">
                      Special Requests / Private Notes for the Placement Committee
                    </label>
                    <textarea
                      name="additionalNotes"
                      rows={3}
                      placeholder="List any travel preferences, private estate specifications, custom training requirements, or special dates."
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      className="w-full bg-white text-stone-800 border border-stone-200 px-4 py-3 text-xs focus:border-amber-600/60 outline-none transition-all rounded-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="agreedToTerms"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 accent-amber-600 text-stone-900 border-stone-300 rounded focus:ring-amber-600"
                    />
                    <label htmlFor="agreedToTerms" className="text-[11px] leading-relaxed text-stone-600 font-light">
                      I have read, understood, and solemnly pledge my alignment with the{' '}
                      <span className="text-amber-700 font-medium">Curation Philosophy and Ethical Placement Agreement</span>.
                    </label>
                  </div>

                  <div className="pt-6 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 border border-stone-300 text-stone-700 text-xs tracking-widest uppercase font-medium hover:bg-stone-100 transition-all duration-300 flex items-center gap-2"
                    >
                      <ArrowLeft size={14} /> Back
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-10 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium text-xs tracking-[0.2em] uppercase transition-all duration-500 relative overflow-hidden flex items-center gap-3 disabled:bg-stone-300 disabled:text-stone-500"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-stone-950" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Auditing Alignment...
                        </>
                      ) : (
                        <>
                          Submit Registry Placement <ShieldCheck size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-6"
            >
              <div className="w-16 h-16 bg-amber-50 border border-amber-600/30 rounded-full flex items-center justify-center mx-auto text-amber-600">
                <ShieldCheck size={32} />
              </div>
              <span className="font-sans text-[10px] tracking-[0.3em] text-amber-600 uppercase block">
                Registration Acknowledged
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-stone-900 tracking-wide font-light uppercase">
                Inquiry Placed in High Standing
              </h3>
              <p className="text-stone-500 font-serif italic text-xs max-w-lg mx-auto leading-relaxed">
                "Welcome to the beginning of a lifetime bond. Your files have been routed with strict confidentiality to our Elite Placement Committee. We analyze each home's visual, spatial, and psychological environment with total devotion."
              </p>
              
              <div className="bg-stone-100 border border-stone-200 max-w-sm mx-auto p-4 rounded-sm">
                <span className="block text-[9px] tracking-widest text-stone-400 uppercase">CONFIDENTIAL SEQUENCE</span>
                <span className="block text-sm font-mono font-bold tracking-widest text-stone-800 mt-1">{inquiryNo}</span>
              </div>

              <p className="text-[11px] text-stone-400 font-light tracking-wide max-w-sm mx-auto leading-relaxed">
                A personal Concierge Officer will contact your office within 24 hours to schedule an introductory video call or private villa visitation.
              </p>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="px-8 py-3 bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs tracking-widest uppercase transition-all duration-300"
                >
                  Apply For Another Placement
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

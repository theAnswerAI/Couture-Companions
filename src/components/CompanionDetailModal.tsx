import { Companion } from '../types';
import { X, Award, Eye, Heart, Shield, Sparkles, Check, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

interface CompanionDetailModalProps {
  companion: Companion;
  onClose: () => void;
  onInquire: (companion: Companion) => void;
}

export default function CompanionDetailModal({ companion, onClose, onInquire }: CompanionDetailModalProps) {
  const [activeImage, setActiveImage] = useState(companion.image);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md">
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        className="relative bg-stone-50 border border-stone-200 w-full max-w-5xl rounded-sm shadow-2xl overflow-hidden max-h-[92vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2.5 bg-stone-900/90 text-stone-100 hover:bg-stone-900 hover:text-amber-500 rounded-full transition-colors border border-stone-800"
          aria-label="Close details"
        >
          <X size={16} />
        </button>

        <div className="overflow-y-auto max-h-[92vh] grid grid-cols-1 lg:grid-cols-12">
          {/* Left Side: Images & Gallery */}
          <div className="lg:col-span-6 bg-stone-900 flex flex-col justify-between p-6 md:p-8">
            <div className="relative aspect-[3/4] w-full overflow-hidden flex items-center justify-center bg-stone-950">
              <img
                src={activeImage}
                alt={companion.name}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full transition-all duration-700"
              />
              <span className="absolute top-4 left-4 bg-stone-950/85 backdrop-blur-md text-[9px] tracking-[0.25em] text-amber-500 uppercase px-3.5 py-1.5 font-sans border border-amber-600/30">
                {companion.status === 'Available' ? 'PRISTINE PLACEMENT' : 'RESERVED ALIGNMENT'}
              </span>
            </div>

            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {companion.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-[3/4] relative overflow-hidden border transition-all ${
                    activeImage === img ? 'border-amber-500 ring-1 ring-amber-500' : 'border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <img src={img} alt="" referrerPolicy="no-referrer" className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Editorial Narrative & Heritage Dossier */}
          <div className="lg:col-span-6 p-6 md:p-10 lg:p-12 flex flex-col justify-between h-full bg-stone-50 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.3em] text-amber-600 font-sans font-semibold uppercase">
                  {companion.breed}
                </span>
                <span className="text-xs font-mono tracking-widest text-stone-400">
                  REF: {companion.id.toUpperCase()}-2026
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-wide font-light uppercase mt-3">
                {companion.name}
              </h2>

              <div className="flex gap-4 items-center text-xs text-stone-500 font-light mt-4">
                <span>Born: {companion.birthDate}</span>
                <span>•</span>
                <span>Gender: {companion.gender}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Shield size={12} className="text-amber-600" />
                  Temperament: {companion.temperamentScore}
                </span>
              </div>

              <div className="h-[1px] bg-stone-200 my-6" />

              {/* The Narrative Story */}
              <div className="space-y-4">
                <h3 className="font-serif text-xs tracking-[0.2em] text-stone-800 uppercase font-semibold flex items-center gap-1.5">
                  <Sparkles size={13} className="text-amber-600" /> Companion Story & Character
                </h3>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-light">
                  {companion.story}
                </p>
              </div>

              {/* The Royal Lineage Chart */}
              <div className="bg-stone-100/80 border border-stone-200/50 p-4 mt-8 rounded-sm">
                <h4 className="font-serif text-xs tracking-[0.2em] text-stone-800 uppercase font-semibold mb-3 flex items-center gap-1.5">
                  <Award size={13} className="text-amber-600" /> Certified Ancestral Pedigree
                </h4>
                <div className="space-y-2 text-[11px] leading-relaxed text-stone-500 font-light">
                  <p className="text-stone-700 italic border-b border-stone-200/40 pb-1 font-serif">
                    {companion.heritage}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <span className="text-[9px] tracking-wider uppercase text-stone-400 block">Sires Side</span>
                      <span className="text-stone-800 font-medium">Grand Champion Paris (FR)</span>
                    </div>
                    <div>
                      <span className="text-[9px] tracking-wider uppercase text-stone-400 block">Dams Side</span>
                      <span className="text-stone-800 font-medium">Lady Genevieve (UK Line)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications Table */}
              <div className="mt-8 space-y-2">
                <h4 className="font-serif text-xs tracking-[0.2em] text-stone-800 uppercase font-semibold mb-3">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-2 gap-y-3.5 gap-x-6 text-xs border-t border-stone-200/60 pt-3">
                  <div>
                    <span className="text-stone-400 uppercase text-[9px] tracking-wider block">Coat Registry</span>
                    <span className="text-stone-800 font-medium">{companion.details.coat}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 uppercase text-[9px] tracking-wider block">Estimated Weight</span>
                    <span className="text-stone-800 font-medium">{companion.details.size}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 uppercase text-[9px] tracking-wider block">Coat Color</span>
                    <span className="text-stone-800 font-medium">{companion.details.color}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 uppercase text-[9px] tracking-wider block">DNA Register</span>
                    <span className="text-stone-800 font-medium">{companion.details.registry}</span>
                  </div>
                </div>
              </div>

              {/* Health Guarantee checklist */}
              <div className="mt-8 space-y-2">
                <h4 className="font-serif text-xs tracking-[0.2em] text-stone-800 uppercase font-semibold mb-3">
                  Included Savoir-Faire Services
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-stone-600 font-light">
                  <span className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> Full Cardiac & Eye OFA Audited</span>
                  <span className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> Neo-Bio-Sensor Rearing certified</span>
                  <span className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> Microchip & Pedigree Passport</span>
                  <span className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> Cashmere Nesting Blanket & Set</span>
                </div>
              </div>
            </div>

            {/* Inquire Section */}
            <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <span className="text-[10px] tracking-widest text-stone-400 uppercase block">INVESTMENT</span>
                <span className="text-stone-800 font-serif text-sm font-medium">{companion.placementFee}</span>
              </div>

              <button
                onClick={() => onInquire(companion)}
                disabled={companion.status === 'Reserved'}
                className="w-full sm:w-auto px-8 py-3.5 bg-amber-600 hover:bg-amber-500 disabled:bg-stone-200 disabled:text-stone-400 disabled:cursor-not-allowed text-stone-950 font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
              >
                {companion.status === 'Reserved' ? (
                  'Reserved Match'
                ) : (
                  <>
                    Initiate Private Inquiry <ChevronRight size={14} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

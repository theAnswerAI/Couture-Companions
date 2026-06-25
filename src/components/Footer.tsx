import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Mail, Phone, MapPin, Instagram, Bookmark, Compass } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 font-sans border-t border-stone-800">
      {/* Editorial Newsletter Sign Up / Gazette */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-b border-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-stone-100 tracking-wider font-light uppercase">
              The Companion Couture Gazette
            </h3>
            <p className="mt-2 text-xs md:text-sm text-stone-400 max-w-md leading-relaxed tracking-wide font-light">
              Subscribe to receive exclusive insights into new royal litters, heritage behavioral rearing methodologies, and invitation-only atelier showcases.
            </p>
          </div>
          <div>
            {subscribed ? (
              <div className="p-4 bg-stone-800 border border-amber-600/30 text-center rounded-sm">
                <p className="text-xs tracking-[0.2em] text-amber-500 uppercase font-medium">
                  Subscription Request Received
                </p>
                <p className="text-[11px] text-stone-400 mt-1 font-serif italic">
                  An invitation to our digital salon has been dispatched.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-stone-800/60 text-stone-100 text-xs tracking-wider px-5 py-3.5 border border-stone-800 focus:border-amber-600/50 outline-none flex-grow placeholder-stone-500 font-light transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 active:scale-95 shrink-0"
                >
                  Join Gazette
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Brand Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="flex flex-col gap-6">
          <div className="cursor-pointer select-none" onClick={() => setActiveTab('home')}>
            <h2 className="font-serif text-lg tracking-[0.2em] text-stone-100 uppercase">
              Companion Couture
            </h2>
            <p className="text-[8px] tracking-[0.4em] text-amber-500/80 uppercase mt-1">
              HAUTE COMPANIONSHIP
            </p>
          </div>
          <p className="text-[11px] text-stone-400 leading-relaxed font-light tracking-wide max-w-xs">
            We operate at the intersection of absolute canine genetic perfection, rich family heritage, and custom-tailored psychological rearing to curate world-class companion alignment.
          </p>
          <div className="flex gap-4 text-stone-400">
            <a href="#" className="hover:text-amber-500 transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors" aria-label="Aesthetic Guide">
              <Compass size={16} />
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors" aria-label="Certificates">
              <Bookmark size={16} />
            </a>
          </div>
        </div>

        {/* The House */}
        <div>
          <h4 className="text-[11px] tracking-[0.25em] text-stone-100 uppercase font-semibold mb-6">
            The House
          </h4>
          <ul className="flex flex-col gap-3 text-xs text-stone-400 font-light">
            <li>
              <button onClick={() => setActiveTab('about')} className="hover:text-amber-500 transition-colors">
                Our Century-Old Heritage
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('experience')} className="hover:text-amber-500 transition-colors">
                The Couture Experience
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('journal')} className="hover:text-amber-500 transition-colors">
                The Private Journal
              </button>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Atelier Directory
              </a>
            </li>
          </ul>
        </div>

        {/* Placement Services */}
        <div>
          <h4 className="text-[11px] tracking-[0.25em] text-stone-100 uppercase font-semibold mb-6">
            Services
          </h4>
          <ul className="flex flex-col gap-3 text-xs text-stone-400 font-light">
            <li>
              <button onClick={() => setActiveTab('companions')} className="hover:text-amber-500 transition-colors">
                Available Curations
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('application')} className="hover:text-amber-500 transition-colors">
                Apply for Placement
              </button>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Elite Travel Concierge
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Hereditary Genome Auditing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-[11px] tracking-[0.25em] text-stone-100 uppercase font-semibold mb-6">
            Concierge Office
          </h4>
          <ul className="flex flex-col gap-4 text-xs text-stone-400 font-light">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-amber-500 shrink-0 mt-0.5" />
              <span>
                14 Route de l’Atelier, Geneva, Switzerland
                <br />
                By Appointment Only
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-amber-500" />
              <span>+41 (22) 890-COUT</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-amber-500" />
              <span>concierge@companion-couture.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal & Curation Philosophy Note */}
      <div className="bg-stone-950 text-stone-500 py-10 px-6 md:px-12 text-center text-[10px] tracking-widest font-light leading-relaxed">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <p className="uppercase text-amber-500/60 font-medium">
            Placement Curation Philosophy
          </p>
          <p className="text-stone-400 font-serif italic text-xs normal-case leading-relaxed">
            "Companion Couture stands firmly on the pillar of canine dignity. We do not view puppies as commodities or seasonal trends. Every canine born under our care is treated as an individual soul of noble ancestry, raised with custom psychological development, and placed only with guardians capable of reciprocating this deep emotional devotion."
          </p>
          <div className="h-[1px] bg-stone-900 my-2" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[9px]">
            <p>© 2026 Companion Couture SA. All Rights Reserved. Private Registry No. CC-201-B.</p>
            <div className="flex gap-6 uppercase">
              <a href="#" className="hover:text-stone-300 transition-colors">Privacy Charter</a>
              <span>•</span>
              <a href="#" className="hover:text-stone-300 transition-colors">Ethical Guidelines</a>
              <span>•</span>
              <a href="#" className="hover:text-stone-300 transition-colors">Atelier Access Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

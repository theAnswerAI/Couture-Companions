import { ActiveTab } from '../types';
import { Menu, X, Shield, Award } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'THE ATELIER' },
    { id: 'companions', label: 'AVAILABLE PLACEMENTS' },
    { id: 'experience', label: 'THE EXPERIENCE' },
    { id: 'about', label: 'OUR HERITAGE' },
    { id: 'journal', label: 'JOURNAL' },
    { id: 'contact', label: 'CONCIERGE' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/40">
      {/* Top micro-banner */}
      <div className="bg-stone-900 text-stone-100 text-[10px] tracking-[0.25em] py-2 text-center uppercase flex items-center justify-center gap-4">
        <span className="flex items-center gap-1"><Award size={10} className="text-amber-400" /> HEREDITARY EXCELLENCE</span>
        <span className="hidden md:inline-block text-stone-500">|</span>
        <span className="hidden md:flex items-center gap-1"><Shield size={10} className="text-amber-400" /> PRIVATE MEMBERSHIP ALIGNMENT</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Left spacing or small link */}
        <div className="hidden lg:flex items-center gap-6 text-[11px] tracking-widest text-stone-500 font-sans">
          <span>PARIS</span>
          <span>•</span>
          <span>LONDON</span>
          <span>•</span>
          <span>NEW YORK</span>
        </div>

        {/* Brand Name Logo Centered */}
        <div className="flex flex-col items-center justify-center text-center cursor-pointer select-none" onClick={() => setActiveTab('home')}>
          <h1 className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-stone-900 font-light leading-none uppercase">
            Companion Couture
          </h1>
          <span className="font-sans text-[8px] md:text-[9px] tracking-[0.4em] text-amber-600/80 uppercase mt-1.5 font-medium">
            haute companionship & heritage
          </span>
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => setActiveTab('application')}
            className={`px-6 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-500 relative overflow-hidden border ${
              activeTab === 'application'
                ? 'bg-stone-900 text-stone-50 border-stone-900'
                : 'bg-transparent text-stone-800 border-stone-800 hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900'
            }`}
          >
            Apply For Placement
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setActiveTab('application')}
            className="px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase border border-stone-800 text-stone-800 font-medium"
          >
            Apply
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-stone-800 focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Main Navigation (Desktop) */}
      <nav className="hidden lg:block border-t border-stone-100 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-6 py-3.5 flex justify-center items-center gap-12 text-[11px] tracking-[0.22em] font-sans font-medium text-stone-600">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative py-1 hover:text-stone-900 transition-colors duration-300 uppercase ${
                activeTab === item.id ? 'text-stone-950 font-semibold' : ''
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-amber-600" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[116px] bg-stone-50 z-40 flex flex-col justify-between py-12 px-8 border-t border-stone-200/50">
          <nav className="flex flex-col gap-6 text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-[13px] tracking-[0.25em] uppercase py-2 border-b border-stone-100 font-sans ${
                  activeTab === item.id ? 'text-stone-950 font-bold' : 'text-stone-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setActiveTab('application');
                setMobileMenuOpen(false);
              }}
              className="mt-4 text-[13px] tracking-[0.25em] uppercase py-3 bg-stone-900 text-stone-50 font-sans"
            >
              APPLY FOR PLACEMENT
            </button>
          </nav>

          <div className="text-center text-stone-400 text-[10px] tracking-widest leading-relaxed">
            <p className="uppercase">Companion Couture Concierge</p>
            <p className="mt-1 font-serif italic text-amber-700">By Private Invitation Only</p>
          </div>
        </div>
      )}
    </header>
  );
}

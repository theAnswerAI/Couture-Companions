import { useState, useEffect } from 'react';
import { ActiveTab, Companion, JournalArticle } from './types';
import { COMPANIONS_DATA, JOURNAL_DATA } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import CompanionDetailModal from './components/CompanionDetailModal';
import ApplicationForm from './components/ApplicationForm';
import JournalCard from './components/JournalCard';
import ExperienceView from './components/ExperienceView';
import {
  Shield,
  Award,
  Sparkles,
  Heart,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  ChevronRight,
  Clock,
  ArrowUpRight,
  Lock,
  User,
  Sparkle,
  Calendar,
  ArrowLeft,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedCompanion, setSelectedCompanion] = useState<Companion | null>(null);
  const [activeJournalArticle, setActiveJournalArticle] = useState<JournalArticle | null>(null);

  // Filters for companion list
  const [genderFilter, setGenderFilter] = useState<'All' | 'Male' | 'Female'>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Available' | 'Reserved'>('All');
  const [breedSearch, setBreedSearch] = useState('');

  // Handle inquiry trigger
  const handleInquire = (companion: Companion) => {
    setSelectedCompanion(companion);
    setActiveTab('application');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auto scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

  // Filter companions
  const filteredCompanions = COMPANIONS_DATA.filter((c) => {
    const matchesGender = genderFilter === 'All' || c.gender === genderFilter;
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    const matchesBreed =
      breedSearch === '' ||
      c.breed.toLowerCase().includes(breedSearch.toLowerCase()) ||
      c.name.toLowerCase().includes(breedSearch.toLowerCase());
    return matchesGender && matchesStatus && matchesBreed;
  });

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-amber-600/10 selection:text-amber-900 flex flex-col justify-between">
      {/* Premium Header */}
      <Header activeTab={activeTab} setActiveTab={(tab) => {
        setActiveTab(tab);
        // Clear sub-page states when changing tabs
        setActiveJournalArticle(null);
      }} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-24 pb-16"
            >
              {/* Home Hero Section */}
              <section className="relative h-[85vh] w-full bg-stone-900 overflow-hidden flex items-center justify-start px-6 md:px-12 lg:px-24">
                {/* Background Video */}
                <video
                  id="hero-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 object-cover w-full h-full opacity-50 scale-100 transition-transform duration-[10000ms] ease-out hover:scale-105"
                  poster="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1600&q=90"
                >
                  <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-aerial-shot-of-a-mansion-surrounded-by-nature-41584-large.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Custom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/45 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-transparent" />

                <div className="relative z-10 max-w-2xl text-stone-100 space-y-6">
                  <span className="font-sans text-[11px] tracking-[0.35em] text-amber-500 font-semibold uppercase block">
                    Established Geneva, 1912
                  </span>
                  <h1 className="font-serif text-4xl md:text-6xl text-stone-100 tracking-wider font-light leading-tight uppercase">
                    Where Nobility <br />
                    Meets Devotion
                  </h1>
                  <p className="text-xs md:text-sm text-stone-300 font-light max-w-lg leading-relaxed tracking-wide">
                    Elevating the bond between exceptionally bred, hand-reared puppies and distinguished global guardians. Every placement is a work of physical, behavioral, and emotional craftsmanship.
                  </p>
                  <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setActiveTab('companions')}
                      className="px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Discover Placements <ChevronRight size={14} />
                    </button>
                    <button
                      onClick={() => setActiveTab('experience')}
                      className="px-8 py-3.5 bg-transparent hover:bg-stone-100 hover:text-stone-900 text-stone-100 border border-stone-100 text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
                    >
                      The Couture Experience
                    </button>
                  </div>
                </div>

                {/* Bottom luxury values ribbon */}
                <div className="absolute bottom-6 left-6 md:left-12 lg:left-24 right-6 z-10 flex justify-between items-center text-[10px] tracking-widest text-stone-400 font-light">
                  <div className="hidden sm:flex gap-8">
                    <span className="flex items-center gap-2"><Lock size={12} className="text-amber-600" /> CONFIDENTIAL FILES</span>
                    <span className="flex items-center gap-2"><Star size={12} className="text-amber-600" /> 100% PURITY & HEALTH ACCREDITED</span>
                  </div>
                  
                  {/* Subtle video pause/play trigger */}
                  <button
                    onClick={() => {
                      const video = document.getElementById('hero-video') as HTMLVideoElement;
                      if (video) {
                        if (video.paused) {
                          video.play();
                        } else {
                          video.pause();
                        }
                      }
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-stone-950/80 hover:bg-stone-950 text-stone-200 border border-stone-800 rounded-full transition-all text-[9px] uppercase tracking-widest cursor-pointer ml-auto"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    Ambient Motion
                  </button>
                </div>
              </section>

              {/* Dior style Brand Intro / Philosophy */}
              <section className="max-w-5xl mx-auto text-center px-6 md:px-12 py-12 space-y-6">
                <span className="font-sans text-[11px] tracking-[0.3em] text-amber-600 font-medium uppercase">
                  THE PRESTIGE OF PLACEMENT
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-wide font-light uppercase">
                  Couture is a State of Mind
                </h2>
                <div className="w-12 h-[1px] bg-amber-600/60 mx-auto" />
                <p className="text-xs md:text-base text-stone-600 leading-relaxed font-light max-w-3xl mx-auto font-serif italic">
                  "At Companion Couture, we reject the notion of canine commercialization. Our puppies represent seven generations of show champions and behavioral refinement, raised under organic lifestyle regimes and placed with families who view companion integration as a high-fidelity living art."
                </p>
              </section>

              {/* Showcase Curation Grid (3 Top Dogs) */}
              <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-200 pb-4">
                  <div>
                    <span className="font-sans text-[10px] tracking-[0.25em] text-stone-400 uppercase block">
                      Exquisite Selections
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-stone-900 tracking-wide font-light uppercase mt-1">
                      Our Current Curated Litters
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveTab('companions')}
                    className="text-[11px] tracking-[0.2em] uppercase text-amber-700 font-semibold hover:text-stone-950 transition-colors mt-2 md:mt-0 flex items-center gap-1 group"
                  >
                    View All Available Placements <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {COMPANIONS_DATA.slice(0, 3).map((companion) => (
                    <div
                      key={companion.id}
                      onClick={() => setSelectedCompanion(companion)}
                      className="group cursor-pointer bg-white border border-stone-200/40 p-4 transition-all duration-500 hover:shadow-lg hover:border-stone-300/80"
                    >
                      <div className="aspect-[3/4] overflow-hidden relative bg-stone-100">
                        <img
                          src={companion.image}
                          alt={companion.name}
                          referrerPolicy="no-referrer"
                          className="object-cover w-full h-full transition-transform duration-750 group-hover:scale-[1.03]"
                        />
                        <div className="absolute top-3 left-3 bg-stone-950/90 text-[9px] tracking-[0.2em] text-amber-400 uppercase px-3 py-1 border border-amber-600/30">
                          {companion.status === 'Available' ? 'AVAILABLE PLACEMENT' : 'RESERVED'}
                        </div>
                      </div>
                      <div className="mt-5 space-y-1">
                        <span className="text-[10px] tracking-widest text-amber-600 font-sans font-semibold uppercase">
                          {companion.breed}
                        </span>
                        <h4 className="font-serif text-xl text-stone-900 tracking-wide font-light uppercase">
                          {companion.name}
                        </h4>
                        <p className="text-xs text-stone-400 font-light italic truncate pt-1">
                          {companion.story}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-stone-100 flex justify-between items-center text-[10px] tracking-wider uppercase text-stone-500 font-light">
                        <span>Score: {companion.temperamentScore}</span>
                        <span className="text-stone-800 font-semibold group-hover:text-amber-700 transition-colors">
                          View Dossier •
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Savoir Faire Highlight Banner */}
              <section className="bg-stone-900 text-stone-100 py-20 px-6 md:px-12 relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                  <Award size={350} className="text-amber-500" />
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <span className="font-sans text-[10px] tracking-[0.3em] text-amber-500 font-semibold uppercase block">
                      HAUTE REARING METHODOLOGY
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-stone-100 tracking-wide font-light uppercase">
                      The Savoir-Faire of Companion Rearing
                    </h3>
                    <p className="text-xs md:text-sm text-stone-300 font-light leading-relaxed tracking-wide">
                      Our puppies are born on our private lakeside estate in Switzerland. We have developed custom soundscapes, bio-sensory physical stimulation programs, and premium raw diets curated by canine nutritionists.
                    </p>
                    <p className="text-xs md:text-sm text-stone-400 italic font-serif">
                      This meticulous 12-week development process prepares them for high-society apartments, bustling city estates, and international private travel with zero anxiety.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setActiveTab('experience')}
                        className="px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300"
                      >
                        Explore Rearing Protocols
                      </button>
                    </div>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden border border-stone-800 bg-stone-950 shadow-2xl relative">
                    <img
                      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                      alt="Swiss estate nursery salon"
                      referrerPolicy="no-referrer"
                      className="object-cover w-full h-full opacity-80"
                    />
                  </div>
                </div>
              </section>

              {/* Journal Highlight Grid (2 Articles) */}
              <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
                <div className="text-center">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-stone-400 uppercase">
                    The Private Gazette
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-stone-900 tracking-wide font-light uppercase mt-2">
                    Luminaries & Letters
                  </h3>
                  <div className="w-12 h-[1px] bg-amber-600/60 mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {JOURNAL_DATA.slice(0, 2).map((article) => (
                    <JournalCard
                      key={article.id}
                      article={article}
                      onRead={(art) => {
                        setActiveJournalArticle(art);
                        setActiveTab('journal');
                      }}
                    />
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'companions' && (
            <motion.div
              key="companions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-16"
            >
              {/* Header */}
              <div className="text-center space-y-4">
                <span className="font-sans text-[11px] tracking-[0.3em] text-amber-600 font-semibold uppercase block">
                  Couture Selections • Summer 2026 Portfolio
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-wider font-light uppercase">
                  Available Companion Placements
                </h2>
                <div className="w-12 h-[1px] bg-amber-600/60 mx-auto mt-6" />
                <p className="text-xs md:text-sm text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
                  Our dogs are raised within family environments, health vetted to pristine standards, and socialized among classical art and noise landscapes to ensure intuitive, loving temperaments.
                </p>
              </div>

              {/* Premium Luxury Filter Bar */}
              <div className="bg-stone-100 border border-stone-200/50 p-6 flex flex-col md:flex-row gap-6 items-center justify-between font-sans">
                {/* Search */}
                <div className="w-full md:w-auto">
                  <label className="block text-[9px] tracking-[0.2em] text-stone-400 uppercase mb-1.5 font-medium">Search Portfolio</label>
                  <input
                    type="text"
                    placeholder="Search by breed or character..."
                    value={breedSearch}
                    onChange={(e) => setBreedSearch(e.target.value)}
                    className="bg-white text-stone-800 border border-stone-200 px-4 py-2 text-xs focus:border-amber-600 outline-none w-full md:w-64 rounded-none placeholder-stone-400"
                  />
                </div>

                {/* Gender filter */}
                <div className="w-full md:w-auto">
                  <label className="block text-[9px] tracking-[0.2em] text-stone-400 uppercase mb-1.5 font-medium">Select Gender</label>
                  <div className="flex gap-2 bg-white p-1 border border-stone-200">
                    {(['All', 'Male', 'Female'] as const).map((gender) => (
                      <button
                        key={gender}
                        onClick={() => setGenderFilter(gender)}
                        className={`px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase font-medium transition-all ${
                          genderFilter === gender ? 'bg-stone-900 text-stone-100' : 'text-stone-500 hover:text-stone-900'
                        }`}
                      >
                        {gender}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status filter */}
                <div className="w-full md:w-auto">
                  <label className="block text-[9px] tracking-[0.2em] text-stone-400 uppercase mb-1.5 font-medium">Placement Status</label>
                  <div className="flex gap-2 bg-white p-1 border border-stone-200">
                    {(['All', 'Available', 'Reserved'] as const).map((status) => (
                      <button
                        key={status}
                        onClick={() => setStatusFilter(status)}
                        className={`px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase font-medium transition-all ${
                          statusFilter === status ? 'bg-stone-900 text-stone-100' : 'text-stone-500 hover:text-stone-900'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* No results state */}
              {filteredCompanions.length === 0 ? (
                <div className="text-center py-20 bg-stone-100 border border-stone-200/40 rounded-sm">
                  <p className="font-serif text-lg text-stone-600 italic">"No companion matches current search filters."</p>
                  <p className="text-xs text-stone-400 font-light tracking-wide mt-2">Please relax your options or contact our Geneva liaison concierge for customized curations.</p>
                  <button
                    onClick={() => {
                      setGenderFilter('All');
                      setStatusFilter('All');
                      setBreedSearch('');
                    }}
                    className="mt-6 px-6 py-2.5 bg-stone-900 text-stone-100 text-xs tracking-widest uppercase hover:bg-amber-600"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                /* Companion Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCompanions.map((companion) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      key={companion.id}
                      onClick={() => setSelectedCompanion(companion)}
                      className="group cursor-pointer bg-white border border-stone-200/40 p-4 transition-all duration-500 hover:shadow-xl hover:border-stone-300/80"
                    >
                      <div className="aspect-[3/4] overflow-hidden relative bg-stone-100">
                        <img
                          src={companion.image}
                          alt={companion.name}
                          referrerPolicy="no-referrer"
                          className="object-cover w-full h-full transition-transform duration-750 group-hover:scale-[1.03]"
                        />
                        <div className={`absolute top-3 left-3 text-[9px] tracking-[0.2em] uppercase px-3 py-1 border ${
                          companion.status === 'Available' 
                            ? 'bg-stone-950/95 text-amber-400 border-amber-600/30' 
                            : 'bg-stone-700/90 text-stone-300 border-stone-600/40'
                        }`}>
                          {companion.status === 'Available' ? 'AVAILABLE PLACEMENT' : 'RESERVED ALIGNMENT'}
                        </div>
                      </div>
                      <div className="mt-5 space-y-1">
                        <span className="text-[10px] tracking-widest text-amber-600 font-sans font-semibold uppercase">
                          {companion.breed}
                        </span>
                        <h4 className="font-serif text-xl text-stone-900 tracking-wide font-light uppercase">
                          {companion.name}
                        </h4>
                        <p className="text-xs text-stone-400 font-light italic truncate pt-1">
                          {companion.story}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-stone-100 flex justify-between items-center text-[10px] tracking-wider uppercase text-stone-500 font-light">
                        <span>Score: {companion.temperamentScore}</span>
                        <span className="text-stone-800 font-semibold group-hover:text-amber-700 transition-colors">
                          View Dossier •
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ExperienceView onApply={() => setActiveTab('application')} />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto space-y-16"
            >
              <div className="text-center space-y-4">
                <span className="font-sans text-[11px] tracking-[0.3em] text-amber-600 font-semibold uppercase block">
                  ESTABLISHED GENEVA, 1912
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-wider font-light uppercase">
                  Our Century-Old Heritage
                </h2>
                <div className="w-12 h-[1px] bg-amber-600/60 mx-auto mt-6" />
              </div>

              {/* History Block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="font-serif text-xl md:text-2xl text-stone-800 font-light uppercase">
                    The Vision of Baroness von Closen
                  </h3>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-light tracking-wide">
                    Companion Couture was founded in Geneva in the winter of 1912 by Baroness Helena von Closen. Refusing to allow the magnificent working dog lineages of Europe to decline, she established a private sanctuary in the Swiss Alps to preserve genetic health and nurture noble temperaments.
                  </p>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-light tracking-wide">
                    Over the decades, our breeding line has grown to include the most celebrated companion breeds, from noble retrievers and swift sighthounds to rare toy poodles. Today, we maintain the same commitment: raising each companion with deep intellectual care and locating guardians who value life as a sacred masterpiece.
                  </p>
                </div>
                <div className="aspect-[4/5] bg-stone-100 overflow-hidden border border-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&h=1000&q=80"
                    alt="Helena von Closen vintage estate style"
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Geneva & Palm Beach Showrooms */}
              <div className="space-y-12 pt-12">
                <div className="text-center">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-stone-400 uppercase">Visitations & Salons</span>
                  <h3 className="font-serif text-2xl text-stone-800 font-light uppercase mt-2">The Private Estates</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Geneva */}
                  <div className="border border-stone-200/60 bg-white p-6 space-y-4">
                    <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&h=800&q=80"
                        alt="Geneva private estate"
                        referrerPolicy="no-referrer"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h4 className="font-serif text-lg text-stone-900 tracking-wide font-light uppercase">Geneva Lakeside Reserve</h4>
                    <p className="text-xs text-stone-500 font-light leading-relaxed">
                      Nestled along the shores of Lake Geneva, our original estate houses our veterinary research labs, sensory testing nurseries, and private viewing gardens. Meetings are coordinated strictly by prior invitation.
                    </p>
                    <span className="text-[10px] font-mono text-amber-700 block uppercase tracking-wider">Geneva, Switzerland</span>
                  </div>

                  {/* Palm Beach */}
                  <div className="border border-stone-200/60 bg-white p-6 space-y-4">
                    <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&h=800&q=80"
                        alt="Palm Beach villa"
                        referrerPolicy="no-referrer"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h4 className="font-serif text-lg text-stone-900 tracking-wide font-light uppercase">Palm Beach Coastal Villa</h4>
                    <p className="text-xs text-stone-500 font-light leading-relaxed">
                      Servicing our North American family offices, our coastal Palm Beach salon provides warm saltwater development pools and lush sand training yards for sun-loving companions.
                    </p>
                    <span className="text-[10px] font-mono text-amber-700 block uppercase tracking-wider">Palm Beach, Florida</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'journal' && (
            <motion.div
              key="journal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-16"
            >
              <AnimatePresence mode="wait">
                {activeJournalArticle ? (
                  /* Single Article Reader View */
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="max-w-3xl mx-auto space-y-8"
                  >
                    {/* Back Button */}
                    <button
                      onClick={() => setActiveJournalArticle(null)}
                      className="flex items-center gap-2 text-stone-500 hover:text-stone-900 text-xs tracking-widest uppercase transition-colors"
                    >
                      <ArrowLeft size={14} /> Back to Journal Portfolio
                    </button>

                    {/* Article Header */}
                    <div className="space-y-4">
                      <span className="text-[10px] tracking-[0.25em] text-amber-600 font-sans font-semibold uppercase">
                        {activeJournalArticle.category}
                      </span>
                      <h2 className="font-serif text-3xl md:text-5xl text-stone-900 tracking-wide font-light leading-tight uppercase">
                        {activeJournalArticle.title}
                      </h2>
                      <div className="flex gap-4 items-center text-xs text-stone-400 font-light">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {activeJournalArticle.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {activeJournalArticle.readTime}</span>
                      </div>
                    </div>

                    {/* Full Hero Image */}
                    <div className="aspect-[16/9] overflow-hidden border border-stone-200 bg-stone-100">
                      <img
                        src={activeJournalArticle.image}
                        alt={activeJournalArticle.title}
                        referrerPolicy="no-referrer"
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Article Content */}
                    <div className="space-y-6 text-sm text-stone-700 leading-relaxed font-light tracking-wide font-serif">
                      {activeJournalArticle.content.map((para, idx) => (
                        <p key={idx} className="indent-6 first:indent-0">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Footer citation block */}
                    <div className="border-t border-b border-stone-200/50 py-8 text-center space-y-2">
                      <p className="font-serif italic text-xs text-stone-400">
                        "True breed refinement requires unwavering devotion, physical tranquility, and an educated guardian."
                      </p>
                      <p className="text-[10px] tracking-widest uppercase text-stone-400 font-sans font-medium">
                        Companion Couture Elite Placement Committee
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  /* Grid of all articles */
                  <div className="space-y-16">
                    <div className="text-center space-y-4">
                      <span className="font-sans text-[11px] tracking-[0.3em] text-amber-600 font-semibold uppercase block">
                        LUMINARIES & SCIENTIFIC NOBILITY
                      </span>
                      <h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-wider font-light uppercase">
                        The Companion Couture Gazette
                      </h2>
                      <div className="w-12 h-[1px] bg-amber-600/60 mx-auto mt-6" />
                      <p className="text-xs md:text-sm text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
                        Refining the discourse around canine psychological health, bio-sensor sensory rearing, and high-end living alignment.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {JOURNAL_DATA.map((article) => (
                        <JournalCard
                          key={article.id}
                          article={article}
                          onRead={(art) => setActiveJournalArticle(art)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {activeTab === 'application' && (
            <motion.div
              key="application"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ApplicationForm
                preferredCompanion={selectedCompanion}
                companions={COMPANIONS_DATA}
                onSuccess={() => {
                  setSelectedCompanion(null);
                }}
              />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto space-y-16"
            >
              <div className="text-center space-y-4">
                <span className="font-sans text-[11px] tracking-[0.3em] text-amber-600 font-semibold uppercase block">
                  Confidential Liaison Office
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-wider font-light uppercase">
                  Contact Our Concierge
                </h2>
                <div className="w-12 h-[1px] bg-amber-600/60 mx-auto mt-6" />
                <p className="text-xs md:text-sm text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
                  Connect directly with a dedicated Placement Officer to initiate genomic custom breeding requests, coordinate luxury estate visitations, or audit available litters.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Contact Info Card */}
                <div className="md:col-span-5 bg-stone-900 text-stone-100 p-8 space-y-8 border border-stone-800">
                  <div className="space-y-2">
                    <span className="text-[10px] tracking-[0.25em] text-amber-500 font-sans block uppercase">WORLDWIDE HEADQUARTERS</span>
                    <h3 className="font-serif text-lg tracking-wide uppercase">The Geneva Atelier</h3>
                    <p className="text-[11px] text-stone-400 font-light leading-relaxed">
                      14 Route de l’Atelier, Geneva, Switzerland
                      <br />
                      Coordinate visists strictely via family offices or registered attorneys.
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-stone-800 pt-6 text-[11px] font-light text-stone-300">
                    <div className="flex items-center gap-3">
                      <Phone size={14} className="text-amber-500" />
                      <span>Direct: +41 (22) 890-COUT</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={14} className="text-amber-500" />
                      <span>liaison@companion-couture.com</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={14} className="text-amber-500 shrink-0 mt-0.5" />
                      <span>Satellite Concierges: Palm Beach, FL • London, UK • Tokyo, JP</span>
                    </div>
                  </div>

                  <div className="bg-stone-950 p-4 border border-stone-800 text-[10px] leading-relaxed text-stone-500 tracking-wide font-light">
                    <span className="text-amber-500 font-bold block uppercase mb-1">SECURITY GUARANTEE</span>
                    All physical letters, DNA records, and household lifestyle dossiers are audited under strict Swiss banking privacy regulations. No data is shared with commercial pet indexes.
                  </div>
                </div>

                {/* Direct Message Form */}
                <div className="md:col-span-7 bg-white border border-stone-200/50 p-8 space-y-6">
                  <h3 className="font-serif text-xl text-stone-900 tracking-wide font-light uppercase">
                    Direct Concierge Dispatch
                  </h3>

                  <form onSubmit={(e) => {
                    e.preventDefault();
                    alert('Liaison request dispatched. A personal Placement Officer will review your credentials shortly.');
                    (e.target as HTMLFormElement).reset();
                  }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] tracking-wider uppercase text-stone-400 mb-1 font-medium">FULL NAME</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-stone-50 text-stone-800 border border-stone-200 px-4 py-2.5 text-xs focus:border-amber-600 outline-none rounded-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] tracking-wider uppercase text-stone-400 mb-1 font-medium">EMAIL</label>
                        <input
                          type="email"
                          required
                          className="w-full bg-stone-50 text-stone-800 border border-stone-200 px-4 py-2.5 text-xs focus:border-amber-600 outline-none rounded-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] tracking-wider uppercase text-stone-400 mb-1 font-medium">ORGANIZATION / REPRESENTATIVE</label>
                      <input
                        type="text"
                        placeholder="e.g. Sterling Family Office or Self"
                        className="w-full bg-stone-50 text-stone-800 border border-stone-200 px-4 py-2.5 text-xs focus:border-amber-600 outline-none rounded-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] tracking-wider uppercase text-stone-400 mb-1 font-medium">YOUR INQUIRY</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="State your requests regarding genomic planning, private transport charter, or existing available litters."
                        className="w-full bg-stone-50 text-stone-800 border border-stone-200 px-4 py-2.5 text-xs focus:border-amber-600 outline-none rounded-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs tracking-widest uppercase transition-all duration-300"
                    >
                      DISPATCH DISPATCH TO GENEVA LIAISON
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Premium Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {selectedCompanion && (
          <CompanionDetailModal
            companion={selectedCompanion}
            onClose={() => setSelectedCompanion(null)}
            onInquire={handleInquire}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

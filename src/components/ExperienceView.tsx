import { Award, Compass, Shield, Sparkles, Heart, HeartHandshake, MapPin, Truck } from 'lucide-react';
import { motion } from 'motion/react';

interface ExperienceViewProps {
  onApply: () => void;
}

export default function ExperienceView({ onApply }: ExperienceViewProps) {
  const pillars = [
    {
      icon: <Shield size={24} className="text-amber-600" />,
      title: 'Hereditary Genome Auditing',
      description: 'We perform complete 250+ point genetic screening, cardiac audits, and ophthalmological clearance. Only lines with proven, consecutive generations of championship titles and outstanding behavioral profiles are inducted into our breeding program.',
    },
    {
      icon: <Sparkles size={24} className="text-amber-600" />,
      title: 'Parisian Sensory Nursery',
      description: 'Our nurseries are masterpieces of spatial and sensory architecture. Outfitted with climate-isolated, lavender-filtered fresh air, soft acoustics, and tactile play terrains, we prepare our puppies for premium residential environments without stress.',
    },
    {
      icon: <Truck size={24} className="text-amber-600" />,
      title: 'Elite Transport Concierge',
      description: 'We do not ship our puppies through standard cargo. Every companion travels in-cabin via private jet or custom leather Mercedes Sprinter cabins, accompanied by a dedicated companion courier who monitors temperature, heartbeat, and comfort.',
    },
    {
      icon: <Award size={24} className="text-amber-600" />,
      title: 'The Atelier Welcome Kit',
      description: 'Upon placement, each companion arrives with a hand-tailored leather carrier, a French-milled cashmere bedding set, an engraved sterling silver ID tag, and an organic nutritional dossier specific to their biological profile.',
    },
  ];

  return (
    <div className="space-y-24 py-12">
      {/* Cinematic Banner */}
      <section className="relative h-[65vh] w-full bg-stone-900 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=90"
          alt="Luxury living salon"
          referrerPolicy="no-referrer"
          className="absolute inset-0 object-cover w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <span className="font-sans text-[11px] tracking-[0.3em] text-amber-500 uppercase font-semibold">
            The standard of royal life
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-100 tracking-wider font-light uppercase mt-4">
            The Companion Couture Experience
          </h2>
          <p className="mt-6 text-xs md:text-sm text-stone-300 font-light leading-relaxed tracking-wide">
            Our placement service is a meticulous culinary, sensory, and medical alignment. From the moment of conceptual breeding to their grand entrance into your estate, we treat canine life as an elevated luxury art form.
          </p>
        </div>
      </section>

      {/* The 4 Pillars */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] tracking-[0.25em] text-stone-400 uppercase font-medium">Savoir-Faire</span>
          <h3 className="font-serif text-2xl md:text-3xl text-stone-900 tracking-wide font-light uppercase mt-2">
            Our Pillars of Canine Excellence
          </h3>
          <div className="w-12 h-[1px] bg-amber-600/60 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex gap-6 p-6 md:p-8 bg-stone-50 border border-stone-200/40 hover:border-amber-600/20 transition-all rounded-sm"
            >
              <div className="shrink-0 p-3 bg-white border border-stone-100 shadow-sm self-start">
                {pillar.icon}
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-base md:text-lg text-stone-900 tracking-wide font-light uppercase">
                  {pillar.title}
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed font-light tracking-wide">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Narrative Section - The Journey */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="font-sans text-[10px] tracking-[0.25em] text-amber-600 uppercase font-semibold">
            Matchmaking Protocol
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-stone-900 tracking-wide font-light uppercase">
            A Lifetime Bond, Masterfully Curated
          </h3>
          <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-light tracking-wide">
            We understand that a canine companion is not a decoration, but a soul that binds a home together. Our matching protocol assesses the physical scale, sound profiles, and daily schedules of your private residence.
          </p>
          <p className="text-xs md:text-sm text-stone-500 leading-relaxed font-light italic font-serif">
            "Whether you require a quiet, intuitive soul for a Manhattan study or a vibrant, playful companion for a sprawling Swiss estate, we align behavioral genetics to secure absolute harmony."
          </p>
          <div className="pt-4">
            <button
              onClick={onApply}
              className="px-8 py-3.5 bg-stone-900 text-stone-100 hover:bg-amber-600 hover:text-stone-950 text-xs tracking-widest uppercase font-medium transition-all duration-300"
            >
              Apply For Private Placement
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden border border-stone-200 bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=800&q=80"
                alt="Puppy lifestyle"
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden border border-stone-200 bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80"
                alt="Pristine dog walking"
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="aspect-square overflow-hidden border border-stone-200 bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1513360309081-36f5e878fc9e?auto=format&fit=crop&w=800&q=80"
                alt="Companion sleeping elegant"
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden border border-stone-200 bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80"
                alt="Aurelia playing"
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Statement Callout */}
      <section className="bg-stone-100 py-16 border-y border-stone-200/50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <Heart size={28} className="text-amber-600 mx-auto" />
          <h4 className="font-serif text-xl md:text-2xl text-stone-800 tracking-wide font-light uppercase">
            Our Lifetime Wellness Pledge
          </h4>
          <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
            We provide a lifetime behavioral advisory and complete 5-year genetic replacement warranty. When you adopt a puppy from Companion Couture, you enter a reciprocal covenant of love, luxury, and security. We remain yours and theirs forever.
          </p>
        </div>
      </section>
    </div>
  );
}

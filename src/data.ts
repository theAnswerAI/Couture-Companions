import { Companion, JournalArticle } from './types';

export const COMPANIONS_DATA: Companion[] = [
  {
    id: 'aurelia',
    name: 'Aurelia',
    breed: 'Cavapoo (King Charles & Toy Poodle)',
    birthDate: 'April 12, 2026',
    gender: 'Female',
    status: 'Available',
    story: 'Aurelia is the very definition of gentle grace. She possesses an intuitive, calm demeanor, preferring soft classical piano and quiet afternoons by the window. Her expressive amber eyes hold a rare depth of understanding, making her an exceptional emotional companion for a peaceful household. She has been raised in a quiet lakeside cottage, surrounded by lavender gardens, developing a serene, loving, and highly receptive temperament.',
    heritage: 'Daughter of Lady Genevieve of Somerset (Grand Champion Cavalier King Charles Spaniel, UK Lineage) and Duke Arthur of Windsor (Championship-winning Toy Poodle). Aurelia carries seven generations of pristine health clearance and international beauty awards, combining the soft, royal disposition of the Cavalier with the sparking intellect of the toy poodle.',
    personality: ['Intuitive', 'Serene', 'Affectionate', 'Soft-Spoken'],
    details: {
      size: '6.5 lbs (projected adult weight)',
      coat: 'Silk-velvet hypoallergenic waves',
      color: 'Champagne & Ivory Mist',
      registry: 'Companion Couture Elite Registry (CCER)',
      generation: 'F1b (Exceptional Coat Stability)'
    },
    image: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?auto=format&fit=crop&w=800&h=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?auto=format&fit=crop&w=800&h=1000&q=80',
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&h=1000&q=80',
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&h=1000&q=80'
    ],
    temperamentScore: '9.9/10',
    placementFee: 'Placement Fee Upon Request'
  },
  {
    id: 'balthazar',
    name: 'Balthazar',
    breed: 'Pembroke Welsh Corgi',
    birthDate: 'March 28, 2026',
    gender: 'Male',
    status: 'Available',
    story: 'Balthazar carries himself with the quiet dignity of a statesman. Curious, observant, and unfailingly loyal, he thrives on structure and high-fidelity mental engagement. He is particularly fond of architectural walks, soft leather libraries, and keeping watch with an air of noble attentiveness. He has been thoroughly socialized among standard family environments, demonstrating a balanced protective instinct coupled with warm friendliness.',
    heritage: 'Sired by Champion Sir Winston of Buckingham (Supreme Breed Winner, Westminster 2024) and out of Baroness Beatrice of Westshire. His lineage features premium working and show lines directly tracing back to the historic Welsh estates of Pembrokeshire, certified free of DM and vWD1.',
    personality: ['Noble', 'Observant', 'Loyal', 'Intellectual'],
    details: {
      size: '14 lbs (projected adult weight)',
      coat: 'Dense, double-coated classic silk',
      color: 'Sable & Royal Cream',
      registry: 'Companion Couture Elite Registry (CCER)'
    },
    image: 'https://images.unsplash.com/photo-1612536057832-2ff7eed58194?auto=format&fit=crop&w=800&h=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1612536057832-2ff7eed58194?auto=format&fit=crop&w=800&h=1000&q=80',
      'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&h=1000&q=80',
      'https://images.unsplash.com/photo-1537151608828-ea2b117b6281?auto=format&fit=crop&w=800&h=1000&q=80'
    ],
    temperamentScore: '9.8/10',
    placementFee: 'Placement Fee Upon Request'
  },
  {
    id: 'seraphina',
    name: 'Seraphina',
    breed: 'Ethereal Samoyed',
    birthDate: 'May 02, 2026',
    gender: 'Female',
    status: 'Available',
    story: 'Seraphina is an angel carved in white cloud. Joyful, radiant, and incredibly empathetic, her smile is infectious and can lift the spirits of any room she enters. Raised in an equestrian estate with daily organic nurturing, she has a spectacular affinity for children and open spaces. She represents the pure joy of luxury living—a bright, warm presence that blends seamlessly into active luxury lifestyles and alpine estates.',
    heritage: 'Daughter of Grand Champion Polaris Chief (Nordic Show Winner) and Duchess Aurora of Siberia. Her ancestors have been prized for centuries for their pristine, snow-white coats and historical companionship qualities, demonstrating impeccable behavior genetics.',
    personality: ['Radiant', 'Empathetic', 'Playful', 'Majestic'],
    details: {
      size: '22 lbs (projected adult weight)',
      coat: 'Luminous triple-layered Arctic cloud',
      color: 'Pure Alabaster White',
      registry: 'Companion Couture Elite Registry (CCER)'
    },
    image: 'https://images.unsplash.com/photo-1529429647142-f4536cd25bc0?auto=format&fit=crop&w=800&h=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1529429647142-f4536cd25bc0?auto=format&fit=crop&w=800&h=1000&q=80',
      'https://images.unsplash.com/photo-1494947665470-20322015e3a8?auto=format&fit=crop&w=800&h=1000&q=80',
      'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&h=1000&q=80'
    ],
    temperamentScore: '10.0/10',
    placementFee: 'Placement Fee Upon Request'
  },
  {
    id: 'lysander',
    name: 'Lysander',
    breed: 'Toy Poodle',
    birthDate: 'April 30, 2026',
    gender: 'Male',
    status: 'Available',
    story: 'Lysander possesses a sparkling, razor-sharp intelligence packaged in rich mahogany curls. Quick to learn and deeply responsive to emotional nuance, he excels in companion obedience and trick artistry. He loves traveling in custom leather carriers and is exceptionally well-suited for high-flying cosmopolitan executives who require an elegant, loyal, and adaptable companion for luxury retreats and private jets.',
    heritage: 'Sired by International Multi-Champion Marquis Valentin of Provence and Countess Clarissa of Bordeaux. Lysander carries a 100% pure Toy Poodle genetic profile, tested entirely clear of hereditary cardiac and ophthalmological traits.',
    personality: ['Brilliant', 'Adaptable', 'Vibrant', 'Charming'],
    details: {
      size: '5.2 lbs (projected adult weight)',
      coat: 'Tight hypoallergenic cashmere curls',
      color: 'Rich Mahogany Red',
      registry: 'Companion Couture Elite Registry (CCER)'
    },
    image: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=800&h=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=800&h=1000&q=80',
      'https://images.unsplash.com/photo-1504595403659-9084ccd367b2?auto=format&fit=crop&w=800&h=1000&q=80',
      'https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&w=800&h=1000&q=80'
    ],
    temperamentScore: '9.9/10',
    placementFee: 'Placement Fee Upon Request'
  },
  {
    id: 'zephyr',
    name: 'Zephyr',
    breed: 'Italian Greyhound',
    birthDate: 'May 10, 2026',
    gender: 'Male',
    status: 'Available',
    story: 'Zephyr is a study in clean lines and minimalist geometry. Silently swift yet profoundly affectionate, he is the ultimate muse for design-focused environments. He loves basking in warm sunlit architectural alcoves and wrapping himself in premium cashmere throws. Raised in a modern seaside villa, he has developed a sophisticated, calm demeanor, responding beautifully to soft tones, gentle touches, and minimal chaos.',
    heritage: 'Out of Champion Lady Isabella of Milan and Grand Champion Duke Sterling of Tuscany. His lineage represents the pinnacle of Italian Greyhound breeding, preserving the delicate, refined morphology prized during the Renaissance court placements.',
    personality: ['Minimalist', 'Sensitive', 'Quiet', 'Elegant'],
    details: {
      size: '8.0 lbs (projected adult weight)',
      coat: 'Ultra-short silk-satin',
      color: 'Slate Blue & Polished Silver',
      registry: 'Companion Couture Elite Registry (CCER)'
    },
    image: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&w=800&h=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&w=800&h=1000&q=80',
      'https://images.unsplash.com/photo-1477884213974-b9db797de472?auto=format&fit=crop&w=800&h=1000&q=80',
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&h=1000&q=80'
    ],
    temperamentScore: '9.7/10',
    placementFee: 'Placement Fee Upon Request'
  },
  {
    id: 'genevieve',
    name: 'Genevieve',
    breed: 'French Bulldog',
    birthDate: 'April 05, 2026',
    gender: 'Female',
    status: 'Reserved',
    story: 'Genevieve is a joyful, affectionate soul with a heart as grand as her lineage. She possesses an outstandingly sturdy structure paired with rare lilac-fawn coloration. She is a highly social, witty, and loyal companion who loves participating in elegant garden parties and resting her chin on plush custom pillows. She brings an unpretentious, rich warmth to any private estate.',
    heritage: 'Daughter of Sire Galahad of Paris (National French Specialty Winner) and Lady Josephine of Chateau Margaux. Fully health audited via standard OFA cardio, patella, and juvenile cataract genetic panels, passing with pristine honors.',
    personality: ['Witty', 'Loving', 'Sturdy', 'Sociable'],
    details: {
      size: '11.5 lbs (projected adult weight)',
      coat: 'Silky, tight-fawn satin',
      color: 'Lilac Fawn & Pearl Chest',
      registry: 'Companion Couture Elite Registry (CCER)'
    },
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&h=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&h=1000&q=80',
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=800&h=1000&q=80',
      'https://images.unsplash.com/photo-1541599540903-216a46cc1ad0?auto=format&fit=crop&w=800&h=1000&q=80'
    ],
    temperamentScore: '9.9/10',
    placementFee: 'Placement Fee Upon Request'
  }
];

export const JOURNAL_DATA: JournalArticle[] = [
  {
    id: 'savoir-faire-rearing',
    title: 'The Savoir-Faire of Early Canine Nobility',
    category: 'Savoir-Faire',
    date: 'June 18, 2026',
    readTime: '6 min read',
    excerpt: 'An inside look into the custom-tailored sensory and behavioral development protocols that shape our world-class companions.',
    content: [
      'At Companion Couture, breeding is not a science; it is a hereditary art form. We believe that the earliest days of a canine companion dictate their life-long capacity for deep emotional attunement and intellectual poise. Thus, we have established our signature "Savoir-Faire Rearing Protocol"—an immersive behavioral development framework designed for early canine nobility.',
      'From Day 3 through Day 16, our neonate puppies undergo Bio-Sensor stimulation. These micro-exercises gently stimulate the neurological system, enhancing cardiovascular health, boosting immune resistance, and preparing their active minds to process future sensory inputs with total tranquility.',
      'As they emerge into toddlerhood, their environment transitions into an auditory and tactile wonderland. In our dedicated Parisian-style nurseries, classical piano selections, light jazz, and natural outdoor sounds are introduced at balanced frequencies. This prevents startle responses and prepares them for the rich, high-fidelity atmosphere of an elegant modern home.',
      'Nutrition, too, is tailored. Each mother and litter receives high-end organic, fresh-prepared menus, including pure pasture-raised quail egg, grass-fed bone broth, and wild-harvested salmon oil. This ensures that their physical forms and coat lusters reflect the pristine care of a five-star hospitality experience. The resulting companion is not just well-behaved; they are deeply serene, remarkably healthy, and profoundly connected to their human counterparts.'
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&h=800&q=80'
  },
  {
    id: 'art-of-placement',
    title: 'The Art of Private Placement & Alignment',
    category: 'Placement Protocols',
    date: 'May 24, 2026',
    readTime: '4 min read',
    excerpt: 'Understanding the meticulous matchmaking process that connects our exceptional puppies with the world\'s most distinguished homes.',
    content: [
      'The bond between a guardian and their companion is sacred. To ensure that every placement represents a perfect alignment of lifestyle, temperament, and soul, Companion Couture operates under a private placement system modeled after high-end European family wealth offices and private members clubs.',
      'Our matchmaking begins with the Private Inquiry. We seek to understand not only your architectural environment but your emotional rhythms. Do you travel frequently via private charter? Does your salon favor quiet intellectual discourse, or is it a vibrant, active hub of social gatherings? These questions are essential.',
      'Once an application is approved, our behavioral specialists observe each litter individually. We assess sub-temperaments, looking for specific markers: the "Empathetic Shadow" who responds directly to human sighs, or the "Noble Guardian" who maintains a calm, confident watch.',
      'By matching these specific behavior profiles with your household profile, we guarantee a harmonious integration. A puppy from Companion Couture is not simply added to your household; they are woven into the very fabric of your life.'
    ],
    image: 'https://images.unsplash.com/photo-1513360309081-36f5e878fc9e?auto=format&fit=crop&w=1200&h=800&q=80'
  },
  {
    id: 'curating-living-space',
    title: 'Curating a Luxury Living Space for Your Companion',
    category: 'Heritage Lifestyle',
    date: 'April 15, 2026',
    readTime: '5 min read',
    excerpt: 'Design guidelines for creating elegant, harmonious spaces that respect both high-end design aesthetics and canine ergonomics.',
    content: [
      'Welcoming a companion of pristine heritage requires a thoughtful approach to interior design. One need not sacrifice editorial elegance for canine comfort; indeed, the two can be beautifully synthesized.',
      'When choosing upholstery, we recommend stain-resistant mohair, heavy-weight Belgian linen, or premium full-grain Italian leather that patinas beautifully with age. These materials offer tactile warmth for your companion while respecting the architectural integrity of your salon.',
      'For their private chambers within your home, consider custom-made, orthopedic foam beds housed within beautiful wooden or brass frames that match your antique or modernist sideboards. A dedicated corner with filtered morning light and a soft cashmere throw from our Companion Couture Atelier represents the ultimate sanctuary.',
      'By integrating high-end canine ergonomics with beautiful architectural choices, you elevate daily life into a shared artistic experience. Your companion becomes a natural part of your home\'s elegant landscape.'
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&h=800&q=80'
  }
];

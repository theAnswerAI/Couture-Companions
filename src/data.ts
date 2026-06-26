import { Companion, JournalArticle } from './types';

export const COMPANIONS_DATA: Companion[] = [
  {
    id: 'coco',
    name: 'Coco',
    breed: 'Teacup Pomeranian',
    birthDate: 'April 15, 2026',
    gender: 'Female',
    status: 'Available',
    story: 'Coco is the epitome of vivacious luxury. With a vibrant, outgoing personality and an incredibly plush orange-cream coat, she lights up any salon she enters. She is highly socialized, extremely affectionate, and loves resting on cashmere throws near sun-drenched penthouse windows. Her intelligence and refined structure make her a spectacular companion for dynamic, loving homes.',
    heritage: 'Daughter of Grand Champion Sir Charles of Kent (Supreme Toy Winner, UK) and Duchess Fiona of Sussex. Coco carries seven generations of verified show champion lineage, with pristine health and cardiac clearances.',
    personality: ['Charming', 'Vivacious', 'Confident', 'Affectionate'],
    details: {
      size: '3.2 lbs (projected adult weight)',
      coat: 'Double-coated luxurious plush silk',
      color: 'Royal Cream & Amber Orange',
      registry: 'Companion Couture Elite Registry (CCER)',
      generation: 'Purebred (Certified Ancestry)'
    },
    image: '/images/pomeranian_coco.png',
    gallery: [
      '/images/pomeranian_coco.png',
      '/images/nursery.png',
      '/images/baroness.png'
    ],
    temperamentScore: '9.9/10',
    placementFee: 'Placement Fee Upon Request'
  },
  {
    id: 'mimi',
    name: 'Mimi',
    breed: 'Teacup Pomeranian',
    birthDate: 'April 20, 2026',
    gender: 'Female',
    status: 'Available',
    story: 'Mimi possesses an angelic, quiet sweetness that is rare in toy companions. She has a beautiful, pure snow-white coat that feels like clouds. Mimi is exceptionally calm, responding beautifully to soft classical music and quiet moments of devotion. She has been hand-raised in our lakeside nursery, developing an incredibly intuitive and peaceful temperament.',
    heritage: 'Sired by Champion Baron Whitecap of Zurich and out of Lady Sophia of Geneva. Her pedigree features five generations of international miniature show champions with perfect structural health.',
    personality: ['Serene', 'Gentle', 'Intuitive', 'Sweet-Natured'],
    details: {
      size: '4.1 lbs (projected adult weight)',
      coat: 'Cloud-soft premium double coat',
      color: 'Pure Snow White',
      registry: 'Companion Couture Elite Registry (CCER)',
      generation: 'Purebred (Certified Ancestry)'
    },
    image: '/images/pomeranian_mimi.png',
    gallery: [
      '/images/pomeranian_mimi.png',
      '/images/nursery.png',
      '/images/palm_beach.png'
    ],
    temperamentScore: '10.0/10',
    placementFee: 'Placement Fee Upon Request'
  },
  {
    id: 'bella',
    name: 'Bella',
    breed: 'Teacup Maltese',
    birthDate: 'April 28, 2026',
    gender: 'Female',
    status: 'Available',
    story: 'Bella is a study in timeless elegance. With her flowing, pure white silky coat and deep, expressive dark eyes, she commands attention with absolute grace. She is remarkably gentle, sweet-tempered, and enjoys peaceful walks in manicured gardens. Raised under our bespoke behavioral program, she integrates seamlessly into sophisticated, family-centered environments.',
    heritage: 'Daughter of Lord Winston of Yorkshire and Grand Champion Duchess Lily of Milan. Certified clear of all hereditary eye and joint conditions over seven generations of purebred Maltese nobility.',
    personality: ['Graceful', 'Gentle', 'Luminous', 'Devoted'],
    details: {
      size: '3.5 lbs (projected adult weight)',
      coat: 'Silky, floor-length flowing coat',
      color: 'Pure Alabaster White',
      registry: 'Companion Couture Elite Registry (CCER)',
      generation: 'Purebred (Certified Ancestry)'
    },
    image: '/images/maltese_bella.png',
    gallery: [
      '/images/maltese_bella.png',
      '/images/nursery.png',
      '/images/placement.png'
    ],
    temperamentScore: '9.9/10',
    placementFee: 'Placement Fee Upon Request'
  },
  {
    id: 'lily',
    name: 'Lily',
    breed: 'Teacup Maltese',
    birthDate: 'May 05, 2026',
    gender: 'Female',
    status: 'Available',
    story: 'Lily is a playful, affectionate angel with a sweet puppy cut that accentuates her dark, expressive eyes. She is exceptionally bright and responsive, adapting quickly to travel and new environments. She loves traveling in custom leather cases and is a perfect companion for private jet retreats and cosmopolitan lifestyles.',
    heritage: 'Sired by Champion Prince Pierre of Monaco and Countess Chloe of Versailles. Registered with CCER with complete health passports and genetic clearances.',
    personality: ['Playful', 'Adaptable', 'Bright', 'Affectionate'],
    details: {
      size: '4.5 lbs (projected adult weight)',
      coat: 'Bespoke puppy-cut silky waves',
      color: 'Pure Alabaster White',
      registry: 'Companion Couture Elite Registry (CCER)',
      generation: 'Purebred (Certified Ancestry)'
    },
    image: '/images/maltese_lily.png',
    gallery: [
      '/images/maltese_lily.png',
      '/images/nursery.png',
      '/images/palm_beach.png'
    ],
    temperamentScore: '9.8/10',
    placementFee: 'Placement Fee Upon Request'
  },
  {
    id: 'maverick',
    name: 'Maverick',
    breed: 'Medium Pomsky',
    birthDate: 'March 25, 2026',
    gender: 'Male',
    status: 'Available',
    story: 'Maverick combines a striking, athletic beauty with a warm, highly intelligent mind. He has a gorgeous wolf-grey double coat and piercing blue eyes that express deep attentiveness. He is exceptionally teachable, friendly, and thrives in active, family-centered estates. He has been fully socialized around children and standard home environments, exhibiting outstanding emotional stability.',
    heritage: 'Sired by Northern Lights Baron (Husky Champion) and out of Princess Amber of Bavaria (Pomeranian). Maverick represents a masterfully balanced Pomsky lineage, audited for hip, eye, and heart soundness.',
    personality: ['Intelligent', 'Athletic', 'Friendly', 'Alert'],
    details: {
      size: '24 lbs (projected adult weight)',
      coat: 'Luminous thick double coat',
      color: 'Siberian Grey & Charcoal Silver',
      registry: 'Companion Couture Elite Registry (CCER)',
      generation: 'F2 (Balanced Heritage)'
    },
    image: '/images/pomsky_maverick.png',
    gallery: [
      '/images/pomsky_maverick.png',
      '/images/nursery.png',
      '/images/placement.png'
    ],
    temperamentScore: '9.9/10',
    placementFee: 'Placement Fee Upon Request'
  },
  {
    id: 'skye',
    name: 'Skye',
    breed: 'Medium Pomsky',
    birthDate: 'April 02, 2026',
    gender: 'Male',
    status: 'Reserved',
    story: 'Skye is a majestic companion with a gorgeous amber-tan and white coat. Curious, loyal, and incredibly responsive, he thrives on structure and high-fidelity mental engagement. He is particularly fond of lakeside walks and keeping watch over large private estates with a proud, happy attentiveness. He brings an unpretentious, rich warmth to his family.',
    heritage: 'Out of Champion Aurora Borealis of Munich and Sired by Duke Sterling of Saxony. Audited and certified 100% clear of all hereditary traits, passing behavior metrics with distinction.',
    personality: ['Loyal', 'Curious', 'Gentle', 'Noble'],
    details: {
      size: '28 lbs (projected adult weight)',
      coat: 'Premium plush husky-patterned coat',
      color: 'Amber Tan & Pure Cream',
      registry: 'Companion Couture Elite Registry (CCER)',
      generation: 'F2 (Balanced Heritage)'
    },
    image: '/images/pomsky_skye.png',
    gallery: [
      '/images/pomsky_skye.png',
      '/images/nursery.png',
      '/images/baroness.png'
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
      'At Companion Couture, breeding is not a science; it is a hereditary art form. We believe that the earliest days of a companion dictate their life-long capacity for deep emotional attunement and intellectual poise. Thus, we have established our signature "Savoir-Faire Rearing Protocol"—an immersive behavioral development framework designed for early canine nobility.',
      'From Day 3 through Day 16, our neonate puppies undergo Bio-Sensor stimulation. These micro-exercises gently stimulate the neurological system, enhancing cardiovascular health, boosting immune resistance, and preparing their active minds to process future sensory inputs with total tranquility.',
      'As they emerge into toddlerhood, their environment transitions into an auditory and tactile wonderland. In our dedicated Parisian-style nurseries, classical piano selections, light jazz, and natural outdoor sounds are introduced at balanced frequencies. This prevents startle responses and prepares them for the rich, high-fidelity atmosphere of an elegant modern home.',
      'Nutrition, too, is tailored. Each mother and litter receives high-end organic, fresh-prepared menus, including pure pasture-raised quail egg, grass-fed bone broth, and wild-harvested salmon oil. This ensures that their physical forms and coat lusters reflect the pristine care of a five-star hospitality experience. The resulting companion is not just well-behaved; they are deeply serene, remarkably healthy, and profoundly connected to their human counterparts.'
    ],
    image: '/images/nursery.png'
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
    image: '/images/placement.png'
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
    image: '/images/nursery.png'
  }
];

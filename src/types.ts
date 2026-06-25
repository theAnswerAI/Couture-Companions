export type ActiveTab = 'home' | 'companions' | 'experience' | 'about' | 'journal' | 'application' | 'contact';

export interface Companion {
  id: string;
  name: string;
  breed: string;
  birthDate: string;
  gender: 'Male' | 'Female';
  status: 'Available' | 'Reserved' | 'Placed';
  story: string;
  heritage: string; // Narrative of the lineage
  personality: string[];
  details: {
    size: string;
    coat: string;
    color: string;
    registry: string;
    generation?: string;
  };
  image: string;
  gallery: string[];
  temperamentScore: string; // e.g. "9.9/10"
  placementFee: string; // e.g. "Placement Fee Upon Inquiry" or an exclusive amount
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string; // e.g., "Heritage", "Savoir-Faire", "Placement Protocols"
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface InquiryFormData {
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  residenceType: string;
  cityState: string;
  hasPets: string;
  experienceLevel: string;
  lifestyleOverview: string;
  companionChoiceId?: string; // Optional preferred companion
  additionalNotes: string;
  agreedToTerms: boolean;
}

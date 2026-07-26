import {
  Award,
  BookOpen,
  Camera,
  CircleUserRound,
  Crown,
  Globe2,
  HeartHandshake,
  Languages,
  MicVocal,
  Sparkles,
  Users,
  Wand2,
} from 'lucide-react';

export const sectionData = {
  stats: [
    { label: 'Members', value: '1,200+', icon: Users },
    { label: 'Years', value: '60+', icon: Crown },
    { label: 'Events', value: '180+', icon: Sparkles },
    { label: 'Awards', value: '25+', icon: Award },
  ],
  aboutPoints: [
    { title: 'Cultural fluency', description: 'Building comfort with speaking, listening, and representation.', icon: Languages },
    { title: 'Leadership growth', description: 'Providing a place to learn project ownership and public presence.', icon: Wand2 },
    { title: 'Academic bridge', description: 'Connecting language with student life, heritage, and opportunity.', icon: BookOpen },
    { title: 'Community care', description: 'A warm space with thoughtful programming and social connection.', icon: HeartHandshake },
  ],
  aboutStats: [
    { label: 'Active members', value: '1.2K', description: 'A growing network across UM faculties.', icon: Users },
    { label: 'Annual events', value: '38', description: 'Well-designed events, from workshops to forums.', icon: Sparkles },
    { label: 'Volunteer hours', value: '4.8K', description: 'Commitment to service, culture, and community.', icon: HeartHandshake },
    { label: 'Featured campaigns', value: '12', description: 'Premium campaigns with strong visual identity.', icon: Globe2 },
  ],
  features: [
    {
      title: 'Elegant Experience',
      description: 'A society website that feels deliberate, calm, and beautifully composed.',
      icon: Sparkles,
    },
    {
      title: 'Meaningful Events',
      description: 'Programming that balances culture, learning, and social energy.',
      icon: MicVocal,
    },
    {
      title: 'Leadership Pathway',
      description: 'Opportunities to join committees, lead projects, and build real confidence.',
      icon: CircleUserRound,
    },
    {
      title: 'Creative Identity',
      description: 'A visual language that makes the society feel premium and memorable.',
      icon: Camera,
    },
  ],
  activities: [
    {
      title: 'Moonlit Forum',
      date: 'Mar 2026',
      category: 'Conversation Night',
      summary: 'A curated evening where language, storytelling, and student voices meet under a cinematic atmosphere.',
      accent: 'from-[#A11217] to-[#6D0E12]',
    },
    {
      title: 'Campus Heritage Walk',
      date: 'Apr 2026',
      category: 'Cultural Immersion',
      summary: 'An intimate walk-and-talk experience that reconnects students with place, memory, and identity.',
      accent: 'from-[#1f2937] to-[#111827]',
    },
    {
      title: 'Chinese Showcase',
      date: 'May 2026',
      category: 'Performance Event',
      summary: 'A polished stage showcase featuring music, performance, and design with a premium event identity.',
      accent: 'from-[#b91c1c] to-[#f97316]',
    },
  ],
  committee: [
    { name: 'Liang Wen', role: 'President', image: 'LW', color: 'from-[#A11217] to-[#6D0E12]' },
    { name: 'Aina Tan', role: 'Vice President', image: 'AT', color: 'from-[#111827] to-[#374151]' },
    { name: 'Jia Hui', role: 'Secretary', image: 'JH', color: 'from-[#7c2d12] to-[#ef4444]' },
    { name: 'Marcus Ng', role: 'Treasurer', image: 'MN', color: 'from-[#7f1d1d] to-[#dc2626]' },
    { name: 'Mei Xuan', role: 'Head of Events', image: 'MX', color: 'from-[#991b1b] to-[#f59e0b]' },
    { name: 'Daniel Lim', role: 'Head of Media', image: 'DL', color: 'from-[#312e81] to-[#0f172a]' },
  ],
  gallery: [
    { title: 'Welcoming Ceremony', category: 'Orientation', span: 'md:col-span-2 md:row-span-2', tone: 'from-[#1f2937] via-[#111827] to-[#A11217]' },
    { title: 'Cultural Workshop', category: 'Learning', span: 'md:row-span-2', tone: 'from-[#A11217] via-[#ef4444] to-[#fb7185]' },
    { title: 'Committee Portraits', category: 'People', span: '', tone: 'from-[#0f172a] via-[#374151] to-[#6b7280]' },
    { title: 'Forum Stage', category: 'Event', span: '', tone: 'from-[#7c2d12] via-[#a16207] to-[#f59e0b]' },
    { title: 'Merch Preview', category: 'Brand', span: 'md:col-span-2', tone: 'from-[#4b5563] via-[#111827] to-[#1d4ed8]' },
  ],
  testimonials: [
    {
      quote: 'PBCUM feels like a brand, not just a club. The events are polished and genuinely fun to attend.',
      name: 'Sophie',
      role: 'Faculty of Arts student',
    },
    {
      quote: 'I joined for language practice and stayed because the community is warm, driven, and well organized.',
      name: 'Hafiz',
      role: 'First-year member',
    },
    {
      quote: 'The committee brings a rare amount of visual consistency and professionalism to campus life.',
      name: 'Xin Yi',
      role: 'Project volunteer',
    },
  ],
  partners: ['Universiti Malaya', 'UM Student Affairs', 'PBCUM Alumni', 'Campus Culture Lab', 'Redline Print', 'Moonstage Media'],
};

export type CaseStudy = {
  slug: string;
  number: string;
  tags: string[];
  title: string;
  metric: string;
  subtitle: string;
  image: string;
  // Full page content
  client: string;
  category: string;
  workPeriod: string;
  industry: string;
  brandDescription: string;
  challenge: string;
  strategy: string[];
  results: string[];
  heroImage: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'revenue-growth',
    number: '01',
    tags: ['Home Service', 'Paid Media'],
    title: 'Revenue Growth in 6 Months',
    metric: '+142%',
    subtitle: '3.1x Return on Ad Spend',
    image: '/revenue-growth-6months.png',
    client: 'Whirly Wash®',
    category: 'E-commerce Marketing Strategy',
    workPeriod: 'March 2023 - July 2023',
    industry: 'Home Services',
    brandDescription: 'Professional window cleaning and exterior washing brand serving Lake County. They had strong local awareness but needed to turn inquiries into booked jobs and scale acquisition predictably.',
    challenge: 'Had high site traffic from social channels but suffered from low conversion rates and cart abandonment. Their marketing was sporadic, lacking clear funnels and optimization.',
    strategy: [
      'Email & SMS Funnels: Designed lifecycle email automations and SMS campaigns to recover abandoned carts and re-engage users.',
      'Retargeting Ads: Rolled out Meta and TikTok retargeting ads focused on cart abandoners and social engagers.',
      'UX Audit & Optimization: Simplified checkout flow and improved product page hierarchy.',
      'Influencer Collaborations: Partnered with niche micro-influencers to drive direct response.',
    ],
    results: [
      '64% drop in cart abandonment',
      '2.7x ROI from SMS campaigns',
      '112% growth in repeat customers',
      '$180K+ revenue generated from email automations',
    ],
    heroImage: '/revenue-growth-6months.png',
  },
  {
    slug: 'cost-per-acquisition',
    number: '02',
    tags: ['Home Service', 'Website Creation'],
    title: 'Growth Marketing & Partnerships',
    metric: '+$12,000 dollars raised',
    subtitle: '10+ corporate sponsors',
    image: '/ama-uwm-case-study.png',
    client: 'University of Wisconsin-Milwaukee American Marketing Association',
    category: 'Social Media Marketing Strategy',
    workPeriod: 'January 2024 - Present',
    industry: 'Professional Marketing Organization',
    brandDescription: 'Performance marketing and growth infrastructure for ambitious brands. They needed to reduce cost per lead while scaling website creation and CRO offerings.',
    challenge: 'Growing a student organization while delivering meaningful professional development events required stronger partnerships, clearer internal structure, and a more scalable event strategy. Previous events had limited corporate involvement and inconsistent attendance, making it difficult to create sustained impact for members.',
    strategy: [
      'Corporate Partnership Development: Secured sponsorships from local and national organizations to fund programming and increase industry involvement.',
      'Event Strategy & Execution: Planned and executed the 3rd Annual AMA Regional Conference featuring competitions, workshops, and networking opportunities.',
      'Organizational Leadership: Restructured internal roles and improved communication systems to streamline project execution across the executive board.',
      'Professional Development Focus: Designed events and competitions that provided practical marketing, sales, and interview experience for students.',
    ],
    results: [
      '$12,000+ in corporate sponsorships secured',
      '3rd Annual AMA Regional Conference successfully executed',
      '10+ corporate partners engaged',
      'Hundreds of students reached through competitions, workshops, and networking events',
    ],
    heroImage: '/ama-uwm-case-study.png',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

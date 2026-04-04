export interface Creator {
  id: number;
  slug: string;
  name: string;
  role: string;
  description: string;
  metrics: string[];
  profileImage: string;
  avatarImage: string;

  // Profile fields
  bio: string;
  experience: string;
  industry: string;
  retainer: string;
  skills: string[];
  certifications: { name: string; issuer: string }[];
  portfolio: { title: string; description: string; image: string; link: string }[];
}

export const creators: Creator[] = [
  {
    id: 1,
    slug: "jane-smith",
    name: "Jane Smith",
    role: "Performance Marketer | DTC & SaaS",
    description: "Scaled ROAS from 1.5 to 4.2 in 60 days.",
    metrics: ["ROAS 4.2", "CTR 3.8%", "CPC ₹9.4"],
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",

    bio: "Helping DTC brands scale profitably using paid ads.",
    experience: "5+ years",
    industry: "DTC & SaaS",
    retainer: "₹15,000/mo",
    skills: ["Meta Ads", "Google Ads", "CRO"],
    certifications: [{ name: "Meta Blueprint", issuer: "Meta" }],
    portfolio: [
      {
        title: "Skincare Growth",
        description: "4.5x ROAS in 3 months",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600",
        link: "#",
      },
    ],
  },

  {
    id: 2,
    slug: "alex-rivera",
    name: "Alex Rivera",
    role: "Growth Lead | E-commerce",
    description: "Managed $2M+ ad spend.",
    metrics: ["ROAS 5.1", "CTR 4.2%", "CPC ₹12.4"],
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",

    bio: "Scaling eCommerce brands with performance marketing.",
    experience: "7+ years",
    industry: "E-commerce",
    retainer: "₹20,000/mo",
   skills: ["Google Ads", "TikTok Ads", "Analytics", "Funnel Optimization"],
certifications: [
  { name: "Google Ads Certification", issuer: "Google" }
],
portfolio: [
  {
    title: "E-commerce Scaling",
    description: "Scaled store to ₹50L/month revenue",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600",
    link: "#",
  }
]
  },

  {
    id: 3,
    slug: "sarah-chen",
    name: "Sarah Chen",
    role: "UGC Specialist | Beauty",
    description: "Reduced CPA by 40%.",
    metrics: ["CPA -40%", "CTR 5.5%", "ROAS 3.9"],
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",

    bio: "Creating viral UGC content for beauty brands.",
    experience: "4+ years",
    industry: "Beauty",
    retainer: "₹12,000/mo",
   skills: ["UGC", "Content Creation", "Video Editing"],
certifications: [
  { name: "TikTok Creative Strategy", issuer: "TikTok" }
],
portfolio: [
  {
    title: "Beauty Brand Campaign",
    description: "Reduced CPA by 40%",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
    link: "#",
  }
]
  },

  {
    id: 4,
    slug: "michael-brown",
    name: "Michael Brown",
    role: "Paid Ads Specialist | SaaS",
    description: "Cut CAC by 35%.",
    metrics: ["CAC -35%", "CTR 3.2%", "ROAS 4.5"],
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",

    bio: "Helping SaaS companies scale profitably.",
    experience: "6+ years",
    industry: "SaaS",
    retainer: "₹18,000/mo",
   skills: ["Paid Ads", "Analytics", "Meta Ads", "Google Ads"],
certifications: [
  { name: "Meta Ads Certified", issuer: "Meta" }
],
portfolio: [
  {
    title: "SaaS Scaling Campaign",
    description: "Reduced CAC by 35% while scaling",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    link: "#",
  }
]
  },

  {
    id: 5,
    slug: "emma-wilson",
    name: "Emma Wilson",
    role: "Content Strategist",
    description: "Grew creators 50x.",
    metrics: ["Growth 50x", "Engagement 8%"],
    profileImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",

    bio: "Building personal brands organically.",
    experience: "5+ years",
    industry: "Content",
    retainer: "₹14,000/mo",
  skills: ["Content Strategy", "Personal Branding", "SEO Content"],
certifications: [
  { name: "Content Marketing", issuer: "HubSpot" }
],
portfolio: [
  {
    title: "Creator Growth Strategy",
    description: "Scaled creators from 10K to 500K followers",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600",
    link: "#",
  }
]
  },

  {
    id: 6,
    slug: "daniel-lee",
    name: "Daniel Lee",
    role: "SEO Expert | Affiliate",
    description: "Ranked 100+ keywords.",
    metrics: ["Traffic +300%", "CTR 6.2%"],
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",

    bio: "SEO expert focused on organic growth.",
    experience: "6+ years",
    industry: "SEO",
    retainer: "₹18,000/mo",
  skills: ["SEO", "Technical SEO", "Keyword Research", "Content Strategy"],
certifications: [
  { name: "Google SEO Certification", issuer: "Google" }
],
portfolio: [
  {
    title: "Affiliate Blog Growth",
    description: "500K monthly traffic",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    link: "#",
  }
]
  },

  {
    id: 7,
    slug: "olivia-martin",
    name: "Olivia Martin",
    role: "Social Media Manager",
    description: "Boosted engagement 4x.",
    metrics: ["Engagement 4x"],
    profileImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",

    bio: "Managing social media growth for brands.",
    experience: "4+ years",
    industry: "Social Media",
    retainer: "₹12,000/mo",
   skills: ["Instagram Growth", "Reels Strategy", "Social Media"],
certifications: [
  { name: "Social Media Marketing", issuer: "Meta" }
],
portfolio: [
  {
    title: "Fashion Brand Growth",
    description: "Boosted engagement by 4x",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600",
    link: "#",
  }
]
  },

//   {
//     id: 8,
//     slug: "ryan-cooper",
//     name: "Ryan Cooper",
//     role: "Google Ads Expert",
//     description: "Generated 10K leads.",
//     metrics: ["Leads 10K+"],
//     profileImage: "https://i.ibb.co/0zFZfkZ/Whats-App-Image.jpg",
//     avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan",

//     bio: "Lead generation expert using Google Ads.",
//     experience: "5+ years",
//     industry: "Lead Gen",
//     retainer: "₹16,000/mo",
//    skills: ["Google Ads", "Lead Generation", "Conversion Tracking"],
// certifications: [
//   { name: "Google Ads Expert", issuer: "Google" }
// ],
// portfolio: [
//   {
//     title: "Lead Gen Campaign",
//     description: "Generated 10K+ leads",
//     image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600",
//     link: "#",
//   }
// ]
//   },

  {
    id: 9,
    slug: "ava-thomas",
    name: "Ava Thomas",
    role: "Influencer Marketer",
    description: "Worked with 200+ influencers.",
    metrics: ["ROI 6x"],
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ava",

    bio: "Connecting brands with influencers globally.",
    experience: "5+ years",
    industry: "Influencer Marketing",
    retainer: "₹15,000/mo",
   skills: ["Influencer Marketing", "Campaign Management"],
certifications: [
  { name: "Influencer Marketing Pro", issuer: "HubSpot" }
],
portfolio: [
  {
    title: "Global Influencer Campaign",
    description: "Reached 5M+ audience",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
    link: "#",
  }
]
  },

  {
    id: 10,
    slug: "ethan-harris",
    name: "Ethan Harris",
    role: "Email Marketer",
    description: "35% open rate campaigns.",
    metrics: ["Open 35%"],
    profileImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan",

    bio: "Email marketing specialist for SaaS.",
    experience: "5+ years",
    industry: "Email Marketing",
    retainer: "₹13,000/mo",
   skills: ["Email Automation", "Copywriting", "CRM"],
certifications: [
  { name: "Email Marketing", issuer: "HubSpot" }
],
portfolio: [
  {
    title: "SaaS Email Funnel",
    description: "Achieved 35% open rate",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600",
    link: "#",
  }
]
  },

  {
    id: 11,
    slug: "mia-johnson",
    name: "Mia Johnson",
    role: "UGC Creator",
    description: "500+ creatives.",
    metrics: ["Videos 500+"],
    profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",

    bio: "Creating high-performing ad creatives.",
    experience: "4+ years",
    industry: "UGC",
    retainer: "₹10,000/mo",
   skills: ["UGC", "Video Ads", "Creative Strategy"],
certifications: [
  { name: "UGC Ads Mastery", issuer: "TikTok" }
],
portfolio: [
  {
    title: "UGC Ad Campaign",
    description: "Produced 500+ ad creatives",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600",
    link: "#",
  }
]
  },

  {
    id: 12,
    slug: "noah-walker",
    name: "Noah Walker",
    role: "App Marketer",
    description: "1M installs.",
    metrics: ["Installs 1M+"],
    profileImage: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noah",

    bio: "Scaling mobile apps globally.",
    experience: "5+ years",
    industry: "Apps",
    retainer: "₹17,000/mo",
    skills: ["App Marketing", "ASO", "Paid Ads"],
certifications: [
  { name: "App Growth Certification", issuer: "Google" }
],
portfolio: [
  {
    title: "App Scaling",
    description: "Reached 1M installs",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    link: "#",
  }
]
  },

  {
    id: 13,
    slug: "isabella-moore",
    name: "Isabella Moore",
    role: "Brand Strategist",
    description: "3x revenue growth.",
    metrics: ["Revenue 3x"],
    profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella",

    bio: "Helping brands scale revenue.",
    experience: "6+ years",
    industry: "Branding",
    retainer: "₹18,000/mo",
    skills: ["Brand Strategy", "Positioning", "Market Research"],
certifications: [
  { name: "Brand Strategy", issuer: "Coursera" }
],
portfolio: [
  {
    title: "DTC Brand Growth",
    description: "Achieved 3x revenue growth",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
    link: "#",
  }
]
  },

  {
    id: 14,
    slug: "liam-scott",
    name: "Liam Scott",
    role: "Conversion Expert",
    description: "Improved CVR 2.5x.",
    metrics: ["CVR 2.5x"],
    profileImage: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liam",

    bio: "Optimizing funnels for better conversions.",
    experience: "6+ years",
    industry: "CRO",
    retainer: "₹18,000/mo",
    skills: ["CRO", "Funnels", "A/B Testing"],
certifications: [
  { name: "Conversion Optimization", issuer: "CXL" }
],
portfolio: [
  {
    title: "Conversion Optimization",
    description: "Improved CVR by 2.5x",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    link: "#",
  }
]
  },

  {
    id: 15,
    slug: "charlotte-king",
    name: "Charlotte King",
    role: "TikTok Ads Specialist",
    description: "10M+ views.",
    metrics: ["Views 10M+"],
    profileImage: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=600",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlotte",

    bio: "Scaling brands through TikTok ads.",
    experience: "4+ years",
    industry: "TikTok Ads",
    retainer: "₹14,000/mo",
   skills: ["TikTok Ads", "Short-form Video", "Creative Ads"],
certifications: [
  { name: "TikTok Ads Certification", issuer: "TikTok" }
],
portfolio: [
  {
    title: "TikTok Campaign",
    description: "Achieved 10M+ views",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600",
    link: "#",
  }
]
  },
];  
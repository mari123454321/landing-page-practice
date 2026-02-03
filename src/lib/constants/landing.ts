import { 
  Shield, Zap, Lock, Globe, HeadphonesIcon, BarChart3,
  Briefcase, LineChart, PiggyBank, Users, TrendingUp, PieChart, Award,
  LucideIcon, 
  Landmark,
  Layers
} from "lucide-react";

// ==========================================
// TYPE DEFINITIONS
// ==========================================

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Service {
  label: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FooterLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

// ==========================================
// HERO SECTION
// ==========================================

export const HERO_SECTION = {
  badge: "WELCOME TO GLENFORD",
  headingStart: "Your Journey to Financial",
  headingHighlight: "Freedom",
  headingEnd: "Starts Here",
  description: "Your journey to financial freedom starts here with Glenford. Let our expert strategies and personalized guidance help you build lasting wealth and achieve your investment goals with confidence.",
  primaryCta: "Get Started",
  secondaryCta: "Learn More",
};

// ==========================================
// SERVICES SECTION
// ==========================================

export const SERVICES: Service[] = [
  { label: "Portfolio Management" },
  { label: "Financial Planning" },
  { label: "Retirement Solutions" },
  { label: "Wealth Advisory" },
  { label: "Risk Assessment" },
  { label: "Trading Consulting" },
  { label: "Asset Allocation" },
  { label: "Market Insights" },
];

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    title: "Global Wealth Management",
    description: "Comprehensive wealth management solutions tailored to your global investment needs and objectives.",
    icon: Globe,
  },
  {
    title: "Personal & Corporate Banking",
    description: "Seamless banking services designed for both personal wealth and corporate financial management.",
    icon: Landmark,
  },
  {
    title: "Asset Company Management",
    description: "Expert management of your asset portfolio with strategic allocation and growth optimization.",
    icon: Layers,
  },
  {
    title: "Trading & Bank Investment",
    description: "Professional trading services and bank investment opportunities for maximum returns.",
    icon: TrendingUp,
  },
];

export const SERVICES_SECTION = {
  badge: "WHO WE ARE",
  heading: "Explore Our Full Range of Investment Services Today.",
  description: "Discover comprehensive investment solutions designed to help you achieve your financial goals with confidence and security.",
  ctaText: "Discover More",
  expertTitle: "Professional Expert",
  expertSubtitle: "Trusted by thousands worldwide",
  yearsExperience: "15+",
  yearsLabel: "Years Experience",
};

// ==========================================
// FEATURES SECTION
// ==========================================

export const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Bank-level security protocols protect your investments and personal data around the clock.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute trades in milliseconds with our cutting-edge trading infrastructure.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your financial information stays private with our advanced encryption systems.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Trade and invest in markets worldwide from a single unified platform.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our expert team is available around the clock to assist with any questions.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Make informed decisions with comprehensive market analysis and insights.",
  },
];

export const FEATURES_SECTION = {
  badge: "WHY CHOOSE US",
  heading: "Built for Modern Investors",
  description: "Experience the future of investing with our comprehensive suite of features designed for both beginners and seasoned investors.",
};

// ==========================================
// STATS SECTION
// ==========================================

export const STATS: Stat[] = [
  { icon: Users, value: "50K+", label: "Active Investors" },
  { icon: TrendingUp, value: "$2.5B", label: "Assets Managed" },
  { icon: Globe, value: "120+", label: "Countries Served" },
  { icon: Award, value: "99%", label: "Client Satisfaction" },
];

export const STATS_SECTION = {
  heading: "Join Glenford and Invest with",
  headingHighlight: "Confidence",
  description: "Trust our proven track record and join thousands of investors who have already achieved their financial goals with Glenford Capital.",
  ctaText: "Start Your Investment Journey",
};

// ==========================================
// TESTIMONIALS SECTION
// ==========================================

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Entrepreneur",
    content: "Glenford has completely transformed how I manage my investments. The platform is intuitive and the returns have exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Tech Executive",
    content: "The level of personalized service I've received from Glenford is unmatched. Their team truly understands my financial goals.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Business Owner",
    content: "After trying multiple platforms, Glenford stands out for its security, ease of use, and exceptional customer support.",
    rating: 5,
  },
];

export const TESTIMONIALS_SECTION = {
  badge: "TESTIMONIALS",
  heading: "What Our Clients Say",
  description: "Hear from investors who have achieved their financial goals with Glenford Capital.",
};

// ==========================================
// CTA SECTION
// ==========================================

export const CTA_SECTION = {
  badge: "GET STARTED TODAY",
  heading: "Ready to Start Your Investment Journey?",
  description: "Join thousands of successful investors who trust Glenford Capital. Create your account today and take the first step towards financial freedom.",
  primaryCta: "Create Free Account",
  secondaryCta: "Schedule a Call",
  trustIndicators: [
    "No credit card required",
    "Free portfolio analysis",
    "Cancel anytime",
  ],
};

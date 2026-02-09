import {
  Shield,
  Zap,
  Lock,
  Globe,
  HeadphonesIcon,
  BarChart3,
  Briefcase,
  LineChart,
  PiggyBank,
  Users,
  TrendingUp,
  PieChart,
  Award,
  LucideIcon,
  Landmark,
  Layers,
  Coins,
  ArrowUpDown,
  Building2,
  Wallet,
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
  icon: LucideIcon;
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

export interface CryptoTicker {
  symbol: string;
  pair: string;
  price: string;
  change: string;
  isPositive: boolean;
}

export interface TradingInstrument {
  icon: LucideIcon;
  label: string;
  description: string;
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

export const CRYPTO_TICKERS: CryptoTicker[] = [
  {
    symbol: "BTC",
    pair: "BTC/USD",
    price: "$71,361",
    change: "+2.45%",
    isPositive: true,
  },
  {
    symbol: "ETH",
    pair: "ETH/USD",
    price: "$2,116.52",
    change: "+1.89%",
    isPositive: true,
  },
  {
    symbol: "SOL",
    pair: "SOL/USD",
    price: "$91.22",
    change: "-0.57%",
    isPositive: false,
  },
  {
    symbol: "BNB",
    pair: "BNB/USD",
    price: "$697.84",
    change: "+3.26%",
    isPositive: true,
  },
  {
    symbol: "XRP",
    pair: "XRP/USD",
    price: "$1.44",
    change: "-1.88%",
    isPositive: false,
  },
  {
    symbol: "ADA",
    pair: "ADA/USD",
    price: "$0.282",
    change: "+0.61%",
    isPositive: true,
  },
];

export const HERO_SECTION = {
  badge: "FULLY REGULATED TRADING PLATFORM",
  headingStart: "Trade The Markets With",
  headingHighlight: "Confidence",
  headingEnd: "",
  description:
    "Access CFDs on Crypto, Forex, Commodities, Bonds, Metals, Energies, Shares, and Indices with ultra-fast execution on a fully regulated platform.",
  primaryCta: "Start Trading Now",
  secondaryCta: "Learn More",
  features: [
    "Ultra-fast execution",
    "Regulated & secure",
    "Global markets access",
  ],
};

// Hero Dashboard Mock Data
export const HERO_DASHBOARD = {
  brand: {
    logo: "C",
    name: "capwise",
  },
  navItems: ["Dashboard", "Exchange", "Wallet", "Market"],
  userInitials: "JD",
  stats: [
    {
      icon: "bitcoin",
      label: "Bitcoin",
      sublabel: "BTC/USD",
    },
    {
      label: "24h Change",
      value: "+0.53%",
      isPositive: true,
    },
    {
      label: "Last Price",
      value: "18,372.59 USD",
    },
    {
      label: "24h Low",
      value: "18,372.59 USD",
    },
  ],
  chartBars: [
    40, 65, 45, 80, 55, 70, 35, 90, 60, 75, 50, 85, 45, 70, 55, 80, 65, 40, 75,
    60,
  ],
  sidebar: {
    currency: "Bitcoin",
    balanceLabel: "Current Balance",
    balance: "4,000",
    balanceUnit: "BTC",
    volumeLabel: "Volume (24h)",
    volumeChange: "+2.36%",
    usdValue: "4,000",
    usdUnit: "USD",
    buyButton: "Buy",
    sellButton: "Sell",
  },
};

// ==========================================
// SERVICES SECTION
// ==========================================

export const TRADING_INSTRUMENTS: TradingInstrument[] = [
  {
    icon: Coins,
    label: "Crypto",
    description: "Top crypto pairs in real-time",
  },
  {
    icon: ArrowUpDown,
    label: "Forex",
    description: "Major FX pairs & pricing",
  },
  {
    icon: Building2,
    label: "Commodities",
    description: "Gold, oil, gas and more",
  },
  {
    icon: TrendingUp,
    label: "Stocks",
    description: "Popular equities & indices",
  },
];

export const SERVICES: Service[] = [
  { icon: Coins, label: "Crypto Trading" },
  { icon: LineChart, label: "Forex Trading" },
  { icon: Wallet, label: "Digital Wallets" },
  { icon: Users, label: "Copy Trading" },
  { icon: Shield, label: "Secure Custody" },
  { icon: TrendingUp, label: "CFD Trading" },
  { icon: PieChart, label: "Portfolio Analytics" },
  { icon: BarChart3, label: "Market Analysis" },
];

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    title: "Cryptocurrency Trading",
    description:
      "Trade Bitcoin, Ethereum, and 100+ altcoins with competitive spreads and instant execution.",
    icon: Globe,
  },
  {
    title: "Forex & CFD Trading",
    description:
      "Access global forex markets with leverage up to 1:500 and tight spreads from 0.0 pips.",
    icon: Landmark,
  },
  {
    title: "Copy Trading Platform",
    description:
      "Follow and copy successful traders automatically with our advanced social trading features.",
    icon: Layers,
  },
  {
    title: "Secure Asset Custody",
    description:
      "Your assets are protected with institutional-grade security and cold storage solutions.",
    icon: TrendingUp,
  },
];

export const SERVICES_SECTION = {
  badge: "WHO WE ARE",
  heading: "500+ Trading Instruments at Your Fingertips",
  description:
    "Trade crypto, forex, commodities, and more on a single platform with institutional-grade security and lightning-fast execution.",
  ctaText: "Discover More",
  expertTitle: "Expert Traders",
  expertSubtitle: "Trusted by traders worldwide",
  yearsExperience: "10+",
  yearsLabel: "Years in Markets",
  instrumentCount: "500+",
  instrumentLabel: "Trading Instruments",
};

// ==========================================
// FEATURES SECTION
// ==========================================

export const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: "Regulated & Secure",
    description:
      "Fully regulated platform with bank-level security, 2FA, and cold storage protection.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Execute trades in milliseconds with ultra-low latency infrastructure and 99.9% uptime.",
  },
  {
    icon: Lock,
    title: "Secure Custody",
    description:
      "Your crypto assets are protected with institutional-grade cold storage and insurance.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description:
      "Trade 24/7 across global crypto, forex, and commodity markets from anywhere.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Our trading specialists are available around the clock to assist with any questions.",
  },
  {
    icon: BarChart3,
    title: "Pro Trading Tools",
    description:
      "Advanced charting, technical indicators, and real-time market data at your fingertips.",
  },
];

export const FEATURES_SECTION = {
  badge: "WHY CHOOSE US",
  heading: "Built for Modern Investors",
  description:
    "Experience the future of investing with our comprehensive suite of features designed for both beginners and seasoned investors.",
};

// ==========================================
// STATS SECTION
// ==========================================

export const STATS: Stat[] = [
  { icon: Users, value: "150K+", label: "Active Traders" },
  { icon: TrendingUp, value: "$5.2B", label: "Daily Volume" },
  { icon: Globe, value: "120+", label: "Countries Served" },
  { icon: Award, value: "99.9%", label: "Uptime" },
];

export const STATS_SECTION = {
  heading: "Join Thousands of Traders with",
  headingHighlight: "Confidence",
  description:
    "Trust our proven track record and join thousands of traders who execute millions of trades daily on our secure platform.",
  ctaText: "Start Trading Today",
};

// ==========================================
// TESTIMONIALS SECTION
// ==========================================

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Day Trader",
    content:
      "The execution speed is incredible. I've tried many platforms but the low latency and tight spreads make a real difference in my trading.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Crypto Investor",
    content:
      "Finally a platform that combines crypto and forex trading with institutional-grade security. The copy trading feature is a game-changer.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Portfolio Manager",
    content:
      "The advanced charting tools and real-time analytics help me make informed decisions. Customer support is available 24/7 which is crucial.",
    rating: 5,
  },
];

export const TESTIMONIALS_SECTION = {
  badge: "TESTIMONIALS",
  heading: "What Our Clients Say",
  description:
    "Hear from investors who have achieved their financial goals with Glenford Capital.",
};

// ==========================================
// CTA SECTION
// ==========================================

export const CTA_SECTION = {
  badge: "GET STARTED TODAY",
  heading: "Ready to Start Trading?",
  description:
    "Join thousands of successful traders who trust Glenford. Create your account today and access global markets with competitive spreads.",
  primaryCta: "Open Trading Account",
  secondaryCta: "Login",
  trustIndicators: [
    "Free demo account",
    "No hidden fees",
    "Instant withdrawals",
  ],
};

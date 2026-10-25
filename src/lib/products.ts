export type License = {
  name: string;
  price: number;
  period: "one-time" | "year" | "month";
  seats: string;
  highlighted?: boolean;
  features: string[];
  /** Lemon Squeezy variant ID for this license tier — set this once you've
   * created the matching product/variant in your Lemon Squeezy store.
   * See SETUP.md. Leave empty to show a "coming soon" state. */
  lemonVariantId?: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  icon: string;
  rating: number;
  reviews: number;
  badge?: string;
  gradient: string;
  /** CSS linear-gradient matching `gradient`, for use outside Tailwind (e.g. OG images). */
  ogGradient: string;
  highlights: string[];
  licenses: License[];
};

export const products: Product[] = [
  {
    slug: "pixelforge-studio",
    name: "PixelForge Studio",
    tagline: "Professional design & prototyping suite",
    description:
      "PixelForge Studio is a full-featured design and prototyping application for teams who need to move from idea to pixel-perfect interface without switching tools. Vector editing, auto-layout, and real-time collaboration built in.",
    category: "Design",
    icon: "🎨",
    rating: 4.8,
    reviews: 2140,
    badge: "Best Seller",
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    ogGradient: "linear-gradient(135deg, #d946ef, #a855f7, #6366f1)",
    highlights: [
      "Real-time multiplayer editing",
      "Auto-layout & responsive components",
      "Unlimited cloud projects",
      "Plugin marketplace access",
    ],
    licenses: [
      {
        name: "Personal",
        price: 49,
        period: "year",
        seats: "1 seat",
        features: ["Core editor & prototyping", "5 GB cloud storage", "Community support"],
      },
      {
        name: "Team",
        price: 149,
        period: "year",
        seats: "Up to 10 seats",
        highlighted: true,
        features: [
          "Everything in Personal",
          "Real-time collaboration",
          "100 GB cloud storage",
          "Priority email support",
        ],
      },
      {
        name: "Lifetime",
        price: 399,
        period: "one-time",
        seats: "1 seat",
        features: ["All future updates", "Unlimited cloud storage", "Premium plugin bundle"],
      },
    ],
  },
  {
    slug: "codehive-ide",
    name: "CodeHive IDE",
    tagline: "AI-assisted code editor for fast-moving teams",
    description:
      "CodeHive IDE pairs a blazing-fast editor with an integrated AI assistant that understands your whole codebase — autocomplete, refactors, and inline docs without leaving the keyboard.",
    category: "Developer Tools",
    icon: "💻",
    rating: 4.9,
    reviews: 3820,
    badge: "Editor's Choice",
    gradient: "from-sky-500 via-cyan-500 to-emerald-500",
    ogGradient: "linear-gradient(135deg, #0ea5e9, #06b6d4, #10b981)",
    highlights: [
      "AI pair-programmer built in",
      "Multi-language LSP support",
      "Remote & container dev environments",
      "Git-native workflow",
    ],
    licenses: [
      {
        name: "Solo",
        price: 59,
        period: "year",
        seats: "1 seat",
        features: ["AI autocomplete", "Local & remote projects", "Standard support"],
      },
      {
        name: "Pro",
        price: 19,
        period: "month",
        seats: "1 seat",
        highlighted: true,
        features: ["Everything in Solo", "Unlimited AI requests", "Team workspaces", "Priority support"],
      },
      {
        name: "Enterprise",
        price: 499,
        period: "year",
        seats: "Per 10 seats",
        features: ["SSO & audit logs", "On-prem deployment option", "Dedicated success manager"],
      },
    ],
  },
  {
    slug: "ledgerly-finance",
    name: "Ledgerly",
    tagline: "Invoicing & bookkeeping for small businesses",
    description:
      "Ledgerly keeps invoicing, expenses, and tax-ready reports in one clean dashboard — built for freelancers and small teams who want accounting software that doesn't feel like accounting software.",
    category: "Business",
    icon: "📊",
    rating: 4.6,
    reviews: 1290,
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    ogGradient: "linear-gradient(135deg, #fbbf24, #f97316, #f43f5e)",
    highlights: [
      "Automated invoicing & reminders",
      "Multi-currency support",
      "Bank-grade data encryption",
      "One-click tax reports",
    ],
    licenses: [
      {
        name: "Starter",
        price: 29,
        period: "month",
        seats: "1 user",
        features: ["Unlimited invoices", "Expense tracking", "Email support"],
      },
      {
        name: "Business",
        price: 79,
        period: "month",
        seats: "Up to 5 users",
        highlighted: true,
        features: ["Everything in Starter", "Multi-currency", "Custom reports", "Priority support"],
      },
      {
        name: "Lifetime",
        price: 899,
        period: "one-time",
        seats: "Up to 5 users",
        features: ["All future updates", "No recurring fees", "Dedicated onboarding"],
      },
    ],
  },
  {
    slug: "nimbus-vpn",
    name: "Nimbus VPN Pro",
    tagline: "Secure, no-log VPN for individuals & teams",
    description:
      "Nimbus VPN Pro encrypts your connection across unlimited devices with a strict no-log policy, kill-switch, and servers in 60+ countries — built for privacy-first browsing and remote work.",
    category: "Security",
    icon: "🛡️",
    rating: 4.7,
    reviews: 5460,
    badge: "Top Rated",
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    ogGradient: "linear-gradient(135deg, #10b981, #14b8a6, #3b82f6)",
    highlights: [
      "Military-grade AES-256 encryption",
      "Strict no-log policy",
      "60+ country server network",
      "Unlimited device activation",
    ],
    licenses: [
      {
        name: "1 Year",
        price: 39,
        period: "year",
        seats: "5 devices",
        features: ["All server locations", "Kill switch", "Standard support"],
      },
      {
        name: "2 Years",
        price: 59,
        period: "year",
        seats: "10 devices",
        highlighted: true,
        features: ["Everything in 1 Year", "Dedicated IP add-on", "Priority support"],
      },
      {
        name: "Lifetime",
        price: 199,
        period: "one-time",
        seats: "10 devices",
        features: ["All future updates", "Dedicated IP included", "VIP support"],
      },
    ],
  },
  {
    slug: "clipwave-editor",
    name: "ClipWave Editor",
    tagline: "AI-powered video editing for creators",
    description:
      "ClipWave Editor turns raw footage into publish-ready videos fast — automatic captions, scene detection, and one-click reframing for every platform, powered by on-device AI.",
    category: "Media",
    icon: "🎬",
    rating: 4.5,
    reviews: 980,
    gradient: "from-rose-500 via-pink-500 to-purple-500",
    ogGradient: "linear-gradient(135deg, #f43f5e, #ec4899, #a855f7)",
    highlights: [
      "AI auto-captions & translation",
      "One-click multi-platform export",
      "4K & HDR timeline editing",
      "Royalty-free music library",
    ],
    licenses: [
      {
        name: "Creator",
        price: 9,
        period: "month",
        seats: "1 seat",
        features: ["720p/1080p export", "Auto captions", "Stock music library"],
      },
      {
        name: "Studio",
        price: 24,
        period: "month",
        seats: "3 seats",
        highlighted: true,
        features: ["Everything in Creator", "4K & HDR export", "Team asset library", "Priority rendering"],
      },
      {
        name: "Lifetime",
        price: 349,
        period: "one-time",
        seats: "3 seats",
        features: ["All future updates", "4K & HDR export", "VIP render queue"],
      },
    ],
  },
  {
    slug: "taskgrid-pm",
    name: "TaskGrid",
    tagline: "Project management that keeps teams in sync",
    description:
      "TaskGrid blends boards, timelines, and docs in one workspace so product, design, and engineering teams can plan, track, and ship without stitching tools together.",
    category: "Business",
    icon: "🗂️",
    rating: 4.7,
    reviews: 2670,
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
    ogGradient: "linear-gradient(135deg, #6366f1, #3b82f6, #06b6d4)",
    highlights: [
      "Boards, timelines & docs in one place",
      "Automations & custom workflows",
      "Native time tracking",
      "50+ integrations",
    ],
    licenses: [
      {
        name: "Free",
        price: 0,
        period: "month",
        seats: "Up to 5 users",
        features: ["Unlimited boards", "Basic automations", "Community support"],
      },
      {
        name: "Business",
        price: 12,
        period: "month",
        seats: "Per user",
        highlighted: true,
        features: ["Everything in Free", "Advanced automations", "Timeline view", "Priority support"],
      },
      {
        name: "Enterprise",
        price: 25,
        period: "month",
        seats: "Per user",
        features: ["SSO & permissions", "Dedicated success manager", "Custom SLAs"],
      },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function startingPrice(product: Product) {
  return Math.min(...product.licenses.map((l) => l.price));
}

export const categories = Array.from(new Set(products.map((p) => p.category)));

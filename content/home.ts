// ─── (types unchanged) ───────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "New",
    badgeOuter: "Introducing LeadFlow",
    titleBefore: "Supercharge Your Sales with",
    titleHighlight: "LeadFlow",
    titleAfter: "",
    subtitle:
      "All-in-one CRM to manage leads, contacts, and deals—built for growing teams.",
    primaryCta: { label: "Get Started Free", href: "#pricing" },
    secondaryCta: { label: "Book a Demo", href: "#contact" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "LeadFlow dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why LeadFlow",
    heading: "A practical CRM for growing teams",
    description:
      "LeadFlow gives you modern tools to manage leads, contacts, and pipeline, so you can focus on building relationships and closing more deals.",
    items: [
      {
        icon: "Blocks",
        title: "Seamless Lead Management",
        description: "Capture, organize, and follow up with every lead in your sales funnel.",
      },
      {
        icon: "Users",
        title: "Contact Insights",
        description: "Centralize customer information and track every interaction.",
      },
      {
        icon: "LineChart",
        title: "Optimized Sales Pipeline",
        description: "Visualize and manage deals to close sales faster.",
      },
      {
        icon: "Sparkle",
        title: "Intuitive Workflow",
        description: "Easy-to-use dashboard lets your team track progress and win more deals.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Everything you need to manage sales",
    subtitle:
      "LeadFlow is purpose-built for growing businesses that need CRM simplicity with powerful capabilities.",
    items: [
      { icon: "TabletSmartphone", title: "Modern, Responsive UI", description: "Works beautifully on desktop and mobile devices." },
      { icon: "BadgeCheck", title: "Team Collaboration", description: "Invite your entire sales team and manage permissions with ease." },
      { icon: "Goal", title: "Full Sales Visibility", description: "Track deal progress and spot bottlenecks at a glance." },
      { icon: "PictureInPicture", title: "Deal & Activity Timeline", description: "See the full history of every interaction, activity, and note." },
      { icon: "MousePointerClick", title: "Quick Actions", description: "Log tasks, create reminders, and accelerate deal flow." },
      { icon: "UserCheck", title: "Contact & Lead Tracking", description: "Your entire pipeline, contacts, and activity in one place." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "LeadFlow core capabilities",
    subtitle:
      "Our all-in-one platform helps SMBs automate, collaborate, and grow sales efficiently.",
    items: [
      { title: "Lead & Contact Management", description: "Centralize all deals, leads, and clients for a seamless workflow.", pro: false },
      { title: "Pipeline Visualization", description: "Customizable stages for any sales process.", pro: false },
      { title: "Touchpoint History", description: "Never miss a beat with detailed activity logs.", pro: false },
      { title: "Productivity Tools", description: "Work faster with reminders, notes, and templates.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Loved by Sales Teams",
    reviews: [
      { image: "/demo-img.jpg", name: "Amira S.", role: "Sales Manager, Alignify", comment: "Switching to LeadFlow made our pipeline super clear and let us focus on closing, not admin.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Lucas R.", role: "Founder, CloudPivot", comment: "We onboarded our whole team in a day, and now manage all our contacts in one place.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Priya G.", role: "Revenue Ops, SunSync", comment: "Tracking leads and deals is finally just a click away. LeadFlow keeps it simple and powerful.", rating: 5.0 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Meet the Team",
    heading: "We build for your sales success",
    members: [
      // Remain unchanged for now. Update as real LeadFlow team members join.
      {
        imageUrl: "/team1.jpg",
        firstName: "Meghna",
        lastName: "Rajawat",
        positions: ["Founder", "CEO"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/meghnarajawat/" },
          { name: "Github", url: "https://github.com/leadflowhq" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Product",
        lastName: "Team",
        positions: ["Product", "UX/UI"],
        socialNetworks: [],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple Pricing for Every Team",
    subtitle: "Start free, upgrade as you grow—no credit card required.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "For solo sellers or startups just getting started.",
        buttonText: "Get Started Free",
        benefits: ["Unlimited leads & contacts", "Pipeline dashboard", "Basic reminders", "Community support", "Full onboarding"],
      },
      {
        title: "Growth",
        popular: true,
        price: 49,
        description: "For sales teams ready to scale.",
        buttonText: "Book a Demo",
        benefits: ["Team collaboration", "Advanced reporting", "Sales automations", "Priority email support", "Custom pipeline stages"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "For large organizations needing control & support.",
        buttonText: "Contact us",
        benefits: ["Account manager", "Custom integrations", "SSO/SAML", "Onboarding & migration", "Phone support"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to the LeadFlow team",
    description:
      "Request a demo, ask questions, or learn how LeadFlow drives growth for your team.",
    mailtoAddress: "meghna.rajawat@fxis.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • Global" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "meghna.rajawat@fxis.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["CRM Demo", "Sales Workflow", "Onboarding", "Integration", "Custom Request"],
    formSubmitLabel: "Send inquiry",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "LeadFlow Common Questions",
    items: [
      { question: "Can I try LeadFlow free?", answer: "Yes! Every account starts on our free plan—no credit card needed." },
      { question: "Is LeadFlow suitable for remote teams?", answer: "Absolutely. It's built for teams anywhere with online collaboration." },
      { question: "Does LeadFlow integrate with email?", answer: "Email integration is coming soon! Stay tuned for updates." },
      { question: "Do you offer onboarding?", answer: "Yes, our help docs and team will guide you through setup anytime." },
      { question: "Is my data safe?", answer: "Yes. Your CRM data stays private and secure in the cloud." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "LeadFlow",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "meghna.rajawat@fxis.ai", href: "mailto:meghna.rajawat@fxis.ai" },
          { label: "Github", href: "https://github.com/leadflowhq" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://leadflow.com/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/leadflowhq" },
        ],
      },
    ],
    copyright: "© LeadFlow. All rights reserved.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "LeadFlow",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#contact", label: "Contact" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "LeadFlow preview" },
    features: [
      { title: "Seamless Lead Management", description: "Capture, organize, and follow up with every lead in your sales funnel." },
      { title: "Contact Insights", description: "Centralize customer information and track every interaction." },
      { title: "Optimized Sales Pipeline", description: "Visualize and manage deals to close sales faster." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/leadflowhq", ariaLabel: "View LeadFlow on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;
export function getHomeContent(): HomeContent {
  return homeContent;
}
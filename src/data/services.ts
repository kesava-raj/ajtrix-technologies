export type ServiceIconKey =
  | 'web'
  | 'marketing'
  | 'branding'
  | 'software'
  | 'consulting'
  | 'presentation';

export interface ServiceCategoryGroup {
  title: string;
  description: string;
  items: string[];
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  icon: ServiceIconKey;
  image: string;
  detailImage: string;
  features: string[];
  whoItsFor: string;
  approachTitle: string;
  approachBody: string[];
  categories: ServiceCategoryGroup[];
  process: ServiceProcessStep[];
  outcomes: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-digital-experiences',
    title: 'Web & Digital Experiences',
    tagline: 'Websites and online stores built to look sharp, load fast, and bring in real inquiries.',
    summary:
      'Fast, thoughtful websites built to look sharp on every screen and turn visitors into real inquiries, from company sites to online stores.',
    description:
      'Your website is often the first impression a customer gets of your business. We design and build custom corporate sites, landing pages, e-commerce stores, and interactive web experiences that load quickly, feel natural to use, and make it easy for people to get in touch or buy.',
    icon: 'web',
    image: '/images/services/web-digital-experiences.jpg',
    detailImage: '/images/services/web-digital-experiences-detail.jpg',
    features: [
      'Custom & Corporate Websites',
      'E-commerce & Landing Pages',
      'UI/UX Design & Prototyping',
      'Interactive & 3D Web Experiences',
      'Website Redesigns & Migrations',
      'Performance & Ongoing Maintenance',
    ],
    whoItsFor:
      'Businesses launching a new site, outgrowing an older template, or looking to turn more of their existing traffic into calls, signups, or sales.',
    approachTitle: 'Built for people using phones and laptops, not just screenshots',
    approachBody: [
      'A lot of websites look fine in a presentation mockup and feel sluggish or confusing once they go live. We plan the page structure around what your visitor needs to know first, test layouts across screen sizes early, and keep animations smooth without slowing the page down.',
      'Whether we are building a brand-new company site, migrating an existing domain cleanly, or refreshing an e-commerce store, you see working prototypes along the way and get a site your team can maintain without headaches.',
    ],
    categories: [
      {
        title: 'Websites & Online Stores',
        description: 'Sites built around your business model, from focused landing pages to full storefronts.',
        items: [
          'Custom Website Design & Development',
          'Corporate Website Development',
          'Business Website Development',
          'Landing Page Development',
          'E-commerce Development',
          'Portfolio Website Development',
          'Responsive Website Development',
        ],
      },
      {
        title: 'Design, Flow & Interactivity',
        description: 'Clear layouts, tested user journeys, and interactive touches where they add clarity.',
        items: [
          'UI/UX Design',
          'Wireframing & Prototyping',
          'Conversion-Focused Design',
          'Interactive Website Development',
          'Animated Website Development',
          '3D Web Experiences',
        ],
      },
      {
        title: 'Upgrades, Migrations & Care',
        description: 'Keep what works, fix what slows you down, and stay reliable after launch.',
        items: [
          'Website Redesign',
          'Website Revamp',
          'Website Migration',
          'Website Optimization',
          'Website Performance Optimization',
          'Website Maintenance',
        ],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Structure & Wireframes',
        description: 'We map out every page, call to action, and user path before touching final visuals.',
      },
      {
        step: '02',
        title: 'UI Design & Prototype',
        description: 'You review clickable desktop and mobile layouts so spacing, copy, and feel are right.',
      },
      {
        step: '03',
        title: 'Build & Speed Tuning',
        description: 'We develop with clean code, compress assets, and test across browsers and devices.',
      },
      {
        step: '04',
        title: 'Launch & Upkeep',
        description: 'Smooth domain cutover, analytics setup, and ongoing updates whenever you need them.',
      },
    ],
    outcomes: [
      'Mobile-ready pages that load quickly on real connections',
      'Clear navigation and inquiry paths tailored to your buyers',
      'Clean handoff and ongoing maintenance support after launch',
    ],
  },
  {
    id: 'digital-marketing-growth',
    title: 'Digital Marketing & Growth',
    tagline: 'Consistent content, social management, and paid campaigns tied to actual leads.',
    summary:
      'Practical marketing that puts your business in front of the right people through social media, content, and targeted Meta and Google ads.',
    description:
      'Getting consistent leads takes more than posting occasionally. We help you plan your content, manage social channels, write clear copy, and run focused ad campaigns on Meta and Google while tracking what actually converts.',
    icon: 'marketing',
    image: '/images/services/digital-marketing-growth.jpg',
    detailImage: '/images/services/digital-marketing-growth-detail.jpg',
    features: [
      'Digital & Growth Strategy',
      'Social Media & Short-Form Video',
      'Content Creation & Copywriting',
      'Meta Ads (Facebook & Instagram)',
      'Google Search & Display Ads',
      'Analytics & Conversion Tracking',
    ],
    whoItsFor:
      'Teams that want steady inquiries and stronger local or regional visibility without guessing what to post or wasting ad spend.',
    approachTitle: 'Clear messaging first, then targeted distribution',
    approachBody: [
      'Running ads on weak messaging only burns budget faster. We start by sharpening what you say to customers, planning a realistic monthly calendar of posts, reels, and copy, and matching each channel to what it does best.',
      'Once campaigns are live on Meta or Google, we set up proper conversion tracking so you can see which keywords, creatives, and audiences actually bring in inquiries, then adjust week by week.',
    ],
    categories: [
      {
        title: 'Strategy, Social & Content',
        description: 'Consistent presence across the feeds your audience checks every day.',
        items: [
          'Digital Marketing Strategy',
          'Digital Growth Strategy',
          'Social Media Management',
          'Social Media Strategy',
          'Social Media Content Planning',
          'Content Creation',
          'Social Media Design',
          'Reels & Short-Form Video',
          'Copywriting',
          'Content Marketing',
        ],
      },
      {
        title: 'Paid Advertising & Campaigns',
        description: 'Targeted search, social, and retargeting campaigns built to convert.',
        items: [
          'Meta Ads Management',
          'Facebook Ads',
          'Instagram Ads',
          'Google Ads Management',
          'Search Advertising',
          'Display Advertising',
          'Retargeting Campaigns',
          'Paid Advertising Strategy',
          'Campaign Management',
          'Campaign Optimization',
        ],
      },
      {
        title: 'Tracking & Local Visibility',
        description: 'Clear reporting and strong local search presence where your customers live.',
        items: [
          'Marketing Analytics',
          'Performance Reporting',
          'Conversion Tracking',
          'Local Digital Marketing',
          'Geo-Targeted Advertising',
          'Google Business Profile Optimization',
        ],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Audit & Audience Fit',
        description: 'We review your current channels, offers, and local or regional competitors.',
      },
      {
        step: '02',
        title: 'Content & Ad Creative',
        description: 'We produce posts, reels, ad copy, and visuals matched to each placement.',
      },
      {
        step: '03',
        title: 'Campaign Launch & Tracking',
        description: 'Meta, Google, and local profiles go live with verified conversion events.',
      },
      {
        step: '04',
        title: 'Plain-English Reporting',
        description: 'Regular check-ins showing cost per lead, winning creatives, and next steps.',
      },
    ],
    outcomes: [
      'A steady publishing rhythm across your core social channels',
      'Meta and Google campaigns measured by leads and inquiries, not vanity clicks',
      'Stronger local visibility through optimized Google Business profiles',
    ],
  },
  {
    id: 'branding-creative',
    title: 'Branding & Creative',
    tagline: 'Distinctive visual identities and everyday design assets that stay consistent everywhere.',
    summary:
      'Clear, recognizable brand identities and everyday design work: logos, brand guidelines, social creatives, brochures, and company profiles.',
    description:
      'When your visuals are consistent, people remember and trust your business faster. We shape your brand positioning, design your logo and visual identity, and create clean marketing graphics for both digital campaigns and print.',
    icon: 'branding',
    image: '/images/services/branding-creative.jpg',
    detailImage: '/images/services/branding-creative-detail.jpg',
    features: [
      'Brand Strategy & Positioning',
      'Logo & Visual Identity Design',
      'Brand Guidelines & Refresh',
      'Social Media & Ad Creatives',
      'Brochures, Flyers & Print Collateral',
      'Creative & Art Direction',
    ],
    whoItsFor:
      'New ventures building their look from scratch, or established companies whose visuals feel dated or scattered across decks, social feeds, and print.',
    approachTitle: 'Practical design systems your team can actually use',
    approachBody: [
      'Good branding is more than one nice logo on a white slide. It is a color palette, typography, and layout style that works equally well on a tiny mobile avatar, a paid ad banner, a printed brochure, and your website header.',
      'We work through clear directions with you, refine the chosen identity, and package practical guidelines alongside ready-to-use templates and print files so everything stays cohesive.',
    ],
    categories: [
      {
        title: 'Brand Identity & Strategy',
        description: 'Foundational identity work that sets the tone for how your company shows up.',
        items: [
          'Brand Strategy',
          'Brand Positioning',
          'Logo Design',
          'Brand Identity Design',
          'Visual Identity Development',
          'Brand Guidelines',
          'Rebranding',
          'Brand Refresh',
        ],
      },
      {
        title: 'Campaign & Digital Creatives',
        description: 'On-brand graphics made for social feeds, ads, and online promotions.',
        items: [
          'Graphic Design',
          'Marketing Creative Design',
          'Advertising Creative Design',
          'Social Media Creatives',
          'Promotional Design',
          'Digital Banner Design',
        ],
      },
      {
        title: 'Print Collateral & Direction',
        description: 'Tactile sales materials and visual direction for launches and events.',
        items: [
          'Brochure Design',
          'Flyer Design',
          'Business Card Design',
          'Company Profile Design',
          'Creative Direction',
          'Art Direction',
        ],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Positioning & Moodboards',
        description: 'We align on your market, personality, and visual references before sketching.',
      },
      {
        step: '02',
        title: 'Identity Exploration',
        description: 'Focused logo, type, and color concepts shown in real-world mockups.',
      },
      {
        step: '03',
        title: 'Guidelines & Collateral',
        description: 'We build out your brand book, social templates, and print-ready files.',
      },
      {
        step: '04',
        title: 'Organized Asset Delivery',
        description: 'Every vector, font spec, and editable format packaged cleanly for your team.',
      },
    ],
    outcomes: [
      'A recognizable identity that holds up across web, social, and print',
      'Clear brand guidelines anyone on your team or vendor list can follow',
      'Print-ready and digital creative files delivered in clean, organized folders',
    ],
  },
  {
    id: 'custom-software-products',
    title: 'Custom Software & Products',
    tagline: 'Web apps, portals, CRMs, and SaaS platforms built around your actual workflow.',
    summary:
      'Software built around how your team actually works: custom web apps, SaaS products, client portals, CRMs, and internal tools.',
    description:
      'Off-the-shelf tools only get you so far before spreadsheets and workarounds pile up. We build custom web applications, SaaS platforms, admin dashboards, booking systems, and API integrations that fit your workflow cleanly.',
    icon: 'software',
    image: '/images/services/custom-software-products.jpg',
    detailImage: '/images/services/custom-software-products-detail.jpg',
    features: [
      'Web Applications & SaaS MVPs',
      'Custom CRM & ERP Systems',
      'Client Portals & Admin Dashboards',
      'Booking & Inventory Systems',
      'Product UI/UX & Prototyping',
      'API & Payment Integrations',
    ],
    whoItsFor:
      'Founders launching a SaaS MVP or operations teams tired of stitching together spreadsheets, manual approvals, and disconnected tools.',
    approachTitle: 'Built around the way your people actually work',
    approachBody: [
      'Before writing software, we sit down with your workflow and strip away unnecessary complexity. A great internal tool or client portal feels obvious on day one, with clear roles, fast search, and reliable data.',
      'We ship in practical milestones so your team can test real screens early, connect payment gateways or existing databases smoothly, and expand features cleanly as usage grows.',
    ],
    categories: [
      {
        title: 'Custom Apps & SaaS Products',
        description: 'From early product MVPs to full customer-facing software platforms.',
        items: [
          'Custom Software Development',
          'Web Application Development',
          'SaaS Development',
          'MVP Development',
          'Custom Business Applications',
          'Product Development',
          'Product Prototyping',
          'Product UI/UX Design',
          'Product Modernization',
        ],
      },
      {
        title: 'Portals, Dashboards & Systems',
        description: 'Centralized tools for your staff, partners, and customers.',
        items: [
          'CRM Development',
          'ERP Development',
          'Business Management Systems',
          'Internal Tools Development',
          'Client Portal Development',
          'Customer Portal Development',
          'Admin Dashboard Development',
          'Analytics Dashboard Development',
        ],
      },
      {
        title: 'Operations & Integrations',
        description: 'Scheduling, inventory, workflow logic, and clean third-party connections.',
        items: [
          'Booking System Development',
          'Appointment Management Systems',
          'Inventory Management Systems',
          'Workflow Management Systems',
          'Operations Management Systems',
          'API Development & Integration',
          'Third-Party Integrations',
          'Payment Gateway Integration',
          'Database Integration',
        ],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Workflow Mapping',
        description: 'We document user roles, data flows, and edge cases with your team.',
      },
      {
        step: '02',
        title: 'Interactive Prototype',
        description: 'Clickable product UI/UX screens to validate usability before full build.',
      },
      {
        step: '03',
        title: 'Iterative Engineering',
        description: 'Milestone releases with APIs, payments, and permissions wired cleanly.',
      },
      {
        step: '04',
        title: 'Deployment & Support',
        description: 'Production rollout, team onboarding, and dependable post-launch care.',
      },
    ],
    outcomes: [
      'Software tailored to your exact rules instead of rigid SaaS workarounds',
      'Clean dashboards and portals that save hours of manual coordination',
      'Maintainable architecture ready for new integrations and growth',
    ],
  },
  {
    id: 'digital-transformation-consulting',
    title: 'Digital Transformation & Consulting',
    tagline: 'Practical roadmaps to digitize operations, update legacy tools, and roll out cleanly.',
    summary:
      'Hands-on tech advice to help you replace slow manual steps, modernize older software, and roll out better workflows without disruption.',
    description:
      'Upgrading how a company works shouldn’t mean breaking what already brings in business. We look closely at your current tools, map out a realistic plan to digitize manual processes, modernize legacy systems, and support your team through the transition.',
    icon: 'consulting',
    image: '/images/services/digital-transformation-consulting.jpg',
    detailImage: '/images/services/digital-transformation-consulting-detail.jpg',
    features: [
      'Technology & Transformation Roadmaps',
      'Business & Process Digitization',
      'Digital Workflow Implementation',
      'Legacy System Modernization',
      'Digital Infrastructure Planning',
      'Software Rollout Consulting',
    ],
    whoItsFor:
      'Growing businesses still relying on paper trails, aging software, or scattered spreadsheets that want a realistic upgrade plan.',
    approachTitle: 'Honest advice without pushing software you do not need',
    approachBody: [
      'Digital transformation often fails when companies buy expensive platforms nobody on the floor wants to use. We start by shadowing how work moves through your business today and spotting the bottlenecks that actually cost time.',
      'From there, we put together a phased roadmap covering process digitization, infrastructure planning, and legacy modernization so your team adopts each improvement smoothly.',
    ],
    categories: [
      {
        title: 'Strategy & Planning',
        description: 'Clear technical direction grounded in budgets, timelines, and team readiness.',
        items: [
          'Technology Consulting',
          'Digital Transformation Consulting',
          'Digital Transformation Strategy',
          'Technology Strategy',
          'Digital Infrastructure Planning',
        ],
      },
      {
        title: 'Digitization & Modernization',
        description: 'Moving manual work onto reliable systems and updating aging tools.',
        items: [
          'Business Digitization',
          'Process Digitization',
          'Digital Workflow Implementation',
          'Legacy System Modernization',
          'Business Technology Modernization',
          'Software Implementation Consulting',
        ],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Operations Review',
        description: 'We audit current tools, spreadsheets, and handoffs across departments.',
      },
      {
        step: '02',
        title: 'Phased Roadmap',
        description: 'Clear priorities ranked by impact, effort, and budget.',
      },
      {
        step: '03',
        title: 'Guided Implementation',
        description: 'Hands-on help configuring workflows, migrating data, or modernizing systems.',
      },
      {
        step: '04',
        title: 'Team Adoption',
        description: 'Documentation and walkthroughs so your staff feels comfortable from day one.',
      },
    ],
    outcomes: [
      'A clear step-by-step roadmap without confusing jargon',
      'Fewer manual handoffs, duplicate entries, and lost requests',
      'Smooth modernization of older systems with minimal downtime',
    ],
  },
  {
    id: 'business-presentation-design',
    title: 'Business & Presentation Design',
    tagline: 'Pitch decks, proposals, and company profiles built to make your case crystal clear.',
    summary:
      'Clear, well-structured pitch decks, proposals, and company profiles that help you explain your value and win the room.',
    description:
      'Even the strongest business case falls flat if the slides are cluttered. We turn your numbers, strategy, and story into clean investor pitch decks, sales presentations, proposals, and corporate documents people actually want to read.',
    icon: 'presentation',
    image: '/images/services/business-presentation-design.jpg',
    detailImage: '/images/services/business-presentation-design-detail.jpg',
    features: [
      'Investor & Pitch Deck Design',
      'Corporate & Sales Presentations',
      'Business Proposals & Reports',
      'Company Profiles & Brochures',
      'Product Presentation Decks',
      'Executive Document Design',
    ],
    whoItsFor:
      'Founders preparing for investor meetings, sales teams pitching enterprise buyers, and companies refreshing their corporate profiles and proposals.',
    approachTitle: 'Clear story first, clean slides second',
    approachBody: [
      'Most presentation decks try to cram an entire document onto every slide. We help organize your points into a logical flow so each slide makes one clear point supported by clean typography, readable charts, and purposeful visuals.',
      'You receive fully editable decks and documents that match your brand and stay easy for your team to update before any meeting.',
    ],
    categories: [
      {
        title: 'Pitch, Sales & Product Decks',
        description: 'Presentations designed to hold attention in investor and client meetings.',
        items: [
          'Pitch Deck Design',
          'Investor Presentation Design',
          'Corporate Presentation Design',
          'Sales Presentation Design',
          'Product Presentation Design',
        ],
      },
      {
        title: 'Proposals, Profiles & Reports',
        description: 'Polished leave-behind documents and credentials that reinforce credibility.',
        items: [
          'Business Proposal Design',
          'Company Profile Design',
          'Corporate Brochure Design',
          'Business Report Design',
          'Document Design',
        ],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Narrative & Outline',
        description: 'We review your draft notes or raw deck and tighten the story structure.',
      },
      {
        step: '02',
        title: 'Visual Direction',
        description: 'Key sample slides establish typography, charts, and layout rhythm.',
      },
      {
        step: '03',
        title: 'Full Deck & Document Build',
        description: 'Every slide, table, diagram, and page crafted cleanly and consistently.',
      },
      {
        step: '04',
        title: 'Editable Handoff',
        description: 'Delivered in editable presentation and print-ready PDF formats.',
      },
    ],
    outcomes: [
      'Decks and proposals that get your core message across in seconds',
      'Clean data visuals and diagrams instead of walls of bullet text',
      'Editable master files your team can reuse for future pitches',
    ],
  },
];

export const getServiceById = (id?: string): ServiceItem | undefined =>
  SERVICES.find((service) => service.id === id);

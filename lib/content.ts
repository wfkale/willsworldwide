export const company = {
  name: "Wills Worldwide Company Limited",
  shortName: "Wills Worldwide",
  tagline: "Connecting Africa to the World",
  badge: "Trusted Logistics • Clearing • Forwarding",
  address: "Sinza, near Double Tree Hotel, Dar es Salaam, Tanzania",
  location: "Dar es Salaam, Tanzania",
  email: "info@willsworldwide.com",
  phone: "+255 658 666 000",
  whatsapp: "+255658666000",
  languages: "Swahili & English",
  businessType: "Private Limited Company",
  activity:
    "Logistics, Transportation of Goods in Transit & Local Transportation",
  region: "Tanzania & East Africa (with International Connectivity)",
  year: new Date().getFullYear(),
  website: "https://willsworldwide.com",
  heroSubheading:
    "Reliable freight, logistics, clearing and forwarding solutions across Tanzania, East Africa and global trade corridors.",
  closingStatement:
    "At Wills Worldwide Company Limited, we believe logistics is more than transportation — it is the connection between businesses, markets, and opportunities.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/coverage", label: "Coverage" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 6, suffix: "+", label: "Industries Served" },
  { value: 0, suffix: "", label: "Regional Coverage", display: "EAC" },
  { value: 100, suffix: "%", label: "Customer Commitment" },
];

export const mapCountries = [
  { id: "tz", name: "Tanzania", x: 55, y: 42, hub: true },
  { id: "ke", name: "Kenya", x: 62, y: 18 },
  { id: "ug", name: "Uganda", x: 52, y: 14 },
  { id: "rw", name: "Rwanda", x: 48, y: 24 },
  { id: "bi", name: "Burundi", x: 46, y: 28 },
  { id: "cd", name: "DRC", x: 38, y: 32 },
  { id: "mw", name: "Malawi", x: 52, y: 52 },
  { id: "zm", name: "Zambia", x: 42, y: 52 },
  { id: "mz", name: "Mozambique", x: 62, y: 55 },
  { id: "zw", name: "Zimbabwe", x: 46, y: 62 },
  { id: "bw", name: "Botswana", x: 34, y: 66 },
  { id: "na", name: "Namibia", x: 20, y: 68 },
  { id: "za", name: "South Africa", x: 38, y: 78 },
  { id: "ao", name: "Angola", x: 22, y: 48 },
  { id: "ls", name: "Lesotho", x: 40, y: 82 },
  { id: "sz", name: "Eswatini", x: 44, y: 76 },
  { id: "mg", name: "Madagascar", x: 72, y: 72 },
  { id: "mu", name: "Mauritius", x: 78, y: 58 },
  { id: "km", name: "Comoros", x: 58, y: 10 },
];

export const mapRoutes = [
  { from: "tz", to: "ke", label: "Dar → Nairobi", services: "Transit Cargo • Road Freight" },
  { from: "tz", to: "ug", label: "Dar → Kampala", services: "Transit Cargo • Customs Support" },
  { from: "tz", to: "rw", label: "Dar → Kigali", services: "Cross-Border • Distribution" },
  { from: "tz", to: "zm", label: "Dar → Lusaka", services: "Regional Freight • Clearing" },
  { from: "tz", to: "cd", label: "Dar → Lubumbashi", services: "Mining Logistics • Transit" },
  { from: "tz", to: "mw", label: "Dar → Blantyre", services: "Regional Distribution • Transit" },
  { from: "tz", to: "mz", label: "Dar → Maputo", services: "Coastal Corridor • Freight" },
  { from: "tz", to: "za", label: "Dar → Johannesburg", services: "SADC Corridor • Long-Haul" },
  { from: "tz", to: "zw", label: "Dar → Harare", services: "Cross-Border • Road Freight" },
];

export const corridors = [
  {
    route: "Dar es Salaam → Nairobi",
    distance: "~900 km",
    duration: "2–3 days",
    services: ["Transit cargo", "Customs coordination", "Road freight"],
  },
  {
    route: "Dar es Salaam → Kampala",
    distance: "~1,400 km",
    duration: "3–5 days",
    services: ["Cross-border transit", "Documentation", "Cargo security"],
  },
  {
    route: "Dar es Salaam → Kigali",
    distance: "~1,300 km",
    duration: "3–4 days",
    services: ["Regional distribution", "Border clearance", "Tracking"],
  },
  {
    route: "Dar es Salaam → Lusaka",
    distance: "~1,800 km",
    duration: "5–7 days",
    services: ["Long-haul freight", "Supply chain support", "Customs"],
  },
  {
    route: "Dar es Salaam → Lubumbashi",
    distance: "~2,000 km",
    duration: "6–8 days",
    services: ["Mining logistics", "Heavy cargo", "Transit permits"],
  },
];

export const borderExpertise = [
  {
    title: "Customs Clearance",
    text: "Expert coordination with customs authorities for smooth import, export and transit cargo processing.",
  },
  {
    title: "Documentation",
    text: "Complete documentation support including transit bonds, permits and trade compliance paperwork.",
  },
  {
    title: "Transit Permits",
    text: "Efficient handling of cross-border transit permits across EAC and regional corridors.",
  },
  {
    title: "Cargo Security",
    text: "Secure handling protocols and monitoring to protect cargo integrity throughout every journey.",
  },
];

export const whyChooseUs = [
  {
    icon: "shield",
    title: "Professional Logistics Management",
    text: "Industry expertise and structured operations from planning through to final delivery.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Aerial view of a warehouse with organised inventory and logistics operations",
  },
  {
    icon: "clock",
    title: "Safe & Secure Cargo Handling",
    text: "Rigorous handling protocols designed to protect cargo integrity at every touchpoint.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Palletised cargo stored securely in a controlled warehouse aisle",
  },
  {
    icon: "route",
    title: "Timely Delivery Services",
    text: "An optimised network ensuring on-time delivery across all regional service routes.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Heavy freight truck moving cargo along a regional delivery route",
  },
  {
    icon: "dollar",
    title: "Competitive Pricing",
    text: "Market-competitive rates with flexible models tailored to businesses of all sizes.",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "High-volume container terminal operations supporting cost-efficient freight rates",
  },
  {
    icon: "globe",
    title: "Strong Regional Network",
    text: "Established transport connectivity across East Africa opening new trade opportunities.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Long-haul freight truck on a regional East African transport corridor",
  },
  {
    icon: "users",
    title: "Customer-Focused Operations",
    text: "Client success drives everything we do — we listen, adapt and exceed expectations.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business partners celebrating a successful client outcome together",
  },
];

export const homeServices = [
  {
    title: "Transit Cargo",
    description:
      "Efficient cross-border transportation across East Africa with professional handling at every customs and border point.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    alt: "Heavy freight trucks on a regional highway",
  },
  {
    title: "Freight Forwarding",
    description:
      "End-to-end freight coordination connecting Tanzanian businesses to regional and international trade corridors.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    alt: "Cargo ship at sea carrying international freight",
  },
  {
    title: "Import & Export",
    description:
      "Smooth cargo movement and logistics coordination for importers and exporters at competitive rates.",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80",
    alt: "Stacked shipping containers at a commercial port yard",
  },
  {
    title: "Supply Chain Support",
    description:
      "Comprehensive supply chain management from procurement logistics to final delivery.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern warehouse with logistics operations",
  },
  {
    title: "Local Distribution",
    description:
      "Reliable last-mile delivery across Tanzania for wholesalers, retailers and industrial clients.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    alt: "Distribution warehouse with stocked shelves for local delivery",
  },
];

export const processSteps = [
  { step: "Request", description: "Submit your cargo requirements" },
  { step: "Planning", description: "Route and logistics planning" },
  { step: "Transport", description: "Secure cargo movement" },
  { step: "Tracking", description: "Real-time coordination" },
  { step: "Delivery", description: "On-time final delivery" },
];

export const industries = [
  {
    id: "agriculture",
    title: "Agriculture",
    text: "Moving agricultural produce, farm inputs and agri-goods from farm to market.",
    angle: 0,
  },
  {
    id: "mining",
    title: "Mining",
    text: "Heavy equipment transport and supply chain support for extraction operations.",
    angle: 60,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    text: "Raw material sourcing and finished goods distribution for production operations.",
    angle: 120,
  },
  {
    id: "construction",
    title: "Construction",
    text: "Transporting materials, machinery and equipment to project sites on schedule.",
    angle: 180,
  },
  {
    id: "retail",
    title: "Retail & Wholesale",
    text: "Reliable distribution of consumer goods across Tanzania and the region.",
    angle: 240,
  },
  {
    id: "trade",
    title: "Import & Export",
    text: "End-to-end logistics from port clearance coordination to final delivery.",
    angle: 300,
  },
];

export const about = {
  whoWeAre:
    "Wills Worldwide Company Limited is a Tanzania-based logistics and transportation company specializing in the movement of goods locally and internationally. We provide reliable cargo transportation, transit logistics, and supply chain solutions designed to support businesses across Africa and global markets.",
  story: [
    "Founded in 2021 in Dar es Salaam, Wills Worldwide emerged with a clear mission: to bridge Tanzania's commercial hub with regional and global trade corridors through dependable logistics solutions.",
    "From our headquarters near Sinza, we have grown into a trusted partner for importers, exporters, wholesalers, manufacturers and retailers across East Africa — delivering cargo with professionalism, transparency and speed.",
    "Today we operate across multiple industries and corridors, combining local expertise with international standards to move Africa forward, one shipment at a time.",
  ],
  timeline: [
    { year: "2021", title: "Founded", text: "Wills Worldwide established in Dar es Salaam with a focus on transit and local cargo transportation." },
    { year: "2022", title: "Growth", text: "Expanded fleet and client base across Tanzania, building reputation for reliability and competitive pricing." },
    { year: "2023", title: "Regional Expansion", text: "Extended operations across East Africa corridors including Kenya, Uganda and Rwanda trade routes." },
    { year: "2026", title: "Future Vision", text: "Scaling technology-enabled logistics capabilities to become a leading African freight partner." },
  ],
  culture: [
    { title: "Integrity", text: "Honest and transparent in all dealings with clients, partners and authorities." },
    { title: "Reliability", text: "Consistent delivery you can count on, every route, every shipment." },
    { title: "Accountability", text: "Full ownership of every outcome from pickup to final delivery." },
  ],
};

export const vision = {
  statement:
    "To become one of Africa's leading logistics and transportation companies by connecting businesses to regional and global markets through reliable and innovative logistics solutions.",
  mission: [
    "To provide safe, efficient, and affordable transportation services that businesses can rely on.",
    "To support trade and economic growth across Africa through seamless logistics connectivity.",
    "To ensure customer satisfaction through timely delivery, transparency and professionalism.",
    "To connect Africa with worldwide markets through dependable and innovative logistics solutions.",
  ],
  values: [
    { title: "Integrity", text: "Honest and transparent in all dealings." },
    { title: "Reliability", text: "Consistent delivery you can count on." },
    { title: "Efficiency", text: "Optimised processes, reduced waste." },
    { title: "Accountability", text: "Ownership of every outcome." },
    { title: "Customer First", text: "Client success is our success." },
  ],
};

export const leadership = [
  {
    name: "Wilfred Makamba",
    role: "Managing Director",
    email: "wilfred@willsworldwide.com",
    initials: "WM",
  },
  {
    name: "Isabella Makamba",
    role: "Chief Executive Officer",
    email: "isabella@willsworldwide.com",
    initials: "IM",
  },
];

export const serviceDetails = [
  {
    slug: "transit-cargo",
    title: "Transit Cargo Transportation",
    summary: "Cross-border cargo movement across East Africa with professional customs and border handling.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    accent: "from-orange to-amber-500",
    whatWeDo: "We transport goods across borders and transit routes within East Africa and beyond, ensuring smooth movement through customs and border points with professional handling at every stage.",
    benefits: ["Cross-border expertise", "Customs coordination", "Secure cargo handling", "Competitive transit rates"],
    industries: ["Import & Export", "Manufacturing", "Retail & Wholesale"],
    flow: ["Cargo pickup", "Documentation", "Border transit", "Delivery"],
  },
  {
    slug: "road-freight",
    title: "Road Freight",
    summary: "Domestic and cross-border road transport with experienced drivers and maintained vehicles.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    accent: "from-navy to-cyan",
    whatWeDo: "Cross-border and domestic road transport solutions across East Africa, with experienced drivers and well-maintained vehicles for reliable cargo delivery.",
    benefits: ["Fleet reliability", "Experienced drivers", "Route optimisation", "Flexible scheduling"],
    industries: ["Construction", "Mining", "Agriculture"],
    flow: ["Route planning", "Loading", "Transit", "Unloading"],
  },
  {
    slug: "cargo-handling",
    title: "Cargo Handling",
    summary: "Professional loading, unloading and cargo management at every touchpoint.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    accent: "from-slate-700 to-slate-500",
    whatWeDo: "Professional loading, unloading, and cargo management ensuring goods are handled safely and securely throughout the logistics chain.",
    benefits: ["Safe handling protocols", "Damage prevention", "Efficient loading", "Inventory coordination"],
    industries: ["All sectors"],
    flow: ["Inspection", "Loading", "Securing", "Documentation"],
  },
  {
    slug: "clearing-forwarding",
    title: "Clearing & Forwarding",
    summary: "Customs liaison, documentation and border clearance for international cargo.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    accent: "from-cyan to-blue-500",
    whatWeDo: "Supporting international cargo movement with documentation guidance, customs liaison and border clearance support for seamless import and export operations.",
    benefits: ["Customs expertise", "Documentation support", "Faster clearance", "Compliance assurance"],
    industries: ["Import & Export", "Manufacturing"],
    flow: ["Documentation", "Customs filing", "Clearance", "Release"],
  },
  {
    slug: "distribution",
    title: "Distribution Services",
    summary: "Wide-area distribution and last-mile delivery across Tanzania and the region.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    accent: "from-emerald-600 to-teal-500",
    whatWeDo: "Wide-area distribution and last-mile delivery services reaching businesses across Tanzania and the East African region.",
    benefits: ["Last-mile delivery", "Wide coverage", "Timely distribution", "B2B focus"],
    industries: ["Retail & Wholesale", "Manufacturing"],
    flow: ["Warehouse pickup", "Sorting", "Route delivery", "Confirmation"],
  },
  {
    slug: "supply-chain",
    title: "Supply Chain Support",
    summary: "End-to-end supply chain management from procurement to final delivery.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    accent: "from-violet-600 to-purple-500",
    whatWeDo: "Comprehensive supply chain management from procurement logistics to final delivery, reducing costs and improving operational flow.",
    benefits: ["End-to-end management", "Cost reduction", "Process optimisation", "Operational continuity"],
    industries: ["All sectors"],
    flow: ["Planning", "Procurement", "Transport", "Delivery"],
  },
];

export const industryDetails = [
  {
    title: "Agriculture",
    challenges: "Perishable goods, seasonal demand, rural access routes.",
    solutions: "Efficient farm-to-market logistics with timely delivery and cargo protection.",
    examples: "Farm inputs distribution, produce transport to urban markets.",
  },
  {
    title: "Mining",
    challenges: "Heavy equipment, remote locations, specialised handling.",
    solutions: "Heavy cargo transport and supply chain support for extraction operations.",
    examples: "Equipment delivery to mine sites, supply chain for mining operations.",
  },
  {
    title: "Manufacturing",
    challenges: "Raw material sourcing, finished goods distribution, just-in-time delivery.",
    solutions: "Integrated logistics for production inputs and output distribution.",
    examples: "Raw material transport, finished goods distribution to retailers.",
  },
  {
    title: "Construction",
    challenges: "Bulk materials, project timelines, site access constraints.",
    solutions: "Scheduled delivery of materials, machinery and equipment to project sites.",
    examples: "Cement and steel transport, heavy machinery delivery.",
  },
  {
    title: "Retail & Wholesale",
    challenges: "High volume, multiple destinations, inventory management.",
    solutions: "Reliable distribution networks reaching businesses across Tanzania and EAC.",
    examples: "Consumer goods distribution, wholesale supply chain support.",
  },
  {
    title: "Import & Export",
    challenges: "Customs compliance, documentation, port-to-destination coordination.",
    solutions: "End-to-end logistics from port clearance to final delivery.",
    examples: "Import cargo clearance, export documentation and transport.",
  },
];

export const quoteSteps = [
  { id: "cargo", label: "Cargo Type", fields: ["General Cargo", "Perishable", "Heavy Equipment", "Containerised", "Other"] },
  { id: "origin", label: "Origin", placeholder: "e.g. Dar es Salaam, Tanzania" },
  { id: "destination", label: "Destination", placeholder: "e.g. Kampala, Uganda" },
  { id: "weight", label: "Weight / Volume", placeholder: "e.g. 5 tonnes / 20 CBM" },
  { id: "timeline", label: "Timeline", fields: ["Urgent (1-3 days)", "Standard (1 week)", "Flexible (2+ weeks)"] },
];

export const companyInfo = {
  details: [
    { label: "Company Name", value: company.name },
    { label: "Office Location", value: company.address },
    { label: "Business Type", value: company.businessType },
    { label: "Business Activity", value: company.activity },
    { label: "Operating Region", value: company.region },
    { label: "Service Languages", value: company.languages },
  ],
};

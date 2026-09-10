export interface Practice {
  id: string;
  num: string;
  title: string;
  tag: string;
  lead: string;
  coLead?: string;
  image: string;
  summary: string;
  overview: string;
  deliverables: string[];
  impact: string;
  featured?: boolean;
}

export const PRACTICES: Practice[] = [
  {
    id: "ips",
    num: "01",
    title: "International Patient Services, Medical Tourism & Telehealth",
    tag: "★ Flagship Practice",
    lead: "Dr. Asser Medhat Lead",
    image: "/capability-international-patients.jpg",
    summary: "Architecting cross-border patient corridors, bilateral medical referral pipelines, and turnkey International Patient Departments (IPD) connecting Egypt, the GCC, and regional healthcare hubs.",
    overview: "Designing turnkey International Patient Departments (IPD), bilateral government referral corridors, and digital Second Medical Opinion networks linking source-market demand with specialized tertiary providers.",
    deliverables: [
      "End-to-end IPD Departmental Architecture & Protocol Design",
      "Bilateral Sovereign & Private Referral Corridor Agreements",
      "Telehealth Second Medical Opinion (SMO) Infrastructure",
      "Concierge International Patient Journey & Pricing Design",
      "Cross-Border Clinical Case Coordination & Risk Management"
    ],
    impact: "Unlocks high-margin cross-border private-pay revenue and establishes sustainable bilateral medical tourism pipelines.",
    featured: true
  },
  {
    id: "strategy",
    num: "02",
    title: "Health System Strategy & Turnaround Advisory",
    tag: "Strategic Advisory",
    lead: "Dr. Asser Medhat Lead",
    image: "/capability-strategy-boardroom.webp",
    summary: "Guiding health authorities, academic medical centers, and private hospital networks through structural modernization, operating model overhauls, and financial turnaround.",
    overview: "Formulating enterprise-wide strategic frameworks, clinical portfolio rationalizations, and turnaround roadmaps for health systems navigating regulatory shifts, market consolidation, or financial underperformance.",
    deliverables: [
      "Enterprise Strategy & Five-Year Institutional Master Plans",
      "Clinical Service Line Profitability & Portfolio Rationalization",
      "Hospital Financial Turnaround & Margin Recovery Programs",
      "Public-Private Partnership (PPP) Feasibility Frameworks",
      "Executive Board Alignment & Governance Architecture"
    ],
    impact: "Transforms underperforming healthcare assets into financially resilient, market-leading clinical institutions."
  },
  {
    id: "ops",
    num: "03",
    title: "Operations, Clinical Governance & Throughput Turnaround",
    tag: "Operational Excellence",
    lead: "Dr. Asser Medhat Lead",
    image: "/capability-operations-clinical.jpg",
    summary: "Engineering clinical operational workflows, hospital throughput acceleration, length-of-stay rationalization, and accreditation-ready clinical governance frameworks.",
    overview: "Optimizing the hospital operating engine through patient throughput engineering, surgical suite efficiency, length-of-stay reduction, and robust clinical quality and credentialing frameworks.",
    deliverables: [
      "Operating Room (OR) & Cath Lab Throughput Optimization",
      "Emergency Department Flow & Length-of-Stay (LOS) Compression",
      "JCI, GAHAR & International Accreditation Readiness",
      "Clinical Governance, Credentialing & Peer Review Structures",
      "Hospital Resource Utilization & Cost-per-Case Optimization"
    ],
    impact: "Increases effective bed capacity, reduces clinical wait times, and elevates patient safety margins without structural capital expense."
  },
  {
    id: "spaces",
    num: "04",
    title: "Elite Aesthetics, Wellness & Premium Clinic Design",
    tag: "Prestige Practice",
    lead: "Dr. Asmaa Salman Lead",
    coLead: "Dr. Asser Medhat Co-Lead",
    image: "/capability-wellness-spaces.jpg",
    summary: "Conceptualizing and launching ultra-premium aesthetic centers, longevity clinics, and luxury medical wellness destinations blending five-star hospitality with accredited clinical excellence.",
    overview: "Fusing luxury hospitality spatial design with accredited clinical safety protocols for elite aesthetic centers, longevity clinics, and medical wellness facilities.",
    deliverables: [
      "Turnkey Luxury Aesthetic Center Concept & Space Architecture",
      "Accredited Clinical Flow with Five-Star Hospitality Integration",
      "High-Value Private-Pay Service Menu & Pricing Architecture",
      "Staff Hospitality, Discretion & Experience Protocol Training",
      "Technology Selection: Premium Lasers, Longevity & Devices"
    ],
    impact: "Drives private-pay market loyalty, establishes brand differentiation, and unites accredited clinical safety with five-star hospitality."
  },
  {
    id: "events",
    num: "05",
    title: "Mega Events Management",
    tag: "Summit Advisory",
    lead: "Joint Leadership: Both Managing Partners",
    image: "/capability-congresses-audience.jpg",
    summary: "Curating high-stakes healthcare conferences, sovereign medical summits, and scientific congresses from agenda architecture to commercial sponsorship and VIP ministerial delivery.",
    overview: "Strategic conceptualization, scientific agenda curation, high-level sovereign sponsor alignment, and executive delivery for regional healthcare forums and medical summits.",
    deliverables: [
      "Scientific Program Curating & Keynote Speaker Management",
      "Sovereign & Ministerial Protocol, VIP Experience Design",
      "Industry Sponsorship Strategy & Commercial Monetization",
      "Hybrid & Digital Broadcasting Infrastructure Architecture",
      "Post-Event Policy Outcomes & White Paper Publication"
    ],
    impact: "Positions sponsoring entities and health authorities at the epicenter of regional policy, investment, and clinical thought leadership."
  },
  {
    id: "digital",
    num: "06",
    title: "Digital Health Transformation & Clinical Informatics",
    tag: "Digital Health",
    lead: "Practice Lead",
    image: "/capability-digital-health.jpg",
    summary: "Guiding enterprise EMR adoptions, AI-driven clinical workflow integration, virtual care networks, and data governance frameworks to empower clinical decision-making.",
    overview: "Evaluating, selecting, and operationalizing enterprise health information systems (HIS), AI-assisted diagnostics, clinical decision support, and patient-facing digital portals.",
    deliverables: [
      "Digital Maturity Assessment & Technology Roadmap",
      "Enterprise EMR / EHR Selection, Negotiation & PMO Oversight",
      "AI Clinical Decision Support Integration & Governance",
      "Virtual Care, Remote Patient Monitoring & Telehealth Platforms",
      "Health Data Security, Privacy & Interoperability Compliance"
    ],
    impact: "Eliminates clinical paper workflows, accelerates diagnostic turnaround, and unlocks real-time operational transparency."
  },
  {
    id: "commercial",
    num: "07",
    title: "Business Development, Brand & Commercial Advisory",
    tag: "Commercial Strategy",
    lead: "Dr. Asmaa Salman Lead",
    image: "/capability-commercial-advisory.jpg",
    summary: "Designing institutional growth strategies, revenue diversification frameworks, commercial partnerships, and brand positioning for healthcare enterprises competing in regional and private-pay markets.",
    overview: "Crafting institutional commercial architecture, market penetration strategies, healthcare brand positioning, and multi-channel revenue generation models for private hospital systems and specialized practices.",
    deliverables: [
      "Commercial Growth Strategy & Revenue Diversification Roadmaps",
      "Healthcare Brand Architecture, Positioning & Narrative Design",
      "Strategic Corporate & Institutional Referral Partnerships",
      "Private-Pay Package Structuring & Margin Optimization",
      "Commercial Team Performance Architecture & Sales Enablement"
    ],
    impact: "Accelerates top-line commercial revenue, deepens market share in competitive segments, and builds enduring institutional brand equity."
  },
  {
    id: "pmo",
    num: "08",
    title: "Healthcare Project Management & Corporate Training",
    tag: "PMO & Education",
    lead: "Dr. Asser Medhat Lead",
    image: "/capability-pmo-training.jpg",
    summary: "Deploying institutional PMO frameworks to deliver complex healthcare capital and operational projects on time and on budget, paired with executive education and clinical leadership training.",
    overview: "Establishing rigorous Project Management Office (PMO) structures for hospital expansions, commissioning, and operational rollouts, combined with customized executive and clinical leadership development programs.",
    deliverables: [
      "Healthcare PMO Setup, Governance & Milestone Management",
      "Hospital Commissioning & Operational Activation Programs",
      "Physician-Executive & Clinical Leadership Masterclasses",
      "Change Management & Clinical Adoption Cadence",
      "Project Risk Mitigation, Budget Controls & KPI Tracking"
    ],
    impact: "Guarantees on-time, on-budget project delivery while institutionalizing leadership capabilities and operational excellence across the organization."
  }
];

export interface Mandate {
  client: string;
  location: string;
  scope: string;
  challenge: string;
  action: string;
  targetOutcome: string;
}

export const MANDATES: Mandate[] = [
  {
    client: "Sovereign Health Authority",
    location: "GCC / Regional",
    scope: "International Referral Corridor Architecture",
    challenge: "High outbound government medical spend with fragmented coordination, lack of clinical quality oversight, and inefficient patient tracking across European and regional destinations.",
    action: "Architected bilateral government-to-institution patient corridor protocols, established centralized Second Medical Opinion (SMO) triage, and structured value-based pricing agreements with top-tier accredited tertiary providers.",
    targetOutcome: "38% reduction in outbound episodic cost; 94% patient satisfaction across sovereign referral cohorts."
  },
  {
    client: "350-Bed Private Tertiary Hospital",
    location: "Cairo, Egypt",
    scope: "Operational Turnaround & OR Throughput Optimization",
    challenge: "Severe surgical block bottlenecks, operating room utilization below 52%, and clinical length-of-stay exceeding international benchmarks by 2.4 days.",
    action: "Deployed embedded clinical PMO; redesigned perioperative workflows, implemented pre-admission anesthesia screening protocols, and restructured surgical scheduling governance.",
    targetOutcome: "OR utilization increased to 79%; average length-of-stay reduced by 1.8 days, creating $3.4M in effective annual capacity margin."
  },
  {
    client: "Luxury Healthcare Investment Group",
    location: "Riyadh & Cairo",
    scope: "Flagship Aesthetics & Longevity Center Design",
    challenge: "Conceptualizing and launching a multi-site ultra-premium aesthetic and longevity brand commanding top-tier private-pay margins while maintaining strict clinical accreditation.",
    action: "Engineered turnkey spatial architecture fusing five-star hospitality with accredited clinical safety; structured premium service menus, recruited medical leadership, and curated high-touch patient journey protocols.",
    targetOutcome: "Launch-ready flagship facility commanding top-tier private-pay margins with high client retention."
  }
];

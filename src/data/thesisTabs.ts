export interface ThesisTab {
  id: string;
  num: string;
  title: string;
  label: string;
  heading: string;
  paragraphs: string[];
  pillars: { title: string; desc: string }[];
}

export const THESIS_TABS: ThesisTab[] = [
  {
    id: "thesis",
    num: "01",
    title: "Strategic Thesis",
    label: "01 Strategic Thesis",
    heading: "Bridging the Gap Between Sovereign Health Ambition and Clinical Operational Reality",
    paragraphs: [
      "Healthcare across Egypt and the GCC is undergoing an unprecedented structural inflection. Sovereign health mandates, massive capital deployment into medical infrastructure, and accelerating cross-border patient mobility require advisory partners who possess dual fluency in board-level strategy and clinical realities on the ground.",
      "Aurion was established to dissolve the traditional divide between high-level management consulting and clinical-operational execution. We do not deliver theoretical slide decks; we engineer transformative healthcare institutions, operationalize patient corridors, and stay embedded through value realization."
    ],
    pillars: [
      { title: "Dual Fluency", desc: "Physician-executive rigor combined with sophisticated commercial modeling and financial structuring." },
      { title: "Sovereign Alignment", desc: "Engineered to deliver directly against national vision agendas, regional health authorities, and sovereign fund mandates." }
    ]
  },
  {
    id: "dna",
    num: "02",
    title: "Institutional DNA",
    label: "02 Institutional DNA",
    heading: "Physician-Led. Commercially Astute. Uncompromisingly Rigorous.",
    paragraphs: [
      "Our practice was founded on the conviction that transformative healthcare advisory cannot be led by generalists. Healthcare is an extraordinarily complex, highly regulated human enterprise where clinical workflows, regulatory governance, and patient safety directly dictate commercial viability.",
      "Every mandate at Aurion is directed by experienced physician-executives and specialized healthcare strategists who understand hospital operating rooms as intimately as corporate boardrooms."
    ],
    pillars: [
      { title: "Clinical Grounding", desc: "Every strategic recommendation is grounded in real-world clinical governance and patient safety protocols." },
      { title: "Boutique Focus", desc: "We select a limited number of high-stakes mandates per year, ensuring direct managing partner immersion." }
    ]
  },
  {
    id: "model",
    num: "03",
    title: "Advisory Model",
    label: "03 Advisory Model",
    heading: "Embedded Delivery Architecture: From Diagnosis to Value Realization",
    paragraphs: [
      "We reject the passive advisory model. Traditional consulting too often ends at the delivery of a strategy report, leaving client leadership to navigate the friction of implementation alone.",
      "Aurion operates through an embedded advisory model. We design the institutional architecture, establish the operational protocols, install the governance cadence, and remain actively engaged alongside leadership until target clinical and commercial outcomes are realized."
    ],
    pillars: [
      { title: "Accountable Delivery", desc: "Our engagement fees and reputational capital are directly tied to tangible operational and clinical milestones." },
      { title: "Knowledge Transfer", desc: "We build internal client capability, ensuring long-term institutional self-sufficiency after engagement completion." }
    ]
  },
  {
    id: "presence",
    num: "04",
    title: "Market Presence",
    label: "04 Market Presence",
    heading: "A Strategic Bridge Across Egypt, the GCC, and Regional Corridors",
    paragraphs: [
      "Operating from Cairo with an active advisory footprint across Riyadh, Dubai, and the wider GCC, Aurion occupies a unique vantage point in the regional healthcare landscape.",
      "We leverage Egypt's vast clinical talent pool, world-class tertiary institutions, and competitive cost base, connecting them seamlessly with the capital, sovereign ambitions, and specialized referral needs of GCC health authorities."
    ],
    pillars: [
      { title: "Cross-Border Corridors", desc: "Turnkey bilateral patient flow channels between GCC source markets and accredited Egyptian tertiary centers." },
      { title: "Regional Network", desc: "Trusted relationships spanning sovereign health authorities, sovereign funds, private hospital groups, and medical faculties." }
    ]
  }
];

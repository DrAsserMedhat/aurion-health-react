export interface BioSection {
  title?: string;
  content: string;
}

export interface Leader {
  id: 'asser' | 'asmaa';
  name: string;
  role: string;
  strategicRole: string;
  microPositioning: string;
  image: string;
  fallbackImage: string;
  snapshot: string[];
  expertise: string[];
  fullBio: BioSection[];
}

export const LEADERSHIP: Leader[] = [
  {
    id: "asser",
    name: "Dr. Asser Medhat",
    role: "FOUNDER & MANAGING PARTNER",
    strategicRole: "Healthcare Strategy, Transformation & International Patient Services",
    microPositioning: "BUILD • TRANSFORM • OPERATE",
    image: "/dr-asser-medhat.png",
    fallbackImage: "https://drassermedhat.github.io/AurionHealth/dr-asser-medhat.png",
    snapshot: [
      "Dr. Asser Medhat is a physician executive and healthcare transformation advisor with 16+ years of combined clinical, operational, and strategic experience across Egypt, the GCC, Africa, and international healthcare networks.",
      "He leads Aurion’s strategy, healthcare transformation, operational excellence, and international patient-services initiatives, bringing together clinical credibility, strategic management, and execution discipline."
    ],
    expertise: [
      "Healthcare Strategy, Operations & Performance Transformation",
      "Digital Health, Telehealth & Healthcare PMO",
      "International Patients, Medical Tourism & Cross-Border Care"
    ],
    fullBio: [
      {
        content: "Dr. Asser Medhat is a physician executive and healthcare transformation leader with more than 16 years of combined clinical, operational, and strategic experience across Egypt, the GCC, Africa, and international healthcare networks. He combines strong clinical grounding in obstetrics and gynecology with an MBA in Strategic Management and a career shaped by healthcare operations leadership, digital health implementation, international patient services, medical education, and cross-border partnerships. His work is distinguished by a consistent focus on operational excellence, measurable performance improvement, patient access, and scalable healthcare growth."
      },
      {
        title: "CLINICAL LEADERSHIP WITH MANAGERIAL DEPTH",
        content: "He began his career as an obstetrics and gynecology physician, delivering comprehensive clinical care while also contributing to departmental workflow, coordination, and service continuity in major healthcare settings. At the Greek Community Hospital and Ain Shams Maternity Hospital, his role extended beyond direct patient care into managerial support, process alignment, and service oversight, giving him a practical understanding of how clinical quality, team coordination, and operational discipline intersect in real healthcare environments. That clinical foundation remains central to his executive perspective today."
      },
      {
        title: "HEALTHCARE OPERATIONS & OPERATIONAL EXCELLENCE",
        content: "Dr. Asser has led multisite healthcare operations and transformation programs designed to improve performance, reduce waste, and strengthen governance. During his leadership at Mersal Foundation under the UNHCR project, he played a central role in establishing and directing the nationwide primary healthcare program across Egypt, covering planning, budgeting, workforce deployment, quality management, referral coordination, and performance monitoring for refugee and vulnerable populations. The program supported more than 25,000 patients annually and achieved a 60% reduction in referral delays through process redesign and operational governance. Across his broader leadership roles, he has delivered improvements including 35% higher system efficiency, 20% lower operating cost, and 30% better workflow performance through disciplined execution and data-driven management."
      },
      {
        title: "DIGITAL TRANSFORMATION & TELEHEALTH LEADERSHIP",
        content: "He is recognized for leading digital health initiatives that translated strategy into operational impact. His experience includes EMR implementation, HIS optimization, telehealth deployment, digital workflow redesign, and healthcare process automation across Egypt, the GCC, and international healthcare environments. Through these programs, he helped strengthen governance, reduce duplication, improve service turnaround, and elevate patient experience. His telehealth and second medical opinion work has supported faster clinical access, better case coordination, and more efficient cross-border healthcare delivery, including large-scale international oncology and specialty care pathways serving patients from more than 40 countries. In these settings, he contributed to a 45% reduction in case processing time and 97% patient satisfaction, reflecting both clinical credibility and operational execution."
      },
      {
        title: "INTERNATIONAL PATIENT SERVICES, MEDICAL TOURISM & STRATEGIC PARTNERSHIPS",
        content: "A major part of Dr. Asser’s executive profile is his work in international patient services and medical tourism. He has built and managed patient journey models spanning second medical opinion, teleconsultation, care coordination, concierge support, travel facilitation, and cross-border referral management. His work has connected patients and referring partners with leading healthcare institutions in France, the United Kingdom, the United States, and Germany, including strategic affiliations and coordination pathways with major centers such as Gustave Roussy and Rothschild. He has also contributed to international outreach and regional expansion models in Africa and the GCC, helping healthcare organizations grow through referral networks, satellite models, and partnership-led market access. This combination of partnership development, patient navigation, and service design gives his profile a strong strategic dimension well beyond operations alone."
      },
      {
        title: "MEDICAL EDUCATION & NATIONAL PROGRAMS",
        content: "Dr. Asser has also led major medical education and institutional development initiatives with governmental, academic, and global healthcare stakeholders. He served in leadership roles on large-scale programs including the EPIC initiative under the Presidential Initiative and the Ministry of Health, as well as the Ministry of Higher Education’s international live discussions platform that connected more than 100 hospitals and academic institutions in a single remote MDT learning ecosystem with global-ranked partners. He has also contributed to CME programs involving more than 1,500 healthcare professionals and 80+ credit hours, reinforcing his ability to build knowledge networks that improve capability, clinical alignment, and institutional performance at scale."
      },
      {
        title: "CONSULTING, ADVISORY & CORPORATE TRAINING",
        content: "In parallel with his executive roles, Dr. Asser serves as an independent consultant and trainer for international advisory and technology networks, including GLG, Guidepoint, Micro1 AI Solutions, and OpenAI-related consulting work. He is also a UpToDate Certified Trainer and delivers corporate training programs for healthcare organizations and leadership teams, translating clinical expertise and strategic insight into practical capability-building, executive advisory, and scalable knowledge transfer."
      },
      {
        title: "EXECUTIVE PROFILE",
        content: "Across his career, Dr. Asser has consistently operated at the intersection of medicine, management, and transformation. He brings a rare combination of physician legitimacy, strategic management capability, operational discipline, and partnership-building skill. Whether leading national primary healthcare delivery, redesigning digital pathways, managing international patient services, or building medical education ecosystems, his focus remains the same: measurable improvement, sustainable growth, and healthcare performance that is both clinically sound and commercially intelligent."
      }
    ]
  },
  {
    id: "asmaa",
    name: "Dr. Asmaa Salman",
    role: "FOUNDER & MANAGING PARTNER",
    strategicRole: "Healthcare Marketing, Commercial Growth & Medical Tourism",
    microPositioning: "GROW • POSITION • EXPAND",
    image: "/dr-asmaa-salman.png",
    fallbackImage: "https://drassermedhat.github.io/AurionHealth/dr-asmaa-salman.png",
    snapshot: [
      "Dr. Asmaa Salman is a healthcare executive and strategic marketing leader with 15+ years of experience across healthcare marketing, business development, branding, medical tourism, and international healthcare partnerships.",
      "She leads Aurion’s growth and commercial strategy, combining market intelligence, destination positioning, brand development, and business growth to create sustainable healthcare platforms and premium patient experiences."
    ],
    expertise: [
      "Strategic Marketing, Commercial Growth & Business Development",
      "Healthcare Branding, Destination Marketing & Patient Experience",
      "Medical Tourism, International Partnerships & Market Expansion"
    ],
    fullBio: [
      {
        content: "Dr. Asmaa Salman is a distinguished healthcare executive, strategic marketing leader, and business development expert with over 15 years of experience leading transformational initiatives across healthcare, branding, and medical tourism."
      },
      {
        title: "NATIONAL MARKETING & MEDICAL TOURISM STEWARDSHIP",
        content: "She currently serves as General Director of Marketing & Business Development at the Egypt Healthcare Authority (EHA), where she leads the Authority's national marketing strategy and oversees branding, business development, and international positioning across Egypt's integrated healthcare system. She also supervises Egypt's medical tourism initiatives, driving the country's vision to become a leading regional destination for world-class healthcare services."
      },
      {
        title: "DESTINATION BRANDING & GLOBAL PARTNERSHIPS",
        content: "Dr. Salman has played a pivotal role in establishing and promoting \"In Egypt, We Care,\" Egypt's national medical tourism brand, fostering strategic international partnerships and enhancing the global reputation of Egyptian healthcare. Her work has contributed to attracting patients from more than 115 countries while strengthening Egypt's competitiveness within the global healthcare market."
      },
      {
        title: "COMPREHENSIVE COMMERCIAL & BRAND EXPERTISE",
        content: "Her expertise spans strategic marketing, healthcare branding, corporate communications, business development, destination marketing, digital transformation, patient experience, and international healthcare partnerships. She is recognized for combining analytical thinking with creative brand strategy to deliver sustainable growth and measurable impact."
      },
      {
        title: "PRIVATE SECTOR HEALTHCARE LEADERSHIP",
        content: "Before joining the Egypt Healthcare Authority, Dr. Salman held leadership positions within the private healthcare sector, where she successfully developed integrated marketing strategies and business growth programs for leading healthcare organizations."
      },
      {
        title: "ACADEMIC EXCELLENCE & CREDENTIALS",
        content: "Dr. Salman holds a Bachelor's Degree in Pharmacy, a Clinical Pharmacy qualification from the United States, and an MBA in Marketing. She has also completed advanced studies in branding, design thinking, and strategic business management."
      },
      {
        title: "INTERNATIONAL THOUGHT LEADERSHIP & CONFERENCES",
        content: "A sought-after speaker, moderator, and healthcare thought leader, Dr. Salman regularly represents Egypt at regional and international conferences, sharing insights on healthcare transformation, medical tourism, innovation, and strategic leadership."
      },
      {
        title: "EXECUTIVE SUMMARY",
        content: "Through her leadership, vision, and commitment to excellence, Dr. Asmaa Salman continues to shape the future of healthcare marketing in Egypt and contribute to positioning the country as a global destination for high-quality, patient-centered healthcare."
      }
    ]
  }
];

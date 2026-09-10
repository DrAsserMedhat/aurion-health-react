export interface Leader {
  name: string;
  role: string;
  leadTag: string;
  image: string;
  bio: string;
  expertise: string[];
}

export const LEADERSHIP: Leader[] = [
  {
    name: "Dr. Asser Medhat",
    role: "Founder & Managing Partner",
    leadTag: "Strategy, Operations & International Patient Services",
    image: "/dr-asser-medhat.png",
    bio: "Leads Aurion's strategy, operations, and international-patient-services work, with a focus on medical tourism, telehealth/SMO models, and healthcare PMO discipline across Egypt and the GCC. Co-leads Elite Aesthetics, Wellness & Premium Clinic Design and Mega Events Management jointly with Dr. Asmaa Salman.",
    expertise: [
      "Health System Strategy & Turnaround",
      "International Patient Services, Medical Tourism & Telehealth",
      "Healthcare Project Management & PMO Cadence"
    ]
  },
  {
    name: "Dr. Asmaa Salman",
    role: "Partner & Chief Commercial Officer",
    leadTag: "Growth Strategy, Brand & Commercial Advisory",
    image: "/dr-asmaa-salman.png",
    bio: "Leads Aurion's growth strategy, business development, and brand & commercial advisory work. Co-leads Elite Aesthetics, Wellness & Premium Clinic Design and Mega Events Management jointly with Dr. Asser Medhat, uniting patient experience with commercial profitability.",
    expertise: [
      "Commercial Growth Strategy & Revenue Diversification",
      "Premium Clinical Brand Architecture & Narrative",
      "Aesthetics & Wellness Space Curation"
    ]
  }
];

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  category: "Leadership" | "Community" | "Public Speaking";
  description: string;
  highlights: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "ace-executive",
    role: "Executive Body Member",
    organization: "Association of Computer Engineers (ACE)",
    period: "2024 – Present",
    location: "S.R.K.R. Engineering College",
    category: "Leadership",
    description:
      "Active member of the student executive council representing the Computer Science and Engineering department. Drive technical initiatives, student workshops, and departmental coding activities.",
    highlights: [
      "Coordinated department technical symposiums, hackathons, and coding challenges for undergraduate engineers",
      "Assisted in student mentorship, peer programming guidance, and technical workshops on modern tools",
      "Collaborated with faculty and senior student leads to manage event logistics and technical outreach",
    ],
    skills: ["Team Leadership", "Event Coordination", "Technical Community", "Peer Mentorship"],
  },
  {
    id: "acm-executive",
    role: "Executive Body Member",
    organization: "Association for Computing Machinery (ACM) Student Chapter",
    period: "2024 – Present",
    location: "S.R.K.R. Engineering College",
    category: "Leadership",
    description:
      "Contributing to the international ACM student chapter to foster computer science research culture, competitive programming, and emerging technology awareness.",
    highlights: [
      "Facilitated technical webinars and peer knowledge sharing sessions on AI and algorithms",
      "Promoted standard software engineering ethics and computing practices within the student body",
      "Participated in inter-college tech network and national event planning",
    ],
    skills: ["Computing Standards", "Technical Community", "Collaboration", "Strategic Planning"],
  },
  {
    id: "tedx-hospitality",
    role: "Hospitality & Event Operations Team",
    organization: "TEDxSRKR",
    period: "2024",
    location: "S.R.K.R. Engineering College",
    category: "Community",
    description:
      "Served on the core hospitality and guest coordination crew for TEDxSRKR, ensuring seamless logistics and high-touch support for invited keynote speakers and attendees.",
    highlights: [
      "Managed front-of-house guest liaison, VIP speaker coordination, and schedule adherence",
      "Maintained professional communication and swift problem resolution during high-pressure live stage sessions",
      "Collaborated across multifaceted event production, audio/visual, and stage management teams",
    ],
    skills: ["Guest Liaison", "Crisis Management", "Cross-functional Coordination", "Professional Etiquette"],
  },
  {
    id: "public-speaking-orator",
    role: "Semifinalist & Keynote Orator",
    organization: "SRKR Orator Championship",
    period: "2024",
    location: "S.R.K.R. Engineering College",
    category: "Public Speaking",
    description:
      "Delivered an evaluated keynote address titled 'Small Habits, Big Change' exploring how marginal improvements aggregate into transformative outcomes, advancing to the tournament semifinals.",
    highlights: [
      "Analyzed the British Cycling marginal gains methodology and articulated its applications to software engineering and personal mastery",
      "Demonstrated audience engagement, storytelling, vocal variety, and structured persuasive rhetoric",
      "Advanced through competitive prelims to secure a semifinalist position across college-wide participants",
    ],
    skills: ["Public Speaking", "Storytelling", "Persuasive Rhetoric", "Audience Engagement"],
  },
  {
    id: "language-nest",
    role: "Active Member & Communicator",
    organization: "LanguageNest – Language & Communication Club",
    period: "2024 – Present",
    location: "S.R.K.R. Engineering College",
    category: "Community",
    description:
      "Engaged in weekly interactive forums, impromptu speaking exercises, and debate panels dedicated to refining interpersonal communication and verbal articulation.",
    highlights: [
      "Participated in structured debate rounds and impromptu extempore speaking sessions",
      "Refined active listening, cross-cultural communication, and collaborative discussion dynamics",
      "Supported junior peers in building confidence in English technical presentations",
    ],
    skills: ["Verbal Articulation", "Active Listening", "Debate & Reasoning", "Interpersonal Communication"],
  },
];

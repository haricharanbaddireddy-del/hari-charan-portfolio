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
    id: "ace-acm-executive",
    role: "Executive Body Member",
    organization: "Association of Computer Engineers (ACE) & ACM Student Chapter",
    period: "2024 – Present",
    location: "S.R.K.R. Engineering College",
    category: "Leadership",
    description:
      "Serving on the joint student executive council for both the departmental body (ACE) and the international computing chapter (ACM). Driving department technical symposiums, research culture, peer programming, and competitive hackathons.",
    highlights: [
      "Coordinated department technical symposiums, coding challenges, and innovation workshops for CSE undergraduates",
      "Promoted standard computing ethics, algorithm study circles, and peer mentorship in core software tools",
      "Facilitated technical webinars on AI workflows, modern web frameworks, and hackathon preparation",
      "Collaborated with faculty mentors, external adjudicators, and senior leads for institutional technical outreach",
    ],
    skills: ["Technical Leadership", "Event Coordination", "Computing Standards", "Peer Mentorship", "Community Building"],
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
      "Delivered an evaluated keynote address titled 'Small Habits, Big Change' exploring how marginal improvements aggregate into transformative outcomes, advancing through tournament prelims to the semifinals.",
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

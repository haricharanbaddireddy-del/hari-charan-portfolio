export interface EventGallery {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  location: string;
  badge: string;
  coverImage: string;
  images: {
    url: string;
    caption: string;
  }[];
  description: string;
  keyTakeaways: string[];
  certificateUrl?: string;
  certificateDriveUrl?: string;
  videoUrl?: string;
}

export const eventsData: EventGallery[] = [
  {
    id: "ide-bootcamp",
    title: "IDE Bootcamp 2026 Phase 1",
    subtitle: "National Innovation, Design Thinking & Startup Sprints",
    year: "2026",
    location: "SVPCET, Puttur, Andhra Pradesh",
    badge: "National Innovation",
    coverImage: "/images/events/ide_bootcamp_1.jpg",
    images: [
      {
        url: "/images/events/ide_bootcamp_1.jpg",
        caption: "Collaborative design thinking sprint with innovation team and mentors",
      },
      {
        url: "/images/events/ide_bootcamp_2.jpg",
        caption: "Startup ideation, prototype evaluation, and venture business modeling",
      },
      {
        url: "/images/events/ide_bootcamp_3.jpg",
        caption: "Participant interactive feedback session and leadership debrief",
      },
      {
        url: "/images/events/ide_bootcamp_4.jpg",
        caption: "Cohort group photograph with mentors, organizers and AICTE coordinators",
      },
    ],
    description:
      "Selected for the flagship Innovation, Design and Entrepreneurship (IDE) Bootcamp 2026 conducted by the Ministry of Education's Innovation Cell (MIC) and AICTE at Sri Venkatesa Perumal College of Engineering and Technology (SVPCET), Puttur. The bootcamp immersed selected engineering students in structured user research, empathy mapping, customer validation, prototype iteration, and formal venture pitching.",
    keyTakeaways: [
      "User-Centric Design Thinking & Problem Scoping",
      "Lean Startup Ideation & Business Model Canvas Framing",
      "Pitching & Venture Presentation to Industry Evaluators",
      "Collaborative Rapid Prototyping Under Tight Deadlines",
    ],
    certificateUrl: "/images/certificates/cert_ide_bootcamp.jpg",
    certificateDriveUrl: "https://drive.google.com/file/d/1TyV9KfBC-EYLGKWh1IyVNTHq_6TXw-xO/view?usp=drive_link",
  },
  {
    id: "samagra-2k26",
    title: "SAMAGRA 2K26 – 2nd Prize Presentation",
    subtitle: "Prompt Engineering & Applied Generative AI Paper Presentation",
    year: "2026",
    location: "Department of CSIT, S.R.K.R. Engineering College",
    badge: "2nd Prize Winner",
    coverImage: "/images/events/samagra_1.jpg",
    images: [
      {
        url: "/images/events/samagra_1.jpg",
        caption: "Receiving the 2nd Prize Trophy & Award during SAMAGRA 2K26 celebrations",
      },
      {
        url: "/images/events/samagra_2.jpg",
        caption: "Presenting research on Prompt Architecture and Context Optimization",
      },
    ],
    description:
      "Awarded Second Prize in SAMAGRA 2K26 conducted by the Department of CSIT as part of the Annual Day Celebrations of S.R.K.R. Engineering College. The research paper and live technical presentation explored how prompt engineering frameworks, few-shot contextual priming, and chain-of-thought methodologies minimize hallucination and enhance reliability in enterprise LLM deployments.",
    keyTakeaways: [
      "Secured Second Prize across competitive departmental participants",
      "Delivered live research demonstrations of structured contextual prompts",
      "Refined public speaking, academic communication, and defense of technical ideas",
      "Analyzed practical latency and accuracy tradeoffs in generative AI models",
    ],
    certificateUrl: "/images/certificates/cert_samagra.jpg",
    certificateDriveUrl: "https://drive.google.com/file/d/1GsKEyapmVkfhjYhmMKi7HqWHI47zVgil/view?usp=drive_link",
  },
  {
    id: "prajwalan-2k26",
    title: "Prajwalan 2K26 National Hackathon",
    subtitle: "Healthcare Recovery Innovation – 'PhysioTrack'",
    year: "2026",
    location: "National Level Technical Fest",
    badge: "Hackathon Finalist",
    coverImage: "/images/events/prajwalan_1.jpg",
    images: [
      {
        url: "/images/events/prajwalan_1.jpg",
        caption: "Team PhysioTrack collaborating in the live hackathon arena",
      },
      {
        url: "/images/events/prajwalan_2.jpg",
        caption: "System architectural demo & physical therapy compliance tracking interface",
      },
      {
        url: "/images/events/prajwalan_3.jpg",
        caption: "Jury presentation explaining patient exercise compliance algorithms",
      },
      {
        url: "/images/events/prajwalan_4.jpg",
        caption: "Hackathon stage ceremony and technical evaluation debrief",
      },
    ],
    description:
      "Competed in the national-level Prajwalan 2K26 Hackathon, developing 'PhysioTrack'—an intelligent physiotherapy tracking platform. The software addresses patient non-compliance in post-operative care by providing real-time exercise logging, automated routine pacing, and progress visualizations directly accessible by physical therapy clinics.",
    keyTakeaways: [
      "High-pressure engineering sprint delivering functional full-stack architecture",
      "Interactive data visualization for medical compliance metrics",
      "Collaborative teamwork, version branching, and real-time sprint adaptation",
      "Direct technical feedback and defense before expert hackathon adjudicators",
    ],
    certificateUrl: "/images/certificates/cert_prajwalan.jpg",
    certificateDriveUrl: "https://drive.google.com/file/d/1q0oombhjCNOa1NMMmOOQRpK3aI7Y7hb8/view?usp=drive_link",
  },
  {
    id: "hackoverflow-2k25",
    title: "HackOverflow 2K25 National Hackathon",
    subtitle: "Campus Accessibility Innovation – 'Campus Companion'",
    year: "2025",
    location: "National Level Hackathon",
    badge: "Hackathon Finalist",
    coverImage: "/images/events/hackoverflow_1.jpg",
    images: [
      {
        url: "/images/events/hackoverflow_1.jpg",
        caption: "Team collaboration on Campus Companion during the 24-hour build sprint",
      },
      {
        url: "/images/events/hackoverflow_2.jpg",
        caption: "Certificate of Presentation ceremony with organizers and judging panel",
      },
    ],
    description:
      "My foundational national hackathon experience at HackOverflow 2K25, where our team conceptualized and engineered 'Campus Companion'. The system centralizes decentralized university notice boards, streamlines inter-departmental student communication, and offers quick directory accessibility for campus facilities.",
    keyTakeaways: [
      "24-hour sprint developing responsive front-end components and REST endpoints",
      "Mastered agile git branch merging and team conflict resolution under deadlines",
      "Designed clean student-centric interfaces for immediate notice discovery",
      "Built resilient presentation skills pitching under competitive constraints",
    ],
    certificateUrl: "/images/certificates/cert_hackoverflow.jpg",
    certificateDriveUrl: "https://drive.google.com/file/d/1NDC1vGHB3NHrkUOJSbIAWe2382IBiKdW/view?usp=drive_link",
  },
  {
    id: "tedx-srkr",
    title: "TEDxSRKR – Hospitality & Operations",
    subtitle: "Speaker Liaison, Guest Coordination & Live Operations",
    year: "2024",
    location: "S.R.K.R. Engineering College, Bhimavaram",
    badge: "Event Leadership",
    coverImage: "/images/events/tedx_2.jpg",
    images: [
      {
        url: "/images/events/tedx_2.jpg",
        caption: "TEDxSRKR Hospitality Team coordinating front-of-house operations",
      },
      {
        url: "/images/events/tedx_3.jpg",
        caption: "Engaging with keynote speakers and managing stage schedule logistics",
      },
      {
        url: "/images/events/tedx_1.jpg",
        caption: "Auditorium venue setup, attendee assistance, and delegate hosting",
      },
    ],
    description:
      "Served on the core Hospitality Team for TEDxSRKR, an independently organized TED event conducted at S.R.K.R. Engineering College. Handled dignitary receptions, guest speaker coordination, live session timing, and VIP attendee support in an energetic, high-stakes institutional production.",
    keyTakeaways: [
      "Front-of-house guest liaison and keynote speaker schedule coordination",
      "Rapid on-site problem resolution during live-streamed stage segments",
      "Cross-functional synchronization with audio-visual and stage managers",
      "Professional etiquette and executive communication under high visibility",
    ],
  },
];

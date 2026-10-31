export interface Project {
  id: string;
  name: string;
  category: "AI & Full Stack" | "AI & Automation" | "Web Development" | "Hackathons";
  tagline: string;
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  statusBadge: string;
  accentColor?: string;
}

export const projectsData: Project[] = [
  {
    id: "smart-grievance",
    name: "Smart Grievance",
    category: "AI & Full Stack",
    tagline: "AI-Based Grievance Registration & Civic Assistance System",
    description:
      "A comprehensive civic intelligence platform designed for district administrations, allowing citizens to submit complaints via voice or text in Telugu and English with automated categorization and letter generation.",
    problemSolved:
      "Citizens face language barriers, complex bureaucratic forms, and long queues at district collectorates. Meanwhile, administration officers struggle to manually sort, prioritize, and route high volumes of petitions across dozens of departments.",
    keyFeatures: [
      "Bilingual voice & text grievance intake supporting Telugu and English",
      "AI-driven speech transcription using Whisper audio models",
      "Automated categorization, priority scoring & department routing via Gemini API",
      "Automated formal grievance letter PDF generation with PDFKit",
      "Administrative officer review portal with one-click approve, cancel, or regenerate workflows",
      "Recommended supporting documentation checklist dynamically tailored to the issue",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Flutter",
      "Gemini API",
      "Whisper API",
      "n8n Workflows",
      "PDFKit",
      "REST APIs",
    ],
    githubUrl: "https://github.com/haricharanbaddireddy-del/",
    featured: true,
    statusBadge: "Featured Project",
    accentColor: "from-blue-500/20 to-indigo-500/10",
  },
  {
    id: "ai-hackathon-matcher",
    name: "AI Hackathon Team Matcher",
    category: "AI & Automation",
    tagline: "Intelligent Participant Skill Analysis & Balanced Team Formation",
    description:
      "An automated workflow engine built using n8n and Google's Gemini API that analyzes participant profiles, balances complementary tech stacks, and creates optimized hackathon squads automatically.",
    problemSolved:
      "Solo hackathon participants often struggle to find teammates with complementary skillsets (e.g., matching a backend coder with a UI designer), while organizers spend hours manually reading registrations and forming squads.",
    keyFeatures: [
      "Automated participant intake pipeline capturing tech proficiencies and project preferences",
      "Semantic skill analysis and candidate persona mapping powered by Gemini API",
      "Multi-constraint team balancing algorithm (Frontend, Backend, AI, UI/UX)",
      "Automated email communication dispatching team assignments and contact information",
      "Live status sync with Google Sheets database for real-time visibility",
    ],
    technologies: [
      "n8n Automation",
      "Gemini API",
      "JavaScript",
      "Google Sheets API",
      "Email Automation",
      "REST Webhooks",
    ],
    githubUrl: "https://github.com/haricharanbaddireddy-del/",
    featured: true,
    statusBadge: "Automation System",
    accentColor: "from-purple-500/20 to-blue-500/10",
  },
  {
    id: "mood-quote-generator",
    name: "Mood Based Quote Generator",
    category: "Web Development",
    tagline: "Interactive Sentiment-Driven Inspiration Web Application",
    description:
      "A responsive web application that generates curated, inspirational thoughts and quotes tailored to the user's current emotional state, featuring local persistence for bookmarks and history.",
    problemSolved:
      "Generic motivational websites dump random quotes with no emotional relevance. This application delivers instant, sentiment-aligned inspiration with a clean, distraction-free aesthetic.",
    keyFeatures: [
      "Interactive mood selection palette (Motivated, Calm, Focused, Energetic, Reflective)",
      "Dynamic random quote selection engine with instant refresh",
      "Persistent 'Favorites' list backed by browser LocalStorage",
      "Quote history timeline tracking previously viewed insights",
      "One-click quote copying and sharing capability",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage API", "Responsive UI"],
    githubUrl: "https://github.com/haricharanbaddireddy-del/",
    featured: false,
    statusBadge: "Web Application",
    accentColor: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "decision-making-spinner",
    name: "Decision Making Spinner",
    category: "Web Development",
    tagline: "Interactive Customizable Spinning Wheel for Decisive Choices",
    description:
      "A fluid, canvas-powered decision application featuring customizable option wheels, smooth physics-based decelerating animations, and instant random selection.",
    problemSolved:
      "Eliminates decision fatigue and analysis paralysis when individuals or small groups need to choose between restaurants, project tasks, or game topics in a fair, engaging way.",
    keyFeatures: [
      "Dynamic option manager allowing users to add, edit, toggle, and delete wheel sectors",
      "HTML5 Canvas rendering with crisp geometry, contrasting colors, and slice dividers",
      "Natural physics-based spin easing with deceleration curve and tick indicators",
      "Audible or visual celebration and announcement of the winning selection",
      "Preloaded presets for common quick decisions",
    ],
    technologies: [
      "React",
      "JavaScript",
      "HTML5 Canvas",
      "CSS Animations",
      "Vite",
    ],
    githubUrl: "https://github.com/haricharanbaddireddy-del/",
    featured: false,
    statusBadge: "Interactive App",
    accentColor: "from-amber-500/20 to-rose-500/10",
  },
  {
    id: "campus-companion",
    name: "Campus Companion (HackOverflow 2K25)",
    category: "Hackathons",
    tagline: "Centralized Student Accessibility & Communication Portal",
    description:
      "Developed under competitive time constraints at HackOverflow 2K25 to bridge communication gaps across departments, streamline student notices, and improve campus resource accessibility.",
    problemSolved:
      "College students miss critical academic deadlines and campus notifications scattered across physical notice boards, random messaging groups, and disparate department portals.",
    keyFeatures: [
      "Unified event and notice board with category filters",
      "Student accessibility module for quick campus contacts and resource hubs",
      "Real-time collaboration and peer discussion forum",
      "Rapid prototype built and pitched to industry judges during a 24-hour hackathon",
    ],
    technologies: ["React", "Node.js", "Express.js", "CSS3", "Git Collaboration"],
    githubUrl: "https://github.com/haricharanbaddireddy-del/",
    featured: false,
    statusBadge: "Hackathon Project",
    accentColor: "from-cyan-500/20 to-blue-500/10",
  },
  {
    id: "physiotrack",
    name: "PhysioTrack (Prajwalan 2K26)",
    category: "Hackathons",
    tagline: "Intelligent Physiotherapy Compliance & Recovery Monitoring",
    description:
      "A patient rehabilitation tracking solution created at Prajwalan 2K26 National Level Hackathon to help physiotherapists monitor at-home exercise compliance and patient recovery milestones.",
    problemSolved:
      "More than 70% of physical therapy patients fail to maintain prescribed home routines, leading to prolonged recovery times and lack of measurable progress data for practitioners.",
    keyFeatures: [
      "Daily exercise routine planner with structured repetition targets",
      "Patient self-reporting log with pain and completion metrics",
      "Progress dashboard visualizing recovery trajectory for physical therapists",
      "Collaborative project built and demonstrated under hackathon conditions",
    ],
    technologies: ["React", "JavaScript", "Node.js", "Data Visualization", "REST APIs"],
    githubUrl: "https://github.com/haricharanbaddireddy-del/",
    featured: false,
    statusBadge: "Hackathon Project",
    accentColor: "from-teal-500/20 to-emerald-500/10",
  },
  {
    id: "auto-birthday-wishes",
    name: "Automatic Birthday Wish Sender",
    category: "AI & Automation",
    tagline: "Autonomous Workflow for Scheduled Calendar Greetings",
    description:
      "An automated workflow system that monitors dates in Google Calendar and dispatches tailored celebratory messages via Twilio and email on schedule without manual intervention.",
    problemSolved:
      "Eliminates missed birthdays and relationship check-ins for busy professionals by turning contact milestones into an autonomous, personalized communication pipeline.",
    keyFeatures: [
      "Daily scheduled cron triggers configured inside n8n workflow engine",
      "Google Calendar & Contacts API integration to fetch milestone dates",
      "Twilio SMS & messaging API integration for multi-channel delivery",
      "Template personalization inserting recipient names and customized well-wishes",
    ],
    technologies: ["n8n", "Google Calendar API", "Twilio API", "Webhooks", "JSON"],
    githubUrl: "https://github.com/haricharanbaddireddy-del/",
    featured: false,
    statusBadge: "Workflow Automation",
    accentColor: "from-rose-500/20 to-pink-500/10",
  },
];

/*
  CONFIGURABLE EXTENSION:
  To add upcoming projects (e.g., CampusOS, OptiNest), add new entries to projectsData:
  {
    id: "campus-os",
    name: "CampusOS",
    category: "AI & Full Stack",
    tagline: "Intelligent University Operating System",
    description: "...",
    problemSolved: "...",
    keyFeatures: ["..."],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/haricharanbaddireddy-del/CampusOS",
    featured: true,
    statusBadge: "In Development",
  }
*/

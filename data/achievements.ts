export interface Achievement {
  id: string;
  title: string;
  award: string;
  event: string;
  organization: string;
  year: string;
  category: "Award" | "Bootcamp" | "Hackathon" | "Certification";
  description: string;
  impactPoints: string[];
  icon: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "samagra-2k26",
    title: "Second Prize – Research & Paper Presentation",
    award: "2nd Prize Winner",
    event: "SAMAGRA 2K26",
    organization: "Department of CSIT, S.R.K.R. Engineering College",
    year: "2026",
    category: "Award",
    description:
      "Awarded second prize for an in-depth research presentation on 'Prompt Engineering and Artificial Intelligence Applications', evaluating how precise contextual scaffolding and few-shot techniques optimize LLM fidelity.",
    impactPoints: [
      "Presented real-world methodologies for minimizing hallucinations in generative models",
      "Demonstrated practical prompt architecture and chained reasoning pipelines",
      "Evaluated by departmental faculty and external technical adjudicators",
    ],
    icon: "Trophy",
  },
  {
    id: "ide-bootcamp-2026",
    title: "Innovation, Design & Entrepreneurship (IDE) Bootcamp",
    award: "Selected Participant & Graduate",
    event: "IDE Bootcamp 2026 Phase 1",
    organization: "AICTE / MoE Innovation Cell at SVPCET, Puttur, AP",
    year: "2026",
    category: "Bootcamp",
    description:
      "Selected for the prestigious national-level innovation bootcamp focusing on design thinking, startup ideation, prototype creation, and business model canvas evaluation.",
    impactPoints: [
      "Trained in user-centric design thinking and customer discovery methodologies",
      "Pitched startup prototypes to seasoned venture mentors and startup founders",
      "Completed intensive hands-on collaborative problem-solving sprints",
    ],
    icon: "Lightbulb",
  },
  {
    id: "prajwalan-2k26",
    title: "National Level Hackathon Participant",
    award: "Hackathon Finalist",
    event: "Prajwalan 2K26",
    organization: "National Level Technical Fest",
    year: "2026",
    category: "Hackathon",
    description:
      "Engineered 'PhysioTrack', an intelligent rehabilitation tracking system designed to monitor patient exercise adherence and assist physiotherapists with objective recovery metrics.",
    impactPoints: [
      "Rapidly designed end-to-end full stack architecture under competitive constraints",
      "Formulated patient compliance metrics and real-time therapist dashboards",
      "Demonstrated system mechanics during live multi-stage jury evaluation",
    ],
    icon: "Code",
  },
  {
    id: "hackoverflow-2k25",
    title: "National Level Hackathon Participant",
    award: "Hackathon Finalist",
    event: "HackOverflow 2K25",
    organization: "National Level Hackathon",
    year: "2025",
    category: "Hackathon",
    description:
      "Collaborated in a high-intensity hackathon sprint to build 'Campus Companion', a unified student accessibility and real-time department notification hub.",
    impactPoints: [
      "Built responsive collaborative frontend and integrated backend API endpoints",
      "Navigated 24-hour sprint milestones, version control branching, and deployment",
      "Strengthened real-time problem-solving and rapid prototyping under pressure",
    ],
    icon: "Flame",
  },
  {
    id: "n8n-automation-workshop",
    title: "Workflow Automation & Integration Workshop",
    award: "Certified Participant",
    event: "Enterprise Workflow Automation Series",
    organization: "n8n Technical Community",
    year: "2024",
    category: "Certification",
    description:
      "Completed comprehensive training on low-code workflow automation, custom webhook triggers, multi-system API orchestration, and data mapping.",
    impactPoints: [
      "Mastered conditional routing, JSON data transformation, and scheduled cron triggers",
      "Integrated third-party APIs including Google Workspace, Twilio, and LLM endpoints",
      "Applied automation paradigms directly to real-world productivity workflows",
    ],
    icon: "Cpu",
  },
];

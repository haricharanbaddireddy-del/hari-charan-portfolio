export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core languages used for problem solving, algorithmic coding, and backend architecture.",
    icon: "Terminal",
    badge: "Core",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "C" },
      { name: "JavaScript" },
    ],
  },
  {
    id: "web-dev",
    title: "Web Technologies",
    description: "Full-stack development stack for creating responsive, modern interactive web platforms.",
    icon: "Layout",
    badge: "Full Stack",
    skills: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "HTML5" },
      { name: "CSS3 / Tailwind" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Applied artificial intelligence, LLM integration, and autonomous business workflows.",
    icon: "Sparkles",
    badge: "Specialization",
    skills: [
      { name: "Gemini API" },
      { name: "n8n Automation" },
      { name: "Prompt Engineering" },
      { name: "AI Workflows" },
      { name: "Whisper Speech API" },
      { name: "Autonomous Pipelines" },
    ],
  },
  {
    id: "computer-science",
    title: "Computer Science Fundamentals",
    description: "Theoretical foundation backing efficient software design and scalable architecture.",
    icon: "Binary",
    badge: "Foundation",
    skills: [
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "Object-Oriented Programming (OOP)" },
      { name: "Database Management Systems (DBMS)" },
      { name: "Operating Systems" },
      { name: "Software Debugging" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Environment",
    description: "Modern developer tooling for version control, testing, and productive workflows.",
    icon: "Wrench",
    badge: "Tooling",
    skills: [
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Git" },
      { name: "Postman" },
      { name: "n8n Self-Host / Cloud" },
      { name: "JSON / Webhooks" },
    ],
  },
  {
    id: "soft-skills",
    title: "Professional & Leadership",
    description: "Interpersonal, public speaking, and team execution skills gained through leadership bodies.",
    icon: "Users",
    badge: "Leadership",
    skills: [
      { name: "Problem Solving" },
      { name: "Analytical Thinking" },
      { name: "Team Collaboration" },
      { name: "Technical Leadership (ACE & ACM)" },
      { name: "Public Speaking & Storytelling" },
      { name: "Agile Execution & Adaptability" },
    ],
  },
];

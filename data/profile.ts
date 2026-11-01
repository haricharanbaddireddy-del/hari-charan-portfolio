export interface Profile {
  name: string;
  fullName: string;
  role: string;
  headline: string;
  tagline: string;
  summary: string;
  aboutDetails: {
    paragraphs: string[];
    highlights: {
      label: string;
      value: string;
      description: string;
    }[];
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    college: string;
    github: string;
    linkedin: string;
    googleSite: string;
  };
  resumeUrl: string;
  portraitUrl: string;
  secondaryPortraitUrl: string;
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const profileData: Profile = {
  name: "Hari Charan",
  fullName: "Baddireddy Hari Charan",
  role: "AI + Full Stack + Automation Developer",
  headline: "Building Intelligent Solutions Through AI, Full Stack Development & Automation",
  tagline: "I BUILD SOFTWARE • I EXPLORE AI • I CREATE INTELLIGENT AUTOMATIONS",
  summary:
    "Computer Science undergraduate passionate about building practical software solutions, intelligent applications, and automation systems that solve real-world problems.",
  aboutDetails: {
    paragraphs: [
      "I am a Computer Science and Engineering undergraduate at S.R.K.R. Engineering College with a deep passion for full-stack engineering, applied artificial intelligence, and end-to-end workflow automation.",
      "My development philosophy is rooted in practical problem solving and research-driven implementation. Rather than building static prototypes, I focus on end-to-end solutions—from intuitive user interfaces in React to intelligent AI agents with Gemini and robust backend pipelines.",
      "Beyond code, I actively contribute to the technical community as an Executive Body Member of ACE & ACM, collaborate on national-level hackathons, and explore marginal gains in both software architecture and public speaking.",
    ],
    highlights: [
      {
        label: "Degree",
        value: "B.Tech CSE",
        description: "S.R.K.R. Engineering College",
      },
      {
        label: "Academic Score",
        value: "8.78 CGPA",
        description: "Strong CS Fundamentals",
      },
      {
        label: "Graduation",
        value: "Class of 2028",
        description: "2024 – Present",
      },
      {
        label: "Core Focus",
        value: "AI & Full Stack",
        description: "LLMs, React, n8n, Node.js",
      },
    ],
  },
  contact: {
    email: "haricharanbaddireddy@gmail.com",
    phone: "+91 7989012793",
    location: "Bhimavaram, Andhra Pradesh, India",
    college: "S.R.K.R. Engineering College (Autonomous)",
    github: "https://github.com/haricharanbaddireddy-del/",
    linkedin: "https://www.linkedin.com/in/hari-charan-baddireddy-ba570133a",
    googleSite: "https://sites.google.com/view/haricharanportfolio",
  },
  resumeUrl: "/resume/Hari_Charan_Resume.pdf",
  portraitUrl: "/images/hari-charan-portrait.jpg",
  secondaryPortraitUrl: "/images/hari-charan-portrait-2.jpg",
  pillars: [
    {
      title: "Full Stack Engineering",
      description:
        "Building responsive, high-performance web applications using React, Node.js, Express, and MongoDB with modern clean architecture.",
      icon: "Code2",
    },
    {
      title: "Applied AI & LLMs",
      description:
        "Integrating Gemini API, Whisper transcription, and prompt engineering into real-world applications to deliver context-aware intelligence.",
      icon: "Brain",
    },
    {
      title: "Workflow Automation",
      description:
        "Designing autonomous multi-step pipelines with n8n, webhooks, and REST APIs that eliminate manual friction and scale processes.",
      icon: "Cpu",
    },
  ],
};

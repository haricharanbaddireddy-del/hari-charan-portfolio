export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeType: "CGPA" | "Percentage";
  status: "In Progress" | "Completed";
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "btech-cse",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "S.R.K.R. Engineering College (Autonomous)",
    location: "Bhimavaram, Andhra Pradesh",
    period: "2024 – Present (Expected 2028)",
    grade: "8.78 CGPA",
    gradeType: "CGPA",
    status: "In Progress",
    highlights: [
      "Rigorous coursework in Data Structures, Algorithms, Object-Oriented Programming, and DBMS",
      "Elected Executive Body Member in ACE (Association of Computer Engineers) & ACM Student Chapter",
      "Representing the institution in national hackathons and paper presentation symposiums",
      "Focus on artificial intelligence integrations and scalable full-stack development",
    ],
  },
  {
    id: "intermediate",
    degree: "Intermediate / Higher Secondary (Class XII)",
    field: "Mathematics, Physics & Chemistry (MPC)",
    institution: "Aditya Junior College",
    location: "Palakol, Andhra Pradesh",
    period: "2022 – 2024",
    grade: "96.0%",
    gradeType: "Percentage",
    status: "Completed",
    highlights: [
      "Exceptional academic record achieving 96% in state board examinations",
      "Strong analytical foundation in advanced calculus, mechanics, and computational logic",
      "Active participant in analytical math competitions and science symposiums",
    ],
  },
  {
    id: "secondary-school",
    degree: "Secondary School Certificate (Class X)",
    field: "General Academics & Sciences",
    institution: "Montessori's English Medium School",
    location: "Ullamparru, Andhra Pradesh",
    period: "Completed 2022",
    grade: "88.3%",
    gradeType: "Percentage",
    status: "Completed",
    highlights: [
      "Distinction in Mathematics and Physical Sciences",
      "Foundational participation in school debating, public speaking, and science fairs",
      "Developed early interest in computer technology and algorithmic problem solving",
    ],
  },
];

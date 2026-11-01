export interface Certificate {
  id: string;
  title: string;
  event: string;
  organization: string;
  category: "National Hackathon" | "Innovation & Design" | "Research & Award" | "Automation Certification" | "Public Speaking";
  year: string;
  previewUrl: string;
  driveUrl: string;
  description: string;
}

export const certificatesData: Certificate[] = [
  {
    id: "samagra-2k26-cert",
    title: "Second Prize – Prompt Engineering & AI Research",
    event: "SAMAGRA 2K26 Annual Day Fest",
    organization: "Department of CSIT, S.R.K.R. Engineering College",
    category: "Research & Award",
    year: "2026",
    previewUrl: "/images/certificates/cert_samagra.jpg",
    driveUrl: "https://drive.google.com/file/d/1GsKEyapmVkfhjYhmMKi7HqWHI47zVgil/view?usp=drive_link",
    description: "Awarded second prize for comprehensive research presentation on Prompt Engineering techniques and generative AI application architectures.",
  },
  {
    id: "ide-bootcamp-2026-cert",
    title: "Innovation, Design & Entrepreneurship (IDE) Bootcamp",
    event: "IDE Bootcamp 2026 Phase 1",
    organization: "AICTE / MoE Innovation Cell at SVPCET, Puttur, AP",
    category: "Innovation & Design",
    year: "2026",
    previewUrl: "/images/certificates/cert_ide_bootcamp.jpg",
    driveUrl: "https://drive.google.com/file/d/1TyV9KfBC-EYLGKWh1IyVNTHq_6TXw-xO/view?usp=drive_link",
    description: "Certificate of completion for intensive national bootcamp on user-centric design thinking, venture ideation, and business model prototyping.",
  },
  {
    id: "hackoverflow-2k25-cert",
    title: "HackOverflow 2K25 Official Certificate",
    event: "HackOverflow 2K25",
    organization: "National Level Hackathon",
    category: "National Hackathon",
    year: "2025",
    previewUrl: "/images/certificates/cert_hackoverflow.jpg",
    driveUrl: "https://drive.google.com/file/d/1NDC1vGHB3NHrkUOJSbIAWe2382IBiKdW/view?usp=drive_link",
    description: "Recognized for building and demonstrating 'Campus Companion', a campus accessibility and student communication portal.",
  },
  {
    id: "hackoverflow-2k25-rcv",
    title: "Certificate of Presentation & Receiving",
    event: "HackOverflow 2K25",
    organization: "National Level Hackathon",
    category: "National Hackathon",
    year: "2025",
    previewUrl: "/images/certificates/cert_hackoverflow_rcv.jpg",
    driveUrl: "https://drive.google.com/file/d/1diKYe8uYDNoa3OfLWBXGWhAJ8Y6iyus3/view?usp=drive_link",
    description: "Official presentation recognition and ceremony certificate receiving record from the hackathon evaluating panel.",
  },
  {
    id: "prajwalan-2k26-cert",
    title: "Prajwalan 2K26 Hackathon Finalist",
    event: "Prajwalan 2K26",
    organization: "National Level Technical Fest",
    category: "National Hackathon",
    year: "2026",
    previewUrl: "/images/certificates/cert_prajwalan.jpg",
    driveUrl: "https://drive.google.com/file/d/1q0oombhjCNOa1NMMmOOQRpK3aI7Y7hb8/view?usp=drive_link",
    description: "Finalist certification for architecting 'PhysioTrack', an intelligent rehabilitation tracking system for patient exercise compliance.",
  },
  {
    id: "n8n-workshop-cert",
    title: "Enterprise Workflow Automation Series",
    event: "n8n Workflow Automation Workshop",
    organization: "n8n Community & Technical Integrations",
    category: "Automation Certification",
    year: "2024",
    previewUrl: "/images/certificates/cert_n8n.jpg",
    driveUrl: "https://drive.google.com/file/d/16Q8oANqtTuIrb4JX4J016bJvhqVyuc_a/view?usp=sharing",
    description: "Completed intensive practical workshop on multi-step API orchestration, conditional webhooks, and scalable low-code workflow automation.",
  },
  {
    id: "orator-semis-cert",
    title: "Semifinalist Orator Certificate",
    event: "SRKR Orator Championship – Semifinals",
    organization: "S.R.K.R. Engineering College",
    category: "Public Speaking",
    year: "2024",
    previewUrl: "/images/certificates/cert_orator_semis.jpg",
    driveUrl: "https://drive.google.com/file/d/1yx-0no9tkhUtpVVWUOq-E7ZpajwjuB7a/view?usp=drive_link",
    description: "Qualified for semifinals presenting 'Small Habits, Big Change', detailing the British Cycling marginal gains methodology and audience persuasion.",
  },
  {
    id: "orator-prelims-cert",
    title: "Prelims Orator Qualification Certificate",
    event: "SRKR Orator Championship – Prelims",
    organization: "S.R.K.R. Engineering College",
    category: "Public Speaking",
    year: "2024",
    previewUrl: "/images/certificates/cert_orator_prelims.jpg",
    driveUrl: "https://drive.google.com/file/d/1T2CiyQ2lnZV4Rd2XMkA6fhKfl-OwBLmr/view?usp=drive_link",
    description: "Honored in the preliminary round for speech delivery, voice modulation, and stage presence across campus-wide competitors.",
  },
];

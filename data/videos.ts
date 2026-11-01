export interface SpeechVideo {
  id: string;
  title: string;
  topic: string;
  event: string;
  stage: string;
  year: string;
  location: string;
  thumbnailUrl: string;
  driveUrl: string;
  embedUrl: string;
  description: string;
  keyThemes: string[];
}

export const videosData: SpeechVideo[] = [
  {
    id: "orator-semifinals-video",
    title: "Small Habits, Big Change – Semifinals Keynote",
    topic: "The Philosophy of Marginal Gains & Compounding Growth",
    event: "SRKR Orator Championship",
    stage: "Semifinals",
    year: "2024",
    location: "S.R.K.R. Engineering College, Bhimavaram",
    thumbnailUrl: "/images/videos/video_orator_semis.jpg",
    driveUrl: "https://drive.google.com/file/d/1dnDdMAbkR9D2fhQGgrx5tplgjwcJKjYY/view?usp=drive_link",
    embedUrl: "https://drive.google.com/file/d/1dnDdMAbkR9D2fhQGgrx5tplgjwcJKjYY/preview",
    description:
      "Competitive semifinal address analyzing the British Cycling methodology of marginal improvements, translating the 1% compounding formula into actionable daily systems for academic excellence and long-term software engineering mastery.",
    keyThemes: [
      "1% Marginal Gains & Aggregation Principles",
      "British Cycling & Dave Brailsford Case Study",
      "Overcoming Analysis Paralysis with Small Systems",
      "Audience Persuasion, Storytelling & Vocal Modulation",
    ],
  },
  {
    id: "orator-prelims-video",
    title: "Small Habits, Big Change – Prelims Round",
    topic: "Introduction to Consistent Incremental Improvement",
    event: "SRKR Orator Championship",
    stage: "Preliminaries",
    year: "2024",
    location: "S.R.K.R. Engineering College, Bhimavaram",
    thumbnailUrl: "/images/videos/video_orator_prelims.jpg",
    driveUrl: "https://drive.google.com/file/d/1n6_1Mx6Ml7vcQyKxpZdZSficXeqzvXjy/view?usp=drive_link",
    embedUrl: "https://drive.google.com/file/d/1n6_1Mx6Ml7vcQyKxpZdZSficXeqzvXjy/preview",
    description:
      "Qualifying round speech delivering a narrative on how micro-habits outpace sporadic intensity. Successfully secured jury endorsement to qualify as a tournament semifinalist across campus-wide competitors.",
    keyThemes: [
      "Micro-Habits vs. Sporadic Effort",
      "Stage Confidence & Articulation",
      "Story-Driven Persuasive Structure",
      "Direct Audience Rapport & Body Language",
    ],
  },
];

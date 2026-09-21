export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  role: string[];
  focusAreas: string[];
  devTech: string[];
  liveUrl: string;
  githubUrl: string;
  summary: string;
  workflowSteps: string[];
  sections: {
    number: string;
    title: string;
    content: string;
    highlights?: string[];
  }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
  aspectRatio?: string;
  tag: string;
}

export interface SkillCategory {
  title: string;
  type: 'design' | 'technical';
  skills: {
    name: string;
    level?: string;
    description?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  grade?: string;
}

export interface AchievementItem {
  id: string;
  number: string;
  title: string;
  level: string;
  description: string;
  tag: string;
}

export const PERSONAL_INFO = {
  name: "AKSHIKA MISHRA",
  role: "Aspiring UI/UX Designer | Web & Product Designer",
  titleEyebrow: "UI/UX DESIGNER • FRONTEND DEVELOPER",
  headline: "Designing digital experiences that feel simple, intuitive and human.",
  bioShort: "Akshika combines Figma-based UI/UX design and frontend development to design and build usable digital products.",
  location: "Abu Road, Rajasthan",
  availability: "Open to opportunities",
  email: "akshikamishra615@gmail.com",
  linkedin: "https://linkedin.com/in/akshika-mishra-743089371",
  github: "https://github.com/akshikamishra615-dev",
  currentDegree: "BCA — Adarsh College of Professional Studies",
  degreeStatus: "Pursuing (2024–2027)",
};

export const ABOUT_NARRATIVE = {
  headline: "I care about both how a product looks and how it works.",
  storyParagraph1: "As an aspiring UI/UX Designer and Web/Product Designer, I focus on creating digital experiences where usability meets clean, deliberate visual design. My workflow starts in Figma — establishing clear information hierarchy, wireframing user flows, and crafting intuitive component systems.",
  storyParagraph2: "What sets my approach apart is the technical capability to take UI/UX concepts and independently translate them into production-ready React interfaces with responsive layouts, reusable components, and theme-aware designs.",
  keyHighlights: [
    "Figma-first design process with structured wireframing",
    "Information hierarchy and visual design focus",
    "Responsive design optimized for desktop and mobile",
    "Production-ready React & TypeScript component development",
    "User-centric workflow design for AI applications",
    "Product thinking & usability-driven decision making"
  ]
};

export const FEATURED_PROJECT: ProjectCaseStudy = {
  id: "notiq-ai",
  title: "NOTIQ AI",
  subtitle: "AI-Powered Learning & Knowledge Management Platform",
  category: "UI/UX Design + Frontend Engineering",
  role: ["UI/UX Developer", "Frontend Developer"],
  focusAreas: ["UI/UX", "Responsive Design", "Information Hierarchy", "AI Learning Workflows"],
  devTech: ["React", "TypeScript", "Reusable Components", "Interactive States", "Theme-aware Interfaces"],
  liveUrl: "https://notiq-ai.netlify.app/",
  githubUrl: "https://github.com/akshikamishra615-dev/notiq-ai",
  summary: "Designed and developed a modern, responsive UI/UX for an AI-powered learning and knowledge management platform, focusing on intuitive navigation, clean information hierarchy, and user-centric learning workflows.",
  workflowSteps: [
    "Documents Processing",
    "Concept Explanations",
    "Quizzes Generation",
    "Flashcards System",
    "Progress Tracking",
    "Personal Knowledge Management"
  ],
  sections: [
    {
      number: "01",
      title: "The Product",
      content: "NOTIQ AI is an AI-powered learning and knowledge management platform designed to streamline study workflows. It focuses on intuitive navigation and clean information hierarchy to make complex AI capabilities approachable.",
      highlights: [
        "Designed and developed a modern, responsive UI/UX platform",
        "Focused on intuitive navigation and clean information hierarchy",
        "Created low-friction interfaces for document processing and study tools"
      ]
    },
    {
      number: "02",
      title: "Design Approach",
      content: "Structured core user needs into clear UI/UX concepts. Emphasized visual hierarchy, accessible touch targets, and consistent spacing across all core learning views.",
      highlights: [
        "Structured wireframes mapping end-to-end user navigation",
        "Theme-aware UI components ensuring visual consistency",
        "Iterative refinement for intuitive AI interactions"
      ]
    },
    {
      number: "03",
      title: "AI Learning Experience",
      content: "Designed user-centric workflows for AI learning features, guiding users smoothly through a multi-stage study pipeline from raw documents to long-term knowledge retention.",
      highlights: [
        "Document ingestion and processing workflow",
        "AI-generated concept explanations & summaries",
        "Interactive quizzes, flashcards, and progress tracking dashboard"
      ]
    },
    {
      number: "04",
      title: "Interface System",
      content: "Translated UI/UX concepts into production-ready React interfaces, creating a modular library of reusable components, interactive states, and responsive layouts.",
      highlights: [
        "Component-driven React architecture with typed props",
        "Interactive hover, focus, loading, and active state transitions",
        "Theme-aware UI tokens for high usability"
      ]
    },
    {
      number: "05",
      title: "Responsive Experience",
      content: "Optimized the entire interface for seamless desktop and mobile experiences, ensuring usability, readability, and visual consistency across all screen sizes.",
      highlights: [
        "Fully responsive layouts tailored for desktop, tablet, and mobile",
        "Fluid typography and dynamic container spacing",
        "Live web application deployed on Netlify"
      ]
    }
  ]
};

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-codealpha",
    title: "UI/UX Design Virtual Internship Certificate",
    issuer: "CodeAlpha",
    date: "20th August 2026 – 20th September 2026",
    credentialId: "CA/DF1/253670",
    image: "/certificates/Certificate_Akshika Mishra.png",
    tag: "UI/UX Design Internship"
  },
  {
    id: "cert-aws",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    date: "September 20, 2026",
    image: "/certificates/Akshika_AWS.png",
    tag: "Cloud Computing"
  },
  {
    id: "cert-cisco-iot",
    title: "Introduction to IoT and Digital Transformation",
    issuer: "Cisco Networking Academy",
    date: "20 September 2026",
    credentialId: "5c00c7f1-43e2-4ca4-af9f-378a8ff8ebac",
    image: "/certificates/Introduction_to_IoT_certificate_akshikamishra615-gmail-com_5c00c7f1-43e2-4ca4-af9f-378a8ff8ebac.png",
    tag: "IoT & Digital Transformation"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Design Tools & Principles",
    type: "design",
    skills: [
      { name: "Figma", level: "Primary Tool", description: "Wireframing, UI Layouts, Component Libraries & Prototypes" },
      { name: "Wireframing", level: "UX Core", description: "Low-to-high fidelity layout structure and user flow mapping" },
      { name: "Information Hierarchy", level: "UX Core", description: "Structuring content for optimal visual legibility and usability" },
      { name: "Usability Principles", level: "UX Core", description: "Human-centered design, cognitive load reduction, clear affordances" },
      { name: "Visual Design", level: "UI Core", description: "Typography, grid systems, spatial rhythm, and aesthetic polish" },
      { name: "Responsive Design", level: "UI Core", description: "Adaptive layouts across desktop, tablet, and mobile screens" },
      { name: "Basic Prototyping", level: "Process", description: "Interactive click-through flows and component state transitions" },
      { name: "User Research Basics", level: "Process", description: "Understanding user needs, pain points, and task workflows" }
    ]
  },
  {
    title: "Technical & CS Skills",
    type: "technical",
    skills: [
      { name: "HTML", level: "Frontend", description: "Semantic web structure & DOM accessibility" },
      { name: "CSS", level: "Frontend", description: "Modern styling, Flexbox, Grid, CSS Variables" },
      { name: "JavaScript", level: "Frontend", description: "Core web programming & DOM interactions" },
      { name: "TypeScript", level: "Frontend", description: "Typed frontend development for resilient component systems" },
      { name: "Bootstrap", level: "Frontend", description: "Rapid responsive prototyping and utility styling" },
      { name: "C & C++", level: "Programming", description: "Algorithmic logic, memory structures, and problem-solving" },
      { name: "Object-Oriented Programming", level: "Core CS", description: "Modularity, encapsulation, inheritance, design patterns" },
      { name: "Data Structures", level: "Core CS", description: "Arrays, lists, trees, graphs, efficient data organization" },
      { name: "DBMS", level: "Core CS", description: "Database concepts, SQL queries, relational data modeling" }
    ]
  }
];

export const DESIGN_CODE_PIPELINE = [
  { step: "01", label: "Figma", desc: "Design tool canvas" },
  { step: "02", label: "Wireframes", desc: "Layout structure & flows" },
  { step: "03", label: "Visual Design", desc: "Hierarchy, typography & UI" },
  { step: "04", label: "React", desc: "Component architecture" },
  { step: "05", label: "Responsive Interface", desc: "Mobile & desktop tuning" },
  { step: "06", label: "Working Product", desc: "Live deployed application" }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Adarsh College of Professional Studies",
    location: "Abu Road, Rajasthan",
    period: "2024 – 2027",
    status: "Pursuing",
  },
  {
    degree: "Class 12th (CBSE)",
    institution: "B.S. Memorial School",
    location: "Rajasthan",
    period: "2024",
    status: "Completed",
    grade: "72%"
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    number: "01",
    title: "2nd Runner-Up — EPSON Competition",
    level: "National Level",
    description: "Awarded 2nd Runner-up position at the prestigious national-level EPSON design/tech competition.",
    tag: "National Recognition"
  },
  {
    id: "ach-2",
    number: "02",
    title: "District Inter-School Event Anchor",
    level: "District Level",
    description: "Selected to anchor and host a district-level inter-school event, demonstrating communication & leadership.",
    tag: "Leadership & Public Speaking"
  },
  {
    id: "ach-3",
    number: "03",
    title: "Art & Sketch Contest Participant",
    level: "District Level",
    description: "Represented school in district-level fine art and sketching contests, demonstrating visual creativity.",
    tag: "Visual Art & Design"
  },
  {
    id: "ach-4",
    number: "04",
    title: "Best Performance in Co-Curricular Activities",
    level: "Institutional Recognition",
    description: "Formally recognized for outstanding performance across co-curricular events and creative initiatives.",
    tag: "Excellence Award"
  }
];

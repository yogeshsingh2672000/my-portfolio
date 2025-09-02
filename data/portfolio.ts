export const personal = {
  name: "Yogesh Kumar",
  role: "Frontend Engineer",
  headline: "Frontend Engineer (3+ years) · React, Next.js, TypeScript, Tailwind",
  summary:
    "I build fast, accessible web apps. Led UI systems and AI features; shipped performance wins that cut load times by 30% and sped up delivery by 40%.",
  location: "India",
  email: "yogeshsingh2672000@gmail.com",
  phone: "+91-8920753856",
  socials: [
    { label: "GitHub", href: "https://github.com/yogeshsingh2672000" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yogesh-krr" }
  ],
  resumeUrl: "/Yogesh-Kumar-Resume.pdf"
};

export const skills = {
  primary: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Storybook",
    "React Testing Library"
  ],
  backend: ["Node.js", "Express", "PostgreSQL", "SQL", "Python", "Docker"],
  cloud: ["AWS", "GCP", "Firebase", "Serverless"],
  tooling: ["CI/CD", "Chrome DevTools", "GitHub Actions"]
};

export const experiences = [
  {
    company: "Tern-Group",
    role: "Software Engineer",
    period: "Dec 2023 – Present",
    bullets: [
      "Architected AI Resume Parser (1h → 5m, 90% reduction).",
      "30% faster design‑to‑deployment cycles via React + Next.js + Tailwind.",
      "Storybook library centralized components; team velocity +40%.",
      "Figma‑to‑React automation; UI time −25% with defect reduction.",
      "Perf: lazy loading, code splitting, image optimization; initial load −30%.",
      "Built LLM performance pipeline; mentored 2 junior devs."
    ]
  },
  {
    company: "Conciselabs",
    role: "Frontend Developer",
    period: "Oct 2022 – Sept 2023",
    bullets: [
      "Reusable hooks (file upload, search, debounce, throttle).",
      "Google Auth integration; onboarding +30%.",
      "Perf tuning with DevTools; interaction lag −20%."
    ]
  },
  {
    company: "LetsDressUp",
    role: "Frontend Developer — Intern",
    period: "Jan 2022 – Jun 2022",
    bullets: [
      "Responsive landing pages and analytics dashboard.",
      "Automated workflows; cross‑browser compatibility."
    ]
  },
  {
    company: "Arity Technologies",
    role: "Python Developer — Intern",
    period: "Nov 2021 – Dec 2021",
    bullets: ["Bulk update automation for data entry."]
  }
];

export const projects = [
  {
    title: "AI Resume Parser",
    summary: "End‑to‑end parsing pipeline that converts PDFs into structured data.",
    impact: "Cut processing time by 90% (1h → 5m).",
    stack: ["Next.js", "TypeScript", "LLM APIs", "AWS"],
    links: { live: "#", code: "#" }
  },
  {
    title: "Language Training Platform",
    summary: "Real‑time conversational analytics for language learners.",
    impact: "Improved user learning outcomes; shipped scalable UI system.",
    stack: ["React", "WebSockets", "Tailwind"],
    links: { live: "#", code: "#" }
  },
  {
    title: "Theft‑Detection",
    summary: "OpenAI‑assisted object tracking and anomaly detection.",
    impact: "Proactive threat alerts; real‑time monitoring.",
    stack: ["Node.js", "OpenAI", "Python"],
    links: { code: "#" }
  }
];



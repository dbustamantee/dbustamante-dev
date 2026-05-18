import { SiteContent } from "./types";

const content: SiteContent = {
  profile: {
    name: "Diego Bustamante",
    title: "Senior Fullstack Developer",
    bio: "Fullstack developer with 10+ years of experience building IoT platforms, serverless architectures, and modern web applications on AWS. I specialize in taking complex systems from legacy monoliths to scalable cloud-native solutions.",
    contact: {
      linkedin: "https://www.linkedin.com/in/TODO-your-linkedin",
      email: "TODO@email.com",
      github: "https://github.com/dbustamantee",
    },
  },
  experience: [
    {
      id: "wiseconn-setup",
      company: "Wiseconn",
      role: "Lead Developer — Setup Platform",
      startDate: "2022-03",
      periodLabel: "Mar 2022 – Present",
      description:
        "Internal tool for configuring IoT network parameters, used daily by 20-30 support engineers.",
      achievements: [
        "Built and maintained the entire platform as lead developer (1,800+ commits)",
        "TODO: Add measurable achievement (e.g., reduced configuration time by X%)",
        "TODO: Add another achievement with impact metrics",
      ],
    },
    {
      id: "wiseconn-cat",
      company: "Wiseconn",
      role: "Fullstack Developer — CAT (Centralized Admin Tool)",
      startDate: "2023",
      periodLabel: "2023 – Present",
      description:
        "Modern replacement for legacy admin system. Serverless architecture with ~25 Lambda functions, React SPA, and CDK infrastructure.",
      achievements: [
        "Implemented full-stack features across React frontend and Node.js Lambda backend",
        "Contributed to the IoT issue detection subsystem (temperature, battery, irrigation monitoring)",
        "TODO: Add specific measurable impact",
      ],
    },
    {
      id: "wiseconn-installer",
      company: "Wiseconn",
      role: "Lead Developer — App Instalador",
      startDate: "2019",
      periodLabel: "2019 – Present",
      description:
        "Field installation app for IoT devices. Java/WildFly with responsive web view.",
      achievements: [
        "Led development and maintenance of the installation workflow",
        "TODO: Add measurable achievement",
      ],
    },
    {
      id: "wiseconn-dropcontrol",
      company: "Wiseconn",
      role: "Fullstack Developer — Dropcontrol Platform",
      startDate: "2016",
      endDate: "2022",
      periodLabel: "2016 – 2022",
      description:
        "IoT agriculture platform for irrigation control and monitoring, serving 200+ daily users.",
      achievements: [
        "Contributed to legacy Java platform and migration to Next.js",
        "Implemented weather view and file download system with Puppeteer",
        "Worked on communication protocol for field devices (radio detection, sync, flow meters)",
        "Built data migration pipelines and Excel automation with Lambda",
      ],
    },
  ],
  projects: [
    {
      id: "fonoapp",
      name: "FonoApp",
      problem:
        "Speech therapists relied on outdated desktop software for statistical calculations and test evaluations.",
      solution:
        "Built a modern web app that automates phonoaudiological test scoring with real-time calculations.",
      result: "TODO: Add user count or specific outcome",
      stack: ["React", "Vite", "TypeScript", "AWS S3"],
      role: "Solo developer",
      url: "TODO: add URL if deployed",
      repo: "https://github.com/dbustamantee/TODO-fonoapp",
    },
    {
      id: "easy-account",
      name: "Easy Account",
      problem:
        "Needed a simple, bilingual personal finance tracker without the complexity of existing apps.",
      solution:
        "Built a Next.js app with i18n support, clean UI, and local-first data management.",
      result: "Personal use, open source",
      stack: ["Next.js", "TypeScript", "Tailwind", "next-intl"],
      role: "Solo developer",
      repo: "https://github.com/dbustamantee/easy_account",
    },
    {
      id: "portfolio",
      name: "dbustamante.dev",
      problem: "No public professional presence beyond LinkedIn.",
      solution:
        "Static bilingual portfolio optimized for recruiters: fast, accessible, printable, SEO-ready.",
      result: "This site",
      stack: ["Next.js", "TypeScript", "Tailwind", "next-intl", "Vercel"],
      role: "Solo developer",
      url: "https://dbustamante.dev",
      repo: "https://github.com/dbustamantee/dbustamante-dev",
    },
  ],
  skills: [
    {
      id: "frontend",
      category: "Frontend & Product",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "PrimeFaces"],
    },
    {
      id: "backend",
      category: "Backend & Data",
      items: ["Node.js", "Java", "Spring Boot", "Hibernate", "PostgreSQL", "REST APIs"],
    },
    {
      id: "cloud",
      category: "Cloud & Infrastructure",
      items: ["AWS Lambda", "API Gateway", "ECS", "EC2", "S3", "CDK", "Cognito", "SQS", "Aurora"],
    },
    {
      id: "tooling",
      category: "Tooling & Practices",
      items: ["Git", "CI/CD", "Docker", "WildFly", "Serverless", "IoT Protocols"],
    },
  ],
  lastUpdated: "2026-05-18",
};

export default content;

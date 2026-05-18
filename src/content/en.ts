import { SiteContent } from "./types";

const content: SiteContent = {
  profile: {
    name: "Diego Bustamante",
    title: "Senior Fullstack Developer",
    bio: "Fullstack developer with 10+ years of experience building IoT platforms, serverless architectures, and modern web applications on AWS. I specialize in taking complex systems from legacy monoliths to scalable cloud-native solutions.",
    contact: {
      linkedin: "https://www.linkedin.com/in/diegobustamanteescalona/",
      email: "diego.bustamante.work@gmail.com",
      github: "https://github.com/dbustamantee",
    },
  },
  experience: [
    {
      id: "wiseconn-setup",
      company: "Wiseconn",
      role: "Creator & Lead Developer — Setup Platform",
      startDate: "2022-03",
      periodLabel: "Mar 2022 – Present",
      description:
        "Internal tool for configuring IoT network parameters, used daily by 20-30 support engineers across multiple countries.",
      achievements: [
        "Built and maintained the entire platform as sole developer (1,800+ commits over 3 years)",
        "Replaced manual one-by-one device configuration with a guided wizard, drastically reducing setup time",
        "Implemented significant performance optimizations for fast loading of large device networks",
      ],
    },
    {
      id: "wiseconn-cat",
      company: "Wiseconn",
      role: "Core Contributor — CAT (Centralized Admin Tool)",
      startDate: "2023",
      periodLabel: "2023 – Present",
      description:
        "Modern replacement for legacy admin system. Serverless architecture with ~25 Lambda functions, React SPA, and CDK infrastructure.",
      achievements: [
        "Implemented full-stack features across React frontend and Node.js Lambda backend with CDK",
        "Contributed to IoT issue detection subsystem (temperature, battery, irrigation monitoring)",
        "Replaced slow, unreliable legacy admin views with a fast, unified interface",
      ],
    },
    {
      id: "wiseconn-installer",
      company: "Wiseconn",
      role: "Lead Developer — App Instalador",
      startDate: "2017",
      periodLabel: "2017 – Present",
      description:
        "Field installation app for IoT devices used by all field technicians. Java/WildFly with responsive web view.",
      achievements: [
        "Led development and maintenance for 9+ years, supporting all field installation operations",
        "Designed workflows that guide technicians through complex IoT device installation procedures",
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
        "IoT agriculture platform managing 300K+ hectares across 7 countries with 3,000+ active users and 20,000 field devices.",
      achievements: [
        "Contributed to legacy Java platform and participated in migration to Next.js",
        "Implemented weather view and automated file download system with Puppeteer",
        "Worked on IoT communication protocol for field devices (radio detection, sync, flow meters)",
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
        "Built a modern web app that automates phonoaudiological test scoring with real-time calculations and bilingual support.",
      result: "Active tool used by speech therapists, replacing legacy desktop software",
      stack: ["React", "Vite", "TypeScript", "PrimeReact", "i18next"],
      role: "Solo developer",
      url: "https://fonoapp-hosting-423927628379.s3.amazonaws.com/index.html",
      repo: "https://github.com/Hiruzencio/fonoapp",
    },
    {
      id: "easy-account",
      name: "Easy Account",
      problem:
        "Needed a simple, bilingual personal finance tracker without the complexity of existing apps.",
      solution:
        "Built a Next.js app with i18n support, clean UI, and PostgreSQL backend with business logic in PLpgSQL.",
      result: "Personal use, actively maintained",
      stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "next-intl"],
      role: "Solo developer",
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
  education: [
    {
      id: "aws-dev",
      institution: "Amazon Web Services",
      degree: "AWS Certified Developer – Associate",
      startYear: "2023",
      periodLabel: "2023",
    },
    {
      id: "university",
      institution: "INACAP — Universidad Tecnológica de Chile",
      degree: "Computer Science Engineer",
      field: "Ingeniero en Informática",
      startYear: "2012",
      endYear: "2017",
      periodLabel: "2012 – 2017",
    },
  ],
  lastUpdated: "2026-05-18",
};

export default content;

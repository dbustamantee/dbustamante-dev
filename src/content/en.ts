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
    stats: [
      { value: "10+", label: "Years in Industry" },
      { value: "1,889", label: "Commits (Lead Project)" },
      { value: "300K+", label: "Hectares Managed" },
      { value: "20K", label: "IoT Nodes Deployed" },
    ],
  },
  experience: [
    {
      id: "wiseconn-setup",
      company: "Wiseconn",
      role: "Creator & Lead Developer — Setup Platform",
      startDate: "2022-03",
      periodLabel: "Mar 2022 – Present",
      description:
        "Internal tool for configuring IoT network parameters, used daily by 20-30 support engineers across Chile, USA, and Mexico.",
      achievements: [
        "Built and maintained the entire platform as sole developer (1,889 commits over 3 years)",
        "Replaced manual one-by-one device configuration with a guided wizard, reducing setup time by 80%",
        "Architected backend services with Node.js Lambda + SQS for async device operations",
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
        "Built IoT issue detection subsystem (temperature, battery, irrigation anomaly monitoring)",
        "Replaced slow, unreliable legacy admin views with a fast, unified interface",
      ],
    },
    {
      id: "wiseconn-puma",
      company: "Wiseconn",
      role: "Contributor — PumaServer (IoT Protocol Module)",
      startDate: "2025-08",
      periodLabel: "Aug 2025 – Present",
      description:
        "Core IoT communication module handling protocol-level interactions with 20,000+ field devices.",
      achievements: [
        "Worked on low-level IoT protocol for device communication (radio detection, sync, flow meters)",
        "Integrated with DynamoDB for real-time device state management",
      ],
    },
    {
      id: "wiseconn-installer",
      company: "Wiseconn",
      role: "Lead Developer — App Instalador",
      startDate: "2017",
      periodLabel: "2017 – Present",
      description:
        "Field installation app for IoT devices used by all field technicians across 7 countries.",
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
        "Contributed to legacy Java platform (Struts2, EJB, Hibernate) and participated in migration to Next.js",
        "Implemented weather view and automated file download system with Puppeteer",
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
        "Modern web app that automates phonoaudiological test scoring with real-time calculations and bilingual support.",
      result: "Active tool used by speech therapists, replacing legacy desktop software",
      stack: ["React", "Vite", "TypeScript", "PrimeReact", "i18next"],
      role: "Solo developer",
      url: "https://fonoapp-hosting-423927628379.s3.amazonaws.com/index.html",
    },
    {
      id: "easy-account",
      name: "Easy Account",
      problem:
        "Needed a simple, bilingual personal finance tracker without the complexity of existing apps.",
      solution:
        "Next.js app with i18n support, clean UI, and PostgreSQL backend with business logic in PLpgSQL.",
      result: "Personal use, actively maintained",
      stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "next-intl"],
      role: "Solo developer",
    },
    {
      id: "portfolio",
      name: "diegobustamante.dev",
      problem: "No public professional presence beyond LinkedIn.",
      solution:
        "Static bilingual portfolio optimized for recruiters: fast, accessible, SEO-ready. Built with spec-driven AI development.",
      result: "This site — built in days, not weeks",
      stack: ["Next.js 16", "TypeScript", "Tailwind 4", "next-intl", "Vercel"],
      role: "Solo developer",
      url: "https://diegobustamante.dev",
    },
  ],
  skills: [
    {
      id: "frontend",
      category: "Frontend & Product",
      items: ["React / Next.js / TypeScript", "Tailwind CSS / React Native / PrimeFaces"],
    },
    {
      id: "backend",
      category: "Backend & Data",
      items: ["Node.js / Java / Spring Boot", "PostgreSQL / Hibernate / REST APIs"],
    },
    {
      id: "cloud",
      category: "Cloud & Infrastructure",
      items: ["AWS Lambda / CDK / API Gateway", "ECS / EC2 / S3 / SQS / Cognito / Aurora"],
    },
    {
      id: "iot",
      category: "IoT & Protocols",
      items: ["MQTT / DynamoDB / Device Communication", "Radio Detection / Flow Meters / Field Networks"],
    },
    {
      id: "tooling",
      category: "Tooling & Practices",
      items: ["Git / Docker / CI-CD / Serverless", "VS Code / Warp / DBeaver / Kiro / Codex"],
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

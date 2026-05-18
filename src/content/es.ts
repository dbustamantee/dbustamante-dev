import { SiteContent } from "./types";

const content: SiteContent = {
  profile: {
    name: "Diego Bustamante",
    title: "Desarrollador Fullstack Senior",
    bio: "Desarrollador fullstack con más de 10 años de experiencia construyendo plataformas IoT, arquitecturas serverless y aplicaciones web modernas en AWS. Me especializo en llevar sistemas complejos de monolitos legacy a soluciones cloud-native escalables.",
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
      role: "Lead Developer — Plataforma Setup",
      startDate: "2022-03",
      periodLabel: "Mar 2022 – Presente",
      description:
        "Herramienta interna para configurar parámetros de redes IoT, usada diariamente por 20-30 ingenieros de soporte.",
      achievements: [
        "Construí y mantengo toda la plataforma como desarrollador principal (1.800+ commits)",
        "TODO: Agregar logro medible (ej: redujo tiempo de configuración en X%)",
        "TODO: Agregar otro logro con métricas de impacto",
      ],
    },
    {
      id: "wiseconn-cat",
      company: "Wiseconn",
      role: "Fullstack Developer — CAT (Centralized Admin Tool)",
      startDate: "2023",
      periodLabel: "2023 – Presente",
      description:
        "Reemplazo moderno del sistema admin legacy. Arquitectura serverless con ~25 funciones Lambda, SPA en React e infraestructura con CDK.",
      achievements: [
        "Implementé features full-stack en frontend React y backend Node.js Lambda",
        "Contribuí al subsistema de detección de issues IoT (temperatura, batería, riego)",
        "TODO: Agregar impacto medible específico",
      ],
    },
    {
      id: "wiseconn-installer",
      company: "Wiseconn",
      role: "Lead Developer — App Instalador",
      startDate: "2019",
      periodLabel: "2019 – Presente",
      description:
        "App de instalación de dispositivos IoT en terreno. Java/WildFly con vista web responsiva.",
      achievements: [
        "Lideré el desarrollo y mantenimiento del flujo de instalación",
        "TODO: Agregar logro medible",
      ],
    },
    {
      id: "wiseconn-dropcontrol",
      company: "Wiseconn",
      role: "Fullstack Developer — Plataforma Dropcontrol",
      startDate: "2016",
      endDate: "2022",
      periodLabel: "2016 – 2022",
      description:
        "Plataforma IoT de agricultura para control de riego y monitoreo, con 200+ usuarios diarios.",
      achievements: [
        "Contribuí a la plataforma legacy Java y migración a Next.js",
        "Implementé vista de clima y sistema de descarga de archivos con Puppeteer",
        "Trabajé en protocolo de comunicación con dispositivos de campo (detección de radio, sync, caudalímetros)",
        "Construí pipelines de migración de datos y automatización con Lambda y Excel",
      ],
    },
  ],
  projects: [
    {
      id: "fonoapp",
      name: "FonoApp",
      problem:
        "Fonoaudiólogos dependían de software de escritorio obsoleto para cálculos estadísticos y evaluaciones.",
      solution:
        "Construí una app web moderna que automatiza el scoring de pruebas fonoaudiológicas con cálculos en tiempo real.",
      result: "TODO: Agregar cantidad de usuarios o resultado específico",
      stack: ["React", "Vite", "TypeScript", "AWS S3"],
      role: "Desarrollador único",
      url: "TODO: agregar URL si está desplegada",
      repo: "https://github.com/dbustamantee/TODO-fonoapp",
    },
    {
      id: "easy-account",
      name: "Easy Account",
      problem:
        "Necesitaba un tracker de finanzas personales simple y bilingüe sin la complejidad de apps existentes.",
      solution:
        "Construí una app Next.js con soporte i18n, UI limpia y manejo de datos local-first.",
      result: "Uso personal, código abierto",
      stack: ["Next.js", "TypeScript", "Tailwind", "next-intl"],
      role: "Desarrollador único",
      repo: "https://github.com/dbustamantee/easy_account",
    },
    {
      id: "portfolio",
      name: "dbustamante.dev",
      problem: "Sin presencia profesional pública más allá de LinkedIn.",
      solution:
        "Portfolio estático bilingüe optimizado para reclutadores: rápido, accesible, imprimible y SEO-ready.",
      result: "Este sitio",
      stack: ["Next.js", "TypeScript", "Tailwind", "next-intl", "Vercel"],
      role: "Desarrollador único",
      url: "https://dbustamante.dev",
      repo: "https://github.com/dbustamantee/dbustamante-dev",
    },
  ],
  skills: [
    {
      id: "frontend",
      category: "Frontend & Producto",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "PrimeFaces"],
    },
    {
      id: "backend",
      category: "Backend & Datos",
      items: ["Node.js", "Java", "Spring Boot", "Hibernate", "PostgreSQL", "REST APIs"],
    },
    {
      id: "cloud",
      category: "Cloud & Infraestructura",
      items: ["AWS Lambda", "API Gateway", "ECS", "EC2", "S3", "CDK", "Cognito", "SQS", "Aurora"],
    },
    {
      id: "tooling",
      category: "Herramientas & Prácticas",
      items: ["Git", "CI/CD", "Docker", "WildFly", "Serverless", "Protocolos IoT"],
    },
  ],
  lastUpdated: "2026-05-18",
};

export default content;

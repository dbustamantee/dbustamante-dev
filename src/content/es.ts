import { SiteContent } from "./types";

const content: SiteContent = {
  profile: {
    name: "Diego Bustamante",
    title: "Desarrollador Fullstack Senior",
    bio: "Desarrollador fullstack con más de 10 años de experiencia construyendo plataformas IoT, arquitecturas serverless y aplicaciones web modernas en AWS. Me especializo en llevar sistemas complejos de monolitos legacy a soluciones cloud-native escalables.",
    contact: {
      linkedin: "https://www.linkedin.com/in/diegobustamanteescalona/",
      email: "diego.bustamante.work@gmail.com",
      github: "https://github.com/dbustamantee",
    },
    stats: [
      { value: "10+", label: "Años de Experiencia" },
      { value: "50+", label: "Proyectos Entregados" },
      { value: "15+", label: "Tecnologías" },
      { value: "3", label: "Países Atendidos" },
    ],
  },
  experience: [
    {
      id: "wiseconn-setup",
      company: "Wiseconn",
      role: "Creador & Lead Developer — Plataforma Setup",
      startDate: "2022-03",
      periodLabel: "Mar 2022 – Presente",
      description:
        "Herramienta interna para configurar parámetros de redes IoT, usada diariamente por 20-30 ingenieros de soporte en múltiples países.",
      achievements: [
        "Construí y mantengo toda la plataforma como único desarrollador (1.800+ commits en 3 años)",
        "Reemplacé la configuración manual dispositivo por dispositivo con un wizard guiado, reduciendo drásticamente el tiempo de setup",
        "Implementé optimizaciones significativas de rendimiento para carga rápida de redes grandes de dispositivos",
      ],
    },
    {
      id: "wiseconn-cat",
      company: "Wiseconn",
      role: "Core Contributor — CAT (Centralized Admin Tool)",
      startDate: "2023",
      periodLabel: "2023 – Presente",
      description:
        "Reemplazo moderno del sistema admin legacy. Arquitectura serverless con ~25 funciones Lambda, SPA en React e infraestructura con CDK.",
      achievements: [
        "Implementé features full-stack en frontend React y backend Node.js Lambda con CDK",
        "Contribuí al subsistema de detección de issues IoT (temperatura, batería, riego)",
        "Reemplacé vistas admin legacy lentas y poco confiables con una interfaz rápida y unificada",
      ],
    },
    {
      id: "wiseconn-installer",
      company: "Wiseconn",
      role: "Lead Developer — App Instalador",
      startDate: "2017",
      periodLabel: "2017 – Presente",
      description:
        "App de instalación de dispositivos IoT en terreno usada por todos los técnicos de campo. Java/WildFly con vista web responsiva.",
      achievements: [
        "Lideré el desarrollo y mantenimiento por 9+ años, soportando todas las operaciones de instalación en terreno",
        "Diseñé flujos que guían a los técnicos a través de procedimientos complejos de instalación IoT",
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
        "Plataforma IoT de agricultura gestionando 300K+ hectáreas en 7 países con 3.000+ usuarios activos y 20.000 dispositivos de campo.",
      achievements: [
        "Contribuí a la plataforma legacy Java y participé en la migración a Next.js",
        "Implementé vista de clima y sistema automatizado de descarga de archivos con Puppeteer",
        "Trabajé en protocolo de comunicación IoT con dispositivos de campo (detección de radio, sync, caudalímetros)",
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
        "Construí una app web moderna que automatiza el scoring de pruebas fonoaudiológicas con cálculos en tiempo real y soporte bilingüe.",
      result: "Herramienta activa usada por fonoaudiólogos, reemplazando software desktop legacy",
      stack: ["React", "Vite", "TypeScript", "PrimeReact", "i18next"],
      role: "Desarrollador único",
      url: "https://fonoapp-hosting-423927628379.s3.amazonaws.com/index.html",
      repo: "https://github.com/Hiruzencio/fonoapp",
    },
    {
      id: "easy-account",
      name: "Easy Account",
      problem:
        "Necesitaba un tracker de finanzas personales simple y bilingüe sin la complejidad de apps existentes.",
      solution:
        "Construí una app Next.js con soporte i18n, UI limpia y backend PostgreSQL con lógica de negocio en PLpgSQL.",
      result: "Uso personal, mantenido activamente",
      stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "next-intl"],
      role: "Desarrollador único",
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
      degree: "Ingeniero en Informática",
      field: "Ingeniería en Informática",
      startYear: "2012",
      endYear: "2017",
      periodLabel: "2012 – 2017",
    },
  ],
  lastUpdated: "2026-05-18",
};

export default content;

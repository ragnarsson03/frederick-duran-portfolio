import { Project, ExperienceItem, SkillCategory } from "@/types/portfolio";

export const translations = {
  es: {
    nav: {
      version: "F_DURÁN_v2.6",
      status: "SYSTEM_ACTIVE // STABLE_ENV",
      tabs: {
        hero: "startup.sh",
        stack: "stack.json",
        projects: "projects.ts",
        experience: "experience.log"
      },
      githubBtn: "GITHUB"
    },
    hero: {
      badge: "ROOT_ORCHESTRATOR // FULL_STACK_ENGINEER",
      tagline: "// EXECUTIVE_SUMMARY",
      name: "Frederick Durán",
      subRole: "Software Architect & Team Lead Célula 01 @ SIS-UNETI",
      bio: "Diseño y construcción de soluciones digitales de alta escala con integridad structural y arquitectura limpia. Especializado en React, Next.js, TypeScript, Node.js y despliegues en la nube en producción.",
      leadership: "Liderazgo técnico comprobado gestionando revisiones de código (PRs), estándares de desarrollo, microservicios e infraestructura de servidores incluyendo Proxmox VE + Samba4 Active Directory en Misión Ribas.",
      exploreBtn: "EXPLORE_PROJECTS()",
      demoBtn: "LIVE_DEMO_AI()",
      console: {
        header: "kernel_status.log",
        role: "// ROLE",
        roleActive: "ACTIVE",
        roleTitle: "Team Lead Célula 01",
        roleDesc: "SIS-UNETI PR Reviews & Security",
        deployments: "// DEPLOYMENTS",
        deploymentsActive: "VERCEL",
        deploymentsTitle: "Ecosistema Digital San Agustín",
        deploymentsDesc: "CI/CD Pipeline & Express Backend",
        infra: "// INFRASTRUCTURE",
        infraActive: "PROXMOX",
        infraTitle: "Misión Ribas & Active Directory",
        infraDesc: "Samba4 Domain & Sistema Asistencia",
        execTime: "EXEC_TIME: 14ms",
        verified: "100% VERIFIED"
      }
    },
    quote: {
      title: "\"Escribir código es fácil. Construir sistemas escalables es el arte.\"",
      subtitle: "Construcción disciplinada guiada por flujos de Git estructurados, revisión rigurosa de tickets y documentación técnica."
    },
    skills: {
      tag: "// STACK_KNOWLEDGE_MATRIX",
      title: "Tecnologías y Dominios Principales",
      subtitle: "Desglose detallado del stack tecnológico con logos oficiales y áreas de dominio."
    },
    projects: {
      tag: "// TECHNICAL_CURATION",
      title: "Sistemas en Producción y Repositorios",
      subtitle: "Haz clic en las capturas para inspeccionar los módulos de cada plataforma.",
      filters: {
        all: "ALL_NODES (6)",
        infra: "INFRA_PROXMOX",
        next: "NEXT_FE",
        fullstack: "FULLSTACK_BE",
        tools: "TOOLS_VITE"
      },
      specifications: "ESPECIFICACIONES:",
      screenshots: "MODULE_SCREENSHOTS:",
      inspect: "INSPECT()",
      privateRepo: "PRIVATE_REPO / INFRA",
      sourceCode: "SOURCE_CODE",
      live: "LIVE",
      api: "API"
    },
    experience: {
      tag: "// CHRONOLOGICAL_OPERATIONS",
      title: "Cronología de Ingeniería y Experiencia Laboral",
      sisUnetiTitle: "Team Lead Célula 01 (SIS-UNETI)",
      sisUnetiDesc: "Supervisión del diseño de arquitectura de seguridad para la plataforma universitaria SIS-UNETI. Definición de estándares de código, revisión estricta de PRs y liderazgo del equipo técnico.",
      misionRibasTitle: "Misión Ribas (Infraestructura & Active Directory)",
      misionRibasDesc: "Despliegue de cluster en Proxmox VE con controlador de dominio Samba4 Active Directory, administración de usuarios RSAT, directivas de red y el Sistema Web de Asistencia y Gestión de Empleados."
    },
    modal: {
      close: "Cerrar"
    },
    footer: {
      rights: "© 2026 F_DURÁN // SECURED (ragnarsson03). Next.js & Tailwind CSS.",
      github: "GITHUB_PROFILE",
      liveSpeech: "LIVE_SPEECH_AI"
    }
  },
  en: {
    nav: {
      version: "F_DURÁN_v2.6",
      status: "SYSTEM_ACTIVE // STABLE_ENV",
      tabs: {
        hero: "startup.sh",
        stack: "stack.json",
        projects: "projects.ts",
        experience: "experience.log"
      },
      githubBtn: "GITHUB"
    },
    hero: {
      badge: "ROOT_ORCHESTRATOR // FULL_STACK_ENGINEER",
      tagline: "// EXECUTIVE_SUMMARY",
      name: "Frederick Durán",
      subRole: "Software Architect & Team Lead Cell 01 @ SIS-UNETI",
      bio: "Engineering high-scale digital solutions with structural integrity and clean architectural patterns. Specialized in React, Next.js, TypeScript, Node.js and production cloud deployments.",
      leadership: "Proven technical leadership managing pull requests, code standards, microservices and server infrastructure including Proxmox VE + Samba4 Active Directory at Misión Ribas.",
      exploreBtn: "EXPLORE_PROJECTS()",
      demoBtn: "LIVE_DEMO_AI()",
      console: {
        header: "kernel_status.log",
        role: "// ROLE",
        roleActive: "ACTIVE",
        roleTitle: "Team Lead Cell 01",
        roleDesc: "SIS-UNETI PR Reviews & Security",
        deployments: "// DEPLOYMENTS",
        deploymentsActive: "VERCEL",
        deploymentsTitle: "San Agustín Digital Ecosystem",
        deploymentsDesc: "CI/CD Pipeline & Express Backend",
        infra: "// INFRASTRUCTURE",
        infraActive: "PROXMOX",
        infraTitle: "Misión Ribas & Active Directory",
        infraDesc: "Samba4 Domain & Attendance System",
        execTime: "EXEC_TIME: 14ms",
        verified: "100% VERIFIED"
      }
    },
    quote: {
      title: "\"Writing code is easy. Building scalable systems is the craft.\"",
      subtitle: "Disciplined engineering driven by structured Git flows, rigorous ticket review, and technical documentation."
    },
    skills: {
      tag: "// STACK_KNOWLEDGE_MATRIX",
      title: "Core Technologies & Domains",
      subtitle: "Detailed breakdown of the technology stack with official logos and domain areas."
    },
    projects: {
      tag: "// TECHNICAL_CURATION",
      title: "Production Systems & Repositories",
      subtitle: "Click on screenshots to inspect platform modules.",
      filters: {
        all: "ALL_NODES (6)",
        infra: "INFRA_PROXMOX",
        next: "NEXT_FE",
        fullstack: "FULLSTACK_BE",
        tools: "TOOLS_VITE"
      },
      specifications: "SPECIFICATIONS:",
      screenshots: "MODULE_SCREENSHOTS:",
      inspect: "INSPECT()",
      privateRepo: "PRIVATE_REPO / INFRA",
      sourceCode: "SOURCE_CODE",
      live: "LIVE",
      api: "API"
    },
    experience: {
      tag: "// CHRONOLOGICAL_OPERATIONS",
      title: "Engineering Chronicles & Work Experience",
      sisUnetiTitle: "Team Lead Cell 01 (SIS-UNETI)",
      sisUnetiDesc: "Overseeing security architecture design for the SIS-UNETI university platform. Defining code standards, strict PR evaluations, and technical cell leadership.",
      misionRibasTitle: "Misión Ribas (Infrastructure & Active Directory)",
      misionRibasDesc: "Proxmox VE cluster deployment with Samba4 Active Directory Domain Controller, RSAT user management, network policies, and Web Employee Attendance Management System."
    },
    modal: {
      close: "Close"
    },
    footer: {
      rights: "© 2026 F_DURÁN // SECURED (ragnarsson03). Next.js & Tailwind CSS.",
      github: "GITHUB_PROFILE",
      liveSpeech: "LIVE_SPEECH_AI"
    }
  }
};

export const projectsList: Project[] = [
  {
    id: "mision-ribas",
    nodeId: "ID_NODE: 0x0",
    category: "infra",
    status: "INFRA_CLUSTER",
    title: {
      es: "/ Misión Ribas: Active Directory & Sistema Asistencia",
      en: "/ Misión Ribas: Active Directory & Attendance System"
    },
    description: {
      es: "Infraestructura de servidores en Proxmox VE con Active Directory (Samba4) para autenticación centralizada y dominio de red. Integrado con el Sistema Web de Asistencia y Gestión de Empleados de Misión Ribas.",
      en: "Server infrastructure built on Proxmox VE with Active Directory (Samba4) for centralized domain authentication. Integrated with the Misión Ribas Employee Attendance Management System."
    },
    highlights: {
      es: [
        "Virtualización Proxmox VE con Samba4 Active Directory Domain Controller",
        "Control de usuarios, directivas de grupo GPO y permisos de red institucional",
        "Sistema de gestión y control de asistencia de empleados de Misión Ribas"
      ],
      en: [
        "Proxmox VE virtualization with Samba4 Active Directory Domain Controller",
        "RSAT user management, GPO network policies, and institutional access control",
        "Misión Ribas web employee attendance and workforce management system"
      ]
    },
    tags: ["Proxmox VE", "Samba4 AD", "Active Directory", "Linux Server", "Sistema Asistencia", "Redes"],
    isPrivateGithub: true,
    images: [
      {
        src: "/assets/mision-ribas/usuarios_active_directory.jpg",
        caption: {
          es: "Panel Active Directory RSAT (Samba4 Domain Controller en Proxmox VE)",
          en: "Active Directory RSAT Panel (Samba4 Domain Controller on Proxmox VE)"
        }
      },
      {
        src: "/assets/mision-ribas/sistema_asistencia_ribas.jpg",
        caption: {
          es: "Sistema Web de Asistencia y Gestión de Empleados Misión Ribas",
          en: "Misión Ribas Employee Attendance & Management Web System"
        }
      }
    ]
  },
  {
    id: "detector-voz",
    nodeId: "ID_NODE: 0x1",
    category: "next",
    status: "STABLE_PRD",
    title: {
      es: "/ SpeechToText AI System",
      en: "/ SpeechToText AI System"
    },
    description: {
      es: "Aplicación web de producción diseñada para la transcripción inmediata de audio a texto en tiempo real, conectada directamente a modelos de inferencia en la nube.",
      en: "High-speed real-time audio transcription infrastructure built on cloud inference APIs. Engineered for minimal latency and direct web audio stream processing."
    },
    highlights: {
      es: [
        "Aplicación web desplegada y lista para usar en Vercel",
        "Arquitectura limpia en Next.js y TypeScript",
        "Procesamiento directo con APIs de alta velocidad y latencia ultrabaja"
      ],
      en: [
        "Production deployment running live on Vercel infrastructure",
        "Clean modular architecture using Next.js 16 & TypeScript",
        "Direct WebSocket / REST cloud audio inference processing"
      ]
    },
    tags: ["Next.js", "TypeScript", "AI Cloud Inference", "Web Audio API", "Vercel"],
    githubUrl: "https://github.com/ragnarsson03/app-detector-de-voz",
    productionUrl: "https://app-detector-de-voz.vercel.app/"
  },
  {
    id: "mtg-budget",
    nodeId: "ID_NODE: 0x2",
    category: "next",
    status: "LIVE_ACCESS",
    title: {
      es: "/ MTG Budget SaaS Generator",
      en: "/ MTG Budget SaaS Generator"
    },
    description: {
      es: "Aplicación web SaaS para la automatización de presupuestos digitales de clientes textiles y comerciales con exportación a PDF.",
      en: "Commercial automation suite for client financial estimates and digital invoice rendering. Features client-side state calculation and dynamic PDF compilation."
    },
    highlights: {
      es: [
        "Sistema desplegado en producción listo para uso comercial",
        "Desarrollado con React y TypeScript para máxima consistencia de tipos",
        "Cálculo automático de subtotales, márgenes, impuestos y facturación PDF"
      ],
      en: [
        "Live commercial SaaS engine with instant PDF generation",
        "Strict type safety using React and TypeScript",
        "Automatic tax subtotal computation and export handling"
      ]
    },
    tags: ["React", "TypeScript", "PDF Engine", "Financial Logic", "Vercel"],
    githubUrl: "https://github.com/ragnarsson03/Presupuesto-mtg",
    productionUrl: "https://presupuesto-mtg.vercel.app/"
  },
  {
    id: "dolar-bcv",
    nodeId: "ID_NODE: 0x3",
    category: "tools",
    status: "STABLE_PRD",
    title: {
      es: "/ BCV Currency Exchange Monitor",
      en: "/ BCV Currency Exchange Monitor"
    },
    description: {
      es: "Aplicación web ágil y ligera para la consulta en tiempo real y cálculo basado en la tasa de cambio oficial del Banco Central de Venezuela.",
      en: "Ultra-fast local currency monitoring application consuming real-time official exchange rates from the Central Bank of Venezuela."
    },
    highlights: {
      es: [
        "Desplegado activamente en Vercel con excelente rendimiento",
        "Construido con Vite para tiempos de carga y empaquetado instantáneos",
        "Consumo directo de API oficial con interfaz dinámica e intuitiva"
      ],
      en: [
        "Optimized with Vite for instant build asset loading and zero latency",
        "Real-time REST API consumption with reactive calculation state",
        "Deployed and cached on Vercel edge networks"
      ]
    },
    tags: ["Vite", "React", "REST API", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/ragnarsson03/dolar-bcv-vercel",
    productionUrl: "https://dolar-bcv-vercel.vercel.app/"
  },
  {
    id: "san-agustin",
    nodeId: "ID_NODE: 0x4",
    category: "fullstack",
    status: "ENTERPRISE_CORE",
    title: {
      es: "/ Ecosistema Digital San Agustín",
      en: "/ San Agustín Digital Ecosystem"
    },
    description: {
      es: "Plataforma digital centralizada con arquitectura de microservicios. Backend Node.js/Express en producción en Vercel, integrado con Supabase y MongoDB Atlas.",
      en: "Centralized microservices platform connecting administration, mobile Flutter clients, and web portals via Node.js/Express, Supabase, and MongoDB Atlas."
    },
    highlights: {
      es: [
        "Gestión integral de flujos CI/CD y despliegue continuo en la nube",
        "Backend modular en Node.js, Express, MongoDB Atlas y Supabase",
        "Aplicación móvil en Flutter y ecosistema web integrado"
      ],
      en: [
        "Automated CI/CD continuous deployment pipeline setup on Vercel",
        "Modular Node.js/Express backend paired with Supabase & MongoDB Atlas",
        "Cross-platform architecture integrating Flutter mobile client"
      ]
    },
    tags: ["Node.js", "Express", "MongoDB", "Supabase", "Flutter", "Vercel", "CI/CD"],
    githubUrl: "https://github.com/ragnarsson03/SanAgustin-Ecosistema-Digital",
    isPrivateGithub: true,
    demoUrl: "https://sanagustinbackend-one.vercel.app",
    images: [
      {
        src: "/assets/san_agustin.jpg",
        caption: {
          es: "Vista Principal / Inicio del Ecosistema San Agustín",
          en: "Main Overview / San Agustín Ecosystem Home"
        }
      },
      {
        src: "/assets/san_agustin2.png",
        caption: {
          es: "Panel Administrativo / Gestión de Usuarios",
          en: "Admin Dashboard / User Management System"
        }
      },
      {
        src: "/assets/san_agustin3.jpg",
        caption: {
          es: "Módulo de Eventos & Actividades Digitales",
          en: "Digital Events & Activities Module"
        }
      },
      {
        src: "/assets/san_agustin4.jpg",
        caption: {
          es: "Interfaz Móvil / Flutter App Ecosistema",
          en: "Mobile Interface / Flutter Ecosystem App"
        }
      }
    ]
  },
  {
    id: "sis-uneti",
    nodeId: "ID_NODE: 0x5",
    category: "fullstack",
    status: "ENTERPRISE_CORE",
    title: {
      es: "/ Sistema Universitario SIS-UNETI",
      en: "/ SIS-UNETI University Engine"
    },
    description: {
      es: "Plataforma digital universitaria centralizada con arquitectura de microservicios e integración transversal con Moodle. Liderado como Team Lead de la Célula 01.",
      en: "University administrative digital core with microservices architecture and Moodle platform integration. Spearheaded as Team Lead of Cell 01."
    },
    highlights: {
      es: [
        "Liderazgo de equipo como Team Lead de la Célula 01",
        "Definición de la arquitectura de seguridad y estándares de repositorio",
        "Supervisión y revisión exhaustiva de Pull Requests (PRs)"
      ],
      en: [
        "Technical Team Lead overseeing security architecture & PR evaluations",
        "Repository conventions and strict Git-flow management for dev cell",
        "Transversal data synchronization with institutional Moodle platform"
      ]
    },
    tags: ["Team Lead", "Microservicios", "Moodle API", "TypeScript", "Seguridad"],
    githubUrl: "https://github.com/ragnarsson03/SIS-UNETI",
    images: [
      {
        src: "/assets/sis-uneti.png",
        caption: {
          es: "Interfaz y Módulos del Sistema Universitario SIS-UNETI (Célula 01)",
          en: "SIS-UNETI University System Modules (Cell 01 Lead)"
        }
      }
    ]
  }
];

export const experienceList: ExperienceItem[] = [
  {
    id: "efpp",
    code: "[01] HARDWARE_MAINTENANCE",
    period: "SUPPORT",
    badge: {
      es: "EFPP",
      en: "EFPP"
    },
    company: "EFPP",
    role: {
      es: "Analista y Soporte a Computadoras",
      en: "IT Support Analyst & Computer Technician"
    },
    description: {
      es: "Diagnóstico, mantenimiento preventivo y correctivo de hardware, configuración de redes locales y soporte integral a usuarios.",
      en: "Hardware diagnostic, preventive and corrective maintenance, local network setup, and end-user technical support."
    }
  },
  {
    id: "cantv",
    code: "[02] NETWORKING_PASANTÍA",
    period: "2021 - 2023",
    badge: {
      es: "CANTV",
      en: "CANTV"
    },
    company: "CANTV",
    role: {
      es: "Pasantías Primer Año • Proyecto 2024: PROYECTO_APROBADO",
      en: "First Year Internship • Project 2024: PROJECT_APPROVED"
    },
    description: {
      es: "Participación en proyectos técnicos de infraestructura de telecomunicaciones y redes de datos a gran escala.",
      en: "Participation in technical telecommunications infrastructure projects and large-scale data networks."
    }
  },
  {
    id: "sindicatura",
    code: "[03] INSTITUTIONAL_SOFTWARE",
    period: "2024 - 2025",
    badge: {
      es: "SINDICATURA",
      en: "SINDICATURA"
    },
    company: "Sindicatura Municipal",
    role: {
      es: "Pasantías Segundo Año • Proyecto 2025: PROYECTO_APROBADO",
      en: "Second Year Internship • Project 2025: PROJECT_APPROVED"
    },
    description: {
      es: "Construcción e implementación de sistemas de software institucional y gestión administrativa.",
      en: "Development and deployment of institutional administrative software systems."
    }
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    key: "frontend",
    title: {
      es: "FRONTEND",
      en: "FRONTEND"
    },
    color: "border-blue-500/30 text-blue-400 bg-blue-500/5",
    items: [
      { name: "React", logoKey: "React" },
      { name: "Next.js 16", logoKey: "Nextjs" },
      { name: "TypeScript", logoKey: "TypeScript" },
      { name: "Tailwind CSS", logoKey: "Tailwind" },
      { name: "Vite", logoKey: "Vite" }
    ]
  },
  {
    key: "backend",
    title: {
      es: "BACKEND",
      en: "BACKEND"
    },
    color: "border-purple-500/30 text-purple-400 bg-purple-500/5",
    items: [
      { name: "Node.js", logoKey: "Nodejs" },
      { name: "Express.js", logoKey: "Express" },
      { name: "REST APIs", logoKey: "REST" },
      { name: "Microservices", logoKey: "Microservices" }
    ]
  },
  {
    key: "databases",
    title: {
      es: "BASES DE DATOS",
      en: "DATABASES"
    },
    color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
    items: [
      { name: "MongoDB Atlas", logoKey: "MongoDB" },
      { name: "Supabase (PostgreSQL)", logoKey: "Supabase" }
    ]
  },
  {
    key: "devops",
    title: {
      es: "DEVOPS & CLOUD",
      en: "DEVOPS & CLOUD"
    },
    color: "border-amber-500/30 text-amber-400 bg-amber-500/5",
    items: [
      { name: "Vercel", logoKey: "Vercel" },
      { name: "CI/CD Pipelines", logoKey: "CICD" },
      { name: "Git-Flow", logoKey: "GitFlow" }
    ]
  },
  {
    key: "leadership",
    title: {
      es: "LIDERAZGO TÉCNICO",
      en: "TECHNICAL LEADERSHIP"
    },
    color: "border-pink-500/30 text-pink-400 bg-pink-500/5",
    items: [
      { name: "Team Lead (Célula 01)", logoKey: "TeamLead" },
      { name: "PR Reviews & Calidad", logoKey: "PRReview" },
      { name: "Arquitectura de Software", logoKey: "Architecture" }
    ]
  },
  {
    key: "hardware",
    title: {
      es: "INFRAESTRUCTURA & REDES",
      en: "INFRASTRUCTURE & NETWORKS"
    },
    color: "border-orange-500/30 text-orange-400 bg-orange-500/5",
    items: [
      { name: "Proxmox VE Cluster", logoKey: "Proxmox" },
      { name: "Samba4 Active Directory", logoKey: "Samba4" },
      { name: "Redes & Dominio RSAT", logoKey: "Network" },
      { name: "Servidores Linux & Win", logoKey: "HardDrive" },
      { name: "Soporte Técnico Especializado", logoKey: "Settings" }
    ]
  }
];

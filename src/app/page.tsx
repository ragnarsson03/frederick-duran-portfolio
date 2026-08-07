"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Server,
  Layers,
  Sparkles,
  ChevronRight,
  Globe,
  Radio,
  UserCheck,
  Lock,
  Image as ImageIcon,
  X,
  Award,
  Building2,
  GraduationCap,
  Briefcase,
  Terminal,
  Cpu,
  Workflow,
  ShieldCheck,
  FileCode2,
  Command,
  Database,
  GitBranch,
  Network,
  Users,
  HardDrive,
  Activity,
  CheckCircle2,
  Settings,
  Flame,
  LayoutGrid
} from "lucide-react";

// Inline Technology SVGs
const TechLogos = {
  React: (props: { className?: string }) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="10" fill="#61DAFB" />
      <ellipse cx="50" cy="50" rx="4.5" ry="11" transform="rotate(30 50 50)" stroke="#61DAFB" strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="4.5" ry="11" transform="rotate(90 50 50)" stroke="#61DAFB" strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="4.5" ry="11" transform="rotate(150 50 50)" stroke="#61DAFB" strokeWidth="1" />
    </svg>
  ),
  Nextjs: (props: { className?: string }) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 180 180" fill="none">
      <mask id="mask0_next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0_next)">
        <circle cx="90" cy="90" r="90" fill="white" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.8136V70.2641L136.626 160.419C141.173 159.7 145.495 158.72 149.508 157.52Z" fill="black" />
        <rect x="115" y="54" width="13" height="72" fill="black" />
      </g>
    </svg>
  ),
  TypeScript: (props: { className?: string }) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="20" fill="#3178C6"/>
      <path d="M57 65.5C57 73 50.5 77 41.5 77C33.5 77 27 73 24 67.5L32.5 62C34.5 65.5 38 67.5 41.5 67.5C45 67.5 47 66 47 63.5C47 61.5 45.5 60.5 41.5 59.5L37 58.5C28.5 56.5 24.5 52 24.5 44C24.5 35.5 32 31.5 41 31.5C48 31.5 53.5 34.5 56.5 40L48.5 45.5C46.5 42 44 40.5 41 40.5C37.5 40.5 35 42 35 44C35 45.5 36.5 46.5 40.5 47.5L44.5 48.5C53.5 50.5 57 55.5 57 65.5ZM92 41.5H77.5V76.5H67.5V41.5H53V32.5H92V41.5Z" fill="white"/>
    </svg>
  ),
  Tailwind: (props: { className?: string }) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <path d="M26 34C31 24 40 21 47 26C51 29 54 33 57 37C63 43 69 47 77 47C87 47 93 39 96 34C91 44 82 47 75 42C71 39 68 35 65 31C59 25 53 21 45 21C35 21 29 29 26 34ZM6 59C11 49 20 46 27 51C31 54 34 58 37 62C43 68 49 72 57 72C67 72 73 64 76 59C71 69 62 72 55 67C51 64 48 60 45 56C39 50 33 46 25 46C15 46 9 54 6 59Z" fill="#38BDF8"/>
    </svg>
  ),
  Vite: (props: { className?: string }) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <path d="M82 10L49 90L46 90L17 25L38 25L48 57L62 10H82Z" fill="url(#vite-grad1)" />
      <path d="M82 10L60 62L48 57L65 10H82Z" fill="url(#vite-grad2)" />
      <defs>
        <linearGradient id="vite-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEA83" />
          <stop offset="100%" stopColor="#FFDD35" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Nodejs: (props: { className?: string }) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <path d="M50 10L85 30V70L50 90L15 70V30L50 10Z" fill="#339933"/>
      <path d="M50 25L72 38V62L50 75L28 62V38L50 25Z" fill="#215732"/>
      <circle cx="50" cy="50" r="10" fill="#FFFFFF"/>
    </svg>
  ),
  Express: (props: { className?: string }) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="20" fill="#1e293b"/>
      <text x="50%" y="60%" textAnchor="middle" fill="#ffffff" fontSize="38" fontWeight="bold" fontFamily="monospace">ex</text>
    </svg>
  ),
  MongoDB: (props: { className?: string }) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <path d="M50 8C50 8 30 35 30 58C30 75 42 88 50 92C58 88 70 75 70 58C70 35 50 8 50 8Z" fill="#47A248"/>
      <path d="M50 8V92C51 92 70 75 70 58C70 35 50 8 50 8Z" fill="#499D4A"/>
    </svg>
  ),
  Supabase: (props: { className?: string }) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <path d="M56 8L12 58H46L36 92L88 42H52L56 8Z" fill="#3ECF8E"/>
    </svg>
  ),
  Vercel: (props: { className?: string }) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <path d="M50 15L90 85H10L50 15Z" fill="#FFFFFF"/>
    </svg>
  ),
  Proxmox: (props: { className?: string }) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="20" fill="#E57000"/>
      <path d="M25 25H75V42H43V58H75V75H25V25Z" fill="#FFFFFF"/>
    </svg>
  ),
  Samba4: (props: { className?: string }) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="20" fill="#C7254E"/>
      <text x="50%" y="62%" textAnchor="middle" fill="#FFFFFF" fontSize="32" fontWeight="bold" fontFamily="monospace">AD</text>
    </svg>
  )
};

// Github Icon SVG
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

interface Project {
  id: string;
  nodeId: string;
  title: string;
  category: "next" | "fullstack" | "infra" | "tools";
  status: "STABLE_PRD" | "LIVE_ACCESS" | "ENTERPRISE_CORE" | "INFRA_CLUSTER";
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  isPrivateGithub?: boolean;
  productionUrl?: string;
  demoUrl?: string;
  images?: { src: string; caption: string }[];
}

const projectsData: Project[] = [
  {
    id: "mision-ribas",
    nodeId: "ID_NODE: 0x0",
    title: "/ Misión Ribas: Active Directory & Sistema Asistencia",
    category: "infra",
    status: "INFRA_CLUSTER",
    description:
      "Infraestructura de servidores en Proxmox VE con Active Directory (Samba4) para autenticación centralizada y dominio de red. Integrado con el Sistema Web de Asistencia y Gestión de Empleados de Misión Ribas.",
    highlights: [
      "Virtualización Proxmox VE con Samba4 Active Directory Domain Controller",
      "Control de usuarios, directivas de grupo GPO y permisos de red institucional",
      "Sistema de gestión y control de asistencia de empleados de Misión Ribas"
    ],
    tags: ["Proxmox VE", "Samba4 AD", "Active Directory", "Linux Server", "Sistema Asistencia", "Redes"],
    isPrivateGithub: true,
    images: [
      { src: "/assets/mision-ribas/usuarios_active_directory.jpg", caption: "Panel Active Directory RSAT (Samba4 Domain Controller en Proxmox VE)" },
      { src: "/assets/mision-ribas/sistema_asistencia_ribas.jpg", caption: "Sistema Web de Asistencia y Gestión de Empleados Misión Ribas" }
    ]
  },
  {
    id: "detector-voz",
    nodeId: "ID_NODE: 0x1",
    title: "/ SpeechToText AI System",
    category: "next",
    status: "STABLE_PRD",
    description:
      "High-speed real-time audio transcription infrastructure built on cloud inference APIs. Engineered for minimal latency and direct web audio stream processing.",
    highlights: [
      "Production deployment running live on Vercel infrastructure",
      "Clean modular architecture using Next.js 16 & TypeScript",
      "Direct WebSocket / REST cloud audio inference processing"
    ],
    tags: ["Next.js", "TypeScript", "AI Cloud Inference", "Web Audio API", "Vercel"],
    githubUrl: "https://github.com/ragnarsson03/app-detector-de-voz",
    productionUrl: "https://app-detector-de-voz.vercel.app/"
  },
  {
    id: "mtg-budget",
    nodeId: "ID_NODE: 0x2",
    title: "/ MTG Budget SaaS Generator",
    category: "next",
    status: "LIVE_ACCESS",
    description:
      "Commercial automation suite for client financial estimates and digital invoice rendering. Features client-side state calculation and dynamic PDF compilation.",
    highlights: [
      "Live commercial SaaS engine with instant PDF generation",
      "Strict type safety using React and TypeScript",
      "Automatic tax subtotal computation and export handling"
    ],
    tags: ["React", "TypeScript", "PDF Engine", "Financial Logic", "Vercel"],
    githubUrl: "https://github.com/ragnarsson03/Presupuesto-mtg",
    productionUrl: "https://presupuesto-mtg.vercel.app/"
  },
  {
    id: "dolar-bcv",
    nodeId: "ID_NODE: 0x3",
    title: "/ BCV Currency Exchange Monitor",
    category: "tools",
    status: "STABLE_PRD",
    description:
      "Ultra-fast local currency monitoring application consuming real-time official exchange rates from the Central Bank of Venezuela.",
    highlights: [
      "Optimized with Vite for instant build asset loading and zero latency",
      "Real-time REST API consumption with reactive calculation state",
      "Deployed and cached on Vercel edge networks"
    ],
    tags: ["Vite", "React", "REST API", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/ragnarsson03/dolar-bcv-vercel",
    productionUrl: "https://dolar-bcv-vercel.vercel.app/"
  },
  {
    id: "san-agustin",
    nodeId: "ID_NODE: 0x4",
    title: "/ San Agustín Digital Ecosystem",
    category: "fullstack",
    status: "ENTERPRISE_CORE",
    description:
      "Centralized microservices platform connecting administration, mobile Flutter clients, and web portals via Node.js/Express, Supabase, and MongoDB Atlas.",
    highlights: [
      "Automated CI/CD continuous deployment pipeline setup on Vercel",
      "Modular Node.js/Express backend paired with Supabase & MongoDB Atlas",
      "Cross-platform architecture integrating Flutter mobile client"
    ],
    tags: ["Node.js", "Express", "MongoDB", "Supabase", "Flutter", "Vercel", "CI/CD"],
    githubUrl: "https://github.com/ragnarsson03/SanAgustin-Ecosistema-Digital",
    isPrivateGithub: true,
    demoUrl: "https://sanagustinbackend-one.vercel.app",
    images: [
      { src: "/assets/san_agustin.jpg", caption: "Vista Principal / Inicio del Ecosistema San Agustín" },
      { src: "/assets/san_agustin2.png", caption: "Panel Administrativo / Gestión de Usuarios" },
      { src: "/assets/san_agustin3.jpg", caption: "Módulo de Eventos & Actividades Digitales" },
      { src: "/assets/san_agustin4.jpg", caption: "Interfaz Móvil / Flutter App Ecosistema" }
    ]
  },
  {
    id: "sis-uneti",
    nodeId: "ID_NODE: 0x5",
    title: "/ SIS-UNETI University Engine",
    category: "fullstack",
    status: "ENTERPRISE_CORE",
    description:
      "University administrative digital core with microservices architecture and Moodle platform integration. Spearheaded as Team Lead of Cell 01.",
    highlights: [
      "Technical Team Lead overseeing security architecture & PR evaluations",
      "Repository conventions and strict Git-flow management for dev cell",
      "Transversal data synchronization with institutional Moodle platform"
    ],
    tags: ["Team Lead", "Microservices", "Moodle API", "TypeScript", "Security"],
    githubUrl: "https://github.com/ragnarsson03/SIS-UNETI",
    images: [
      { src: "/assets/sis-uneti.png", caption: "Interfaz y Módulos del Sistema Universitario SIS-UNETI (Célula 01)" }
    ]
  }
];

// Complete Skill Domains Matrix
const techSkillsMatrix = [
  {
    category: "FRONTEND",
    color: "border-blue-500/30 text-blue-400 bg-blue-500/5",
    items: [
      { name: "React", logo: <TechLogos.React className="w-5 h-5" /> },
      { name: "Next.js 16", logo: <TechLogos.Nextjs className="w-5 h-5" /> },
      { name: "TypeScript", logo: <TechLogos.TypeScript className="w-5 h-5" /> },
      { name: "Tailwind CSS", logo: <TechLogos.Tailwind className="w-5 h-5" /> },
      { name: "Vite", logo: <TechLogos.Vite className="w-5 h-5" /> }
    ]
  },
  {
    category: "BACKEND",
    color: "border-purple-500/30 text-purple-400 bg-purple-500/5",
    items: [
      { name: "Node.js", logo: <TechLogos.Nodejs className="w-5 h-5" /> },
      { name: "Express.js", logo: <TechLogos.Express className="w-5 h-5" /> },
      { name: "REST APIs", logo: <Server className="w-5 h-5 text-purple-400" /> },
      { name: "Microservices", logo: <Layers className="w-5 h-5 text-purple-400" /> }
    ]
  },
  {
    category: "DATABASES",
    color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
    items: [
      { name: "MongoDB Atlas", logo: <TechLogos.MongoDB className="w-5 h-5" /> },
      { name: "Supabase (Postgres)", logo: <TechLogos.Supabase className="w-5 h-5" /> }
    ]
  },
  {
    category: "DEVOPS",
    color: "border-amber-500/30 text-amber-400 bg-amber-500/5",
    items: [
      { name: "Vercel", logo: <TechLogos.Vercel className="w-5 h-5" /> },
      { name: "CI/CD Pipelines", logo: <Workflow className="w-5 h-5 text-amber-400" /> },
      { name: "Git-Flow", logo: <GitBranch className="w-5 h-5 text-amber-400" /> }
    ]
  },
  {
    category: "LEADERSHIP",
    color: "border-pink-500/30 text-pink-400 bg-pink-500/5",
    items: [
      { name: "Team Lead (Célula 01)", logo: <UserCheck className="w-5 h-5 text-pink-400" /> },
      { name: "PR Reviews & Quality", logo: <ShieldCheck className="w-5 h-5 text-pink-400" /> },
      { name: "System Architecture", logo: <Cpu className="w-5 h-5 text-pink-400" /> }
    ]
  },
  {
    category: "HARDWARE & INFRASTRUCTURE",
    color: "border-orange-500/30 text-orange-400 bg-orange-500/5",
    items: [
      { name: "Proxmox VE Cluster", logo: <TechLogos.Proxmox className="w-5 h-5" /> },
      { name: "Samba4 Active Directory", logo: <TechLogos.Samba4 className="w-5 h-5" /> },
      { name: "Redes & Dominio RSAT", logo: <Network className="w-5 h-5 text-orange-400" /> },
      { name: "Servidores Linux & Win", logo: <HardDrive className="w-5 h-5 text-orange-400" /> },
      { name: "Soporte Técnico Especializado", logo: <Settings className="w-5 h-5 text-orange-400" /> }
    ]
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"all" | "next" | "fullstack" | "infra" | "tools">("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-200 overflow-hidden font-mono selection:bg-blue-600 selection:text-white">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]"></div>
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]"></div>
      <div className="pointer-events-none absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px]"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none"></div>

      {/* IDE Top Navigation Bar */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 glass-cyber border-b border-slate-800/80 px-4 sm:px-8 py-3"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-blue-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>F_DURÁN_v2.6</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>SYSTEM_ACTIVE // STABLE_ENV</span>
            </div>
          </div>

          {/* Code IDE Tabs Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-xs font-mono">
            <a
              href="#hero"
              className="px-3 py-1.5 rounded hover:bg-slate-900 text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <FileCode2 className="w-3.5 h-3.5 text-blue-400" />
              <span>startup.sh</span>
            </a>
            <a
              href="#habilidades"
              className="px-3 py-1.5 rounded hover:bg-slate-900 text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <FileCode2 className="w-3.5 h-3.5 text-amber-400" />
              <span>stack.json</span>
            </a>
            <a
              href="#proyectos"
              className="px-3 py-1.5 rounded hover:bg-slate-900 text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <FileCode2 className="w-3.5 h-3.5 text-purple-400" />
              <span>projects.ts</span>
            </a>
            <a
              href="#experiencia"
              className="px-3 py-1.5 rounded hover:bg-slate-900 text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <FileCode2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>experience.log</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ragnarsson03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono transition-all border border-slate-700/80"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-24 relative z-10 space-y-24">
        
        {/* Terminal Cyber Hero Section */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Command className="w-3.5 h-3.5" />
              <span>ROOT_ORCHESTRATOR // FULL_STACK_ENGINEER</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">
                // EXECUTIVE_SUMMARY
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-tight">
                Frederick Durán
              </h2>
              <p className="text-blue-400 text-sm font-mono">
                Software Architect & Team Lead Célula 01 @ SIS-UNETI
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
              Engineering high-scale digital solutions with structural integrity and clean architectural patterns. Specialized in <strong className="text-white">React</strong>, <strong className="text-white">Next.js</strong>, <strong className="text-white">TypeScript</strong>, <strong className="text-white">Node.js</strong> and production cloud deployments.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans max-w-2xl">
              Proven technical leadership managing pull requests, code standards, microservices and server infrastructure including <strong className="text-slate-200">Proxmox VE + Samba4 Active Directory</strong> at <strong className="text-slate-200">Misión Ribas</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-lg shadow-blue-600/25 transition-all"
              >
                <Code2 className="w-4 h-4" />
                <span>EXPLORE_PROJECTS()</span>
              </a>

              <a
                href="https://app-detector-de-voz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-400 font-mono text-xs font-semibold border border-emerald-500/30 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>LIVE_DEMO_AI()</span>
              </a>
            </div>

            {/* Micro Tech Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">Next.js 16</span>
              <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">TypeScript</span>
              <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">React</span>
              <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">Node.js</span>
              <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-orange-400 font-bold">Proxmox VE</span>
              <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-red-400 font-bold">Samba4 AD</span>
            </div>
          </motion.div>

          {/* Terminal Console Status Window */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="glass-cyber-card rounded-xl p-5 border border-slate-800 space-y-5 font-mono text-xs shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <span className="text-[10px] text-slate-500">kernel_status.log</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-blue-400 font-bold">// ROLE</span>
                    <span className="text-slate-500">ACTIVE</span>
                  </div>
                  <p className="text-slate-200 text-xs font-sans font-semibold">Team Lead Célula 01</p>
                  <p className="text-[11px] text-slate-400">SIS-UNETI PR Reviews & Security</p>
                </div>

                <div className="p-3 rounded bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-purple-400 font-bold">// DEPLOYMENTS</span>
                    <span className="text-slate-500">VERCEL</span>
                  </div>
                  <p className="text-slate-200 text-xs font-sans font-semibold">San Agustín Cloud Ecosystem</p>
                  <p className="text-[11px] text-slate-400">CI/CD Pipeline & Express Backend</p>
                </div>

                <div className="p-3 rounded bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-orange-400 font-bold">// INFRASTRUCTURE</span>
                    <span className="text-slate-500">PROXMOX</span>
                  </div>
                  <p className="text-slate-200 text-xs font-sans font-semibold">Misión Ribas & Active Directory</p>
                  <p className="text-[11px] text-slate-400">Samba4 Domain & Sistema Asistencia</p>
                </div>
              </div>

              <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span>EXEC_TIME: 14ms</span>
                <span className="text-emerald-400 font-bold">100% VERIFIED</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Complete Tech Stack Matrix with Logos */}
        <section id="habilidades" className="scroll-mt-24 space-y-8">
          <div>
            <span className="text-xs font-mono text-amber-400 block">// STACK_KNOWLEDGE_MATRIX</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-sans">
              Tecnologías y Dominios Principales
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-sans mt-1">
              Desglose detallado del stack tecnológico con logos oficiales y áreas de dominio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {techSkillsMatrix.map((domain, idx) => (
              <motion.div
                key={domain.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="glass-cyber-card rounded-xl p-5 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${domain.color}`}>
                      // {domain.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">DOM_NODE_{idx + 1}</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 pt-4">
                    {domain.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/90 hover:border-slate-700 transition-colors"
                      >
                        <div className="p-1.5 rounded bg-slate-900 shrink-0">
                          {item.logo}
                        </div>
                        <span className="text-xs font-semibold text-slate-200 font-mono">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Principles Banner */}
        <section className="glass-cyber rounded-xl p-6 sm:p-8 border border-slate-800 text-center sm:text-left space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white font-sans flex items-center justify-center sm:justify-start gap-2">
                <Workflow className="w-5 h-5 text-blue-400" />
                <span>"Writing code is easy. Building scalable systems is the craft."</span>
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Construcción disciplinada guiada por flujos de Git estructurados, revisión rigurosa de tickets y documentación técnica.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono shrink-0">
              <div className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-blue-400">
                Ticket-Driven
              </div>
              <div className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-emerald-400">
                PR-Reviewed
              </div>
            </div>
          </div>
        </section>

        {/* Projects Node Collection */}
        <section id="proyectos" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-blue-400 block">// TECHNICAL_CURATION</span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-sans">
                Production Systems & Repositories
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-sans mt-1">
                Haz clic en las capturas para inspeccionar los módulos de cada plataforma.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-950 border border-slate-800 self-start text-xs font-mono">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === "all"
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ALL_NODES (6)
              </button>
              <button
                onClick={() => setActiveTab("infra")}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === "infra"
                    ? "bg-orange-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                INFRA_PROXMOX
              </button>
              <button
                onClick={() => setActiveTab("next")}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === "next"
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                NEXT_FE
              </button>
              <button
                onClick={() => setActiveTab("fullstack")}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === "fullstack"
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                FULLSTACK_BE
              </button>
              <button
                onClick={() => setActiveTab("tools")}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === "tools"
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                TOOLS_VITE
              </button>
            </div>
          </div>

          {/* Cyber Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-cyber-card rounded-xl p-6 border border-slate-800 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500">{project.nodeId}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                      project.status === "INFRA_CLUSTER"
                        ? "bg-orange-500/10 text-orange-400 border-orange-500/20"
                        : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white font-mono hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-300 text-xs font-sans mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Screenshots Lightbox Gallery */}
                  {project.images && project.images.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        <ImageIcon className="w-3 h-3 text-blue-400" /> MODULE_SCREENSHOTS:
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {project.images.map((img, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedImage(img)}
                            className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-800 aspect-video bg-slate-950"
                          >
                            <img
                              src={img.src}
                              alt={img.caption}
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] font-mono text-white text-center p-1">
                              INSPECT()
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      SPECIFICATIONS:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300 font-sans">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    {project.isPrivateGithub ? (
                      <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-slate-950 text-amber-400 border border-amber-800/40 text-[11px]">
                        <Lock className="w-3.5 h-3.5" /> PRIVATE_REPO / INFRA
                      </span>
                    ) : (
                      project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-slate-900 hover:bg-slate-800 text-white transition-all border border-slate-700/80"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>SOURCE_CODE</span>
                        </a>
                      )
                    )}

                    {project.productionUrl && (
                      <a
                        href={project.productionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-md shadow-emerald-600/20"
                        title="Ver App en Producción"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>LIVE</span>
                      </a>
                    )}

                    {project.demoUrl && !project.productionUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 transition-all"
                        title="Ver Backend Live API"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>API</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sequential Experience Log Section */}
        <section id="experiencia" className="scroll-mt-24 space-y-8">
          <div>
            <span className="text-xs font-mono text-emerald-400 block">// CHRONOLOGICAL_OPERATIONS</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-sans">
              Engineering Chronicles & Experience Log
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-cyber-card rounded-xl p-6 border border-slate-800 space-y-4"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-800">
                <span>[01] HARDWARE_MAINTENANCE</span>
                <span className="text-blue-400">SUPPORT</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-sans">EFPP</h4>
                <p className="text-xs text-blue-400 font-mono">Escuela de Fortalecimiento del Poder Popular</p>
              </div>
              <div className="space-y-2 text-xs text-slate-300 font-sans">
                <p className="font-semibold text-slate-200">Analista y Soporte a Computadoras</p>
                <p className="text-slate-400">Diagnóstico, mantenimiento preventivo y correctivo de hardware, configuración de redes locales y soporte integral a usuarios.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="glass-cyber-card rounded-xl p-6 border border-slate-800 space-y-4"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-800">
                <span>[02] NETWORKING_PASANTÍA</span>
                <span className="text-emerald-400">2021 - 2023</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-sans">CANTV</h4>
                <p className="text-xs text-emerald-400 font-mono">Pasantías Primer Año</p>
              </div>
              <div className="space-y-2 text-xs text-slate-300 font-sans">
                <p className="font-semibold text-slate-200">Proyecto 2024: <span className="text-emerald-400 font-mono font-bold">PROYECTO_APROBADO</span></p>
                <p className="text-slate-400">Participación en proyectos técnicos de infraestructura de telecomunicaciones y redes de datos.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass-cyber-card rounded-xl p-6 border border-slate-800 space-y-4"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-800">
                <span>[03] INSTITUTIONAL_SOFTWARE</span>
                <span className="text-purple-400">2024 - 2025</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-sans">Sindicatura Municipal</h4>
                <p className="text-xs text-purple-400 font-mono">Pasantías Segundo Año</p>
              </div>
              <div className="space-y-2 text-xs text-slate-300 font-sans">
                <p className="font-semibold text-slate-200">Proyecto 2025: <span className="text-emerald-400 font-mono font-bold">PROYECTO_APROBADO</span></p>
                <p className="text-slate-400">Construcción e implementación de sistemas de software institucional y gestión administrativa.</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="glass-cyber-card rounded-xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <UserCheck className="w-5 h-5 text-blue-400" />
                <h4 className="text-base font-bold text-white font-sans">Team Lead Célula 01 (SIS-UNETI)</h4>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Supervisión del diseño de arquitectura de seguridad para la plataforma universitaria SIS-UNETI. Definición de estándares de código, revisión estricta de PRs y liderazgo del equipo técnico.
              </p>
            </div>

            <div className="glass-cyber-card rounded-xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TechLogos.Proxmox className="w-6 h-6" />
                  <h4 className="text-base font-bold text-white font-sans">Misión Ribas (Infraestructura & Active Directory)</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20 font-bold">PROXMOX VE</span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Despliegue de cluster en <strong>Proxmox VE</strong> con controlador de dominio <strong>Samba4 Active Directory</strong>, administración de usuarios RSAT, directivas de red y el <strong>Sistema Web de Asistencia y Gestión de Empleados</strong>.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Screenshot Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-cyber rounded-xl p-4 border border-slate-700 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="w-full max-h-[75vh] object-contain rounded-lg"
              />

              <div className="pt-4 text-center">
                <p className="text-xs font-mono text-slate-300">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terminal Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/90 py-8 text-center text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 F_DURÁN // SECURED (ragnarsson03). Next.js & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ragnarsson03" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GITHUB_PROFILE
            </a>
            <span>•</span>
            <a href="https://app-detector-de-voz.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LIVE_SPEECH_AI
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

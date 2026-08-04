"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Server,
  Layers,
  Sparkles,
  Check,
  Copy,
  ShieldCheck,
  ChevronRight,
  Globe,
  Radio,
  UserCheck,
  Lock,
  Download,
  Image as ImageIcon,
  X,
  Award,
  Building2,
  GraduationCap
} from "lucide-react";

// Inline Github Icon SVG
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
  title: string;
  category: "next" | "fullstack" | "tools";
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  isPrivateGithub?: boolean;
  demoUrl?: string;
  apkUrl?: string;
  images?: { src: string; caption: string }[];
  credentials?: {
    user: string;
    pass: string;
    note: string;
  };
  badge?: string;
}

const projectsData: Project[] = [
  {
    id: "san-agustin",
    title: "Ecosistema Digital San Agustín",
    category: "fullstack",
    badge: "Proyecto Destacado",
    description:
      "Plataforma digital centralizada e innovadora con arquitectura de microservicios, backend en Node.js/Express, Supabase y MongoDB Atlas. Aplicación móvil en Flutter y Frontend web.",
    highlights: [
      "Gestión de flujos de Integración Continua (CI/CD) y despliegue continuo en Vercel",
      "Backend en producción conectado a Supabase y MongoDB Atlas",
      "Demostración técnica en vivo mediante capturas y credenciales de prueba"
    ],
    tags: ["Node.js", "Express", "MongoDB", "Supabase", "Flutter", "Vercel", "CI/CD"],
    githubUrl: "https://github.com/ragnarsson03/SanAgustin-Ecosistema-Digital",
    isPrivateGithub: true,
    demoUrl: "https://sanagustinbackend-one.vercel.app",
    apkUrl: "https://mhkttisvybxwgkxwxypj.supabase.co/storage/v1/object/public/apk/SanAgustin.apk",
    images: [
      { src: "/assets/san_agustin.jpg", caption: "Vista Principal / Inicio del Ecosistema San Agustín" },
      { src: "/assets/san_agustin2.png", caption: "Panel Administrativo / Gestión de Usuarios" },
      { src: "/assets/san_agustin3.jpg", caption: "Módulo de Eventos & Actividades Digitales" },
      { src: "/assets/san_agustin4.jpg", caption: "Interfaz Móvil / Flutter App Ecosistema" }
    ],
    credentials: {
      user: "admin@sanagustin.com (o sanagustin@admin.com)",
      pass: "admin123",
      note: "Acceso con rol de Administrador en el backend de producción"
    }
  },
  {
    id: "detector-voz",
    title: "Detector de Voz a Texto",
    category: "next",
    badge: "Desplegado en Producción",
    description:
      "Aplicación web de alta velocidad para transcripción de audio en tiempo real basada en modelos de inferencia en la nube.",
    highlights: [
      "Desplegado y funcionando en Vercel: https://app-detector-de-voz.vercel.app/",
      "Construido con Next.js y TypeScript con arquitectura limpia",
      "Conexión directa con APIs de inferencia en la nube para transcripción veloz"
    ],
    tags: ["Next.js", "TypeScript", "AI Cloud Inference", "Web Audio API", "Vercel"],
    githubUrl: "https://github.com/ragnarsson03/app-detector-de-voz",
    demoUrl: "https://app-detector-de-voz.vercel.app/"
  },
  {
    id: "sis-uneti",
    title: "Sistema SIS-UNETI",
    category: "fullstack",
    badge: "Liderazgo Técnico",
    description:
      "Plataforma digital universitaria centralizada con arquitectura de microservicios e integración transversal con Moodle.",
    highlights: [
      "Rol: Team Lead de la Célula 01 al mando de la arquitectura del proyecto",
      "Supervisión del esquema de seguridad y establecimiento de convenciones de Git",
      "Evaluación y revisión periódica de Pull Requests (PRs)"
    ],
    tags: ["Team Lead", "Microservicios", "Moodle API", "TypeScript", "Seguridad"],
    githubUrl: "https://github.com/ragnarsson03/SIS-UNETI"
  },
  {
    id: "mtg-budget",
    title: "MTG Budget Generator",
    category: "next",
    badge: "SaaS & PDFs",
    description:
      "Aplicación web para automatización de presupuestos digitales para clientes textiles y comerciales.",
    highlights: [
      "Cálculo automático de subtotales, margen de ganancia e impuestos",
      "Generación de reportes y presupuestos en PDF descargables",
      "Desplegado en Vercel con excelente experiencia de usuario"
    ],
    tags: ["React", "Next.js", "PDF Generator", "Lógica Financiera", "Vercel"],
    githubUrl: "https://github.com/ragnarsson03/mtg_textiless"
  },
  {
    id: "dolar-bcv",
    title: "App Dólar BCV",
    category: "tools",
    badge: "Vite + Alta Velocidad",
    description:
      "Herramienta web ágil construida con Vite para monitoreo y cálculo basado en la tasa de cambio oficial del Banco Central de Venezuela.",
    highlights: [
      "Optimizado con Vite para carga instantánea en cualquier dispositivo",
      "Consumo directo de la API oficial del Banco Central de Venezuela",
      "Desplegado públicamente en Vercel"
    ],
    tags: ["Vite", "React", "REST API", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/ragnarsson03/dolar-bcv-vercel"
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"all" | "next" | "fullstack" | "tools">("all");
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-200 overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]"></div>
      <div className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]"></div>
      <div className="pointer-events-none absolute bottom-10 left-1/3 w-96 h-96 bg-emerald-600/15 rounded-full blur-[128px]"></div>

      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 glass-card border-b border-slate-800/80 px-4 sm:px-8 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
              FD
            </div>
            <div>
              <h1 className="font-bold text-white tracking-tight text-base sm:text-lg">
                Frederick Durán
              </h1>
              <p className="text-xs text-slate-400 font-mono">
                ragnarsson03 • Fullstack Developer
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#proyectos" className="hover:text-blue-400 transition-colors">
              Proyectos & Pruebas
            </a>
            <a href="#experiencia" className="hover:text-blue-400 transition-colors">
              Trayectoria & Experiencia
            </a>
            <a href="#san-agustin-credenciales" className="hover:text-blue-400 transition-colors">
              San Agustín Credentials
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Disponible para Proyectos
            </span>
            <a
              href="https://github.com/ragnarsson03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white text-sm font-medium transition-all border border-slate-700/80 shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-24 relative z-10 space-y-20">
        
        {/* Hero Section */}
        <section className="text-center sm:text-left grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Desarrollador React, Next.js, TypeScript & Node.js
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hola, soy <span className="glow-gradient">Frederick Durán</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Desarrollador Fullstack con liderazgo comprobado como <strong className="text-white">Team Lead de la Célula 01</strong> en el proyecto universitario <strong className="text-white">SIS-UNETI</strong> y arquitecto del <strong className="text-white">Ecosistema Digital San Agustín</strong>. Dominio integral desde el código hasta la infraestructura y servidores.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 justify-center sm:justify-start">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/25 transition-all hover:scale-[1.02]"
              >
                <Code2 className="w-4 h-4" />
                Explorar Proyectos & Capturas
              </a>

              <a
                href="https://app-detector-de-voz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-semibold text-sm border border-emerald-500/30 transition-all"
              >
                <Globe className="w-4 h-4" />
                Probar App Detector de Voz en Vivo
              </a>
            </div>

            {/* Micro Tech Pills */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Next.js 16</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">TypeScript</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">React</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Vite</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Node.js</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">MongoDB</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Supabase</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Vercel</span>
            </div>
          </motion.div>

          {/* Hero Card Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Resumen de Perfil
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping"></span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <UserCheck className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Team Lead Célula 01</h4>
                    <p className="text-xs text-slate-400">SIS-UNETI • Arquitectura & PRs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Server className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">CI/CD & Despliegues</h4>
                    <p className="text-xs text-slate-400">Ecosistema San Agustín en Vercel</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Radio className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Infraestructura & Soporte</h4>
                    <p className="text-xs text-slate-400">Misión Ribas • EFPP • CANTV</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* San Agustín Live Credentials Inspector */}
        <section id="san-agustin-credenciales" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-blue-500/20 bg-slate-900/60"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Proyecto San Agustín: Credenciales & Acceso Demo
                  </h3>
                  <p className="text-sm text-slate-400">
                    Acceso de demostración técnica para la API backend en Vercel.
                  </p>
                </div>
              </div>

              <a
                href="https://sanagustinbackend-one.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-sm font-semibold border border-blue-500/30 transition-all"
              >
                <Globe className="w-4 h-4" />
                Backend Live API
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs text-slate-400 font-mono uppercase">Usuario Admin Demo</span>
                <div className="flex items-center justify-between text-sm font-semibold text-white">
                  <span>admin@sanagustin.com</span>
                  <button
                    onClick={() => copyToClipboard("admin@sanagustin.com", "user_demo")}
                    className="text-slate-400 hover:text-blue-400"
                    title="Copiar usuario"
                  >
                    {copiedIndex === "user_demo" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-slate-500">(O sanagustin@admin.com en módulo dev)</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs text-slate-400 font-mono uppercase">Contraseña Demo</span>
                <div className="flex items-center justify-between text-sm font-semibold text-white">
                  <span>admin123</span>
                  <button
                    onClick={() => copyToClipboard("admin123", "pass_demo")}
                    className="text-slate-400 hover:text-blue-400"
                    title="Copiar clave"
                  >
                    {copiedIndex === "pass_demo" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-slate-500">Hash de seguridad bcrypt</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs text-slate-400 font-mono uppercase">Admin Secret Key</span>
                <div className="flex items-center justify-between text-sm font-semibold text-white">
                  <span>SanAgustinSecure2026</span>
                  <button
                    onClick={() => copyToClipboard("SanAgustinSecure2026", "secret_demo")}
                    className="text-slate-400 hover:text-blue-400"
                    title="Copiar secret key"
                  >
                    {copiedIndex === "secret_demo" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-slate-500">Permiso para gestión total del sistema</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
                <Layers className="w-3.5 h-3.5" /> Galería de Proyectos & Pruebas
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Proyectos, Capturas y Demostraciones
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Haz clic en las capturas para ampliar los detalles de cada sistema.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 self-start">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "all"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Todos (5)
              </button>
              <button
                onClick={() => setActiveTab("next")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "next"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Next.js / Frontend
              </button>
              <button
                onClick={() => setActiveTab("fullstack")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "fullstack"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Fullstack / Backend
              </button>
              <button
                onClick={() => setActiveTab("tools")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "tools"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Herramientas & Vite
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/90 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {project.badge}
                    </span>
                    {project.isPrivateGithub ? (
                      <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20" title="Repositorio Privado">
                        <Lock className="w-3.5 h-3.5" /> Privado
                      </span>
                    ) : (
                      project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors"
                          title="Ver en GitHub"
                        >
                          <GithubIcon className="w-5 h-5" />
                        </a>
                      )
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Screenshots Showcase Grid if available */}
                  {project.images && project.images.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        <ImageIcon className="w-3.5 h-3.5 text-blue-400" /> Pruebas & Capturas:
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {project.images.map((img, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedImage(img)}
                            className="relative group cursor-pointer overflow-hidden rounded-xl border border-slate-800 aspect-video bg-slate-950"
                          >
                            <img
                              src={img.src}
                              alt={img.caption}
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] text-white font-medium text-center p-1">
                              Ver Completo
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Aspectos Clave:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.credentials && (
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] space-y-1 font-mono text-slate-300">
                      <p className="text-blue-400 font-bold">🔐 Demo Login:</p>
                      <p>User: {project.credentials.user}</p>
                      <p>Pass: {project.credentials.pass}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.isPrivateGithub ? (
                      <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 text-amber-300 text-xs font-semibold border border-amber-800/40">
                        <Lock className="w-3.5 h-3.5" /> Frontend Privado (Flutter)
                      </span>
                    ) : (
                      project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all border border-slate-700/80"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          Código Repo
                        </a>
                      )
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-xs font-semibold border border-blue-500/30 transition-all"
                        title="Ver en Vivo / API"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        Demo API
                      </a>
                    )}

                    {project.apkUrl && (
                      <a
                        href={project.apkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-xs font-semibold border border-emerald-500/30 transition-all"
                        title="Descargar APK desde Supabase Storage"
                      >
                        <Download className="w-3.5 h-3.5" />
                        APK Móvil
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Timeline Section */}
        <section id="experiencia" className="scroll-mt-24 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
              <GraduationCap className="w-3.5 h-3.5" /> Trayectoria Técnica & Laboral
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Experiencia, Pasantías & Liderazgo
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">EFPP</h4>
                  <p className="text-xs text-blue-400">Escuela de Fortalecimiento del Poder Popular</p>
                </div>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <p className="font-semibold text-slate-200">Analista y Soporte a Computadoras</p>
                <p className="text-slate-400">Diagnóstico, mantenimiento preventivo y correctivo de hardware, configuración de redes locales y soporte a usuarios.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">2021 - 2023 | CANTV</h4>
                  <p className="text-xs text-emerald-400">Pasantías Primer Año</p>
                </div>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <p className="font-semibold text-slate-200">Proyecto 2024: <span className="text-emerald-400 font-bold">APROBADO</span></p>
                <p className="text-slate-400">Desarrollo de proyectos técnicos en infraestructuras de comunicación y redes de datos a gran escala.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">2024 - 2025 | Sindicatura</h4>
                  <p className="text-xs text-purple-400">Sindicatura Municipal de Caracas</p>
                </div>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <p className="font-semibold text-slate-200">Pasantías Segundo Año • Proyecto 2025: <span className="text-emerald-400 font-bold">APROBADO</span></p>
                <p className="text-slate-400">Construcción e implementación de sistemas de software institucional y gestión administrativa.</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <UserCheck className="w-5 h-5 text-blue-400" />
                <h4 className="text-base font-bold text-white">Team Lead Célula 01 (SIS-UNETI)</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Supervisión del diseño de arquitectura de seguridad para la plataforma universitaria SIS-UNETI. Definición de estándares de código, revisión estricta de PRs y liderazgo del equipo técnico.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <Server className="w-5 h-5 text-purple-400" />
                <h4 className="text-base font-bold text-white">Misión Ribas (Infraestructura y Redes)</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Soporte técnico integral, configuración de servidores y mantenimiento de redes informáticas. Visión completa de desarrollo desde el código hasta la infraestructura.
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
              className="relative max-w-4xl w-full glass-card rounded-2xl p-4 border border-slate-700 overflow-hidden"
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
                className="w-full max-h-[75vh] object-contain rounded-xl"
              />

              <div className="pt-4 text-center">
                <p className="text-sm font-semibold text-white">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Frederick Durán (ragnarsson03). Portafolio optimizado en Next.js & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ragnarsson03" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub Profile
            </a>
            <span>•</span>
            <a href="https://app-detector-de-voz.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Detector de Voz Live
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

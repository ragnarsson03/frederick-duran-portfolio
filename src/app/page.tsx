"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";
import { projectsList, experienceList, skillCategoriesData } from "@/content/translations";
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
  Settings
} from "lucide-react";

// Inline Technology SVGs
const TechLogos: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  React: (props) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="10" fill="#61DAFB" />
      <ellipse cx="50" cy="50" rx="4.5" ry="11" transform="rotate(30 50 50)" stroke="#61DAFB" strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="4.5" ry="11" transform="rotate(90 50 50)" stroke="#61DAFB" strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="4.5" ry="11" transform="rotate(150 50 50)" stroke="#61DAFB" strokeWidth="1" />
    </svg>
  ),
  Nextjs: (props) => (
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
  TypeScript: (props) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="20" fill="#3178C6"/>
      <path d="M57 65.5C57 73 50.5 77 41.5 77C33.5 77 27 73 24 67.5L32.5 62C34.5 65.5 38 67.5 41.5 67.5C45 67.5 47 66 47 63.5C47 61.5 45.5 60.5 41.5 59.5L37 58.5C28.5 56.5 24.5 52 24.5 44C24.5 35.5 32 31.5 41 31.5C48 31.5 53.5 34.5 56.5 40L48.5 45.5C46.5 42 44 40.5 41 40.5C37.5 40.5 35 42 35 44C35 45.5 36.5 46.5 40.5 47.5L44.5 48.5C53.5 50.5 57 55.5 57 65.5ZM92 41.5H77.5V76.5H67.5V41.5H53V32.5H92V41.5Z" fill="white"/>
    </svg>
  ),
  Tailwind: (props) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <path d="M26 34C31 24 40 21 47 26C51 29 54 33 57 37C63 43 69 47 77 47C87 47 93 39 96 34C91 44 82 47 75 42C71 39 68 35 65 31C59 25 53 21 45 21C35 21 29 29 26 34ZM6 59C11 49 20 46 27 51C31 54 34 58 37 62C43 68 49 72 57 72C67 72 73 64 76 59C71 69 62 72 55 67C51 64 48 60 45 56C39 50 33 46 25 46C15 46 9 54 6 59Z" fill="#38BDF8"/>
    </svg>
  ),
  Vite: (props) => (
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
  Nodejs: (props) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <path d="M50 10L85 30V70L50 90L15 70V30L50 10Z" fill="#339933"/>
      <path d="M50 25L72 38V62L50 75L28 62V38L50 25Z" fill="#215732"/>
      <circle cx="50" cy="50" r="10" fill="#FFFFFF"/>
    </svg>
  ),
  Express: (props) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="20" fill="#1e293b"/>
      <text x="50%" y="60%" textAnchor="middle" fill="#ffffff" fontSize="38" fontWeight="bold" fontFamily="monospace">ex</text>
    </svg>
  ),
  MongoDB: (props) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <path d="M50 8C50 8 30 35 30 58C30 75 42 88 50 92C58 88 70 75 70 58C70 35 50 8 50 8Z" fill="#47A248"/>
      <path d="M50 8V92C51 92 70 75 70 58C70 35 50 8 50 8Z" fill="#499D4A"/>
    </svg>
  ),
  Supabase: (props) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <path d="M56 8L12 58H46L36 92L88 42H52L56 8Z" fill="#3ECF8E"/>
    </svg>
  ),
  Vercel: (props) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <path d="M50 15L90 85H10L50 15Z" fill="#FFFFFF"/>
    </svg>
  ),
  Proxmox: (props) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="20" fill="#E57000"/>
      <path d="M25 25H75V42H43V58H75V75H25V25Z" fill="#FFFFFF"/>
    </svg>
  ),
  Samba4: (props) => (
    <svg className={props.className || "w-5 h-5"} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="20" fill="#C7254E"/>
      <text x="50%" y="62%" textAnchor="middle" fill="#FFFFFF" fontSize="32" fontWeight="bold" fontFamily="monospace">AD</text>
    </svg>
  ),
  REST: (props) => <Server className={props.className || "w-5 h-5 text-purple-400"} />,
  Microservices: (props) => <Layers className={props.className || "w-5 h-5 text-purple-400"} />,
  CICD: (props) => <Workflow className={props.className || "w-5 h-5 text-amber-400"} />,
  GitFlow: (props) => <GitBranch className={props.className || "w-5 h-5 text-amber-400"} />,
  TeamLead: (props) => <UserCheck className={props.className || "w-5 h-5 text-pink-400"} />,
  PRReview: (props) => <ShieldCheck className={props.className || "w-5 h-5 text-pink-400"} />,
  Architecture: (props) => <Cpu className={props.className || "w-5 h-5 text-pink-400"} />,
  Network: (props) => <Network className={props.className || "w-5 h-5 text-orange-400"} />,
  HardDrive: (props) => <HardDrive className={props.className || "w-5 h-5 text-orange-400"} />,
  Settings: (props) => <Settings className={props.className || "w-5 h-5 text-orange-400"} />
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

export default function Home() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "next" | "fullstack" | "infra" | "tools">("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  const filteredProjects =
    activeTab === "all"
      ? projectsList
      : projectsList.filter((p) => p.category === activeTab);

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
              <span>{t.nav.version}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.nav.status}</span>
            </div>
          </div>

          {/* Code IDE Tabs Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-xs font-mono">
            <a
              href="#hero"
              className="px-3 py-1.5 rounded hover:bg-slate-900 text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <FileCode2 className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.nav.tabs.hero}</span>
            </a>
            <a
              href="#habilidades"
              className="px-3 py-1.5 rounded hover:bg-slate-900 text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <FileCode2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.nav.tabs.stack}</span>
            </a>
            <a
              href="#proyectos"
              className="px-3 py-1.5 rounded hover:bg-slate-900 text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <FileCode2 className="w-3.5 h-3.5 text-purple-400" />
              <span>{t.nav.tabs.projects}</span>
            </a>
            <a
              href="#experiencia"
              className="px-3 py-1.5 rounded hover:bg-slate-900 text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <FileCode2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.nav.tabs.experience}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Senior Language Switcher Component */}
            <LanguageSelector />

            <a
              href="https://github.com/ragnarsson03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono transition-all border border-slate-700/80"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>{t.nav.githubBtn}</span>
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
              <span>{t.hero.badge}</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">
                {t.hero.tagline}
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-tight">
                {t.hero.name}
              </h2>
              <p className="text-blue-400 text-sm font-mono">
                {t.hero.subRole}
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
              {t.hero.bio}
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans max-w-2xl">
              {t.hero.leadership}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-lg shadow-blue-600/25 transition-all"
              >
                <Code2 className="w-4 h-4" />
                <span>{t.hero.exploreBtn}</span>
              </a>

              <a
                href="https://app-detector-de-voz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-400 font-mono text-xs font-semibold border border-emerald-500/30 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>{t.hero.demoBtn}</span>
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
                <span className="text-[10px] text-slate-500">{t.hero.console.header}</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-blue-400 font-bold">{t.hero.console.role}</span>
                    <span className="text-slate-500">{t.hero.console.roleActive}</span>
                  </div>
                  <p className="text-slate-200 text-xs font-sans font-semibold">{t.hero.console.roleTitle}</p>
                  <p className="text-[11px] text-slate-400">{t.hero.console.roleDesc}</p>
                </div>

                <div className="p-3 rounded bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-purple-400 font-bold">{t.hero.console.deployments}</span>
                    <span className="text-slate-500">{t.hero.console.deploymentsActive}</span>
                  </div>
                  <p className="text-slate-200 text-xs font-sans font-semibold">{t.hero.console.deploymentsTitle}</p>
                  <p className="text-[11px] text-slate-400">{t.hero.console.deploymentsDesc}</p>
                </div>

                <div className="p-3 rounded bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-orange-400 font-bold">{t.hero.console.infra}</span>
                    <span className="text-slate-500">{t.hero.console.infraActive}</span>
                  </div>
                  <p className="text-slate-200 text-xs font-sans font-semibold">{t.hero.console.infraTitle}</p>
                  <p className="text-[11px] text-slate-400">{t.hero.console.infraDesc}</p>
                </div>
              </div>

              <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span>{t.hero.console.execTime}</span>
                <span className="text-emerald-400 font-bold">{t.hero.console.verified}</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Complete Tech Stack Matrix with Logos */}
        <section id="habilidades" className="scroll-mt-24 space-y-8">
          <div>
            <span className="text-xs font-mono text-amber-400 block">{t.skills.tag}</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-sans">
              {t.skills.title}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-sans mt-1">
              {t.skills.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {skillCategoriesData.map((domain, idx) => (
              <motion.div
                key={domain.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="glass-cyber-card rounded-xl p-5 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${domain.color}`}>
                      // {domain.title[language]}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">DOM_NODE_{idx + 1}</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 pt-4">
                    {domain.items.map((item) => {
                      const LogoComponent = TechLogos[item.logoKey] || TechLogos.Settings;
                      return (
                        <div
                          key={item.name}
                          className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/90 hover:border-slate-700 transition-colors"
                        >
                          <div className="p-1.5 rounded bg-slate-900 shrink-0">
                            <LogoComponent className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-semibold text-slate-200 font-mono">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
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
                <span>{t.quote.title}</span>
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                {t.quote.subtitle}
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
              <span className="text-xs font-mono text-blue-400 block">{t.projects.tag}</span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-sans">
                {t.projects.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-sans mt-1">
                {t.projects.subtitle}
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
                {t.projects.filters.all}
              </button>
              <button
                onClick={() => setActiveTab("infra")}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === "infra"
                    ? "bg-orange-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t.projects.filters.infra}
              </button>
              <button
                onClick={() => setActiveTab("next")}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === "next"
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t.projects.filters.next}
              </button>
              <button
                onClick={() => setActiveTab("fullstack")}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === "fullstack"
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t.projects.filters.fullstack}
              </button>
              <button
                onClick={() => setActiveTab("tools")}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === "tools"
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t.projects.filters.tools}
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
                      {project.title[language]}
                    </h4>
                    <p className="text-slate-300 text-xs font-sans mt-2 leading-relaxed">
                      {project.description[language]}
                    </p>
                  </div>

                  {/* Screenshots Lightbox Gallery */}
                  {project.images && project.images.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        <ImageIcon className="w-3 h-3 text-blue-400" /> {t.projects.screenshots}
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {project.images.map((img, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedImage({ src: img.src, caption: img.caption[language] })}
                            className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-800 aspect-video bg-slate-950"
                          >
                            <img
                              src={img.src}
                              alt={img.caption[language]}
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] font-mono text-white text-center p-1">
                              {t.projects.inspect}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      {t.projects.specifications}
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300 font-sans">
                      {project.highlights[language].map((h, i) => (
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
                        <Lock className="w-3.5 h-3.5" /> {t.projects.privateRepo}
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
                          <span>{t.projects.sourceCode}</span>
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
                        <span>{t.projects.live}</span>
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
                        <span>{t.projects.api}</span>
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
            <span className="text-xs font-mono text-emerald-400 block">{t.experience.tag}</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-sans">
              {t.experience.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {experienceList.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-cyber-card rounded-xl p-6 border border-slate-800 space-y-4"
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-800">
                  <span>{exp.code}</span>
                  <span className="text-emerald-400">{exp.period}</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-sans">{exp.company}</h4>
                  <p className="text-xs text-blue-400 font-mono">{exp.badge[language]}</p>
                </div>
                <div className="space-y-2 text-xs text-slate-300 font-sans">
                  <p className="font-semibold text-slate-200">{exp.role[language]}</p>
                  <p className="text-slate-400">{exp.description[language]}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="glass-cyber-card rounded-xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <UserCheck className="w-5 h-5 text-blue-400" />
                <h4 className="text-base font-bold text-white font-sans">{t.experience.sisUnetiTitle}</h4>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {t.experience.sisUnetiDesc}
              </p>
            </div>

            <div className="glass-cyber-card rounded-xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TechLogos.Proxmox className="w-6 h-6" />
                  <h4 className="text-base font-bold text-white font-sans">{t.experience.misionRibasTitle}</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20 font-bold">PROXMOX VE</span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {t.experience.misionRibasDesc}
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
          <p>{t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ragnarsson03" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {t.footer.github}
            </a>
            <span>•</span>
            <a href="https://app-detector-de-voz.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {t.footer.liveSpeech}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

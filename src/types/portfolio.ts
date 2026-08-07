export type Language = "es" | "en";

export interface ProjectImage {
  src: string;
  caption: {
    es: string;
    en: string;
  };
}

export interface Project {
  id: string;
  nodeId: string;
  category: "next" | "fullstack" | "infra" | "tools";
  status: "STABLE_PRD" | "LIVE_ACCESS" | "ENTERPRISE_CORE" | "INFRA_CLUSTER";
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  highlights: {
    es: string[];
    en: string[];
  };
  tags: string[];
  githubUrl?: string;
  isPrivateGithub?: boolean;
  productionUrl?: string;
  demoUrl?: string;
  images?: ProjectImage[];
}

export interface ExperienceItem {
  id: string;
  code: string;
  period: string;
  badge: {
    es: string;
    en: string;
  };
  company: string;
  role: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export interface SkillItem {
  name: string;
  logoKey: string;
}

export interface SkillCategory {
  key: string;
  title: {
    es: string;
    en: string;
  };
  color: string;
  items: SkillItem[];
}

"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Check } from "lucide-react";

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-slate-950/90 p-1 rounded-lg border border-slate-800 text-xs font-mono">
      <div className="flex items-center gap-1 px-2 py-1 text-slate-400">
        <Globe className="w-3.5 h-3.5 text-blue-400" />
        <span className="hidden sm:inline">LANG:</span>
      </div>

      <button
        onClick={() => setLanguage("es")}
        className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 font-bold ${
          language === "es"
            ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30"
            : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
        }`}
        title="Cambiar a Español"
      >
        <span>🇪🇸</span>
        <span>ES</span>
        {language === "es" && <Check className="w-3 h-3 text-white" />}
      </button>

      <button
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 font-bold ${
          language === "en"
            ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30"
            : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
        }`}
        title="Switch to English"
      >
        <span>🇺🇸</span>
        <span>EN</span>
        {language === "en" && <Check className="w-3 h-3 text-white" />}
      </button>
    </div>
  );
};

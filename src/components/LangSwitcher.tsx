"use client";

import { useLanguage } from "@/context/LanguageContext";

export const LangSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="fixed bottom-6 right-6 flex gap-1 p-1 bg-slate-900/80 backdrop-blur-md border border-emerald-500/20 rounded-full z-[999] shadow-lg">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          language === "en"
            ? "bg-emerald-500 text-slate-900"
            : "text-slate-400 hover:text-emerald-400"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("id")}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          language === "id"
            ? "bg-emerald-500 text-slate-900"
            : "text-slate-400 hover:text-emerald-400"
        }`}
      >
        ID
      </button>
    </div>
  );
};

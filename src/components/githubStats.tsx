"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitGraph, BarChart3, Code2, Flame } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const GithubStats = () => {
  const username = "syahrullah26";
  const themeParams = `theme=tokyonight&bg_color=0f172a&title_color=10b981&text_color=94a3b8&hide_border=true`;

  const statsUrl = `https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&${themeParams}`;
  const stats2Url = `https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&${themeParams}`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0f172a&ring=10b981&fire=10b981&currStreakNum=10b981&sideNums=94a3b8&sideLabels=94a3b8&dates=94a3b8`;
  const langUrl = `https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&${themeParams}`;
  const langByRepoUrl = `https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&${themeParams}`;

  const { language } = useLanguage();
  const content =
    language === "en"
      ? {
          title: "My GitHub Contribution",
        }
      : {
          title: "Kontribusi GitHub Saya",
        };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="github">
      <div
        className="flex flex-col items-center mb-16 text-center"
        data-aos="fade-up"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
          <GitGraph size={18} />
          <span>{content.title}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Github <span className="text-emerald-400">Statistics</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div
          className="lg:col-span-8 group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-md p-2 hover:border-emerald-500/30 transition-all duration-500 shadow-xl"
          data-aos="fade-right"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <BarChart3 className="text-emerald-400" size={24} />
          </div>
          <img
            src={statsUrl}
            alt="GitHub Profile Details"
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
        </div>
        <div
          className="lg:col-span-4 group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-md p-2 hover:border-emerald-500/30 transition-all duration-500 shadow-xl"
          data-aos="fade-left"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <Flame className="text-orange-500" size={24} />
          </div>
          <img
            src={streakUrl}
            alt="GitHub Streak"
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
        </div>

        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-md p-2 hover:border-emerald-500/30 transition-all duration-500 shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src={langUrl}
              alt="Most Commit Languages"
              className="w-full h-auto rounded-2xl"
              loading="lazy"
            />
          </div>

          <div
            className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-md p-2 hover:border-emerald-500/30 transition-all duration-500 shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={langByRepoUrl}
              alt="Most Repo Languages"
              className="w-full h-auto rounded-2xl"
              loading="lazy"
            />
          </div>

          <div
            className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-md p-2 hover:border-emerald-500/30 transition-all duration-500 shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src={stats2Url}
              alt="Stats GitHub 2"
              className="w-full h-auto rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div
        className="mt-12 flex justify-center items-center gap-3 text-slate-500 text-sm italic"
        data-aos="fade-up"
      >
        <Code2 size={16} className="text-emerald-500" />
        <span>"Sometimes you gotta run before you can walk." – Tony Stark</span>
      </div>
    </section>
  );
};

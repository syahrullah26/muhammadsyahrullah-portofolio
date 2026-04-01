"use client";

import React from "react";

export const TechStack = () => {
  const skills = [
    { id: "html", name: "HTML5" },
    { id: "css", name: "CSS3" },
    { id: "javascript", name: "JavaScript" },
    { id: "python", name: "Python" },
    { id: "tailwind", name: "Tailwind" },
    { id: "bootstrap", name: "Bootstrap" },
    { id: "react", name: "React" },
    { id: "nextjs", name: "Next.js" },
    { id: "vue", name: "Vue.js" },
    { id: "nuxtjs", name: "Nuxt.js" },
    { id: "laravel", name: "Laravel" },
    { id: "mysql", name: "MySQL" },
    { id: "git", name: "Git" },
    { id: "typescript", name: "TypeScript" },
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div data-aos="fade-up">
        <h3 className="text-xl font-semibold mb-8 text-slate-300 flex items-center gap-2">
          <span className="w-8 h-px bg-emerald-500"></span>
          Tech Stack
        </h3>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 p-8 bg-slate-900 rounded-3xl border border-emerald-500/30">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="relative">
              <img
                src={`https://skillicons.dev/icons?i=${skill.id}`}
                alt={skill.name}
                className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <span className="mt-3 text-xs md:text-sm font-medium text-slate-400 group-hover:text-emerald-400 transition-colors uppercase tracking-wider">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

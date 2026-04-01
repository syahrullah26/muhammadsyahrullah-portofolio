import React from "react";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

export const TechStack = ({ skills }: { skills: Skill[] }) => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div data-aos="fade-up">
        <h3 className="text-xl font-semibold mb-8 text-slate-300 flex items-center gap-2">
          <span className="w-8 h-px bg-emerald-500"></span>
          Tech Stack
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-slate-300 text-sm font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

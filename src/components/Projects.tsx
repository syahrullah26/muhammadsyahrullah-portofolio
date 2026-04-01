import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold mb-4 italic text-white">
            / Featured Projects
          </h2>
          <div className="h-1 w-12 bg-emerald-500 rounded-full mb-6"></div>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={project.id}
              target="_blank"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-slate-900 border border-slate-800 p-4 rounded-2xl hover:border-emerald-500/50 transition-colors"
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider font-bold text-slate-500 py-3 px-3 rounded-2xl border border-slate-500 hover:border-emerald-500 hover:text-emerald-500 hover:bg-slate-800/80 transition-all text-center"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

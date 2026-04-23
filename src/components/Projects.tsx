"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectsData } from "@/constants/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export const Projects = () => {
  const { language } = useLanguage();
  const projects = ProjectsData[language as keyof typeof ProjectsData];
  const content =
    language === "en"
      ? { title: "Featured Projects" }
      : { title: "Proyek Unggulan" };
  return (
    <section id="projects" className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        {" "}
        <div>
          <h2 className="text-3xl font-bold mb-4 italic text-white">
            / {content.title}
          </h2>
          <div className="h-1 w-12 bg-emerald-500 rounded-full mb-10"></div>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-slate-900 border border-slate-800 p-4 rounded-2xl hover:border-emerald-500/50 transition-colors h-full"
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
                      className="text-[10px] uppercase tracking-wider font-bold text-slate-500 py-1.5 px-3 rounded-full border border-slate-500 hover:border-emerald-500 hover:text-emerald-500 hover:bg-slate-800/80 transition-all text-center"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #64748b !important;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #10b981 !important;
        }
      `}</style>
    </section>
  );
};

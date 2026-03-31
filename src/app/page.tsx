"use client";

import React from "react";
import { Footer } from "@/components/footer";

const projects = [
  {
    id: 1,
    title: "Dewa United Store Redesign",
    description:
      "Membangun ulang UI dari Dewa United Store untuk meningkatkan pengalaman pengguna.",
    tech: ["Nuxt.js", "Tailwind", "Laravel"],
    image: "projects/du-store-redesign.png",
    link: "https://dewaunitedstore.vercel.app/",
  },
  {
    id: 2,
    title: "Project Manager Dashboard",
    description:
      "Dashboard interaktif untuk mengelola dan mentracking project dengan efisiensi tinggi.",
    tech: ["Vue.Js", "TypeScript", "Laravel"],
    image: "projects/pms-dashboard.png",
    link: "https://github.com/syahrullah26/project-management-system",
  },
  {
    id: 3,
    title: "Dewa United Overtime",
    description: "Aplikasi pencatatan overtime karyawan Dewa United.",
    tech: ["Nuxt.js", "MySQL", "Laravel"],
    image: "projects/du-overtime.png",
    link: "https://github.com/syahrullah26/du-overtime",
  },
  {
    id: 4,
    title: "GPM Finance & Sales Dashboard",
    description:
      "Aplikasi pencatatan pengeluaran dan pemasukan dari PT.Gangsar Purnama Mandiri.",
    tech: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
    image: "projects/gpm.png",
    link: "https://github.com/syahrullah26/GPM-Sales-Finance-System",
  },
];

const skills = [
  {
    name: "React",
    icon: (
      <svg
        viewBox="-11.5 -10.232 23 20.463"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 fill-[#61DAFB]"
      >
        <circle r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 fill-current"
      >
        <circle cx="90" cy="90" r="90" fill="black" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="white"
        />
        <rect x="115" y="54" width="12" height="72" fill="white" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="#3178C6"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path d="M0 0h24v24H0V0zm22.434 19.98c-.144-1.045-1.002-1.74-2.508-2.016-1.5-.275-1.92-.611-1.92-1.127 0-.444.33-.78 1.056-.78.72 0 1.152.264 1.416.792h2.244c-.264-1.572-1.524-2.58-3.48-2.58-2.112 0-3.516 1.152-3.516 2.82 0 1.62 1.056 2.472 3.192 2.892 1.62.312 1.944.756 1.944 1.224 0 .588-.6 1.032-1.512 1.032-.984 0-1.632-.42-1.932-1.224h-2.376c.324 1.968 1.764 3.06 4.152 3.06 2.508 0 3.972-1.176 3.972-3.084zM10.2 12h-2.4V22h2.4V12z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="#06B6D4"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.201 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.537 6.182 15.176 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.712 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.537 13.382 9.176 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Laravel",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="#FF2D20"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path d="M14.348 14.851c0 .469-.381.85-.851.85h-3.402a.85.85 0 0 1-.85-.85V10.6c0-.469.381-.851.85-.851h3.402c.47 0 .851.382.851.851v4.251zM16.475 7.18l-5.102-2.946a.843.843 0 0 0-.85 0L5.42 7.18a.851.851 0 0 0-.425.736v5.892c0 .307.164.59.425.737l5.102 2.945c.132.076.279.114.425.114.147 0 .293-.038.425-.114l5.102-2.945c.261-.147.426-.43.426-.737V7.916a.851.851 0 0 0-.426-.736zm-5.527-1.47l4.252 2.454v4.908l-4.252 2.455-4.251-2.455V8.164l4.251-2.454z" />
      </svg>
    ),
  },
  {
    name: "React Native",
    icon: (
      <svg
        viewBox="-11.5 -10.232 23 20.463"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 fill-[#00D8FF]"
      >
        <circle r="2.05" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Vue.js",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path
          d="M12 4.354l-2.618 4.534H6.764L12 17.646l5.236-8.758h-2.618L12 4.354z"
          fill="#41B883"
        />
        <path
          d="M12 4.354l-1.309 2.267H9.382L12 10.838l2.618-4.217h-1.309L12 4.354z"
          fill="#35495E"
        />
      </svg>
    ),
  },
  {
    name: "Nuxt.js",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path d="M12 4L3 19.5h18L12 4zm0 6l5 8.5H7l5-8.5z" fill="#00DC82" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="#F7DF1E"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path d="M0 0h24v24H0V0zm19.98 19.98c-.144-1.045-1.002-1.74-2.508-2.016-1.5-.275-1.92-.611-1.92-1.127 0-.444.33-.78 1.056-.78.72 0 1.152.264 1.416.792h2.244c-.264-1.572-1.524-2.58-3.48-2.58-2.112 0-3.516 1.152-3.516 2.82 0 1.62 1.056 2.472 3.192 2.892 1.62.312 1.944.756 1.944 1.224 0 .588-.6 1.032-1.512 1.032-.984 0-1.632-.42-1.932-1.224h-2.376c.324 1.968 1.764 3.06 4.152 3.06 2.508 0 3.972-1.176 3.972-3.084zM12 12h-2.4v10H12V12z" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="#4479A1"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path d="M18.42 14.58c0 2.412-2.52 4.368-5.628 4.368-3.108 0-5.628-1.956-5.628-4.368s2.52-4.368 5.628-4.368 5.628 1.956 5.628 4.368zm-5.628-3.36c-2.34 0-4.236 1.416-4.236 3.168s1.896 3.168 4.236 3.168 4.236-1.416 4.236-3.168-1.896-3.168-4.236-3.168z" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="#F05032"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path d="M23.546 10.93L13.067.452a1.503 1.503 0 0 0-2.128 0L8.711 2.68l3.372 3.371a3.016 3.016 0 0 1 4.596 3.753l3.167 3.167a3.017 3.017 0 0 1 3.7 4.959c-.063.063-.129.124-.197.182l.003.003-3.17-3.17a3.016 3.016 0 0 1-3.753-4.596l-3.167-3.167a3.017 3.017 0 0 1-4.909 3.753l-3.372-3.371L.452 10.93a1.501 1.501 0 0 0 0 2.128l10.478 10.478a1.502 1.502 0 0 0 2.128 0l10.488-10.488a1.503 1.503 0 0 0 0-2.118z" />
      </svg>
    ),
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans selection:bg-emerald-500/30">
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <div
          data-aos="fade-down"
          className="mb-4 inline-block px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium"
        >
          Hello, World!
        </div>
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-8">
            Muhammad Syahrullah
          </span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed"
        >
          Seseorang yang sangat tertarik menjadi Web Developer.
        </p>
        <div data-aos="fade-up" data-aos-delay="400" className="flex gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-lg transition-all transform hover:-translate-y-1"
          >
            Lihat Proyek
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-slate-700 hover:bg-slate-800  hover:border-emerald-400 rounded-lg transition-all"
          >
            Kontak Saya
          </a>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent "></div>
      </section>

      <section
        id="about"
        className="py-24 px-6 max-w-5xl mx-auto rounded-3xl bg-slate-800/20 border border-slate-700/30"
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div data-aos="fade-right" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4 italic text-white">
                / About Me
              </h2>
              <div className="h-1 w-12 bg-emerald-500 rounded-full mb-6"></div>{" "}
            </div>

            <p className="text-slate-400 leading-relaxed text-lg text-justify">
              Saya mulai tertarik menjadi web developer sejak 2021. Berawal dari
              rasa penasaran bagaimana sebuah website bekerja, sekarang saya
              fokus membangun aplikasi web yang modern, performant, dan
              scalable.
            </p>
            <div className="flex pt-4">
              <a
                href="/cv_muhammadsyahrullah.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-emerald-400 py-4 px-8 border border-emerald-500/30 rounded-xl hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]"
              >
                <span>View Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="relative group flex justify-center"
          >
            <div className="relative w-full max-w-[350px] aspect-square bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-2xl">
              <img
                src="/ms.jpg"
                alt="Muhammad Syahrullah"
                className="object-cover w-full h-full opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section id="projects" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 data-aos="fade-right" className="text-4xl font-bold">
              Featured Projects
            </h2>
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

      <Footer />
    </div>
  );
}

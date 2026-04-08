import React, { useState } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
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

export const TextContent = () => {
  const [language, setLanguage] = useState("en");

  const content =
    language === "en"
      ? {
          hero: {
            projectBtn: "View Projects",
            contactBtn: "Contact Me",
          },
          about: {
            title: "/ About Me",
            description:
              "I'm a web developer with a passion for building modern, performant, and scalable web applications. I started my journey in 2021, driven by curiosity about how websites work. Now, I'm focused on creating impactful digital experiences.",
            resumeBtn: "View Resume",
            careerBtn: "View Career",
          },
          projects: {
            title: "/ Featured Projects",
          },
        }
      : {
          hero: {
            projectBtn: "Lihat Project",
            contactBtn: "Kontak Saya",
          },
          about: {
            title: "/ Tentang Saya",
            description:
              "Saya mulai tertarik menjadi web developer sejak 2021. Berawal dari rasa penasaran bagaimana sebuah website bekerja, sekarang saya fokus membangun aplikasi web yang modern, performant, dan scalable.",
            resumeBtn: "Lihat Resume",
            careerBtn: "Lihat Karir",
          },
          projects: {
            
          },
        };
};

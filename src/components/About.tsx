"use client";

import React, { useState } from "react";
import CareerModal from "./CareerModal";
import { useLanguage } from "@/context/LanguageContext";

export const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  const content =
    language === "en"
      ? {
          title: "/ About Me",
          description:
            "I'm a web developer with a passion for building modern, performant, and scalable web applications. I started my journey in 2021, driven by curiosity about how websites work. Now, I'm focused on creating impactful digital experiences.",
          resumeBtn: "View Resume",
          careerBtn: "View Career",
        }
      : {
          title: "/ Tentang Saya",
          description:
            "Saya mulai tertarik menjadi web developer sejak 2021. Berawal dari rasa penasaran bagaimana sebuah website bekerja, sekarang saya fokus membangun aplikasi web yang modern, performant, dan scalable.",
          resumeBtn: "Lihat Resume",
          careerBtn: "Lihat Karir",
        };

  return (
    <section
      id="about"
      className="relative py-24 px-6 max-w-5xl mx-auto rounded-3xl bg-slate-800/20 border border-slate-700/30"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div data-aos="fade-right" className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 italic text-white">
              {content.title}
            </h2>
            <div className="h-1 w-12 bg-emerald-500 rounded-full mb-6"></div>
          </div>

          <p className="text-slate-400 leading-relaxed text-lg text-justify">
            {content.description}
          </p>

          <div className="flex pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <a
                href="/cv_muhammadsyahrullah.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 text-sm uppercase tracking-widest font-bold text-emerald-400 py-4 px-8 border border-emerald-500/30 rounded-xl hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]"
              >
                <span>{content.resumeBtn}</span>
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

              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-2 text-sm uppercase tracking-widest font-bold bg-emerald-500 text-slate-900 py-4 px-8 border border-emerald-500/30 rounded-xl hover:bg-slate-800/20 hover:text-emerald-400 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] cursor-pointer"
              >
                <span>{content.careerBtn}</span>
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
              </button>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" className="relative group flex justify-center">
          <div className="relative w-full max-w-[350px] aspect-square bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-2xl">
            <img
              src="/ms.jpg"
              alt="Muhammad Syahrullah"
              className="object-cover w-full h-full opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      <CareerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

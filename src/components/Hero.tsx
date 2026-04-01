"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 text-center overflow-hidden bg-slate-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-12 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs md:text-sm font-medium backdrop-blur-md shadow-lg shadow-emerald-500/5"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for New Projects
      </motion.div>
      <div
        className="relative z-10 mb-6"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <span className="block text-slate-500 text-lg md:text-2xl font-light tracking-[0.3em] uppercase mb-2">
          Hi, I'm
        </span>
        <h3 className="text-6xl md:text-8xl lg:text-[5rem] font-black tracking-tighter text-emerald-400 leading-[0.9] select-none">
          Muhammad Syahrullah
        </h3>
      </div>
      <div
        className="h-12 md:h-16 flex items-center justify-center mb-16"
        data-aos="fade-up"
      >
        <TypeAnimation
          sequence={[
            "Web Developer",
            2000,
            "Always Learning",
            2000,
            "Working at Dewa United Indonesia",
            2000,
            "Building Modern Web Apps",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-3xl font-bold text-slate-400 italic"
        />
      </div>
      <div
        className="flex flex-col sm:flex-row justify-center gap-5 md:gap-8 relative z-20"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <a
          href="#projects"
          className="group relative px-10 py-4 bg-emerald-500 text-slate-950 font-bold rounded-xl transition-all hover:scale-105 shadow-[0_8px_0_rgb(5,150,105)] active:shadow-none active:translate-y-2 text-center"
        >
          Lihat Proyek
        </a>
        <a
          href="#contact"
          className="px-10 py-4 border border-emerald-500/30 text-emerald-400 font-bold rounded-xl hover:bg-emerald-500/10 transition-all backdrop-blur-sm text-center"
        >
          Kontak Saya
        </a>
      </div>
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
    </section>
  );
};

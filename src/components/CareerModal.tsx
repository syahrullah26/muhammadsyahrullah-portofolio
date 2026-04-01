"use client";

import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface CareerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CareerModal = ({ isOpen, onClose }: CareerModalProps) => {
  const durationText = useMemo(() => {
    const startDate = new Date(2025, 11, 1);
    const today = new Date();

    const years = today.getFullYear() - startDate.getFullYear();
    const months = today.getMonth() - startDate.getMonth() + years * 12;

    if (months < 1) return "Baru bergabung";
    if (months >= 12) {
      const y = Math.floor(months / 12);
      const m = months % 12;
      return `${y} thn ${m > 0 ? `${m} bln` : ""}`;
    }
    return `${months} bln`;
  }, []);

  const responsibilities = [
    "Full-Stack Engineering: Architect and develop dynamic web features using Vue.js, Nuxt.js, React Native, NextJs, and NestJS.",
    "System Maintenance & Stability: Ensure 24/7 website availability by performing regular system audits and security patches.",
    "Database Architecture: Optimize and manage MySQL databases, ensuring data integrity and efficient query execution.",
    "UI/UX Optimization: Continuous refinement of web interfaces to ensure mobile responsiveness and cross-browser compatibility.",
    "Dynamic Content Management: Coordinate with creative teams to execute timely content updates in a fast-paced environment.",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[99]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-slate-900 border border-emerald-500/20 rounded-2xl p-6 md:p-8 z-[100] shadow-2xl shadow-emerald-500/10 max-h-[90vh] overflow-y-auto custom-scrollbar"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-slate-400 hover:text-emerald-400 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                <img
                  src="/du-universal.png"
                  alt="Dewa United"
                  className="w-full h-full object-contain rounded-xl bg-white/5 p-2 border border-white/10"
                />
              </div>
              <div className="pt-1">
                <h2 className="text-2xl font-bold text-white leading-tight">
                  IT Web Developer
                </h2>
                <p className="text-emerald-400 font-medium text-lg">
                  Dewa United · Kontrak
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-white/5 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Calendar size={18} className="text-emerald-400" />
                </div>
                <span>Des 2025 - Saat ini ({durationText})</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <MapPin size={18} className="text-emerald-400" />
                </div>
                <span>Tangerang Selatan, Banten</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2 border-b border-emerald-500/10 pb-2">
                <Briefcase size={20} className="text-emerald-400" />
                Core Responsibilities
              </h3>
              <div className="space-y-4">
                {responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <CheckCircle2
                      className="text-emerald-500 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-emerald-500/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-emerald-500 text-slate-900 font-bold rounded-xl hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all text-sm shadow-lg shadow-emerald-500/20"
              >
                Close Details
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CareerModal;

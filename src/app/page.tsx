import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/footer";
import { About } from "@/components/About";
// import { TechStack } from "@/components/Skills";
import { TechStack } from "@/components/TechStack";
import { GithubSection } from "@/components/GithubSection";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Muhammad Syahrullah | Web Developer",
  description: "Portofolio Muhammad Syahrullah.",
};

export default function PortfolioPage() {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen font-sans selection:bg-emerald-500/30">
      <Hero />
      <About />
      <TechStack />
      <GithubSection />
      <Projects />
      <Footer />
    </main>
  );
}

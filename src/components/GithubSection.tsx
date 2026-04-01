import React from "react";
import { GitHubActivity } from "@/components/githubCalendar";
import { GithubStats } from "@/components/githubStats";

export const GithubSection = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold mb-4 italic text-white">
          / Github Activity
        </h2>
        <div className="h-1 w-12 bg-emerald-500 rounded-full mb-6"></div>
      </div>
      <div className="space-y-6 border border-emerald-500/30 rounded-3xl p-6 bg-slate-800/20">
        <div className="overflow-hidden p-6 bg-slate-900/40 rounded-3xl">
          <GitHubActivity />
        </div>
        <div className="space-y-6 overflow-hidden p-6 bg-slate-900/40 rounded-3xl">
          <GithubStats />
        </div>
      </div>
    </section>
  );
};
